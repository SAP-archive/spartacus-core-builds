/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs/operators';
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
                _this.store.dispatch(new LoadBaseSite());
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
        return this.store.pipe(select(getBaseSiteData), filter(Boolean));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUVoRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFlBQVksR0FDYixNQUFNLG1DQUFtQyxDQUFDO0FBRzNDO0lBRUUseUJBQXNCLEtBQWtDO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQTZCO0lBQUcsQ0FBQztJQUU1RDs7T0FFRzs7Ozs7SUFDSCxtQ0FBUzs7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxnQ0FBTTs7OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsUUFBUSxDQUFDLEVBQVYsQ0FBVSxFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELG1DQUFTOzs7O0lBQVQsVUFBVSxRQUFnQjtRQUExQixpQkFZQztRQVhDLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFBLGNBQWM7WUFDdkIsSUFBSSxRQUFRLElBQUksY0FBYyxLQUFLLFFBQVEsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsb0NBQVU7Ozs7O0lBQVYsVUFBVyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBZTs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7SUFDSixDQUFDOztnQkFsREYsVUFBVTs7OztnQkFiTSxLQUFLOztJQWdFdEIsc0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQWxEWSxlQUFlOzs7Ozs7SUFDZCxnQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBnZXRBY3RpdmVCYXNlU2l0ZSxcbiAgZ2V0QmFzZVNpdGVEYXRhLFxufSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvYmFzZS1zaXRlLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7XG4gIFNldEFjdGl2ZUJhc2VTaXRlLFxuICBMb2FkQmFzZVNpdGUsXG59IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYmFzZS1zaXRlLmFjdGlvbic7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8c3RyaW5nPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IGJhc2VTaXRlIHVpZC5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoYmFzZVNpdGUgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChnZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQmFzZVNpdGUgPT4ge1xuICAgICAgICBpZiAoYmFzZVNpdGUgJiYgYWN0aXZlQmFzZVNpdGUgIT09IGJhc2VTaXRlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0QWN0aXZlQmFzZVNpdGUoYmFzZVNpdGUpKTtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2FkQmFzZVNpdGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY3RpdmUgYmFzZVNpdGUuXG4gICAqL1xuICBpbml0aWFsaXplKGRlZmF1bHRCYXNlU2l0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRBY3RpdmUoZGVmYXVsdEJhc2VTaXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJhc2Ugc2l0ZSBkZXRhaWxzIGRhdGFcbiAgICovXG4gIGdldEJhc2VTaXRlRGF0YSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRCYXNlU2l0ZURhdGEpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxufVxuIl19