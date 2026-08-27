'use client';

import React from 'react';
import { SUPPORTED_LOCALES } from '../i18n/config.js';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function LanguagePicker({ mobile = false }) {
  const { locale, switchLocale, t } = useI18n();

  return (
    <div
      className={'axy-language-picker' + (mobile ? ' axy-language-picker--mobile' : '')}
      role="group"
      aria-label={t('common.language.choose')}
      style={{ display: 'flex', alignItems: 'center', gap: '2px' }}
    >
      {SUPPORTED_LOCALES.map((language) => {
        const active = language === locale;
        return (
          <button
            key={language}
            type="button"
            aria-pressed={active}
            lang={language}
            onClick={() => switchLocale(language)}
            style={{
              appearance: 'none',
              minWidth: mobile ? '44px' : '30px',
              minHeight: mobile ? '44px' : '32px',
              padding: mobile ? '7px 9px' : '5px 6px',
              border: active ? '1px solid #2C8C99' : '1px solid transparent',
              borderRadius: '7px',
              background: active ? '#EAF6F7' : 'transparent',
              color: active ? '#155E69' : '#667085',
              fontFamily: "'Roboto Mono',monospace",
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >{language.toUpperCase()}</button>
        );
      })}
    </div>
  );
}
