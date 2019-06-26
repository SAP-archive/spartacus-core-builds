/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state';
/** @type {?} */
export var LOAD_CMS_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export var LOAD_CMS_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export var LOAD_CMS_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
export { LoadCmsPageDataSuccess };
if (false) {
    /** @type {?} */
    LoadCmsPageDataSuccess.prototype.type;
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
}(EntityFailAction));
export { CmsSetPageFailIndex };
if (false) {
    /** @type {?} */
    CmsSetPageFailIndex.prototype.type;
    /** @type {?} */
    CmsSetPageFailIndex.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHeEIsTUFBTSxLQUFPLGtCQUFrQixHQUFHLHNCQUFzQjs7QUFDeEQsTUFBTSxLQUFPLHVCQUF1QixHQUFHLDJCQUEyQjs7QUFDbEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLDhCQUE4Qjs7QUFDeEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLDJCQUEyQjtBQUVsRTtJQUFxQywyQ0FBZ0I7SUFFbkQseUJBQW1CLE9BQW9CO1FBQXZDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQ2hDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQUduQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsZ0JBQWdCLEdBS3BEOzs7O0lBSkMsK0JBQW1DOztJQUN2QixrQ0FBMkI7O0FBS3pDO0lBQXlDLCtDQUFnQjtJQUV2RCw2QkFBWSxXQUF3QixFQUFFLEtBQVU7UUFBaEQsWUFDRSxrQkFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQy9DO1FBSFEsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsZ0JBQWdCLEdBS3hEOzs7O0lBSkMsbUNBQXdDOztBQU0xQztJQUE0QyxrREFBbUI7SUFFN0QsZ0NBQVksV0FBd0IsRUFBRSxPQUFhO1FBQW5ELFlBQ0Usa0JBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFHM0MsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLG1CQUFtQixHQUs5RDs7OztJQUpDLHNDQUEyQzs7QUFNN0M7SUFBeUMsK0NBQWdCO0lBRXZELDZCQUFZLFdBQXdCLEVBQVMsT0FBZTtRQUE1RCxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUN4QztRQUY0QyxhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRG5ELFVBQUksR0FBRyx1QkFBdUIsQ0FBQzs7SUFHeEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLGdCQUFnQixHQUt4RDs7OztJQUpDLG1DQUF3Qzs7SUFDRixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTVNfUEFHRV9EQVRBID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEFfRkFJTCA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTVNfU0VUX1BBR0VfRkFJTF9JTkRFWCA9ICdbQ21zXSBTZXQgUGFnZSBGYWlsIEluZGV4JztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNQYWdlRGF0YSBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfUEFHRV9EQVRBO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihwYXlsb2FkLnR5cGUsIHBheWxvYWQuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zUGFnZURhdGFGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEFfRkFJTDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBlcnJvcjogYW55KSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfUEFHRV9EQVRBX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcGF5bG9hZDogUGFnZSkge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ21zU2V0UGFnZUZhaWxJbmRleCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX1NFVF9QQUdFX0ZBSUxfSU5ERVg7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc1BhZ2VBY3Rpb24gPVxuICB8IExvYWRDbXNQYWdlRGF0YVxuICB8IExvYWRDbXNQYWdlRGF0YUZhaWxcbiAgfCBMb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4gIHwgQ21zU2V0UGFnZUZhaWxJbmRleDtcbiJdfQ==