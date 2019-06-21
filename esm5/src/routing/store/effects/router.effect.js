/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RouterActions from '../actions/router.action';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { LOGIN, LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/languages.action';
var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(RouterActions.GO), map((/**
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
        this.navigateBuUrl$ = this.actions$.pipe(ofType(RouterActions.GO_BY_URL), map((/**
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
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), tap((/**
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
        this.navigateBack$ = this.actions$.pipe(ofType(RouterActions.BACK), tap((/**
         * @return {?}
         */
        function () { return _this.location.back(); })));
        this.navigateForward$ = this.actions$.pipe(ofType(RouterActions.FORWARD), tap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxLQUFLLGFBQWEsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHdkY7SUE2Q0UsdUJBQ1UsUUFBaUIsRUFDakIsTUFBYyxFQUNkLFFBQWtCO1FBSDVCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTdDNUIsY0FBUyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFDeEIsR0FBRzs7OztRQUFDLFVBQUMsTUFBd0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQW9DO2dCQUFsQyxjQUFJLEVBQUUsc0JBQWtCLEVBQUUsa0JBQU07WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBSSxXQUFXLGFBQUEsSUFBSyxNQUFNLEVBQUcsQ0FBQztRQUN6RCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQy9CLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNqRCxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLG9CQUFlLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RCxNQUFNLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQzs7Z0JBQ0csY0FBYyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFDOUMsVUFBQyxLQUFlLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQTdDLENBQTZDLEVBQ25FO1lBQ0QsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDdkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQzFCLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixFQUFDLENBQ2hDLENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQzdCLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUF2QixDQUF1QixFQUFDLENBQ25DLENBQUM7SUFNQyxDQUFDOztnQkFqREwsVUFBVTs7OztnQkFUTSxPQUFPO2dCQUhmLE1BQU07Z0JBQ04sUUFBUTs7SUFjZjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDakIsVUFBVTtvREFNbkI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDWixVQUFVO3lEQU14QjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzBDQUNYLFVBQVU7MERBVXpCO0lBR0Y7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQ2IsVUFBVTt3REFHdkI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDVixVQUFVOzJEQUcxQjtJQU9KLG9CQUFDO0NBQUEsQUFsREQsSUFrREM7U0FqRFksYUFBYTs7O0lBQ3hCLGtDQU9FOztJQUVGLHVDQU9FOztJQUVGLHdDQVdFOztJQUVGLHNDQUlFOztJQUVGLHlDQUlFOzs7OztJQUdBLGlDQUF5Qjs7Ozs7SUFDekIsK0JBQXNCOzs7OztJQUN0QixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICogYXMgUm91dGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JvdXRlci5hY3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBDbXNSb3V0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGUkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRlckFjdGlvbnMuR08pLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0ZXJBY3Rpb25zLkdvKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKCh7IHBhdGgsIHF1ZXJ5OiBxdWVyeVBhcmFtcywgZXh0cmFzIH0pID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHsgcXVlcnlQYXJhbXMsIC4uLmV4dHJhcyB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCdVVybCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGVyQWN0aW9ucy5HT19CWV9VUkwpLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0ZXJBY3Rpb25zLkdvKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKHVybCA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIGNsZWFyQ21zUm91dGVzJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShMQU5HVUFHRV9DSEFOR0UsIExPR09VVCwgTE9HSU4pLFxuICAgIHRhcChfID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ29uZmlnID0gdGhpcy5yb3V0ZXIuY29uZmlnLmZpbHRlcihcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT4gIShyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpXG4gICAgICApO1xuICAgICAgaWYgKGZpbHRlcmVkQ29uZmlnLmxlbmd0aCAhPT0gdGhpcy5yb3V0ZXIuY29uZmlnLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhmaWx0ZXJlZENvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlQmFjayQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGVyQWN0aW9ucy5CQUNLKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5sb2NhdGlvbi5iYWNrKCkpXG4gICk7XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBuYXZpZ2F0ZUZvcndhcmQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRlckFjdGlvbnMuRk9SV0FSRCksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uZm9yd2FyZCgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHt9XG59XG4iXX0=