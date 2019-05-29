/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { OPEN_ID_TOKEN_DATA } from '../auth-state';
/** @type {?} */
export var LOAD_OPEN_ID_TOKEN = '[Token] Create Open ID Token';
/** @type {?} */
export var LOAD_OPEN_ID_TOKEN_FAIL = '[Token] Create Open ID Token Fail';
/** @type {?} */
export var LOAD_OPEN_ID_TOKEN_SUCCESS = '[Token] Create Open ID Token Success';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVuRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsOEJBQThCOztBQUNoRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsbUNBQW1DOztBQUMxRSxNQUFNLEtBQU8sMEJBQTBCLEdBQ3JDLHNDQUFzQztBQUV4QztJQUFxQywyQ0FBZ0I7SUFFbkQseUJBQW1CLE9BQStDO1FBQWxFLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBd0M7UUFEekQsVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQUduQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsZ0JBQWdCLEdBS3BEOzs7O0lBSkMsK0JBQW1DOztJQUN2QixrQ0FBc0Q7O0FBS3BFO0lBQXlDLCtDQUFnQjtJQUV2RCw2QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUNuQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx1QkFBdUIsQ0FBQzs7SUFHeEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLGdCQUFnQixHQUt4RDs7OztJQUpDLG1DQUF3Qzs7SUFDNUIsc0NBQW1COztBQUtqQztJQUE0QyxrREFBbUI7SUFFN0QsZ0NBQW1CLE9BQW9CO1FBQXZDLFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUQ5QixVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxtQkFBbUIsR0FLOUQ7Ozs7SUFKQyxzQ0FBMkM7O0lBQy9CLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IE9QRU5fSURfVE9LRU5fREFUQSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9PUEVOX0lEX1RPS0VOID0gJ1tUb2tlbl0gQ3JlYXRlIE9wZW4gSUQgVG9rZW4nO1xuZXhwb3J0IGNvbnN0IExPQURfT1BFTl9JRF9UT0tFTl9GQUlMID0gJ1tUb2tlbl0gQ3JlYXRlIE9wZW4gSUQgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9PUEVOX0lEX1RPS0VOX1NVQ0NFU1MgPVxuICAnW1Rva2VuXSBDcmVhdGUgT3BlbiBJRCBUb2tlbiBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlbiBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUEVOX0lEX1RPS0VOO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihPUEVOX0lEX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3BlbklkVG9rZW5GYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU5fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE9QRU5fSURfVE9LRU5fREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1BFTl9JRF9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3BlbklkVG9rZW4pIHtcbiAgICBzdXBlcihPUEVOX0lEX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE9wZW5JZFRva2VuQWN0aW9ucyA9XG4gIHwgTG9hZE9wZW5JZFRva2VuXG4gIHwgTG9hZE9wZW5JZFRva2VuRmFpbFxuICB8IExvYWRPcGVuSWRUb2tlblN1Y2Nlc3M7XG4iXX0=