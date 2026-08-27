import React from 'react';
import { useI18n } from './I18nProvider.jsx';

export default function LocalizedLink({ href, locale, children, ...props }) {
  const { hrefForLocale } = useI18n();
  return <a href={hrefForLocale(href, locale)} {...props}>{children}</a>;
}
