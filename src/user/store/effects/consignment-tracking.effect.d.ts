import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ConsignmentTrackingEffects {
    private actions$;
    private userOrderConnector;
    loadConsignmentTracking$: Observable<UserActions.ConsignmentTrackingAction>;
    constructor(actions$: Actions, userOrderConnector: UserOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsignmentTrackingEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ConsignmentTrackingEffects>;
}

//# sourceMappingURL=consignment-tracking.effect.d.ts.map