'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        onClick={() => setLanguage('en')}
        className={`language-option ${language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`language-option ${language === 'zh' ? 'active' : ''}`}
      >
        繁
      </button>
    </div>
  );
}