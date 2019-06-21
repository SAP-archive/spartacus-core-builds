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
        this.navigate$ = this.actions$.pipe(ofType(RouterActions.GO), map((/**
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
        this.navigateBuUrl$ = this.actions$.pipe(ofType(RouterActions.GO_BY_URL), map((/**
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
        this.clearCmsRoutes$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), tap((/**
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
        this.navigateBack$ = this.actions$.pipe(ofType(RouterActions.BACK), tap((/**
         * @return {?}
         */
        () => this.location.back())));
        this.navigateForward$ = this.actions$.pipe(ofType(RouterActions.FORWARD), tap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2VmZmVjdHMvcm91dGVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxLQUFLLGFBQWEsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJdkYsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQTRDeEIsWUFDVSxRQUFpQixFQUNqQixNQUFjLEVBQ2QsUUFBa0I7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTdDNUIsY0FBUyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFDeEIsR0FBRzs7OztRQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNqRCxHQUFHOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBSSxXQUFXLElBQUssTUFBTSxFQUFHLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLG1CQUFjLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUMvQixHQUFHOzs7O1FBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ2pELEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixvQkFBZSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEQsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ0EsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFDOUMsQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFDbkU7WUFDRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixrQkFBYSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFDMUIsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUNoQyxDQUFDO1FBR0YscUJBQWdCLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2RCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQ25DLENBQUM7SUFNQyxDQUFDOzs7WUFqREwsVUFBVTs7OztZQVRNLE9BQU87WUFIZixNQUFNO1lBQ04sUUFBUTs7QUFjZjtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FDakIsVUFBVTtnREFNbkI7QUFHRjtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FDWixVQUFVO3FEQU14QjtBQUdGO0lBREMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUNYLFVBQVU7c0RBVXpCO0FBR0Y7SUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7c0NBQ2IsVUFBVTtvREFHdkI7QUFHRjtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FDVixVQUFVO3VEQUcxQjs7O0lBekNGLGtDQU9FOztJQUVGLHVDQU9FOztJQUVGLHdDQVdFOztJQUVGLHNDQUlFOztJQUVGLHlDQUlFOzs7OztJQUdBLGlDQUF5Qjs7Ozs7SUFDekIsK0JBQXNCOzs7OztJQUN0QixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICogYXMgUm91dGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JvdXRlci5hY3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBDbXNSb3V0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbXMtcm91dGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGUkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRlckFjdGlvbnMuR08pLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0ZXJBY3Rpb25zLkdvKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKCh7IHBhdGgsIHF1ZXJ5OiBxdWVyeVBhcmFtcywgZXh0cmFzIH0pID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHBhdGgsIHsgcXVlcnlQYXJhbXMsIC4uLmV4dHJhcyB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgbmF2aWdhdGVCdVVybCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGVyQWN0aW9ucy5HT19CWV9VUkwpLFxuICAgIG1hcCgoYWN0aW9uOiBSb3V0ZXJBY3Rpb25zLkdvKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgdGFwKHVybCA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIGNsZWFyQ21zUm91dGVzJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShMQU5HVUFHRV9DSEFOR0UsIExPR09VVCwgTE9HSU4pLFxuICAgIHRhcChfID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ29uZmlnID0gdGhpcy5yb3V0ZXIuY29uZmlnLmZpbHRlcihcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT4gIShyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQpXG4gICAgICApO1xuICAgICAgaWYgKGZpbHRlcmVkQ29uZmlnLmxlbmd0aCAhPT0gdGhpcy5yb3V0ZXIuY29uZmlnLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhmaWx0ZXJlZENvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIG5hdmlnYXRlQmFjayQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoUm91dGVyQWN0aW9ucy5CQUNLKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5sb2NhdGlvbi5iYWNrKCkpXG4gICk7XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBuYXZpZ2F0ZUZvcndhcmQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFJvdXRlckFjdGlvbnMuRk9SV0FSRCksXG4gICAgdGFwKCgpID0+IHRoaXMubG9jYXRpb24uZm9yd2FyZCgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHt9XG59XG4iXX0=