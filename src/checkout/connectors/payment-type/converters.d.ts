import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { PaymentType } from '../../../model/cart.model';
export declare const PAYMENT_TYPE_NORMALIZER: InjectionToken<Converter<any, PaymentType>>;
