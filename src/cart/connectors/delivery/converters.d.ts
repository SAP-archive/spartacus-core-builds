import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Address } from '../../../model/address.model';
import { DeliveryMode } from '../../../model/order.model';
export declare const DELIVERY_ADDRESS_NORMALIZER: InjectionToken<Converter<any, Address>>;
export declare const DELIVERY_ADDRESS_SERIALIZER: InjectionToken<Converter<Address, any>>;
export declare const DELIVERY_MODE_NORMALIZER: InjectionToken<Converter<any, DeliveryMode>>;
