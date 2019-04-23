import { InjectionToken } from '@angular/core';
import { Product } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
export declare const PRODUCT_NORMALIZER: InjectionToken<Converter<any, Product>>;
