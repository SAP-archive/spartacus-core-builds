import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Cart } from '../../../model/cart.model';
export declare const CART_NORMALIZER: InjectionToken<Converter<any, Cart>>;
