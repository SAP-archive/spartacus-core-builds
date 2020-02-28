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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuY29ubmVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImNtcy1wYWdlLmNvbm5lY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNQYWdlQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgY21zUGFnZUFkYXB0ZXI6IENtc1BhZ2VBZGFwdGVyO1xuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNtc1BhZ2VBZGFwdGVyOiBDbXNQYWdlQWRhcHRlciwgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIHBhZ2Ugc3RydWN0dXJlLiBUaGUgcGFnZSBzdHJ1Y3R1cmUgaXNcbiAgICAgKiB0eXBpY2FsbHkgbG9hZGVkIGZyb20gYSBiYWNrZW5kLCBidXQgY2FuIGFsc28gYmUgcmV0dXJuZWQgZnJvbSBzdGF0aWNcbiAgICAgKiBjb25maWd1cmF0aW9uIChzZWUgYENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VgKS5cbiAgICAgKi9cbiAgICBnZXQocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD47XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNZXJnZSBkZWZhdWx0IHBhZ2Ugc3RydWN0dXJlIGlub3QgdGhlIGdpdmVuIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAgICogVGhpcyBpcyBiZW5lZml0aWFsIGZvciBhIGZhc3Qgc2V0dXAgb2YgdGhlIFVJIHdpdGhvdXQgbmVjZXNzYXJ5XG4gICAgICogZmluZWdyYWluZWQgQ01TIHNldHVwLlxuICAgICAqL1xuICAgIHByaXZhdGUgbWVyZ2VEZWZhdWx0UGFnZVN0cnVjdHVyZTtcbn1cbiJdfQ==