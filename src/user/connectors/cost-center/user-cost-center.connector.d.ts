import { Observable } from 'rxjs';
import { CostCenter } from '../../../model/org-unit.model';
import { UserCostCenterAdapter } from './user-cost-center.adapter';
import { EntitiesModel } from '../../../model/misc.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserCostCenterConnector {
    protected adapter: UserCostCenterAdapter;
    constructor(adapter: UserCostCenterAdapter);
    getActiveList(userId: string): Observable<EntitiesModel<CostCenter>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserCostCenterConnector, never>;
}

//# sourceMappingURL=user-cost-center.connector.d.ts.map