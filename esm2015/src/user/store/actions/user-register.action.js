/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { REGISTER_USER_PROCESS_ID, REMOVE_USER_PROCESS_ID, } from '../user-state';
/** @type {?} */
export const REGISTER_USER = '[User] Register User';
/** @type {?} */
export const REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
export const REGISTER_USER_SUCCESS = '[User] Register User Success';
/** @type {?} */
export const RESET_REGISTER_USER_PROCESS = '[User] Reset Register User Process';
/** @type {?} */
export const REGISTER_GUEST = '[User] Register Guest';
/** @type {?} */
export const REGISTER_GUEST_FAIL = '[User] Register Guest Fail';
/** @type {?} */
export const REGISTER_GUEST_SUCCESS = '[User] Register Guest Success';
/** @type {?} */
export const REMOVE_USER = '[User] Remove User';
/** @type {?} */
export const REMOVE_USER_FAIL = '[User] Remove User Fail';
/** @type {?} */
export const REMOVE_USER_SUCCESS = '[User] Remove User Success';
/** @type {?} */
export const REMOVE_USER_RESET = '[User] Reset Remove User Process State';
export class RegisterUser extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
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
export class RegisterUserFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID, payload);
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
export class RegisterUserSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
        this.type = REGISTER_USER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RegisterUserSuccess.prototype.type;
}
export class ResetRegisterUserProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
        this.type = RESET_REGISTER_USER_PROCESS;
    }
}
if (false) {
    /** @type {?} */
    ResetRegisterUserProcess.prototype.type;
}
export class RegisterGuest {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST;
    }
}
if (false) {
    /** @type {?} */
    RegisterGuest.prototype.type;
    /** @type {?} */
    RegisterGuest.prototype.payload;
}
export class RegisterGuestFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_GUEST_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RegisterGuestFail.prototype.type;
    /** @type {?} */
    RegisterGuestFail.prototype.payload;
}
export class RegisterGuestSuccess {
    constructor() {
        this.type = REGISTER_GUEST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RegisterGuestSuccess.prototype.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsR0FDdkIsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BQU0sT0FBTyxhQUFhLEdBQUcsc0JBQXNCOztBQUNuRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLE9BQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUNuRSxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUUvRSxNQUFNLE9BQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDRCQUE0Qjs7QUFDL0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFFckUsTUFBTSxPQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyx3Q0FBd0M7QUFFekUsTUFBTSxPQUFPLFlBQWEsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFekUsWUFBbUIsT0FBbUI7UUFDcEMsS0FBSyxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRGhDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUc5QixDQUFDO0NBQ0Y7OztJQUpDLDRCQUE4Qjs7SUFDbEIsK0JBQTBCOztBQUt4QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7O0lBRTdFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUR6QyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLGdDQUFtQzs7SUFDdkIsbUNBQW1COztBQUtqQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQXdCLENBQUMsbUJBQW1CO0lBRW5GO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRjFDLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUFzQzs7QUFNeEMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHdCQUF3QixDQUFDLGlCQUFpQjtJQUV0RjtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFHNUMsQ0FBQztDQUNGOzs7SUFKQyx3Q0FBNEM7O0FBTTlDLE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW1CLE9BQTJDO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxjQUFjLENBQUM7SUFDa0MsQ0FBQztDQUNuRTs7O0lBRkMsNkJBQStCOztJQUNuQixnQ0FBa0Q7O0FBR2hFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0YsQ0FBQztDQUNwQzs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVyxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDekMsQ0FBQztDQUFBOzs7SUFEQyxvQ0FBdUM7O0FBR3pDLE1BQU0sT0FBTyxVQUFXLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7O0lBRXZFLFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRDlCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUc1QixDQUFDO0NBQ0Y7OztJQUpDLDBCQUE0Qjs7SUFDaEIsNkJBQXNCOztBQUtwQyxNQUFNLE9BQU8sY0FBZSxTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUUzRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEdkMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjtJQUVqRjtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUZ4QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGOzs7SUFKQyxpQ0FBb0M7O0FBTXRDLE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUF3QixDQUFDLGlCQUFpQjtJQUU3RTtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUZ4QyxTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFHbEMsQ0FBQztDQUNGOzs7SUFKQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lELFxuICBSRU1PVkVfVVNFUl9QUk9DRVNTX0lELFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVIgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXInO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX1NVQ0NFU1MgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfUkVHSVNURVJfVVNFUl9QUk9DRVNTID0gJ1tVc2VyXSBSZXNldCBSZWdpc3RlciBVc2VyIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfR1VFU1QgPSAnW1VzZXJdIFJlZ2lzdGVyIEd1ZXN0JztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9HVUVTVF9GQUlMID0gJ1tVc2VyXSBSZWdpc3RlciBHdWVzdCBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9HVUVTVF9TVUNDRVNTID0gJ1tVc2VyXSBSZWdpc3RlciBHdWVzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSID0gJ1tVc2VyXSBSZW1vdmUgVXNlcic7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfRkFJTCA9ICdbVXNlcl0gUmVtb3ZlIFVzZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfU1VDQ0VTUyA9ICdbVXNlcl0gUmVtb3ZlIFVzZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfUkVTRVQgPSAnW1VzZXJdIFJlc2V0IFJlbW92ZSBVc2VyIFByb2Nlc3MgU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJTaWduVXApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlckZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1JFR0lTVEVSX1VTRVJfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRUdJU1RFUl9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3Rlckd1ZXN0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX0dVRVNUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBndWlkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyR3Vlc3RGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX0dVRVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3Rlckd1ZXN0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9HVUVTVF9TVUNDRVNTO1xufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlciBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlckZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9VU0VSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVVc2VyUmVzZXQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1VTRVJfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiA9XG4gIHwgUmVnaXN0ZXJVc2VyXG4gIHwgUmVnaXN0ZXJVc2VyRmFpbFxuICB8IFJlZ2lzdGVyVXNlclN1Y2Nlc3NcbiAgfCBSZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NcbiAgfCBSZWdpc3Rlckd1ZXN0XG4gIHwgUmVnaXN0ZXJHdWVzdEZhaWxcbiAgfCBSZWdpc3Rlckd1ZXN0U3VjY2Vzc1xuICB8IFJlbW92ZVVzZXJcbiAgfCBSZW1vdmVVc2VyRmFpbFxuICB8IFJlbW92ZVVzZXJTdWNjZXNzXG4gIHwgUmVtb3ZlVXNlclJlc2V0O1xuIl19