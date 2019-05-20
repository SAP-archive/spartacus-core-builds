/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserPaymentAdapter } from './user-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-payment.adapter";
var UserPaymentConnector = /** @class */ (function () {
    function UserPaymentConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserPaymentConnector.prototype.getAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentConnector.prototype.delete = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentConnector.prototype.setDefault = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    };
    /**
     * @return {?}
     */
    UserPaymentConnector.prototype.getBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadBillingCountries();
    };
    /**
     * @return {?}
     */
    UserPaymentConnector.prototype.getDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadDeliveryCountries();
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserPaymentConnector.prototype.getRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    };
    UserPaymentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserPaymentConnector.ctorParameters = function () { return [
        { type: UserPaymentAdapter }
    ]; };
    /** @nocollapse */ UserPaymentConnector.ngInjectableDef = i0.defineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(i0.inject(i1.UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });
    return UserPaymentConnector;
}());
export { UserPaymentConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserPaymentConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7OztJQUVyRCxxQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sTUFBYyxFQUFFLGVBQXVCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELHlDQUFVOzs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLGVBQXVCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxrREFBbUI7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxtREFBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLGNBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBNUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsa0JBQWtCOzs7K0JBRDNCO0NBbUNDLEFBN0JELElBNkJDO1NBMUJZLG9CQUFvQjs7Ozs7O0lBQ25CLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4vdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclBheW1lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlclBheW1lbnRBZGFwdGVyKSB7fVxuXG4gIGdldEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFsbCh1c2VySWQpO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmRlbGV0ZSh1c2VySWQsIHBheW1lbnRNZXRob2RJRCk7XG4gIH1cblxuICBzZXREZWZhdWx0KHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldERlZmF1bHQodXNlcklkLCBwYXltZW50TWV0aG9kSUQpO1xuICB9XG5cbiAgZ2V0QmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEJpbGxpbmdDb3VudHJpZXMoKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKTtcbiAgfVxuXG4gIGdldFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKTtcbiAgfVxufVxuIl19