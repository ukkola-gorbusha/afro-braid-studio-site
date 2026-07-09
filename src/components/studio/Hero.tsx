import Icon from '@/components/ui/icon';
import { WORKS } from './data';

const heroImages = WORKS.filter((w) => w.type !== 'video');

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl"
        style={{ animation: 'float-blob 9s ease-in-out infinite' }}
      />
      <div
        className="absolute top-40 -right-16 w-72 h-72 rounded-full bg-secondary/25 blur-3xl"
        style={{ animation: 'float-blob 11s ease-in-out infinite' }}
      />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-2 text-sm text-secondary font-medium">
            <Icon name="Sparkles" size={16} />
            Студия креативного плетения
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[0.95] break-words">
            Плетём
            <br />
            <span className="text-gradient">яркие эмоции</span>
            <br />
            на твоих волосах
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Афрокосы, брейды, дреды.
            Смелые образы, которые запоминаются.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('booking')}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity neon-border"
            >
              Записаться онлайн
              <Icon name="CalendarHeart" size={18} />
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold hover:bg-muted transition-colors"
            >
              Смотреть работы
              <Icon name="Images" size={18} />
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4 sm:gap-8">
            <div className="min-w-0">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">лет опыта</div>
            </div>
            <div className="w-px h-10 bg-border shrink-0" />
            <div className="min-w-0">
             <div className="text-lg sm:text-3xl font-display font-extrabold text-gradient whitespace-nowrap">персональный</div>
              <div className="text-xs sm:text-sm text-muted-foreground">подход</div>
            </div>
            <div className="w-px h-10 bg-border shrink-0" />
            <div className="min-w-0">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient">♾️</div>
              <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">цветов</div>
            </div>
          </div>
        </div>

        <div className="relative animate-scale-in max-w-full overflow-hidden px-2 sm:px-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src={heroImages[0].url}
              alt={heroImages[0].title}
              className="rounded-3xl object-cover w-full h-48 sm:h-72 md:h-96 neon-border rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
            />
            <img
              src={heroImages[1].url}
              alt={heroImages[1].title}
              className="rounded-3xl object-cover w-full h-48 sm:h-72 md:h-96 mt-6 sm:mt-10 rotate-[3deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass border border-border rounded-2xl px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 whitespace-nowrap max-w-[90%]">
            <Icon name="Star" className="text-primary shrink-0" size={18} />
            <span className="font-hand text-lg sm:text-2xl truncate">Твой новый вайб ждёт</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;