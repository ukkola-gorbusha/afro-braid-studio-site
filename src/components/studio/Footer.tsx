import Icon from '@/components/ui/icon';
import { NAV_LINKS } from './data';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-xl font-display font-extrabold"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground rotate-6">
            <Icon name="Sparkle" size={20} />
          </span>
          <span className="text-gradient">dobro_braids</span>
        </button>

        <nav className="flex flex-wrap justify-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">© 2026 dobro_braids</p>
      </div>
    </footer>
  );
};

export default Footer;
