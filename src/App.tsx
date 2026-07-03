import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/Layout/Layout';
import { MainSection, AboutTab } from './types';
import styles from './App.module.css';

export default function App() {
  const [activeSection, setActiveSection] = useState<MainSection>('about');
  const [activeAboutTab, setActiveAboutTab] = useState<AboutTab>('index');

  const handleSectionChange = (section: MainSection) => {
    setActiveSection(section);
    if (section === 'about') setActiveAboutTab('index');
  };

  return (
    <LanguageProvider>
      <div className={styles.app}>
        <Layout
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          activeAboutTab={activeAboutTab}
          onAboutTabChange={setActiveAboutTab}
        />
      </div>
    </LanguageProvider>
  );
}
