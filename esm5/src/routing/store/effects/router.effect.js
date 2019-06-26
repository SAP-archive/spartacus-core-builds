/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/index';
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
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), tap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxEO0lBNkNFLHVCQUNVLFFBQWlCLEVBQ2pCLE1BQWMsRUFDZCxRQUFrQjtRQUg1QixpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUE3QzVCLGNBQVMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3RCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFvQztnQkFBbEMsY0FBSSxFQUFFLHNCQUFrQixFQUFFLGtCQUFNO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQUksV0FBVyxhQUFBLElBQUssTUFBTSxFQUFHLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLG1CQUFjLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQ3ZDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3RCxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLG9CQUFlLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RCxNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUM5RCxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDOztnQkFDRyxjQUFjLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztZQUM5QyxVQUFDLEtBQWUsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBN0MsQ0FBNkMsRUFDbkU7WUFDRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixrQkFBYSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFDbEMsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQXBCLENBQW9CLEVBQUMsQ0FDaEMsQ0FBQztRQUdGLHFCQUFnQixHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFDckMsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FDbkMsQ0FBQztJQU1DLENBQUM7O2dCQWpETCxVQUFVOzs7O2dCQVRGLE9BQU87Z0JBRFAsTUFBTTtnQkFGTixRQUFROztJQWVmO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzBDQUNqQixVQUFVO29EQU1uQjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzBDQUNaLFVBQVU7eURBTXhCO0lBR0Y7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQ1gsVUFBVTswREFVekI7SUFHRjtRQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDYixVQUFVO3dEQUd2QjtJQUdGO1FBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzBDQUNWLFVBQVU7MkRBRzFCO0lBT0osb0JBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWpEWSxhQUFhOzs7SUFDeEIsa0NBT0U7O0lBRUYsdUNBT0U7O0lBRUYsd0NBV0U7O0lBRUYsc0NBSUU7O0lBRUYseUNBSUU7Ozs7O0lBR0EsaUNBQXlCOzs7OztJQUN6QiwrQkFBc0I7Ozs7O0lBQ3RCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBMQU5HVUFHRV9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDbXNSb3V0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuaW1wb3J0IHsgUm91dGluZ0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlckVmZmVjdHMge1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfR08pLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUdvQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKCh7IHBhdGgsIHF1ZXJ5OiBxdWVyeVBhcmFtcywgZXh0cmFzIH0pID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHsgcXVlcnlQYXJhbXMsIC4uLmV4dHJhcyB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCdVVybCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGluZ0FjdGlvbnMuUk9VVEVSX0dPX0JZX1VSTCksXG4gICAgbWFwKChhY3Rpb246IFJvdXRpbmdBY3Rpb25zLlJvdXRlR29BY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICB0YXAodXJsID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgY2xlYXJDbXNSb3V0ZXMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKExBTkdVQUdFX0NIQU5HRSwgQXV0aEFjdGlvbnMuTE9HT1VULCBBdXRoQWN0aW9ucy5MT0dJTiksXG4gICAgdGFwKF8gPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRDb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuZmlsdGVyKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PiAhKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dClcbiAgICAgICk7XG4gICAgICBpZiAoZmlsdGVyZWRDb25maWcubGVuZ3RoICE9PSB0aGlzLnJvdXRlci5jb25maWcubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKGZpbHRlcmVkQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCYWNrJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfQkFDSyksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uYmFjaygpKVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVGb3J3YXJkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfRk9SV0FSRCksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uZm9yd2FyZCgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHt9XG59XG4iXX0=