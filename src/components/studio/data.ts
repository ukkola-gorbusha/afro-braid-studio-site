export const NAV_LINKS = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'booking', label: 'Запись' },
  { id: 'contacts', label: 'Контакты' },
];

export type Service = {
  icon: string;
  title: string;
  desc: string;
  price: string;
  duration: string;
};

export const SERVICES: Service[] = [
  {
    icon: 'Sparkles',
    title: 'Афрокосы & Зизи',
    desc: 'Классические косы с ярким характером. Лёгкие тонкие косички на каждый день',
    price: 'от 5 500 ₽',
    duration: '4–6 ч',
  },
  {
    icon: 'Zap',
    title: 'Брейды',
    desc: 'Косички вдоль головы с чёткими линиями и проборами с канекалон и без.',
    price: 'от 600 ₽',
    duration: '2–4 ч',
  },
  {
    icon: 'Flame',
    title: 'Дреды DE/SE',
    desc: 'Двойные и одинарные дреды любой длины и палитры.',
    price: 'от 5 500 ₽',
    duration: '4–6 ч',
  },
  {
    icon: 'Waves',
    title: 'Афрокудри',
    desc: 'Причёска из мелких завитков с «вау» эффектом.',
    price: 'от 8000 ₽',
    duration: '4–6 ч',
  },
  {
    icon: 'Star',
    title: 'Детское плетение',
    desc: 'Яркие косички для маленьких принцесс.',
    price: 'от 2 500 ₽',
    duration: '2–6 ч',
  },
  {
    icon: 'Scissors',
    title: 'Расплетение & уход',
    desc: 'Аккуратно снимем и восстановим ваши волосы.',
    price: 'от 3000 ₽',
    duration: '1-3 ч',
  },
];

export type Work = {
  url: string;
  category: 'Косы' | 'Дреды' | 'Брейды' | 'Кудри';
  title: string;
};

export const WORKS: Work[] = [
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/6ce4616b-9275-4546-a5d2-6c45bf5656b0.jpg',
    category: 'Брейды',
    title: 'Прическа "Водопад"\nБрейды с канекалоном на выпуск',
    },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/35ec69f2-7e2d-4b50-9754-7c0d89ff855b.jpg',
    category: 'Афрокудри',
    title: 'Завиток "Ариэль"\nНежно - розовые  локоны',
  },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/98f1142c-b689-46d7-b36e-49898c43353d.jpg',
    category: 'Брейды',
    title: 'Брейды в косы\nСтильная прическа на каждый день',
  },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/b566c1d9-db7e-400b-a7eb-d0b2e24b1e43.jpg',
    category: 'Брейды',
    title: 'Брейды с канекалоном на висок ',
  },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/e2c2afde-51ef-490a-9ccf-bcc087686e0d.jpg',
    category: 'Зизи',
    title: 'Цветные гафрированные зизи для маленьких принцесс',
  },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/b7ade194-71ca-49dd-8fe4-8fa047e139c3.jpg',
    category: 'Косы',
    title: 'Жёлтые французские косы для девочки',
  },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/19714f26-2b74-4038-970b-4d950353aebc.jpg',
    category: 'Кудри',
    title: 'Каштановые голливудские локоны',
  },
  {
    url: 'https://cdn.poehali.dev/projects/1515732c-45d5-436a-b5f4-687d7f8839be/bucket/b1b3ef34-0a38-43a1-985b-d195cda7421f.jpg',
    category: 'Косы',
    title: 'Блонд афрокосы с бусинами',
  },
];

export const GALLERY_FILTERS = ['Все', 'Косы', 'Дреды', 'Брейды', 'Кудри'] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export const TIME_SLOTS = ['10:00', '12:00', '14:00', '16:00', '18:00'];