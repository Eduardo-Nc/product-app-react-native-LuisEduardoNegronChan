import { I18n } from 'i18n-js';

//JSONS
import es from './Translations/es.json';

export const i18n = new I18n(es);
export const translationGetters = {
  es: () => es,
};

const fallback = { languageTag: 'es', isRTL: false };

const { languageTag } =
  fallback;
i18n.translations = { [languageTag]: translationGetters[languageTag]() };
i18n.locale = languageTag;

export function translate(key) {
  return key ? i18n.t(key) : null;
}
