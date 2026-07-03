import { useLanguage } from '../../../context/LanguageContext';
import { Placeholder } from '../../UI/Placeholder';

export const Experience = () => {
  const { t } = useLanguage();
  return (
    <Placeholder
      title={t.about.experience.title}
      description={t.about.experience.placeholder}
    />
  );
};
