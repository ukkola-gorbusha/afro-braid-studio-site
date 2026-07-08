const ITEMS = ['Афрокосы', 'Брейды', 'Дреды', 'Зизи', 'Кудри', 'Цветные пряди', 'Детское плетение'];

const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="py-6 border-y border-border overflow-hidden bg-primary/10">
      <div className="flex w-max marquee-track">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 shrink-0">
            <span className="font-display font-extrabold text-2xl md:text-3xl text-gradient">
              {item}
            </span>
            <span className="text-secondary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
