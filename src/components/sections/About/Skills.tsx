import { useLanguage } from '../../../context/LanguageContext';
import { Placeholder } from '../../UI/Placeholder';

export const Skills = () => {
  const { t } = useLanguage();
  return (
    <Placeholder
      title={t.about.skills.title}
      description={t.about.skills.placeholder}
    />
  );
};
