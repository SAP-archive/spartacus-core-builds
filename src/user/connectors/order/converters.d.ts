import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { OrderHistoryList } from '../../../model/order.model';
import { ConsignmentTracking } from '../../../model/consignment-tracking.model';
export declare const ORDER_HISTORY_NORMALIZER: InjectionToken<Converter<any, OrderHistoryList>>;
export declare const CONSIGNMENT_TRACKING_NORMALIZER: InjectionToken<Converter<any, ConsignmentTracking>>;
