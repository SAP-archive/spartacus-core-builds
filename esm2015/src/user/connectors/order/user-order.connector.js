/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} cancelRequestInput
     * @return {?}
     */
    cancel(userId, orderCode, cancelRequestInput) {
        return this.adapter.cancel(userId, orderCode, cancelRequestInput);
    }
    /**
     * @param {?} userId
     * @param {?} returnRequestInput
     * @return {?}
     */
    return(userId, returnRequestInput) {
        return this.adapter.createReturnRequest(userId, returnRequestInput);
    }
    /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @return {?}
     */
    getReturnRequestDetail(userId, returnRequestCode) {
        return this.adapter.loadReturnRequestDetail(userId, returnRequestCode);
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    getReturnRequestList(userId, pageSize, currentPage, sort) {
        return this.adapter.loadReturnRequestList(userId, pageSize, currentPage, sort);
    }
    /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
        return this.adapter.cancelReturnRequest(userId, returnRequestCode, returnRequestModification);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUU1QyxHQUFHLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7O0lBRU0sVUFBVSxDQUNmLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTSxzQkFBc0IsQ0FDM0IsU0FBaUIsRUFDakIsZUFBdUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUNYLE1BQWMsRUFDZCxTQUFpQixFQUNqQixrQkFBcUQ7UUFFckQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUNYLE1BQWMsRUFDZCxrQkFBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVNLHNCQUFzQixDQUMzQixNQUFjLEVBQ2QsaUJBQXlCO1FBRXpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7OztJQUVNLG9CQUFvQixDQUN6QixNQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYTtRQUViLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FDdkMsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU0sbUJBQW1CLENBQ3hCLE1BQWMsRUFDZCxpQkFBeUIsRUFDekIseUJBQW9EO1FBRXBELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDckMsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix5QkFBeUIsQ0FDMUIsQ0FBQztJQUNKLENBQUM7OztZQXhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxnQkFBZ0I7Ozs7Ozs7O0lBTVgscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXItb3JkZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlck9yZGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgZ2V0KHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICB9XG5cbiAgcHVibGljIGdldEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhvcmRlckNvZGUsIGNvbnNpZ25tZW50Q29kZSk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNhbmNlbCh1c2VySWQsIG9yZGVyQ29kZSwgY2FuY2VsUmVxdWVzdElucHV0KTtcbiAgfVxuXG4gIHB1YmxpYyByZXR1cm4oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jcmVhdGVSZXR1cm5SZXF1ZXN0KHVzZXJJZCwgcmV0dXJuUmVxdWVzdElucHV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXR1cm5SZXF1ZXN0RGV0YWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmV0dXJuUmVxdWVzdERldGFpbCh1c2VySWQsIHJldHVyblJlcXVlc3RDb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXR1cm5SZXF1ZXN0TGlzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdExpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRSZXR1cm5SZXF1ZXN0TGlzdChcbiAgICAgIHVzZXJJZCxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgY3VycmVudFBhZ2UsXG4gICAgICBzb3J0XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgICAgdXNlcklkLFxuICAgICAgcmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19