import Icon from '@/components/ui/icon';

const CONTACTS = [
  { icon: 'MapPin', label: 'Адрес', value: 'г. Хабаровск, ул. Суворова 28Б/3 офис 81' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (994) 067-43-49' },
  { icon: 'Clock', label: 'Часы работы', value: 'Ежедневно 10:00 — 20:00' },
];

const SOCIALS = [
  { icon: 'Instagram', label: 'Instagram', href: 'https://www.instagram.com/anastasiya_dobrobraids?igsh=MWlxeGUzNzZiY3E0bg=='},
  { icon: 'Send', label: 'Telegram', href: 'https://t.me/anastasiya_dobrobraids' },
  { icon: 'MessageCircle', label: 'WhatsApp', href: 'https://wa.clck.bar/79940674349' },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-hand text-3xl text-secondary">на связи</span>
            <h2 className="mt-1 text-4xl md:text-5xl font-display font-black">Контакты</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              Приходи в гости или напиши нам — поможем выбрать образ и запишем на удобное время.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACTS.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/15 text-primary shrink-0">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <div>
                    <div className="text-sm text-muted-foreground">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {SOCIALS.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon name={s.icon} size={20} />
                  </a>
                ) : (
                  <button
                    key={s.label}
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon name={s.icon} size={20} />
                  </button>
                )
              )}
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-border h-80 lg:h-full min-h-[320px] neon-border">
            <iframe
              title="Карта студии"
              className="w-full h-full grayscale-[0.3]"
              src="https://yandex.ru/map-widget/v1/?ll=135.104400%2C48.394118&z=17"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;