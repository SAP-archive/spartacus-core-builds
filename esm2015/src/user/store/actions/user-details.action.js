/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRy9ELE1BQU0sT0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sT0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBRTNFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBQy9ELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxvQ0FBb0M7O0FBQy9FLE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7QUFFN0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUFFMUIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBQ0csQ0FBQztDQUN2Qzs7O0lBRkMsK0JBQWtDOztJQUN0QixrQ0FBc0I7O0FBR3BDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFOUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0wsQ0FBQztDQUNwQzs7O0lBRkMsbUNBQXVDOztJQUMzQixzQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFakMsWUFBbUIsT0FBYTtRQUFiLFlBQU8sR0FBUCxPQUFPLENBQU07UUFEdkIsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ1AsQ0FBQztDQUNyQzs7O0lBRkMsc0NBQTBDOztJQUM5Qix5Q0FBb0I7O0FBR2xDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7Ozs7SUFFckQsWUFBbUIsT0FBZ0Q7UUFDakUsS0FBSyxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRHRDLFlBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUdwQyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFvQzs7SUFDeEIsb0NBQXVEOztBQUtyRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7O0lBRXpELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUQvQyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsbUJBQW1COzs7O0lBRS9ELFlBQW1CLFdBQWlCO1FBQ2xDLEtBQUssQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUR0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBTTtRQUQzQixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFHNUMsQ0FBQztDQUNGOzs7SUFKQyx3Q0FBNEM7O0lBQ2hDLCtDQUF3Qjs7QUFLdEMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjtJQUUzRDtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUZoRCxTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFHbkMsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0RFVEFJTFMgPSAnW1VzZXJdIExvYWQgVXNlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfREVUQUlMU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFVzZXIgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFMgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gVXBkYXRlIFVzZXIgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX1NVQ0NFU1MgPSAnW1VzZXJdIFVwZGF0ZSBVc2VyIERldGFpbHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfVVNFUl9ERVRBSUxTID0gJ1tVc2VyXSBSZXNldCBVc2VyIERldGFpbHMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEZXRhaWxzIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VybmFtZTogc3RyaW5nOyB1c2VyRGV0YWlsczogVXNlciB9KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRGV0YWlsc0ZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9VU0VSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfVVNFUl9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyVXBkYXRlczogVXNlcikge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRVcGRhdGVVc2VyRGV0YWlscyBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1VTRVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlckRldGFpbHNBY3Rpb24gPVxuICB8IExvYWRVc2VyRGV0YWlsc1xuICB8IExvYWRVc2VyRGV0YWlsc0ZhaWxcbiAgfCBMb2FkVXNlckRldGFpbHNTdWNjZXNzXG4gIHwgVXBkYXRlVXNlckRldGFpbHNcbiAgfCBVcGRhdGVVc2VyRGV0YWlsc0ZhaWxcbiAgfCBVcGRhdGVVc2VyRGV0YWlsc1N1Y2Nlc3NcbiAgfCBSZXNldFVwZGF0ZVVzZXJEZXRhaWxzO1xuIl19