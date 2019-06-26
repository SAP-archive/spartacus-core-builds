/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/index';
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFeEMsTUFBTSxLQUFPLFlBQVksR0FBRyxxQkFBcUI7O0FBQ2pELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sS0FBTyxhQUFhLEdBQUcsc0JBQXNCO0FBRW5EO0lBQWlDLHVDQUFtQztJQUVsRSxxQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLFlBQVksQ0FBQzs7SUFHN0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlDLGtCQUFrQixDQUFDLGdCQUFnQixHQUtuRTs7OztJQUpDLDJCQUE2Qjs7SUFDakIsOEJBQXNCOztBQUtwQztJQUFxQywyQ0FBbUM7SUFFdEUseUJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxPQUFPLEVBQUUsT0FBTyxDQUFDLFNBQ3hCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3ZFOzs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDO0lBQXdDLDhDQUFzQztJQUU1RSw0QkFBbUIsT0FBZ0Q7UUFBbkUsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUF5QztRQUQxRCxVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLN0U7Ozs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUF1RDs7QUFLckU7SUFFRTtRQURTLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDZixDQUFDO0lBQ2xCLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFJFR0lPTlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OUyA9ICdbVXNlcl0gTG9hZCBSZWdpb25zJztcbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBSZWdpb25zIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OU19GQUlMID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfUkVHSU9OUyA9ICdbVXNlcl0gQ2xlYXIgUmVnaW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9ucyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFJFR0lPTlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9uc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFJFR0lPTlMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9uc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZW50aXRpZXM6IFJlZ2lvbltdOyBjb3VudHJ5OiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFJFR0lPTlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclJlZ2lvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfUkVHSU9OUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgdHlwZSBSZWdpb25zQWN0aW9uID1cbiAgfCBMb2FkUmVnaW9uc1xuICB8IExvYWRSZWdpb25zRmFpbFxuICB8IExvYWRSZWdpb25zU3VjY2Vzc1xuICB8IENsZWFyUmVnaW9ucztcbiJdfQ==