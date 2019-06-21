import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Order } from '../../../model/order.model';
export declare const ORDER_NORMALIZER: InjectionToken<Converter<any, Order>>;
