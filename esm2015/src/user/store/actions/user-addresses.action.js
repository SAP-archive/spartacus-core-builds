/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { USER_ADDRESSES } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export const LOAD_USER_ADDRESSES = '[User] Load User Addresses';
/** @type {?} */
export const LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
/** @type {?} */
export const LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
/** @type {?} */
export const ADD_USER_ADDRESS = '[User] Add User Address';
/** @type {?} */
export const ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
/** @type {?} */
export const ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
/** @type {?} */
export const UPDATE_USER_ADDRESS = '[User] Update User Address';
/** @type {?} */
export const UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
/** @type {?} */
export const UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
/** @type {?} */
export const DELETE_USER_ADDRESS = '[User] Delete User Address';
/** @type {?} */
export const DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
/** @type {?} */
export const DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
export class LoadUserAddresses extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES;
    }
}
if (false) {
    /** @type {?} */
    LoadUserAddresses.prototype.type;
    /** @type {?} */
    LoadUserAddresses.prototype.payload;
}
export class LoadUserAddressesFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadUserAddressesFail.prototype.type;
    /** @type {?} */
    LoadUserAddressesFail.prototype.payload;
}
export class LoadUserAddressesSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserAddressesSuccess.prototype.type;
    /** @type {?} */
    LoadUserAddressesSuccess.prototype.payload;
}
// Adding address actions
export class AddUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    AddUserAddress.prototype.type;
    /** @type {?} */
    AddUserAddress.prototype.payload;
}
export class AddUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddUserAddressFail.prototype.type;
    /** @type {?} */
    AddUserAddressFail.prototype.payload;
}
export class AddUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddUserAddressSuccess.prototype.type;
    /** @type {?} */
    AddUserAddressSuccess.prototype.payload;
}
// Updating address actions
export class UpdateUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    UpdateUserAddress.prototype.type;
    /** @type {?} */
    UpdateUserAddress.prototype.payload;
}
export class UpdateUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    UpdateUserAddressFail.prototype.type;
    /** @type {?} */
    UpdateUserAddressFail.prototype.payload;
}
export class UpdateUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    UpdateUserAddressSuccess.prototype.type;
    /** @type {?} */
    UpdateUserAddressSuccess.prototype.payload;
}
// Deleting address actions
export class DeleteUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    DeleteUserAddress.prototype.type;
    /** @type {?} */
    DeleteUserAddress.prototype.payload;
}
export class DeleteUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    DeleteUserAddressFail.prototype.type;
    /** @type {?} */
    DeleteUserAddressFail.prototype.payload;
}
export class DeleteUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    DeleteUserAddressSuccess.prototype.type;
    /** @type {?} */
    DeleteUserAddressSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBRS9FLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBQ25FLE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBRXpFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBRS9FLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7QUFFL0UsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjs7OztJQUVyRCxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQURMLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQW9DOztJQUN4QixvQ0FBc0I7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QVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsbUJBQW1COzs7O0lBRS9ELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREwsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFHNUMsQ0FBQztDQUNGOzs7SUFKQyx3Q0FBNEM7O0lBQ2hDLDJDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVTRVJfQUREUkVTU0VTIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0FERFJFU1NFUyA9ICdbVXNlcl0gTG9hZCBVc2VyIEFkZHJlc3Nlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0FERFJFU1NFU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgQWRkcmVzc2VzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9BRERSRVNTRVNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIEFkZHJlc3NlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEFERF9VU0VSX0FERFJFU1MgPSAnW1VzZXJdIEFkZCBVc2VyIEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9VU0VSX0FERFJFU1NfRkFJTCA9ICdbVXNlcl0gQWRkIFVzZXIgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfVVNFUl9BRERSRVNTX1NVQ0NFU1MgPSAnW1VzZXJdIEFkZCBVc2VyIEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9BRERSRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9BRERSRVNTX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfQUREUkVTUyA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfQUREUkVTU19GQUlMID0gJ1tVc2VyXSBEZWxldGUgVXNlciBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyA9ICdbVXNlcl0gRGVsZXRlIFVzZXIgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckFkZHJlc3Nlc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9BRERSRVNTRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJBZGRyZXNzZXNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzW10pIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gQWRkaW5nIGFkZHJlc3MgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRVc2VyQWRkcmVzc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9VU0VSX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkVXNlckFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gVXBkYXRpbmcgYWRkcmVzcyBhY3Rpb25zXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckFkZHJlc3MgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBhZGRyZXNzSWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckFkZHJlc3NGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbi8vIERlbGV0aW5nIGFkZHJlc3MgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyQWRkcmVzc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyQWRkcmVzc2VzQWN0aW9uID1cbiAgfCBMb2FkVXNlckFkZHJlc3Nlc1xuICB8IExvYWRVc2VyQWRkcmVzc2VzRmFpbFxuICB8IExvYWRVc2VyQWRkcmVzc2VzU3VjY2Vzc1xuICB8IEFkZFVzZXJBZGRyZXNzXG4gIHwgQWRkVXNlckFkZHJlc3NGYWlsXG4gIHwgQWRkVXNlckFkZHJlc3NTdWNjZXNzXG4gIHwgVXBkYXRlVXNlckFkZHJlc3NcbiAgfCBVcGRhdGVVc2VyQWRkcmVzc0ZhaWxcbiAgfCBVcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3NcbiAgfCBEZWxldGVVc2VyQWRkcmVzc1xuICB8IERlbGV0ZVVzZXJBZGRyZXNzRmFpbFxuICB8IERlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcztcbiJdfQ==