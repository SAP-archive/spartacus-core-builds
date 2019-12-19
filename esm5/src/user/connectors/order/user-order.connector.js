/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserOrderAdapter } from './user-order.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-order.adapter";
var UserOrderConnector = /** @class */ (function () {
    function UserOrderConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    UserOrderConnector.prototype.get = /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    function (userId, orderCode) {
        return this.adapter.load(userId, orderCode);
    };
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    UserOrderConnector.prototype.getHistory = /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    };
    /**
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    UserOrderConnector.prototype.getConsignmentTracking = /**
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    function (orderCode, consignmentCode) {
        return this.adapter.getConsignmentTracking(orderCode, consignmentCode);
    };
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} cancelRequestInput
     * @return {?}
     */
    UserOrderConnector.prototype.cancel = /**
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} cancelRequestInput
     * @return {?}
     */
    function (userId, orderCode, cancelRequestInput) {
        return this.adapter.cancel(userId, orderCode, cancelRequestInput);
    };
    /**
     * @param {?} userId
     * @param {?} returnRequestInput
     * @return {?}
     */
    UserOrderConnector.prototype.return = /**
     * @param {?} userId
     * @param {?} returnRequestInput
     * @return {?}
     */
    function (userId, returnRequestInput) {
        return this.adapter.createReturnRequest(userId, returnRequestInput);
    };
    /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @return {?}
     */
    UserOrderConnector.prototype.getReturnRequestDetail = /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @return {?}
     */
    function (userId, returnRequestCode) {
        return this.adapter.loadReturnRequestDetail(userId, returnRequestCode);
    };
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    UserOrderConnector.prototype.getReturnRequestList = /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        return this.adapter.loadReturnRequestList(userId, pageSize, currentPage, sort);
    };
    /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    UserOrderConnector.prototype.cancelReturnRequest = /**
     * @param {?} userId
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    function (userId, returnRequestCode, returnRequestModification) {
        return this.adapter.cancelReturnRequest(userId, returnRequestCode, returnRequestModification);
    };
    UserOrderConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserOrderConnector.ctorParameters = function () { return [
        { type: UserOrderAdapter }
    ]; };
    /** @nocollapse */ UserOrderConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserOrderConnector_Factory() { return new UserOrderConnector(i0.ɵɵinject(i1.UserOrderAdapter)); }, token: UserOrderConnector, providedIn: "root" });
    return UserOrderConnector;
}());
export { UserOrderConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserOrderConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFeEQ7SUFJRSw0QkFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFNUMsZ0NBQUc7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsU0FBaUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7Ozs7SUFFTSx1Q0FBVTs7Ozs7OztJQUFqQixVQUNFLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTSxtREFBc0I7Ozs7O0lBQTdCLFVBQ0UsU0FBaUIsRUFDakIsZUFBdUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7O0lBRU0sbUNBQU07Ozs7OztJQUFiLFVBQ0UsTUFBYyxFQUNkLFNBQWlCLEVBQ2pCLGtCQUFxRDtRQUVyRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFTSxtQ0FBTTs7Ozs7SUFBYixVQUNFLE1BQWMsRUFDZCxrQkFBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVNLG1EQUFzQjs7Ozs7SUFBN0IsVUFDRSxNQUFjLEVBQ2QsaUJBQXlCO1FBRXpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7OztJQUVNLGlEQUFvQjs7Ozs7OztJQUEzQixVQUNFLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUN2QyxNQUFNLEVBQ04sUUFBUSxFQUNSLFdBQVcsRUFDWCxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTSxnREFBbUI7Ozs7OztJQUExQixVQUNFLE1BQWMsRUFDZCxpQkFBeUIsRUFDekIseUJBQW9EO1FBRXBELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDckMsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix5QkFBeUIsQ0FDMUIsQ0FBQztJQUNKLENBQUM7O2dCQXhFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLGdCQUFnQjs7OzZCQVp6QjtDQXVGQyxBQXpFRCxJQXlFQztTQXRFWSxrQkFBa0I7Ozs7OztJQUNqQixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHtcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4vdXNlci1vcmRlci5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJPcmRlckNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyT3JkZXJBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBnZXQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQsIG9yZGVyQ29kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEhpc3RvcnkodXNlcklkLCBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNvcnQpO1xuICB9XG5cbiAgcHVibGljIGdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXRDb25zaWdubWVudFRyYWNraW5nKG9yZGVyQ29kZSwgY29uc2lnbm1lbnRDb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY2FuY2VsUmVxdWVzdElucHV0OiBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2FuY2VsKHVzZXJJZCwgb3JkZXJDb2RlLCBjYW5jZWxSZXF1ZXN0SW5wdXQpO1xuICB9XG5cbiAgcHVibGljIHJldHVybihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0SW5wdXQ6IFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZVJldHVyblJlcXVlc3QodXNlcklkLCByZXR1cm5SZXF1ZXN0SW5wdXQpO1xuICB9XG5cbiAgcHVibGljIGdldFJldHVyblJlcXVlc3REZXRhaWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRSZXR1cm5SZXF1ZXN0RGV0YWlsKHVzZXJJZCwgcmV0dXJuUmVxdWVzdENvZGUpO1xuICB9XG5cbiAgcHVibGljIGdldFJldHVyblJlcXVlc3RMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJldHVyblJlcXVlc3RMaXN0KFxuICAgICAgdXNlcklkLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZSxcbiAgICAgIHNvcnRcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbFJldHVyblJlcXVlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNhbmNlbFJldHVyblJlcXVlc3QoXG4gICAgICB1c2VySWQsXG4gICAgICByZXR1cm5SZXF1ZXN0Q29kZSxcbiAgICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=