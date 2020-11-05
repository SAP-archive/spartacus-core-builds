import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector, UserReplenishmentOrderConnector } from '../../connectors/index';
import { UserActions } from '../actions/index';
export declare class UserOrdersEffect {
    private actions$;
    private orderConnector;
    private replenishmentOrderConnector;
    constructor(actions$: Actions, orderConnector: UserOrderConnector, replenishmentOrderConnector: UserReplenishmentOrderConnector);
    loadUserOrders$: Observable<UserActions.UserOrdersAction>;
    resetUserOrders$: Observable<UserActions.ClearUserOrders>;
}
