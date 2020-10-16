import { Observable } from 'rxjs';
import { CmsPageAdapter } from './cms-page.adapter';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { PageContext } from '../../../routing/models/page-context.model';
import { CmsStructureModel } from '../../model/page.model';
import * as ɵngcc0 from '@angular/core';
export declare class CmsPageConnector {
    protected cmsPageAdapter: CmsPageAdapter;
    protected cmsStructureConfigService: CmsStructureConfigService;
    constructor(cmsPageAdapter: CmsPageAdapter, cmsStructureConfigService: CmsStructureConfigService);
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     */
    get(pageContext: PageContext): Observable<CmsStructureModel>;
    /**
     *
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     */
    private mergeDefaultPageStructure;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsPageConnector, never>;
}

//# sourceMappingURL=cms-page.connector.d.ts.map