/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { LoadClientTokenSuccess };
if (false) {
    /** @type {?} */
    LoadClientTokenSuccess.prototype.type;
    /** @type {?} */
    LoadClientTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDJCQUEyQjs7QUFDNUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLGdDQUFnQzs7QUFDdEUsTUFBTSxLQUFPLHlCQUF5QixHQUFHLG1DQUFtQztBQUU1RTtJQUFxQywyQ0FBbUM7SUFFdEU7UUFBQSxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSFEsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3ZFOzs7O0lBSkMsK0JBQWtDOztBQU1wQztJQUF5QywrQ0FBbUM7SUFFMUUsNkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLM0U7Ozs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUFtQjs7QUFLakM7SUFBNEMsa0RBQXNDO0lBRWhGLGdDQUFtQixPQUFvQjtRQUF2QyxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS2pGOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBDTElFTlRfVE9LRU5fREFUQSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU4gPSAnW1Rva2VuXSBMb2FkIENsaWVudCBUb2tlbic7XG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU5fRkFJTCA9ICdbVG9rZW5dIExvYWQgQ2xpZW50IFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOX1NVQ0NFU1MgPSAnW1Rva2VuXSBMb2FkIENsaWVudCBUb2tlbiBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlbiBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlbkZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0xJRU5UX1RPS0VOX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2xpZW50VG9rZW5TdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENsaWVudFRva2VuKSB7XG4gICAgc3VwZXIoQ0xJRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENsaWVudFRva2VuQWN0aW9uID1cbiAgfCBMb2FkQ2xpZW50VG9rZW5cbiAgfCBMb2FkQ2xpZW50VG9rZW5GYWlsXG4gIHwgTG9hZENsaWVudFRva2VuU3VjY2VzcztcbiJdfQ==