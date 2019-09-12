/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { UPDATE_EMAIL_PROCESS_ID } from '../user-state';
/** @type {?} */
export const UPDATE_EMAIL = '[User] Update Email';
/** @type {?} */
export const UPDATE_EMAIL_ERROR = '[User] Update Email Error';
/** @type {?} */
export const UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
/** @type {?} */
export const RESET_EMAIL = '[User] Reset Email';
export class UpdateEmailAction extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_EMAIL;
    }
}
if (false) {
    /** @type {?} */
    UpdateEmailAction.prototype.type;
    /** @type {?} */
    UpdateEmailAction.prototype.payload;
}
export class UpdateEmailSuccessAction extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} newUid
     */
    constructor(newUid) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.newUid = newUid;
        this.type = UPDATE_EMAIL_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    UpdateEmailSuccessAction.prototype.type;
    /** @type {?} */
    UpdateEmailSuccessAction.prototype.newUid;
}
export class UpdateEmailErrorAction extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_EMAIL_ERROR;
    }
}
if (false) {
    /** @type {?} */
    UpdateEmailErrorAction.prototype.type;
    /** @type {?} */
    UpdateEmailErrorAction.prototype.payload;
}
export class ResetUpdateEmailAction extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.type = RESET_EMAIL;
    }
}
if (false) {
    /** @type {?} */
    ResetUpdateEmailAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFeEQsTUFBTSxPQUFPLFlBQVksR0FBRyxxQkFBcUI7O0FBQ2pELE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9CO0FBRS9DLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFOUUsWUFDUyxPQUlOO1FBRUQsS0FBSyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBTnpDLFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsWUFBWSxDQUFDO0lBUzdCLENBQUM7Q0FDRjs7O0lBVkMsaUNBQTZCOztJQUUzQixvQ0FJQzs7QUFNTCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsd0JBQXdCLENBQUMsbUJBQW1COzs7O0lBRXhGLFlBQW1CLE1BQWM7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRC9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEeEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsd0NBQXFDOztJQUN6QiwwQ0FBcUI7O0FBS25DLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFbkYsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHhDLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBR25DLENBQUM7Q0FDRjs7O0lBSkMsc0NBQW1DOztJQUN2Qix5Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx3QkFBd0IsQ0FBQyxpQkFBaUI7SUFFcEY7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFGekMsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUc1QixDQUFDO0NBQ0Y7OztJQUpDLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMID0gJ1tVc2VyXSBVcGRhdGUgRW1haWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTUFJTF9FUlJPUiA9ICdbVXNlcl0gVXBkYXRlIEVtYWlsIEVycm9yJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUxfU1VDQ0VTUyA9ICdbVXNlcl0gVXBkYXRlIEVtYWlsIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0VNQUlMID0gJ1tVc2VyXSBSZXNldCBFbWFpbCc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbEFjdGlvbiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVpZDogc3RyaW5nO1xuICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAgIG5ld1VpZDogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvbiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmV3VWlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxFcnJvckFjdGlvbiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTF9FUlJPUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFVwZGF0ZUVtYWlsQWN0aW9uIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0VNQUlMO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbWFpbEFjdGlvbnMgPVxuICB8IFVwZGF0ZUVtYWlsQWN0aW9uXG4gIHwgVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uXG4gIHwgVXBkYXRlRW1haWxFcnJvckFjdGlvblxuICB8IFJlc2V0VXBkYXRlRW1haWxBY3Rpb247XG4iXX0=