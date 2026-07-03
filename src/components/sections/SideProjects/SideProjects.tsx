import { useLanguage } from '../../../context/LanguageContext';
import { Placeholder } from '../../UI/Placeholder';

export const SideProjects = () => {
  const { t } = useLanguage();
  return (
    <Placeholder
      title={t.sideProjects.title}
      description={t.sideProjects.placeholder}
    />
  );
};
