/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { SiteContextConfig } from '../config/site-context-config';
import { getContextParameterDefault } from '../config/context-config-utils';
import { BASE_SITE_CONTEXT_ID } from '../providers/context-ids';
var BaseSiteService = /** @class */ (function () {
    function BaseSiteService(store, config) {
        this.store = store;
        this.config = config;
    }
    /**
     * Represents the current baseSite uid.
     */
    /**
     * Represents the current baseSite uid.
     * @return {?}
     */
    BaseSiteService.prototype.getActive = /**
     * Represents the current baseSite uid.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(SiteContextSelectors.getActiveBaseSite), filter((/**
         * @param {?} active
         * @return {?}
         */
        function (active) { return Boolean(active); })));
    };
    /**
     * We currently don't support switching baseSite at run time
     */
    /**
     * We currently don't support switching baseSite at run time
     * @return {?}
     */
    BaseSiteService.prototype.getAll = /**
     * We currently don't support switching baseSite at run time
     * @return {?}
     */
    function () {
        return this.getActive().pipe(map((/**
         * @param {?} baseSite
         * @return {?}
         */
        function (baseSite) { return [baseSite]; })));
    };
    /**
     * @param {?} baseSite
     * @return {?}
     */
    BaseSiteService.prototype.setActive = /**
     * @param {?} baseSite
     * @return {?}
     */
    function (baseSite) {
        var _this = this;
        return this.store
            .pipe(select(SiteContextSelectors.getActiveBaseSite), take(1))
            .subscribe((/**
         * @param {?} activeBaseSite
         * @return {?}
         */
        function (activeBaseSite) {
            if (baseSite && activeBaseSite !== baseSite) {
                _this.store.dispatch(new SiteContextActions.SetActiveBaseSite(baseSite));
            }
        }));
    };
    /**
     * Initializes the active baseSite.
     */
    /**
     * Initializes the active baseSite.
     * @return {?}
     */
    BaseSiteService.prototype.initialize = /**
     * Initializes the active baseSite.
     * @return {?}
     */
    function () {
        this.setActive(getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID));
    };
    /**
     * Get the base site details data
     */
    /**
     * Get the base site details data
     * @return {?}
     */
    BaseSiteService.prototype.getBaseSiteData = /**
     * Get the base site details data
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(SiteContextSelectors.getBaseSiteData), tap((/**
         * @param {?} baseSite
         * @return {?}
         */
        function (baseSite) {
            if (Object.keys(baseSite).length === 0) {
                _this.store.dispatch(new SiteContextActions.LoadBaseSite());
            }
        })));
    };
    BaseSiteService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BaseSiteService.ctorParameters = function () { return [
        { type: Store },
        { type: SiteContextConfig }
    ]; };
    return BaseSiteService;
}());
export { BaseSiteService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseSiteService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    BaseSiteService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFFRSx5QkFDWSxLQUFrQyxFQUNsQyxNQUF5QjtRQUR6QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNsQyxDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gsbUNBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxFQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU07Ozs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxDQUFDLFFBQVEsQ0FBQyxFQUFWLENBQVUsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsUUFBZ0I7UUFBMUIsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUNILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxjQUFjO1lBQ3ZCLElBQUksUUFBUSxJQUFJLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvQ0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FDWiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWU7Ozs7SUFBZjtRQUFBLGlCQVNDO1FBUkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxFQUM1QyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE1REYsVUFBVTs7OztnQkFaTSxLQUFLO2dCQVFiLGlCQUFpQjs7SUFpRTFCLHNCQUFDO0NBQUEsQUE3REQsSUE2REM7U0E1RFksZUFBZTs7Ozs7O0lBRXhCLGdDQUE0Qzs7Ozs7SUFDNUMsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCB9IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlU2l0ZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxzdHJpbmc+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IGJhc2VTaXRlIHVpZC5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgZmlsdGVyKGFjdGl2ZSA9PiBCb29sZWFuKGFjdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoYmFzZVNpdGUgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUJhc2VTaXRlKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVCYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChiYXNlU2l0ZSAmJiBhY3RpdmVCYXNlU2l0ZSAhPT0gYmFzZVNpdGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVCYXNlU2l0ZShiYXNlU2l0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYWN0aXZlIGJhc2VTaXRlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZShcbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYmFzZSBzaXRlIGRldGFpbHMgZGF0YVxuICAgKi9cbiAgZ2V0QmFzZVNpdGVEYXRhKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEJhc2VTaXRlRGF0YSksXG4gICAgICB0YXAoYmFzZVNpdGUgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYmFzZVNpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQmFzZVNpdGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19