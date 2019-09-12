/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateEntityLoaderActions } from '../../../state/utils/index';
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
}(StateEntityLoaderActions.EntityLoadAction));
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
}(StateEntityLoaderActions.EntityFailAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
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
}(StateEntityLoaderActions.EntitySuccessAction));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsc0JBQXNCOztBQUN4RCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsMkJBQTJCOztBQUNsRSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsOEJBQThCOztBQUN4RSxNQUFNLEtBQU8sNEJBQTRCLEdBQUcsK0JBQStCO0FBRTNFO0lBQXNDLDRDQUF5QztJQUU3RSwwQkFBbUIsT0FBZTtRQUFsQyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxTQUNqQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFHbkMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLHdCQUF3QixDQUFDLGdCQUFnQixHQUs5RTs7OztJQUpDLGdDQUFtQzs7SUFDdkIsbUNBQXNCOztBQUtwQztJQUEwQyxnREFBeUM7SUFFakYsOEJBQVksR0FBVyxFQUFTLE9BQVk7UUFBNUMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQ3RDO1FBRitCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEbkMsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS2xGOzs7O0lBSkMsb0NBQXdDOztJQUNmLHVDQUFtQjs7Ozs7QUFLOUM7Ozs7SUFFVSxtREFBNEM7SUFFcEQsaUNBQW1CLE9BQVUsRUFBRSxHQUFZO1FBQTNDLFlBQ0Usa0JBQU0sZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQ2xEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUc7UUFEcEIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FFVSx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FLckQ7Ozs7Ozs7SUFKQyx1Q0FBMkM7O0lBQy9CLDBDQUFpQjs7Ozs7QUFLL0I7Ozs7SUFFVSxtREFBNEM7SUFFcEQsaUNBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsRUFBUCxDQUFPLEVBQUMsQ0FBQyxTQUNyRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyw0QkFBNEIsQ0FBQzs7SUFHN0MsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQVBELENBRVUsd0JBQXdCLENBQUMsbUJBQW1CLEdBS3JEOzs7Ozs7O0lBSkMsdUNBQTZDOztJQUNqQywwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENNU19HRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0UgPSAnW0Ntc10gR2V0IENvbXBvbmVudCBmcm9tIFBhZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zQ29tcG9uZW50RmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBULCB1aWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCB1aWQgfHwgcGF5bG9hZC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19HRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLm1hcChjbXAgPT4gY21wLnVpZCkpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ21zQ29tcG9uZW50XG4gIHwgTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ21zQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IENtc0dldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19