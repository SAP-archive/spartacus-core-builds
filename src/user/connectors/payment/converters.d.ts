import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Country, Region } from '../../../model/address.model';
export declare const COUNTRY_NORMALIZER: InjectionToken<Converter<any, Country>>;
export declare const REGION_NORMALIZER: InjectionToken<Converter<any, Region>>;
