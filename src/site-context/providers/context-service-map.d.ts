import { Provider, Type } from '@angular/core';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { SiteContext } from '../facade/site-context.interface';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID } from './context-ids';
export declare abstract class ContextServiceMap {
    [context: string]: Type<SiteContext<any>>;
}
export declare function serviceMapFactory(): {
    language: typeof LanguageService;
    currency: typeof CurrencyService;
    baseSite: typeof BaseSiteService;
};
export declare const contextServiceMapProvider: Provider;
