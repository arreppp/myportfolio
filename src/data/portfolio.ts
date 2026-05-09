export const personal = {
  name:     'Nurarief Ilman Bin Jefri',
  title:    'Software Developer',
  tagline:  'Building impactful software across the stack.',
  email:    'nurariefilman@gmail.com',
  phone:    '+6012-280 4181',
  location: 'Seri Kembangan, Selangor',
  linktree: 'https://linktr.ee/ariefilman',
}

export const experiences = [
  {
    company:    'Mission X Sdn Bhd',
    role:       'Backend Developer',
    period:     'Mar 2025 – Present',
    color:      'cyan' as const,
    highlights: [
      'Delivered and tested 89 new REST APIs covering account, engagement, content, and transaction modules.',
      'Built frontend components with React, TypeScript, Vite, Tailwind CSS, and TanStack React Query.',
      'Integrated backend APIs with frontend apps ensuring real-time UI updates and clean state management.',
      'Implemented dynamic XML sitemap serving 3 language variants (/en, /cn, /my) via Vite + Vercel proxy.',
      'Optimised SEO: resolved canonical tag conflicts, added structured data, secured analytics with env vars.',
    ],
  },
  {
    company:    'Kollect Systems',
    role:       'Software Engineering Intern',
    period:     'Sept 2024 – Feb 2025',
    color:      'orange' as const,
    highlights: [
      'Resolved 33 tracked production bugs across CSV exports, report generation, and logical errors.',
      'Performed end-to-end testing for the collection report module during Laravel 6 → Laravel 11 migration.',
      'Identified and documented 13 system issues during QA testing cycles.',
      'Maintained a Daily Tracker Report to monitor, escalate, and resolve bugs systematically.',
    ],
  },
]

export const projects = [
  {
    title:  'AutoParts MY',
    period: 'Mar – Apr 2026',
    stack:  ['Vue 3', 'Vite', 'Pinia', 'Tailwind CSS'],
    desc:   'Full-stack e-commerce platform for Malaysian car owners to browse and order automotive parts with multi-step checkout and order history.',
    accent: 'cyan' as const,
  },
  {
    title:  'FoodShare',
    period: 'Mar – Aug 2024',
    stack:  ['Flutter', 'Firebase', 'Google Maps API'],
    desc:   'Mobile app using geolocation to connect food donors with recipients, featuring real-time notifications and community-driven food waste reduction.',
    accent: 'orange' as const,
  },
  {
    title:  'VetRep',
    period: 'Mar – Aug 2024',
    stack:  ['Flutter', 'Firestore', 'MySQL', 'Google Maps API'],
    desc:   'Veterinary appointment booking system with dual-database architecture and real-time clinic search via Google Maps integration.',
    accent: 'cyan' as const,
  },
  {
    title:  'Graceful Glam',
    period: 'Oct 2023 – Jan 2024',
    stack:  ['Laravel', 'Stripe API', 'Leaflet API'],
    desc:   'Personal shopper system with product browsing, order tracking, Stripe payments, and Leaflet-based store location mapping.',
    accent: 'orange' as const,
  },
]

export const skills = {
  languages: ['PHP', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'C++'],
  frontend:  ['React', 'Vue 3', 'Vite', 'Tailwind CSS', 'TanStack Query', 'HTML/CSS', 'Flutter'],
  backend:   ['Laravel', 'REST API Design', 'Docker', 'Ubuntu'],
  databases: ['MySQL', 'Firebase', 'SQL'],
  tools:     ['Git', 'VS Code', 'Postman', 'Bugzilla', 'OpenProject', 'Laragon', 'WinSCP'],
}

export const education = [
  {
    degree: 'Bachelor of Computer Science (Hons.) — Netcentric Computing',
    school: 'Universiti Teknologi MARA (UiTM) Jasin',
    period: 'Sept 2021 – Jan 2025',
  },
  {
    degree: 'Matriculation Programme',
    school: 'Melaka Matriculation College',
    period: 'Oct 2020 – May 2021',
  },
]

export const stats = [
  { value: 89,  label: 'APIs Delivered',  suffix: '' },
  { value: 33,  label: 'Bugs Resolved',   suffix: '' },
  { value: 4,   label: 'Projects Built',  suffix: '' },
  { value: 3,   label: 'Years Coding',    suffix: '+' },
]
