import { Observable } from 'rxjs';
import { CmsComponent } from '../../../model/cms.model';
import { OccConfig } from '../../../occ/config/occ-config';
import { PageContext } from '../../../routing/models/page-context.model';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { CmsComponentAdapter } from './cms-component.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CmsComponentConnector {
    protected cmsStructureConfigService: CmsStructureConfigService;
    protected adapter: CmsComponentAdapter;
    protected config: OccConfig;
    constructor(cmsStructureConfigService: CmsStructureConfigService, adapter: CmsComponentAdapter, config: OccConfig);
    get<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    getList(ids: string[], pageContext: PageContext): Observable<CmsComponent[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsComponentConnector>;
}

//# sourceMappingURL=cms-component.connector.d.ts.map