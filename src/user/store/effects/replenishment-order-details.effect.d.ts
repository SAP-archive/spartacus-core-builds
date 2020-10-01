import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/index';
import { UserReplenishmentOrderConnector } from '../../connectors/replenishment-order/user-replenishment-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ReplenishmentOrderDetailsEffect {
    private actions$;
    private replenishmentOrderConnector;
    private globalMessageService;
    loadReplenishmentOrderDetails$: Observable<UserActions.ReplenishmentOrderDetailsAction>;
    cancelReplenishmentOrder$: Observable<UserActions.ReplenishmentOrderDetailsAction>;
    constructor(actions$: Actions, replenishmentOrderConnector: UserReplenishmentOrderConnector, globalMessageService: GlobalMessageService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReplenishmentOrderDetailsEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ReplenishmentOrderDetailsEffect>;
}

//# sourceMappingURL=replenishment-order-details.effect.d.ts.map