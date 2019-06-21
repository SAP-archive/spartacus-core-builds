/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state';
/** @type {?} */
export var LOAD_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export var LOAD_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export var LOAD_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
/** @type {?} */
export var SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
var LoadPageData = /** @class */ (function (_super) {
    tslib_1.__extends(LoadPageData, _super);
    function LoadPageData(payload) {
        var _this = _super.call(this, payload.type, payload.id) || this;
        _this.payload = payload;
        _this.type = LOAD_PAGE_DATA;
        return _this;
    }
    return LoadPageData;
}(EntityLoadAction));
export { LoadPageData };
if (false) {
    /** @type {?} */
    LoadPageData.prototype.type;
    /** @type {?} */
    LoadPageData.prototype.payload;
}
var LoadPageDataFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadPageDataFail, _super);
    function LoadPageDataFail(pageContext, error) {
        var _this = _super.call(this, pageContext.type, pageContext.id, error) || this;
        _this.type = LOAD_PAGE_DATA_FAIL;
        return _this;
    }
    return LoadPageDataFail;
}(EntityFailAction));
export { LoadPageDataFail };
if (false) {
    /** @type {?} */
    LoadPageDataFail.prototype.type;
}
var SetPageFailIndex = /** @class */ (function (_super) {
    tslib_1.__extends(SetPageFailIndex, _super);
    function SetPageFailIndex(pageContext, payload) {
        var _this = _super.call(this, pageContext.type, pageContext.id) || this;
        _this.payload = payload;
        _this.type = SET_PAGE_FAIL_INDEX;
        return _this;
    }
    return SetPageFailIndex;
}(EntityFailAction));
export { SetPageFailIndex };
if (false) {
    /** @type {?} */
    SetPageFailIndex.prototype.type;
    /** @type {?} */
    SetPageFailIndex.prototype.payload;
}
var LoadPageDataSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadPageDataSuccess, _super);
    function LoadPageDataSuccess(pageContext, payload) {
        var _this = _super.call(this, pageContext.type, pageContext.id, payload) || this;
        _this.type = LOAD_PAGE_DATA_SUCCESS;
        return _this;
    }
    return LoadPageDataSuccess;
}(EntitySuccessAction));
export { LoadPageDataSuccess };
if (false) {
    /** @type {?} */
    LoadPageDataSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJeEIsTUFBTSxLQUFPLGNBQWMsR0FBRyxzQkFBc0I7O0FBQ3BELE1BQU0sS0FBTyxtQkFBbUIsR0FBRywyQkFBMkI7O0FBQzlELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyw4QkFBOEI7O0FBQ3BFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRywyQkFBMkI7QUFFOUQ7SUFBa0Msd0NBQWdCO0lBRWhELHNCQUFtQixPQUFvQjtRQUF2QyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUNoQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFVBQUksR0FBRyxjQUFjLENBQUM7O0lBRy9CLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyxnQkFBZ0IsR0FLakQ7Ozs7SUFKQyw0QkFBK0I7O0lBQ25CLCtCQUEyQjs7QUFLekM7SUFBc0MsNENBQWdCO0lBRXBELDBCQUFZLFdBQXdCLEVBQUUsS0FBVTtRQUFoRCxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxnQkFBZ0IsR0FLckQ7Ozs7SUFKQyxnQ0FBb0M7O0FBTXRDO0lBQXNDLDRDQUFnQjtJQUVwRCwwQkFBWSxXQUF3QixFQUFTLE9BQWU7UUFBNUQsWUFDRSxrQkFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsU0FDeEM7UUFGNEMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQURuRCxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxnQkFBZ0IsR0FLckQ7Ozs7SUFKQyxnQ0FBb0M7O0lBQ0UsbUNBQXNCOztBQUs5RDtJQUF5QywrQ0FBbUI7SUFFMUQsNkJBQVksV0FBd0IsRUFBRSxPQUFhO1FBQW5ELFlBQ0Usa0JBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLG1CQUFtQixHQUszRDs7OztJQUpDLG1DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BBR0VfREFUQSA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9QQUdFX0RBVEFfRkFJTCA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1BBR0VfREFUQV9TVUNDRVNTID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0ZBSUxfSU5ERVggPSAnW0Ntc10gU2V0IFBhZ2UgRmFpbCBJbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGEgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUEFHRV9EQVRBO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihwYXlsb2FkLnR5cGUsIHBheWxvYWQuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYWdlRmFpbEluZGV4IGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFHRV9GQUlMX0lOREVYO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQYWdlRGF0YVN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUEFHRV9EQVRBX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcGF5bG9hZDogUGFnZSkge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFBhZ2VBY3Rpb24gPVxuICB8IExvYWRQYWdlRGF0YVxuICB8IExvYWRQYWdlRGF0YUZhaWxcbiAgfCBMb2FkUGFnZURhdGFTdWNjZXNzXG4gIHwgU2V0UGFnZUZhaWxJbmRleDtcbiJdfQ==