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
     * @param {?=} userId
     * @return {?}
     */
    UserOrderConnector.prototype.getConsignmentTracking = /**
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @param {?=} userId
     * @return {?}
     */
    function (orderCode, consignmentCode, userId) {
        return this.adapter.getConsignmentTracking(orderCode, consignmentCode, userId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFeEQ7SUFJRSw0QkFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFNUMsZ0NBQUc7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsU0FBaUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7Ozs7SUFFTSx1Q0FBVTs7Ozs7OztJQUFqQixVQUNFLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRU0sbURBQXNCOzs7Ozs7SUFBN0IsVUFDRSxTQUFpQixFQUNqQixlQUF1QixFQUN2QixNQUFlO1FBRWYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUN4QyxTQUFTLEVBQ1QsZUFBZSxFQUNmLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLG1DQUFNOzs7Ozs7SUFBYixVQUNFLE1BQWMsRUFDZCxTQUFpQixFQUNqQixrQkFBcUQ7UUFFckQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRU0sbUNBQU07Ozs7O0lBQWIsVUFDRSxNQUFjLEVBQ2Qsa0JBQStDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFTSxtREFBc0I7Ozs7O0lBQTdCLFVBQ0UsTUFBYyxFQUNkLGlCQUF5QjtRQUV6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7Ozs7SUFFTSxpREFBb0I7Ozs7Ozs7SUFBM0IsVUFDRSxNQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYTtRQUViLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FDdkMsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU0sZ0RBQW1COzs7Ozs7SUFBMUIsVUFDRSxNQUFjLEVBQ2QsaUJBQXlCLEVBQ3pCLHlCQUFvRDtRQUVwRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQ3JDLE1BQU0sRUFDTixpQkFBaUIsRUFDakIseUJBQXlCLENBQzFCLENBQUM7SUFDSixDQUFDOztnQkE3RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxnQkFBZ0I7Ozs2QkFaekI7Q0E0RkMsQUE5RUQsSUE4RUM7U0EzRVksa0JBQWtCOzs7Ozs7SUFDakIscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuL3VzZXItb3JkZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT3JkZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlck9yZGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgZ2V0KHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICB9XG5cbiAgcHVibGljIGdldEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nLFxuICAgIHVzZXJJZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgICBvcmRlckNvZGUsXG4gICAgICBjb25zaWdubWVudENvZGUsXG4gICAgICB1c2VySWRcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jYW5jZWwodXNlcklkLCBvcmRlckNvZGUsIGNhbmNlbFJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgcmV0dXJuKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlUmV0dXJuUmVxdWVzdCh1c2VySWQsIHJldHVyblJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJldHVyblJlcXVlc3REZXRhaWwodXNlcklkLCByZXR1cm5SZXF1ZXN0Q29kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgICB1c2VySWQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgc29ydFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJldHVyblJlcXVlc3RDb2RlLFxuICAgICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==