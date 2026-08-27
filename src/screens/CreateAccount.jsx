'use client';
import React, { useEffect } from 'react';
import { AXY_APP_ROUTES } from '../config/billing.js';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import utilityCatalog from '../i18n/locales/pages/utility.js';

export default function CreateAccount() {
  const { createAccount: copy } = useLocalizedCopy(utilityCatalog);
  useEffect(() => { window.location.replace(AXY_APP_ROUTES.onboarding); }, []);
  return <main style={{ minHeight: '58vh', display: 'grid', placeItems: 'center', padding: '76px 24px', background: '#F9FAFB', textAlign: 'center' }}><div style={{ maxWidth: '520px' }}><div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.13em', color: '#2C8C99', fontWeight: 700 }}>{copy.eyebrow}</div><h1 style={{ margin: '14px 0 0', color: '#1F2B4D', fontSize: '36px', fontWeight: 800 }}>{copy.title}</h1><p style={{ margin: '14px 0 22px', color: '#667085', fontSize: '14px', lineHeight: 1.65 }}>{copy.body}</p><a href={AXY_APP_ROUTES.onboarding} style={{ display: 'inline-flex', padding: '13px 20px', borderRadius: '10px', background: '#32415C', color: '#fff', fontSize: '14px', fontWeight: 700 }}>{copy.action}</a></div></main>;
}
