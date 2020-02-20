import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { USER_ADDRESSES } from '../user-state';
export var LOAD_USER_ADDRESSES = '[User] Load User Addresses';
export var LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
export var LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
export var ADD_USER_ADDRESS = '[User] Add User Address';
export var ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
export var ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
export var UPDATE_USER_ADDRESS = '[User] Update User Address';
export var UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
export var UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
export var DELETE_USER_ADDRESS = '[User] Delete User Address';
export var DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
export var DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
var LoadUserAddresses = /** @class */ (function (_super) {
    __extends(LoadUserAddresses, _super);
    function LoadUserAddresses(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES;
        return _this;
    }
    return LoadUserAddresses;
}(StateLoaderActions.LoaderLoadAction));
export { LoadUserAddresses };
var LoadUserAddressesFail = /** @class */ (function (_super) {
    __extends(LoadUserAddressesFail, _super);
    function LoadUserAddressesFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES_FAIL;
        return _this;
    }
    return LoadUserAddressesFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadUserAddressesFail };
var LoadUserAddressesSuccess = /** @class */ (function (_super) {
    __extends(LoadUserAddressesSuccess, _super);
    function LoadUserAddressesSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES_SUCCESS;
        return _this;
    }
    return LoadUserAddressesSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadUserAddressesSuccess };
// Adding address actions
var AddUserAddress = /** @class */ (function (_super) {
    __extends(AddUserAddress, _super);
    function AddUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS;
        return _this;
    }
    return AddUserAddress;
}(StateLoaderActions.LoaderLoadAction));
export { AddUserAddress };
var AddUserAddressFail = /** @class */ (function (_super) {
    __extends(AddUserAddressFail, _super);
    function AddUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS_FAIL;
        return _this;
    }
    return AddUserAddressFail;
}(StateLoaderActions.LoaderFailAction));
export { AddUserAddressFail };
var AddUserAddressSuccess = /** @class */ (function (_super) {
    __extends(AddUserAddressSuccess, _super);
    function AddUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return AddUserAddressSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { AddUserAddressSuccess };
// Updating address actions
var UpdateUserAddress = /** @class */ (function (_super) {
    __extends(UpdateUserAddress, _super);
    function UpdateUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS;
        return _this;
    }
    return UpdateUserAddress;
}(StateLoaderActions.LoaderLoadAction));
export { UpdateUserAddress };
var UpdateUserAddressFail = /** @class */ (function (_super) {
    __extends(UpdateUserAddressFail, _super);
    function UpdateUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS_FAIL;
        return _this;
    }
    return UpdateUserAddressFail;
}(StateLoaderActions.LoaderFailAction));
export { UpdateUserAddressFail };
var UpdateUserAddressSuccess = /** @class */ (function (_super) {
    __extends(UpdateUserAddressSuccess, _super);
    function UpdateUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return UpdateUserAddressSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { UpdateUserAddressSuccess };
// Deleting address actions
var DeleteUserAddress = /** @class */ (function (_super) {
    __extends(DeleteUserAddress, _super);
    function DeleteUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS;
        return _this;
    }
    return DeleteUserAddress;
}(StateLoaderActions.LoaderLoadAction));
export { DeleteUserAddress };
var DeleteUserAddressFail = /** @class */ (function (_super) {
    __extends(DeleteUserAddressFail, _super);
    function DeleteUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS_FAIL;
        return _this;
    }
    return DeleteUserAddressFail;
}(StateLoaderActions.LoaderFailAction));
export { DeleteUserAddressFail };
var DeleteUserAddressSuccess = /** @class */ (function (_super) {
    __extends(DeleteUserAddressSuccess, _super);
    function DeleteUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return DeleteUserAddressSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { DeleteUserAddressSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFDMUUsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQUcsb0NBQW9DLENBQUM7QUFFaEYsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsOEJBQThCLENBQUM7QUFDcEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFDMUUsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQUcsb0NBQW9DLENBQUM7QUFFaEYsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFDMUUsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQUcsb0NBQW9DLENBQUM7QUFFaEY7SUFBdUMscUNBQW1DO0lBRXhFLDJCQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3pFOztBQUVEO0lBQTJDLHlDQUFtQztJQUU1RSwrQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGNBQWMsRUFBRSxPQUFPLENBQUMsU0FDL0I7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLN0U7O0FBRUQ7SUFBOEMsNENBQXNDO0lBRWxGLGtDQUFtQixPQUFrQjtRQUFyQyxZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLGtCQUFrQixDQUFDLG1CQUFtQixHQUtuRjs7QUFFRCx5QkFBeUI7QUFDekI7SUFBb0Msa0NBQW1DO0lBRXJFLHdCQUFtQixPQUE2QztRQUFoRSxZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFzQztRQUR2RCxVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBR2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLdEU7O0FBRUQ7SUFBd0Msc0NBQW1DO0lBRXpFLDRCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxFQUFFLE9BQU8sQ0FBQyxTQUMvQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLGtCQUFrQixDQUFDLGdCQUFnQixHQUsxRTs7QUFFRDtJQUEyQyx5Q0FBc0M7SUFFL0UsK0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxjQUFjLENBQUMsU0FDdEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLaEY7O0FBRUQsMkJBQTJCO0FBQzNCO0lBQXVDLHFDQUFtQztJQUV4RSwyQkFDUyxPQUFnRTtRQUR6RSxZQUdFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUhRLGFBQU8sR0FBUCxPQUFPLENBQXlEO1FBRmhFLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFLcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXVDLGtCQUFrQixDQUFDLGdCQUFnQixHQU96RTs7QUFFRDtJQUEyQyx5Q0FBbUM7SUFFNUUsK0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxjQUFjLEVBQUUsT0FBTyxDQUFDLFNBQy9CO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBSzdFOztBQUVEO0lBQThDLDRDQUFzQztJQUVsRixrQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLGtCQUFrQixDQUFDLG1CQUFtQixHQUtuRjs7QUFFRCwyQkFBMkI7QUFDM0I7SUFBdUMscUNBQW1DO0lBRXhFLDJCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLG1CQUFtQixDQUFDOztJQUdwQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3pFOztBQUVEO0lBQTJDLHlDQUFtQztJQUU1RSwrQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGNBQWMsRUFBRSxPQUFPLENBQUMsU0FDL0I7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLN0U7O0FBRUQ7SUFBOEMsNENBQXNDO0lBRWxGLGtDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDJCQUEyQixDQUFDOztJQUc1QyxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS25GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgVVNFUl9BRERSRVNTRVMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9BRERSRVNTRVMgPSAnW1VzZXJdIExvYWQgVXNlciBBZGRyZXNzZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9BRERSRVNTRVNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIEFkZHJlc3NlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQUREUkVTU0VTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVXNlciBBZGRyZXNzZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBBRERfVVNFUl9BRERSRVNTID0gJ1tVc2VyXSBBZGQgVXNlciBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBBRERfVVNFUl9BRERSRVNTX0ZBSUwgPSAnW1VzZXJdIEFkZCBVc2VyIEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX1VTRVJfQUREUkVTU19TVUNDRVNTID0gJ1tVc2VyXSBBZGQgVXNlciBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfQUREUkVTUyA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfQUREUkVTU19GQUlMID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0FERFJFU1MgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0FERFJFU1NfRkFJTCA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckFkZHJlc3NlcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9BRERSRVNTRVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9BRERSRVNTRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJBZGRyZXNzZXNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0FERFJFU1NFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzc1tdKSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIEFkZGluZyBhZGRyZXNzIGFjdGlvbnNcbmV4cG9ydCBjbGFzcyBBZGRVc2VyQWRkcmVzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9VU0VSX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH0pIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9VU0VSX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkVXNlckFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1VTRVJfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIFVwZGF0aW5nIGFkZHJlc3MgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJBZGRyZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGFkZHJlc3NJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQWRkcmVzc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG4vLyBEZWxldGluZyBhZGRyZXNzIGFjdGlvbnNcbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyQWRkcmVzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlckFkZHJlc3Nlc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJBZGRyZXNzZXNcbiAgfCBMb2FkVXNlckFkZHJlc3Nlc0ZhaWxcbiAgfCBMb2FkVXNlckFkZHJlc3Nlc1N1Y2Nlc3NcbiAgfCBBZGRVc2VyQWRkcmVzc1xuICB8IEFkZFVzZXJBZGRyZXNzRmFpbFxuICB8IEFkZFVzZXJBZGRyZXNzU3VjY2Vzc1xuICB8IFVwZGF0ZVVzZXJBZGRyZXNzXG4gIHwgVXBkYXRlVXNlckFkZHJlc3NGYWlsXG4gIHwgVXBkYXRlVXNlckFkZHJlc3NTdWNjZXNzXG4gIHwgRGVsZXRlVXNlckFkZHJlc3NcbiAgfCBEZWxldGVVc2VyQWRkcmVzc0ZhaWxcbiAgfCBEZWxldGVVc2VyQWRkcmVzc1N1Y2Nlc3M7XG4iXX0=