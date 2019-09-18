/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { REGISTER_USER_PROCESS_ID, REMOVE_USER_PROCESS_ID, } from '../user-state';
/** @type {?} */
export var REGISTER_USER = '[User] Register User';
/** @type {?} */
export var REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
export var REGISTER_USER_SUCCESS = '[User] Register User Success';
/** @type {?} */
export var RESET_REGISTER_USER_PROCESS = '[User] Reset Register User Process';
/** @type {?} */
export var REGISTER_GUEST = '[User] Register Guest';
/** @type {?} */
export var REGISTER_GUEST_FAIL = '[User] Register Guest Fail';
/** @type {?} */
export var REGISTER_GUEST_SUCCESS = '[User] Register Guest Success';
/** @type {?} */
export var REMOVE_USER = '[User] Remove User';
/** @type {?} */
export var REMOVE_USER_FAIL = '[User] Remove User Fail';
/** @type {?} */
export var REMOVE_USER_SUCCESS = '[User] Remove User Success';
/** @type {?} */
export var REMOVE_USER_RESET = '[User] Reset Remove User Process State';
var RegisterUser = /** @class */ (function (_super) {
    tslib_1.__extends(RegisterUser, _super);
    function RegisterUser(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = REGISTER_USER;
        return _this;
    }
    return RegisterUser;
}(StateEntityLoaderActions.EntityLoadAction));
export { RegisterUser };
if (false) {
    /** @type {?} */
    RegisterUser.prototype.type;
    /** @type {?} */
    RegisterUser.prototype.payload;
}
var RegisterUserFail = /** @class */ (function (_super) {
    tslib_1.__extends(RegisterUserFail, _super);
    function RegisterUserFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = REGISTER_USER_FAIL;
        return _this;
    }
    return RegisterUserFail;
}(StateEntityLoaderActions.EntityFailAction));
export { RegisterUserFail };
if (false) {
    /** @type {?} */
    RegisterUserFail.prototype.type;
    /** @type {?} */
    RegisterUserFail.prototype.payload;
}
var RegisterUserSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(RegisterUserSuccess, _super);
    function RegisterUserSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID) || this;
        _this.type = REGISTER_USER_SUCCESS;
        return _this;
    }
    return RegisterUserSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { RegisterUserSuccess };
if (false) {
    /** @type {?} */
    RegisterUserSuccess.prototype.type;
}
var ResetRegisterUserProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetRegisterUserProcess, _super);
    function ResetRegisterUserProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID) || this;
        _this.type = RESET_REGISTER_USER_PROCESS;
        return _this;
    }
    return ResetRegisterUserProcess;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetRegisterUserProcess };
if (false) {
    /** @type {?} */
    ResetRegisterUserProcess.prototype.type;
}
var RegisterGuest = /** @class */ (function () {
    function RegisterGuest(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST;
    }
    return RegisterGuest;
}());
export { RegisterGuest };
if (false) {
    /** @type {?} */
    RegisterGuest.prototype.type;
    /** @type {?} */
    RegisterGuest.prototype.payload;
}
var RegisterGuestFail = /** @class */ (function () {
    function RegisterGuestFail(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST_FAIL;
    }
    return RegisterGuestFail;
}());
export { RegisterGuestFail };
if (false) {
    /** @type {?} */
    RegisterGuestFail.prototype.type;
    /** @type {?} */
    RegisterGuestFail.prototype.payload;
}
var RegisterGuestSuccess = /** @class */ (function () {
    function RegisterGuestSuccess() {
        this.type = REGISTER_GUEST_SUCCESS;
    }
    return RegisterGuestSuccess;
}());
export { RegisterGuestSuccess };
if (false) {
    /** @type {?} */
    RegisterGuestSuccess.prototype.type;
}
var RemoveUser = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveUser, _super);
    function RemoveUser(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = REMOVE_USER;
        return _this;
    }
    return RemoveUser;
}(StateEntityLoaderActions.EntityLoadAction));
export { RemoveUser };
if (false) {
    /** @type {?} */
    RemoveUser.prototype.type;
    /** @type {?} */
    RemoveUser.prototype.payload;
}
var RemoveUserFail = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveUserFail, _super);
    function RemoveUserFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_USER_FAIL;
        return _this;
    }
    return RemoveUserFail;
}(StateEntityLoaderActions.EntityFailAction));
export { RemoveUserFail };
if (false) {
    /** @type {?} */
    RemoveUserFail.prototype.type;
    /** @type {?} */
    RemoveUserFail.prototype.payload;
}
var RemoveUserSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveUserSuccess, _super);
    function RemoveUserSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
        _this.type = REMOVE_USER_SUCCESS;
        return _this;
    }
    return RemoveUserSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { RemoveUserSuccess };
if (false) {
    /** @type {?} */
    RemoveUserSuccess.prototype.type;
}
var RemoveUserReset = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveUserReset, _super);
    function RemoveUserReset() {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
        _this.type = REMOVE_USER_RESET;
        return _this;
    }
    return RemoveUserReset;
}(StateEntityLoaderActions.EntityResetAction));
export { RemoveUserReset };
if (false) {
    /** @type {?} */
    RemoveUserReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEdBQ3ZCLE1BQU0sZUFBZSxDQUFDOztBQUV2QixNQUFNLEtBQU8sYUFBYSxHQUFHLHNCQUFzQjs7QUFDbkQsTUFBTSxLQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxLQUFPLHFCQUFxQixHQUFHLDhCQUE4Qjs7QUFDbkUsTUFBTSxLQUFPLDJCQUEyQixHQUFHLG9DQUFvQzs7QUFFL0UsTUFBTSxLQUFPLGNBQWMsR0FBRyx1QkFBdUI7O0FBQ3JELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sS0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBRXJFLE1BQU0sS0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsd0NBQXdDO0FBRXpFO0lBQWtDLHdDQUF5QztJQUV6RSxzQkFBbUIsT0FBbUI7UUFBdEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsU0FDakQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixVQUFJLEdBQUcsYUFBYSxDQUFDOztJQUc5QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0Msd0JBQXdCLENBQUMsZ0JB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bEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLHdCQUF3QixDQUFDLGlCQUFpQixHQUs5RTs7OztJQUpDLCtCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQge1xuICBSRUdJU1RFUl9VU0VSX1BST0NFU1NfSUQsXG4gIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUiA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlcic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUyA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9SRUdJU1RFUl9VU0VSX1BST0NFU1MgPSAnW1VzZXJdIFJlc2V0IFJlZ2lzdGVyIFVzZXIgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9HVUVTVCA9ICdbVXNlcl0gUmVnaXN0ZXIgR3Vlc3QnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0dVRVNUX0ZBSUwgPSAnW1VzZXJdIFJlZ2lzdGVyIEd1ZXN0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0dVRVNUX1NVQ0NFU1MgPSAnW1VzZXJdIFJlZ2lzdGVyIEd1ZXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSAnW1VzZXJdIFJlbW92ZSBVc2VyJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9SRVNFVCA9ICdbVXNlcl0gUmVzZXQgUmVtb3ZlIFVzZXIgUHJvY2VzcyBTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXIgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclNpZ25VcCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRUdJU1RFUl9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFJlZ2lzdGVyVXNlclByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfUkVHSVNURVJfVVNFUl9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyR3Vlc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfR1VFU1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGd1aWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJHdWVzdEZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfR1VFU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyR3Vlc3RTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX0dVRVNUX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJSZXNldCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9SRVNFVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uID1cbiAgfCBSZWdpc3RlclVzZXJcbiAgfCBSZWdpc3RlclVzZXJGYWlsXG4gIHwgUmVnaXN0ZXJVc2VyU3VjY2Vzc1xuICB8IFJlc2V0UmVnaXN0ZXJVc2VyUHJvY2Vzc1xuICB8IFJlZ2lzdGVyR3Vlc3RcbiAgfCBSZWdpc3Rlckd1ZXN0RmFpbFxuICB8IFJlZ2lzdGVyR3Vlc3RTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclxuICB8IFJlbW92ZVVzZXJGYWlsXG4gIHwgUmVtb3ZlVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyUmVzZXQ7XG4iXX0=