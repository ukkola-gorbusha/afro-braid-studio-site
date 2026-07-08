import Icon from '@/components/ui/icon';
import { SERVICES } from './data';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="font-hand text-3xl text-secondary">что мы умеем</span>
          <h2 className="mt-1 text-4xl md:text-5xl font-display font-black">
            Услуги студии
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Выбирай свой образ : 
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              onClick={() => scrollTo('booking')}
              className="group cursor-pointer rounded-3xl bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={s.icon} size={26} />
              </div>
              <h3 className="mt-5 text-xl font-display font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-lg font-display font-extrabold text-gradient">
                  {s.price}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;