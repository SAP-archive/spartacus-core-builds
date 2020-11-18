import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Order } from '../../../model/order.model';
import { PointOfService } from '../../../model/point-of-service.model';
export declare const ORDER_NORMALIZER: InjectionToken<Converter<any, Order>>;
export declare const POINT_OF_SERVICE_NORMALIZER: InjectionToken<Converter<any, PointOfService>>;
