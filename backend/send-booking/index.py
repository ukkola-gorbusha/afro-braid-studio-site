import json
import os

import psycopg2
import requests


def handler(event: dict, context) -> dict:
    """Принимает заявку на запись, сохраняет в БД и уведомляет в Telegram и на email."""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = str(body.get('name', '')).strip()
    phone = str(body.get('phone', '')).strip()
    date = str(body.get('date', '')).strip()
    time = str(body.get('time', '')).strip()
    service = str(body.get('service', '')).strip()

    if not name or not phone or not date or not time or not service:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Заполните все поля'}),
        }

    schema = os.environ['MAIN_DB_SCHEMA']
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {schema}.bookings (name, phone, booking_date, booking_time, service) "
        f"VALUES (%s, %s, %s, %s, %s) RETURNING id",
        (name, phone, date, time, service),
    )
    booking_id = cur.fetchone()[0]

    message_text = (
        f"✨ Новая заявка с сайта afro-braid-studio\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"📅 Дата: {date}\n"
        f"⏰ Время: {time}\n"
        f"💎 Услуга: {service}"
    )

    telegram_sent = False
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if bot_token and chat_id:
        try:
            tg_resp = requests.post(
                f'https://api.telegram.org/bot{bot_token}/sendMessage',
                json={'chat_id': chat_id, 'text': message_text},
                timeout=8,
            )
            telegram_sent = tg_resp.ok
        except requests.RequestException:
            telegram_sent = False

    email_sent = False
    resend_key = os.environ.get('RESEND_API_KEY')
    if resend_key:
        try:
            email_html = (
                f"<h2>Новая заявка с сайта afro-braid-studio</h2>"
                f"<p><b>Имя:</b> {name}</p>"
                f"<p><b>Телефон:</b> {phone}</p>"
                f"<p><b>Дата:</b> {date}</p>"
                f"<p><b>Время:</b> {time}</p>"
                f"<p><b>Услуга:</b> {service}</p>"
            )
            mail_resp = requests.post(
                'https://api.resend.com/emails',
                headers={'Authorization': f'Bearer {resend_key}', 'Content-Type': 'application/json'},
                json={
                    'from': 'Afro Braid Studio <onboarding@resend.dev>',
                    'to': ['asdxone@gmail.com, 'dobro8live@gmail.com'],
                    'subject': f'Новая заявка: {name}',
                    'html': email_html,
                },
                timeout=10,
            )
            email_sent = mail_resp.ok
        except requests.RequestException:
            email_sent = False

    cur.execute(
        f"UPDATE {schema}.bookings SET telegram_sent = %s, email_sent = %s WHERE id = %s",
        (telegram_sent, email_sent, booking_id),
    )
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({
            'success': True,
            'booking_id': booking_id,
            'telegram_sent': telegram_sent,
            'email_sent': email_sent,
        }),
    }