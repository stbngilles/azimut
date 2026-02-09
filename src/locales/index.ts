import { fr } from './fr';
import { en } from './en';
import { es } from './es';
import { it } from './it';
import { pt } from './pt';
import { de } from './de';
import { lb } from './lb';

export const translations = {
    fr,
    en,
    es,
    it,
    pt,
    de,
    lb
} as const;

export type Locale = keyof typeof translations;
export type TranslationType = typeof fr;
