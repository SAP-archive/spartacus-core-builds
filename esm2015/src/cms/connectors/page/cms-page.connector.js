/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class CmsPageConnector {
    /**
     * @param {?} cmsPageAdapter
     * @param {?} cmsStructureConfigService
     */
    constructor(cmsPageAdapter, cmsStructureConfigService) {
        this.cmsPageAdapter = cmsPageAdapter;
        this.cmsStructureConfigService = cmsStructureConfigService;
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
            .pipe(switchMap((/**
         * @param {?} loadFromConfig
         * @return {?}
         */
        loadFromConfig => {
            if (!loadFromConfig) {
                return this.cmsPageAdapter.load(pageContext).pipe(catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    if (error instanceof HttpErrorResponse &&
                        error.status === 400) {
                        return of({});
                    }
                    else {
                        return throwError(error);
                    }
                })));
            }
            else {
                return of({});
            }
        })), switchMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.mergeDefaultPageStructure(pageContext, page))));
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
CmsPageConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsPageConnector.ctorParameters = () => [
    { type: CmsPageAdapter },
    { type: CmsStructureConfigService }
];
/** @nocollapse */ CmsPageConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsPageConnector_Factory() { return new CmsPageConnector(i0.ɵɵinject(i1.CmsPageAdapter), i0.ɵɵinject(i2.CmsStructureConfigService)); }, token: CmsPageConnector, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBT3hGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLFlBQ1ksY0FBOEIsRUFDOUIseUJBQW9EO1FBRHBELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQzdELENBQUM7Ozs7Ozs7O0lBT0osR0FBRyxDQUFDLFdBQXdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FDSCxTQUFTOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQy9DLFVBQVU7Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2pCLElBQ0UsS0FBSyxZQUFZLGlCQUFpQjt3QkFDbEMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQ3BCO3dCQUNBLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMxQjtnQkFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQyxFQUNGLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUMsQ0FDckUsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7Ozs7O0lBUU8seUJBQXlCLENBQy9CLFdBQXdCLEVBQ3hCLGFBQWdDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUN0RCxXQUFXLENBQUMsRUFBRSxFQUNkLGFBQWEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBdERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLGNBQWM7WUFDZCx5QkFBeUI7Ozs7Ozs7O0lBUzlCLDBDQUF3Qzs7Ozs7SUFDeEMscURBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zUGFnZUFkYXB0ZXI6IENtc1BhZ2VBZGFwdGVyLFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIHBhZ2Ugc3RydWN0dXJlLiBUaGUgcGFnZSBzdHJ1Y3R1cmUgaXNcbiAgICogdHlwaWNhbGx5IGxvYWRlZCBmcm9tIGEgYmFja2VuZCwgYnV0IGNhbiBhbHNvIGJlIHJldHVybmVkIGZyb20gc3RhdGljXG4gICAqIGNvbmZpZ3VyYXRpb24gKHNlZSBgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZWApLlxuICAgKi9cbiAgZ2V0KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuc2hvdWxkSWdub3JlQmFja2VuZChwYWdlQ29udGV4dC5pZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobG9hZEZyb21Db25maWcgPT4ge1xuICAgICAgICAgIGlmICghbG9hZEZyb21Db25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNtc1BhZ2VBZGFwdGVyLmxvYWQocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgICAgIGVycm9yLnN0YXR1cyA9PT0gNDAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiB0aGlzLm1lcmdlRGVmYXVsdFBhZ2VTdHJ1Y3R1cmUocGFnZUNvbnRleHQsIHBhZ2UpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBNZXJnZSBkZWZhdWx0IHBhZ2Ugc3RydWN0dXJlIGlub3QgdGhlIGdpdmVuIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqIFRoaXMgaXMgYmVuZWZpdGlhbCBmb3IgYSBmYXN0IHNldHVwIG9mIHRoZSBVSSB3aXRob3V0IG5lY2Vzc2FyeVxuICAgKiBmaW5lZ3JhaW5lZCBDTVMgc2V0dXAuXG4gICAqL1xuICBwcml2YXRlIG1lcmdlRGVmYXVsdFBhZ2VTdHJ1Y3R1cmUoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLm1lcmdlUGFnZVN0cnVjdHVyZShcbiAgICAgIHBhZ2VDb250ZXh0LmlkLFxuICAgICAgcGFnZVN0cnVjdHVyZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==