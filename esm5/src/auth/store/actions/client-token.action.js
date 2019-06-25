/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { CLIENT_TOKEN_DATA } from '../auth-state';
/** @type {?} */
export var LOAD_CLIENT_TOKEN = '[Token] Load Client Token';
/** @type {?} */
export var LOAD_CLIENT_TOKEN_FAIL = '[Token] Load Client Token Fail';
/** @type {?} */
export var LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Load Client Token Success';
var LoadClientToken = /** @class */ (function (_super) {
    tslib_1.__extends(LoadClientToken, _super);
    function LoadClientToken() {
        var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
        _this.type = LOAD_CLIENT_TOKEN;
        return _this;
    }
    return LoadClientToken;
}(LoaderLoadAction));
export { LoadClientToken };
if (false) {
    /** @type {?} */
    LoadClientToken.prototype.type;
}
var LoadClientTokenFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadClientTokenFail, _super);
    function LoadClientTokenFail(payload) {
        var _this = _super.call(this, CLIENT_TOKEN_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CLIENT_TOKEN_FAIL;
        return _this;
    }
    return LoadClientTokenFail;
}(LoaderFailAction));
export { LoadClientTokenFail };
if (false) {
    /** @type {?} */
    LoadClientTokenFail.prototype.type;
    /** @type {?} */
    LoadClientTokenFail.prototype.payload;
}
var LoadClientTokenSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadClientTokenSuccess, _super);
    function LoadClientTokenSuccess(payload) {
        var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CLIENT_TOKEN_SUCCESS;
        return _this;
    }
    return LoadClientTokenSuccess;
}(LoaderSuccessAction));
export { LoadClientTokenSuccess };
if (false) {
    /** @type {?} */
    LoadClientTokenSuccess.prototype.type;
    /** @type {?} */
    LoadClientTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDJCQUEyQjs7QUFDNUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLGdDQUFnQzs7QUFDdEUsTUFBTSxLQUFPLHlCQUF5QixHQUFHLG1DQUFtQztBQUU1RTtJQUFxQywyQ0FBZ0I7SUFFbkQ7UUFBQSxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSFEsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsZ0JBQWdCLEdBS3BEOzs7O0lBSkMsK0JBQWtDOztBQU1wQztJQUF5QywrQ0FBZ0I7SUFFdkQsNkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxnQkFBZ0IsR0FLeEQ7Ozs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFLakM7SUFBNEMsa0RBQW1CO0lBRTdELGdDQUFtQixPQUFvQjtRQUF2QyxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsbUJBQW1CLEdBSzlEOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBDTElFTlRfVE9LRU5fREFUQSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU4gPSAnW1Rva2VuXSBMb2FkIENsaWVudCBUb2tlbic7XG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU5fRkFJTCA9ICdbVG9rZW5dIExvYWQgQ2xpZW50IFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOX1NVQ0NFU1MgPSAnW1Rva2VuXSBMb2FkIENsaWVudCBUb2tlbiBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlbiBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU5fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENsaWVudFRva2VuKSB7XG4gICAgc3VwZXIoQ0xJRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENsaWVudFRva2VuQWN0aW9uID1cbiAgfCBMb2FkQ2xpZW50VG9rZW5cbiAgfCBMb2FkQ2xpZW50VG9rZW5GYWlsXG4gIHwgTG9hZENsaWVudFRva2VuU3VjY2VzcztcbiJdfQ==