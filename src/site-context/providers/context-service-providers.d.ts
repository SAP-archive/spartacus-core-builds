import { Provider } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
export declare function initializeContext(baseSiteService: BaseSiteService, langService: LanguageService, currService: CurrencyService, configInit: ConfigInitializerService): () => void;
export declare const contextServiceProviders: Provider[];
