import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import { getContextParameterDefault } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { BASE_SITE_CONTEXT_ID } from '../providers/context-ids';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
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
        var value;
        this.getActive()
            .subscribe(function (val) { return (value = val); })
            .unsubscribe();
        if (value) {
            // don't initialize, if there is already a value (i.e. retrieved from route or transferred from SSR)
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLaEU7SUFDRSx5QkFDWSxLQUFrQyxFQUNsQyxNQUF5QjtRQUR6QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNsQyxDQUFDO0lBRUo7O09BRUc7SUFDSCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsUUFBZ0I7UUFBMUIsaUJBVUM7UUFUQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQyxjQUFjO1lBQ3hCLElBQUksUUFBUSxJQUFJLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUNuRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILG9DQUFVLEdBQVY7UUFDRSxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUU7YUFDYixTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBYixDQUFhLENBQUM7YUFDakMsV0FBVyxFQUFFLENBQUM7UUFDakIsSUFBSSxLQUFLLEVBQUU7WUFDVCxvR0FBb0c7WUFDcEcsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FDWiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCx5Q0FBZSxHQUFmO1FBQUEsaUJBU0M7UUFSQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQzVDLEdBQUcsQ0FBQyxVQUFDLFFBQVE7WUFDWCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQzVEO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQS9Ea0IsS0FBSztnQkFDSixpQkFBaUI7O0lBSDFCLGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZSxDQWtFM0I7SUFBRCxzQkFBQztDQUFBLEFBbEVELElBa0VDO1NBbEVZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2VTaXRlU2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PHN0cmluZz4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgYmFzZVNpdGUgdWlkLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVCYXNlU2l0ZSksXG4gICAgICBmaWx0ZXIoKGFjdGl2ZSkgPT4gQm9vbGVhbihhY3RpdmUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2UgY3VycmVudGx5IGRvbid0IHN1cHBvcnQgc3dpdGNoaW5nIGJhc2VTaXRlIGF0IHJ1biB0aW1lXG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZSgpLnBpcGUobWFwKChiYXNlU2l0ZSkgPT4gW2Jhc2VTaXRlXSkpO1xuICB9XG5cbiAgc2V0QWN0aXZlKGJhc2VTaXRlOiBzdHJpbmcpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlQmFzZVNpdGUpLCB0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQmFzZVNpdGUpID0+IHtcbiAgICAgICAgaWYgKGJhc2VTaXRlICYmIGFjdGl2ZUJhc2VTaXRlICE9PSBiYXNlU2l0ZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUJhc2VTaXRlKGJhc2VTaXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY3RpdmUgYmFzZVNpdGUuXG4gICAqL1xuICBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGxldCB2YWx1ZTtcbiAgICB0aGlzLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKCh2YWwpID0+ICh2YWx1ZSA9IHZhbCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIGRvbid0IGluaXRpYWxpemUsIGlmIHRoZXJlIGlzIGFscmVhZHkgYSB2YWx1ZSAoaS5lLiByZXRyaWV2ZWQgZnJvbSByb3V0ZSBvciB0cmFuc2ZlcnJlZCBmcm9tIFNTUilcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldEFjdGl2ZShcbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYmFzZSBzaXRlIGRldGFpbHMgZGF0YVxuICAgKi9cbiAgZ2V0QmFzZVNpdGVEYXRhKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEJhc2VTaXRlRGF0YSksXG4gICAgICB0YXAoKGJhc2VTaXRlKSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhiYXNlU2l0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRCYXNlU2l0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=