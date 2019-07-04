import { Provider, Type } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { SiteContext } from '../facade/site-context.interface';
import { BaseSiteService } from '../facade/base-site.service';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID } from './context-ids';
export declare abstract class ContextServiceMap {
    [context: string]: Type<SiteContext<any>>;
}
export declare function serviceMapFactory(): {
    [LANGUAGE_CONTEXT_ID]: typeof LanguageService;
    [CURRENCY_CONTEXT_ID]: typeof CurrencyService;
    [BASE_SITE_CONTEXT_ID]: typeof BaseSiteService;
};
export declare const contextServiceMapProvider: Provider;
