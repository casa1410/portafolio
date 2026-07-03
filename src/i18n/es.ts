import { TranslationShape } from './en';

const es: TranslationShape = {
  nav: {
    about: 'Sobre mí',
    sideProjects: 'Proyectos',
    contact: 'Contacto',
    hobbies: 'Hobbies',
    support: 'Apoyar',
  },
  about: {
    tabs: {
      index: 'Inicio',
      experience: 'Experiencia',
      skills: 'Habilidades',
    },
    index: {
      tag: '— Tecnomago —',
      name: 'Sebastian Casadiego',
      fullName: 'Sebastian Alfredo Casadiego Mazzillo',
      role: 'Ingeniero de Sistemas',
      university: 'Universidad de la Costa CUC',
      bio: 'Ingeniero de sistemas apasionado por construir experiencias digitales que combinan precisión técnica con pensamiento creativo. Siempre en busca del próximo desafío para robar corazones — y resolver problemas.',
    },
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          company: 'Sands S.A.S',
          role: 'Desarrollador web y de aplicaciones',
          period: 'Febrero 2025 — Actualidad',
          location: 'Barranquilla, Colombia',
          bullets: [
            'Desarrollé una aplicación móvil multiplataforma para la contratación remota de servicios profesionales, utilizando React Native y TypeScript, garantizando un rendimiento consistente en iOS y Android.',
            'Implementé funcionalidades de búsqueda avanzada y contratación en tiempo real, mejorando la interacción del usuario y la eficiencia en la conexión entre clientes y profesionales.',
            'Optimicé el rendimiento de la aplicación, reduciendo tiempos de carga y mejorando la experiencia de usuario y la retención.',
            'Lideré el ciclo completo del proyecto desde la concepción hasta el despliegue, colaborando con equipos multidisciplinarios y cumpliendo plazos ajustados.',
          ],
        },
        {
          company: 'Supergiros',
          role: 'Practicante TIC / Desarrollador Frontend',
          period: 'Febrero 2024 — Agosto 2024',
          location: 'Barranquilla, Colombia',
          bullets: [
            'Desarrollé Sinet-Lite, una plataforma integral de gestión de inventarios, centralizando la administración de bodegas, productos, proveedores y empleados, con enfoque en escalabilidad y usabilidad.',
            'Implementé funcionalidades clave como gestión de traslados de productos y auditorías de bodegas, reduciendo el tiempo de ejecución de tareas críticas.',
            'Diseñé interfaces de usuario intuitivas y responsivas con Angular, mejorando la experiencia en múltiples dispositivos y aumentando la satisfacción del usuario.',
            'Integré consultas dinámicas (POST) y configuraciones personalizadas en formularios, optimizando la gestión de datos y mejorando la precisión de la información.',
          ],
        },
        {
          company: 'Freelance',
          role: 'Desarrollador Web Freelance — React Frontend',
          period: 'Febrero 2022 — Agosto 2023',
          location: 'Barranquilla, Colombia',
          bullets: [
            'Desarrollo de aplicaciones web dinámicas utilizando React y TypeScript, enfocadas en soluciones escalables y mantenibles adaptadas a los requerimientos de cada cliente.',
            'Colaboración con clientes y equipos multidisciplinarios en proyectos end-to-end, desde la planificación hasta la entrega final, cumpliendo plazos y garantizando la calidad del producto.',
          ],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          label: 'Lenguajes y Tecnologias',
          items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'C#', 'MySQL', 'Azure'],
        },
        {
          label: 'Frameworks y Librerias',
          items: ['React', 'React Native', 'Angular'],
        },
        {
          label: 'Herramientas y Entornos',
          items: ['Git', 'GitHub', 'APIs REST', 'Desarrollo Web y Móvil Responsivo'],
        },
        {
          label: 'Idiomas',
          items: ['Español (Nativo)', 'Inglés (B1)'],
        },
      ],
    },
  },
  sideProjects: {
    title: 'Proyectos Personales',
    placeholder: 'Los proyectos personales se mostrarán aquí.',
  },
  contact: {
    title: 'Contacto',
    description: 'Abierto a nuevas oportunidades y colaboraciones — no dudes en escribirme.',
    email: 'sacasadiego@gmail.com',
    phone: '+57 311 434 9881',
    location: 'Barranquilla, Atlántico, Colombia',
    links: [
      { label: 'GitHub', url: 'https://github.com/casa1410' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sebastian-alfredo-casadiego-mazzillo-47980324b/' },
    ],
  },
  hobbies: {
    title: 'Hobbies',
    description: 'Interesado en la arquitectura de software, la construcción de productos desde cero y los videojuegos — y en cómo funcionan los sistemas por dentro para mejorar la experiencia de usuario. Fuera del trabajo: escritura creativa, videojuegos, lectura, música, dibujo y juegos de mesa (TCG).',
    items: ['Escritura Creativa', 'Videojuegos', 'Lectura', 'Música', 'Dibujo', 'Juegos de Mesa (TCG)'],
  },
  support: {
    title: 'Apoyar',
    description: '¡Si disfrutas mi trabajo y quieres apoyarme, considera comprarme un café! Cada contribución me ayuda a seguir construyendo cosas geniales.',
    button: 'Apoyar en Ko-fi',
    kofiUrl: 'https://ko-fi.com/',
  },
  audio: {
    playLabel: 'Reproducir música de fondo',
    pauseLabel: 'Pausar música de fondo',
  },
  placeholder: {
    comingSoon: '// PROXIMAMENTE',
  },
};

export default es;
