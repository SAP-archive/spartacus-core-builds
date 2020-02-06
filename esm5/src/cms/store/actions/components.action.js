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
export var CMS_GET_COMPONENT_FROM_PAGE = '[Cms] Get Component from Page';
var LoadCmsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponent, _super);
    function LoadCmsComponent(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid) || this;
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
    function LoadCmsComponentFail(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid, payload.error) || this;
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
    function LoadCmsComponentSuccess(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid || payload.component.uid || '') || this;
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
        var _this = _super.call(this, COMPONENT_ENTITY, [].concat(payload).map((/**
         * @param {?} cmp
         * @return {?}
         */
        function (cmp) { return cmp.component.uid; }))) || this;
        _this.payload = payload;
        _this.type = CMS_GET_COMPONENT_FROM_PAGE;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxzQkFBc0I7O0FBQ3hELE1BQU0sS0FBTyx1QkFBdUIsR0FBRywyQkFBMkI7O0FBQ2xFLE1BQU0sS0FBTywwQkFBMEIsR0FBRyw4QkFBOEI7O0FBQ3hFLE1BQU0sS0FBTywyQkFBMkIsR0FBRywrQkFBK0I7QUFFMUU7SUFBc0MsNENBQXlDO0lBRTdFLDBCQUNTLE9BR047UUFKSCxZQU1FLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FDckM7UUFOUSxhQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQVFuQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBc0Msd0JBQXdCLENBQUMsZ0JBQWdCLEdBVTlFOzs7O0lBVEMsZ0NBQW1DOztJQUVqQyxtQ0FHQzs7QUFNTDtJQUEwQyxnREFBeUM7SUFFakYsOEJBQ1MsT0FBOEQ7UUFEdkUsWUFHRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FDcEQ7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBS3hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFQRCxDQUEwQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FPbEY7Ozs7SUFOQyxvQ0FBd0M7O0lBRXRDLHVDQUFxRTs7Ozs7QUFNekU7Ozs7SUFFVSxtREFBNEM7SUFFcEQsaUNBQ1MsT0FJTjtRQUxILFlBT0Usa0JBQU0sZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FDcEU7UUFQUSxhQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQVMzQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBYkQsQ0FFVSx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FXckQ7Ozs7Ozs7SUFWQyx1Q0FBMkM7O0lBRXpDLDBDQUlDOzs7OztBQU1MOzs7O0lBRVUsbURBQTRDO0lBRXBELGlDQUNTLE9BRXlDO1FBSGxELFlBS0Usa0JBQU0sZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLFNBQzFFO1FBTFEsYUFBTyxHQUFQLE9BQU8sQ0FFa0M7UUFKekMsVUFBSSxHQUFHLDJCQUEyQixDQUFDOztJQU81QyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBWEQsQ0FFVSx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FTckQ7Ozs7Ozs7SUFSQyx1Q0FBNEM7O0lBRTFDLDBDQUVnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRSA9ICdbQ21zXSBHZXQgQ29tcG9uZW50IGZyb20gUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zQ29tcG9uZW50IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdWlkOiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRGYWlsIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVpZDogc3RyaW5nOyBlcnJvcjogYW55OyBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBjb21wb25lbnQ6IFQ7XG4gICAgICB1aWQ/OiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCB8fCBwYXlsb2FkLmNvbXBvbmVudC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6XG4gICAgICB8IHsgY29tcG9uZW50OiBUOyBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgfVxuICAgICAgfCB7IGNvbXBvbmVudDogVDsgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0IH1bXVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBbXS5jb25jYXQocGF5bG9hZCkubWFwKGNtcCA9PiBjbXAuY29tcG9uZW50LnVpZCkpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ21zQ29tcG9uZW50XG4gIHwgTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ21zQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IENtc0dldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19