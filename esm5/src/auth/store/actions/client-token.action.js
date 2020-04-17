import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
import { CLIENT_TOKEN_DATA } from '../auth-state';
export var LOAD_CLIENT_TOKEN = '[Token] Load Client Token';
export var LOAD_CLIENT_TOKEN_FAIL = '[Token] Load Client Token Fail';
export var LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Load Client Token Success';
var LoadClientToken = /** @class */ (function (_super) {
    __extends(LoadClientToken, _super);
    function LoadClientToken() {
        var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
        _this.type = LOAD_CLIENT_TOKEN;
        return _this;
    }
    return LoadClientToken;
}(StateUtils.LoaderLoadAction));
export { LoadClientToken };
var LoadClientTokenFail = /** @class */ (function (_super) {
    __extends(LoadClientTokenFail, _super);
    function LoadClientTokenFail(payload) {
        var _this = _super.call(this, CLIENT_TOKEN_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CLIENT_TOKEN_FAIL;
        return _this;
    }
    return LoadClientTokenFail;
}(StateUtils.LoaderFailAction));
export { LoadClientTokenFail };
var LoadClientTokenSuccess = /** @class */ (function (_super) {
    __extends(LoadClientTokenSuccess, _super);
    function LoadClientTokenSuccess(payload) {
        var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CLIENT_TOKEN_SUCCESS;
        return _this;
    }
    return LoadClientTokenSuccess;
}(StateUtils.LoaderSuccessAction));
export { LoadClientTokenSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywyQkFBMkIsQ0FBQztBQUM3RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUN2RSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxtQ0FBbUMsQ0FBQztBQUU3RTtJQUFxQyxtQ0FBMkI7SUFFOUQ7UUFBQSxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSFEsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsVUFBVSxDQUFDLGdCQUFnQixHQUsvRDs7QUFFRDtJQUF5Qyx1Q0FBMkI7SUFFbEUsNkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxVQUFVLENBQUMsZ0JBQWdCLEdBS25FOztBQUVEO0lBQTRDLDBDQUE4QjtJQUV4RSxnQ0FBbUIsT0FBb0I7UUFBdkMsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFVBQUksR0FBRyx5QkFBeUIsQ0FBQzs7SUFHMUMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLFVBQVUsQ0FBQyxtQkFBbUIsR0FLekUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQ0xJRU5UX1RPS0VOX0RBVEEgfSBmcm9tICcuLi9hdXRoLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOID0gJ1tUb2tlbl0gTG9hZCBDbGllbnQgVG9rZW4nO1xuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOX0ZBSUwgPSAnW1Rva2VuXSBMb2FkIENsaWVudCBUb2tlbiBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NMSUVOVF9UT0tFTl9TVUNDRVNTID0gJ1tUb2tlbl0gTG9hZCBDbGllbnQgVG9rZW4gU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2xpZW50VG9rZW4gZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0xJRU5UX1RPS0VOX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2xpZW50VG9rZW5TdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDbGllbnRUb2tlbikge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDbGllbnRUb2tlbkFjdGlvbiA9XG4gIHwgTG9hZENsaWVudFRva2VuXG4gIHwgTG9hZENsaWVudFRva2VuRmFpbFxuICB8IExvYWRDbGllbnRUb2tlblN1Y2Nlc3M7XG4iXX0=