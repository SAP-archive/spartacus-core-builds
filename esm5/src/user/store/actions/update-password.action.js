/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { UPDATE_PASSWORD_PROCESS_ID } from '../user-state';
/** @type {?} */
export var UPDATE_PASSWORD = '[User] Update Password';
/** @type {?} */
export var UPDATE_PASSWORD_FAIL = '[User] Update Password Fail';
/** @type {?} */
export var UPDATE_PASSWORD_SUCCESS = '[User] Update Password Success';
/** @type {?} */
export var UPDATE_PASSWORD_RESET = '[User] Reset Update Password Process State';
var UpdatePassword = /** @class */ (function (_super) {
    tslib_1.__extends(UpdatePassword, _super);
    function UpdatePassword(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UPDATE_PASSWORD;
        return _this;
    }
    return UpdatePassword;
}(StateEntityLoaderActions.EntityLoadAction));
export { UpdatePassword };
if (false) {
    /** @type {?} */
    UpdatePassword.prototype.type;
    /** @type {?} */
    UpdatePassword.prototype.payload;
}
var UpdatePasswordFail = /** @class */ (function (_super) {
    tslib_1.__extends(UpdatePasswordFail, _super);
    function UpdatePasswordFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_PASSWORD_FAIL;
        return _this;
    }
    return UpdatePasswordFail;
}(StateEntityLoaderActions.EntityFailAction));
export { UpdatePasswordFail };
if (false) {
    /** @type {?} */
    UpdatePasswordFail.prototype.type;
    /** @type {?} */
    UpdatePasswordFail.prototype.payload;
}
var UpdatePasswordSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UpdatePasswordSuccess, _super);
    function UpdatePasswordSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID) || this;
        _this.type = UPDATE_PASSWORD_SUCCESS;
        return _this;
    }
    return UpdatePasswordSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { UpdatePasswordSuccess };
if (false) {
    /** @type {?} */
    UpdatePasswordSuccess.prototype.type;
}
var UpdatePasswordReset = /** @class */ (function (_super) {
    tslib_1.__extends(UpdatePasswordReset, _super);
    function UpdatePasswordReset() {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID) || this;
        _this.type = UPDATE_PASSWORD_RESET;
        return _this;
    }
    return UpdatePasswordReset;
}(StateEntityLoaderActions.EntityResetAction));
export { UpdatePasswordReset };
if (false) {
    /** @type {?} */
    UpdatePasswordReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLXBhc3N3b3JkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNELE1BQU0sS0FBTyxlQUFlLEdBQUcsd0JBQXdCOztBQUN2RCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUN2RSxNQUFNLEtBQU8scUJBQXFCLEdBQ2hDLDRDQUE0QztBQUU5QztJQUFvQywwQ0FBeUM7SUFFM0Usd0JBQ1MsT0FBcUU7UUFEOUUsWUFHRSxrQkFBTSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsU0FDbkQ7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUE4RDtRQUZyRSxVQUFJLEdBQUcsZUFBZSxDQUFDOztJQUtoQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBb0Msd0JBQXdCLENBQUMsZ0JBQWdCLEdBTzVFOzs7O0lBTkMsOEJBQWdDOztJQUU5QixpQ0FBNEU7O0FBTWhGO0lBQXdDLDhDQUF5QztJQUUvRSw0QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSxPQUFPLENBQUMsU0FDNUQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3Qyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLaEY7Ozs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUFtQjs7QUFLakM7SUFBMkMsaURBQTRDO0lBRXJGO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsU0FDbkQ7UUFIUSxVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FLdEY7Ozs7SUFKQyxxQ0FBd0M7O0FBTTFDO0lBQXlDLCtDQUEwQztJQUVqRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDBCQUEwQixDQUFDLFNBQ25EO1FBSFEsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsd0JBQXdCLENBQUMsaUJBQWlCLEdBS2xGOzs7O0lBSkMsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkQgPSAnW1VzZXJdIFVwZGF0ZSBQYXNzd29yZCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBQYXNzd29yZCBGYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkRfU1VDQ0VTUyA9ICdbVXNlcl0gVXBkYXRlIFBhc3N3b3JkIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRF9SRVNFVCA9XG4gICdbVXNlcl0gUmVzZXQgVXBkYXRlIFBhc3N3b3JkIFByb2Nlc3MgU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfUEFTU1dPUkQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBvbGRQYXNzd29yZDogc3RyaW5nOyBuZXdQYXNzd29yZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9QQVNTV09SRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9QQVNTV09SRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRSZXNldCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfUEFTU1dPUkRfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXBkYXRlUGFzc3dvcmRBY3Rpb24gPVxuICB8IFVwZGF0ZVBhc3N3b3JkXG4gIHwgVXBkYXRlUGFzc3dvcmRGYWlsXG4gIHwgVXBkYXRlUGFzc3dvcmRTdWNjZXNzXG4gIHwgVXBkYXRlUGFzc3dvcmRSZXNldDtcbiJdfQ==