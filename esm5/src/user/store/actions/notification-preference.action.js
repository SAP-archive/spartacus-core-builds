/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, NOTIFICATION_PREFERENCES, } from '../user-state';
/** @type {?} */
export var LOAD_NOTIFICATION_PREFERENCES = '[User] Load Notification Preferences';
/** @type {?} */
export var LOAD_NOTIFICATION_PREFERENCES_FAIL = '[User] Load Notification Preferences Fail';
/** @type {?} */
export var LOAD_NOTIFICATION_PREFERENCES_SUCCESS = '[User] Load Notification Preferences Success';
/** @type {?} */
export var UPDATE_NOTIFICATION_PREFERENCES = '[User] Update Notification Preferences';
/** @type {?} */
export var UPDATE_NOTIFICATION_PREFERENCES_FAIL = '[User] Update Notification Preferences Fail';
/** @type {?} */
export var UPDATE_NOTIFICATION_PREFERENCES_SUCCESS = '[User] Update Notification Preferences Success';
/** @type {?} */
export var RESET_NOTIFICATION_PREFERENCES = '[User] Reset Notification Preferences';
/** @type {?} */
export var CLEAR_NOTIFICATION_PREFERENCES = '[User] Clear Notification Preferences';
var LoadNotificationPreferences = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNotificationPreferences, _super);
    function LoadNotificationPreferences(payload) {
        var _this = _super.call(this, NOTIFICATION_PREFERENCES) || this;
        _this.payload = payload;
        _this.type = LOAD_NOTIFICATION_PREFERENCES;
        return _this;
    }
    return LoadNotificationPreferences;
}(StateLoaderActions.LoaderLoadAction));
export { LoadNotificationPreferences };
if (false) {
    /** @type {?} */
    LoadNotificationPreferences.prototype.type;
    /** @type {?} */
    LoadNotificationPreferences.prototype.payload;
}
var LoadNotificationPreferencesFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNotificationPreferencesFail, _super);
    function LoadNotificationPreferencesFail(payload) {
        var _this = _super.call(this, NOTIFICATION_PREFERENCES, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_NOTIFICATION_PREFERENCES_FAIL;
        return _this;
    }
    return LoadNotificationPreferencesFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadNotificationPreferencesFail };
if (false) {
    /** @type {?} */
    LoadNotificationPreferencesFail.prototype.type;
    /** @type {?} */
    LoadNotificationPreferencesFail.prototype.payload;
}
var LoadNotificationPreferencesSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNotificationPreferencesSuccess, _super);
    function LoadNotificationPreferencesSuccess(payload) {
        var _this = _super.call(this, NOTIFICATION_PREFERENCES) || this;
        _this.payload = payload;
        _this.type = LOAD_NOTIFICATION_PREFERENCES_SUCCESS;
        return _this;
    }
    return LoadNotificationPreferencesSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadNotificationPreferencesSuccess };
if (false) {
    /** @type {?} */
    LoadNotificationPreferencesSuccess.prototype.type;
    /** @type {?} */
    LoadNotificationPreferencesSuccess.prototype.payload;
}
var UpdateNotificationPreferences = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateNotificationPreferences, _super);
    function UpdateNotificationPreferences(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UPDATE_NOTIFICATION_PREFERENCES;
        return _this;
    }
    return UpdateNotificationPreferences;
}(EntityLoadAction));
export { UpdateNotificationPreferences };
if (false) {
    /** @type {?} */
    UpdateNotificationPreferences.prototype.type;
    /** @type {?} */
    UpdateNotificationPreferences.prototype.payload;
}
var UpdateNotificationPreferencesFail = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateNotificationPreferencesFail, _super);
    function UpdateNotificationPreferencesFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_NOTIFICATION_PREFERENCES_FAIL;
        return _this;
    }
    return UpdateNotificationPreferencesFail;
}(EntityFailAction));
export { UpdateNotificationPreferencesFail };
if (false) {
    /** @type {?} */
    UpdateNotificationPreferencesFail.prototype.type;
    /** @type {?} */
    UpdateNotificationPreferencesFail.prototype.payload;
}
var UpdateNotificationPreferencesSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateNotificationPreferencesSuccess, _super);
    function UpdateNotificationPreferencesSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UPDATE_NOTIFICATION_PREFERENCES_SUCCESS;
        return _this;
    }
    return UpdateNotificationPreferencesSuccess;
}(EntitySuccessAction));
export { UpdateNotificationPreferencesSuccess };
if (false) {
    /** @type {?} */
    UpdateNotificationPreferencesSuccess.prototype.type;
    /** @type {?} */
    UpdateNotificationPreferencesSuccess.prototype.payload;
}
var ResetNotificationPreferences = /** @class */ (function (_super) {
    tslib_1.__extends(ResetNotificationPreferences, _super);
    function ResetNotificationPreferences() {
        var _this = _super.call(this, PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID) || this;
        _this.type = RESET_NOTIFICATION_PREFERENCES;
        return _this;
    }
    return ResetNotificationPreferences;
}(EntityResetAction));
export { ResetNotificationPreferences };
if (false) {
    /** @type {?} */
    ResetNotificationPreferences.prototype.type;
}
var ClearNotificationPreferences = /** @class */ (function (_super) {
    tslib_1.__extends(ClearNotificationPreferences, _super);
    function ClearNotificationPreferences() {
        var _this = _super.call(this, NOTIFICATION_PREFERENCES) || this;
        _this.type = CLEAR_NOTIFICATION_PREFERENCES;
        return _this;
    }
    return ClearNotificationPreferences;
}(StateLoaderActions.LoaderResetAction));
export { ClearNotificationPreferences };
if (false) {
    /** @type {?} */
    ClearNotificationPreferences.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFDTCwwQ0FBMEMsRUFDMUMsd0JBQXdCLEdBQ3pCLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLEtBQU8sNkJBQTZCLEdBQ3hDLHNDQUFzQzs7QUFDeEMsTUFBTSxLQUFPLGtDQUFrQyxHQUM3QywyQ0FBMkM7O0FBQzdDLE1BQU0sS0FBTyxxQ0FBcUMsR0FDaEQsOENBQThDOztBQUNoRCxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3Qzs7QUFDMUMsTUFBTSxLQUFPLG9DQUFvQyxHQUMvQyw2Q0FBNkM7O0FBQy9DLE1BQU0sS0FBTyx1Q0FBdUMsR0FDbEQsZ0RBQWdEOztBQUNsRCxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLDhCQUE4QixHQUN6Qyx1Q0FBdUM7QUFFekM7SUFBaUQsdURBQW1DO0lBRWxGLHFDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sd0JBQXdCLENBQUMsU0FDaEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsNkJBQTZCLENBQUM7O0lBRzlDLENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQUFMRCxDQUFpRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLbkY7Ozs7SUFKQywyQ0FBOEM7O0lBQ2xDLDhDQUFzQjs7QUFLcEM7SUFBcUQsMkRBQW1DO0lBRXRGLHlDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFNBQ3pDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGtDQUFrQyxDQUFDOztJQUduRCxDQUFDO0lBQ0gsc0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUQsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3ZGOzs7O0lBSkMsK0NBQW1EOztJQUN2QyxrREFBbUI7O0FBS2pDO0lBQXdELDhEQUFzQztJQUU1Riw0Q0FBbUIsT0FBaUM7UUFBcEQsWUFDRSxrQkFBTSx3QkFBd0IsQ0FBQyxTQUNoQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUQzQyxVQUFJLEdBQUcscUNBQXFDLENBQUM7O0lBR3RELENBQUM7SUFDSCx5Q0FBQztBQUFELENBQUMsQUFMRCxDQUF3RCxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLN0Y7Ozs7SUFKQyxrREFBc0Q7O0lBQzFDLHFEQUF3Qzs7QUFLdEQ7SUFBbUQseURBQWdCO0lBRWpFLHVDQUNTLE9BQWtFO1FBRDNFLFlBR0Usa0JBQU0sZUFBZSxFQUFFLDBDQUEwQyxDQUFDLFNBQ25FO1FBSFEsYUFBTyxHQUFQLE9BQU8sQ0FBMkQ7UUFGbEUsVUFBSSxHQUFHLCtCQUErQixDQUFDOztJQUtoRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBbUQsZ0JBQWdCLEdBT2xFOzs7O0lBTkMsNkNBQWdEOztJQUU5QyxnREFBeUU7O0FBTTdFO0lBQXVELDZEQUFnQjtJQUVyRSwyQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSwwQ0FBMEMsRUFBRSxPQUFPLENBQUMsU0FDNUU7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsb0NBQW9DLENBQUM7O0lBR3JELENBQUM7SUFDSCx3Q0FBQztBQUFELENBQUMsQUFMRCxDQUF1RCxnQkFBZ0IsR0FLdEU7Ozs7SUFKQyxpREFBcUQ7O0lBQ3pDLG9EQUFtQjs7QUFLakM7SUFBMEQsZ0VBQW1CO0lBRTNFLDhDQUFtQixPQUFpQztRQUFwRCxZQUNFLGtCQUFNLGVBQWUsRUFBRSwwQ0FBMEMsQ0FBQyxTQUNuRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUQzQyxVQUFJLEdBQUcsdUNBQXVDLENBQUM7O0lBR3hELENBQUM7SUFDSCwyQ0FBQztBQUFELENBQUMsQUFMRCxDQUEwRCxtQkFBbUIsR0FLNUU7Ozs7SUFKQyxvREFBd0Q7O0lBQzVDLHVEQUF3Qzs7QUFLdEQ7SUFBa0Qsd0RBQWlCO0lBRWpFO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsMENBQTBDLENBQUMsU0FDbkU7UUFIUSxVQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBRy9DLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUFMRCxDQUFrRCxpQkFBaUIsR0FLbEU7Ozs7SUFKQyw0Q0FBK0M7O0FBTWpEO0lBQWtELHdEQUFvQztJQUVwRjtRQUFBLFlBQ0Usa0JBQU0sd0JBQXdCLENBQUMsU0FDaEM7UUFIUSxVQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBRy9DLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUFMRCxDQUFrRCxrQkFBa0IsQ0FBQyxpQkFBaUIsR0FLckY7Ozs7SUFKQyw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19QUk9DRVNTX0lELFxuICBOT1RJRklDQVRJT05fUFJFRkVSRU5DRVMsXG59IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTID1cbiAgJ1tVc2VyXSBMb2FkIE5vdGlmaWNhdGlvbiBQcmVmZXJlbmNlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfRkFJTCA9XG4gICdbVXNlcl0gTG9hZCBOb3RpZmljYXRpb24gUHJlZmVyZW5jZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBOb3RpZmljYXRpb24gUHJlZmVyZW5jZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFUyA9XG4gICdbVXNlcl0gVXBkYXRlIE5vdGlmaWNhdGlvbiBQcmVmZXJlbmNlcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19GQUlMID1cbiAgJ1tVc2VyXSBVcGRhdGUgTm90aWZpY2F0aW9uIFByZWZlcmVuY2VzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfU1VDQ0VTUyA9XG4gICdbVXNlcl0gVXBkYXRlIE5vdGlmaWNhdGlvbiBQcmVmZXJlbmNlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVMgPVxuICAnW1VzZXJdIFJlc2V0IE5vdGlmaWNhdGlvbiBQcmVmZXJlbmNlcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTID1cbiAgJ1tVc2VyXSBDbGVhciBOb3RpZmljYXRpb24gUHJlZmVyZW5jZXMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihOT1RJRklDQVRJT05fUFJFRkVSRU5DRVMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTm90aWZpY2F0aW9uUHJlZmVyZW5jZXNGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE5PVElGSUNBVElPTl9QUkVGRVJFTkNFUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdKSB7XG4gICAgc3VwZXIoTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVUERBVEVfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlc0ZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXNTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW10pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0Tm90aWZpY2F0aW9uUHJlZmVyZW5jZXMgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJOb3RpZmljYXRpb25QcmVmZXJlbmNlcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE5PVElGSUNBVElPTl9QUkVGRVJFTkNFUyk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFjdGlvbiA9XG4gIHwgTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzXG4gIHwgTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzRmFpbFxuICB8IExvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlc1N1Y2Nlc3NcbiAgfCBVcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlc1xuICB8IFVwZGF0ZU5vdGlmaWNhdGlvblByZWZlcmVuY2VzRmFpbFxuICB8IFVwZGF0ZU5vdGlmaWNhdGlvblByZWZlcmVuY2VzU3VjY2Vzc1xuICB8IFJlc2V0Tm90aWZpY2F0aW9uUHJlZmVyZW5jZXNcbiAgfCBDbGVhck5vdGlmaWNhdGlvblByZWZlcmVuY2VzO1xuIl19