/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
import { REMOVE_USER_PROCESS_ID } from '../user-state';
/** @type {?} */
export const REGISTER_USER = '[User] Register User';
/** @type {?} */
export const REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
export const REGISTER_USER_SUCCESS = '[User] Register User Success';
/** @type {?} */
export const REMOVE_USER = '[User] Remove User';
/** @type {?} */
export const REMOVE_USER_FAIL = '[User] Remove User Fail';
/** @type {?} */
export const REMOVE_USER_SUCCESS = '[User] Remove User Success';
/** @type {?} */
export const REMOVE_USER_RESET = '[User] Reset Remove User Process State';
export class RegisterUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
}
if (false) {
    /** @type {?} */
    RegisterUser.prototype.type;
    /** @type {?} */
    RegisterUser.prototype.payload;
}
export class RegisterUserFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RegisterUserFail.prototype.type;
    /** @type {?} */
    RegisterUserFail.prototype.payload;
}
export class RegisterUserSuccess {
    constructor() {
        this.type = REGISTER_USER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RegisterUserSuccess.prototype.type;
}
export class RemoveUser extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_USER;
    }
}
if (false) {
    /** @type {?} */
    RemoveUser.prototype.type;
    /** @type {?} */
    RemoveUser.prototype.payload;
}
export class RemoveUserFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID, payload);
        this.payload = payload;
        this.type = REMOVE_USER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RemoveUserFail.prototype.type;
    /** @type {?} */
    RemoveUserFail.prototype.payload;
}
export class RemoveUserSuccess extends EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.type = REMOVE_USER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RemoveUserSuccess.prototype.type;
}
export class RemoveUserReset extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.type = REMOVE_USER_RESET;
    }
}
if (false) {
    /** @type {?} */
    RemoveUserReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHdkQsTUFBTSxPQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBRW5FLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsd0NBQXdDO0FBRXpFLE1BQU0sT0FBTyxZQUFZOzs7O0lBRXZCLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNXLENBQUM7Q0FDM0M7OztJQUZDLDRCQUE4Qjs7SUFDbEIsK0JBQTBCOztBQUd4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTNCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNELENBQUM7Q0FDcEM7OztJQUZDLGdDQUFtQzs7SUFDdkIsbUNBQW1COztBQUdqQyxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCO1FBRFMsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBQ3ZCLENBQUM7Q0FDakI7OztJQUZDLG1DQUFzQzs7QUFJeEMsTUFBTSxPQUFPLFVBQVcsU0FBUSxnQkFBZ0I7Ozs7SUFFOUMsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFEOUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsV0FBVyxDQUFDO0lBRzVCLENBQUM7Q0FDRjs7O0lBSkMsMEJBQTRCOztJQUNoQiw2QkFBc0I7O0FBS3BDLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCOzs7O0lBRWxELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUR2QyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQUdqQyxDQUFDO0NBQ0Y7OztJQUpDLDhCQUFpQzs7SUFDckIsaUNBQW1COztBQUtqQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1CO0lBRXhEO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRnhDLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUdwQyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFvQzs7QUFNdEMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsaUJBQWlCO0lBRXBEO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRnhDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSAnW1VzZXJdIFJlbW92ZSBVc2VyJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9SRVNFVCA9ICdbVXNlcl0gUmVzZXQgUmVtb3ZlIFVzZXIgUHJvY2VzcyBTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJTaWduVXApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJSZXNldCBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gPVxuICB8IFJlZ2lzdGVyVXNlclxuICB8IFJlZ2lzdGVyVXNlckZhaWxcbiAgfCBSZWdpc3RlclVzZXJTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclxuICB8IFJlbW92ZVVzZXJGYWlsXG4gIHwgUmVtb3ZlVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyUmVzZXQ7XG4iXX0=