/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
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
}(EntityResetAction));
export { ResetUpdateUserDetails };
if (false) {
    /** @type {?} */
    ResetUpdateUserDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUvRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUMzRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUUzRSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUMvRSxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCO0FBRTdEO0lBRUUseUJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUNHLENBQUM7SUFDeEMsc0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLCtCQUFrQzs7SUFDdEIsa0NBQXNCOztBQUdwQztJQUVFLDZCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDTCxDQUFDO0lBQ3JDLDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFHakM7SUFFRSxnQ0FBbUIsT0FBYTtRQUFiLFlBQU8sR0FBUCxPQUFPLENBQU07UUFEdkIsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ1AsQ0FBQztJQUN0Qyw2QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsc0NBQTBDOztJQUM5Qix5Q0FBb0I7O0FBR2xDO0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFBbUIsT0FBZ0Q7UUFBbkUsWUFDRSxrQkFBTSxlQUFlLEVBQUUsOEJBQThCLENBQUMsU0FDdkQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsZ0JBQWdCLEdBS3REOzs7O0lBSkMsaUNBQW9DOztJQUN4QixvQ0FBdUQ7O0FBS3JFO0lBQTJDLGlEQUFnQjtJQUV6RCwrQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsRUFBRSxPQUFPLENBQUMsU0FDaEU7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxnQkFBZ0IsR0FLMUQ7Ozs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUFtQjs7QUFLakM7SUFBOEMsb0RBQW1CO0lBRS9ELGtDQUFtQixXQUFpQjtRQUFwQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxTQUN2RDtRQUZrQixpQkFBVyxHQUFYLFdBQVcsQ0FBTTtRQUQzQixVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBRzVDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4QyxtQkFBbUIsR0FLaEU7Ozs7SUFKQyx3Q0FBNEM7O0lBQ2hDLCtDQUF3Qjs7QUFLdEM7SUFBNEMsa0RBQWlCO0lBRTNEO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsOEJBQThCLENBQUMsU0FDdkQ7UUFIUSxVQUFJLEdBQUcsa0JBQWtCLENBQUM7O0lBR25DLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxpQkFBaUIsR0FLNUQ7Ozs7SUFKQyxzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFMgPSAnW1VzZXJdIExvYWQgVXNlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfREVUQUlMU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFMgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX1NVQ0NFU1MgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBSZXNldCBVc2VyIERldGFpbHMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEZXRhaWxzIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VybmFtZTogc3RyaW5nOyB1c2VyRGV0YWlsczogVXNlciB9KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRGV0YWlsc0ZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyVXBkYXRlczogVXNlcikge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRVcGRhdGVVc2VyRGV0YWlscyBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1VTRVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlckRldGFpbHNBY3Rpb24gPVxuICB8IExvYWRVc2VyRGV0YWlsc1xuICB8IExvYWRVc2VyRGV0YWlsc0ZhaWxcbiAgfCBMb2FkVXNlckRldGFpbHNTdWNjZXNzXG4gIHwgVXBkYXRlVXNlckRldGFpbHNcbiAgfCBVcGRhdGVVc2VyRGV0YWlsc0ZhaWxcbiAgfCBVcGRhdGVVc2VyRGV0YWlsc1N1Y2Nlc3NcbiAgfCBSZXNldFVwZGF0ZVVzZXJEZXRhaWxzO1xuIl19