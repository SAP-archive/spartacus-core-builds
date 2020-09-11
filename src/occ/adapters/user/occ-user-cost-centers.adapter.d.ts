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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItY29zdC1jZW50ZXJzLmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXVzZXItY29zdC1jZW50ZXJzLmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVudGl0aWVzTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgVXNlckNvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL3VzZXItY29zdC1jZW50ZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1VzZXJDb3N0Q2VudGVyQWRhcHRlciBpbXBsZW1lbnRzIFVzZXJDb3N0Q2VudGVyQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBsb2FkQWN0aXZlTGlzdCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RW50aXRpZXNNb2RlbDxDb3N0Q2VudGVyPj47XG4gICAgcHJvdGVjdGVkIGdldENvc3RDZW50ZXJzRW5kcG9pbnQodXNlcklkOiBzdHJpbmcsIHBhcmFtcz86IFNlYXJjaENvbmZpZyk6IHN0cmluZztcbn1cbiJdfQ==