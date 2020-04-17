import { __extends } from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateUtils } from '../../../state/utils/index';
import { REGISTER_USER_PROCESS_ID, REMOVE_USER_PROCESS_ID, } from '../user-state';
export var REGISTER_USER = '[User] Register User';
export var REGISTER_USER_FAIL = '[User] Register User Fail';
export var REGISTER_USER_SUCCESS = '[User] Register User Success';
export var RESET_REGISTER_USER_PROCESS = '[User] Reset Register User Process';
export var REGISTER_GUEST = '[User] Register Guest';
export var REGISTER_GUEST_FAIL = '[User] Register Guest Fail';
export var REGISTER_GUEST_SUCCESS = '[User] Register Guest Success';
export var REMOVE_USER = '[User] Remove User';
export var REMOVE_USER_FAIL = '[User] Remove User Fail';
export var REMOVE_USER_SUCCESS = '[User] Remove User Success';
export var REMOVE_USER_RESET = '[User] Reset Remove User Process State';
var RegisterUser = /** @class */ (function (_super) {
    __extends(RegisterUser, _super);
    function RegisterUser(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = REGISTER_USER;
        return _this;
    }
    return RegisterUser;
}(StateUtils.EntityLoadAction));
export { RegisterUser };
var RegisterUserFail = /** @class */ (function (_super) {
    __extends(RegisterUserFail, _super);
    function RegisterUserFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = REGISTER_USER_FAIL;
        return _this;
    }
    return RegisterUserFail;
}(StateUtils.EntityFailAction));
export { RegisterUserFail };
var RegisterUserSuccess = /** @class */ (function (_super) {
    __extends(RegisterUserSuccess, _super);
    function RegisterUserSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID) || this;
        _this.type = REGISTER_USER_SUCCESS;
        return _this;
    }
    return RegisterUserSuccess;
}(StateUtils.EntitySuccessAction));
export { RegisterUserSuccess };
var ResetRegisterUserProcess = /** @class */ (function (_super) {
    __extends(ResetRegisterUserProcess, _super);
    function ResetRegisterUserProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, REGISTER_USER_PROCESS_ID) || this;
        _this.type = RESET_REGISTER_USER_PROCESS;
        return _this;
    }
    return ResetRegisterUserProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetRegisterUserProcess };
var RegisterGuest = /** @class */ (function () {
    function RegisterGuest(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST;
    }
    return RegisterGuest;
}());
export { RegisterGuest };
var RegisterGuestFail = /** @class */ (function () {
    function RegisterGuestFail(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST_FAIL;
    }
    return RegisterGuestFail;
}());
export { RegisterGuestFail };
var RegisterGuestSuccess = /** @class */ (function () {
    function RegisterGuestSuccess() {
        this.type = REGISTER_GUEST_SUCCESS;
    }
    return RegisterGuestSuccess;
}());
export { RegisterGuestSuccess };
var RemoveUser = /** @class */ (function (_super) {
    __extends(RemoveUser, _super);
    function RemoveUser(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = REMOVE_USER;
        return _this;
    }
    return RemoveUser;
}(StateUtils.EntityLoadAction));
export { RemoveUser };
var RemoveUserFail = /** @class */ (function (_super) {
    __extends(RemoveUserFail, _super);
    function RemoveUserFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_USER_FAIL;
        return _this;
    }
    return RemoveUserFail;
}(StateUtils.EntityFailAction));
export { RemoveUserFail };
var RemoveUserSuccess = /** @class */ (function (_super) {
    __extends(RemoveUserSuccess, _super);
    function RemoveUserSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
        _this.type = REMOVE_USER_SUCCESS;
        return _this;
    }
    return RemoveUserSuccess;
}(StateUtils.EntitySuccessAction));
export { RemoveUserSuccess };
var RemoveUserReset = /** @class */ (function (_super) {
    __extends(RemoveUserReset, _super);
    function RemoveUserReset() {
        var _this = _super.call(this, PROCESS_FEATURE, REMOVE_USER_PROCESS_ID) || this;
        _this.type = REMOVE_USER_RESET;
        return _this;
    }
    return RemoveUserReset;
}(StateUtils.EntityLoaderResetAction));
export { RemoveUserReset };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEdBQ3ZCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztBQUNwRCxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQztBQUM5RCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyw4QkFBOEIsQ0FBQztBQUNwRSxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxvQ0FBb0MsQ0FBQztBQUVoRixNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUM7QUFDdEQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsK0JBQStCLENBQUM7QUFFdEUsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDO0FBQzFELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLDRCQUE0QixDQUFDO0FBQ2hFLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLHdDQUF3QyxDQUFDO0FBRTFFO0lBQWtDLGdDQUEyQjtJQUUzRCxzQkFBbUIsT0FBbUI7UUFBdEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsU0FDakQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixVQUFJLEdBQUcsYUFBYSxDQUFDOztJQUc5QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0MsVUFBVSxDQUFDLGdCQUFnQixHQUs1RDs7QUFFRDtJQUFzQyxvQ0FBMkI7SUFFL0QsMEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFNBQzFEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQUduQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBc0MsVUFBVSxDQUFDLGdCQUFnQixHQUtoRTs7QUFFRDtJQUF5Qyx1Q0FBOEI7SUFFckU7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLFVBQVUsQ0FBQyxtQkFBbUIsR0FLdEU7O0FBRUQ7SUFBOEMsNENBQWtDO0lBRTlFO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsU0FDakQ7UUFIUSxVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBRzVDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4QyxVQUFVLENBQUMsdUJBQXVCLEdBSy9FOztBQUVEO0lBRUUsdUJBQW1CLE9BQTJDO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxjQUFjLENBQUM7SUFDa0MsQ0FBQztJQUNwRSxvQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBRUUsMkJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNGLENBQUM7SUFDckMsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUFBO1FBQ1csU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ3pDLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVEO0lBQWdDLDhCQUEyQjtJQUV6RCxvQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBRzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUFnQyxVQUFVLENBQUMsZ0JBQWdCLEdBSzFEOztBQUVEO0lBQW9DLGtDQUEyQjtJQUU3RCx3QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxPQUFPLENBQUMsU0FDeEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBR2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxVQUFVLENBQUMsZ0JBQWdCLEdBSzlEOztBQUVEO0lBQXVDLHFDQUE4QjtJQUVuRTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNCQUFzQixDQUFDLFNBQy9DO1FBSFEsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsVUFBVSxDQUFDLG1CQUFtQixHQUtwRTs7QUFFRDtJQUFxQyxtQ0FBa0M7SUFFckU7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUhRLFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFHbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLFVBQVUsQ0FBQyx1QkFBdUIsR0FLdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7XG4gIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCxcbiAgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1JFR0lTVEVSX1VTRVJfUFJPQ0VTUyA9ICdbVXNlcl0gUmVzZXQgUmVnaXN0ZXIgVXNlciBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0dVRVNUID0gJ1tVc2VyXSBSZWdpc3RlciBHdWVzdCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfR1VFU1RfRkFJTCA9ICdbVXNlcl0gUmVnaXN0ZXIgR3Vlc3QgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfR1VFU1RfU1VDQ0VTUyA9ICdbVXNlcl0gUmVnaXN0ZXIgR3Vlc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiA9ICdbVXNlcl0gUmVtb3ZlIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1JFU0VUID0gJ1tVc2VyXSBSZXNldCBSZW1vdmUgVXNlciBQcm9jZXNzIFN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlciBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclNpZ25VcCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0UmVnaXN0ZXJVc2VyUHJvY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfUkVHSVNURVJfVVNFUl9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyR3Vlc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfR1VFU1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGd1aWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJHdWVzdEZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfR1VFU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyR3Vlc3RTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX0dVRVNUX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlckZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJSZXNldCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiA9XG4gIHwgUmVnaXN0ZXJVc2VyXG4gIHwgUmVnaXN0ZXJVc2VyRmFpbFxuICB8IFJlZ2lzdGVyVXNlclN1Y2Nlc3NcbiAgfCBSZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NcbiAgfCBSZWdpc3Rlckd1ZXN0XG4gIHwgUmVnaXN0ZXJHdWVzdEZhaWxcbiAgfCBSZWdpc3Rlckd1ZXN0U3VjY2Vzc1xuICB8IFJlbW92ZVVzZXJcbiAgfCBSZW1vdmVVc2VyRmFpbFxuICB8IFJlbW92ZVVzZXJTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclJlc2V0O1xuIl19