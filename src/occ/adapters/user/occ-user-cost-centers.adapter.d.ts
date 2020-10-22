import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntitiesModel } from '../../../model/misc.model';
import { CostCenter } from '../../../model/org-unit.model';
import { SearchConfig } from '../../../product/model/search-config';
import { UserCostCenterAdapter } from '../../../user/connectors/cost-center/user-cost-center.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserCostCenterAdapter implements UserCostCenterAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadActiveList(userId: string): Observable<EntitiesModel<CostCenter>>;
    protected getCostCentersEndpoint(userId: string, params?: SearchConfig): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserCostCenterAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserCostCenterAdapter>;
}

//# sourceMappingURL=occ-user-cost-centers.adapter.d.ts.map