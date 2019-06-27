/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
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
export class RemoveUser extends StateEntityLoaderActions.EntityLoadAction {
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
export class RemoveUserFail extends StateEntityLoaderActions.EntityFailAction {
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
export class RemoveUserSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.type = REMOVE_USER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RemoveUserSuccess.prototype.type;
}
export class RemoveUserReset extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_USER_PROCESS_ID);
        this.type = REMOVE_USER_RESET;
    }
}
if (false) {
    /** @type {?} */
    RemoveUserReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV2RCxNQUFNLE9BQU8sYUFBYSxHQUFHLHNCQUFzQjs7QUFDbkQsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxPQUFPLHFCQUFxQixHQUFHLDhCQUE4Qjs7QUFFbkUsTUFBTSxPQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyx3Q0FBd0M7QUFFekUsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsYUFBYSxDQUFDO0lBQ1csQ0FBQztDQUMzQzs7O0lBRkMsNEJBQThCOztJQUNsQiwrQkFBMEI7O0FBR3hDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFM0IsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0QsQ0FBQztDQUNwQzs7O0lBRkMsZ0NBQW1DOztJQUN2QixtQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUI7UUFEUyxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDdkIsQ0FBQztDQUNqQjs7O0lBRkMsbUNBQXNDOztBQUl4QyxNQUFNLE9BQU8sVUFBVyxTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUV2RSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUQ5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHNUIsQ0FBQztDQUNGOzs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFzQjs7QUFLcEMsTUFBTSxPQUFPLGNBQWUsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFM0UsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHZDLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBR2pDLENBQUM7Q0FDRjs7O0lBSkMsOEJBQWlDOztJQUNyQixpQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx3QkFBd0IsQ0FBQyxtQkFBbUI7SUFFakY7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFGeEMsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQW9DOztBQU10QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSx3QkFBd0IsQ0FBQyxpQkFBaUI7SUFFN0U7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFGeEMsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFJFTU9WRV9VU0VSX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVIgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUiA9ICdbVXNlcl0gUmVtb3ZlIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlbW92ZSBVc2VyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1JFU0VUID0gJ1tVc2VyXSBSZXNldCBSZW1vdmUgVXNlciBQcm9jZXNzIFN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclNpZ25VcCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlckZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXIgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVVzZXJTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclJlc2V0IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gPVxuICB8IFJlZ2lzdGVyVXNlclxuICB8IFJlZ2lzdGVyVXNlckZhaWxcbiAgfCBSZWdpc3RlclVzZXJTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclxuICB8IFJlbW92ZVVzZXJGYWlsXG4gIHwgUmVtb3ZlVXNlclN1Y2Nlc3NcbiAgfCBSZW1vdmVVc2VyUmVzZXQ7XG4iXX0=