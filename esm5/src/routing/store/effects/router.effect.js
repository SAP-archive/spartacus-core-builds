/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
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
        this.navigate$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_GO), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, tslib_1.__assign({ queryParams: queryParams }, extras));
        })));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_GO_BY_URL), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), tap((/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            _this.router.navigateByUrl(url);
        })));
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            /** @type {?} */
            var filteredConfig = _this.router.config.filter((/**
             * @param {?} route
             * @return {?}
             */
            function (route) { return !(route.data && route.data.cxCmsRouteContext); }));
            if (filteredConfig.length !== _this.router.config.length) {
                _this.router.resetConfig(filteredConfig);
            }
        })));
        this.navigateBack$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_BACK), tap((/**
         * @return {?}
         */
        function () { return _this.location.back(); })));
        this.navigateForward$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_FORWARD), tap((/**
         * @return {?}
         */
        function () { return _this.location.forward(); })));
    }
    RouterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: Location }
    ]; };
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigate$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateBuUrl$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Observable)
    ], RouterEffects.prototype, "clearCmsRoutes$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    return RouterEffects;
}());
export { RouterEffects };
if (false) {
    /** @type {?} */
    RouterEffects.prototype.navigate$;
    /** @type {?} */
    RouterEffects.prototype.navigateBuUrl$;
    /** @type {?} */
    RouterEffects.prototype.clearCmsRoutes$;
    /** @type {?} */
    RouterEffects.prototype.navigateBack$;
    /** @type {?} */
    RouterEffects.prototype.navigateForward$;
    /**
     * @type {?}
     * @private
     */
    RouterEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    RouterEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RouterEffects.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUFpREUsdUJBQ1UsUUFBaUIsRUFDakIsTUFBYyxFQUNkLFFBQWtCO1FBSDVCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWpENUIsY0FBUyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFDaEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQW9DO2dCQUFsQyxjQUFJLEVBQUUsc0JBQWtCLEVBQUUsa0JBQU07WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBSSxXQUFXLGFBQUEsSUFBSyxNQUFNLEVBQUcsQ0FBQztRQUN6RCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFDdkMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdELEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysb0JBQWUsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RELE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLFdBQVcsQ0FBQyxNQUFNLEVBQ2xCLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLEVBQ0QsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQzs7Z0JBQ0csY0FBYyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFDOUMsVUFBQyxLQUFlLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQTdDLENBQTZDLEVBQ25FO1lBQ0QsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDdkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQ2xDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixFQUFDLENBQ2hDLENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQ3JDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUF2QixDQUF1QixFQUFDLENBQ25DLENBQUM7SUFNQyxDQUFDOztnQkFyREwsVUFBVTs7OztnQkFURixPQUFPO2dCQURQLE1BQU07Z0JBRk4sUUFBUTs7SUFlZjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDakIsVUFBVTtvREFNbkI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDWixVQUFVO3lEQU14QjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzBDQUNYLFVBQVU7MERBY3pCO0lBR0Y7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQ2IsVUFBVTt3REFHdkI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDVixVQUFVOzJEQUcxQjtJQU9KLG9CQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksYUFBYTs7O0lBQ3hCLGtDQU9FOztJQUVGLHVDQU9FOztJQUVGLHdDQWVFOztJQUVGLHNDQUlFOztJQUVGLHlDQUlFOzs7OztJQUdBLGlDQUF5Qjs7Ozs7SUFDekIsK0JBQXNCOzs7OztJQUN0QixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUm91dGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY21zLXJvdXRlJztcbmltcG9ydCB7IFJvdXRpbmdBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBuYXZpZ2F0ZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGluZ0FjdGlvbnMuUk9VVEVSX0dPKSxcbiAgICBtYXAoKGFjdGlvbjogUm91dGluZ0FjdGlvbnMuUm91dGVHb0FjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHRhcCgoeyBwYXRoLCBxdWVyeTogcXVlcnlQYXJhbXMsIGV4dHJhcyB9KSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoLCB7IHF1ZXJ5UGFyYW1zLCAuLi5leHRyYXMgfSk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlQnVVcmwkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRpbmdBY3Rpb25zLlJPVVRFUl9HT19CWV9VUkwpLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUdvQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKHVybCA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIGNsZWFyQ21zUm91dGVzJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgICksXG4gICAgdGFwKF8gPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRDb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuZmlsdGVyKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PiAhKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dClcbiAgICAgICk7XG4gICAgICBpZiAoZmlsdGVyZWRDb25maWcubGVuZ3RoICE9PSB0aGlzLnJvdXRlci5jb25maWcubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKGZpbHRlcmVkQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCYWNrJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfQkFDSyksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uYmFjaygpKVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVGb3J3YXJkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfRk9SV0FSRCksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uZm9yd2FyZCgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHt9XG59XG4iXX0=