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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsPageConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNtcy1wYWdlLmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc1BhZ2VDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBjbXNQYWdlQWRhcHRlcjogQ21zUGFnZUFkYXB0ZXI7XG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY21zUGFnZUFkYXB0ZXI6IENtc1BhZ2VBZGFwdGVyLCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgcGFnZSBzdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZSBpc1xuICAgICAqIHR5cGljYWxseSBsb2FkZWQgZnJvbSBhIGJhY2tlbmQsIGJ1dCBjYW4gYWxzbyBiZSByZXR1cm5lZCBmcm9tIHN0YXRpY1xuICAgICAqIGNvbmZpZ3VyYXRpb24gKHNlZSBgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZWApLlxuICAgICAqL1xuICAgIGdldChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPjtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIE1lcmdlIGRlZmF1bHQgcGFnZSBzdHJ1Y3R1cmUgaW5vdCB0aGUgZ2l2ZW4gYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICAgKiBUaGlzIGlzIGJlbmVmaXRpYWwgZm9yIGEgZmFzdCBzZXR1cCBvZiB0aGUgVUkgd2l0aG91dCBuZWNlc3NhcnlcbiAgICAgKiBmaW5lZ3JhaW5lZCBDTVMgc2V0dXAuXG4gICAgICovXG4gICAgcHJpdmF0ZSBtZXJnZURlZmF1bHRQYWdlU3RydWN0dXJlO1xufVxuIl19