/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserPaymentService = /** @class */ (function () {
    function UserPaymentService(store) {
        this.store = store;
    }
    /**
     * Loads all user's payment methods.
     */
    /**
     * Loads all user's payment methods.
     * @return {?}
     */
    UserPaymentService.prototype.loadPaymentMethods = /**
     * Loads all user's payment methods.
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.LoadUserPaymentMethods(USERID_CURRENT));
    };
    /**
     * Returns all user's payment methods
     */
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    UserPaymentService.prototype.getPaymentMethods = /**
     * Returns all user's payment methods
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getPaymentMethods));
    };
    /**
     * Returns a loading flag for payment methods
     */
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    UserPaymentService.prototype.getPaymentMethodsLoading = /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getPaymentMethodsLoading));
    };
    /**
     * @return {?}
     */
    UserPaymentService.prototype.getPaymentMethodsLoadedSuccess = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getPaymentMethodsLoadedSuccess));
    };
    /**
     * Sets the payment as a default one
     * @param paymentMethodId a payment method ID
     */
    /**
     * Sets the payment as a default one
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    UserPaymentService.prototype.setPaymentMethodAsDefault = /**
     * Sets the payment as a default one
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    function (paymentMethodId) {
        this.store.dispatch(new UserActions.SetDefaultUserPaymentMethod({
            userId: USERID_CURRENT,
            paymentMethodId: paymentMethodId,
        }));
    };
    /**
     * Deletes the payment method
     *
     * @param paymentMethodId a payment method ID
     */
    /**
     * Deletes the payment method
     *
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    UserPaymentService.prototype.deletePaymentMethod = /**
     * Deletes the payment method
     *
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    function (paymentMethodId) {
        this.store.dispatch(new UserActions.DeleteUserPaymentMethod({
            userId: USERID_CURRENT,
            paymentMethodId: paymentMethodId,
        }));
    };
    /**
     * Returns all billing countries
     */
    /**
     * Returns all billing countries
     * @return {?}
     */
    UserPaymentService.prototype.getAllBillingCountries = /**
     * Returns all billing countries
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getAllBillingCountries));
    };
    /**
     * Retrieves billing countries
     */
    /**
     * Retrieves billing countries
     * @return {?}
     */
    UserPaymentService.prototype.loadBillingCountries = /**
     * Retrieves billing countries
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.LoadBillingCountries());
    };
    UserPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserPaymentService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ UserPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserPaymentService_Factory() { return new UserPaymentService(i0.ɵɵinject(i1.Store)); }, token: UserPaymentService, providedIn: "root" });
    return UserPaymentService;
}());
export { UserPaymentService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserPaymentService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUcxRDtJQUlFLDRCQUFzQixLQUFvRDtRQUFwRCxVQUFLLEdBQUwsS0FBSyxDQUErQztJQUFHLENBQUM7SUFFOUU7O09BRUc7Ozs7O0lBQ0gsK0NBQWtCOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsOENBQWlCOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscURBQXdCOzs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsMkRBQThCOzs7SUFBOUI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBQ0Q7OztPQUdHOzs7Ozs7SUFDSCxzREFBeUI7Ozs7O0lBQXpCLFVBQTBCLGVBQXVCO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQztZQUMxQyxNQUFNLEVBQUUsY0FBYztZQUN0QixlQUFlLGlCQUFBO1NBQ2hCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxnREFBbUI7Ozs7OztJQUFuQixVQUFvQixlQUF1QjtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDdEMsTUFBTSxFQUFFLGNBQWM7WUFDdEIsZUFBZSxpQkFBQTtTQUNoQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtREFBc0I7Ozs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxpREFBb0I7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBdkVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWmdCLEtBQUs7Ozs2QkFEdEI7Q0FtRkMsQUF4RUQsSUF3RUM7U0FyRVksa0JBQWtCOzs7Ozs7SUFDakIsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJQYXltZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbGwgdXNlcidzIHBheW1lbnQgbWV0aG9kcy5cbiAgICovXG4gIGxvYWRQYXltZW50TWV0aG9kcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzKFVTRVJJRF9DVVJSRU5UKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgdXNlcidzIHBheW1lbnQgbWV0aG9kc1xuICAgKi9cbiAgZ2V0UGF5bWVudE1ldGhvZHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UGF5bWVudE1ldGhvZHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBwYXltZW50IG1ldGhvZHNcbiAgICovXG4gIGdldFBheW1lbnRNZXRob2RzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcpKTtcbiAgfVxuXG4gIGdldFBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2VzcylcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwYXltZW50IGFzIGEgZGVmYXVsdCBvbmVcbiAgICogQHBhcmFtIHBheW1lbnRNZXRob2RJZCBhIHBheW1lbnQgbWV0aG9kIElEXG4gICAqL1xuICBzZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHBheW1lbnRNZXRob2RJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2Qoe1xuICAgICAgICB1c2VySWQ6IFVTRVJJRF9DVVJSRU5ULFxuICAgICAgICBwYXltZW50TWV0aG9kSWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyB0aGUgcGF5bWVudCBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHBheW1lbnRNZXRob2RJZCBhIHBheW1lbnQgbWV0aG9kIElEXG4gICAqL1xuICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2RJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyUGF5bWVudE1ldGhvZCh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIHBheW1lbnRNZXRob2RJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBiaWxsaW5nIGNvdW50cmllc1xuICAgKi9cbiAgZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFsbEJpbGxpbmdDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYmlsbGluZyBjb3VudHJpZXNcbiAgICovXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRCaWxsaW5nQ291bnRyaWVzKCkpO1xuICB9XG59XG4iXX0=