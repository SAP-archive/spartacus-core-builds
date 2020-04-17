import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
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
}(StateUtils.LoaderLoadAction));
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
}(StateUtils.LoaderFailAction));
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
}(StateUtils.LoaderSuccessAction));
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
}(StateUtils.LoaderLoadAction));
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
}(StateUtils.LoaderFailAction));
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
}(StateUtils.LoaderSuccessAction));
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
}(StateUtils.LoaderLoadAction));
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
}(StateUtils.LoaderFailAction));
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
}(StateUtils.LoaderSuccessAction));
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
}(StateUtils.LoaderLoadAction));
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
}(StateUtils.LoaderFailAction));
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
}(StateUtils.LoaderSuccessAction));
export { DeleteUserAddressSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLDRCQUE0QixDQUFDO0FBQ2hFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBQzFFLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLG9DQUFvQyxDQUFDO0FBRWhGLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDO0FBQzFELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLDhCQUE4QixDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBRTFFLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLDRCQUE0QixDQUFDO0FBQ2hFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBQzFFLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLG9DQUFvQyxDQUFDO0FBRWhGLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLDRCQUE0QixDQUFDO0FBQ2hFLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGlDQUFpQyxDQUFDO0FBQzFFLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLG9DQUFvQyxDQUFDO0FBRWhGO0lBQXVDLHFDQUEyQjtJQUVoRSwyQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUks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bUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLakU7O0FBRUQ7SUFBMkMseUNBQTJCO0lBRXBFLCtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxFQUFFLE9BQU8sQ0FBQyxTQUMvQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLckU7O0FBRUQ7SUFBOEMsNENBQThCO0lBRTFFLGtDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDJCQUEyQixDQUFDOztJQUc1QyxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEMsVUFBVSxDQUFDLG1CQUFtQixHQUszRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVU0VSX0FERFJFU1NFUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0FERFJFU1NFUyA9ICdbVXNlcl0gTG9hZCBVc2VyIEFkZHJlc3Nlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0FERFJFU1NFU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgQWRkcmVzc2VzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9BRERSRVNTRVNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIEFkZHJlc3NlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEFERF9VU0VSX0FERFJFU1MgPSAnW1VzZXJdIEFkZCBVc2VyIEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9VU0VSX0FERFJFU1NfRkFJTCA9ICdbVXNlcl0gQWRkIFVzZXIgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfVVNFUl9BRERSRVNTX1NVQ0NFU1MgPSAnW1VzZXJdIEFkZCBVc2VyIEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9BRERSRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9BRERSRVNTX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfQUREUkVTUyA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfQUREUkVTU19GQUlMID0gJ1tVc2VyXSBEZWxldGUgVXNlciBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9BRERSRVNTRVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzW10pIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gQWRkaW5nIGFkZHJlc3MgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9VU0VSX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH0pIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gVXBkYXRpbmcgYWRkcmVzcyBhY3Rpb25zXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckFkZHJlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGFkZHJlc3NJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQWRkcmVzc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIERlbGV0aW5nIGFkZHJlc3MgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyQWRkcmVzc2VzQWN0aW9uID1cbiAgfCBMb2FkVXNlckFkZHJlc3Nlc1xuICB8IExvYWRVc2VyQWRkcmVzc2VzRmFpbFxuICB8IExvYWRVc2VyQWRkcmVzc2VzU3VjY2Vzc1xuICB8IEFkZFVzZXJBZGRyZXNzXG4gIHwgQWRkVXNlckFkZHJlc3NGYWlsXG4gIHwgQWRkVXNlckFkZHJlc3NTdWNjZXNzXG4gIHwgVXBkYXRlVXNlckFkZHJlc3NcbiAgfCBVcGRhdGVVc2VyQWRkcmVzc0ZhaWxcbiAgfCBVcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3NcbiAgfCBEZWxldGVVc2VyQWRkcmVzc1xuICB8IERlbGV0ZVVzZXJBZGRyZXNzRmFpbFxuICB8IERlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcztcbiJdfQ==