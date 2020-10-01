import { InjectionToken } from '@angular/core';
import { ReplenishmentOrder, ScheduleReplenishmentForm } from '../../../model/replenishment-order.model';
import { Converter } from '../../../util/converter.service';
export declare const REPLENISHMENT_ORDER_NORMALIZER: InjectionToken<Converter<any, ReplenishmentOrder>>;
export declare const REPLENISHMENT_ORDER_FORM_SERIALIZER: InjectionToken<Converter<ScheduleReplenishmentForm, any>>;
