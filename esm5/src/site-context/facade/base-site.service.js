/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJaEU7SUFFRSx5QkFBc0IsS0FBa0M7UUFBbEMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7SUFBRyxDQUFDO0lBRTVEOztPQUVHOzs7OztJQUNILG1DQUFTOzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsRUFBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGdDQUFNOzs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsQ0FBQyxRQUFRLENBQUMsRUFBVixDQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLFFBQWdCO1FBQTFCLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLElBQUksQ0FDSCxNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsY0FBYztZQUN2QixJQUFJLFFBQVEsSUFBSSxjQUFjLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FDbkQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILG9DQUFVOzs7OztJQUFWLFVBQVcsZUFBdUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWU7Ozs7SUFBZjtRQUFBLGlCQVNDO1FBUkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxFQUM1QyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkF2REYsVUFBVTs7OztnQkFUTSxLQUFLOztJQWlFdEIsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXZEWSxlQUFlOzs7Ozs7SUFDZCxnQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlU2l0ZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxzdHJpbmc+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4pIHt9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgYmFzZVNpdGUgdWlkLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGN1cnJlbnRseSBkb24ndCBzdXBwb3J0IHN3aXRjaGluZyBiYXNlU2l0ZSBhdCBydW4gdGltZVxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChiYXNlU2l0ZSA9PiBbYmFzZVNpdGVdKSk7XG4gIH1cblxuICBzZXRBY3RpdmUoYmFzZVNpdGU6IHN0cmluZyk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGFjdGl2ZUJhc2VTaXRlID0+IHtcbiAgICAgICAgaWYgKGJhc2VTaXRlICYmIGFjdGl2ZUJhc2VTaXRlICE9PSBiYXNlU2l0ZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUJhc2VTaXRlKGJhc2VTaXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY3RpdmUgYmFzZVNpdGUuXG4gICAqL1xuICBpbml0aWFsaXplKGRlZmF1bHRCYXNlU2l0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmUoZGVmYXVsdEJhc2VTaXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJhc2Ugc2l0ZSBkZXRhaWxzIGRhdGFcbiAgICovXG4gIGdldEJhc2VTaXRlRGF0YSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRCYXNlU2l0ZURhdGEpLFxuICAgICAgdGFwKGJhc2VTaXRlID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGJhc2VTaXRlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEJhc2VTaXRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==