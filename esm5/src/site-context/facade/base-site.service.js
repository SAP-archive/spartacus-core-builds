/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { getActiveBaseSite, getBaseSiteData, } from '../store/selectors/base-site.selectors';
import { SetActiveBaseSite, LoadBaseSite, } from '../store/actions/base-site.action';
var BaseSiteService = /** @class */ (function () {
    function BaseSiteService(store) {
        this.store = store;
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
        return this.store.pipe(select(getActiveBaseSite), filter(Boolean));
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
            .pipe(select(getActiveBaseSite), take(1))
            .subscribe((/**
         * @param {?} activeBaseSite
         * @return {?}
         */
        function (activeBaseSite) {
            if (baseSite && activeBaseSite !== baseSite) {
                _this.store.dispatch(new SetActiveBaseSite(baseSite));
            }
        }));
    };
    /**
     * Initializes the active baseSite.
     */
    /**
     * Initializes the active baseSite.
     * @param {?} defaultBaseSite
     * @return {?}
     */
    BaseSiteService.prototype.initialize = /**
     * Initializes the active baseSite.
     * @param {?} defaultBaseSite
     * @return {?}
     */
    function (defaultBaseSite) {
        this.setActive(defaultBaseSite);
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
        return this.store.pipe(select(getBaseSiteData), tap((/**
         * @param {?} baseSite
         * @return {?}
         */
        function (baseSite) {
            if (Object.keys(baseSite).length === 0) {
                _this.store.dispatch(new LoadBaseSite());
            }
        })));
    };
    BaseSiteService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BaseSiteService.ctorParameters = function () { return [
        { type: Store }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0sd0NBQXdDLENBQUM7QUFFaEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixZQUFZLEdBQ2IsTUFBTSxtQ0FBbUMsQ0FBQztBQUczQztJQUVFLHlCQUFzQixLQUFrQztRQUFsQyxVQUFLLEdBQUwsS0FBSyxDQUE2QjtJQUFHLENBQUM7SUFFNUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU07Ozs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxDQUFDLFFBQVEsQ0FBQyxFQUFWLENBQVUsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsUUFBZ0I7UUFBMUIsaUJBV0M7UUFWQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxjQUFjO1lBQ3ZCLElBQUksUUFBUSxJQUFJLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN0RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxvQ0FBVTs7Ozs7SUFBVixVQUFXLGVBQXVCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFlOzs7O0lBQWY7UUFBQSxpQkFTQztRQVJDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFDdkIsR0FBRzs7OztRQUFDLFVBQUEsUUFBUTtZQUNWLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBckRGLFVBQVU7Ozs7Z0JBYk0sS0FBSzs7SUFtRXRCLHNCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksZUFBZTs7Ozs7O0lBQ2QsZ0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBnZXRBY3RpdmVCYXNlU2l0ZSxcbiAgZ2V0QmFzZVNpdGVEYXRhLFxufSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvYmFzZS1zaXRlLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7XG4gIFNldEFjdGl2ZUJhc2VTaXRlLFxuICBMb2FkQmFzZVNpdGUsXG59IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYmFzZS1zaXRlLmFjdGlvbic7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8c3RyaW5nPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IGJhc2VTaXRlIHVpZC5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoYmFzZVNpdGUgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChnZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQmFzZVNpdGUgPT4ge1xuICAgICAgICBpZiAoYmFzZVNpdGUgJiYgYWN0aXZlQmFzZVNpdGUgIT09IGJhc2VTaXRlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0QWN0aXZlQmFzZVNpdGUoYmFzZVNpdGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFjdGl2ZSBiYXNlU2l0ZS5cbiAgICovXG4gIGluaXRpYWxpemUoZGVmYXVsdEJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldEFjdGl2ZShkZWZhdWx0QmFzZVNpdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYmFzZSBzaXRlIGRldGFpbHMgZGF0YVxuICAgKi9cbiAgZ2V0QmFzZVNpdGVEYXRhKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldEJhc2VTaXRlRGF0YSksXG4gICAgICB0YXAoYmFzZVNpdGUgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYmFzZVNpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRCYXNlU2l0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=