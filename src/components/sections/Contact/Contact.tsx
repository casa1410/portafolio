import { FormEvent, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './Contact.module.css';

// TODO: replace with the real Access Key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact = () => {
  const { t } = useLanguage();
  const info = t.contact;
  const form = info.form;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Nuevo mensaje de portafolio de ${name}`,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{info.title}</h2>
      <p className={styles.description}>{info.description}</p>

      <div className={styles.infoList}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Email</span>
          <a className={styles.infoValue} href={`mailto:${info.email}`}>{info.email}</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Tel</span>
          <a className={styles.infoValue} href={`tel:${info.phone.replace(/\s/g, '')}`}>{info.phone}</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Loc</span>
          <span className={styles.infoValue}>{info.location}</span>
        </div>
      </div>

      <div className={styles.links}>
        {info.links.map((link) => (
          <a
            key={link.label}
            className={styles.linkBtn}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* honeypot field for basic spam protection, hidden from real visitors */}
        <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" />

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="contact-name">{form.nameLabel}</label>
          <input
            id="contact-name"
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={form.namePlaceholder}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="contact-email">{form.emailLabel}</label>
          <input
            id="contact-email"
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={form.emailPlaceholder}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="contact-message">{form.messageLabel}</label>
          <textarea
            id="contact-message"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={form.messagePlaceholder}
            rows={5}
            required
          />
        </div>

        <button className={styles.submitBtn} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? form.sendingLabel : form.sendLabel}
        </button>

        {status === 'success' && <p className={styles.formSuccess}>{form.successMessage}</p>}
        {status === 'error' && <p className={styles.formError}>{form.errorMessage}</p>}
      </form>
    </div>
  );
};
