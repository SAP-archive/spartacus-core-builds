/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntitySuccessAction, EntityLoadAction, EntityFailAction, } from '../../../state';
/** @type {?} */
export var LOAD_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export var LOAD_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export var LOAD_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsR0FDakIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJeEIsTUFBTSxLQUFPLGNBQWMsR0FBRyxzQkFBc0I7O0FBQ3BELE1BQU0sS0FBTyxtQkFBbUIsR0FBRywyQkFBMkI7O0FBQzlELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyw4QkFBOEI7QUFFcEU7SUFBa0Msd0NBQWdCO0lBRWhELHNCQUFtQixPQUFvQjtRQUF2QyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUNoQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFVBQUksR0FBRyxjQUFjLENBQUM7O0lBRy9CLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyxnQkFBZ0IsR0FLakQ7Ozs7SUFKQyw0QkFBK0I7O0lBQ25CLCtCQUEyQjs7QUFLekM7SUFBc0MsNENBQWdCO0lBRXBELDBCQUFZLFdBQXdCLEVBQUUsS0FBVTtRQUFoRCxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxnQkFBZ0IsR0FLckQ7Ozs7SUFKQyxnQ0FBb0M7O0FBTXRDO0lBQXlDLCtDQUFtQjtJQUUxRCw2QkFBWSxXQUF3QixFQUFFLE9BQWE7UUFBbkQsWUFDRSxrQkFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLFNBQ2pEO1FBSFEsVUFBSSxHQUFHLHNCQUFzQixDQUFDOztJQUd2QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsbUJBQW1CLEdBSzNEOzs7O0lBSkMsbUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5RmFpbEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IExPQURfUEFHRV9EQVRBID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BBR0VfREFUQV9GQUlMID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUEFHRV9EQVRBX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGEgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUEFHRV9EQVRBO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihwYXlsb2FkLnR5cGUsIHBheWxvYWQuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBheWxvYWQ6IFBhZ2UpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQYWdlQWN0aW9uID0gTG9hZFBhZ2VEYXRhIHwgTG9hZFBhZ2VEYXRhRmFpbCB8IExvYWRQYWdlRGF0YVN1Y2Nlc3M7XG4iXX0=