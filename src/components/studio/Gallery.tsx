import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { WORKS, GALLERY_FILTERS } from './data';

const Gallery = () => {
  const [filter, setFilter] = useState<string>('Все');
  const [active, setActive] = useState<number | null>(null);

  const items = WORKS.filter((w) => filter === 'Все' || w.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-hand text-3xl text-secondary">наши работы</span>
            <h2 className="mt-1 text-4xl md:text-5xl font-display font-black">Галерея</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((w) => {
            const idx = WORKS.indexOf(w);
            return (
              <button
                key={w.url}
                onClick={() => setActive(idx)}
                className="group relative mb-5 block w-full overflow-hidden rounded-3xl border border-border animate-fade-in"
              >
                <img
                  src={w.url}
                  alt={w.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div className="text-left">
                    <span className="text-xs text-secondary font-semibold">{w.category}</span>
                    <p className="font-display font-bold">{w.title}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-md grid place-items-center p-4 animate-fade-in"
        >
          <button
            className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full glass border border-border"
            onClick={() => setActive(null)}
            aria-label="Закрыть"
          >
            <Icon name="X" size={22} />
          </button>
          <div className="max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={WORKS[active].url}
              alt={WORKS[active].title}
              className="w-full rounded-3xl neon-border animate-scale-in"
            />
            <div className="mt-4 text-center">
              <span className="text-sm text-secondary font-semibold">
                {WORKS[active].category}
              </span>
              <p className="font-display font-bold text-xl">{WORKS[active].title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
