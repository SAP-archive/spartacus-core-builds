/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { REGIONS } from '../user-state';
/** @type {?} */
export var LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
export var LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
export var LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
/** @type {?} */
export var CLEAR_REGIONS = '[User] Clear Regions';
var LoadRegions = /** @class */ (function (_super) {
    tslib_1.__extends(LoadRegions, _super);
    function LoadRegions(payload) {
        var _this = _super.call(this, REGIONS) || this;
        _this.payload = payload;
        _this.type = LOAD_REGIONS;
        return _this;
    }
    return LoadRegions;
}(LoaderLoadAction));
export { LoadRegions };
if (false) {
    /** @type {?} */
    LoadRegions.prototype.type;
    /** @type {?} */
    LoadRegions.prototype.payload;
}
var LoadRegionsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadRegionsFail, _super);
    function LoadRegionsFail(payload) {
        var _this = _super.call(this, REGIONS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_REGIONS_FAIL;
        return _this;
    }
    return LoadRegionsFail;
}(LoaderFailAction));
export { LoadRegionsFail };
if (false) {
    /** @type {?} */
    LoadRegionsFail.prototype.type;
    /** @type {?} */
    LoadRegionsFail.prototype.payload;
}
var LoadRegionsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadRegionsSuccess, _super);
    function LoadRegionsSuccess(payload) {
        var _this = _super.call(this, REGIONS) || this;
        _this.payload = payload;
        _this.type = LOAD_REGIONS_SUCCESS;
        return _this;
    }
    return LoadRegionsSuccess;
}(LoaderSuccessAction));
export { LoadRegionsSuccess };
if (false) {
    /** @type {?} */
    LoadRegionsSuccess.prototype.type;
    /** @type {?} */
    LoadRegionsSuccess.prototype.payload;
}
var ClearRegions = /** @class */ (function () {
    function ClearRegions() {
        this.type = CLEAR_REGIONS;
    }
    return ClearRegions;
}());
export { ClearRegions };
if (false) {
    /** @type {?} */
    ClearRegions.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHeEMsTUFBTSxLQUFPLFlBQVksR0FBRyxxQkFBcUI7O0FBQ2pELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sS0FBTyxhQUFhLEdBQUcsc0JBQXNCO0FBRW5EO0lBQWlDLHVDQUFnQjtJQUUvQyxxQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLFlBQVksQ0FBQzs7SUFHN0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlDLGdCQUFnQixHQUtoRDs7OztJQUpDLDJCQUE2Qjs7SUFDakIsOEJBQXNCOztBQUtwQztJQUFxQywyQ0FBZ0I7SUFFbkQseUJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxPQUFPLEVBQUUsT0FBTyxDQUFDLFNBQ3hCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsZ0JBQWdCLEdBS3BEOzs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDO0lBQXdDLDhDQUFtQjtJQUV6RCw0QkFBbUIsT0FBZ0Q7UUFBbkUsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUF5QztRQUQxRCxVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxtQkFBbUIsR0FLMUQ7Ozs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUF1RDs7QUFLckU7SUFFRTtRQURTLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDZixDQUFDO0lBQ2xCLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgUkVHSU9OUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMnO1xuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX0ZBSUwgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBUl9SRUdJT05TID0gJ1tVc2VyXSBDbGVhciBSZWdpb25zJztcblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihSRUdJT05TKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFJFR0lPTlMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9uc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBlbnRpdGllczogUmVnaW9uW107IGNvdW50cnk6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyUmVnaW9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbnNBY3Rpb24gPVxuICB8IExvYWRSZWdpb25zXG4gIHwgTG9hZFJlZ2lvbnNGYWlsXG4gIHwgTG9hZFJlZ2lvbnNTdWNjZXNzXG4gIHwgQ2xlYXJSZWdpb25zO1xuIl19