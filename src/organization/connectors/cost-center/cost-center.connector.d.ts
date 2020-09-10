import { Observable } from 'rxjs';
import { CostCenter } from '../../../model/org-unit.model';
import { CostCenterAdapter } from './cost-center.adapter';
import { B2BSearchConfig } from '../../model/search-config';
import { EntitiesModel } from '../../../model/misc.model';
import { Budget } from '../../../model/budget.model';
export declare class CostCenterConnector {
    protected adapter: CostCenterAdapter;
    constructor(adapter: CostCenterAdapter);
    get(userId: string, costCenterCode: string): Observable<CostCenter>;
    getList(userId: string, params?: B2BSearchConfig): Observable<EntitiesModel<CostCenter>>;
    create(userId: string, costCenter: CostCenter): Observable<CostCenter>;
    update(userId: string, costCenterCode: string, costCenter: CostCenter): Observable<CostCenter>;
    getBudgets(userId: string, costCenterCode: string, params?: B2BSearchConfig): Observable<EntitiesModel<Budget>>;
    assignBudget(userId: string, costCenterCode: string, budgetCode: string): Observable<any>;
    unassignBudget(userId: string, costCenterCode: string, budgetCode: string): Observable<any>;
}
