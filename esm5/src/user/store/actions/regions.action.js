import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
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
}(StateUtils.LoaderLoadAction));
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
}(StateUtils.LoaderFailAction));
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
}(StateUtils.LoaderSuccessAction));
export { LoadRegionsSuccess };
var ClearRegions = /** @class */ (function () {
    function ClearRegions() {
        this.type = CLEAR_REGIONS;
    }
    return ClearRegions;
}());
export { ClearRegions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4QyxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcscUJBQXFCLENBQUM7QUFDbEQsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsNkJBQTZCLENBQUM7QUFDbEUsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsMEJBQTBCLENBQUM7QUFDNUQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDO0FBRXBEO0lBQWlDLCtCQUEyQjtJQUUxRCxxQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLFlBQVksQ0FBQzs7SUFHN0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLM0Q7O0FBRUQ7SUFBcUMsbUNBQTJCO0lBRTlELHlCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUN4QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFHbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLL0Q7O0FBRUQ7SUFBd0Msc0NBQThCO0lBRXBFLDRCQUFtQixPQUFnRDtRQUFuRSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLFVBQVUsQ0FBQyxtQkFBbUIsR0FLckU7O0FBRUQ7SUFFRTtRQURTLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDZixDQUFDO0lBQ2xCLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBSRUdJT05TIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlMgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlNfRkFJTCA9ICdbVXNlcl0gTG9hZCBSZWdpb25zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1JFR0lPTlMgPSAnW1VzZXJdIENsZWFyIFJlZ2lvbnMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFJFR0lPTlMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9uc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGVudGl0aWVzOiBSZWdpb25bXTsgY291bnRyeTogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihSRUdJT05TKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJSZWdpb25zIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1JFR0lPTlM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IHR5cGUgUmVnaW9uc0FjdGlvbiA9XG4gIHwgTG9hZFJlZ2lvbnNcbiAgfCBMb2FkUmVnaW9uc0ZhaWxcbiAgfCBMb2FkUmVnaW9uc1N1Y2Nlc3NcbiAgfCBDbGVhclJlZ2lvbnM7XG4iXX0=