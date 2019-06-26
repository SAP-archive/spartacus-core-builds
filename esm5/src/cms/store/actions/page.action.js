/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateEntityLoaderActions } from '../../../state/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHaEUsTUFBTSxLQUFPLGtCQUFrQixHQUFHLHNCQUFzQjs7QUFDeEQsTUFBTSxLQUFPLHVCQUF1QixHQUFHLDJCQUEyQjs7QUFDbEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLDhCQUE4Qjs7QUFDeEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLDJCQUEyQjtBQUVsRTtJQUFxQywyQ0FBeUM7SUFFNUUseUJBQW1CLE9BQW9CO1FBQXZDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQ2hDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQUduQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBSzdFOzs7O0lBSkMsK0JBQW1DOztJQUN2QixrQ0FBMkI7O0FBS3pDO0lBQXlDLCtDQUF5QztJQUVoRiw2QkFBWSxXQUF3QixFQUFFLEtBQVU7UUFBaEQsWUFDRSxrQkFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQy9DO1FBSFEsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS2pGOzs7O0lBSkMsbUNBQXdDOztBQU0xQztJQUE0QyxrREFBNEM7SUFFdEYsZ0NBQVksV0FBd0IsRUFBRSxPQUFhO1FBQW5ELFlBQ0Usa0JBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxTQUNqRDtRQUhRLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFHM0MsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLHdCQUF3QixDQUFDLG1CQUFtQixHQUt2Rjs7OztJQUpDLHNDQUEyQzs7QUFNN0M7SUFBeUMsK0NBQXlDO0lBRWhGLDZCQUFZLFdBQXdCLEVBQVMsT0FBZTtRQUE1RCxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUN4QztRQUY0QyxhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRG5ELFVBQUksR0FBRyx1QkFBdUIsQ0FBQzs7SUFHeEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLHdCQUF3QixDQUFDLGdCQUFnQixHQUtqRjs7OztJQUpDLG1DQUF3Qzs7SUFDRixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTVNfUEFHRV9EQVRBID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEFfRkFJTCA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTVNfU0VUX1BBR0VfRkFJTF9JTkRFWCA9ICdbQ21zXSBTZXQgUGFnZSBGYWlsIEluZGV4JztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNQYWdlRGF0YSBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VDb250ZXh0KSB7XG4gICAgc3VwZXIocGF5bG9hZC50eXBlLCBwYXlsb2FkLmlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhRmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zUGFnZURhdGFTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfUEFHRV9EQVRBX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcGF5bG9hZDogUGFnZSkge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ21zU2V0UGFnZUZhaWxJbmRleCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19TRVRfUEFHRV9GQUlMX0lOREVYO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDbXNQYWdlQWN0aW9uID1cbiAgfCBMb2FkQ21zUGFnZURhdGFcbiAgfCBMb2FkQ21zUGFnZURhdGFGYWlsXG4gIHwgTG9hZENtc1BhZ2VEYXRhU3VjY2Vzc1xuICB8IENtc1NldFBhZ2VGYWlsSW5kZXg7XG4iXX0=