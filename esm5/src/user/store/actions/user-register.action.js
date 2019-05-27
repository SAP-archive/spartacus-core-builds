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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3ZELE1BQU0sS0FBTyxhQUFhLEdBQUcsc0JBQXNCOztBQUNuRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUVuRSxNQUFNLEtBQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxLQUFPLGdCQUFnQixHQUFHLHlCQUF5Qjs7QUFDekQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDRCQUE0Qjs7QUFDL0QsTUFBTSxLQUFPLGlCQUFpQixHQUFHLHdDQUF3QztBQUV6RTtJQUVFLHNCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDVyxDQUFDO0lBQzVDLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBOEI7O0lBQ2xCLCtCQUEwQjs7QUFHeEM7SUFFRSwwQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0QsQ0FBQztJQUNyQyx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsZ0NBQW1DOztJQUN2QixtQ0FBbUI7O0FBR2pDO0lBRUU7UUFEUyxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDdkIsQ0FBQztJQUNsQiwwQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsbUNBQXNDOztBQUl4QztJQUFnQyxzQ0FBZ0I7SUFFOUMsb0JBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsV0FBVyxDQUFDOztJQUc1QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0MsZ0JBQWdCLEdBSy9DOzs7O0lBSkMsMEJBQTRCOztJQUNoQiw2QkFBc0I7O0FBS3BDO0lBQW9DLDBDQUFnQjtJQUVsRCx3QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxPQUFPLENBQUMsU0FDeEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBR2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxnQkFBZ0IsR0FLbkQ7Ozs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakM7SUFBdUMsNkNBQW1CO0lBRXhEO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxtQkFBbUIsR0FLekQ7Ozs7SUFKQyxpQ0FBb0M7O0FBTXRDO0lBQXFDLDJDQUFpQjtJQUVwRDtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNCQUFzQixDQUFDLFNBQy9DO1FBSFEsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsaUJBQWlCLEdBS3JEOzs7O0lBSkMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFJFTU9WRV9VU0VSX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVIgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiA9ICdbVXNlcl0gUmVtb3ZlIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1JFU0VUID0gJ1tVc2VyXSBSZXNldCBSZW1vdmUgVXNlciBQcm9jZXNzIFN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclNpZ25VcCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlckZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXIgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlckZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclJlc2V0IGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiA9XG4gIHwgUmVnaXN0ZXJVc2VyXG4gIHwgUmVnaXN0ZXJVc2VyRmFpbFxuICB8IFJlZ2lzdGVyVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyXG4gIHwgUmVtb3ZlVXNlckZhaWxcbiAgfCBSZW1vdmVVc2VyU3VjY2Vzc1xuICB8IFJlbW92ZVVzZXJSZXNldDtcbiJdfQ==