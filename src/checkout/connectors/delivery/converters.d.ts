import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { DeliveryMode } from '../../../model/order.model';
export declare const DELIVERY_MODE_NORMALIZER: InjectionToken<Converter<any, DeliveryMode>>;
