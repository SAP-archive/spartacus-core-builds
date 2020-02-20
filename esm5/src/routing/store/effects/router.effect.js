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
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), tap(function (_) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQ7SUFnREUsdUJBQ1UsUUFBaUIsRUFDakIsTUFBYyxFQUNkLFFBQWtCO1FBSDVCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWpENUIsY0FBUyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsTUFBb0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdELEdBQUcsQ0FBQyxVQUFDLEVBQW9DO2dCQUFsQyxjQUFJLEVBQUUsc0JBQWtCLEVBQUUsa0JBQU07WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFJLFdBQVcsYUFBQSxJQUFLLE1BQU0sRUFBRyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixtQkFBYyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2QyxHQUFHLENBQUMsVUFBQyxNQUFvQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixvQkFBZSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEQsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsV0FBVyxDQUFDLE1BQU0sRUFDbEIsV0FBVyxDQUFDLEtBQUssQ0FDbEIsRUFDRCxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ0gsSUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUM5QyxVQUFDLEtBQWUsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBN0MsQ0FBNkMsQ0FDbkUsQ0FBQztZQUNGLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUNsQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FDaEMsQ0FBQztRQUdGLHFCQUFnQixHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFDckMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQ25DLENBQUM7SUFNQyxDQUFDOztnQkFIZ0IsT0FBTztnQkFDVCxNQUFNO2dCQUNKLFFBQVE7O0lBakQ1QjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztvREFPMUI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzt5REFPMUI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswREFlMUI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzt3REFJMUI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzsyREFJMUI7SUE5Q1MsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhLENBcUR6QjtJQUFELG9CQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDbXNSb3V0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuaW1wb3J0IHsgUm91dGluZ0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlckVmZmVjdHMge1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfR08pLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUdvQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKCh7IHBhdGgsIHF1ZXJ5OiBxdWVyeVBhcmFtcywgZXh0cmFzIH0pID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHsgcXVlcnlQYXJhbXMsIC4uLmV4dHJhcyB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCdVVybCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGluZ0FjdGlvbnMuUk9VVEVSX0dPX0JZX1VSTCksXG4gICAgbWFwKChhY3Rpb246IFJvdXRpbmdBY3Rpb25zLlJvdXRlR29BY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICB0YXAodXJsID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgY2xlYXJDbXNSb3V0ZXMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIEF1dGhBY3Rpb25zLkxPR0lOXG4gICAgKSxcbiAgICB0YXAoXyA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZENvbmZpZyA9IHRoaXMucm91dGVyLmNvbmZpZy5maWx0ZXIoXG4gICAgICAgIChyb3V0ZTogQ21zUm91dGUpID0+ICEocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0KVxuICAgICAgKTtcbiAgICAgIGlmIChmaWx0ZXJlZENvbmZpZy5sZW5ndGggIT09IHRoaXMucm91dGVyLmNvbmZpZy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoZmlsdGVyZWRDb25maWcpO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBuYXZpZ2F0ZUJhY2skOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRpbmdBY3Rpb25zLlJPVVRFUl9CQUNLKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5sb2NhdGlvbi5iYWNrKCkpXG4gICk7XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBuYXZpZ2F0ZUZvcndhcmQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRpbmdBY3Rpb25zLlJPVVRFUl9GT1JXQVJEKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5sb2NhdGlvbi5mb3J3YXJkKCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4gICkge31cbn1cbiJdfQ==