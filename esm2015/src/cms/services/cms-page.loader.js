/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CmsPageAdapter } from './cms-page.adapter';
import { CmsStructureConfigService } from './cms-structure-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-structure-config.service";
import * as i2 from "./cms-page.adapter";
/**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 * @abstract
 * @template T
 */
export class CmsPageLoader {
    /**
     * @param {?} cmsStructureConfigService
     * @param {?} adapter
     */
    constructor(cmsStructureConfigService, adapter) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
    }
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     * @param {?} pageContext
     * @return {?}
     */
    get(pageContext) {
        return this.cmsStructureConfigService
            .shouldIgnoreBackend(pageContext.id)
            .pipe(switchMap(loadFromConfig => {
            if (!loadFromConfig) {
                return this.load(pageContext).pipe(map(page => this.adapt(page)), catchError(error => {
                    if (error instanceof HttpErrorResponse &&
                        error.status === 400) {
                        return of({});
                    }
                    else {
                        return throwError(error);
                    }
                }));
            }
            else {
                return of({});
            }
        }), switchMap(page => this.mergeDefaultPageStructure(pageContext, page)));
    }
    /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param {?} page the source that can be converted
     * @return {?}
     */
    adapt(page) {
        if (this.adapter) {
            return this.adapter.adapt((/** @type {?} */ (page)));
        }
        return (/** @type {?} */ (page));
    }
    /**
     *
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     * @private
     * @param {?} pageContext
     * @param {?} pageStructure
     * @return {?}
     */
    mergeDefaultPageStructure(pageContext, pageStructure) {
        return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
    }
}
CmsPageLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsPageLoader.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsPageAdapter, decorators: [{ type: Optional }] }
];
/** @nocollapse */ CmsPageLoader.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageLoader_Factory() { return new CmsPageLoader(i0.inject(i1.CmsStructureConfigService), i0.inject(i2.CmsPageAdapter, 8)); }, token: CmsPageLoader, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmsPageLoader.prototype.cmsStructureConfigService;
    /**
     * @type {?}
     * @protected
     */
    CmsPageLoader.prototype.adapter;
    /**
     * Abstract method must be used to load the page structure for a given `PageContext`.
     * The page can be loaded from alternative sources, as long as the structure
     * converts to the `CmsStructureModel`.
     *
     * @abstract
     * @param {?} pageContext The `PageContext` holding the page Id.
     * @return {?}
     */
    CmsPageLoader.prototype.load = function (pageContext) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UubG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zZXJ2aWNlcy9jbXMtcGFnZS5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7OztBQVMzRSxNQUFNLE9BQWdCLGFBQWE7Ozs7O0lBQ2pDLFlBQ1kseUJBQW9ELEVBQ3hDLE9BQTBCO1FBRHRDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDeEMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDL0MsQ0FBQzs7Ozs7Ozs7SUFnQkosR0FBRyxDQUFDLFdBQXdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FDSCxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2pCLElBQ0UsS0FBSyxZQUFZLGlCQUFpQjt3QkFDbEMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQ3BCO3dCQUNBLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMxQjtnQkFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDckUsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7OztJQVNELEtBQUssQ0FBQyxJQUFPO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQUcsSUFBSSxFQUFBLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sbUJBQW1CLElBQUksRUFBQSxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7Ozs7O0lBUU8seUJBQXlCLENBQy9CLFdBQXdCLEVBQ3hCLGFBQWdDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUN0RCxXQUFXLENBQUMsRUFBRSxFQUNkLGFBQWEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBOUVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLHlCQUF5QjtZQUR6QixjQUFjLHVCQWFsQixRQUFROzs7Ozs7OztJQURULGtEQUE4RDs7Ozs7SUFDOUQsZ0NBQWdEOzs7Ozs7Ozs7O0lBVWxELDBEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4vY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBjdXN0b20gbG9hZGVyIGxvZ2ljXG4gKiBpbiBvcmRlciB0byBsb2FkIENNUyBzdHJ1Y3R1cmUgZnJvbSB0aGlyZC1wYXJ0eSBDTVMgc3lzdGVtLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zUGFnZUxvYWRlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBhZGFwdGVyOiBDbXNQYWdlQWRhcHRlcjxUPlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCBtdXN0IGJlIHVzZWQgdG8gbG9hZCB0aGUgcGFnZSBzdHJ1Y3R1cmUgZm9yIGEgZ2l2ZW4gYFBhZ2VDb250ZXh0YC5cbiAgICogVGhlIHBhZ2UgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIHNvdXJjZXMsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IFRoZSBgUGFnZUNvbnRleHRgIGhvbGRpbmcgdGhlIHBhZ2UgSWQuXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBwYWdlIHN0cnVjdHVyZS4gVGhlIHBhZ2Ugc3RydWN0dXJlIGlzXG4gICAqIHR5cGljYWxseSBsb2FkZWQgZnJvbSBhIGJhY2tlbmQsIGJ1dCBjYW4gYWxzbyBiZSByZXR1cm5lZCBmcm9tIHN0YXRpY1xuICAgKiBjb25maWd1cmF0aW9uIChzZWUgYENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VgKS5cbiAgICovXG4gIGdldChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLnNob3VsZElnbm9yZUJhY2tlbmQocGFnZUNvbnRleHQuaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGxvYWRGcm9tQ29uZmlnID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRGcm9tQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICBtYXAocGFnZSA9PiB0aGlzLmFkYXB0KHBhZ2UpKSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSAmJlxuICAgICAgICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID09PSA0MDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcChwYWdlID0+IHRoaXMubWVyZ2VEZWZhdWx0UGFnZVN0cnVjdHVyZShwYWdlQ29udGV4dCwgcGFnZSkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGFkYXB0ZXIgY2FuIGJlIGluamVjdGVkIHRvIGNvbnZlcnQgdGhlIGJhY2tlbmQgcmVwb25zZSB0b1xuICAgKiB0aGUgVUkgbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlIHRoZSBzb3VyY2UgdGhhdCBjYW4gYmUgY29udmVydGVkXG4gICAqL1xuICBhZGFwdChwYWdlOiBUKTogQ21zU3RydWN0dXJlTW9kZWwge1xuICAgIGlmICh0aGlzLmFkYXB0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYWRhcHQoPFQ+cGFnZSk7XG4gICAgfVxuICAgIHJldHVybiA8Q21zU3RydWN0dXJlTW9kZWw+cGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBNZXJnZSBkZWZhdWx0IHBhZ2Ugc3RydWN0dXJlIGlub3QgdGhlIGdpdmVuIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqIFRoaXMgaXMgYmVuZWZpdGlhbCBmb3IgYSBmYXN0IHNldHVwIG9mIHRoZSBVSSB3aXRob3V0IG5lY2Vzc2FyeVxuICAgKiBmaW5lZ3JhaW5lZCBDTVMgc2V0dXAuXG4gICAqL1xuICBwcml2YXRlIG1lcmdlRGVmYXVsdFBhZ2VTdHJ1Y3R1cmUoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLm1lcmdlUGFnZVN0cnVjdHVyZShcbiAgICAgIHBhZ2VDb250ZXh0LmlkLFxuICAgICAgcGFnZVN0cnVjdHVyZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==