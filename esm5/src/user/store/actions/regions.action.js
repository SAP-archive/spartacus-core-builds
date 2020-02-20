import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { REGIONS } from '../user-state';
export var LOAD_REGIONS = '[User] Load Regions';
export var LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
export var LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
export var CLEAR_REGIONS = '[User] Clear Regions';
var LoadRegions = /** @class */ (function (_super) {
    __extends(LoadRegions, _super);
    function LoadRegions(payload) {
        var _this = _super.call(this, REGIONS) || this;
        _this.payload = payload;
        _this.type = LOAD_REGIONS;
        return _this;
    }
    return LoadRegions;
}(StateLoaderActions.LoaderLoadAction));
export { LoadRegions };
var LoadRegionsFail = /** @class */ (function (_super) {
    __extends(LoadRegionsFail, _super);
    function LoadRegionsFail(payload) {
        var _this = _super.call(this, REGIONS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_REGIONS_FAIL;
        return _this;
    }
    return LoadRegionsFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadRegionsFail };
var LoadRegionsSuccess = /** @class */ (function (_super) {
    __extends(LoadRegionsSuccess, _super);
    function LoadRegionsSuccess(payload) {
        var _this = _super.call(this, REGIONS) || this;
        _this.payload = payload;
        _this.type = LOAD_REGIONS_SUCCESS;
        return _this;
    }
    return LoadRegionsSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadRegionsSuccess };
var ClearRegions = /** @class */ (function () {
    function ClearRegions() {
        this.type = CLEAR_REGIONS;
    }
    return ClearRegions;
}());
export { ClearRegions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztBQUNsRCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyw2QkFBNkIsQ0FBQztBQUNsRSxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsc0JBQXNCLENBQUM7QUFFcEQ7SUFBaUMsK0JBQW1DO0lBRWxFLHFCQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsWUFBWSxDQUFDOztJQUc3QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS25FOztBQUVEO0lBQXFDLG1DQUFtQztJQUV0RSx5QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FDeEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLdkU7O0FBRUQ7SUFBd0Msc0NBQXNDO0lBRTVFLDRCQUFtQixPQUFnRDtRQUFuRSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLGtCQUFrQixDQUFDLG1CQUFtQixHQUs3RTs7QUFFRDtJQUVFO1FBRFMsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNmLENBQUM7SUFDbEIsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgUkVHSU9OUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMnO1xuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX0ZBSUwgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBUl9SRUdJT05TID0gJ1tVc2VyXSBDbGVhciBSZWdpb25zJztcblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUkVHSU9OUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBlbnRpdGllczogUmVnaW9uW107IGNvdW50cnk6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyUmVnaW9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbnNBY3Rpb24gPVxuICB8IExvYWRSZWdpb25zXG4gIHwgTG9hZFJlZ2lvbnNGYWlsXG4gIHwgTG9hZFJlZ2lvbnNTdWNjZXNzXG4gIHwgQ2xlYXJSZWdpb25zO1xuIl19