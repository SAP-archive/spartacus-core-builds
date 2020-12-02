import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserReplenishmentOrderConnector } from '../../connectors/replenishment-order/user-replenishment-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserReplenishmentOrdersEffect {
    private actions$;
    private replenishmentOrderConnector;
    loadUserReplenishmentOrders$: Observable<UserActions.UserReplenishmentOrdersAction>;
    constructor(actions$: Actions, replenishmentOrderConnector: UserReplenishmentOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserReplenishmentOrdersEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserReplenishmentOrdersEffect>;
}

//# sourceMappingURL=user-replenishment-orders.effect.d.ts.map