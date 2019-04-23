/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
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
}(EntityResetAction));
export { RemoveUserReset };
if (false) {
    /** @type {?} */
    RemoveUserReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXZELE1BQU0sS0FBTyxhQUFhLEdBQUcsc0JBQXNCOztBQUNuRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUVuRSxNQUFNLEtBQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxLQUFPLGdCQUFnQixHQUFHLHlCQUF5Qjs7QUFDekQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDRCQUE0Qjs7QUFDL0QsTUFBTSxLQUFPLGlCQUFpQixHQUFHLHdDQUF3QztBQUV6RTtJQUVFLHNCQUFtQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUR2QyxTQUFJLEdBQUcsYUFBYSxDQUFDO0lBQ3FCLENBQUM7SUFDdEQsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDRCQUE4Qjs7SUFDbEIsK0JBQW9DOztBQUdsRDtJQUVFLDBCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDRCxDQUFDO0lBQ3JDLHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxnQ0FBbUM7O0lBQ3ZCLG1DQUFtQjs7QUFHakM7SUFFRTtRQURTLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUN2QixDQUFDO0lBQ2xCLDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxtQ0FBc0M7O0FBSXhDO0lBQWdDLHNDQUFnQjtJQUU5QyxvQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBRzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUFnQyxnQkFBZ0IsR0FLL0M7Ozs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFzQjs7QUFLcEM7SUFBb0MsMENBQWdCO0lBRWxELHdCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxTQUN4RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGdCQUFnQixHQUtuRDs7OztJQUpDLDhCQUFpQzs7SUFDckIsaUNBQW1COztBQUtqQztJQUF1Qyw2Q0FBbUI7SUFFeEQ7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUhRLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLG1CQUFtQixHQUt6RDs7OztJQUpDLGlDQUFvQzs7QUFNdEM7SUFBcUMsMkNBQWlCO0lBRXBEO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxpQkFBaUIsR0FLckQ7Ozs7SUFKQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFJFTU9WRV9VU0VSX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVIgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiA9ICdbVXNlcl0gUmVtb3ZlIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1JFU0VUID0gJ1tVc2VyXSBSZXNldCBSZW1vdmUgVXNlciBQcm9jZXNzIFN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclJlZ2lzdGVyRm9ybURhdGEpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJSZXNldCBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gPVxuICB8IFJlZ2lzdGVyVXNlclxuICB8IFJlZ2lzdGVyVXNlckZhaWxcbiAgfCBSZWdpc3RlclVzZXJTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclxuICB8IFJlbW92ZVVzZXJGYWlsXG4gIHwgUmVtb3ZlVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyUmVzZXQ7XG4iXX0=