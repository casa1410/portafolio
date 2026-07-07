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
      university: 'Universidad de la Costa',
      bio: 'Ingeniero de sistemas apasionado por construir experiencias digitales que combinan precisión técnica con pensamiento creativo. Siempre en busca del próximo desafío para aprender algo nuevo y resolver problemas.',
      level: {
        prefix: 'NIVEL',
        xpToNext: 'xp restante para el siguiente nivel',
      },
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
    featuresLabel: 'Caracteristicas',
    techLabel: 'Tecnologias',
    linksLabel: 'Enlaces',
    closeLabel: 'Cerrar',
    imagePlaceholder: 'IMAGEN',
    projects: [
      {
        id: 'project-1',
        name: 'Obramax',
        description: 'Sistema de gestión financiera para empresas de construcción. Permite registrar ingresos, gastos y generar reportes por obra, con acceso multiusuario en tiempo real desde cualquier dispositivo.',
        features: [
          'Dashboard con métricas financieras y gráficas en tiempo real',
          'Gestión de múltiples obras simultáneas con historial',
          'Registro de ingresos y gastos con filtros por fecha, tipo y proveedor',
          'Adjuntos de documentos soporte (facturas, comprobantes)',
          'Exportación a Excel, CSV e impresión de reportes',
          'Acceso por roles: Administrador, Residente de Obra, Supervisor',
          'Sincronización en tiempo real con Firebase Firestore',
          'Autenticación con email y contraseña, recuperación de contraseña por correo',
          'Funciona en PC y móvil (responsive)',
          'Modo sin conexión con localStorage como respaldo',
        ],
        tech: ['JavaScript', 'Tailwind CSS', 'Firebase', 'Chart.js', 'SheetJS'],
        links: [
          { label: 'GitHub', url: 'https://github.com/casa1410/obramax' },
        ],
      },
      {
        id: 'project-2',
        name: 'Proyecto 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt'],
        tech: ['Tech 1', 'Tech 2'],
        links: [
          { label: 'GitHub', url: '#' },
        ],
      },
      {
        id: 'project-3',
        name: 'Proyecto 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt'],
        tech: ['Tech 1', 'Tech 2', 'Tech 3', 'Tech 4'],
        links: [
          { label: 'GitHub', url: '#' },
          { label: 'Demo', url: '#' },
        ],
      },
      {
        id: 'project-4',
        name: 'Proyecto 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt'],
        tech: ['Tech 1', 'Tech 2'],
        links: [
          { label: 'GitHub', url: '#' },
          { label: 'Demo', url: '#' },
        ],
      },
    ],
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
    kofiUrl: 'https://ko-fi.com/sebastiancasadiego99157',
  },
  audio: {
    playLabel: 'Reproducir música de fondo',
    pauseLabel: 'Pausar música de fondo',
  },
  placeholder: {
    comingSoon: '// PROXIMAMENTE',
  },
  battle: {
    title: 'COMBATE',
    turnPrefix: 'TURNO',
    spellPrompt: 'HECHIZO',
    targetPrompt: 'OBJETIVO',
    back: 'ATRAS',
    commands: { fight: 'FIGHT', magic: 'MAGIC', defend: 'DEFEND' },
    guardTag: 'GUARDIA',
    shellTag: 'CORAZA',
    barrierTag: 'BARRERA',
    victoryText: '¡VICTORIA!',
    victoryHint: '(click para luchar de nuevo)',
    hpLabel: 'HP',
    mpLabel: 'PM',
    units: { warrior: 'GUERRERO', blackMage: 'MAGO NEGRO', whiteMage: 'MAGO BLANCO' },
    monsterName: 'SLIME',
    elements: { fire: 'FUEGO', water: 'AGUA', grass: 'PLANTA' },
    spellLabels: { fire: 'BOLA DE FUEGO', water: 'HIDROBOMBA', grass: 'CICLON DE HOJAS' },
    whiteSpellLabels: { heal: 'SANAR', shell: 'CORAZA', barrier: 'BARRERA MAGICA' },
    elementVerbs: {
      fire: 'lanza una bola de fuego a',
      water: 'lanza un chorro de agua a',
      grass: 'lanza hojas afiladas a',
    },
    superEffective: ' ¡Es super efectivo!',
    notEffective: ' No es muy efectivo...',
    messages: {
      enemyLabel: (monsterName, el) => `${monsterName} DE ${el}`,
      appear: (el) => `¡Un SLIME DE ${el} salvaje aparece!`,
      attack: (actor, dmg, mpGain) => `${actor} ataca! -${dmg} HP al SLIME${mpGain > 0 ? ` (+${mpGain} PM)` : ''}`,
      spellDamage: (actor, spellLabel, dmg, note, cost) =>
        `${actor} lanza ${spellLabel}! -${dmg} HP al SLIME.${note} (-${cost} PM)`,
      spellHeals: (actor, spellLabel, heal, cost) =>
        `${actor} lanza ${spellLabel}, ¡pero es del mismo elemento y cura al SLIME! +${heal} HP (-${cost} PM)`,
      heal: (actor, target, amount, cost) => `${actor} cura a ${target}! +${amount} HP (-${cost} PM)`,
      shellCast: (actor, spellLabel, target, cost) =>
        `${actor} lanza ${spellLabel} sobre ${target}! Defensa fisica aumentada por 3 turnos (-${cost} PM)`,
      barrierCast: (actor, spellLabel, target, cost) =>
        `${actor} lanza ${spellLabel} sobre ${target}! Defensa magica aumentada por 3 turnos (-${cost} PM)`,
      protect: (actor, cost) => `${actor} protege al grupo! (-${cost} PM)`,
      defend: (actor, mpGain) => `${actor} se pone en guardia!${mpGain > 0 ? ` (+${mpGain} PM)` : ''}`,
      monsterAttack: (monsterName, target, dmg, reduced) =>
        `${monsterName} ataca a ${target}! -${dmg} HP${reduced ? ' (daño reducido)' : ''}`,
      monsterMagic: (monsterName, verb, target, dmg, reduced) =>
        `${monsterName} ${verb} ${target}! -${dmg} HP${reduced ? ' (daño reducido)' : ''}`,
      defeated: (monsterName) => `¡El ${monsterName} ha sido derrotado!`,
    },
  },
};

export default es;
