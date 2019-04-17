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
var CmsPageLoader = /** @class */ (function () {
    function CmsPageLoader(cmsStructureConfigService, adapter) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
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
    CmsPageLoader.prototype.get = /**
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
                return _this.load(pageContext).pipe(map(function (page) { return _this.adapt(page); }), catchError(function (error) {
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
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param page the source that can be converted
     */
    /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param {?} page the source that can be converted
     * @return {?}
     */
    CmsPageLoader.prototype.adapt = /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param {?} page the source that can be converted
     * @return {?}
     */
    function (page) {
        if (this.adapter) {
            return this.adapter.adapt((/** @type {?} */ (page)));
        }
        return (/** @type {?} */ (page));
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
    CmsPageLoader.prototype.mergeDefaultPageStructure = /**
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
    CmsPageLoader.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsPageLoader.ctorParameters = function () { return [
        { type: CmsStructureConfigService },
        { type: CmsPageAdapter, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ CmsPageLoader.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageLoader_Factory() { return new CmsPageLoader(i0.inject(i1.CmsStructureConfigService), i0.inject(i2.CmsPageAdapter, 8)); }, token: CmsPageLoader, providedIn: "root" });
    return CmsPageLoader;
}());
export { CmsPageLoader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UubG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zZXJ2aWNlcy9jbXMtcGFnZS5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7OztBQU0zRTtJQUlFLHVCQUNZLHlCQUFvRCxFQUN4QyxPQUEwQjtRQUR0Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3hDLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQy9DLENBQUM7SUFXSjs7OztPQUlHOzs7Ozs7OztJQUNILDJCQUFHOzs7Ozs7O0lBQUgsVUFBSSxXQUF3QjtRQUE1QixpQkF5QkM7UUF4QkMsT0FBTyxJQUFJLENBQUMseUJBQXlCO2FBQ2xDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFBLGNBQWM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUM3QixVQUFVLENBQUMsVUFBQSxLQUFLO29CQUNkLElBQ0UsS0FBSyxZQUFZLGlCQUFpQjt3QkFDbEMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQ3BCO3dCQUNBLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMxQjtnQkFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQWpELENBQWlELENBQUMsQ0FDckUsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDZCQUFLOzs7Ozs7OztJQUFMLFVBQU0sSUFBTztRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFHLElBQUksRUFBQSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLG1CQUFtQixJQUFJLEVBQUEsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7Ozs7O0lBQ0ssaURBQXlCOzs7Ozs7Ozs7O0lBQWpDLFVBQ0UsV0FBd0IsRUFDeEIsYUFBZ0M7UUFFaEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQ3RELFdBQVcsQ0FBQyxFQUFFLEVBQ2QsYUFBYSxDQUNkLENBQUM7SUFDSixDQUFDOztnQkE5RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSx5QkFBeUI7Z0JBRHpCLGNBQWMsdUJBYWxCLFFBQVE7Ozt3QkFuQmI7Q0E0RkMsQUEvRUQsSUErRUM7U0E1RXFCLGFBQWE7Ozs7OztJQUUvQixrREFBOEQ7Ozs7O0lBQzlELGdDQUFnRDs7Ozs7Ozs7OztJQVVsRCwwREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgY3VzdG9tIGxvYWRlciBsb2dpY1xuICogaW4gb3JkZXIgdG8gbG9hZCBDTVMgc3RydWN0dXJlIGZyb20gdGhpcmQtcGFydHkgQ01TIHN5c3RlbS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1BhZ2VMb2FkZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgYWRhcHRlcjogQ21zUGFnZUFkYXB0ZXI8VD5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgbXVzdCBiZSB1c2VkIHRvIGxvYWQgdGhlIHBhZ2Ugc3RydWN0dXJlIGZvciBhIGdpdmVuIGBQYWdlQ29udGV4dGAuXG4gICAqIFRoZSBwYWdlIGNhbiBiZSBsb2FkZWQgZnJvbSBhbHRlcm5hdGl2ZSBzb3VyY2VzLCBhcyBsb25nIGFzIHRoZSBzdHJ1Y3R1cmVcbiAgICogY29udmVydHMgdG8gdGhlIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBUaGUgYFBhZ2VDb250ZXh0YCBob2xkaW5nIHRoZSBwYWdlIElkLlxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgcGFnZSBzdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZSBpc1xuICAgKiB0eXBpY2FsbHkgbG9hZGVkIGZyb20gYSBiYWNrZW5kLCBidXQgY2FuIGFsc28gYmUgcmV0dXJuZWQgZnJvbSBzdGF0aWNcbiAgICogY29uZmlndXJhdGlvbiAoc2VlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCkuXG4gICAqL1xuICBnZXQocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgICAgIC5zaG91bGRJZ25vcmVCYWNrZW5kKHBhZ2VDb250ZXh0LmlkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChsb2FkRnJvbUNvbmZpZyA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkRnJvbUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgbWFwKHBhZ2UgPT4gdGhpcy5hZGFwdChwYWdlKSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgICAgIGVycm9yLnN0YXR1cyA9PT0gNDAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiB0aGlzLm1lcmdlRGVmYXVsdFBhZ2VTdHJ1Y3R1cmUocGFnZUNvbnRleHQsIHBhZ2UpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBhZGFwdGVyIGNhbiBiZSBpbmplY3RlZCB0byBjb252ZXJ0IHRoZSBiYWNrZW5kIHJlcG9uc2UgdG9cbiAgICogdGhlIFVJIG1vZGVsLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZSB0aGUgc291cmNlIHRoYXQgY2FuIGJlIGNvbnZlcnRlZFxuICAgKi9cbiAgYWRhcHQocGFnZTogVCk6IENtc1N0cnVjdHVyZU1vZGVsIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmFkYXB0KDxUPnBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gPENtc1N0cnVjdHVyZU1vZGVsPnBhZ2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogTWVyZ2UgZGVmYXVsdCBwYWdlIHN0cnVjdHVyZSBpbm90IHRoZSBnaXZlbiBgQ21zU3RydWN0dXJlTW9kZWxgLlxuICAgKiBUaGlzIGlzIGJlbmVmaXRpYWwgZm9yIGEgZmFzdCBzZXR1cCBvZiB0aGUgVUkgd2l0aG91dCBuZWNlc3NhcnlcbiAgICogZmluZWdyYWluZWQgQ01TIHNldHVwLlxuICAgKi9cbiAgcHJpdmF0ZSBtZXJnZURlZmF1bHRQYWdlU3RydWN0dXJlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5tZXJnZVBhZ2VTdHJ1Y3R1cmUoXG4gICAgICBwYWdlQ29udGV4dC5pZCxcbiAgICAgIHBhZ2VTdHJ1Y3R1cmVcbiAgICApO1xuICB9XG59XG4iXX0=