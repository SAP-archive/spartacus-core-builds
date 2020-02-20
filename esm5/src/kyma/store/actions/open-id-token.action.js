import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { OPEN_ID_TOKEN_DATA } from '../kyma-state';
export var LOAD_OPEN_ID_TOKEN = '[Kyma] Load Open ID Token';
export var LOAD_OPEN_ID_TOKEN_FAIL = '[Kyma] Load Open ID Token Fail';
export var LOAD_OPEN_ID_TOKEN_SUCCESS = '[Kyma] Load Open ID Token Success';
var LoadOpenIdToken = /** @class */ (function (_super) {
    __extends(LoadOpenIdToken, _super);
    function LoadOpenIdToken(payload) {
        var _this = _super.call(this, OPEN_ID_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_OPEN_ID_TOKEN;
        return _this;
    }
    return LoadOpenIdToken;
}(StateLoaderActions.LoaderLoadAction));
export { LoadOpenIdToken };
var LoadOpenIdTokenFail = /** @class */ (function (_super) {
    __extends(LoadOpenIdTokenFail, _super);
    function LoadOpenIdTokenFail(payload) {
        var _this = _super.call(this, OPEN_ID_TOKEN_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_OPEN_ID_TOKEN_FAIL;
        return _this;
    }
    return LoadOpenIdTokenFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadOpenIdTokenFail };
var LoadOpenIdTokenSuccess = /** @class */ (function (_super) {
    __extends(LoadOpenIdTokenSuccess, _super);
    function LoadOpenIdTokenSuccess(payload) {
        var _this = _super.call(this, OPEN_ID_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_OPEN_ID_TOKEN_SUCCESS;
        return _this;
    }
    return LoadOpenIdTokenSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadOpenIdTokenSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsMkJBQTJCLENBQUM7QUFDOUQsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsZ0NBQWdDLENBQUM7QUFDeEUsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsbUNBQW1DLENBQUM7QUFFOUU7SUFBcUMsbUNBQW1DO0lBRXRFLHlCQUFtQixPQUErQztRQUFsRSxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXdDO1FBRHpELFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFHbkMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLGtCQUFrQixDQUFDLGdCQUFnQixHQUt2RTs7QUFFRDtJQUF5Qyx1Q0FBbUM7SUFFMUUsNkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FDbkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLM0U7O0FBRUQ7SUFBNEMsMENBQXNDO0lBRWhGLGdDQUFtQixPQUFvQjtRQUF2QyxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsa0JBQWtCLENBQUMsbUJBQW1CLEdBS2pGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBPUEVOX0lEX1RPS0VOX0RBVEEgfSBmcm9tICcuLi9reW1hLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfT1BFTl9JRF9UT0tFTiA9ICdbS3ltYV0gTG9hZCBPcGVuIElEIFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX09QRU5fSURfVE9LRU5fRkFJTCA9ICdbS3ltYV0gTG9hZCBPcGVuIElEIFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfT1BFTl9JRF9UT0tFTl9TVUNDRVNTID0gJ1tLeW1hXSBMb2FkIE9wZW4gSUQgVG9rZW4gU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3BlbklkVG9rZW4gZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU47XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE9QRU5fSURfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlbkZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU5fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE9QRU5fSURfVE9LRU5fREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9wZW5JZFRva2VuKSB7XG4gICAgc3VwZXIoT1BFTl9JRF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBPcGVuSWRUb2tlbkFjdGlvbnMgPVxuICB8IExvYWRPcGVuSWRUb2tlblxuICB8IExvYWRPcGVuSWRUb2tlbkZhaWxcbiAgfCBMb2FkT3BlbklkVG9rZW5TdWNjZXNzO1xuIl19