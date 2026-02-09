'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale, TranslationType } from '@/locales';

interface I18nContextType {
    locale: Locale;
    t: TranslationType;
    setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('fr');

    useEffect(() => {
        // Load preference from localStorage
        const savedLocale = localStorage.getItem('azimut-locale') as Locale;
        if (savedLocale && translations[savedLocale]) {
            setLocaleState(savedLocale);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('azimut-locale', newLocale);
        // Also update HTML lang attribute
        document.documentElement.lang = newLocale;
    };

    const value = {
        locale,
        t: translations[locale],
        setLocale
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}
