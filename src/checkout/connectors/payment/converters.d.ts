import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { CardType, PaymentDetails } from '../../../model/cart.model';
export declare const PAYMENT_DETAILS_NORMALIZER: InjectionToken<Converter<any, PaymentDetails>>;
export declare const PAYMENT_DETAILS_SERIALIZER: InjectionToken<Converter<PaymentDetails, any>>;
export declare const CARD_TYPE_NORMALIZER: InjectionToken<Converter<any, CardType>>;
