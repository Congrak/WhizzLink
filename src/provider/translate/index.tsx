"use client";

import { useEffect, useState } from "react"
import { IntlProvider } from "react-intl"

export const TranslateProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocale] = useState('en');
    const [messages, setMessages] = useState({});

    const loadLocaleData = async (locale: string) => {
      try {
        const messages = await import(`../../locales/${locale}.json`);
        setMessages(messages.default);
      } catch (error) {
        console.error("Error loading lenguage:", error);
      }
    };

    useEffect(() => {
      if (typeof window !== 'undefined') {
      const browserLocale = navigator.language.startsWith('es') ? 'es' : 'en';
      setLocale(browserLocale);
      }
    }, [])

    useEffect(() => {
        loadLocaleData(locale);
    }, [locale]);

    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
    };
    return (
        <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
            {children}
        </IntlProvider>
    )
}