import React from 'react';
import privacy1 from './legal-content/privacy-1.js';
import privacy2 from './legal-content/privacy-2.js';
import privacy3 from './legal-content/privacy-3.js';
import privacy4 from './legal-content/privacy-4.js';
import terms1 from './legal-content/terms-1.js';
import terms2 from './legal-content/terms-2.js';
import terms3 from './legal-content/terms-3.js';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import utilityCatalog from '../i18n/locales/pages/utility.js';

const privacyPolicyHtml = [privacy1, privacy2, privacy3, privacy4].join('');
const termsAndConditionsHtml = [terms1, terms2, terms3].join('');

export default function Legal() {
  const { legal: copy } = useLocalizedCopy(utilityCatalog);
  React.useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return undefined;

    let active = true;
    const scrollToTarget = () => {
      if (active) document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    };
    const animationFrame = window.requestAnimationFrame(scrollToTarget);
    const timers = [250, 1000].map((delay) => window.setTimeout(scrollToTarget, delay));
    window.addEventListener('load', scrollToTarget, { once: true });
    document.fonts?.ready.then(scrollToTarget);

    return () => {
      active = false;
      window.cancelAnimationFrame(animationFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('load', scrollToTarget);
    };
  }, []);

  return (
    <main id="top" className="axy-legal-page">
      <style>{`
.axy-legal-page {
  --ink: #1f2b4d;
  --muted: #667085;
  --teal: #2c8c99;
  --line: #e4e8ef;
  --soft: #f7f9fc;
  color: var(--ink);
  background: linear-gradient(180deg, #f8fafc 0, #fff 420px);
  padding: 72px 24px 96px;
}
.axy-legal-shell { max-width: 1080px; margin: 0 auto; }
.axy-legal-eyebrow {
  font-family: "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px; letter-spacing: .12em; color: var(--teal); font-weight: 800;
}
.axy-legal-page h1 {
  margin: 14px 0 0; max-width: 760px; font-size: clamp(38px, 6vw, 58px);
  line-height: 1.04; letter-spacing: -.045em; color: var(--ink);
}
.axy-legal-lead {
  max-width: 760px; margin: 20px 0 0; font-size: 17px; line-height: 1.75; color: var(--muted);
}
.axy-legal-jump {
  position: sticky; top: 76px; z-index: 8; display: flex; flex-wrap: wrap; gap: 10px;
  margin: 32px 0 0; padding: 12px; border: 1px solid rgba(228,232,239,.9);
  border-radius: 14px; background: rgba(255,255,255,.92); backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(31,43,77,.06);
}
.axy-legal-jump a, .axy-legal-jump button {
  appearance: none; display: inline-flex; align-items: center; justify-content: center;
  min-height: 44px; padding: 9px 14px; border: 1px solid #d8dee8; border-radius: 9px;
  background: #fff; color: #32415c; font: inherit; font-size: 13px; font-weight: 750;
  cursor: pointer; text-decoration: none;
}
.axy-legal-jump a:hover, .axy-legal-jump a:focus-visible,
.axy-legal-jump button:hover, .axy-legal-jump button:focus-visible {
  border-color: var(--teal); color: #1f7a87; outline: none;
}
.axy-legal-doc {
  scroll-margin-top: 148px; margin-top: 42px; padding: clamp(26px, 5vw, 54px);
  background: #fff; border: 1px solid var(--line); border-radius: 22px;
  box-shadow: 0 24px 70px rgba(31,43,77,.08);
}
.axy-legal-doc + .axy-legal-doc { margin-top: 34px; }
.axy-legal-doc-header {
  padding-bottom: 28px; border-bottom: 1px solid var(--line); margin-bottom: 30px;
}
.axy-legal-doc-kicker {
  font-family: "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px; letter-spacing: .1em; color: var(--teal); font-weight: 800;
}
.axy-legal-doc h2 {
  margin: 10px 0 0; font-size: clamp(28px, 4vw, 40px); line-height: 1.12;
  letter-spacing: -.035em; color: var(--ink);
}
.axy-legal-body { font-size: 15px; line-height: 1.78; color: #3f4d6b; }
.axy-legal-body h3 {
  scroll-margin-top: 150px; margin: 42px 0 14px; padding-top: 4px;
  font-size: 20px; line-height: 1.35; letter-spacing: -.015em; color: var(--ink);
}
.axy-legal-body h3:first-child { margin-top: 0; }
.axy-legal-body p { margin: 0 0 16px; }
.axy-legal-body strong { color: #263553; font-weight: 750; }
.axy-legal-body a { color: #1f7a87; font-weight: 750; overflow-wrap: anywhere; }
.legal-definition {
  margin-left: 0 !important; padding: 12px 14px; border-left: 3px solid #b9dfe3;
  background: #f7fbfc; border-radius: 0 10px 10px 0;
}
.legal-list { margin: 2px 0 20px; padding-left: 23px; }
.legal-list li { margin: 8px 0; padding-left: 4px; }
.legal-list li::marker { color: var(--teal); }
.legal-table-scroll {
  margin: 22px 0 28px; overflow-x: auto; border: 1px solid var(--line);
  border-radius: 14px; background: #fff; -webkit-overflow-scrolling: touch;
}
.legal-table-scroll:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px; }
.legal-table { width: 100%; min-width: 680px; border-collapse: collapse; font-size: 13.5px; line-height: 1.6; }
.legal-table th {
  padding: 14px 16px; text-align: left; vertical-align: top; background: #eef6f7;
  color: var(--ink); font-size: 12px; letter-spacing: .02em; border-bottom: 1px solid #d7e6e8;
}
.legal-table td {
  padding: 15px 16px; vertical-align: top; color: #465472;
  border-bottom: 1px solid #edf0f4; border-right: 1px solid #edf0f4;
}
.legal-table tr:last-child td { border-bottom: 0; }
.legal-table td:last-child, .legal-table th:last-child { border-right: 0; }
.axy-legal-back {
  display: inline-flex; margin-top: 28px; color: #1f7a87; font-size: 13px; font-weight: 750;
}
@media (max-width: 720px) {
  .axy-legal-page { padding: 48px 14px 72px; }
  .axy-legal-jump { top: 70px; margin-top: 24px; padding: 9px; }
  .axy-legal-jump a, .axy-legal-jump button { flex: 1 1 135px; font-size: 12px; }
  .axy-legal-doc { margin-top: 28px; padding: 24px 18px; border-radius: 16px; }
  .axy-legal-doc-header { padding-bottom: 21px; margin-bottom: 24px; }
  .axy-legal-body { font-size: 15px; line-height: 1.74; }
  .axy-legal-body h3 { margin-top: 34px; font-size: 18px; }
  .legal-definition { padding: 10px 12px; }
}
@media (max-width: 360px) {
  .axy-legal-page { padding-right: 10px; padding-left: 10px; }
  .axy-legal-jump { position: static; top: auto; }
  .axy-legal-doc,
  .axy-legal-body h3 { scroll-margin-top: 76px; }
  .axy-legal-doc { padding: 22px 14px; }
}
@media print {
  .axy-legal-page { background: #fff; padding: 0; }
  .axy-legal-jump, .axy-legal-back { display: none !important; }
  .axy-legal-doc { border: 0; box-shadow: none; padding: 0; margin: 0 0 48px; }
  .axy-legal-doc + .axy-legal-doc { page-break-before: always; }
  .legal-table-scroll { overflow: visible; }
  .legal-table { min-width: 0; }
}
`}</style>
      <div className="axy-legal-shell">
        <div className="axy-legal-eyebrow">{copy.eyebrow}</div>
        <h1>{copy.title}</h1>
        <p className="axy-legal-lead">{copy.lead}</p>
        <p className="axy-legal-lead">{copy.authoritative}</p>

        <nav className="axy-legal-jump" aria-label={copy.navigation}>
          <a href="#privacy-policy">{copy.privacy}</a>
          <a href="#terms-and-conditions">{copy.terms}</a>
          <button type="button" onClick={() => window.dispatchEvent(new Event('axy:open-cookie-settings'))}>
            {copy.cookies}
          </button>
        </nav>

        <article id="privacy-policy" className="axy-legal-doc" aria-labelledby="privacy-policy-title">
          <header className="axy-legal-doc-header">
            <div className="axy-legal-doc-kicker">AXY</div>
            <h2 id="privacy-policy-title">{copy.privacy}</h2>
          </header>
          <div className="axy-legal-body" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
          <a className="axy-legal-back" href="#top">{copy.back}</a>
        </article>

        <article id="terms-and-conditions" className="axy-legal-doc" aria-labelledby="terms-title">
          <header className="axy-legal-doc-header">
            <div className="axy-legal-doc-kicker">AXY</div>
            <h2 id="terms-title">{copy.terms}</h2>
          </header>
          <div className="axy-legal-body" dangerouslySetInnerHTML={{ __html: termsAndConditionsHtml }} />
          <a className="axy-legal-back" href="#top">{copy.back}</a>
        </article>
      </div>
    </main>
  );
}
