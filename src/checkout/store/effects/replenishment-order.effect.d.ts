import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { CheckoutReplenishmentOrderConnector } from '../../connectors/index';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ReplenishmentOrderEffects {
    private actions$;
    private checkoutReplOrderConnector;
    scheduleReplenishmentOrder$: Observable<CheckoutActions.ScheduleReplenishmentOrderSuccess | CheckoutActions.ScheduleReplenishmentOrderFail | CartActions.RemoveCart>;
    constructor(actions$: Actions, checkoutReplOrderConnector: CheckoutReplenishmentOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReplenishmentOrderEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ReplenishmentOrderEffects>;
}

//# sourceMappingURL=replenishment-order.effect.d.ts.map