import { useLanguage } from '../../../context/LanguageContext';
import { Placeholder } from '../../UI/Placeholder';

export const AboutProjects = () => {
  const { t } = useLanguage();
  return (
    <Placeholder
      title={t.about.projects.title}
      description={t.about.projects.placeholder}
    />
  );
};
