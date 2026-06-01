// ===== PORTFOLIO DATA =====

export const navLinks = [
  { href: '#about', en: 'About', ar: 'عني' },
  { href: '#Technical-skills', en: 'Technical Skills', ar: 'المهارات التقنية' },
  { href: '#soft-skills', en: 'Soft Skills', ar: 'المهارات الشخصية' },
  { href: '#experience', en: 'Experience', ar: 'الخبرة' },
  { href: '#services', en: 'Services', ar: 'الخدمات' },
  { href: '#projects', en: 'Projects', ar: 'المشاريع' },
  { href: '#certifications', en: 'Certifications', ar: 'الشهادات' },
  { href: '#contact', en: 'Contact', ar: 'تواصل' },
]

export const typingPhrases = ['Full Stack Developer', 'Django Expert', 'Backend Developer', 'API Architect']

export const technicalSkills = [
  {
    category: { en: 'Frontend', ar: 'فرونت إند' },
    icon: 'fas fa-code',
    skills: [
      { name: 'HTML', percent: 95 },
      { name: 'CSS', percent: 90 },
      { name: 'JavaScript', percent: 85 },
      { name: 'Bootstrap', percent: 90 },
      { name: 'React', percent: 80 },
    ],
  },
  {
    category: { en: 'Backend', ar: 'باك إند' },
    icon: 'fas fa-server',
    skills: [
      { name: 'Python', percent: 90 },
      { name: 'Django', percent: 85 },
      { name: 'DRF', percent: 80 },
    ],
  },
  {
    category: { en: 'Tools', ar: 'الأدوات' },
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git', percent: 85 },
      { name: 'GitHub', percent: 90 },
      { name: 'Postman', percent: 85 },
    ],
  },
]

export const softSkills = [
  {
    category: { en: 'Communication', ar: 'التواصل' },
    icon: 'fas fa-comments',
    skills: [
      { en: 'Team Communication', ar: 'التواصل الجماعي', percent: 90 },
      { en: 'Public Speaking', ar: 'الإلقاء والخطابة', percent: 85 },
      { en: 'Presentation Skills', ar: 'مهارات العرض', percent: 88 },
    ],
  },
  {
    category: { en: 'Leadership', ar: 'القيادة' },
    icon: 'fas fa-users-cog',
    skills: [
      { en: 'Team Leadership', ar: 'قيادة الفريق', percent: 92 },
      { en: 'Decision Making', ar: 'اتخاذ القرار', percent: 87 },
      { en: 'Conflict Resolution', ar: 'حل النزاعات', percent: 85 },
    ],
  },
  {
    category: { en: 'Personal Skills', ar: 'المهارات الشخصية' },
    icon: 'fas fa-user-check',
    skills: [
      { en: 'Problem Solving', ar: 'حل المشكلات', percent: 90 },
      { en: 'Time Management', ar: 'إدارة الوقت', percent: 93 },
      { en: 'Adaptability', ar: 'المرونة والتكيف', percent: 95 },
    ],
  },
]

export const experiences = [
  {
    date: { en: '2025 - Present', ar: '2025 - حتى الآن' },
    title: { en: 'Founder & CEO', ar: 'مؤسس ورئيس تنفيذي' },
    company: 'Duck Frame',
    desc: {
      en: 'Media Production & Content Creation. Founded and managed Duck Frame, a company specializing in digital content creation and media production. Leading the team, setting business strategies, and overseeing daily operations.',
      ar: 'إنتاج إعلامي وإنشاء محتوى رقمي. أسست وأديرت شركة Duck Frame المتخصصة في إنتاج المحتوى الرقمي والإعلامي. أقود الفريق وأضع الاستراتيجيات التجارية وأشرف على العمليات اليومية.',
    },
  },
  {
    date: '2024 - 2025',
    title: { en: 'Competitions & Student Activities', ar: 'المسابقات والأنشطة الطلابية' },
    company: { en: 'Various Organizations', ar: 'منظمات متعددة' },
    desc: {
      en: 'EISTF: Participated in developing scientific and technological projects. IndustrialX: Took part in industrial innovation challenges. Rally Society: Team member for automotive and robotics events. ECPC: Competed in problem-solving and coding competitions. DEV.E3 Community: Head of DEV.E3 Community, led development workshops.',
      ar: 'EISTF: شاركت في تطوير مشاريع علمية وتكنولوجية. IndustrialX: شاركت في تحديات الابتكار الصناعي. نادي Rally: عضو في فعاليات السيارات والروبوتيك. ECPC: تنافست في تحديات البرمجة. مجتمع DEV.E3: رئيس المجتمع، قدت ورش التطوير.',
    },
  },
  {
    date: '2024',
    title: { en: 'Military & Training Programs', ar: 'برامج عسكرية وتدريبية' },
    company: { en: 'Academy of Nasser Military', ar: 'أكاديمية ناصر العسكرية' },
    desc: {
      en: 'Attended advanced military programs to develop leadership and discipline skills, with a focus on programming and computer technologies.',
      ar: 'حضرت برامج عسكرية متقدمة لتطوير مهارات القيادة والانضباط، مع التركيز على البرمجة وتقنيات الحاسب.',
    },
  },
]

export const services = [
  {
    icon: 'fas fa-plug',
    title: { en: 'REST API Development', ar: 'تطوير REST API' },
    desc: { en: 'Building robust and scalable RESTful APIs with proper authentication and documentation.', ar: 'بناء واجهات برمجية RESTful قوية وقابلة للتوسع مع المصادقة الصحيحة والتوثيق الشامل.' },
  },
  {
    icon: 'fas fa-laptop-code',
    title: { en: 'Full Stack Web Apps', ar: 'تطبيقات ويب متكاملة' },
    desc: { en: 'Creating complete web applications from frontend to backend with modern technologies.', ar: 'إنشاء تطبيقات ويب متكاملة من الفرونت إند إلى الباك إند باستخدام أحدث التقنيات.' },
  },
  {
    icon: 'fas fa-database',
    title: { en: 'Database Design', ar: 'تصميم قواعد البيانات' },
    desc: { en: 'Designing efficient and optimized database schemas for your applications.', ar: 'تصميم مخططات قواعد بيانات فعّالة ومحسّنة لتطبيقاتك.' },
  },
  {
    icon: 'fas fa-file-alt',
    title: { en: 'API Documentation', ar: 'توثيق الواجهات البرمجية' },
    desc: { en: 'Creating comprehensive and user-friendly API documentation.', ar: 'إنشاء توثيق شامل وسهل الاستخدام للواجهات البرمجية.' },
  },
]

export const projects = [
  {
    id: 1,
    category: 'fullstack',
    image: 'Screenshot 2026-02-22 022215.png',
    title: { en: 'Restaurant Management System', ar: 'نظام إدارة المطاعم' },
    desc: { en: 'A comprehensive system for managing restaurant operations including orders, reservations, and inventory.', ar: 'نظام شامل لإدارة عمليات المطعم بما في ذلك الطلبات والحجوزات والمخزون.' },
    problem: { en: 'Restaurants needed an efficient system to manage orders, reservations, and inventory in one place.', ar: 'احتاجت المطاعم إلى نظام فعّال لإدارة الطلبات والحجوزات والمخزون في مكان واحد.' },
    solution: { en: 'Built a comprehensive restaurant management system with table reservations, order tracking, inventory management, and reporting features.', ar: 'بنيت نظام إدارة مطاعم شامل مع حجز الطاولات وتتبع الطلبات وإدارة المخزون وميزات التقارير.' },
    stack: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    github: 'https://github.com/M-SayedCoder/restaurant-management-systems.git',
    live: 'https://m-sayedcoder.github.io/restaurant-management-systems/',
  },
  {
    id: 2,
    category: 'fullstack',
    image: 'unnamed.jpg',
    title: { en: 'E-Commerce Platform', ar: 'منصة التجارة الإلكترونية' },
    desc: { en: 'A full-featured online store with payment integration and admin dashboard.', ar: 'متجر إلكتروني متكامل مع بوابة دفع ولوحة تحكم للإدارة.' },
    problem: { en: 'Small businesses needed an affordable online store solution with easy product management.', ar: 'احتاجت الشركات الصغيرة إلى حل متجر إلكتروني بأسعار معقولة مع إدارة سهلة للمنتجات.' },
    solution: { en: 'Built a scalable e-commerce platform with Django backend and responsive Bootstrap frontend.', ar: 'بنيت منصة تجارة إلكترونية قابلة للتوسع بواجهة خلفية Django وواجهة أمامية Bootstrap متجاوبة.' },
    stack: ['Django', 'DRF', 'Bootstrap', 'PostgreSQL'],
    github: 'https://github.com/M-SayedCoder/MEGO-Store.git',
    live: 'https://m-sayedcoder.github.io/MEGO-Store/',
  },
  {
    id: 3,
    category: 'frontend',
    image: 'Gemini_Generated_Image_x3nwc2x3nwc2x3nw.png',
    title: { en: 'Travel Booking Website', ar: 'موقع حجز السفر' },
    desc: { en: 'Easy and interactive travel booking platform for exploring destinations, filtering options, and managing trips seamlessly.', ar: 'منصة حجز سفر سهلة وتفاعلية لاستكشاف الوجهات وتصفية الخيارات وإدارة الرحلات بسلاسة.' },
    problem: { en: 'Travelers needed a simple platform to explore destinations and book trips without complicated steps.', ar: 'احتاج المسافرون إلى منصة بسيطة لاستكشاف الوجهات وحجز الرحلات دون خطوات معقدة.' },
    solution: { en: 'Created an interactive travel booking platform with advanced filtering, trip management, and responsive design.', ar: 'أنشأت منصة حجز سفر تفاعلية مع تصفية متقدمة وإدارة رحلات وتصميم متجاوب.' },
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/M-SayedCoder/TripNest.git',
    live: 'https://m-sayedcoder.github.io/TripNest/',
  },
  {
    id: 4,
    category: 'fullstack',
    image: null,
    title: { en: 'DevKit — The Modern Engineering Playbook', ar: 'DevKit — دليل الهندسة الحديث' },
    desc: { en: 'A production-ready engineering reference covering deployment strategies, frontend patterns, backend architecture, database design, and more.', ar: 'مرجع هندسي جاهز للإنتاج يغطي استراتيجيات النشر وأنماط الفرونت إند وهندسة الباك إند وتصميم قواعد البيانات.' },
    problem: { en: 'Engineers lacked a single, structured reference for production-grade patterns across deployment, architecture, databases, and release strategies.', ar: 'كان المهندسون يفتقرون إلى مرجع موحد ومنظم لأنماط جاهزة للإنتاج.' },
    solution: { en: 'Built DevKit — a full-stack engineering playbook with 33 production-tested patterns, side-by-side strategy comparison, and a deployment readiness checklist.', ar: 'بنيت DevKit — دليل هندسي متكامل يضم 33 نمطاً مُختبراً في الإنتاج ومقارنة جانبية للاستراتيجيات.' },
    stack: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    github: 'https://github.com/M-SayedCoder/DevKit.git',
    live: 'https://m-sayedcoder.github.io/DevKit1/',
  },
  {
    id: 5,
    category: 'frontend',
    image: 'Gemini_Generated_Image_p9ht5pp9ht5pp9ht.png',
    title: { en: 'Personal Portfolio', ar: 'الموقع الشخصي' },
    desc: { en: 'A personal portfolio website showcasing skills, projects, and professional journey.', ar: 'موقع بورتفوليو شخصي يعرض المهارات والمشاريع والمسيرة المهنية.' },
    problem: { en: 'Needed a professional portfolio website to showcase skills, projects, and professional journey.', ar: 'احتجت إلى موقع بورتفوليو احترافي لعرض المهارات والمشاريع والمسيرة المهنية.' },
    solution: { en: 'Created a personal portfolio website with responsive design, showcasing projects, skills, and professional experience.', ar: 'أنشأت موقع بورتفوليو شخصي بتصميم متجاوب يعرض المشاريع والمهارات والخبرة المهنية.' },
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/M-SayedCoder/Portfolio.git',
    live: 'https://m-sayedcoder.github.io/Portfolio/',
  },
]

export const certifications = {
  2025: [
    { img: 'Screenshot 2026-02-22 014345.png', title: { en: 'Gemini Certified Educator – 2025', ar: 'معلم معتمد من Gemini – 2025' }, issuer: 'Google' },
    { img: 'Screenshot 2026-02-22 013819.png', title: { en: 'Certificate of attendance – Inspirova 2025', ar: 'شهادة حضور – Inspirova 2025' }, issuer: { en: 'Egyptian Chinese University', ar: 'الجامعة المصرية الصينية' } },
    { img: 'Screenshot 2026-02-22 012753.png', title: { en: 'Certificate of attendance – ESE 2025', ar: 'شهادة حضور – ESE 2025' }, issuer: 'ESE' },
    { img: 'Screenshot 2026-02-22 014442.png', title: { en: 'Volunteering – Media Team at IndustrialX Summit 2025', ar: 'تطوع – الفريق الإعلامي في قمة IndustrialX 2025' }, issuer: 'IndustrialX Summit' },
    { img: 'Screenshot 2026-02-22 012547.png', title: { en: 'ECPC 2025 participation certificate', ar: 'شهادة مشاركة ECPC 2025' }, issuer: 'ECPC' },
    { img: 'Screenshot 2026-02-22 013450.png', title: { en: 'Volunteer & appreciation – EISTF 2025', ar: 'شهادة تطوع وتقدير – EISTF 2025' }, issuer: 'EISTF' },
    { img: 'Screenshot 2026-02-22 014610.png', title: { en: 'ITIDA GIGS Freelancing Scholarship', ar: 'منحة العمل الحر ITIDA GIGS' }, issuer: { en: 'ITIDA (3-month program)', ar: 'ITIDA (برنامج 3 أشهر)' } },
  ],
  2024: [
    { img: 'Screenshot 2026-02-22 013710.png', title: { en: 'Volunteer & appreciation – EISTF 2024', ar: 'شهادة تطوع وتقدير – EISTF 2024' }, issuer: 'EISTF' },
    { img: 'Screenshot 2026-02-22 015008.png', title: { en: 'Volunteer & appreciation – ISEF 2024', ar: 'شهادة تطوع وتقدير – ISEF 2024' }, issuer: 'ISEF' },
  ],
  other: [
    { img: 'Screenshot 2026-02-22 012317.png', title: { en: 'Entrepreneurship Trainer Diploma', ar: 'دبلوم مدرب ريادة الأعمال' }, issuer: 'Microsoft, CARE Egypt, Ministry of Education' },
    { img: 'Screenshot 2026-02-22 012050.png', title: { en: 'Mastering Full-Stack Development Diploma', ar: 'دبلوم إتقان تطوير الويب المتكامل' }, issuer: { en: 'Arab Open University', ar: 'الجامعة العربية المفتوحة' } },
    { img: 'Screenshot 2026-02-22 012911.png', title: { en: 'Fundamentals of Digital Marketing', ar: 'أساسيات التسويق الرقمي' }, issuer: 'Google Maharat' },
    { img: 'Screenshot 2026-02-22 013155.png', title: { en: 'Technical & Robotics Instructor Certificate', ar: 'شهادة مدرب في التقنية والروبوتيك' }, issuer: { en: 'Technical Education Program', ar: 'برنامج التعليم الفني' } },
    { img: 'Screenshot 2026-02-22 013342.png', title: { en: 'Media Head – Microsoft Club', ar: 'رئيس الإعلام – نادي Microsoft' }, issuer: { en: 'Microsoft Club, Arab Open University', ar: 'نادي Microsoft، الجامعة العربية المفتوحة' } },
  ],
}

export const testimonials = [
  {
    img: 'Screenshot 2026-02-22 024824.png',
    text: { en: '"Mohamed is an exceptional developer who delivers high-quality work on time. His expertise in Django helped us build a scalable backend for our startup."', ar: '"محمد مطور استثنائي يُسلّم أعمالاً عالية الجودة في الوقت المحدد. خبرته في Django ساعدتنا في بناء خلفية قابلة للتوسع."' },
    author: 'Ahmed Hassan',
    role: { en: 'CEO, TechStart', ar: 'رئيس تنفيذي، TechStart' },
  },
  {
    img: 'Screenshot 2026-02-22 024824.png',
    text: { en: '"Great communication skills and technical expertise. He transformed our complex requirements into a beautiful and functional application."', ar: '"مهارات تواصل رائعة وخبرة تقنية عالية. حوّل متطلباتنا المعقدة إلى تطبيق جميل وعملي."' },
    author: 'Sara Mohamed',
    role: { en: 'Project Manager', ar: 'مدير مشاريع' },
  },
  {
    img: 'Screenshot 2026-02-22 025150.png',
    text: { en: '"Working with Mohamed was a great experience. He understood our vision and delivered beyond expectations."', ar: '"العمل مع محمد كان تجربة رائعة. فهم رؤيتنا وتجاوز توقعاتنا."' },
    author: 'Omar Ali',
    role: { en: 'Founder, InnovateHub', ar: 'مؤسس، InnovateHub' },
  },
]
