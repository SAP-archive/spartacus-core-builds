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
     * @param {?=} userId
     * @return {?}
     */
    getConsignmentTracking(orderCode, consignmentCode, userId) {
        return this.adapter.getConsignmentTracking(orderCode, consignmentCode, userId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUU1QyxHQUFHLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7O0lBRU0sVUFBVSxDQUNmLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRU0sc0JBQXNCLENBQzNCLFNBQWlCLEVBQ2pCLGVBQXVCLEVBQ3ZCLE1BQWU7UUFFZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQ3hDLFNBQVMsRUFDVCxlQUFlLEVBQ2YsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUNYLE1BQWMsRUFDZCxTQUFpQixFQUNqQixrQkFBcUQ7UUFFckQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUNYLE1BQWMsRUFDZCxrQkFBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVNLHNCQUFzQixDQUMzQixNQUFjLEVBQ2QsaUJBQXlCO1FBRXpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7OztJQUVNLG9CQUFvQixDQUN6QixNQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYTtRQUViLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FDdkMsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU0sbUJBQW1CLENBQ3hCLE1BQWMsRUFDZCxpQkFBeUIsRUFDekIseUJBQW9EO1FBRXBELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDckMsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix5QkFBeUIsQ0FDMUIsQ0FBQztJQUNKLENBQUM7OztZQTdFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxnQkFBZ0I7Ozs7Ozs7O0lBTVgscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXItb3JkZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlck9yZGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgZ2V0KHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICB9XG5cbiAgcHVibGljIGdldEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nLFxuICAgIHVzZXJJZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgICBvcmRlckNvZGUsXG4gICAgICBjb25zaWdubWVudENvZGUsXG4gICAgICB1c2VySWRcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jYW5jZWwodXNlcklkLCBvcmRlckNvZGUsIGNhbmNlbFJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgcmV0dXJuKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlUmV0dXJuUmVxdWVzdCh1c2VySWQsIHJldHVyblJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJldHVyblJlcXVlc3REZXRhaWwodXNlcklkLCByZXR1cm5SZXF1ZXN0Q29kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgICB1c2VySWQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgc29ydFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJldHVyblJlcXVlc3RDb2RlLFxuICAgICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==