import { Provider } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
/**
 * @deprecated since 1.3 - should be removed from public API and the logic should be moved to the function `initializeContext`
 */
export declare function inititializeContext(baseSiteService: BaseSiteService, langService: LanguageService, currService: CurrencyService): () => void;
export declare function initializeContext(baseSiteService: BaseSiteService, langService: LanguageService, currService: CurrencyService, configInit: ConfigInitializerService): () => void;
/**
 * @deprecated since 1.3 - should be removed
 */
export declare const deprecatedContextServiceProviders: Provider[];
export declare const contextServiceProviders: Provider[];
