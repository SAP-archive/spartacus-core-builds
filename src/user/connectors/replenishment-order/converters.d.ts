import { InjectionToken } from '@angular/core';
import { ReplenishmentOrderList } from '../../../model/replenishment-order.model';
import { Converter } from '../../../util/converter.service';
export declare const REPLENISHMENT_ORDER_HISTORY_NORMALIZER: InjectionToken<Converter<any, ReplenishmentOrderList>>;
