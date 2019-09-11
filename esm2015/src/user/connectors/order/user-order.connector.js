/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserOrderAdapter } from './user-order.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-order.adapter";
export class UserOrderConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    get(userId, orderCode) {
        return this.adapter.load(userId, orderCode);
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    getHistory(userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    }
    /**
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    getConsignmentTracking(orderCode, consignmentCode) {
        return this.adapter.getConsignmentTracking(orderCode, consignmentCode);
    }
}
UserOrderConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserOrderConnector.ctorParameters = () => [
    { type: UserOrderAdapter }
];
/** @nocollapse */ UserOrderConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserOrderConnector_Factory() { return new UserOrderConnector(i0.ɵɵinject(i1.UserOrderAdapter)); }, token: UserOrderConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserOrderConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUU1QyxHQUFHLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7O0lBRU0sVUFBVSxDQUNmLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTSxzQkFBc0IsQ0FDM0IsU0FBaUIsRUFDakIsZUFBdUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsZ0JBQWdCOzs7Ozs7OztJQU1YLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXItb3JkZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlck9yZGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgZ2V0KHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICB9XG5cbiAgcHVibGljIGdldEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhvcmRlckNvZGUsIGNvbnNpZ25tZW50Q29kZSk7XG4gIH1cbn1cbiJdfQ==