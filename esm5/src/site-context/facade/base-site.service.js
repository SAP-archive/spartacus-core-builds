import { __decorate } from "tslib";
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
    BaseSiteService.prototype.getActive = function () {
        return this.store.pipe(select(SiteContextSelectors.getActiveBaseSite), filter(function (active) { return Boolean(active); }));
    };
    /**
     * We currently don't support switching baseSite at run time
     */
    BaseSiteService.prototype.getAll = function () {
        return this.getActive().pipe(map(function (baseSite) { return [baseSite]; }));
    };
    BaseSiteService.prototype.setActive = function (baseSite) {
        var _this = this;
        return this.store
            .pipe(select(SiteContextSelectors.getActiveBaseSite), take(1))
            .subscribe(function (activeBaseSite) {
            if (baseSite && activeBaseSite !== baseSite) {
                _this.store.dispatch(new SiteContextActions.SetActiveBaseSite(baseSite));
            }
        });
    };
    /**
     * Initializes the active baseSite.
     */
    BaseSiteService.prototype.initialize = function () {
        this.setActive(getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID));
    };
    /**
     * Get the base site details data
     */
    BaseSiteService.prototype.getBaseSiteData = function () {
        var _this = this;
        return this.store.pipe(select(SiteContextSelectors.getBaseSiteData), tap(function (baseSite) {
            if (Object.keys(baseSite).length === 0) {
                _this.store.dispatch(new SiteContextActions.LoadBaseSite());
            }
        }));
    };
    BaseSiteService.ctorParameters = function () { return [
        { type: Store },
        { type: SiteContextConfig }
    ]; };
    BaseSiteService = __decorate([
        Injectable()
    ], BaseSiteService);
    return BaseSiteService;
}());
export { BaseSiteService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEU7SUFDRSx5QkFDWSxLQUFrQyxFQUNsQyxNQUF5QjtRQUR6QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNsQyxDQUFDO0lBRUo7O09BRUc7SUFDSCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsUUFBZ0I7UUFBMUIsaUJBVUM7UUFUQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQyxjQUFjO1lBQ3hCLElBQUksUUFBUSxJQUFJLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILG9DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUNaLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFlLEdBQWY7UUFBQSxpQkFTQztRQVJDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRyxDQUFDLFVBQUMsUUFBUTtZQUNYLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdERrQixLQUFLO2dCQUNKLGlCQUFpQjs7SUFIMUIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBeUQzQjtJQUFELHNCQUFDO0NBQUEsQUF6REQsSUF5REM7U0F6RFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8c3RyaW5nPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+LFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4gICkge31cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBiYXNlU2l0ZSB1aWQuXG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUJhc2VTaXRlKSxcbiAgICAgIGZpbHRlcigoYWN0aXZlKSA9PiBCb29sZWFuKGFjdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBzd2l0Y2hpbmcgYmFzZVNpdGUgYXQgcnVuIHRpbWVcbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoKGJhc2VTaXRlKSA9PiBbYmFzZVNpdGVdKSk7XG4gIH1cblxuICBzZXRBY3RpdmUoYmFzZVNpdGU6IHN0cmluZyk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVCYXNlU2l0ZSksIHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVCYXNlU2l0ZSkgPT4ge1xuICAgICAgICBpZiAoYmFzZVNpdGUgJiYgYWN0aXZlQmFzZVNpdGUgIT09IGJhc2VTaXRlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuU2V0QWN0aXZlQmFzZVNpdGUoYmFzZVNpdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFjdGl2ZSBiYXNlU2l0ZS5cbiAgICovXG4gIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmUoXG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgQkFTRV9TSVRFX0NPTlRFWFRfSUQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJhc2Ugc2l0ZSBkZXRhaWxzIGRhdGFcbiAgICovXG4gIGdldEJhc2VTaXRlRGF0YSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRCYXNlU2l0ZURhdGEpLFxuICAgICAgdGFwKChiYXNlU2l0ZSkgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYmFzZVNpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQmFzZVNpdGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19