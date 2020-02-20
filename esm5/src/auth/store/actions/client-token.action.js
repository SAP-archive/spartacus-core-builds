import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { LoadClientTokenSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO0FBQzdELE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLGdDQUFnQyxDQUFDO0FBQ3ZFLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLG1DQUFtQyxDQUFDO0FBRTdFO0lBQXFDLG1DQUFtQztJQUV0RTtRQUFBLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFIUSxVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLdkU7O0FBRUQ7SUFBeUMsdUNBQW1DO0lBRTFFLDZCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLEVBQUUsT0FBTyxDQUFDLFNBQ2xDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHNCQUFzQixDQUFDOztJQUd2QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBSzNFOztBQUVEO0lBQTRDLDBDQUFzQztJQUVoRixnQ0FBbUIsT0FBb0I7UUFBdkMsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFVBQUksR0FBRyx5QkFBeUIsQ0FBQzs7SUFHMUMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLGtCQUFrQixDQUFDLG1CQUFtQixHQUtqRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IENMSUVOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NMSUVOVF9UT0tFTiA9ICdbVG9rZW5dIExvYWQgQ2xpZW50IFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX0NMSUVOVF9UT0tFTl9GQUlMID0gJ1tUb2tlbl0gTG9hZCBDbGllbnQgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU5fU1VDQ0VTUyA9ICdbVG9rZW5dIExvYWQgQ2xpZW50IFRva2VuIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2xpZW50VG9rZW4pIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2xpZW50VG9rZW5BY3Rpb24gPVxuICB8IExvYWRDbGllbnRUb2tlblxuICB8IExvYWRDbGllbnRUb2tlbkZhaWxcbiAgfCBMb2FkQ2xpZW50VG9rZW5TdWNjZXNzO1xuIl19