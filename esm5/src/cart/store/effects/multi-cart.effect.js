import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { CheckoutActions } from '../../../checkout/store/actions';
import { CartActions } from '../actions/index';
var MultiCartEffects = /** @class */ (function () {
    function MultiCartEffects(actions$) {
        this.actions$ = actions$;
        this.setTempCart$ = this.actions$.pipe(ofType(CartActions.SET_TEMP_CART), map(function (action) {
            return new CartActions.RemoveCart({ cartId: action.payload.tempCartId });
        }));
        // TODO: Change actions to extend Increment action instead of doing extra dispatch in this effect
        // Change for 2.0 release
        this.processesIncrement$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE, CartActions.CART_ADD_VOUCHER), map(function (action) { return action.payload; }), map(function (payload) { return new CartActions.CartProcessesIncrement(payload.cartId); }));
    }
    MultiCartEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect()
    ], MultiCartEffects.prototype, "setTempCart$", void 0);
    __decorate([
        Effect()
    ], MultiCartEffects.prototype, "processesIncrement$", void 0);
    MultiCartEffects = __decorate([
        Injectable()
    ], MultiCartEffects);
    return MultiCartEffects;
}());
export { MultiCartEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQztJQTZCRSwwQkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQTNCckMsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFDakMsR0FBRyxDQUFDLFVBQUMsTUFBK0I7WUFDbEMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixpR0FBaUc7UUFDakcseUJBQXlCO1FBRXpCLHdCQUFtQixHQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZUFBZSxDQUFDLDRCQUE0QixFQUM1QyxXQUFXLENBQUMsZ0JBQWdCLENBQzdCLEVBQ0QsR0FBRyxDQUNELFVBQ0UsTUFFOEIsSUFDM0IsT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FDcEIsRUFDRCxHQUFHLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FDekUsQ0FBQztJQUVzQyxDQUFDOztnQkFBWCxPQUFPOztJQTNCckM7UUFEQyxNQUFNLEVBQUU7MERBTVA7SUFLRjtRQURDLE1BQU0sRUFBRTtpRUFnQlA7SUEzQlMsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQThCNUI7SUFBRCx1QkFBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHNldFRlbXBDYXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuU0VUX1RFTVBfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQoeyBjYXJ0SWQ6IGFjdGlvbi5wYXlsb2FkLnRlbXBDYXJ0SWQgfSk7XG4gICAgfSlcbiAgKTtcblxuICAvLyBUT0RPOiBDaGFuZ2UgYWN0aW9ucyB0byBleHRlbmQgSW5jcmVtZW50IGFjdGlvbiBpbnN0ZWFkIG9mIGRvaW5nIGV4dHJhIGRpc3BhdGNoIGluIHRoaXMgZWZmZWN0XG4gIC8vIENoYW5nZSBmb3IgMi4wIHJlbGVhc2VcbiAgQEVmZmVjdCgpXG4gIHByb2Nlc3Nlc0luY3JlbWVudCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUlxuICAgICksXG4gICAgbWFwKFxuICAgICAgKFxuICAgICAgICBhY3Rpb246XG4gICAgICAgICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1hcCgocGF5bG9hZCkgPT4gbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNJbmNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMpIHt9XG59XG4iXX0=