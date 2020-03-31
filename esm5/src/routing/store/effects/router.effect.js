import { __assign, __decorate } from "tslib";
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { RoutingActions } from '../actions/index';
var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_GO), map(function (action) { return action.payload; }), tap(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_GO_BY_URL), map(function (action) { return action.payload; }), tap(function (url) {
            _this.router.navigateByUrl(url);
        }));
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), tap(function () {
            var filteredConfig = _this.router.config.filter(function (route) { return !(route.data && route.data.cxCmsRouteContext); });
            if (filteredConfig.length !== _this.router.config.length) {
                _this.router.resetConfig(filteredConfig);
            }
        }));
        this.navigateBack$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_BACK), tap(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_FORWARD), tap(function () { return _this.location.forward(); }));
    }
    RouterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: Location }
    ]; };
    __decorate([
        Effect({ dispatch: false })
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], RouterEffects.prototype, "navigateBuUrl$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], RouterEffects.prototype, "clearCmsRoutes$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = __decorate([
        Injectable()
    ], RouterEffects);
    return RouterEffects;
}());
export { RouterEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQ7SUFnREUsdUJBQ1UsUUFBaUIsRUFDakIsTUFBYyxFQUNkLFFBQWtCO1FBSDVCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWpENUIsY0FBUyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsTUFBb0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdELEdBQUcsQ0FBQyxVQUFDLEVBQW9DO2dCQUFsQyxjQUFJLEVBQUUsc0JBQWtCLEVBQUUsa0JBQU07WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFJLFdBQVcsYUFBQSxJQUFLLE1BQU0sRUFBRyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixtQkFBYyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2QyxHQUFHLENBQUMsVUFBQyxNQUFvQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0QsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUNOLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixvQkFBZSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEQsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsV0FBVyxDQUFDLE1BQU0sRUFDbEIsV0FBVyxDQUFDLEtBQUssQ0FDbEIsRUFDRCxHQUFHLENBQUM7WUFDRixJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQzlDLFVBQUMsS0FBZSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUE3QyxDQUE2QyxDQUNuRSxDQUFDO1lBQ0YsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDdkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUNoQyxDQUFDO1FBR0YscUJBQWdCLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2RCxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUNyQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FDbkMsQ0FBQztJQU1DLENBQUM7O2dCQUhnQixPQUFPO2dCQUNULE1BQU07Z0JBQ0osUUFBUTs7SUFqRDVCO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO29EQU8xQjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO3lEQU8xQjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzBEQWUxQjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO3dEQUkxQjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzJEQUkxQjtJQTlDUyxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWEsQ0FxRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXJEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENtc1JvdXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ntcy1yb3V0ZSc7XG5pbXBvcnQgeyBSb3V0aW5nQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGUkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRpbmdBY3Rpb25zLlJPVVRFUl9HTyksXG4gICAgbWFwKChhY3Rpb246IFJvdXRpbmdBY3Rpb25zLlJvdXRlR29BY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICB0YXAoKHsgcGF0aCwgcXVlcnk6IHF1ZXJ5UGFyYW1zLCBleHRyYXMgfSkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCwgeyBxdWVyeVBhcmFtcywgLi4uZXh0cmFzIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBuYXZpZ2F0ZUJ1VXJsJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfR09fQllfVVJMKSxcbiAgICBtYXAoKGFjdGlvbjogUm91dGluZ0FjdGlvbnMuUm91dGVHb0FjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHRhcCgodXJsKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIGNsZWFyQ21zUm91dGVzJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgICksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ29uZmlnID0gdGhpcy5yb3V0ZXIuY29uZmlnLmZpbHRlcihcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT4gIShyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpXG4gICAgICApO1xuICAgICAgaWYgKGZpbHRlcmVkQ29uZmlnLmxlbmd0aCAhPT0gdGhpcy5yb3V0ZXIuY29uZmlnLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhmaWx0ZXJlZENvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlQmFjayQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGluZ0FjdGlvbnMuUk9VVEVSX0JBQ0spLFxuICAgIHRhcCgoKSA9PiB0aGlzLmxvY2F0aW9uLmJhY2soKSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlRm9yd2FyZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGluZ0FjdGlvbnMuUk9VVEVSX0ZPUldBUkQpLFxuICAgIHRhcCgoKSA9PiB0aGlzLmxvY2F0aW9uLmZvcndhcmQoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb25cbiAgKSB7fVxufVxuIl19