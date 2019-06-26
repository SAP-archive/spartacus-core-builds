/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/index';
import { UPDATE_PASSWORD_PROCESS_ID } from '../user-state';
/** @type {?} */
export const UPDATE_PASSWORD = '[User] Update Password';
/** @type {?} */
export const UPDATE_PASSWORD_FAIL = '[User] Update Password Fail';
/** @type {?} */
export const UPDATE_PASSWORD_SUCCESS = '[User] Update Password Success';
/** @type {?} */
export const UPDATE_PASSWORD_RESET = '[User] Reset Update Password Process State';
export class UpdatePassword extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_PASSWORD;
    }
}
if (false) {
    /** @type {?} */
    UpdatePassword.prototype.type;
    /** @type {?} */
    UpdatePassword.prototype.payload;
}
export class UpdatePasswordFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_PASSWORD_FAIL;
    }
}
if (false) {
    /** @type {?} */
    UpdatePasswordFail.prototype.type;
    /** @type {?} */
    UpdatePasswordFail.prototype.payload;
}
export class UpdatePasswordSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.type = UPDATE_PASSWORD_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    UpdatePasswordSuccess.prototype.type;
}
export class UpdatePasswordReset extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
        this.type = UPDATE_PASSWORD_RESET;
    }
}
if (false) {
    /** @type {?} */
    UpdatePasswordReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLXBhc3N3b3JkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0QsTUFBTSxPQUFPLGVBQWUsR0FBRyx3QkFBd0I7O0FBQ3ZELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sT0FBTyxxQkFBcUIsR0FDaEMsNENBQTRDO0FBRTlDLE1BQU0sT0FBTyxjQUFlLFNBQVEsd0JBQXdCLENBQUMsZ0JBQWdCOzs7O0lBRTNFLFlBQ1MsT0FBcUU7UUFFNUUsS0FBSyxDQUFDLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBRjVDLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBRnJFLFNBQUksR0FBRyxlQUFlLENBQUM7SUFLaEMsQ0FBQztDQUNGOzs7SUFOQyw4QkFBZ0M7O0lBRTlCLGlDQUE0RTs7QUFNaEYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUUvRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEM0MsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGOzs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUFtQjs7QUFLakMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHdCQUF3QixDQUFDLG1CQUFtQjtJQUVyRjtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUY1QyxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFHeEMsQ0FBQztDQUNGOzs7SUFKQyxxQ0FBd0M7O0FBTTFDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBd0IsQ0FBQyxpQkFBaUI7SUFFakY7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFGNUMsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkQgPSAnW1VzZXJdIFVwZGF0ZSBQYXNzd29yZCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBQYXNzd29yZCBGYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkRfU1VDQ0VTUyA9ICdbVXNlcl0gVXBkYXRlIFBhc3N3b3JkIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRF9SRVNFVCA9XG4gICdbVXNlcl0gUmVzZXQgVXBkYXRlIFBhc3N3b3JkIFByb2Nlc3MgU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfUEFTU1dPUkQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBvbGRQYXNzd29yZDogc3RyaW5nOyBuZXdQYXNzd29yZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9QQVNTV09SRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9QQVNTV09SRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRSZXNldCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfUEFTU1dPUkRfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXBkYXRlUGFzc3dvcmRBY3Rpb24gPVxuICB8IFVwZGF0ZVBhc3N3b3JkXG4gIHwgVXBkYXRlUGFzc3dvcmRGYWlsXG4gIHwgVXBkYXRlUGFzc3dvcmRTdWNjZXNzXG4gIHwgVXBkYXRlUGFzc3dvcmRSZXNldDtcbiJdfQ==