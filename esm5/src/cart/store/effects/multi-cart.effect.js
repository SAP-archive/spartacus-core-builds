/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CartActions } from '../actions/index';
var MultiCartEffects = /** @class */ (function () {
    function MultiCartEffects(actions$) {
        this.actions$ = actions$;
        this.loadCart2$ = this.actions$.pipe(ofType(CartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.LoadMultiCart(action.payload);
        })));
        this.createCart2$ = this.actions$.pipe(ofType(CartActions.CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.CreateMultiCart(action.payload);
        })));
        this.setFreshCart$ = this.actions$.pipe(ofType(CartActions.SET_FRESH_CART), map((/**
         * @return {?}
         */
        function () {
            return new CartActions.ResetFreshCart();
        })));
        this.mergeCart2$ = this.actions$.pipe(ofType(CartActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.MergeMultiCart(action.payload);
        })));
        this.addEmail2$ = this.actions$.pipe(ofType(CartActions.ADD_EMAIL_TO_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.AddEmailToMultiCart(action.payload);
        })));
        this.setLoading$ = this.actions$.pipe(ofType(CartActions.MERGE_CART, CartActions.CART_ADD_ENTRY, CartActions.CART_UPDATE_ENTRY, CartActions.CART_REMOVE_ENTRY), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return [
            new CartActions.SetCartLoading({
                cartId: payload.cartId,
            }),
        ]; })));
    }
    MultiCartEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MultiCartEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], MultiCartEffects.prototype, "loadCart2$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], MultiCartEffects.prototype, "createCart2$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], MultiCartEffects.prototype, "setFreshCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], MultiCartEffects.prototype, "mergeCart2$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], MultiCartEffects.prototype, "addEmail2$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], MultiCartEffects.prototype, "setLoading$", void 0);
    return MultiCartEffects;
}());
export { MultiCartEffects };
if (false) {
    /** @type {?} */
    MultiCartEffects.prototype.loadCart2$;
    /** @type {?} */
    MultiCartEffects.prototype.createCart2$;
    /** @type {?} */
    MultiCartEffects.prototype.setFreshCart$;
    /** @type {?} */
    MultiCartEffects.prototype.mergeCart2$;
    /** @type {?} */
    MultiCartEffects.prototype.addEmail2$;
    /** @type {?} */
    MultiCartEffects.prototype.setLoading$;
    /**
     * @type {?}
     * @private
     */
    MultiCartEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQXNFRSwwQkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQW5FckMsZUFBVSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFDN0IsR0FBRzs7OztRQUNELFVBQUMsTUFBNEI7WUFDM0IsT0FBQSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUE3QyxDQUE2QyxFQUNoRCxDQUNGLENBQUM7UUFHRixpQkFBWSxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDL0IsR0FBRzs7OztRQUNELFVBQUMsTUFBOEI7WUFDN0IsT0FBQSxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUEvQyxDQUErQyxFQUNsRCxDQUNGLENBQUM7UUFHRixrQkFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUNsQyxHQUFHOzs7UUFBQztZQUNGLE9BQU8sSUFBSSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGdCQUFXLEdBQTJDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUM5QixHQUFHOzs7O1FBQ0QsVUFBQyxNQUE2QjtZQUM1QixPQUFBLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQTlDLENBQThDLEVBQ2pELENBQ0YsQ0FBQztRQUdGLGVBQVUsR0FBZ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsRUFDckMsR0FBRzs7OztRQUNELFVBQUMsTUFBa0M7WUFDakMsT0FBQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQW5ELENBQW1ELEVBQ3RELENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBQTJDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RSxNQUFNLENBQ0osV0FBVyxDQUFDLFVBQVUsRUFDdEIsV0FBVyxDQUFDLGNBQWMsRUFDMUIsV0FBVyxDQUFDLGlCQUFpQixFQUM3QixXQUFXLENBQUMsaUJBQWlCLENBQzlCLEVBQ0QsR0FBRzs7OztRQUNELFVBQ0UsTUFJK0IsSUFDNUIsT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFDcEIsRUFDRCxRQUFROzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQTtZQUNsQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTthQUN2QixDQUFDO1NBQ0gsRUFKbUIsQ0FJbkIsRUFBQyxDQUNILENBQUM7SUFFc0MsQ0FBQzs7Z0JBdEUxQyxVQUFVOzs7O2dCQUxGLE9BQU87O0lBUWQ7UUFEQyxNQUFNLEVBQUU7MENBQ0csVUFBVTt3REFNcEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVOzBEQU10QjtJQUdGO1FBREMsTUFBTSxFQUFFOzsyREFNUDtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7eURBTXJCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0csVUFBVTt3REFNcEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVO3lEQXFCckI7SUFHSix1QkFBQztDQUFBLEFBdkVELElBdUVDO1NBdEVZLGdCQUFnQjs7O0lBQzNCLHNDQU9FOztJQUVGLHdDQU9FOztJQUVGLHlDQU1FOztJQUVGLHVDQU9FOztJQUVGLHNDQU9FOztJQUVGLHVDQXNCRTs7Ozs7SUFFVSxvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkxPQURfQ0FSVCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+XG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0KGFjdGlvbi5wYXlsb2FkKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PlxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0KGFjdGlvbi5wYXlsb2FkKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RnJlc2hDYXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuU0VUX0ZSRVNIX0NBUlQpLFxuICAgIG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLlJlc2V0RnJlc2hDYXJ0KCk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbWVyZ2VDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+XG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydChhY3Rpb24ucGF5bG9hZClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZEVtYWlsMiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCkgPT5cbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnQoYWN0aW9uLnBheWxvYWQpXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXRMb2FkaW5nJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5TZXRDYXJ0TG9hZGluZz4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVCxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUlksXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWVxuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5NZXJnZUNhcnRcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4gW1xuICAgICAgbmV3IENhcnRBY3Rpb25zLlNldENhcnRMb2FkaW5nKHtcbiAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgIH0pLFxuICAgIF0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbn1cbiJdfQ==