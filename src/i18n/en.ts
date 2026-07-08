export interface TranslationShape {
  nav: {
    about: string;
    sideProjects: string;
    contact: string;
    support: string;
  };
  about: {
    tabs: {
      index: string;
      experience: string;
      skills: string;
      hobbies: string;
    };
    index: {
      tag: string;
      name: string;
      fullName: string;
      role: string;
      university: string;
      bio: string;
      level: {
        prefix: string;
        xpToNext: string;
      };
    };
    experience: {
      title: string;
      jobs: {
        company: string;
        role: string;
        period: string;
        location: string;
        bullets: string[];
      }[];
    };
    skills: {
      title: string;
      categories: { label: string; items: string[] }[];
    };
  };
  sideProjects: {
    title: string;
    featuresLabel: string;
    techLabel: string;
    linksLabel: string;
    closeLabel: string;
    imagePlaceholder: string;
    projects: {
      id: string;
      name: string;
      description: string;
      features: string[];
      tech: string[];
      links: { label: string; url: string }[];
    }[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    links: { label: string; url: string }[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendLabel: string;
      sendingLabel: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  hobbies: {
    title: string;
    description: string;
    items: string[];
  };
  support: {
    title: string;
    description: string;
    button: string;
    kofiUrl: string;
  };
  audio: {
    playLabel: string;
    pauseLabel: string;
  };
  placeholder: {
    comingSoon: string;
  };
  battle: {
    title: string;
    turnPrefix: string;
    spellPrompt: string;
    targetPrompt: string;
    back: string;
    commands: { fight: string; magic: string; defend: string };
    guardTag: string;
    shellTag: string;
    barrierTag: string;
    victoryText: string;
    victoryHint: string;
    hpLabel: string;
    mpLabel: string;
    units: { warrior: string; blackMage: string; whiteMage: string };
    monsterName: string;
    elements: { fire: string; water: string; grass: string };
    spellLabels: { fire: string; water: string; grass: string };
    whiteSpellLabels: { heal: string; shell: string; barrier: string };
    elementVerbs: { fire: string; water: string; grass: string };
    superEffective: string;
    notEffective: string;
    messages: {
      enemyLabel: (monsterName: string, elementLabel: string) => string;
      appear: (elementLabel: string) => string;
      attack: (actor: string, dmg: number, mpGain: number) => string;
      spellDamage: (actor: string, spellLabel: string, dmg: number, note: string, cost: number) => string;
      spellHeals: (actor: string, spellLabel: string, heal: number, cost: number) => string;
      heal: (actor: string, target: string, amount: number, cost: number) => string;
      shellCast: (actor: string, spellLabel: string, target: string, cost: number) => string;
      barrierCast: (actor: string, spellLabel: string, target: string, cost: number) => string;
      protect: (actor: string, cost: number) => string;
      defend: (actor: string, mpGain: number) => string;
      monsterAttack: (monsterName: string, target: string, dmg: number, reduced: boolean) => string;
      monsterMagic: (monsterName: string, verb: string, target: string, dmg: number, reduced: boolean) => string;
      defeated: (monsterName: string) => string;
    };
  };
}

const en: TranslationShape = {
  nav: {
    about: 'About',
    sideProjects: 'Side Proj.',
    contact: 'Contact',
    support: 'Support',
  },
  about: {
    tabs: {
      index: 'Index',
      experience: 'Experience',
      skills: 'Skills',
      hobbies: 'Hobbies',
    },
    index: {
      tag: '— Technomancer —',
      name: 'Sebastian Casadiego',
      fullName: 'Sebastian Alfredo Casadiego Mazzillo',
      role: 'Systems Engineer',
      university: 'Universidad de la Costa',
      bio: 'Systems engineer passionate about building digital experiences that blend technical precision with creative thinking. Always looking for the next challenge to learn something new and solve problems.',
      level: {
        prefix: 'LEVEL',
        xpToNext: 'xp remaining to next level',
      },
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          company: 'Sands S.A.S',
          role: 'Web & App Developer',
          period: 'Feb 2025 — Present',
          location: 'Barranquilla, Colombia',
          bullets: [
            'Built a cross-platform mobile app for remote hiring of professional services with React Native and TypeScript, ensuring consistent performance on iOS and Android.',
            'Implemented advanced search and real-time booking features, improving user interaction and the connection between clients and professionals.',
            'Optimized app performance, reducing load times and improving user experience and retention.',
            'Led the full project lifecycle from conception to deployment, collaborating with cross-functional teams under tight deadlines.',
          ],
        },
        {
          company: 'Supergiros',
          role: 'IT Intern / Frontend Developer',
          period: 'Feb 2024 — Aug 2024',
          location: 'Barranquilla, Colombia',
          bullets: [
            'Developed Sinet-Lite, a full inventory management platform centralizing warehouses, products, suppliers and employees, focused on scalability and usability.',
            'Implemented key features like product transfer management and warehouse audits, cutting execution time on critical tasks.',
            'Designed intuitive, responsive UIs with Angular, improving the experience across devices and increasing user satisfaction.',
            'Integrated dynamic (POST) queries and custom form configurations, optimizing data handling and accuracy.',
          ],
        },
        {
          company: 'Freelance',
          role: 'React Frontend Web Developer',
          period: 'Feb 2022 — Aug 2023',
          location: 'Barranquilla, Colombia',
          bullets: [
            'Built dynamic web applications with React and TypeScript, focused on scalable, maintainable solutions tailored to each client.',
            'Collaborated with clients and cross-functional teams on end-to-end projects, from planning to final delivery, meeting deadlines and ensuring quality.',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          label: 'Languages & Tech',
          items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'C#', 'MySQL', 'Azure'],
        },
        {
          label: 'Frameworks & Libraries',
          items: ['React', 'React Native', 'Angular'],
        },
        {
          label: 'Tools & Environments',
          items: ['Git', 'GitHub', 'REST APIs', 'Responsive Web & Mobile Dev'],
        },
        {
          label: 'Languages',
          items: ['Spanish (Native)', 'English (B1)'],
        },
      ],
    },
  },
  sideProjects: {
    title: 'Side Projects',
    featuresLabel: 'Features',
    techLabel: 'Technologies',
    linksLabel: 'Links',
    closeLabel: 'Close',
    imagePlaceholder: 'IMAGE',
    projects: [
      {
        id: 'project-1',
        name: 'Obramax',
        description: 'Financial management system for construction companies. Lets you record income and expenses and generate per-project reports, with real-time multi-user access from any device.',
        features: [
          'Real-time financial dashboard with metrics and charts',
          'Manage multiple construction sites simultaneously with history',
          'Income/expense tracking with filters by date, type and supplier',
          'Supporting document attachments (invoices, receipts)',
          'Export to Excel, CSV and printable reports',
          'Role-based access: Admin, Site Resident, Supervisor',
          'Real-time sync with Firebase Firestore',
          'Email/password authentication with password recovery',
          'Works on desktop and mobile (responsive)',
          'Offline mode with localStorage fallback',
        ],
        tech: ['JavaScript', 'Tailwind CSS', 'Firebase', 'Chart.js', 'SheetJS'],
        links: [
          { label: 'GitHub', url: 'https://github.com/casa1410/obramax' },
        ],
      },
      {
        id: 'project-2',
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt'],
        tech: ['Tech 1', 'Tech 2'],
        links: [
          { label: 'GitHub', url: '#' },
        ],
      },
      {
        id: 'project-3',
        name: 'Project 3',
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
        name: 'Project 4',
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
    title: 'Contact',
    description: "Open to new opportunities and collaborations — feel free to reach out.",
    email: 'sacasadiego@gmail.com',
    phone: '+57 311 434 9881',
    location: 'Barranquilla, Atlántico, Colombia',
    links: [
      { label: 'GitHub', url: 'https://github.com/casa1410' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sebastian-alfredo-casadiego-mazzillo-47980324b/' },
    ],
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'What do you want to tell me?',
      sendLabel: 'Send',
      sendingLabel: 'Sending...',
      successMessage: 'Message sent! I\'ll get back to you soon.',
      errorMessage: 'Something went wrong. Try again or email me directly.',
    },
  },
  hobbies: {
    title: 'Hobbies',
    description: 'Interested in software architecture, building products from scratch and games — and how systems work under the hood to shape better user experiences. Outside of work: creative writing, video games, reading, music, drawing and tabletop card games (TCG).',
    items: ['Creative Writing', 'Video Games', 'Reading', 'Music', 'Drawing', 'Tabletop Card Games (TCG)'],
  },
  support: {
    title: 'Support',
    description: 'If you enjoy my work and want to support me, consider buying me a coffee! Every contribution helps me keep building cool things.',
    button: 'Support on Ko-fi',
    kofiUrl: 'https://ko-fi.com/sebastiancasadiego99157',
  },
  audio: {
    playLabel: 'Play background music',
    pauseLabel: 'Pause background music',
  },
  placeholder: {
    comingSoon: '// COMING SOON',
  },
  battle: {
    title: 'BATTLE',
    turnPrefix: 'TURN',
    spellPrompt: 'SPELL',
    targetPrompt: 'TARGET',
    back: 'BACK',
    commands: { fight: 'FIGHT', magic: 'MAGIC', defend: 'DEFEND' },
    guardTag: 'GUARD',
    shellTag: 'SHELL',
    barrierTag: 'BARRIER',
    victoryText: 'VICTORY!',
    victoryHint: '(click to fight again)',
    hpLabel: 'HP',
    mpLabel: 'MP',
    units: { warrior: 'WARRIOR', blackMage: 'BLACK MAGE', whiteMage: 'WHITE MAGE' },
    monsterName: 'SLIME',
    elements: { fire: 'FIRE', water: 'WATER', grass: 'GRASS' },
    spellLabels: { fire: 'FIREBALL', water: 'HYDRO PUMP', grass: 'LEAF CYCLONE' },
    whiteSpellLabels: { heal: 'HEAL', shell: 'SHELL', barrier: 'BARRIER' },
    elementVerbs: {
      fire: 'hurls a fireball at',
      water: 'blasts a water jet at',
      grass: 'whips sharp leaves at',
    },
    superEffective: " It's super effective!",
    notEffective: " It's not very effective...",
    messages: {
      enemyLabel: (monsterName, el) => `${el} ${monsterName}`,
      appear: (el) => `A wild ${el} SLIME appears!`,
      attack: (actor, dmg, mpGain) => `${actor} attacks! -${dmg} HP to the SLIME${mpGain > 0 ? ` (+${mpGain} MP)` : ''}`,
      spellDamage: (actor, spellLabel, dmg, note, cost) =>
        `${actor} casts ${spellLabel}! -${dmg} HP to the SLIME.${note} (-${cost} MP)`,
      spellHeals: (actor, spellLabel, heal, cost) =>
        `${actor} casts ${spellLabel}, but it shares the SLIME's element and heals it! +${heal} HP (-${cost} MP)`,
      heal: (actor, target, amount, cost) => `${actor} heals ${target}! +${amount} HP (-${cost} MP)`,
      shellCast: (actor, spellLabel, target, cost) =>
        `${actor} casts ${spellLabel} on ${target}! Physical defense up for 3 turns (-${cost} MP)`,
      barrierCast: (actor, spellLabel, target, cost) =>
        `${actor} casts ${spellLabel} on ${target}! Magic defense up for 3 turns (-${cost} MP)`,
      protect: (actor, cost) => `${actor} protects the party! (-${cost} MP)`,
      defend: (actor, mpGain) => `${actor} braces for impact!${mpGain > 0 ? ` (+${mpGain} MP)` : ''}`,
      monsterAttack: (monsterName, target, dmg, reduced) =>
        `${monsterName} attacks ${target}! -${dmg} HP${reduced ? ' (damage reduced)' : ''}`,
      monsterMagic: (monsterName, verb, target, dmg, reduced) =>
        `${monsterName} ${verb} ${target}! -${dmg} HP${reduced ? ' (damage reduced)' : ''}`,
      defeated: (monsterName) => `The ${monsterName} has been defeated!`,
    },
  },
};

export default en;
