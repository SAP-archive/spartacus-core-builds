/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { COMPONENT_ENTITY } from '../cms-state';
/** @type {?} */
export var LOAD_CMS_COMPONENT = '[Cms] Load Component';
/** @type {?} */
export var LOAD_CMS_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
export var LOAD_CMS_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
export var CMS_GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
var LoadCmsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponent, _super);
    function LoadCmsComponent(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_COMPONENT;
        return _this;
    }
    return LoadCmsComponent;
}(EntityLoadAction));
export { LoadCmsComponent };
if (false) {
    /** @type {?} */
    LoadCmsComponent.prototype.type;
    /** @type {?} */
    LoadCmsComponent.prototype.payload;
}
var LoadCmsComponentFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponentFail, _super);
    function LoadCmsComponentFail(uid, payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_COMPONENT_FAIL;
        return _this;
    }
    return LoadCmsComponentFail;
}(EntityFailAction));
export { LoadCmsComponentFail };
if (false) {
    /** @type {?} */
    LoadCmsComponentFail.prototype.type;
    /** @type {?} */
    LoadCmsComponentFail.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
LoadCmsComponentSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponentSuccess, _super);
    function LoadCmsComponentSuccess(payload, uid) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid || payload.uid || '') || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_COMPONENT_SUCCESS;
        return _this;
    }
    return LoadCmsComponentSuccess;
}(EntitySuccessAction));
/**
 * @template T
 */
export { LoadCmsComponentSuccess };
if (false) {
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.type;
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
CmsGetComponentFromPage = /** @class */ (function (_super) {
    tslib_1.__extends(CmsGetComponentFromPage, _super);
    function CmsGetComponentFromPage(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.map((/**
         * @param {?} cmp
         * @return {?}
         */
        function (cmp) { return cmp.uid; }))) || this;
        _this.payload = payload;
        _this.type = CMS_GET_COMPONENET_FROM_PAGE;
        return _this;
    }
    return CmsGetComponentFromPage;
}(EntitySuccessAction));
/**
 * @template T
 */
export { CmsGetComponentFromPage };
if (false) {
    /** @type {?} */
    CmsGetComponentFromPage.prototype.type;
    /** @type {?} */
    CmsGetComponentFromPage.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsc0JBQXNCOztBQUN4RCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsMkJBQTJCOztBQUNsRSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLEtBQU8sNEJBQTRCLEdBQUcsK0JBQStCO0FBRTNFO0lBQXNDLDRDQUFnQjtJQUVwRCwwQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxTQUNqQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFHbkMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLGdCQUFnQixHQUtyRDs7OztJQUpDLGdDQUFtQzs7SUFDdkIsbUNBQXNCOztBQUtwQztJQUEwQyxnREFBZ0I7SUFFeEQsOEJBQVksR0FBVyxFQUFTLE9BQVk7UUFBNUMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQ3RDO1FBRitCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEbkMsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsZ0JBQWdCLEdBS3pEOzs7O0lBSkMsb0NBQXdDOztJQUNmLHVDQUFtQjs7Ozs7QUFLOUM7Ozs7SUFFVSxtREFBbUI7SUFFM0IsaUNBQW1CLE9BQVUsRUFBRSxHQUFZO1FBQTNDLFlBQ0Usa0JBQU0sZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQ2xEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUc7UUFEcEIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FFVSxtQkFBbUIsR0FLNUI7Ozs7Ozs7SUFKQyx1Q0FBMkM7O0lBQy9CLDBDQUFpQjs7Ozs7QUFLL0I7Ozs7SUFFVSxtREFBbUI7SUFFM0IsaUNBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsRUFBUCxDQUFPLEVBQUMsQ0FBQyxTQUNyRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyw0QkFBNEIsQ0FBQzs7SUFHN0MsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQVBELENBRVUsbUJBQW1CLEdBSzVCOzs7Ozs7O0lBSkMsdUNBQTZDOztJQUNqQywwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDT01QT05FTlRfRU5USVRZIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUwgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRSA9ICdbQ21zXSBHZXQgQ29tcG9uZW50IGZyb20gUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zQ29tcG9uZW50IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQsIHVpZD86IHN0cmluZykge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCB8fCBwYXlsb2FkLnVpZCB8fCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc0dldENvbXBvbmVudEZyb21QYWdlPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTVNfR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgcGF5bG9hZC5tYXAoY21wID0+IGNtcC51aWQpKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc0NvbXBvbmVudEFjdGlvbjxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PiA9XG4gIHwgTG9hZENtc0NvbXBvbmVudFxuICB8IExvYWRDbXNDb21wb25lbnRGYWlsXG4gIHwgTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8VD5cbiAgfCBDbXNHZXRDb21wb25lbnRGcm9tUGFnZTxUPjtcbiJdfQ==