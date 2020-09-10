import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserActions } from '../actions/index';
import { UserCostCenterConnector } from '../../connectors/cost-center/user-cost-center.connector';
export declare class UserCostCenterEffects {
    private actions$;
    private userCostCenterConnector;
    loadActiveCostCenters$: Observable<UserActions.UserCostCenterAction>;
    constructor(actions$: Actions, userCostCenterConnector: UserCostCenterConnector);
}
