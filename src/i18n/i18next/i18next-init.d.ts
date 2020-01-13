import { HttpClient } from '@angular/common/http';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { LanguageService } from '../../site-context/facade/language.service';
import { TranslationResources } from '../translation-resources';
export declare function i18nextInit(configInit: ConfigInitializerService, languageService: LanguageService, httpClient: HttpClient): () => Promise<any>;
export declare function i18nextAddTranslations(resources?: TranslationResources): void;
export declare function syncI18nextWithSiteContext(language: LanguageService): void;
/**
 * Returns a function appropriate for i18next to make http calls for JSON files.
 * See docs for `i18next-xhr-backend`: https://github.com/i18next/i18next-xhr-backend#backend-options
 *
 * It uses Angular HttpClient under the hood, so it works in SSR.
 * @param httpClient Angular http client
 */
export declare function i18nextGetHttpClient(httpClient: HttpClient): (url: string, options: object, callback: Function, data: object) => void;
