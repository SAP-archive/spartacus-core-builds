import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserOrdersEffect {
    private actions$;
    private orderConnector;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    loadUserOrders$: Observable<UserActions.UserOrdersAction>;
    resetUserOrders$: Observable<UserActions.ClearUserOrders>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrdersEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserOrdersEffect>;
}

//# sourceMappingURL=user-orders.effect.d.ts.map