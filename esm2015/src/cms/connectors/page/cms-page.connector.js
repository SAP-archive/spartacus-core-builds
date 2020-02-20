import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { CmsPageAdapter } from './cms-page.adapter';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-page.adapter";
import * as i2 from "../../services/cms-structure-config.service";
let CmsPageConnector = class CmsPageConnector {
    constructor(cmsPageAdapter, cmsStructureConfigService) {
        this.cmsPageAdapter = cmsPageAdapter;
        this.cmsStructureConfigService = cmsStructureConfigService;
    }
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     */
    get(pageContext) {
        return this.cmsStructureConfigService
            .shouldIgnoreBackend(pageContext.id)
            .pipe(switchMap(loadFromConfig => {
            if (!loadFromConfig) {
                return this.cmsPageAdapter.load(pageContext).pipe(catchError(error => {
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
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     */
    mergeDefaultPageStructure(pageContext, pageStructure) {
        return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
    }
};
CmsPageConnector.ctorParameters = () => [
    { type: CmsPageAdapter },
    { type: CmsStructureConfigService }
];
CmsPageConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(i0.ɵɵinject(i1.CmsPageAdapter), i0.ɵɵinject(i2.CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
CmsPageConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageConnector);
export { CmsPageConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBT3hGLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQ1ksY0FBOEIsRUFDOUIseUJBQW9EO1FBRHBELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQzdELENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLFdBQXdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FDSCxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQy9DLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakIsSUFDRSxLQUFLLFlBQVksaUJBQWlCO3dCQUNsQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFDcEI7d0JBQ0EsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzFCO2dCQUNILENBQUMsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0sseUJBQXlCLENBQy9CLFdBQXdCLEVBQ3hCLGFBQWdDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUN0RCxXQUFXLENBQUMsRUFBRSxFQUNkLGFBQWEsQ0FDZCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbEQ2QixjQUFjO1lBQ0gseUJBQXlCOzs7QUFIckQsZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0FvRDVCO1NBcERZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1BhZ2VBZGFwdGVyOiBDbXNQYWdlQWRhcHRlcixcbiAgICBwcm90ZWN0ZWQgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBwYWdlIHN0cnVjdHVyZS4gVGhlIHBhZ2Ugc3RydWN0dXJlIGlzXG4gICAqIHR5cGljYWxseSBsb2FkZWQgZnJvbSBhIGJhY2tlbmQsIGJ1dCBjYW4gYWxzbyBiZSByZXR1cm5lZCBmcm9tIHN0YXRpY1xuICAgKiBjb25maWd1cmF0aW9uIChzZWUgYENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VgKS5cbiAgICovXG4gIGdldChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLnNob3VsZElnbm9yZUJhY2tlbmQocGFnZUNvbnRleHQuaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGxvYWRGcm9tQ29uZmlnID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRGcm9tQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbXNQYWdlQWRhcHRlci5sb2FkKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmXG4gICAgICAgICAgICAgICAgICBlcnJvci5zdGF0dXMgPT09IDQwMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gdGhpcy5tZXJnZURlZmF1bHRQYWdlU3RydWN0dXJlKHBhZ2VDb250ZXh0LCBwYWdlKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogTWVyZ2UgZGVmYXVsdCBwYWdlIHN0cnVjdHVyZSBpbm90IHRoZSBnaXZlbiBgQ21zU3RydWN0dXJlTW9kZWxgLlxuICAgKiBUaGlzIGlzIGJlbmVmaXRpYWwgZm9yIGEgZmFzdCBzZXR1cCBvZiB0aGUgVUkgd2l0aG91dCBuZWNlc3NhcnlcbiAgICogZmluZWdyYWluZWQgQ01TIHNldHVwLlxuICAgKi9cbiAgcHJpdmF0ZSBtZXJnZURlZmF1bHRQYWdlU3RydWN0dXJlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5tZXJnZVBhZ2VTdHJ1Y3R1cmUoXG4gICAgICBwYWdlQ29udGV4dC5pZCxcbiAgICAgIHBhZ2VTdHJ1Y3R1cmVcbiAgICApO1xuICB9XG59XG4iXX0=