/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBRW5FLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsNEJBQTRCOztBQUMvRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsd0NBQXdDO0FBRXpFLE1BQU0sT0FBTyxZQUFZOzs7O0lBRXZCLFlBQW1CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBRHZDLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDcUIsQ0FBQztDQUNyRDs7O0lBRkMsNEJBQThCOztJQUNsQiwrQkFBb0M7O0FBR2xELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFM0IsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0QsQ0FBQztDQUNwQzs7O0lBRkMsZ0NBQW1DOztJQUN2QixtQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUI7UUFEUyxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDdkIsQ0FBQztDQUNqQjs7O0lBRkMsbUNBQXNDOztBQUl4QyxNQUFNLE9BQU8sVUFBVyxTQUFRLGdCQUFnQjs7OztJQUU5QyxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUQ5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHNUIsQ0FBQztDQUNGOzs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFzQjs7QUFLcEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7Ozs7SUFFbEQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHZDLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBR2pDLENBQUM7Q0FDRjs7O0lBSkMsOEJBQWlDOztJQUNyQixpQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxtQkFBbUI7SUFFeEQ7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFGeEMsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQW9DOztBQU10QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxpQkFBaUI7SUFFcEQ7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFGeEMsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSAnW1VzZXJdIFJlbW92ZSBVc2VyJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZW1vdmUgVXNlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9SRVNFVCA9ICdbVXNlcl0gUmVzZXQgUmVtb3ZlIFVzZXIgUHJvY2VzcyBTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJSZWdpc3RlckZvcm1EYXRhKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXJTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlciBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyUmVzZXQgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9SRVNFVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uID1cbiAgfCBSZWdpc3RlclVzZXJcbiAgfCBSZWdpc3RlclVzZXJGYWlsXG4gIHwgUmVnaXN0ZXJVc2VyU3VjY2Vzc1xuICB8IFJlbW92ZVVzZXJcbiAgfCBSZW1vdmVVc2VyRmFpbFxuICB8IFJlbW92ZVVzZXJTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclJlc2V0O1xuIl19