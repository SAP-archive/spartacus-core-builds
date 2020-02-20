import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailsEffect {
    private actions$;
    private orderConnector;
    loadOrderDetails$: Observable<UserActions.OrderDetailsAction>;
    cancelOrder$: Observable<UserActions.OrderDetailsAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailsEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OrderDetailsEffect>;
}

//# sourceMappingURL=order-details.effect.d.ts.map