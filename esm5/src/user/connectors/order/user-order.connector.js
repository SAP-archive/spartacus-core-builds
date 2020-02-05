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
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    UserOrderConnector.prototype.getConsignmentTracking = /**
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    function (userId, orderCode, consignmentCode) {
        return this.adapter.getConsignmentTracking(userId, orderCode, consignmentCode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFeEQ7SUFJRSw0QkFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFNUMsZ0NBQUc7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsU0FBaUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7Ozs7SUFFTSx1Q0FBVTs7Ozs7OztJQUFqQixVQUNFLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRU0sbURBQXNCOzs7Ozs7SUFBN0IsVUFDRSxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsZUFBdUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUN4QyxNQUFNLEVBQ04sU0FBUyxFQUNULGVBQWUsQ0FDaEIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTSxtQ0FBTTs7Ozs7O0lBQWIsVUFDRSxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsa0JBQXFEO1FBRXJELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVNLG1DQUFNOzs7OztJQUFiLFVBQ0UsTUFBYyxFQUNkLGtCQUErQztRQUUvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRU0sbURBQXNCOzs7OztJQUE3QixVQUNFLE1BQWMsRUFDZCxpQkFBeUI7UUFFekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7Ozs7O0lBRU0saURBQW9COzs7Ozs7O0lBQTNCLFVBQ0UsTUFBYyxFQUNkLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLElBQWE7UUFFYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQ3ZDLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxFQUNYLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLGdEQUFtQjs7Ozs7O0lBQTFCLFVBQ0UsTUFBYyxFQUNkLGlCQUF5QixFQUN6Qix5QkFBb0Q7UUFFcEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNyQyxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLHlCQUF5QixDQUMxQixDQUFDO0lBQ0osQ0FBQzs7Z0JBN0VGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsZ0JBQWdCOzs7NkJBWnpCO0NBNEZDLEFBOUVELElBOEVDO1NBM0VZLGtCQUFrQjs7Ozs7O0lBQ2pCLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQge1xuICBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi91c2VyLW9yZGVyLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJPcmRlckFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGdldCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHVzZXJJZCwgb3JkZXJDb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkSGlzdG9yeSh1c2VySWQsIHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc29ydCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjb25zaWdubWVudENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgICB1c2VySWQsXG4gICAgICBvcmRlckNvZGUsXG4gICAgICBjb25zaWdubWVudENvZGVcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jYW5jZWwodXNlcklkLCBvcmRlckNvZGUsIGNhbmNlbFJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgcmV0dXJuKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlUmV0dXJuUmVxdWVzdCh1c2VySWQsIHJldHVyblJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJldHVyblJlcXVlc3REZXRhaWwodXNlcklkLCByZXR1cm5SZXF1ZXN0Q29kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgICB1c2VySWQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgc29ydFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJldHVyblJlcXVlc3RDb2RlLFxuICAgICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==