import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { UIProduct } from '../../model/product';
export declare const PRODUCT_NORMALIZER: InjectionToken<Converter<any, UIProduct>>;
