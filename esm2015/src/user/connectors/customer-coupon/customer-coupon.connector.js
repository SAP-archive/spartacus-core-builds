/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CustomerCouponAdapter } from './customer-coupon.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./customer-coupon.adapter";
export class CustomerCouponConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} pageSize
     * @param {?} currentPage
     * @param {?} sort
     * @return {?}
     */
    getCustomerCoupons(userId, pageSize, currentPage, sort) {
        return this.adapter.getCustomerCoupons(userId, pageSize, currentPage, sort);
    }
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    turnOnNotification(userId, couponCode) {
        return this.adapter.turnOnNotification(userId, couponCode);
    }
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    turnOffNotification(userId, couponCode) {
        return this.adapter.turnOffNotification(userId, couponCode);
    }
    /**
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    claimCustomerCoupon(userId, couponCode) {
        return this.adapter.claimCustomerCoupon(userId, couponCode);
    }
}
CustomerCouponConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CustomerCouponConnector.ctorParameters = () => [
    { type: CustomerCouponAdapter }
];
/** @nocollapse */ CustomerCouponConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerCouponConnector_Factory() { return new CustomerCouponConnector(i0.ɵɵinject(i1.CustomerCouponAdapter)); }, token: CustomerCouponConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CustomerCouponConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2N1c3RvbWVyLWNvdXBvbi5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUtsRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQXNCLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFeEQsa0JBQWtCLENBQ2hCLE1BQWMsRUFDZCxRQUFnQixFQUNoQixXQUFtQixFQUNuQixJQUFZO1FBRVosT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUNoQixNQUFjLEVBQ2QsVUFBa0I7UUFFbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsVUFBa0I7UUFDcEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FDakIsTUFBYyxFQUNkLFVBQWtCO1FBRWxCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBL0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLHFCQUFxQjs7Ozs7Ozs7SUFNaEIsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uTm90aWZpY2F0aW9uLFxuICBDdXN0b21lckNvdXBvbjJDdXN0b21lcixcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uQWRhcHRlciB9IGZyb20gJy4vY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJDb3Vwb25Db25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ3VzdG9tZXJDb3Vwb25BZGFwdGVyKSB7fVxuXG4gIGdldEN1c3RvbWVyQ291cG9ucyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgc29ydDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldEN1c3RvbWVyQ291cG9ucyh1c2VySWQsIHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc29ydCk7XG4gIH1cblxuICB0dXJuT25Ob3RpZmljYXRpb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY291cG9uQ29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnR1cm5Pbk5vdGlmaWNhdGlvbih1c2VySWQsIGNvdXBvbkNvZGUpO1xuICB9XG5cbiAgdHVybk9mZk5vdGlmaWNhdGlvbih1c2VySWQ6IHN0cmluZywgY291cG9uQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudHVybk9mZk5vdGlmaWNhdGlvbih1c2VySWQsIGNvdXBvbkNvZGUpO1xuICB9XG5cbiAgY2xhaW1DdXN0b21lckNvdXBvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb3Vwb25Db2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbjJDdXN0b21lcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2xhaW1DdXN0b21lckNvdXBvbih1c2VySWQsIGNvdXBvbkNvZGUpO1xuICB9XG59XG4iXX0=