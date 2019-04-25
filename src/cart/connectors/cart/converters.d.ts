import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { UICart } from '../../model/cart';
export declare const CART_NORMALIZER: InjectionToken<Converter<any, UICart>>;
