import { Observable } from 'rxjs';
import { ReplenishmentOrder, ScheduleReplenishmentForm } from '../../../model/replenishment-order.model';
import { CheckoutReplenishmentOrderAdapter } from './checkout-replenishment-order.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutReplenishmentOrderConnector {
    protected adapter: CheckoutReplenishmentOrderAdapter;
    constructor(adapter: CheckoutReplenishmentOrderAdapter);
    scheduleReplenishmentOrder(cartId: string, scheduleReplenishmentForm: ScheduleReplenishmentForm, termsChecked: boolean, userId: string): Observable<ReplenishmentOrder>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutReplenishmentOrderConnector, never>;
}

//# sourceMappingURL=checkout-replenishment-order.connector.d.ts.map