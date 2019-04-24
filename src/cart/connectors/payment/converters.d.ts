import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { PaymentDetails } from '../../../occ/occ-models/occ.models';
export declare const CART_PAYMENT_DETAILS_NORMALIZER: InjectionToken<Converter<any, PaymentDetails>>;
export declare const CART_PAYMENT_DETAILS_SERIALIZER: InjectionToken<Converter<PaymentDetails, any>>;
