import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Address, DeliveryMode } from '../../../occ/occ-models/occ.models';
export declare const DELIVERY_ADDRESS_NORMALIZER: InjectionToken<Converter<any, Address>>;
export declare const DELIVERY_ADDRESS_SERIALIZER: InjectionToken<Converter<Address, any>>;
export declare const DELIVERY_MODE_NORMALIZER: InjectionToken<Converter<any, DeliveryMode>>;
