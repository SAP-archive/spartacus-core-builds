import { Provider } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { OccConfig } from '../../occ/config/occ-config';
import { BaseSiteService } from '../facade/base-site.service';
export declare function inititializeContext(config: OccConfig, baseSiteService: BaseSiteService, langService: LanguageService, currService: CurrencyService): () => void;
export declare const contextServiceProviders: Provider[];
