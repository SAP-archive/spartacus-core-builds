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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsidXNlci1jb3N0LWNlbnRlci5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQ29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXItY29zdC1jZW50ZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBFbnRpdGllc01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyQ29zdENlbnRlckNvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJDb3N0Q2VudGVyQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBVc2VyQ29zdENlbnRlckFkYXB0ZXIpO1xuICAgIGdldEFjdGl2ZUxpc3QodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8Q29zdENlbnRlcj4+O1xufVxuIl19