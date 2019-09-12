/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { SiteContextConfig } from '../config/site-context-config';
import { getContextParameterDefault } from '../config/context-config-utils';
import { BASE_SITE_CONTEXT_ID } from '../providers/context-ids';
export class BaseSiteService {
    /**
     * @param {?} store
     * @param {?} config
     */
    constructor(store, config) {
        this.store = store;
        this.config = config;
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
     * @return {?}
     */
    initialize() {
        this.setActive(getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID));
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
    { type: Store },
    { type: SiteContextConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEUsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQzFCLFlBQ1ksS0FBa0MsRUFDbEMsTUFBeUI7UUFEekIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFDbEMsQ0FBQzs7Ozs7SUFLSixTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU07Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQWdCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLFFBQVEsSUFBSSxjQUFjLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FDbkQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUtELFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxDQUNaLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUE1REYsVUFBVTs7OztZQVpNLEtBQUs7WUFRYixpQkFBaUI7Ozs7Ozs7SUFPdEIsZ0NBQTRDOzs7OztJQUM1QyxpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2VTaXRlU2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PHN0cmluZz4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgYmFzZVNpdGUgdWlkLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGN1cnJlbnRseSBkb24ndCBzdXBwb3J0IHN3aXRjaGluZyBiYXNlU2l0ZSBhdCBydW4gdGltZVxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChiYXNlU2l0ZSA9PiBbYmFzZVNpdGVdKSk7XG4gIH1cblxuICBzZXRBY3RpdmUoYmFzZVNpdGU6IHN0cmluZyk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlQmFzZVNpdGUpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGFjdGl2ZUJhc2VTaXRlID0+IHtcbiAgICAgICAgaWYgKGJhc2VTaXRlICYmIGFjdGl2ZUJhc2VTaXRlICE9PSBiYXNlU2l0ZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUJhc2VTaXRlKGJhc2VTaXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY3RpdmUgYmFzZVNpdGUuXG4gICAqL1xuICBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlKFxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIEJBU0VfU0lURV9DT05URVhUX0lEKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBiYXNlIHNpdGUgZGV0YWlscyBkYXRhXG4gICAqL1xuICBnZXRCYXNlU2l0ZURhdGEoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QmFzZVNpdGVEYXRhKSxcbiAgICAgIHRhcChiYXNlU2l0ZSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhiYXNlU2l0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRCYXNlU2l0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=