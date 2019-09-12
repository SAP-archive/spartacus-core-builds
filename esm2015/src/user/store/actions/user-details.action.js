/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { UPDATE_USER_DETAILS_PROCESS_ID } from '../user-state';
/** @type {?} */
export const LOAD_USER_DETAILS = '[User] Load User Details';
/** @type {?} */
export const LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
/** @type {?} */
export const LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
/** @type {?} */
export const UPDATE_USER_DETAILS = '[User] Update User Details';
/** @type {?} */
export const UPDATE_USER_DETAILS_FAIL = '[User] Update User Details Fail';
/** @type {?} */
export const UPDATE_USER_DETAILS_SUCCESS = '[User] Update User Details Success';
/** @type {?} */
export const RESET_USER_DETAILS = '[User] Reset User Details';
export class LoadUserDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserDetails.prototype.type;
    /** @type {?} */
    LoadUserDetails.prototype.payload;
}
export class LoadUserDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadUserDetailsFail.prototype.type;
    /** @type {?} */
    LoadUserDetailsFail.prototype.payload;
}
export class LoadUserDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadUserDetailsSuccess.prototype.payload;
}
export class UpdateUserDetails extends StateEntityLoaderActions.EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.payload = payload;
        this.type = UPDATE_USER_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    UpdateUserDetails.prototype.type;
    /** @type {?} */
    UpdateUserDetails.prototype.payload;
}
export class UpdateUserDetailsFail extends StateEntityLoaderActions.EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = UPDATE_USER_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    UpdateUserDetailsFail.prototype.type;
    /** @type {?} */
    UpdateUserDetailsFail.prototype.payload;
}
export class UpdateUserDetailsSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    /**
     * @param {?} userUpdates
     */
    constructor(userUpdates) {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.userUpdates = userUpdates;
        this.type = UPDATE_USER_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    UpdateUserDetailsSuccess.prototype.type;
    /** @type {?} */
    UpdateUserDetailsSuccess.prototype.userUpdates;
}
export class ResetUpdateUserDetails extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.type = RESET_USER_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetUpdateUserDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0QsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFDM0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLGtDQUFrQzs7QUFFM0UsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDRCQUE0Qjs7QUFDL0QsTUFBTSxPQUFPLHdCQUF3QixHQUFHLGlDQUFpQzs7QUFDekUsTUFBTSxPQUFPLDJCQUEyQixHQUFHLG9DQUFvQzs7QUFDL0UsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjtBQUU3RCxNQUFNLE9BQU8sZUFBZTs7OztJQUUxQixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDRyxDQUFDO0NBQ3ZDOzs7SUFGQywrQkFBa0M7O0lBQ3RCLGtDQUFzQjs7QUFHcEMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUU5QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDTCxDQUFDO0NBQ3BDOzs7SUFGQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFHakMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVqQyxZQUFtQixPQUFhO1FBQWIsWUFBTyxHQUFQLE9BQU8sQ0FBTTtRQUR2QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFDUCxDQUFDO0NBQ3JDOzs7SUFGQyxzQ0FBMEM7O0lBQzlCLHlDQUFvQjs7QUFHbEMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHdCQUF3QixDQUFDLGdCQUFnQjs7OztJQUU5RSxZQUFtQixPQUFnRDtRQUNqRSxLQUFLLENBQUMsZUFBZSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFEdEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQW9DOztJQUN4QixvQ0FBdUQ7O0FBS3JFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx3QkFBd0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFbEYsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRC9DLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSx3QkFBd0IsQ0FBQyxtQkFBbUI7Ozs7SUFFeEYsWUFBbUIsV0FBaUI7UUFDbEMsS0FBSyxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRHRDLGdCQUFXLEdBQVgsV0FBVyxDQUFNO1FBRDNCLFNBQUksR0FBRywyQkFBMkIsQ0FBQztJQUc1QyxDQUFDO0NBQ0Y7OztJQUpDLHdDQUE0Qzs7SUFDaEMsK0NBQXdCOztBQUt0QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsd0JBQXdCLENBQUMsaUJBQWlCO0lBRXBGO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRmhELFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBEZXRhaWxzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1VTRVJfREVUQUlMUyA9ICdbVXNlcl0gUmVzZXQgVXNlciBEZXRhaWxzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRGV0YWlscyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJuYW1lOiBzdHJpbmc7IHVzZXJEZXRhaWxzOiBVc2VyIH0pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlclVwZGF0ZXM6IFVzZXIpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0VXBkYXRlVXNlckRldGFpbHMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyRGV0YWlsc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJEZXRhaWxzXG4gIHwgTG9hZFVzZXJEZXRhaWxzRmFpbFxuICB8IExvYWRVc2VyRGV0YWlsc1N1Y2Nlc3NcbiAgfCBVcGRhdGVVc2VyRGV0YWlsc1xuICB8IFVwZGF0ZVVzZXJEZXRhaWxzRmFpbFxuICB8IFVwZGF0ZVVzZXJEZXRhaWxzU3VjY2Vzc1xuICB8IFJlc2V0VXBkYXRlVXNlckRldGFpbHM7XG4iXX0=