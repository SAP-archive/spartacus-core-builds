/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { CmsPageAdapter } from './cms-page.adapter';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-page.adapter";
import * as i2 from "../../services/cms-structure-config.service";
var CmsPageConnector = /** @class */ (function () {
    function CmsPageConnector(cmsPageAdapter, cmsStructureConfigService) {
        this.cmsPageAdapter = cmsPageAdapter;
        this.cmsStructureConfigService = cmsStructureConfigService;
    }
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     */
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     * @param {?} pageContext
     * @return {?}
     */
    CmsPageConnector.prototype.get = /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        var _this = this;
        return this.cmsStructureConfigService
            .shouldIgnoreBackend(pageContext.id)
            .pipe(switchMap(function (loadFromConfig) {
            if (!loadFromConfig) {
                return _this.cmsPageAdapter.load(pageContext).pipe(catchError(function (error) {
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
        }), switchMap(function (page) { return _this.mergeDefaultPageStructure(pageContext, page); }));
    };
    /**
     *
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     */
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
    CmsPageConnector.prototype.mergeDefaultPageStructure = /**
     *
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     * @private
     * @param {?} pageContext
     * @param {?} pageStructure
     * @return {?}
     */
    function (pageContext, pageStructure) {
        return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
    };
    CmsPageConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsPageConnector.ctorParameters = function () { return [
        { type: CmsPageAdapter },
        { type: CmsStructureConfigService }
    ]; };
    /** @nocollapse */ CmsPageConnector.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(i0.inject(i1.CmsPageAdapter), i0.inject(i2.CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
    return CmsPageConnector;
}());
export { CmsPageConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmsPageConnector.prototype.cmsPageAdapter;
    /**
     * @type {?}
     * @protected
     */
    CmsPageConnector.prototype.cmsStructureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBSXhGO0lBSUUsMEJBQ1ksY0FBOEIsRUFDOUIseUJBQW9EO1FBRHBELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQzdELENBQUM7SUFFSjs7OztPQUlHOzs7Ozs7OztJQUNILDhCQUFHOzs7Ozs7O0lBQUgsVUFBSSxXQUF3QjtRQUE1QixpQkF3QkM7UUF2QkMsT0FBTyxJQUFJLENBQUMseUJBQXlCO2FBQ2xDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFBLGNBQWM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQy9DLFVBQVUsQ0FBQyxVQUFBLEtBQUs7b0JBQ2QsSUFDRSxLQUFLLFlBQVksaUJBQWlCO3dCQUNsQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFDcEI7d0JBQ0EsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzFCO2dCQUNILENBQUMsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUNyRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7OztJQUNLLG9EQUF5Qjs7Ozs7Ozs7OztJQUFqQyxVQUNFLFdBQXdCLEVBQ3hCLGFBQWdDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUN0RCxXQUFXLENBQUMsRUFBRSxFQUNkLGFBQWEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsY0FBYztnQkFDZCx5QkFBeUI7OzsyQkFMbEM7Q0FnRUMsQUF2REQsSUF1REM7U0FwRFksZ0JBQWdCOzs7Ozs7SUFFekIsMENBQXdDOzs7OztJQUN4QyxxREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4vY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNQYWdlQWRhcHRlcjogQ21zUGFnZUFkYXB0ZXIsXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgcGFnZSBzdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZSBpc1xuICAgKiB0eXBpY2FsbHkgbG9hZGVkIGZyb20gYSBiYWNrZW5kLCBidXQgY2FuIGFsc28gYmUgcmV0dXJuZWQgZnJvbSBzdGF0aWNcbiAgICogY29uZmlndXJhdGlvbiAoc2VlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCkuXG4gICAqL1xuICBnZXQocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgICAgIC5zaG91bGRJZ25vcmVCYWNrZW5kKHBhZ2VDb250ZXh0LmlkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChsb2FkRnJvbUNvbmZpZyA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkRnJvbUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY21zUGFnZUFkYXB0ZXIubG9hZChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSAmJlxuICAgICAgICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID09PSA0MDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcChwYWdlID0+IHRoaXMubWVyZ2VEZWZhdWx0UGFnZVN0cnVjdHVyZShwYWdlQ29udGV4dCwgcGFnZSkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIE1lcmdlIGRlZmF1bHQgcGFnZSBzdHJ1Y3R1cmUgaW5vdCB0aGUgZ2l2ZW4gYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICogVGhpcyBpcyBiZW5lZml0aWFsIGZvciBhIGZhc3Qgc2V0dXAgb2YgdGhlIFVJIHdpdGhvdXQgbmVjZXNzYXJ5XG4gICAqIGZpbmVncmFpbmVkIENNUyBzZXR1cC5cbiAgICovXG4gIHByaXZhdGUgbWVyZ2VEZWZhdWx0UGFnZVN0cnVjdHVyZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UubWVyZ2VQYWdlU3RydWN0dXJlKFxuICAgICAgcGFnZUNvbnRleHQuaWQsXG4gICAgICBwYWdlU3RydWN0dXJlXG4gICAgKTtcbiAgfVxufVxuIl19