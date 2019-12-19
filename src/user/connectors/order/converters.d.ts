import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { OrderHistoryList, ReturnRequestEntryInputList, ReturnRequestList, ReturnRequest } from '../../../model/order.model';
import { ConsignmentTracking } from '../../../model/consignment-tracking.model';
export declare const ORDER_HISTORY_NORMALIZER: InjectionToken<Converter<any, OrderHistoryList>>;
export declare const CONSIGNMENT_TRACKING_NORMALIZER: InjectionToken<Converter<any, ConsignmentTracking>>;
export declare const ORDER_RETURN_REQUEST_NORMALIZER: InjectionToken<Converter<any, ReturnRequest>>;
export declare const ORDER_RETURN_REQUEST_INPUT_SERIALIZER: InjectionToken<Converter<ReturnRequestEntryInputList, any>>;
export declare const ORDER_RETURNS_NORMALIZER: InjectionToken<Converter<any, ReturnRequestList>>;
