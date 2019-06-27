/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { UPDATE_USER_DETAILS_PROCESS_ID } from '../user-state';
/** @type {?} */
export var LOAD_USER_DETAILS = '[User] Load User Details';
/** @type {?} */
export var LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
/** @type {?} */
export var LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
/** @type {?} */
export var UPDATE_USER_DETAILS = '[User] Update User Details';
/** @type {?} */
export var UPDATE_USER_DETAILS_FAIL = '[User] Update User Details Fail';
/** @type {?} */
export var UPDATE_USER_DETAILS_SUCCESS = '[User] Update User Details Success';
/** @type {?} */
export var RESET_USER_DETAILS = '[User] Reset User Details';
var LoadUserDetails = /** @class */ (function () {
    function LoadUserDetails(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
    return LoadUserDetails;
}());
export { LoadUserDetails };
if (false) {
    /** @type {?} */
    LoadUserDetails.prototype.type;
    /** @type {?} */
    LoadUserDetails.prototype.payload;
}
var LoadUserDetailsFail = /** @class */ (function () {
    function LoadUserDetailsFail(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
    return LoadUserDetailsFail;
}());
export { LoadUserDetailsFail };
if (false) {
    /** @type {?} */
    LoadUserDetailsFail.prototype.type;
    /** @type {?} */
    LoadUserDetailsFail.prototype.payload;
}
var LoadUserDetailsSuccess = /** @class */ (function () {
    function LoadUserDetailsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
    return LoadUserDetailsSuccess;
}());
export { LoadUserDetailsSuccess };
if (false) {
    /** @type {?} */
    LoadUserDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadUserDetailsSuccess.prototype.payload;
}
var UpdateUserDetails = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateUserDetails, _super);
    function UpdateUserDetails(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_DETAILS;
        return _this;
    }
    return UpdateUserDetails;
}(StateEntityLoaderActions.EntityLoadAction));
export { UpdateUserDetails };
if (false) {
    /** @type {?} */
    UpdateUserDetails.prototype.type;
    /** @type {?} */
    UpdateUserDetails.prototype.payload;
}
var UpdateUserDetailsFail = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateUserDetailsFail, _super);
    function UpdateUserDetailsFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_DETAILS_FAIL;
        return _this;
    }
    return UpdateUserDetailsFail;
}(StateEntityLoaderActions.EntityFailAction));
export { UpdateUserDetailsFail };
if (false) {
    /** @type {?} */
    UpdateUserDetailsFail.prototype.type;
    /** @type {?} */
    UpdateUserDetailsFail.prototype.payload;
}
var UpdateUserDetailsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateUserDetailsSuccess, _super);
    function UpdateUserDetailsSuccess(userUpdates) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID) || this;
        _this.userUpdates = userUpdates;
        _this.type = UPDATE_USER_DETAILS_SUCCESS;
        return _this;
    }
    return UpdateUserDetailsSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { UpdateUserDetailsSuccess };
if (false) {
    /** @type {?} */
    UpdateUserDetailsSuccess.prototype.type;
    /** @type {?} */
    UpdateUserDetailsSuccess.prototype.userUpdates;
}
var ResetUpdateUserDetails = /** @class */ (function (_super) {
    tslib_1.__extends(ResetUpdateUserDetails, _super);
    function ResetUpdateUserDetails() {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID) || this;
        _this.type = RESET_USER_DETAILS;
        return _this;
    }
    return ResetUpdateUserDetails;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetUpdateUserDetails };
if (false) {
    /** @type {?} */
    ResetUpdateUserDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9ELE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sS0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBRTNFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sS0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBQy9FLE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7QUFFN0Q7SUFFRSx5QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBQ0csQ0FBQztJQUN4QyxzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsK0JBQWtDOztJQUN0QixrQ0FBc0I7O0FBR3BDO0lBRUUsNkJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUNMLENBQUM7SUFDckMsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG1DQUF1Qzs7SUFDM0Isc0NBQW1COztBQUdqQztJQUVFLGdDQUFtQixPQUFhO1FBQWIsWUFBTyxHQUFQLE9BQU8sQ0FBTTtRQUR2QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFDUCxDQUFDO0lBQ3RDLDZCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxzQ0FBMEM7O0lBQzlCLHlDQUFvQjs7QUFHbEM7SUFBdUMsNkNBQXlDO0lBRTlFLDJCQUFtQixPQUFnRDtRQUFuRSxZQUNFLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxTQUN2RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUF5QztRQUQxRCxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1Qyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLL0U7Ozs7SUFKQyxpQ0FBb0M7O0lBQ3hCLG9DQUF1RDs7QUFLckU7SUFBMkMsaURBQXlDO0lBRWxGLCtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxTQUNoRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLHdCQUF3QixDQUFDLGdCQUFnQixHQUtuRjs7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQztJQUE4QyxvREFBNEM7SUFFeEYsa0NBQW1CLFdBQWlCO1FBQXBDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixDQUFDLFNBQ3ZEO1FBRmtCLGlCQUFXLEdBQVgsV0FBVyxDQUFNO1FBRDNCLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLHdCQUF3QixDQUFDLG1CQUFtQixHQUt6Rjs7OztJQUpDLHdDQUE0Qzs7SUFDaEMsK0NBQXdCOztBQUt0QztJQUE0QyxrREFBMEM7SUFFcEY7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxTQUN2RDtRQUhRLFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFHbkMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLHdCQUF3QixDQUFDLGlCQUFpQixHQUtyRjs7OztJQUpDLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBEZXRhaWxzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1VTRVJfREVUQUlMUyA9ICdbVXNlcl0gUmVzZXQgVXNlciBEZXRhaWxzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRGV0YWlscyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJuYW1lOiBzdHJpbmc7IHVzZXJEZXRhaWxzOiBVc2VyIH0pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlclVwZGF0ZXM6IFVzZXIpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0VXBkYXRlVXNlckRldGFpbHMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyRGV0YWlsc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJEZXRhaWxzXG4gIHwgTG9hZFVzZXJEZXRhaWxzRmFpbFxuICB8IExvYWRVc2VyRGV0YWlsc1N1Y2Nlc3NcbiAgfCBVcGRhdGVVc2VyRGV0YWlsc1xuICB8IFVwZGF0ZVVzZXJEZXRhaWxzRmFpbFxuICB8IFVwZGF0ZVVzZXJEZXRhaWxzU3VjY2Vzc1xuICB8IFJlc2V0VXBkYXRlVXNlckRldGFpbHM7XG4iXX0=