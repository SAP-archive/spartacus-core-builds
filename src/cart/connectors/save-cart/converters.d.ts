import { InjectionToken } from '@angular/core';
import { SaveCartResult } from '../../../model/cart.model';
import { Converter } from '../../../util/converter.service';
export declare const SAVE_CART_NORMALIZER: InjectionToken<Converter<any, SaveCartResult>>;
