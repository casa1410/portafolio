import { useLanguage } from '../../../context/LanguageContext';
import { Placeholder } from '../../UI/Placeholder';

export const Hobbies = () => {
  const { t } = useLanguage();
  return (
    <Placeholder
      title={t.hobbies.title}
      description={t.hobbies.placeholder}
    />
  );
};
