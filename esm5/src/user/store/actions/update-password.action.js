/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
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
}(EntityResetAction));
export { UpdatePasswordReset };
if (false) {
    /** @type {?} */
    UpdatePasswordReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLXBhc3N3b3JkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzRCxNQUFNLEtBQU8sZUFBZSxHQUFHLHdCQUF3Qjs7QUFDdkQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGdDQUFnQzs7QUFDdkUsTUFBTSxLQUFPLHFCQUFxQixHQUNoQyw0Q0FBNEM7QUFFOUM7SUFBb0MsMENBQWdCO0lBRWxELHdCQUNTLE9BQXFFO1FBRDlFLFlBR0Usa0JBQU0sZUFBZSxFQUFFLDBCQUEwQixDQUFDLFNBQ25EO1FBSFEsYUFBTyxHQUFQLE9BQU8sQ0FBOEQ7UUFGckUsVUFBSSxHQUFHLGVBQWUsQ0FBQzs7SUFLaEMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVBELENBQW9DLGdCQUFnQixHQU9uRDs7OztJQU5DLDhCQUFnQzs7SUFFOUIsaUNBQTRFOztBQU1oRjtJQUF3Qyw4Q0FBZ0I7SUFFdEQsNEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLFNBQzVEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLG9CQUFvQixDQUFDOztJQUdyQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsZ0JBQWdCLEdBS3ZEOzs7O0lBSkMsa0NBQXFDOztJQUN6QixxQ0FBbUI7O0FBS2pDO0lBQTJDLGlEQUFtQjtJQUU1RDtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDBCQUEwQixDQUFDLFNBQ25EO1FBSFEsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsbUJBQW1CLEdBSzdEOzs7O0lBSkMscUNBQXdDOztBQU0xQztJQUF5QywrQ0FBaUI7SUFFeEQ7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxTQUNuRDtRQUhRLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLGlCQUFpQixHQUt6RDs7OztJQUpDLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlSZXNldEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRCA9ICdbVXNlcl0gVXBkYXRlIFBhc3N3b3JkJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkRfRkFJTCA9ICdbVXNlcl0gVXBkYXRlIFBhc3N3b3JkIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRF9TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgUGFzc3dvcmQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX1JFU0VUID1cbiAgJ1tVc2VyXSBSZXNldCBVcGRhdGUgUGFzc3dvcmQgUHJvY2VzcyBTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1BBU1NXT1JEO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgb2xkUGFzc3dvcmQ6IHN0cmluZzsgbmV3UGFzc3dvcmQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9QQVNTV09SRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1BBU1NXT1JEX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZFJlc2V0IGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1BBU1NXT1JEX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVwZGF0ZVBhc3N3b3JkQWN0aW9uID1cbiAgfCBVcGRhdGVQYXNzd29yZFxuICB8IFVwZGF0ZVBhc3N3b3JkRmFpbFxuICB8IFVwZGF0ZVBhc3N3b3JkU3VjY2Vzc1xuICB8IFVwZGF0ZVBhc3N3b3JkUmVzZXQ7XG4iXX0=