import { Provider, Type } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { SiteContext } from '../facade/site-context.interface';
import { BaseSiteService } from '../facade/base-site.service';
export declare abstract class ContextServiceMap {
    [context: string]: Type<SiteContext<any>>;
}
export declare const LANGUAGE_CONTEXT_ID = "LANGUAGE";
export declare const CURRENCY_CONTEXT_ID = "CURRENCY";
export declare const BASE_SITE_CONTEXT_ID = "BASE_SITE";
export declare function serviceMapFactory(): {
    [LANGUAGE_CONTEXT_ID]: typeof LanguageService;
    [CURRENCY_CONTEXT_ID]: typeof CurrencyService;
    [BASE_SITE_CONTEXT_ID]: typeof BaseSiteService;
};
export declare const contextServiceMapProvider: Provider;
