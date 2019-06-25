/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import * as fromStore from '../store/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class UserPaymentService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Loads all user's payment methods.
     * @return {?}
     */
    loadPaymentMethods() {
        this.store.dispatch(new fromStore.LoadUserPaymentMethods(USERID_CURRENT));
    }
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    getPaymentMethods() {
        return this.store.pipe(select(UsersSelectors.getPaymentMethods));
    }
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    getPaymentMethodsLoading() {
        return this.store.pipe(select(UsersSelectors.getPaymentMethodsLoading));
    }
    /**
     * Sets the payment as a default one
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    setPaymentMethodAsDefault(paymentMethodId) {
        this.store.dispatch(new fromStore.SetDefaultUserPaymentMethod({
            userId: USERID_CURRENT,
            paymentMethodId,
        }));
    }
    /**
     * Deletes the payment method
     *
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    deletePaymentMethod(paymentMethodId) {
        this.store.dispatch(new fromStore.DeleteUserPaymentMethod({
            userId: USERID_CURRENT,
            paymentMethodId,
        }));
    }
    /**
     * Returns all billing countries
     * @return {?}
     */
    getAllBillingCountries() {
        return this.store.pipe(select(UsersSelectors.getAllBillingCountries));
    }
    /**
     * Retrieves billing countries
     * @return {?}
     */
    loadBillingCountries() {
        this.store.dispatch(new fromStore.LoadBillingCountries());
    }
}
UserPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserPaymentService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserPaymentService_Factory() { return new UserPaymentService(i0.ɵɵinject(i1.Store)); }, token: UserPaymentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserPaymentService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLMUQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUNZLEtBRVQ7UUFGUyxVQUFLLEdBQUwsS0FBSyxDQUVkO0lBQ0EsQ0FBQzs7Ozs7SUFLSixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUtELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFLRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFNRCx5QkFBeUIsQ0FBQyxlQUF1QjtRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsTUFBTSxFQUFFLGNBQWM7WUFDdEIsZUFBZTtTQUNoQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxtQkFBbUIsQ0FBQyxlQUF1QjtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsTUFBTSxFQUFFLGNBQWM7WUFDdEIsZUFBZTtTQUNoQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0Qsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFLRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQXRFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYZ0IsS0FBSzs7Ozs7Ozs7SUFjbEIsbUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVTRVJJRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJQYXltZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBmcm9tU3RvcmUuU3RhdGVXaXRoVXNlciB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPlxuICAgID5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbGwgdXNlcidzIHBheW1lbnQgbWV0aG9kcy5cbiAgICovXG4gIGxvYWRQYXltZW50TWV0aG9kcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhVU0VSSURfQ1VSUkVOVCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHVzZXIncyBwYXltZW50IG1ldGhvZHNcbiAgICovXG4gIGdldFBheW1lbnRNZXRob2RzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFBheW1lbnRNZXRob2RzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcGF5bWVudCBtZXRob2RzXG4gICAqL1xuICBnZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcGF5bWVudCBhcyBhIGRlZmF1bHQgb25lXG4gICAqIEBwYXJhbSBwYXltZW50TWV0aG9kSWQgYSBwYXltZW50IG1ldGhvZCBJRFxuICAgKi9cbiAgc2V0UGF5bWVudE1ldGhvZEFzRGVmYXVsdChwYXltZW50TWV0aG9kSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZCh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIHBheW1lbnRNZXRob2RJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwYXltZW50IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcGF5bWVudE1ldGhvZElkIGEgcGF5bWVudCBtZXRob2QgSURcbiAgICovXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5EZWxldGVVc2VyUGF5bWVudE1ldGhvZCh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIHBheW1lbnRNZXRob2RJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBiaWxsaW5nIGNvdW50cmllc1xuICAgKi9cbiAgZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFsbEJpbGxpbmdDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYmlsbGluZyBjb3VudHJpZXNcbiAgICovXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQmlsbGluZ0NvdW50cmllcygpKTtcbiAgfVxufVxuIl19