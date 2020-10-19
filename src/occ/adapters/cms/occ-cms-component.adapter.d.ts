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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCmsComponentAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCmsComponentAdapter>;
}

//# sourceMappingURL=occ-cms-component.adapter.d.ts.map