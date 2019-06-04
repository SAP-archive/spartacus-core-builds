/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state';
import { UPDATE_EMAIL_PROCESS_ID } from '../user-state';
/** @type {?} */
export var UPDATE_EMAIL = '[User] Update Email';
/** @type {?} */
export var UPDATE_EMAIL_ERROR = '[User] Update Email Error';
/** @type {?} */
export var UPDATE_EMAIL_SUCCESS = '[User] Update Email Success';
/** @type {?} */
export var RESET_EMAIL = '[User] Reset Email';
var UpdateEmailAction = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEmailAction, _super);
    function UpdateEmailAction(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UPDATE_EMAIL;
        return _this;
    }
    return UpdateEmailAction;
}(EntityLoadAction));
export { UpdateEmailAction };
if (false) {
    /** @type {?} */
    UpdateEmailAction.prototype.type;
    /** @type {?} */
    UpdateEmailAction.prototype.payload;
}
var UpdateEmailSuccessAction = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEmailSuccessAction, _super);
    function UpdateEmailSuccessAction(newUid) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
        _this.newUid = newUid;
        _this.type = UPDATE_EMAIL_SUCCESS;
        return _this;
    }
    return UpdateEmailSuccessAction;
}(EntitySuccessAction));
export { UpdateEmailSuccessAction };
if (false) {
    /** @type {?} */
    UpdateEmailSuccessAction.prototype.type;
    /** @type {?} */
    UpdateEmailSuccessAction.prototype.newUid;
}
var UpdateEmailErrorAction = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEmailErrorAction, _super);
    function UpdateEmailErrorAction(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_EMAIL_ERROR;
        return _this;
    }
    return UpdateEmailErrorAction;
}(EntityFailAction));
export { UpdateEmailErrorAction };
if (false) {
    /** @type {?} */
    UpdateEmailErrorAction.prototype.type;
    /** @type {?} */
    UpdateEmailErrorAction.prototype.payload;
}
var ResetUpdateEmailAction = /** @class */ (function (_super) {
    tslib_1.__extends(ResetUpdateEmailAction, _super);
    function ResetUpdateEmailAction() {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_EMAIL_PROCESS_ID) || this;
        _this.type = RESET_EMAIL;
        return _this;
    }
    return ResetUpdateEmailAction;
}(EntityResetAction));
export { ResetUpdateEmailAction };
if (false) {
    /** @type {?} */
    ResetUpdateEmailAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV4RCxNQUFNLEtBQU8sWUFBWSxHQUFHLHFCQUFxQjs7QUFDakQsTUFBTSxLQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxLQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7QUFFL0M7SUFBdUMsNkNBQWdCO0lBRXJELDJCQUNTLE9BSU47UUFMSCxZQU9FLGtCQUFNLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxTQUNoRDtRQVBRLGFBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxVQUFJLEdBQUcsWUFBWSxDQUFDOztJQVM3QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBdUMsZ0JBQWdCLEdBV3REOzs7O0lBVkMsaUNBQTZCOztJQUUzQixvQ0FJQzs7QUFNTDtJQUE4QyxvREFBbUI7SUFFL0Qsa0NBQW1CLE1BQWM7UUFBakMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsU0FDaEQ7UUFGa0IsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUR4QixVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4QyxtQkFBbUIsR0FLaEU7Ozs7SUFKQyx3Q0FBcUM7O0lBQ3pCLDBDQUFxQjs7QUFLbkM7SUFBNEMsa0RBQWdCO0lBRTFELGdDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxTQUN6RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFHbkMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLGdCQUFnQixHQUszRDs7OztJQUpDLHNDQUFtQzs7SUFDdkIseUNBQW1COztBQUtqQztJQUE0QyxrREFBaUI7SUFFM0Q7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxTQUNoRDtRQUhRLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBRzVCLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxpQkFBaUIsR0FLNUQ7Ozs7SUFKQyxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFVQREFURV9FTUFJTF9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUwgPSAnW1VzZXJdIFVwZGF0ZSBFbWFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMX0VSUk9SID0gJ1tVc2VyXSBVcGRhdGUgRW1haWwgRXJyb3InO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTUFJTF9TVUNDRVNTID0gJ1tVc2VyXSBVcGRhdGUgRW1haWwgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfRU1BSUwgPSAnW1VzZXJdIFJlc2V0IEVtYWlsJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsQWN0aW9uIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfRU1BSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1aWQ6IHN0cmluZztcbiAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICBuZXdVaWQ6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb24gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTUFJTF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmV3VWlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9FTUFJTF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxFcnJvckFjdGlvbiBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0VNQUlMX0VSUk9SO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0VXBkYXRlRW1haWxBY3Rpb24gZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9FTUFJTDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1haWxBY3Rpb25zID1cbiAgfCBVcGRhdGVFbWFpbEFjdGlvblxuICB8IFVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvblxuICB8IFVwZGF0ZUVtYWlsRXJyb3JBY3Rpb25cbiAgfCBSZXNldFVwZGF0ZUVtYWlsQWN0aW9uO1xuIl19