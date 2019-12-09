/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserInterestsAdapter } from './user-interests.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-interests.adapter";
var UserInterestsConnector = /** @class */ (function () {
    function UserInterestsConnector(adapter) {
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
    UserInterestsConnector.prototype.getInterests = /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @param {?=} productCode
     * @param {?=} notificationType
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort, productCode, notificationType) {
        return this.adapter.getInterests(userId, pageSize, currentPage, sort, productCode, notificationType);
    };
    /**
     * @param {?} userId
     * @param {?} item
     * @return {?}
     */
    UserInterestsConnector.prototype.removeInterest = /**
     * @param {?} userId
     * @param {?} item
     * @return {?}
     */
    function (userId, item) {
        return this.adapter.removeInterest(userId, item);
    };
    /**
     * @param {?} userId
     * @param {?} productCode
     * @param {?} notificationType
     * @return {?}
     */
    UserInterestsConnector.prototype.addInterest = /**
     * @param {?} userId
     * @param {?} productCode
     * @param {?} notificationType
     * @return {?}
     */
    function (userId, productCode, notificationType) {
        return this.adapter.addInterest(userId, productCode, notificationType);
    };
    UserInterestsConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserInterestsConnector.ctorParameters = function () { return [
        { type: UserInterestsAdapter }
    ]; };
    /** @nocollapse */ UserInterestsConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserInterestsConnector_Factory() { return new UserInterestsConnector(i0.ɵɵinject(i1.UserInterestsAdapter)); }, token: UserInterestsConnector, providedIn: "root" });
    return UserInterestsConnector;
}());
export { UserInterestsConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserInterestsConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFRaEU7SUFJRSxnQ0FBc0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7Ozs7O0lBQ3ZELDZDQUFZOzs7Ozs7Ozs7SUFBWixVQUNFLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhLEVBQ2IsV0FBb0IsRUFDcEIsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQzlCLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxFQUNYLElBQUksRUFDSixXQUFXLEVBQ1gsZ0JBQWdCLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCwrQ0FBYzs7Ozs7SUFBZCxVQUNFLE1BQWMsRUFDZCxJQUFrQztRQUVsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7O0lBRUQsNENBQVc7Ozs7OztJQUFYLFVBQ0UsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLGdCQUFrQztRQUVsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFwQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxvQkFBb0I7OztpQ0FEN0I7Q0E4Q0MsQUFyQ0QsSUFxQ0M7U0FsQ1ksc0JBQXNCOzs7Ozs7SUFDckIseUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuL3VzZXItaW50ZXJlc3RzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBOb3RpZmljYXRpb25UeXBlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJJbnRlcmVzdHNDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlckludGVyZXN0c0FkYXB0ZXIpIHt9XG4gIGdldEludGVyZXN0cyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlPzogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU/OiBOb3RpZmljYXRpb25UeXBlXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXRJbnRlcmVzdHMoXG4gICAgICB1c2VySWQsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgc29ydCxcbiAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgbm90aWZpY2F0aW9uVHlwZVxuICAgICk7XG4gIH1cblxuICByZW1vdmVJbnRlcmVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBpdGVtOiBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlbW92ZUludGVyZXN0KHVzZXJJZCwgaXRlbSk7XG4gIH1cblxuICBhZGRJbnRlcmVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGVcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmFkZEludGVyZXN0KHVzZXJJZCwgcHJvZHVjdENvZGUsIG5vdGlmaWNhdGlvblR5cGUpO1xuICB9XG59XG4iXX0=