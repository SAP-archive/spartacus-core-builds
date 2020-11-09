import { Observable } from 'rxjs';
import { ReplenishmentOrder, ScheduleReplenishmentForm } from '../../../model/replenishment-order.model';
import { CheckoutReplenishmentOrderAdapter } from './checkout-replenishment-order.adapter';
export declare class CheckoutReplenishmentOrderConnector {
    protected adapter: CheckoutReplenishmentOrderAdapter;
    constructor(adapter: CheckoutReplenishmentOrderAdapter);
    scheduleReplenishmentOrder(cartId: string, scheduleReplenishmentForm: ScheduleReplenishmentForm, termsChecked: boolean, userId: string): Observable<ReplenishmentOrder>;
}
