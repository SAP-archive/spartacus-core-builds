/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/index';
import { REMOVE_USER_PROCESS_ID } from '../user-state';
/** @type {?} */
export var REGISTER_USER = '[User] Register User';
/** @type {?} */
export var REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
export var REGISTER_USER_SUCCESS = '[User] Register User Success';
/** @type {?} */
export var REMOVE_USER = '[User] Remove User';
/** @type {?} */
export var REMOVE_USER_FAIL = '[User] Remove User Fail';
/** @type {?} */
export var REMOVE_USER_SUCCESS = '[User] Remove User Success';
/** @type {?} */
export var REMOVE_USER_RESET = '[User] Reset Remove User Process State';
var RegisterUser = /** @class */ (function () {
    function RegisterUser(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
    return RegisterUser;
}());
export { RegisterUser };
if (false) {
    /** @type {?} */
    RegisterUser.prototype.type;
    /** @type {?} */
    RegisterUser.prototype.payload;
}
var RegisterUserFail = /** @class */ (function () {
    function RegisterUserFail(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
    return RegisterUserFail;
}());
export { RegisterUserFail };
if (false) {
    /** @type {?} */
    RegisterUserFail.prototype.type;
    /** @type {?} */
    RegisterUserFail.prototype.payload;
}
var RegisterUserSuccess = /** @class */ (function () {
    function RegisterUserSuccess() {
        this.type = REGISTER_USER_SUCCESS;
    }
    return RegisterUserSuccess;
}());
export { RegisterUserSuccess };
if (false) {
    /** @type {?} */
    RegisterUserSuccess.prototype.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkQsTUFBTSxLQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBRW5FLE1BQU0sS0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsd0NBQXdDO0FBRXpFO0lBRUUsc0JBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNXLENBQUM7SUFDNUMsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDRCQUE4Qjs7SUFDbEIsK0JBQTBCOztBQUd4QztJQUVFLDBCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDRCxDQUFDO0lBQ3JDLHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxnQ0FBbUM7O0lBQ3ZCLG1DQUFtQjs7QUFHakM7SUFFRTtRQURTLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUN2QixDQUFDO0lBQ2xCLDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxtQ0FBc0M7O0FBSXhDO0lBQWdDLHNDQUF5QztJQUV2RSxvQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBRzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUFnQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLeEU7Ozs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFzQjs7QUFLcEM7SUFBb0MsMENBQXlDO0lBRTNFLHdCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxTQUN4RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLHdCQUF3QixDQUFDLGdCQUFnQixHQUs1RTs7OztJQUpDLDhCQUFpQzs7SUFDckIsaUNBQW1COztBQUtqQztJQUF1Qyw2Q0FBNEM7SUFFakY7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUhRLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLHdCQUF3QixDQUFDLG1CQUFtQixHQUtsRjs7OztJQUpDLGlDQUFvQzs7QUFNdEM7SUFBcUMsMkNBQTBDO0lBRTdFO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyx3QkFBd0IsQ0FBQyxpQkFBaUIsR0FLOUU7Ozs7SUFKQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUiA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlcic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUyA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSID0gJ1tVc2VyXSBSZW1vdmUgVXNlcic7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVtb3ZlIFVzZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfU1VDQ0VTUyA9ICdbVXNlcl0gUmVtb3ZlIFVzZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfUkVTRVQgPSAnW1VzZXJdIFJlc2V0IFJlbW92ZSBVc2VyIFByb2Nlc3MgU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyU2lnblVwKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXJTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlciBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlckZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyUmVzZXQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiA9XG4gIHwgUmVnaXN0ZXJVc2VyXG4gIHwgUmVnaXN0ZXJVc2VyRmFpbFxuICB8IFJlZ2lzdGVyVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyXG4gIHwgUmVtb3ZlVXNlckZhaWxcbiAgfCBSZW1vdmVVc2VyU3VjY2Vzc1xuICB8IFJlbW92ZVVzZXJSZXNldDtcbiJdfQ==