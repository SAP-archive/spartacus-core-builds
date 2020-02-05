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
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} consignmentCode
     * @return {?}
     */
    getConsignmentTracking(userId, orderCode, consignmentCode) {
        return this.adapter.getConsignmentTracking(userId, orderCode, consignmentCode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUU1QyxHQUFHLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7O0lBRU0sVUFBVSxDQUNmLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRU0sc0JBQXNCLENBQzNCLE1BQWMsRUFDZCxTQUFpQixFQUNqQixlQUF1QjtRQUV2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQ3hDLE1BQU0sRUFDTixTQUFTLEVBQ1QsZUFBZSxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FDWCxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsa0JBQXFEO1FBRXJELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FDWCxNQUFjLEVBQ2Qsa0JBQStDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFTSxzQkFBc0IsQ0FDM0IsTUFBYyxFQUNkLGlCQUF5QjtRQUV6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7Ozs7SUFFTSxvQkFBb0IsQ0FDekIsTUFBYyxFQUNkLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLElBQWE7UUFFYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQ3ZDLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxFQUNYLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLG1CQUFtQixDQUN4QixNQUFjLEVBQ2QsaUJBQXlCLEVBQ3pCLHlCQUFvRDtRQUVwRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQ3JDLE1BQU0sRUFDTixpQkFBaUIsRUFDakIseUJBQXlCLENBQzFCLENBQUM7SUFDSixDQUFDOzs7WUE3RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsZ0JBQWdCOzs7Ozs7OztJQU1YLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQge1xuICBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi91c2VyLW9yZGVyLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck9yZGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJPcmRlckFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGdldCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHVzZXJJZCwgb3JkZXJDb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkSGlzdG9yeSh1c2VySWQsIHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc29ydCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjb25zaWdubWVudENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgICB1c2VySWQsXG4gICAgICBvcmRlckNvZGUsXG4gICAgICBjb25zaWdubWVudENvZGVcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jYW5jZWwodXNlcklkLCBvcmRlckNvZGUsIGNhbmNlbFJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgcmV0dXJuKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlUmV0dXJuUmVxdWVzdCh1c2VySWQsIHJldHVyblJlcXVlc3RJbnB1dCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJldHVyblJlcXVlc3REZXRhaWwodXNlcklkLCByZXR1cm5SZXF1ZXN0Q29kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmV0dXJuUmVxdWVzdExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgICB1c2VySWQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgc29ydFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJldHVyblJlcXVlc3RDb2RlLFxuICAgICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==