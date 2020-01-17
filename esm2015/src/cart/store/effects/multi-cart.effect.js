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
export class MultiCartEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.loadCart2$ = this.actions$.pipe(ofType(DeprecatedCartActions.LOAD_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => new CartActions.LoadMultiCart(action.payload))));
        this.createCart2$ = this.actions$.pipe(ofType(DeprecatedCartActions.CREATE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => new CartActions.CreateMultiCart(action.payload))));
        this.setTempCart$ = this.actions$.pipe(ofType(CartActions.SET_TEMP_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return new CartActions.RemoveTempCart(action.payload);
        })));
        this.mergeCart2$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => new CartActions.MergeMultiCart(action.payload))));
        this.addEmail2$ = this.actions$.pipe(ofType(DeprecatedCartActions.ADD_EMAIL_TO_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => new CartActions.AddEmailToMultiCart(action.payload))));
        this.removeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.DELETE_CART), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => new CartActions.RemoveCart(payload.cartId))));
        // TODO: Change actions to extend Increment action instead of doing extra dispatch in this effect
        // Change for 2.0 release
        this.processesIncrement$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY, CartActions.CART_UPDATE_ENTRY, CartActions.CART_REMOVE_ENTRY, DeprecatedCartActions.ADD_EMAIL_TO_CART, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE, CartActions.CART_ADD_VOUCHER, CartActions.CART_REMOVE_VOUCHER), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => new CartActions.CartProcessesIncrement(payload.cartId))));
    }
}
MultiCartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MultiCartEffects.ctorParameters = () => [
    { type: Actions }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWtGM0IsWUFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQWhGckMsZUFBVSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUN2QyxHQUFHOzs7O1FBQ0QsQ0FBQyxNQUFzQyxFQUFFLEVBQUUsQ0FDekMsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDaEQsQ0FDRixDQUFDO1FBR0YsaUJBQVksR0FBNEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFDekMsR0FBRzs7OztRQUNELENBQUMsTUFBOEIsRUFBRSxFQUFFLENBQ2pDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2xELENBQ0YsQ0FBQztRQUdGLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ2pDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQStCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGdCQUFXLEdBQTJDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RSxNQUFNLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEVBQ3hDLEdBQUc7Ozs7UUFDRCxDQUFDLE1BQXVDLEVBQUUsRUFBRSxDQUMxQyxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNqRCxDQUNGLENBQUM7UUFHRixlQUFVLEdBQWdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsR0FBRzs7OztRQUNELENBQUMsTUFBa0MsRUFBRSxFQUFFLENBQ3JDLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDdEQsQ0FDRixDQUFDO1FBR0YsZ0JBQVcsR0FBdUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFDekMsR0FBRzs7OztRQUFDLENBQUMsTUFBd0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNqRSxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQzNELENBQUM7OztRQUtGLHdCQUFtQixHQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osV0FBVyxDQUFDLGNBQWMsRUFDMUIsV0FBVyxDQUFDLGlCQUFpQixFQUM3QixXQUFXLENBQUMsaUJBQWlCLEVBQzdCLHFCQUFxQixDQUFDLGlCQUFpQixFQUN2QyxlQUFlLENBQUMsNEJBQTRCLEVBQzVDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFDNUIsV0FBVyxDQUFDLG1CQUFtQixDQUNoQyxFQUNELEdBQUc7Ozs7UUFDRCxDQUNFLE1BT2lDLEVBQ2pDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUNwQixFQUNELEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUN2RSxDQUFDO0lBRXNDLENBQUM7OztZQW5GMUMsVUFBVTs7OztZQVBGLE9BQU87O0FBVWQ7SUFEQyxNQUFNLEVBQUU7c0NBQ0csVUFBVTtvREFNcEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3NEQU10QjtBQUdGO0lBREMsTUFBTSxFQUFFOztzREFNUDtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7cURBTXJCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0csVUFBVTtvREFNcEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO3FEQUlyQjtBQUtGO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7NkRBeUI3Qjs7O0lBL0VGLHNDQU9FOztJQUVGLHdDQU9FOztJQUVGLHdDQU1FOztJQUVGLHVDQU9FOztJQUVGLHNDQU9FOztJQUVGLHVDQUtFOztJQUlGLCtDQTBCRTs7Ozs7SUFFVSxvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuTE9BRF9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQpID0+XG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkTXVsdGlDYXJ0KGFjdGlvbi5wYXlsb2FkKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCkgPT5cbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydChhY3Rpb24ucGF5bG9hZClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFRlbXBDYXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuU0VUX1RFTVBfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLlJlbW92ZVRlbXBDYXJ0KGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBtZXJnZUNhcnQyJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KSA9PlxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnQoYWN0aW9uLnBheWxvYWQpXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KSA9PlxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydChhY3Rpb24ucGF5bG9hZClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLlJlbW92ZUNhcnQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEZXByZWNhdGVkQ2FydEFjdGlvbnMuREVMRVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KHBheWxvYWQuY2FydElkKSlcbiAgKTtcblxuICAvLyBUT0RPOiBDaGFuZ2UgYWN0aW9ucyB0byBleHRlbmQgSW5jcmVtZW50IGFjdGlvbiBpbnN0ZWFkIG9mIGRvaW5nIGV4dHJhIGRpc3BhdGNoIGluIHRoaXMgZWZmZWN0XG4gIC8vIENoYW5nZSBmb3IgMi4wIHJlbGVhc2VcbiAgQEVmZmVjdCgpXG4gIHByb2Nlc3Nlc0luY3JlbWVudCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUlksXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWSxcbiAgICAgIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BRERfRU1BSUxfVE9fQ0FSVCxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUixcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5XG4gICAgICAgICAgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVxuICAgICAgICAgIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0XG4gICAgICAgICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyXG4gICAgICApID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtYXAocGF5bG9hZCA9PiBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudChwYXlsb2FkLmNhcnRJZCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbn1cbiJdfQ==