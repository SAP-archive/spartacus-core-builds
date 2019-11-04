import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { LanguageService } from '../../site-context/facade/language.service';
import { TranslationResources } from '../translation-resources';
export declare function i18nextInit(configInit: ConfigInitializerService, languageService: LanguageService): () => Promise<any>;
export declare function i18nextAddTranslations(resources?: TranslationResources): void;
export declare function syncI18nextWithSiteContext(language: LanguageService): void;
