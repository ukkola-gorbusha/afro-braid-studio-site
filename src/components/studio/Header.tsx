import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { NAV_LINKS } from './data';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 border-b border-border' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 text-xl font-display font-extrabold"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground rotate-6">
            <Icon name="Sparkle" size={20} />
          </span>
          <span className="text-gradient">dobro_braids</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('booking')}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity neon-border"
        >
          Записаться
          <Icon name="ArrowRight" size={16} />
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-xl bg-muted"
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden container mt-3 animate-fade-in">
          <div className="glass rounded-3xl p-3 border border-border flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="text-left px-4 py-3 rounded-2xl font-medium hover:bg-muted transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('booking')}
              className="mt-1 rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold"
            >
              Записаться онлайн
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
