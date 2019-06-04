/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { OPEN_ID_TOKEN_DATA } from '../kyma-state';
/** @type {?} */
export var LOAD_OPEN_ID_TOKEN = '[Kyma] Load Open ID Token';
/** @type {?} */
export var LOAD_OPEN_ID_TOKEN_FAIL = '[Kyma] Load Open ID Token Fail';
/** @type {?} */
export var LOAD_OPEN_ID_TOKEN_SUCCESS = '[Kyma] Load Open ID Token Success';
var LoadOpenIdToken = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOpenIdToken, _super);
    function LoadOpenIdToken(payload) {
        var _this = _super.call(this, OPEN_ID_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_OPEN_ID_TOKEN;
        return _this;
    }
    return LoadOpenIdToken;
}(LoaderLoadAction));
export { LoadOpenIdToken };
if (false) {
    /** @type {?} */
    LoadOpenIdToken.prototype.type;
    /** @type {?} */
    LoadOpenIdToken.prototype.payload;
}
var LoadOpenIdTokenFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOpenIdTokenFail, _super);
    function LoadOpenIdTokenFail(payload) {
        var _this = _super.call(this, OPEN_ID_TOKEN_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_OPEN_ID_TOKEN_FAIL;
        return _this;
    }
    return LoadOpenIdTokenFail;
}(LoaderFailAction));
export { LoadOpenIdTokenFail };
if (false) {
    /** @type {?} */
    LoadOpenIdTokenFail.prototype.type;
    /** @type {?} */
    LoadOpenIdTokenFail.prototype.payload;
}
var LoadOpenIdTokenSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadOpenIdTokenSuccess, _super);
    function LoadOpenIdTokenSuccess(payload) {
        var _this = _super.call(this, OPEN_ID_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_OPEN_ID_TOKEN_SUCCESS;
        return _this;
    }
    return LoadOpenIdTokenSuccess;
}(LoaderSuccessAction));
export { LoadOpenIdTokenSuccess };
if (false) {
    /** @type {?} */
    LoadOpenIdTokenSuccess.prototype.type;
    /** @type {?} */
    LoadOpenIdTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVuRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUN2RSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsbUNBQW1DO0FBRTdFO0lBQXFDLDJDQUFnQjtJQUVuRCx5QkFBbUIsT0FBK0M7UUFBbEUsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUF3QztRQUR6RCxVQUFJLEdBQUcsa0JBQWtCLENBQUM7O0lBR25DLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxnQkFBZ0IsR0FLcEQ7Ozs7SUFKQywrQkFBbUM7O0lBQ3ZCLGtDQUFzRDs7QUFLcEU7SUFBeUMsK0NBQWdCO0lBRXZELDZCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQ25DO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsZ0JBQWdCLEdBS3hEOzs7O0lBSkMsbUNBQXdDOztJQUM1QixzQ0FBbUI7O0FBS2pDO0lBQTRDLGtEQUFtQjtJQUU3RCxnQ0FBbUIsT0FBb0I7UUFBdkMsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFHM0MsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLG1CQUFtQixHQUs5RDs7OztJQUpDLHNDQUEyQzs7SUFDL0IseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBPUEVOX0lEX1RPS0VOX0RBVEEgfSBmcm9tICcuLi9reW1hLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfT1BFTl9JRF9UT0tFTiA9ICdbS3ltYV0gTG9hZCBPcGVuIElEIFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX09QRU5fSURfVE9LRU5fRkFJTCA9ICdbS3ltYV0gTG9hZCBPcGVuIElEIFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfT1BFTl9JRF9UT0tFTl9TVUNDRVNTID0gJ1tLeW1hXSBMb2FkIE9wZW4gSUQgVG9rZW4gU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3BlbklkVG9rZW4gZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1BFTl9JRF9UT0tFTjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoT1BFTl9JRF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE9wZW5JZFRva2VuRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUEVOX0lEX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihPUEVOX0lEX1RPS0VOX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3BlbklkVG9rZW5TdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9wZW5JZFRva2VuKSB7XG4gICAgc3VwZXIoT1BFTl9JRF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBPcGVuSWRUb2tlbkFjdGlvbnMgPVxuICB8IExvYWRPcGVuSWRUb2tlblxuICB8IExvYWRPcGVuSWRUb2tlbkZhaWxcbiAgfCBMb2FkT3BlbklkVG9rZW5TdWNjZXNzO1xuIl19