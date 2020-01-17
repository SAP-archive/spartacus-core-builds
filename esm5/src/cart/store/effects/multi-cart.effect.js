/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutActions } from '../../../checkout/store/actions';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
var MultiCartEffects = /** @class */ (function () {
    function MultiCartEffects(actions$) {
        this.actions$ = actions$;
        this.loadCart2$ = this.actions$.pipe(ofType(DeprecatedCartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.LoadMultiCart(action.payload);
        })));
        this.createCart2$ = this.actions$.pipe(ofType(DeprecatedCartActions.CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.CreateMultiCart(action.payload);
        })));
        this.setTempCart$ = this.actions$.pipe(ofType(CartActions.SET_TEMP_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.RemoveTempCart(action.payload);
        })));
        this.mergeCart2$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.MergeMultiCart(action.payload);
        })));
        this.addEmail2$ = this.actions$.pipe(ofType(DeprecatedCartActions.ADD_EMAIL_TO_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return new CartActions.AddEmailToMultiCart(action.payload);
        })));
        this.removeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.DELETE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return new CartActions.RemoveCart(payload.cartId); })));
        // TODO: Change actions to extend Increment action instead of doing extra dispatch in this effect
        // Change for 2.0 release
        this.processesIncrement$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY, CartActions.CART_UPDATE_ENTRY, CartActions.CART_REMOVE_ENTRY, DeprecatedCartActions.ADD_EMAIL_TO_CART, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE, CartActions.CART_ADD_VOUCHER, CartActions.CART_REMOVE_VOUCHER), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return new CartActions.CartProcessesIncrement(payload.cartId); })));
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
    ], MultiCartEffects.prototype, "setTempCart$", void 0);
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
    ], MultiCartEffects.prototype, "removeCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], MultiCartEffects.prototype, "processesIncrement$", void 0);
    return MultiCartEffects;
}());
export { MultiCartEffects };
if (false) {
    /** @type {?} */
    MultiCartEffects.prototype.loadCart2$;
    /** @type {?} */
    MultiCartEffects.prototype.createCart2$;
    /** @type {?} */
    MultiCartEffects.prototype.setTempCart$;
    /** @type {?} */
    MultiCartEffects.prototype.mergeCart2$;
    /** @type {?} */
    MultiCartEffects.prototype.addEmail2$;
    /** @type {?} */
    MultiCartEffects.prototype.removeCart$;
    /** @type {?} */
    MultiCartEffects.prototype.processesIncrement$;
    /**
     * @type {?}
     * @private
     */
    MultiCartEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7SUFtRkUsMEJBQW9CLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFoRnJDLGVBQVUsR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFDdkMsR0FBRzs7OztRQUNELFVBQUMsTUFBc0M7WUFDckMsT0FBQSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUE3QyxDQUE2QyxFQUNoRCxDQUNGLENBQUM7UUFHRixpQkFBWSxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUN6QyxHQUFHOzs7O1FBQ0QsVUFBQyxNQUE4QjtZQUM3QixPQUFBLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQS9DLENBQStDLEVBQ2xELENBQ0YsQ0FBQztRQUdGLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQStCO1lBQ2xDLE9BQU8sSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0YsZ0JBQVcsR0FBMkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFDeEMsR0FBRzs7OztRQUNELFVBQUMsTUFBdUM7WUFDdEMsT0FBQSxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUE5QyxDQUE4QyxFQUNqRCxDQUNGLENBQUM7UUFHRixlQUFVLEdBQWdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsR0FBRzs7OztRQUNELFVBQUMsTUFBa0M7WUFDakMsT0FBQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQW5ELENBQW1ELEVBQ3RELENBQ0YsQ0FBQztRQUdGLGdCQUFXLEdBQXVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRSxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQ3pDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUNqRSxHQUFHOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUExQyxDQUEwQyxFQUFDLENBQzNELENBQUM7OztRQUtGLHdCQUFtQixHQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osV0FBVyxDQUFDLGNBQWMsRUFDMUIsV0FBVyxDQUFDLGlCQUFpQixFQUM3QixXQUFXLENBQUMsaUJBQWlCLEVBQzdCLHFCQUFxQixDQUFDLGlCQUFpQixFQUN2QyxlQUFlLENBQUMsNEJBQTRCLEVBQzVDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFDNUIsV0FBVyxDQUFDLG1CQUFtQixDQUNoQyxFQUNELEdBQUc7Ozs7UUFDRCxVQUNFLE1BT2lDLElBQzlCLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQ3BCLEVBQ0QsR0FBRzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUF0RCxDQUFzRCxFQUFDLENBQ3ZFLENBQUM7SUFFc0MsQ0FBQzs7Z0JBbkYxQyxVQUFVOzs7O2dCQVBGLE9BQU87O0lBVWQ7UUFEQyxNQUFNLEVBQUU7MENBQ0csVUFBVTt3REFNcEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVOzBEQU10QjtJQUdGO1FBREMsTUFBTSxFQUFFOzswREFNUDtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7eURBTXJCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0csVUFBVTt3REFNcEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVO3lEQUlyQjtJQUtGO1FBREMsTUFBTSxFQUFFOzBDQUNZLFVBQVU7aUVBeUI3QjtJQUdKLHVCQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0FuRlksZ0JBQWdCOzs7SUFDM0Isc0NBT0U7O0lBRUYsd0NBT0U7O0lBRUYsd0NBTUU7O0lBRUYsdUNBT0U7O0lBRUYsc0NBT0U7O0lBRUYsdUNBS0U7O0lBSUYsK0NBMEJFOzs7OztJQUVVLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCkgPT5cbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnQoYWN0aW9uLnBheWxvYWQpXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNSRUFURV9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KSA9PlxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlTXVsdGlDYXJ0KGFjdGlvbi5wYXlsb2FkKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0VGVtcENhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5TRVRfVEVNUF9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuU2V0VGVtcENhcnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlVGVtcENhcnQoYWN0aW9uLnBheWxvYWQpO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+XG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydChhY3Rpb24ucGF5bG9hZClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZEVtYWlsMiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+XG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0KGFjdGlvbi5wYXlsb2FkKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuUmVtb3ZlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5ERUxFVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKHBheWxvYWQgPT4gbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQocGF5bG9hZC5jYXJ0SWQpKVxuICApO1xuXG4gIC8vIFRPRE86IENoYW5nZSBhY3Rpb25zIHRvIGV4dGVuZCBJbmNyZW1lbnQgYWN0aW9uIGluc3RlYWQgb2YgZG9pbmcgZXh0cmEgZGlzcGF0Y2ggaW4gdGhpcyBlZmZlY3RcbiAgLy8gQ2hhbmdlIGZvciAyLjAgcmVsZWFzZVxuICBARWZmZWN0KClcbiAgcHJvY2Vzc2VzSW5jcmVtZW50JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUlksXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWSxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZLFxuICAgICAgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJULFxuICAgICAgQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREUsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUlxuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5XG4gICAgICAgICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlXG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlclxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1hcChwYXlsb2FkID0+IG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzSW5jcmVtZW50KHBheWxvYWQuY2FydElkKSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zKSB7fVxufVxuIl19