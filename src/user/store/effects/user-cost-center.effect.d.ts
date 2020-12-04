import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserCostCenterConnector } from '../../connectors/cost-center/user-cost-center.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserCostCenterEffects {
    private actions$;
    private userCostCenterConnector;
    loadActiveCostCenters$: Observable<UserActions.UserCostCenterAction>;
    constructor(actions$: Actions, userCostCenterConnector: UserCostCenterConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserCostCenterEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserCostCenterEffects>;
}

//# sourceMappingURL=user-cost-center.effect.d.ts.map