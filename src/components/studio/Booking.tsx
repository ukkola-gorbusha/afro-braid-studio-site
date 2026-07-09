import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { SERVICE_OPTIONS, TIME_SLOTS } from './data';
import { toast } from '@/hooks/use-toast';

const BOT_TOKEN = '8959184220:AAFFdBhAoOcXQRLCpxDeQVUdohyAU2McofUН';
const CHAT_ID = '5042445572';

const Booking = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const valid = service && date && time && name.trim() && phone.trim().length >= 6;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) {
      toast({ title: 'Заполните все поля', description: 'Проверьте форму записи.' });
      return;
    }

    const message = `✨ Новая заявка с сайта afro-braid-studio\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📅 Дата: ${date}\n⏰ Время: ${time}\n💎 Услуга: ${service}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
    }

    setDone(true);
    toast({ title: 'Заявка принята! 💜', description: 'Мы свяжемся с вами для подтверждения.' });
  };

  return (
    <section id="booking" className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border glass p-6 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="absolute -top-16 -right-10 w-60 h-60 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative">
            <span className="font-hand text-3xl text-secondary">online</span>
            <h2 className="mt-1 text-4xl md:text-5xl font-display font-black">
              Запишись
              <br />
              <span className="text-gradient">за минуту</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-sm">
              Выбери услугу, удобную дату и время — остальное сделаем мы.
              Подтвердим запись по телефону.
            </p>

            <ul className="mt-6 space-y-3">
              {['Бесплатная консультация по образу', 'Гипоаллергенный канекалон', 'Уютная атмосфера и чай'].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-primary/20 text-primary shrink-0">
                      <Icon name="Check" size={14} />
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative">
            {done ? (
              <div className="rounded-3xl bg-card border border-border p-10 text-center animate-scale-in">
                <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-primary/20 text-primary">
                  <Icon name="PartyPopper" size={32} />
                </div>
                <h3 className="mt-5 text-2xl font-display font-bold">Заявка отправлена!</h3>
                <p className="mt-2 text-muted-foreground">
                  {name}, скоро позвоним для подтверждения.
                </p>
                <button
                  onClick={() => {
                    setDone(false);
                    setService('');
                    setDate('');
                    setTime('');
                    setName('');
                    setPhone('');
                  }}
                  className="mt-6 rounded-full border border-border px-6 py-2.5 font-medium hover:bg-muted transition-colors"
                >
                  Записать ещё
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-3xl bg-card border border-border p-6 md:p-8 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Услуга</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-2xl bg-muted border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Выберите услугу</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Дата</label>
                    <input
                      type="date"
                      min={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-2xl bg-muted border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Время</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-2xl bg-muted border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                    >
                      <option value="">—</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Имя</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как вас зовут?"
                    className="w-full rounded-2xl bg-muted border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-2xl bg-muted border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!valid}
                  className="w-full rounded-2xl bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed neon-border"
                >
                  Записаться
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;