export interface TranslationShape {
  nav: {
    about: string;
    sideProjects: string;
    contact: string;
    hobbies: string;
    support: string;
  };
  about: {
    tabs: {
      index: string;
      experience: string;
      skills: string;
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
  sideProjects: { title: string; placeholder: string };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    links: { label: string; url: string }[];
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
}

const en: TranslationShape = {
  nav: {
    about: 'About',
    sideProjects: 'Side Proj.',
    contact: 'Contact',
    hobbies: 'Hobbies',
    support: 'Support',
  },
  about: {
    tabs: {
      index: 'Index',
      experience: 'Experience',
      skills: 'Skills',
    },
    index: {
      tag: '— Technomancer —',
      name: 'Sebastian Casadiego',
      fullName: 'Sebastian Alfredo Casadiego Mazzillo',
      role: 'Systems Engineer',
      university: 'Universidad de la Costa CUC',
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
    placeholder: 'Personal side projects will be displayed here.',
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
    kofiUrl: 'https://ko-fi.com/',
  },
  audio: {
    playLabel: 'Play background music',
    pauseLabel: 'Pause background music',
  },
  placeholder: {
    comingSoon: '// COMING SOON',
  },
};

export default en;
