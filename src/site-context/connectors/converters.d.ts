import { InjectionToken } from '@angular/core';
import { Converter } from '../../util/converter.service';
import { Currency, Language } from '../../model/misc.model';
export declare const LANGUAGE_NORMALIZER: InjectionToken<Converter<any, Language>>;
export declare const CURRENCY_NORMALIZER: InjectionToken<Converter<any, Currency>>;
