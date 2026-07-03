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
      projects: string;
    };
    index: {
      tag: string;
      name: string;
      fullName: string;
      role: string;
      university: string;
      bio: string;
    };
    experience: { title: string; placeholder: string };
    skills:     { title: string; placeholder: string };
    projects:   { title: string; placeholder: string };
  };
  sideProjects: { title: string; placeholder: string };
  contact:      { title: string; placeholder: string };
  hobbies:      { title: string; placeholder: string };
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
      projects: 'Projects',
    },
    index: {
      tag: '— Technomancer —',
      name: 'Sebastian Casadiego',
      fullName: 'Sebastian Alfredo Casadiego Mazzillo',
      role: 'Systems Engineer',
      university: 'Universidad de la Costa CUC',
      bio: 'Systems engineer passionate about building digital experiences that blend technical precision with creative thinking. Always looking for the next challenge to steal hearts — and solve problems.',
    },
    experience: {
      title: 'Experience',
      placeholder: 'Work experience will be displayed here.',
    },
    skills: {
      title: 'Skills',
      placeholder: 'Technical skills will be displayed here.',
    },
    projects: {
      title: 'Projects',
      placeholder: 'Projects will be displayed here.',
    },
  },
  sideProjects: {
    title: 'Side Projects',
    placeholder: 'Personal side projects will be displayed here.',
  },
  contact: {
    title: 'Contact',
    placeholder: 'Contact information will be displayed here.',
  },
  hobbies: {
    title: 'Hobbies',
    placeholder: 'Hobbies will be displayed here.',
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
