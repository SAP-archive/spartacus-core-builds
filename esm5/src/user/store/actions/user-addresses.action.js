/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { USER_ADDRESSES } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export var LOAD_USER_ADDRESSES = '[User] Load User Addresses';
/** @type {?} */
export var LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
/** @type {?} */
export var LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
/** @type {?} */
export var ADD_USER_ADDRESS = '[User] Add User Address';
/** @type {?} */
export var ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
/** @type {?} */
export var ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
/** @type {?} */
export var UPDATE_USER_ADDRESS = '[User] Update User Address';
/** @type {?} */
export var UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
/** @type {?} */
export var UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
/** @type {?} */
export var DELETE_USER_ADDRESS = '[User] Delete User Address';
/** @type {?} */
export var DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
/** @type {?} */
export var DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
var LoadUserAddresses = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserAddresses, _super);
    function LoadUserAddresses(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES;
        return _this;
    }
    return LoadUserAddresses;
}(LoaderLoadAction));
export { LoadUserAddresses };
if (false) {
    /** @type {?} */
    LoadUserAddresses.prototype.type;
    /** @type {?} */
    LoadUserAddresses.prototype.payload;
}
var LoadUserAddressesFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserAddressesFail, _super);
    function LoadUserAddressesFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES_FAIL;
        return _this;
    }
    return LoadUserAddressesFail;
}(LoaderFailAction));
export { LoadUserAddressesFail };
if (false) {
    /** @type {?} */
    LoadUserAddressesFail.prototype.type;
    /** @type {?} */
    LoadUserAddressesFail.prototype.payload;
}
var LoadUserAddressesSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserAddressesSuccess, _super);
    function LoadUserAddressesSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES_SUCCESS;
        return _this;
    }
    return LoadUserAddressesSuccess;
}(LoaderSuccessAction));
export { LoadUserAddressesSuccess };
if (false) {
    /** @type {?} */
    LoadUserAddressesSuccess.prototype.type;
    /** @type {?} */
    LoadUserAddressesSuccess.prototype.payload;
}
// Adding address actions
var 
// Adding address actions
AddUserAddress = /** @class */ (function (_super) {
    tslib_1.__extends(AddUserAddress, _super);
    function AddUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS;
        return _this;
    }
    return AddUserAddress;
}(LoaderLoadAction));
// Adding address actions
export { AddUserAddress };
if (false) {
    /** @type {?} */
    AddUserAddress.prototype.type;
    /** @type {?} */
    AddUserAddress.prototype.payload;
}
var AddUserAddressFail = /** @class */ (function (_super) {
    tslib_1.__extends(AddUserAddressFail, _super);
    function AddUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS_FAIL;
        return _this;
    }
    return AddUserAddressFail;
}(LoaderFailAction));
export { AddUserAddressFail };
if (false) {
    /** @type {?} */
    AddUserAddressFail.prototype.type;
    /** @type {?} */
    AddUserAddressFail.prototype.payload;
}
var AddUserAddressSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(AddUserAddressSuccess, _super);
    function AddUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return AddUserAddressSuccess;
}(LoaderSuccessAction));
export { AddUserAddressSuccess };
if (false) {
    /** @type {?} */
    AddUserAddressSuccess.prototype.type;
    /** @type {?} */
    AddUserAddressSuccess.prototype.payload;
}
// Updating address actions
var 
// Updating address actions
UpdateUserAddress = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateUserAddress, _super);
    function UpdateUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS;
        return _this;
    }
    return UpdateUserAddress;
}(LoaderLoadAction));
// Updating address actions
export { UpdateUserAddress };
if (false) {
    /** @type {?} */
    UpdateUserAddress.prototype.type;
    /** @type {?} */
    UpdateUserAddress.prototype.payload;
}
var UpdateUserAddressFail = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateUserAddressFail, _super);
    function UpdateUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS_FAIL;
        return _this;
    }
    return UpdateUserAddressFail;
}(LoaderFailAction));
export { UpdateUserAddressFail };
if (false) {
    /** @type {?} */
    UpdateUserAddressFail.prototype.type;
    /** @type {?} */
    UpdateUserAddressFail.prototype.payload;
}
var UpdateUserAddressSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateUserAddressSuccess, _super);
    function UpdateUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return UpdateUserAddressSuccess;
}(LoaderSuccessAction));
export { UpdateUserAddressSuccess };
if (false) {
    /** @type {?} */
    UpdateUserAddressSuccess.prototype.type;
    /** @type {?} */
    UpdateUserAddressSuccess.prototype.payload;
}
// Deleting address actions
var 
// Deleting address actions
DeleteUserAddress = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserAddress, _super);
    function DeleteUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS;
        return _this;
    }
    return DeleteUserAddress;
}(LoaderLoadAction));
// Deleting address actions
export { DeleteUserAddress };
if (false) {
    /** @type {?} */
    DeleteUserAddress.prototype.type;
    /** @type {?} */
    DeleteUserAddress.prototype.payload;
}
var DeleteUserAddressFail = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserAddressFail, _super);
    function DeleteUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS_FAIL;
        return _this;
    }
    return DeleteUserAddressFail;
}(LoaderFailAction));
export { DeleteUserAddressFail };
if (false) {
    /** @type {?} */
    DeleteUserAddressFail.prototype.type;
    /** @type {?} */
    DeleteUserAddressFail.prototype.payload;
}
var DeleteUserAddressSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserAddressSuccess, _super);
    function DeleteUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return DeleteUserAddressSuccess;
}(LoaderSuccessAction));
export { DeleteUserAddressSuccess };
if (false) {
    /** @type {?} */
    DeleteUserAddressSuccess.prototype.type;
    /** @type {?} */
    DeleteUserAddressSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUduRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUUvRSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUNuRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUUvRSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DO0FBRS9FO0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLGdCQUFnQixHQUt0RDs7OztJQUpDLGlDQUFvQzs7SUFDeEIsb0NBQXNCOztBQUtwQztJQUEyQyxpREFBZ0I7SUFFekQsK0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxjQUFjLEVBQUUsT0FBTyxDQUFDLFNBQy9CO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsZ0JBQWdCLEdBSzFEOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBbUI7O0FBS2pDO0lBQThDLG9EQUFtQjtJQUUvRCxrQ0FBbUIsT0FBa0I7UUFBckMsWUFDRSxrQkFBTSxjQUFjLENBQUMsU0FDdEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBRzVDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4QyxtQkFBbUIsR0FLaEU7Ozs7SUFKQyx3Q0FBNEM7O0lBQ2hDLDJDQUF5Qjs7O0FBTXZDOzs7SUFBb0MsMENBQWdCO0lBRWxELHdCQUFtQixPQUE2QztRQUFoRSxZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFzQztRQUR2RCxVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBR2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxnQkFBZ0IsR0FLbkQ7Ozs7O0lBSkMsOEJBQWlDOztJQUNyQixpQ0FBb0Q7O0FBS2xFO0lBQXdDLDhDQUFnQjtJQUV0RCw0QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGNBQWMsRUFBRSxPQUFPLENBQUMsU0FDL0I7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxnQkFBZ0IsR0FLdkQ7Ozs7SUFKQyxrQ0FBc0M7O0lBQzFCLHFDQUFtQjs7QUFLakM7SUFBMkMsaURBQW1CO0lBRTVELCtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsbUJBQW1CLEdBSzdEOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBbUI7OztBQU1qQzs7O0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFDUyxPQUFnRTtRQUR6RSxZQUdFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUhRLGFBQU8sR0FBUCxPQUFPLENBQXlEO1FBRmhFLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFLcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXVDLGdCQUFnQixHQU90RDs7Ozs7SUFOQyxpQ0FBb0M7O0lBRWxDLG9DQUF1RTs7QUFNM0U7SUFBMkMsaURBQWdCO0lBRXpELCtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxFQUFFLE9BQU8sQ0FBQyxTQUMvQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLGdCQUFnQixHQUsxRDs7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQztJQUE4QyxvREFBbUI7SUFFL0Qsa0NBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxjQUFjLENBQUMsU0FDdEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBRzVDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4QyxtQkFBbUIsR0FLaEU7Ozs7SUFKQyx3Q0FBNEM7O0lBQ2hDLDJDQUFtQjs7O0FBTWpDOzs7SUFBdUMsNkNBQWdCO0lBRXJELDJCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsZ0JBQWdCLEdBS3REOzs7OztJQUpDLGlDQUFvQzs7SUFDeEIsb0NBQW1COztBQUtqQztJQUEyQyxpREFBZ0I7SUFFekQsK0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxjQUFjLEVBQUUsT0FBTyxDQUFDLFNBQy9CO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsZ0JBQWdCLEdBSzFEOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBbUI7O0FBS2pDO0lBQThDLG9EQUFtQjtJQUUvRCxrQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLG1CQUFtQixHQUtoRTs7OztJQUpDLHdDQUE0Qzs7SUFDaEMsMkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVNFUl9BRERSRVNTRVMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9BRERSRVNTRVMgPSAnW1VzZXJdIExvYWQgVXNlciBBZGRyZXNzZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9BRERSRVNTRVNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIEFkZHJlc3NlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQUREUkVTU0VTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVXNlciBBZGRyZXNzZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBBRERfVVNFUl9BRERSRVNTID0gJ1tVc2VyXSBBZGQgVXNlciBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBBRERfVVNFUl9BRERSRVNTX0ZBSUwgPSAnW1VzZXJdIEFkZCBVc2VyIEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX1VTRVJfQUREUkVTU19TVUNDRVNTID0gJ1tVc2VyXSBBZGQgVXNlciBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfQUREUkVTUyA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfQUREUkVTU19GQUlMID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0FERFJFU1MgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0FERFJFU1NfRkFJTCA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckFkZHJlc3NlcyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0FERFJFU1NFUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJBZGRyZXNzZXNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0FERFJFU1NFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzc1tdKSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIEFkZGluZyBhZGRyZXNzIGFjdGlvbnNcbmV4cG9ydCBjbGFzcyBBZGRVc2VyQWRkcmVzcyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1VTRVJfQUREUkVTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkVXNlckFkZHJlc3NGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1VTRVJfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIFVwZGF0aW5nIGFkZHJlc3MgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJBZGRyZXNzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgYWRkcmVzc0lkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfVxuICApIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJBZGRyZXNzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG4vLyBEZWxldGluZyBhZGRyZXNzIGFjdGlvbnNcbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyQWRkcmVzcyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfQUREUkVTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlckFkZHJlc3NGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlckFkZHJlc3Nlc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJBZGRyZXNzZXNcbiAgfCBMb2FkVXNlckFkZHJlc3Nlc0ZhaWxcbiAgfCBMb2FkVXNlckFkZHJlc3Nlc1N1Y2Nlc3NcbiAgfCBBZGRVc2VyQWRkcmVzc1xuICB8IEFkZFVzZXJBZGRyZXNzRmFpbFxuICB8IEFkZFVzZXJBZGRyZXNzU3VjY2Vzc1xuICB8IFVwZGF0ZVVzZXJBZGRyZXNzXG4gIHwgVXBkYXRlVXNlckFkZHJlc3NGYWlsXG4gIHwgVXBkYXRlVXNlckFkZHJlc3NTdWNjZXNzXG4gIHwgRGVsZXRlVXNlckFkZHJlc3NcbiAgfCBEZWxldGVVc2VyQWRkcmVzc0ZhaWxcbiAgfCBEZWxldGVVc2VyQWRkcmVzc1N1Y2Nlc3M7XG4iXX0=