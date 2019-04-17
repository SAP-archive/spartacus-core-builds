/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs/operators';
import { getActiveBaseSite } from '../store/selectors/base-site.selectors';
import { SetActiveBaseSite } from '../store/actions/base-site.action';
var BaseSiteService = /** @class */ (function () {
    function BaseSiteService(store) {
        this.store = store;
    }
    /**
     * Represents the current baseSite.
     */
    /**
     * Represents the current baseSite.
     * @return {?}
     */
    BaseSiteService.prototype.getActive = /**
     * Represents the current baseSite.
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
        return this.getActive().pipe(map(function (baseSite) { return [baseSite]; }));
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
            .subscribe(function (activeBaseSite) {
            if (activeBaseSite !== baseSite) {
                _this.store.dispatch(new SetActiveBaseSite(baseSite));
            }
        });
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
     * @private
     */
    BaseSiteService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV0RTtJQUVFLHlCQUFvQixLQUFrQztRQUFsQyxVQUFLLEdBQUwsS0FBSyxDQUE2QjtJQUFHLENBQUM7SUFFMUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU07Ozs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxDQUFDLFFBQVEsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsUUFBZ0I7UUFBMUIsaUJBV0M7UUFWQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTLENBQUMsVUFBQSxjQUFjO1lBQ3ZCLElBQUksY0FBYyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILG9DQUFVOzs7OztJQUFWLFVBQVcsZUFBdUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF2Q0YsVUFBVTs7OztnQkFOTSxLQUFLOztJQThDdEIsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxlQUFlOzs7Ozs7SUFDZCxnQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXRBY3RpdmVCYXNlU2l0ZSB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9iYXNlLXNpdGUuc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2V0QWN0aXZlQmFzZVNpdGUgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2Jhc2Utc2l0ZS5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8c3RyaW5nPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0Pikge31cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBiYXNlU2l0ZS5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoYmFzZVNpdGUgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChnZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQmFzZVNpdGUgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQmFzZVNpdGUgIT09IGJhc2VTaXRlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0QWN0aXZlQmFzZVNpdGUoYmFzZVNpdGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFjdGl2ZSBiYXNlU2l0ZS5cbiAgICovXG4gIGluaXRpYWxpemUoZGVmYXVsdEJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldEFjdGl2ZShkZWZhdWx0QmFzZVNpdGUpO1xuICB9XG59XG4iXX0=