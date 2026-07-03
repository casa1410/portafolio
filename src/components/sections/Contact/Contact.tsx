import { useLanguage } from '../../../context/LanguageContext';
import { Placeholder } from '../../UI/Placeholder';

export const Contact = () => {
  const { t } = useLanguage();
  return (
    <Placeholder
      title={t.contact.title}
      description={t.contact.placeholder}
    />
  );
};
