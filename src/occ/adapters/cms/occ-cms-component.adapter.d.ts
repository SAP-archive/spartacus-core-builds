import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsComponentAdapter } from '../../../cms/connectors/component/cms-component.adapter';
import { CmsComponent } from '../../../model/cms.model';
import { PageContext } from '../../../routing';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCmsComponentAdapter implements CmsComponentAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    findComponentsByIds(ids: string[], pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponent[]>;
    findComponentsByIdsLegacy(ids: string[], pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponent[]>;
    protected getComponentEndPoint(id: string, pageContext: PageContext): string;
    protected getComponentsEndpoint(requestParams: any, fields: string): string;
    private getPaginationParams;
    private getContextParams;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCmsComponentAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCmsComponentAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtY21zLWNvbXBvbmVudC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ21zQ29tcG9uZW50QWRhcHRlciBpbXBsZW1lbnRzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICAgIHByaXZhdGUgaHR0cDtcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50cztcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihpZDogc3RyaW5nLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGZpbmRDb21wb25lbnRzQnlJZHMoaWRzOiBzdHJpbmdbXSwgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmaWVsZHM/OiBzdHJpbmcsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+O1xuICAgIGZpbmRDb21wb25lbnRzQnlJZHNMZWdhY3koaWRzOiBzdHJpbmdbXSwgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmaWVsZHM/OiBzdHJpbmcsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciwgc29ydD86IHN0cmluZyk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+O1xuICAgIHByb3RlY3RlZCBnZXRDb21wb25lbnRFbmRQb2ludChpZDogc3RyaW5nLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zOiBhbnksIGZpZWxkczogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByaXZhdGUgZ2V0UGFnaW5hdGlvblBhcmFtcztcbiAgICBwcml2YXRlIGdldENvbnRleHRQYXJhbXM7XG59XG4iXX0=