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
export class RouterEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} location
     */
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_GO), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        })));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_GO_BY_URL), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), tap((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            this.router.navigateByUrl(url);
        })));
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            /** @type {?} */
            const filteredConfig = this.router.config.filter((/**
             * @param {?} route
             * @return {?}
             */
            (route) => !(route.data && route.data.cxCmsRouteContext)));
            if (filteredConfig.length !== this.router.config.length) {
                this.router.resetConfig(filteredConfig);
            }
        })));
        this.navigateBack$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_BACK), tap((/**
         * @return {?}
         */
        () => this.location.back())));
        this.navigateForward$ = this.actions$.pipe(ofType(RoutingActions.ROUTER_FORWARD), tap((/**
         * @return {?}
         */
        () => this.location.forward())));
    }
}
RouterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: Location }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2xELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUE0Q3hCLFlBQ1UsUUFBaUIsRUFDakIsTUFBYyxFQUNkLFFBQWtCO1FBRmxCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUE3QzVCLGNBQVMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW9DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0QsR0FBRzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQUksV0FBVyxJQUFLLE1BQU0sRUFBRyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixtQkFBYyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdELEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixvQkFBZSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEQsTUFBTSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDOUQsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDQSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztZQUM5QyxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUNuRTtZQUNELElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUNsQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFDLENBQ2hDLENBQUM7UUFHRixxQkFBZ0IsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQ3JDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FDbkMsQ0FBQztJQU1DLENBQUM7OztZQWpETCxVQUFVOzs7O1lBVEYsT0FBTztZQURQLE1BQU07WUFGTixRQUFROztBQWVmO0lBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUNqQixVQUFVO2dEQU1uQjtBQUdGO0lBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUNaLFVBQVU7cURBTXhCO0FBR0Y7SUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7c0NBQ1gsVUFBVTtzREFVekI7QUFHRjtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FDYixVQUFVO29EQUd2QjtBQUdGO0lBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUNWLFVBQVU7dURBRzFCOzs7SUF6Q0Ysa0NBT0U7O0lBRUYsdUNBT0U7O0lBRUYsd0NBV0U7O0lBRUYsc0NBSUU7O0lBRUYseUNBSUU7Ozs7O0lBR0EsaUNBQXlCOzs7OztJQUN6QiwrQkFBc0I7Ozs7O0lBQ3RCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBMQU5HVUFHRV9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDbXNSb3V0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuaW1wb3J0IHsgUm91dGluZ0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlckVmZmVjdHMge1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfR08pLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUdvQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKCh7IHBhdGgsIHF1ZXJ5OiBxdWVyeVBhcmFtcywgZXh0cmFzIH0pID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHsgcXVlcnlQYXJhbXMsIC4uLmV4dHJhcyB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCdVVybCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGluZ0FjdGlvbnMuUk9VVEVSX0dPX0JZX1VSTCksXG4gICAgbWFwKChhY3Rpb246IFJvdXRpbmdBY3Rpb25zLlJvdXRlR29BY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICB0YXAodXJsID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgY2xlYXJDbXNSb3V0ZXMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKExBTkdVQUdFX0NIQU5HRSwgQXV0aEFjdGlvbnMuTE9HT1VULCBBdXRoQWN0aW9ucy5MT0dJTiksXG4gICAgdGFwKF8gPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRDb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuZmlsdGVyKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PiAhKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dClcbiAgICAgICk7XG4gICAgICBpZiAoZmlsdGVyZWRDb25maWcubGVuZ3RoICE9PSB0aGlzLnJvdXRlci5jb25maWcubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKGZpbHRlcmVkQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCYWNrJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfQkFDSyksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uYmFjaygpKVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVGb3J3YXJkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShSb3V0aW5nQWN0aW9ucy5ST1VURVJfRk9SV0FSRCksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uZm9yd2FyZCgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHt9XG59XG4iXX0=