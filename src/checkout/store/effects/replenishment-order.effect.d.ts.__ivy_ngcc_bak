import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { CheckoutReplenishmentOrderConnector } from '../../connectors/index';
import { CheckoutActions } from '../actions/index';
export declare class ReplenishmentOrderEffects {
    private actions$;
    private checkoutReplOrderConnector;
    scheduleReplenishmentOrder$: Observable<CheckoutActions.ScheduleReplenishmentOrderSuccess | CheckoutActions.ScheduleReplenishmentOrderFail | CartActions.RemoveCart>;
    constructor(actions$: Actions, checkoutReplOrderConnector: CheckoutReplenishmentOrderConnector);
}
