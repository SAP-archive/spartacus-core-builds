/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { UPDATE_EMAIL_PROCESS_ID } from '../user-state';
/** @type {?} */
export var UPDATE_EMAIL = '[User] Update Email';
/** @type {?} */
export var UPDATE_EMAIL_ERROR = '[User] Update Email Error';
/** @type {?} */
export var UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
/** @type {?} */
export var RESET_EMAIL = '[User] Reset Email';
var UpdateEmailAction = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEmailAction, _super);
    function UpdateEmailAction(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UPDATE_EMAIL;
        return _this;
    }
    return UpdateEmailAction;
}(StateEntityLoaderActions.EntityLoadAction));
export { UpdateEmailAction };
if (false) {
    /** @type {?} */
    UpdateEmailAction.prototype.type;
    /** @type {?} */
    UpdateEmailAction.prototype.payload;
}
var UpdateEmailSuccessAction = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEmailSuccessAction, _super);
    function UpdateEmailSuccessAction(newUid) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
        _this.newUid = newUid;
        _this.type = UPDATE_EMAIL_SUCCESS;
        return _this;
    }
    return UpdateEmailSuccessAction;
}(StateEntityLoaderActions.EntitySuccessAction));
export { UpdateEmailSuccessAction };
if (false) {
    /** @type {?} */
    UpdateEmailSuccessAction.prototype.type;
    /** @type {?} */
    UpdateEmailSuccessAction.prototype.newUid;
}
var UpdateEmailErrorAction = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEmailErrorAction, _super);
    function UpdateEmailErrorAction(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_EMAIL_ERROR;
        return _this;
    }
    return UpdateEmailErrorAction;
}(StateEntityLoaderActions.EntityFailAction));
export { UpdateEmailErrorAction };
if (false) {
    /** @type {?} */
    UpdateEmailErrorAction.prototype.type;
    /** @type {?} */
    UpdateEmailErrorAction.prototype.payload;
}
var ResetUpdateEmailAction = /** @class */ (function (_super) {
    tslib_1.__extends(ResetUpdateEmailAction, _super);
    function ResetUpdateEmailAction() {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
        _this.type = RESET_EMAIL;
        return _this;
    }
    return ResetUpdateEmailAction;
}(StateEntityLoaderActions.EntityResetAction));
export { ResetUpdateEmailAction };
if (false) {
    /** @type {?} */
    ResetUpdateEmailAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXhELE1BQU0sS0FBTyxZQUFZLEdBQUcscUJBQXFCOztBQUNqRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLEtBQU8sV0FBVyxHQUFHLG9CQUFvQjtBQUUvQztJQUF1Qyw2Q0FBeUM7SUFFOUUsMkJBQ1MsT0FJTjtRQUxILFlBT0Usa0JBQU0sZUFBZSxFQUFFLHVCQUF1QixDQUFDLFNBQ2hEO1FBUFEsYUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFVBQUksR0FBRyxZQUFZLENBQUM7O0lBUzdCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFYRCxDQUF1Qyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FXL0U7Ozs7SUFWQyxpQ0FBNkI7O0lBRTNCLG9DQUlDOztBQU1MO0lBQThDLG9EQUE0QztJQUV4RixrQ0FBbUIsTUFBYztRQUFqQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxTQUNoRDtRQUZrQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHhCLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLHdCQUF3QixDQUFDLG1CQUFtQixHQUt6Rjs7OztJQUpDLHdDQUFxQzs7SUFDekIsMENBQXFCOztBQUtuQztJQUE0QyxrREFBeUM7SUFFbkYsZ0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLFNBQ3pEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQUduQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS3BGOzs7O0lBSkMsc0NBQW1DOztJQUN2Qix5Q0FBbUI7O0FBS2pDO0lBQTRDLGtEQUEwQztJQUVwRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHVCQUF1QixDQUFDLFNBQ2hEO1FBSFEsVUFBSSxHQUFHLFdBQVcsQ0FBQzs7SUFHNUIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLHdCQUF3QixDQUFDLGlCQUFpQixHQUtyRjs7OztJQUpDLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMID0gJ1tVc2VyXSBVcGRhdGUgRW1haWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTUFJTF9FUlJPUiA9ICdbVXNlcl0gVXBkYXRlIEVtYWlsIEVycm9yJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUxfU1VDQ0VTUyA9ICdbVXNlcl0gVXBkYXRlIEVtYWlsIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0VNQUlMID0gJ1tVc2VyXSBSZXNldCBFbWFpbCc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbEFjdGlvbiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVpZDogc3RyaW5nO1xuICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAgIG5ld1VpZDogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvbiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmV3VWlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxFcnJvckFjdGlvbiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTF9FUlJPUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFVwZGF0ZUVtYWlsQWN0aW9uIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0VNQUlMO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbWFpbEFjdGlvbnMgPVxuICB8IFVwZGF0ZUVtYWlsQWN0aW9uXG4gIHwgVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uXG4gIHwgVXBkYXRlRW1haWxFcnJvckFjdGlvblxuICB8IFJlc2V0VXBkYXRlRW1haWxBY3Rpb247XG4iXX0=