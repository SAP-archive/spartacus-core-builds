import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { OrderHistoryList } from '../../../model/order.model';
export declare const ORDER_HISTORY_NORMALIZER: InjectionToken<Converter<any, OrderHistoryList>>;
