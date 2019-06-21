import { I18nConfig } from '../config/i18n-config';
import { LanguageService } from '../../site-context/facade/language.service';
import { TranslationResources } from '../translation-resources';
export declare function i18nextInit(config: I18nConfig, languageService: LanguageService): () => Promise<any>;
export declare function i18nextAddTranslations(resources?: TranslationResources): void;
export declare function syncI18nextWithSiteContext(language: LanguageService): void;
