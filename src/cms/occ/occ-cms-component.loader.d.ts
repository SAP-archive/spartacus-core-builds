import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PageContext } from '../../routing/index';
import { CmsStructureConfig } from '../config/cms-structure.config';
import { CmsComponentAdapter } from '../services/cms-component.adapter';
import { CmsComponentLoader } from '../services/cms-component.loader';
import { CmsStructureConfigService } from '../services/cms-structure-config.service';
export declare class OccCmsComponentLoader extends CmsComponentLoader<any> {
    private http;
    protected config: CmsStructureConfig;
    protected cmsStructureConfigService: CmsStructureConfigService;
    protected adapter: CmsComponentAdapter<CmsComponent>;
    private occEndpoints;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, config: CmsStructureConfig, cmsStructureConfigService: CmsStructureConfigService, adapter: CmsComponentAdapter<CmsComponent>, occEndpoints: OccEndpointsService);
    protected getBaseEndPoint(): string;
    load<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    private getRequestParams;
}
