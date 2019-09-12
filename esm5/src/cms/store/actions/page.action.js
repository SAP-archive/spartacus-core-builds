/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateEntityLoaderActions } from '../../../state/utils/index';
/** @type {?} */
export var LOAD_CMS_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export var LOAD_CMS_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export var LOAD_CMS_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
/** @type {?} */
export var CMS_SET_PAGE_SUCCESS_INDEX = '[Cms] Set Page Success Index';
/** @type {?} */
export var CMS_SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
var LoadCmsPageData = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsPageData, _super);
    function LoadCmsPageData(payload) {
        var _this = _super.call(this, payload.type, payload.id) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_PAGE_DATA;
        return _this;
    }
    return LoadCmsPageData;
}(StateEntityLoaderActions.EntityLoadAction));
export { LoadCmsPageData };
if (false) {
    /** @type {?} */
    LoadCmsPageData.prototype.type;
    /** @type {?} */
    LoadCmsPageData.prototype.payload;
}
var LoadCmsPageDataFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsPageDataFail, _super);
    function LoadCmsPageDataFail(pageContext, error) {
        var _this = _super.call(this, pageContext.type, pageContext.id, error) || this;
        _this.type = LOAD_CMS_PAGE_DATA_FAIL;
        return _this;
    }
    return LoadCmsPageDataFail;
}(StateEntityLoaderActions.EntityFailAction));
export { LoadCmsPageDataFail };
if (false) {
    /** @type {?} */
    LoadCmsPageDataFail.prototype.type;
}
var LoadCmsPageDataSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsPageDataSuccess, _super);
    function LoadCmsPageDataSuccess(pageContext, payload) {
        var _this = _super.call(this, pageContext.type, pageContext.id, payload) || this;
        _this.type = LOAD_CMS_PAGE_DATA_SUCCESS;
        return _this;
    }
    return LoadCmsPageDataSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { LoadCmsPageDataSuccess };
if (false) {
    /** @type {?} */
    LoadCmsPageDataSuccess.prototype.type;
}
var CmsSetPageSuccessIndex = /** @class */ (function (_super) {
    tslib_1.__extends(CmsSetPageSuccessIndex, _super);
    function CmsSetPageSuccessIndex(pageContext, payload) {
        var _this = _super.call(this, pageContext.type, pageContext.id, payload) || this;
        _this.type = CMS_SET_PAGE_SUCCESS_INDEX;
        return _this;
    }
    return CmsSetPageSuccessIndex;
}(StateEntityLoaderActions.EntitySuccessAction));
export { CmsSetPageSuccessIndex };
if (false) {
    /** @type {?} */
    CmsSetPageSuccessIndex.prototype.type;
}
var CmsSetPageFailIndex = /** @class */ (function (_super) {
    tslib_1.__extends(CmsSetPageFailIndex, _super);
    function CmsSetPageFailIndex(pageContext, payload) {
        var _this = _super.call(this, pageContext.type, pageContext.id) || this;
        _this.payload = payload;
        _this.type = CMS_SET_PAGE_FAIL_INDEX;
        return _this;
    }
    return CmsSetPageFailIndex;
}(StateEntityLoaderActions.EntityFailAction));
export { CmsSetPageFailIndex };
if (false) {
    /** @type {?} */
    CmsSetPageFailIndex.prototype.type;
    /** @type {?} */
    CmsSetPageFailIndex.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHdEUsTUFBTSxLQUFPLGtCQUFrQixHQUFHLHNCQUFzQjs7QUFDeEQsTUFBTSxLQUFPLHVCQUF1QixHQUFHLDJCQUEyQjs7QUFDbEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLDhCQUE4Qjs7QUFDeEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLDhCQUE4Qjs7QUFDeEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLDJCQUEyQjtBQUVsRTtJQUFxQywyQ0FBeUM7SUFFNUUseUJBQW1CLE9BQW9CO1FBQXZDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQ2hDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQUduQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBSzdFOzs7O0lBSkMsK0JBQW1DOztJQUN2QixrQ0FBMkI7O0FBS3pDO0lBQXlDLCtDQUF5QztJQUVoRiw2QkFBWSxXQUF3QixFQUFFLEtBQVU7UUFBaEQsWUFDRSxrQkFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQy9DO1FBSFEsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS2pGOzs7O0lBSkMsbUNBQXdDOztBQU0xQztJQUE0QyxrREFBNEM7SUFFdEYsZ0NBQVksV0FBd0IsRUFBRSxPQUFhO1FBQW5ELFlBQ0Usa0JBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFHM0MsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLHdCQUF3QixDQUFDLG1CQUFtQixHQUt2Rjs7OztJQUpDLHNDQUEyQzs7QUFNN0M7SUFBNEMsa0RBQTRDO0lBRXRGLGdDQUFZLFdBQXdCLEVBQUUsT0FBYTtRQUFuRCxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FDakQ7UUFIUSxVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0Qyx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FLdkY7Ozs7SUFKQyxzQ0FBMkM7O0FBTTdDO0lBQXlDLCtDQUF5QztJQUVoRiw2QkFBWSxXQUF3QixFQUFTLE9BQWU7UUFBNUQsWUFDRSxrQkFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsU0FDeEM7UUFGNEMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQURuRCxVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5Qyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLakY7Ozs7SUFKQyxtQ0FBd0M7O0lBQ0Ysc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQSA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfUEFHRV9EQVRBX0ZBSUwgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfUEFHRV9EQVRBX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ01TX1NFVF9QQUdFX1NVQ0NFU1NfSU5ERVggPSAnW0Ntc10gU2V0IFBhZ2UgU3VjY2VzcyBJbmRleCc7XG5leHBvcnQgY29uc3QgQ01TX1NFVF9QQUdFX0ZBSUxfSU5ERVggPSAnW0Ntc10gU2V0IFBhZ2UgRmFpbCBJbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zUGFnZURhdGEgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEE7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlQ29udGV4dCkge1xuICAgIHN1cGVyKHBheWxvYWQudHlwZSwgcGF5bG9hZC5pZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNQYWdlRGF0YUZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEFfRkFJTDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBlcnJvcjogYW55KSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBheWxvYWQ6IFBhZ2UpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc1NldFBhZ2VTdWNjZXNzSW5kZXggZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTVNfU0VUX1BBR0VfU1VDQ0VTU19JTkRFWDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwYXlsb2FkOiBQYWdlKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNTZXRQYWdlRmFpbEluZGV4IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX1NFVF9QQUdFX0ZBSUxfSU5ERVg7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc1BhZ2VBY3Rpb24gPVxuICB8IExvYWRDbXNQYWdlRGF0YVxuICB8IExvYWRDbXNQYWdlRGF0YUZhaWxcbiAgfCBMb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4gIHwgQ21zU2V0UGFnZUZhaWxJbmRleDtcbiJdfQ==