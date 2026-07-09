import json
import os

import requests


def handler(event: dict, context) -> dict:
    """Принимает заявку на запись с сайта и отправляет уведомление в Telegram."""
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

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    message = (
        f"✨ Новая заявка с сайта afro-braid-studio\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"📅 Дата: {date}\n"
        f"⏰ Время: {time}\n"
        f"💎 Услуга: {service}"
    )

    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'

    try:
        resp = requests.post(
            url,
            json={'chat_id': chat_id, 'text': message},
            timeout=15,
        )
    except requests.RequestException as e:
        return {
            'statusCode': 502,
            'headers': headers,
            'body': json.dumps({'error': 'Не удалось связаться с Telegram', 'details': str(e)}),
        }

    if not resp.ok:
        return {
            'statusCode': 502,
            'headers': headers,
            'body': json.dumps({'error': 'Не удалось отправить уведомление в Telegram', 'details': resp.text}),
        }

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True}),
    }
