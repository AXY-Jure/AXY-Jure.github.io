'use client';
import React, { useEffect } from 'react';
import { AXY_APP_ROUTES } from '../config/billing.js';

export default function Login() {
  useEffect(() => { window.location.replace(AXY_APP_ROUTES.authentication); }, []);
  return <main style={{ minHeight: '58vh', display: 'grid', placeItems: 'center', padding: '76px 24px', background: '#F9FAFB', textAlign: 'center' }}><div style={{ maxWidth: '520px' }}><div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.13em', color: '#2C8C99', fontWeight: 700 }}>AXY WORKSPACE</div><h1 style={{ margin: '14px 0 0', color: '#1F2B4D', fontSize: '36px', fontWeight: 800 }}>Opening AXY login…</h1><p style={{ margin: '14px 0 22px', color: '#667085', fontSize: '14px', lineHeight: 1.65 }}>Sign in through the secure AXY application.</p><a href={AXY_APP_ROUTES.authentication} style={{ display: 'inline-flex', padding: '13px 20px', borderRadius: '10px', background: '#32415C', color: '#fff', fontSize: '14px', fontWeight: 700 }}>Continue to login</a></div></main>;
}
