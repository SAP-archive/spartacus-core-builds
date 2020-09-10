import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CostCenterAdapter } from '../../../organization/connectors/cost-center/cost-center.adapter';
import { UserCostCenterAdapter } from '../../../user/connectors/cost-center/user-cost-center.adapter';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { B2BSearchConfig } from '../../../organization/model/search-config';
import { CostCenter } from '../../../model/org-unit.model';
import { EntitiesModel } from '../../../model/misc.model';
import { Budget } from '../../../model/budget.model';
export declare class OccCostCenterAdapter implements CostCenterAdapter, UserCostCenterAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(userId: string, costCenterCode: string): Observable<CostCenter>;
    loadList(userId: string, params?: B2BSearchConfig): Observable<EntitiesModel<CostCenter>>;
    loadActiveList(userId: string): Observable<EntitiesModel<CostCenter>>;
    create(userId: string, costCenter: CostCenter): Observable<CostCenter>;
    update(userId: string, costCenterCode: string, costCenter: CostCenter): Observable<CostCenter>;
    loadBudgets(userId: string, costCenterCode: string, params?: B2BSearchConfig): Observable<EntitiesModel<Budget>>;
    assignBudget(userId: string, costCenterCode: string, budgetCode: string): Observable<any>;
    unassignBudget(userId: string, costCenterCode: string, budgetCode: string): Observable<any>;
    protected getCostCenterEndpoint(userId: string, costCenterCode: string): string;
    protected getCostCentersEndpoint(userId: string, params?: B2BSearchConfig): string;
    protected getAllCostCentersEndpoint(userId: string, params?: B2BSearchConfig): string;
    protected getBudgetsEndpoint(userId: string, costCenterCode: string, params?: B2BSearchConfig | {
        budgetCode: string;
    }): string;
    protected getBudgetEndpoint(userId: string, costCenterCode: string, budgetCode: string): string;
}
