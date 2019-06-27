/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { USER_ADDRESSES } from '../user-state';
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
export class LoadUserAddresses extends StateLoaderActions.LoaderLoadAction {
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
export class LoadUserAddressesFail extends StateLoaderActions.LoaderFailAction {
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
export class LoadUserAddressesSuccess extends StateLoaderActions.LoaderSuccessAction {
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
export class AddUserAddress extends StateLoaderActions.LoaderLoadAction {
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
export class AddUserAddressFail extends StateLoaderActions.LoaderFailAction {
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
export class AddUserAddressSuccess extends StateLoaderActions.LoaderSuccessAction {
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
export class UpdateUserAddress extends StateLoaderActions.LoaderLoadAction {
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
export class UpdateUserAddressFail extends StateLoaderActions.LoaderFailAction {
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
export class UpdateUserAddressSuccess extends StateLoaderActions.LoaderSuccessAction {
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
export class DeleteUserAddress extends StateLoaderActions.LoaderLoadAction {
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
export class DeleteUserAddressFail extends StateLoaderActions.LoaderFailAction {
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
export class DeleteUserAddressSuccess extends StateLoaderActions.LoaderSuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9DLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBRS9FLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBQ25FLE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBRXpFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBRS9FLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7QUFFL0UsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUV4RSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQURMLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQW9DOztJQUN4QixvQ0FBc0I7O0FBS3BDLE1BQU0sT0FB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LHFCQUFzQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUU1RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRWxGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREwsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFHNUMsQ0FBQztDQUNGOzs7SUFKQyx3Q0FBNEM7O0lBQ2hDLDJDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVTRVJfQUREUkVTU0VTIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQUREUkVTU0VTID0gJ1tVc2VyXSBMb2FkIFVzZXIgQWRkcmVzc2VzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQUREUkVTU0VTX0ZBSUwgPSAnW1VzZXJdIExvYWQgVXNlciBBZGRyZXNzZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0FERFJFU1NFU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFVzZXIgQWRkcmVzc2VzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQUREX1VTRVJfQUREUkVTUyA9ICdbVXNlcl0gQWRkIFVzZXIgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgQUREX1VTRVJfQUREUkVTU19GQUlMID0gJ1tVc2VyXSBBZGQgVXNlciBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEFERF9VU0VSX0FERFJFU1NfU1VDQ0VTUyA9ICdbVXNlcl0gQWRkIFVzZXIgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0FERFJFU1MgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0FERFJFU1NfRkFJTCA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9BRERSRVNTID0gJ1tVc2VyXSBEZWxldGUgVXNlciBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9BRERSRVNTX0ZBSUwgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTID0gJ1tVc2VyXSBEZWxldGUgVXNlciBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJBZGRyZXNzZXMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckFkZHJlc3Nlc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfQUREUkVTU0VTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9BRERSRVNTRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3NbXSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG4vLyBBZGRpbmcgYWRkcmVzcyBhY3Rpb25zXG5leHBvcnQgY2xhc3MgQWRkVXNlckFkZHJlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRVc2VyQWRkcmVzc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9VU0VSX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG4vLyBVcGRhdGluZyBhZGRyZXNzIGFjdGlvbnNcbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQWRkcmVzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBhZGRyZXNzSWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckFkZHJlc3NGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUyk7XG4gIH1cbn1cblxuLy8gRGVsZXRpbmcgYWRkcmVzcyBhY3Rpb25zXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlckFkZHJlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9BRERSRVNTRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyQWRkcmVzc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfQUREUkVTU0VTKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJBZGRyZXNzZXNBY3Rpb24gPVxuICB8IExvYWRVc2VyQWRkcmVzc2VzXG4gIHwgTG9hZFVzZXJBZGRyZXNzZXNGYWlsXG4gIHwgTG9hZFVzZXJBZGRyZXNzZXNTdWNjZXNzXG4gIHwgQWRkVXNlckFkZHJlc3NcbiAgfCBBZGRVc2VyQWRkcmVzc0ZhaWxcbiAgfCBBZGRVc2VyQWRkcmVzc1N1Y2Nlc3NcbiAgfCBVcGRhdGVVc2VyQWRkcmVzc1xuICB8IFVwZGF0ZVVzZXJBZGRyZXNzRmFpbFxuICB8IFVwZGF0ZVVzZXJBZGRyZXNzU3VjY2Vzc1xuICB8IERlbGV0ZVVzZXJBZGRyZXNzXG4gIHwgRGVsZXRlVXNlckFkZHJlc3NGYWlsXG4gIHwgRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzO1xuIl19