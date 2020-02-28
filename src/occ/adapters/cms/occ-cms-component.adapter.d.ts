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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtY21zLWNvbXBvbmVudC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQWFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0Ntc0NvbXBvbmVudEFkYXB0ZXIgaW1wbGVtZW50cyBDbXNDb21wb25lbnRBZGFwdGVyIHtcbiAgICBwcml2YXRlIGh0dHA7XG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oaWQ6IHN0cmluZywgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxUPjtcbiAgICBmaW5kQ29tcG9uZW50c0J5SWRzKGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZmllbGRzPzogc3RyaW5nLCBjdXJyZW50UGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPjtcbiAgICBmaW5kQ29tcG9uZW50c0J5SWRzTGVnYWN5KGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZmllbGRzPzogc3RyaW5nLCBjdXJyZW50UGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPjtcbiAgICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50RW5kUG9pbnQoaWQ6IHN0cmluZywgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBnZXRDb21wb25lbnRzRW5kcG9pbnQocmVxdWVzdFBhcmFtczogYW55LCBmaWVsZHM6IHN0cmluZyk6IHN0cmluZztcbiAgICBwcml2YXRlIGdldFBhZ2luYXRpb25QYXJhbXM7XG4gICAgcHJpdmF0ZSBnZXRDb250ZXh0UGFyYW1zO1xufVxuIl19