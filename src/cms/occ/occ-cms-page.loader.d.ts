import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsComponentList, CMSPage } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PageContext } from '../../routing/index';
import { CmsStructureConfig } from '../config/cms-structure.config';
import { IdList } from '../model/idList.model';
import { CmsPageAdapter } from '../services/cms-page.adapter';
import { CmsPageLoader } from '../services/cms-page.loader';
import { CmsStructureConfigService } from '../services/cms-structure-config.service';
export declare class OccCmsPageLoader extends CmsPageLoader<CMSPage> {
    private http;
    protected config: CmsStructureConfig;
    protected cmsStructureConfigService: CmsStructureConfigService;
    protected adapter: CmsPageAdapter<CMSPage>;
    private occEndpoints;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, config: CmsStructureConfig, cmsStructureConfigService: CmsStructureConfigService, adapter: CmsPageAdapter<CMSPage>, occEndpoints: OccEndpointsService);
    protected getBaseEndPoint(): string;
    load(pageContext: PageContext, fields?: string): Observable<CMSPage>;
    loadListComponents(idList: IdList, pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponentList>;
    private getRequestParams;
}
