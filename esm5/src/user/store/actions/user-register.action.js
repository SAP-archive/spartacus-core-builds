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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEdBQ3ZCLE1BQU0sZUFBZSxDQUFDOztBQUV2QixNQUFNLEtBQU8sYUFBYSxHQUFHLHNCQUFzQjs7QUFDbkQsTUFBTSxLQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxLQUFPLHFCQUFxQixHQUFHLDhCQUE4Qjs7QUFDbkUsTUFBTSxLQUFPLDJCQUEyQixHQUFHLG9DQUFvQzs7QUFFL0UsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyx3Q0FBd0M7QUFFekU7SUFBa0Msd0NBQXlDO0lBRXpFLHNCQUFtQixPQUFtQjtRQUF0QyxZQUNFLGtCQUFNLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxTQUNqRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFVBQUksR0FBRyxhQUFhLENBQUM7O0lBRzlCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLMUU7Ozs7SUFKQyw0QkFBOEI7O0lBQ2xCLCtCQUEwQjs7QUFLeEM7SUFBc0MsNENBQXlDO0lBRTdFLDBCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxTQUMxRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFHbkMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLHdCQUF3QixDQUFDLGdCQUFnQixHQUs5RTs7OztJQUpDLGdDQUFtQzs7SUFDdkIsbUNBQW1COztBQUtqQztJQUF5QywrQ0FBNEM7SUFFbkY7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLHdCQUF3QixDQUFDLG1CQUFtQixHQUtwRjs7OztJQUpDLG1DQUFzQzs7QUFNeEM7SUFBOEMsb0RBQTBDO0lBRXRGO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsd0JBQXdCLENBQUMsU0FDakQ7UUFIUSxVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBRzVDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4Qyx3QkFBd0IsQ0FBQyxpQkFBaUIsR0FLdkY7Ozs7SUFKQyx3Q0FBNEM7O0FBTTlDO0lBQWdDLHNDQUF5QztJQUV2RSxvQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBRzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUFnQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLeEU7Ozs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFzQjs7QUFLcEM7SUFBb0MsMENBQXlDO0lBRTNFLHdCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxTQUN4RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLHdCQUF3QixDQUFDLGdCQUFnQixHQUs1RTs7OztJQUpDLDhCQUFpQzs7SUFDckIsaUNBQW1COztBQUtqQztJQUF1Qyw2Q0FBNEM7SUFFakY7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUhRLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLHdCQUF3QixDQUFDLG1CQUFtQixHQUtsRjs7OztJQUpDLGlDQUFvQzs7QUFNdEM7SUFBcUMsMkNBQTBDO0lBRTdFO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyx3QkFBd0IsQ0FBQyxpQkFBaUIsR0FLOUU7Ozs7SUFKQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lELFxuICBSRU1PVkVfVVNFUl9QUk9DRVNTX0lELFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVIgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfUkVHSVNURVJfVVNFUl9QUk9DRVNTID0gJ1tVc2VyXSBSZXNldCBSZWdpc3RlciBVc2VyIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSAnW1VzZXJdIFJlbW92ZSBVc2VyJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9SRVNFVCA9ICdbVXNlcl0gUmVzZXQgUmVtb3ZlIFVzZXIgUHJvY2VzcyBTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXIgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclNpZ25VcCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRUdJU1RFUl9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFJlZ2lzdGVyVXNlclByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfUkVHSVNURVJfVVNFUl9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXIgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclJlc2V0IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gPVxuICB8IFJlZ2lzdGVyVXNlclxuICB8IFJlZ2lzdGVyVXNlckZhaWxcbiAgfCBSZWdpc3RlclVzZXJTdWNjZXNzXG4gIHwgUmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzXG4gIHwgUmVtb3ZlVXNlclxuICB8IFJlbW92ZVVzZXJGYWlsXG4gIHwgUmVtb3ZlVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyUmVzZXQ7XG4iXX0=