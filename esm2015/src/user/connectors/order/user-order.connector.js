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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNeEQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUU1QyxHQUFHLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7O0lBRU0sVUFBVSxDQUNmLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUFqQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsZ0JBQWdCOzs7Ozs7OztJQU9YLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlckNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyT3JkZXJBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBnZXQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQsIG9yZGVyQ29kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEhpc3RvcnkodXNlcklkLCBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNvcnQpO1xuICB9XG59XG4iXX0=