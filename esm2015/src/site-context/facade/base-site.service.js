/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
export class BaseSiteService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Represents the current baseSite uid.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(SiteContextSelectors.getActiveBaseSite), filter((/**
         * @param {?} active
         * @return {?}
         */
        active => Boolean(active))));
    }
    /**
     * We currently don't support switching baseSite at run time
     * @return {?}
     */
    getAll() {
        return this.getActive().pipe(map((/**
         * @param {?} baseSite
         * @return {?}
         */
        baseSite => [baseSite])));
    }
    /**
     * @param {?} baseSite
     * @return {?}
     */
    setActive(baseSite) {
        return this.store
            .pipe(select(SiteContextSelectors.getActiveBaseSite), take(1))
            .subscribe((/**
         * @param {?} activeBaseSite
         * @return {?}
         */
        activeBaseSite => {
            if (baseSite && activeBaseSite !== baseSite) {
                this.store.dispatch(new SiteContextActions.SetActiveBaseSite(baseSite));
            }
        }));
    }
    /**
     * Initializes the active baseSite.
     * @param {?} defaultBaseSite
     * @return {?}
     */
    initialize(defaultBaseSite) {
        this.setActive(defaultBaseSite);
    }
    /**
     * Get the base site details data
     * @return {?}
     */
    getBaseSiteData() {
        return this.store.pipe(select(SiteContextSelectors.getBaseSiteData), tap((/**
         * @param {?} baseSite
         * @return {?}
         */
        baseSite => {
            if (Object.keys(baseSite).length === 0) {
                this.store.dispatch(new SiteContextActions.LoadBaseSite());
            }
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLaEUsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsWUFBc0IsS0FBa0M7UUFBbEMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7SUFBRyxDQUFDOzs7OztJQUs1RCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU07Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQWdCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLFFBQVEsSUFBSSxjQUFjLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FDbkQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsZUFBdUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUtELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQzVDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUNiLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdkRGLFVBQVU7Ozs7WUFUTSxLQUFLOzs7Ozs7O0lBV1IsZ0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8c3RyaW5nPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IGJhc2VTaXRlIHVpZC5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgZmlsdGVyKGFjdGl2ZSA9PiBCb29sZWFuKGFjdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoYmFzZVNpdGUgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUJhc2VTaXRlKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVCYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChiYXNlU2l0ZSAmJiBhY3RpdmVCYXNlU2l0ZSAhPT0gYmFzZVNpdGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVCYXNlU2l0ZShiYXNlU2l0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYWN0aXZlIGJhc2VTaXRlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZShkZWZhdWx0QmFzZVNpdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlKGRlZmF1bHRCYXNlU2l0ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBiYXNlIHNpdGUgZGV0YWlscyBkYXRhXG4gICAqL1xuICBnZXRCYXNlU2l0ZURhdGEoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QmFzZVNpdGVEYXRhKSxcbiAgICAgIHRhcChiYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhiYXNlU2l0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRCYXNlU2l0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=