import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../../model/cms.model';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { PageContext } from '../../../routing';
import { ConverterService } from '../../../util/converter.service';
import { CmsComponentAdapter } from '../../../cms/connectors/component/cms-component.adapter';
export declare class OccCmsComponentAdapter implements CmsComponentAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    findComponentsByIds(ids: string[], pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponent[]>;
    searchComponentsByIds(ids: string[], pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponent[]>;
    protected getComponentEndPoint(id: string, pageContext: PageContext): string;
    protected getComponentsEndpoint(requestParams: any, fields: string): string;
    private getPaginationParams;
    private getContextParams;
}
