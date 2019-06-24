/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import * as fromSelector from '../../checkout/store/selectors/index';
import * as fromCheckoutStore from '../store/index';
export class CheckoutService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Places an order
     * @return {?}
     */
    placeOrder() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * Clear checkout data
     * @return {?}
     */
    clearCheckoutData() {
        this.checkoutStore.dispatch(new fromCheckoutStore.ClearCheckoutData());
    }
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    clearCheckoutStep(stepNumber) {
        this.checkoutStore.dispatch(new fromCheckoutStore.ClearCheckoutStep(stepNumber));
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(cartId) {
        this.checkoutStore.dispatch(new fromCheckoutStore.LoadCheckoutDetails({
            userId: this.cartData.userId,
            cartId,
        }));
    }
    /**
     * @return {?}
     */
    getCheckoutDetailsLoaded() {
        return this.checkoutStore.pipe(select(fromSelector.getCheckoutDetailsLoaded));
    }
    /**
     * Get order details
     * @return {?}
     */
    getOrderDetails() {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getCheckoutOrderDetails));
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutService.prototype.checkoutStore;
    /**
     * @type {?}
     * @protected
     */
    CheckoutService.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEtBQUssWUFBWSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFDMUIsWUFDWSxhQUF5RCxFQUN6RCxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDekQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQzs7Ozs7SUFLSixVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2FBQzdCLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUtELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQU1ELGlCQUFpQixDQUFDLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFjO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDO1lBQ3hDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDNUIsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDOzs7OztJQUtELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRVMsYUFBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7OztZQWhFRixVQUFVOzs7O1lBVk0sS0FBSztZQUlwQixlQUFlOzs7Ozs7O0lBU2Isd0NBQW1FOzs7OztJQUNuRSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX1VTRVJJRCxcbiAgQ2FydERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tU2VsZWN0b3IgZnJvbSAnLi4vLi4vY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUNoZWNrb3V0U3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPGZyb21DaGVja291dFN0b3JlLlN0YXRlV2l0aENoZWNrb3V0PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFBsYWNlcyBhbiBvcmRlclxuICAgKi9cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLlBsYWNlT3JkZXIoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IGRhdGFcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgZnJvbUNoZWNrb3V0U3RvcmUuQ2xlYXJDaGVja291dERhdGEoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2hlY2tvdXQgc3RlcFxuICAgKiBAcGFyYW0gc3RlcE51bWJlciA6IHRoZSBzdGVwIG51bWJlciB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBjbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbUNoZWNrb3V0U3RvcmUuQ2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcilcbiAgICApO1xuICB9XG5cbiAgbG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU2VsZWN0b3IuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IEFOT05ZTU9VU19VU0VSSUQ7XG4gIH1cbn1cbiJdfQ==