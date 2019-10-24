import { InjectionToken } from '@angular/core';
import { Voucher } from '../../../model/cart.model';
import { Converter } from '../../../util/converter.service';
export declare const CART_VOUCHER_NORMALIZER: InjectionToken<Converter<any, Voucher>>;
