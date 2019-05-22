/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs/operators';
import { getActiveBaseSite } from '../store/selectors/base-site.selectors';
import { SetActiveBaseSite } from '../store/actions/base-site.action';
export class BaseSiteService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Represents the current baseSite.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getActiveBaseSite), filter(Boolean));
    }
    /**
     * We currently don't support switching baseSite at run time
     * @return {?}
     */
    getAll() {
        return this.getActive().pipe(map(baseSite => [baseSite]));
    }
    /**
     * @param {?} baseSite
     * @return {?}
     */
    setActive(baseSite) {
        return this.store
            .pipe(select(getActiveBaseSite), take(1))
            .subscribe(activeBaseSite => {
            if (activeBaseSite !== baseSite) {
                this.store.dispatch(new SetActiveBaseSite(baseSite));
            }
        });
    }
    /**
     * Initializes the active baseSite.
     * @param {?} defaultBaseSite
     * @return {?}
     */
    initialize(defaultBaseSite) {
        this.setActive(defaultBaseSite);
    }
}
BaseSiteService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseSiteService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseSiteService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd0RSxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFzQixLQUFrQztRQUFsQyxVQUFLLEdBQUwsS0FBSyxDQUE2QjtJQUFHLENBQUM7Ozs7O0lBSzVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQWdCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBS0QsVUFBVSxDQUFDLGVBQXVCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBdkNGLFVBQVU7Ozs7WUFOTSxLQUFLOzs7Ozs7O0lBUVIsZ0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2V0QWN0aXZlQmFzZVNpdGUgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvYmFzZS1zaXRlLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNldEFjdGl2ZUJhc2VTaXRlIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9iYXNlLXNpdGUuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2VTaXRlU2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PHN0cmluZz4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0Pikge31cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBiYXNlU2l0ZS5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoYmFzZVNpdGUgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChnZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQmFzZVNpdGUgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQmFzZVNpdGUgIT09IGJhc2VTaXRlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0QWN0aXZlQmFzZVNpdGUoYmFzZVNpdGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFjdGl2ZSBiYXNlU2l0ZS5cbiAgICovXG4gIGluaXRpYWxpemUoZGVmYXVsdEJhc2VTaXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldEFjdGl2ZShkZWZhdWx0QmFzZVNpdGUpO1xuICB9XG59XG4iXX0=