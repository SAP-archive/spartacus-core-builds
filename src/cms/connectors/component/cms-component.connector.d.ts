import { Observable } from 'rxjs';
import { CmsComponent } from '../../../occ/occ-models/index';
import { CmsComponentAdapter } from './cms-component.adapter';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { PageContext } from '../../../routing/models/page-context.model';
export declare class CmsComponentConnector {
    protected cmsStructureConfigService: CmsStructureConfigService;
    protected adapter: CmsComponentAdapter;
    constructor(cmsStructureConfigService: CmsStructureConfigService, adapter: CmsComponentAdapter);
    get<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    getList(ids: string[], pageContext: PageContext): Observable<CmsComponent[]>;
}
