/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
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
export class UpdateUserDetails extends EntityLoadAction {
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
export class UpdateUserDetailsFail extends EntityFailAction {
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
export class UpdateUserDetailsSuccess extends EntitySuccessAction {
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
export class ResetUpdateUserDetails extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_USER_DETAILS_PROCESS_ID);
        this.type = RESET_USER_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetUpdateUserDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9ELE1BQU0sT0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sT0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBRTNFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBQy9FLE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7QUFFN0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUFFMUIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBQ0csQ0FBQztDQUN2Qzs7O0lBRkMsK0JBQWtDOztJQUN0QixrQ0FBc0I7O0FBR3BDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFOUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0wsQ0FBQztDQUNwQzs7O0lBRkMsbUNBQXVDOztJQUMzQixzQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFakMsWUFBbUIsT0FBYTtRQUFiLFlBQU8sR0FBUCxPQUFPLENBQU07UUFEdkIsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ1AsQ0FBQztDQUNyQzs7O0lBRkMsc0NBQTBDOztJQUM5Qix5Q0FBb0I7O0FBR2xDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7Ozs7SUFFckQsWUFBbUIsT0FBZ0Q7UUFDakUsS0FBSyxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRHRDLFlBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUdwQyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFvQzs7SUFDeEIsb0NBQXVEOztBQUtyRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7O0lBRXpELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUQvQyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsbUJBQW1COzs7O0lBRS9ELFlBQW1CLFdBQWlCO1FBQ2xDLEtBQUssQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUR0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBTTtRQUQzQixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFHNUMsQ0FBQztDQUNGOzs7SUFKQyx3Q0FBNEM7O0lBQ2hDLCtDQUF3Qjs7QUFLdEMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjtJQUUzRDtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUZoRCxTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFHbkMsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX0ZBSUwgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgVXNlciBEZXRhaWxzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1VTRVJfREVUQUlMUyA9ICdbVXNlcl0gUmVzZXQgVXNlciBEZXRhaWxzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlsc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyRGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRGV0YWlscyBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcm5hbWU6IHN0cmluZzsgdXNlckRldGFpbHM6IFVzZXIgfSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckRldGFpbHNGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEZXRhaWxzU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlclVwZGF0ZXM6IFVzZXIpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0VXBkYXRlVXNlckRldGFpbHMgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9VU0VSX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJEZXRhaWxzQWN0aW9uID1cbiAgfCBMb2FkVXNlckRldGFpbHNcbiAgfCBMb2FkVXNlckRldGFpbHNGYWlsXG4gIHwgTG9hZFVzZXJEZXRhaWxzU3VjY2Vzc1xuICB8IFVwZGF0ZVVzZXJEZXRhaWxzXG4gIHwgVXBkYXRlVXNlckRldGFpbHNGYWlsXG4gIHwgVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzXG4gIHwgUmVzZXRVcGRhdGVVc2VyRGV0YWlscztcbiJdfQ==