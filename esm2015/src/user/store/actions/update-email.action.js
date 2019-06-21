/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
import { UPDATE_EMAIL_PROCESS_ID } from '../user-state';
/** @type {?} */
export const UPDATE_EMAIL = '[User] Update Email';
/** @type {?} */
export const UPDATE_EMAIL_ERROR = '[User] Update Email Error';
/** @type {?} */
export const UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
/** @type {?} */
export const RESET_EMAIL = '[User] Reset Email';
export class UpdateEmailAction extends EntityLoadAction {
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
export class UpdateEmailSuccessAction extends EntitySuccessAction {
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
export class UpdateEmailErrorAction extends EntityFailAction {
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
export class ResetUpdateEmailAction extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID);
        this.type = RESET_EMAIL;
    }
}
if (false) {
    /** @type {?} */
    ResetUpdateEmailAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXhELE1BQU0sT0FBTyxZQUFZLEdBQUcscUJBQXFCOztBQUNqRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLE9BQU8sV0FBVyxHQUFHLG9CQUFvQjtBQUUvQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCOzs7O0lBRXJELFlBQ1MsT0FJTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQU56QyxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLFlBQVksQ0FBQztJQVM3QixDQUFDO0NBQ0Y7OztJQVZDLGlDQUE2Qjs7SUFFM0Isb0NBSUM7O0FBTUwsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG1CQUFtQjs7OztJQUUvRCxZQUFtQixNQUFjO1FBQy9CLEtBQUssQ0FBQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUQvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHhCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUdyQyxDQUFDO0NBQ0Y7OztJQUpDLHdDQUFxQzs7SUFDekIsMENBQXFCOztBQUtuQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7O0lBRTFELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUR4QyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLHNDQUFtQzs7SUFDdkIseUNBQW1COztBQUtqQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQWlCO0lBRTNEO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRnpDLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHNUIsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFVQREFURV9FTUFJTF9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUwgPSAnW1VzZXJdIFVwZGF0ZSBFbWFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMX0VSUk9SID0gJ1tVc2VyXSBVcGRhdGUgRW1haWwgRXJyb3InO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTUFJTF9TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgRW1haWwgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfRU1BSUwgPSAnW1VzZXJdIFJlc2V0IEVtYWlsJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsQWN0aW9uIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfRU1BSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1aWQ6IHN0cmluZztcbiAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICBuZXdVaWQ6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb24gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmV3VWlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxFcnJvckFjdGlvbiBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0VNQUlMX0VSUk9SO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0VXBkYXRlRW1haWxBY3Rpb24gZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9FTUFJTDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1haWxBY3Rpb25zID1cbiAgfCBVcGRhdGVFbWFpbEFjdGlvblxuICB8IFVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvblxuICB8IFVwZGF0ZUVtYWlsRXJyb3JBY3Rpb25cbiAgfCBSZXNldFVwZGF0ZUVtYWlsQWN0aW9uO1xuIl19