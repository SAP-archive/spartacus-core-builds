/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserInterestsAdapter } from './user-interests.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-interests.adapter";
export class UserInterestsConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @param {?=} productCode
     * @param {?=} notificationType
     * @return {?}
     */
    getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
        return this.adapter.getInterests(userId, pageSize, currentPage, sort, productCode, notificationType);
    }
    /**
     * @param {?} userId
     * @param {?} item
     * @return {?}
     */
    removeInterest(userId, item) {
        return this.adapter.removeInterest(userId, item);
    }
    /**
     * @param {?} userId
     * @param {?} productCode
     * @param {?} notificationType
     * @return {?}
     */
    addInterest(userId, productCode, notificationType) {
        return this.adapter.addInterest(userId, productCode, notificationType);
    }
}
UserInterestsConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserInterestsConnector.ctorParameters = () => [
    { type: UserInterestsAdapter }
];
/** @nocollapse */ UserInterestsConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserInterestsConnector_Factory() { return new UserInterestsConnector(i0.ɵɵinject(i1.UserInterestsAdapter)); }, token: UserInterestsConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserInterestsConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFXaEUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUFzQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUFHLENBQUM7Ozs7Ozs7Ozs7SUFDdkQsWUFBWSxDQUNWLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhLEVBQ2IsV0FBb0IsRUFDcEIsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQzlCLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxFQUNYLElBQUksRUFDSixXQUFXLEVBQ1gsZ0JBQWdCLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQ1osTUFBYyxFQUNkLElBQWtDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7SUFFRCxXQUFXLENBQ1QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLGdCQUFrQztRQUVsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUFwQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsb0JBQW9COzs7Ozs7OztJQVlmLHlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCxcbiAgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgTm90aWZpY2F0aW9uVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VySW50ZXJlc3RzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJJbnRlcmVzdHNBZGFwdGVyKSB7fVxuICBnZXRJbnRlcmVzdHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZT86IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlPzogTm90aWZpY2F0aW9uVHlwZVxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0SW50ZXJlc3RzKFxuICAgICAgdXNlcklkLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZSxcbiAgICAgIHNvcnQsXG4gICAgICBwcm9kdWN0Q29kZSxcbiAgICAgIG5vdGlmaWNhdGlvblR5cGVcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlSW50ZXJlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvblxuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZW1vdmVJbnRlcmVzdCh1c2VySWQsIGl0ZW0pO1xuICB9XG5cbiAgYWRkSW50ZXJlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5hZGRJbnRlcmVzdCh1c2VySWQsIHByb2R1Y3RDb2RlLCBub3RpZmljYXRpb25UeXBlKTtcbiAgfVxufVxuIl19