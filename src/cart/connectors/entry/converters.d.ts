import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { CartModification } from '../../../model/cart.model';
export declare const CART_MODIFICATION_NORMALIZER: InjectionToken<Converter<any, CartModification>>;
