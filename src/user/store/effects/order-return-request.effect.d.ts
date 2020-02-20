import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OrderReturnRequestEffect {
    private actions$;
    private orderConnector;
    createReturnRequest$: Observable<UserActions.OrderReturnRequestAction>;
    loadReturnRequest$: Observable<UserActions.OrderReturnRequestAction>;
    cancelReturnRequest$: Observable<UserActions.OrderReturnRequestAction>;
    loadReturnRequestList$: Observable<UserActions.OrderReturnRequestAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnRequestEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OrderReturnRequestEffect>;
}

//# sourceMappingURL=order-return-request.effect.d.ts.map