import { Observable } from 'rxjs';
import { CostCenter } from '../../../model/org-unit.model';
import { UserCostCenterAdapter } from './user-cost-center.adapter';
import { EntitiesModel } from '../../../model/misc.model';
export declare class UserCostCenterConnector {
    protected adapter: UserCostCenterAdapter;
    constructor(adapter: UserCostCenterAdapter);
    getActiveList(userId: string): Observable<EntitiesModel<CostCenter>>;
}
