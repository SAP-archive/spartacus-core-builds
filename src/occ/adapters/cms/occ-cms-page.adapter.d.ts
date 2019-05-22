import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { PageContext } from '../../../routing';
import { CmsPageAdapter } from '../../../cms/connectors/page/cms-page.adapter';
import { ConverterService } from '../../../util/converter.service';
import { CmsStructureModel } from '../../../cms/model/page.model';
export declare class OccCmsPageAdapter implements CmsPageAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(pageContext: PageContext, fields?: string): Observable<CmsStructureModel>;
    private getPagesEndpoint;
    private getPagesRequestParams;
}
