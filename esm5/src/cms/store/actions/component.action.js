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
// TODO(issue:6027) - rename the const to `CMS_GET_COMPONENT_FROM_PAGE`
/** @type {?} */
export var CMS_GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
var LoadCmsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponent, _super);
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    function LoadCmsComponent(payload, pageContext) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload) || this;
        _this.payload = payload;
        _this.pageContext = pageContext;
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
    /** @type {?} */
    LoadCmsComponent.prototype.pageContext;
}
var LoadCmsComponentFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponentFail, _super);
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    function LoadCmsComponentFail(uid, payload, pageContext) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid, payload) || this;
        _this.payload = payload;
        _this.pageContext = pageContext;
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
    /** @type {?} */
    LoadCmsComponentFail.prototype.pageContext;
}
/**
 * @template T
 */
var /**
 * @template T
 */
LoadCmsComponentSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsComponentSuccess, _super);
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    function LoadCmsComponentSuccess(payload, uid, pageContext) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid || payload.uid || '') || this;
        _this.payload = payload;
        _this.pageContext = pageContext;
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
    /** @type {?} */
    LoadCmsComponentSuccess.prototype.pageContext;
}
/**
 * @template T
 */
var /**
 * @template T
 */
CmsGetComponentFromPage = /** @class */ (function (_super) {
    tslib_1.__extends(CmsGetComponentFromPage, _super);
    // TODO(issue:6027) - this action should have only one `payload` property which should encapsulate all of the constructor's arguments
    function CmsGetComponentFromPage(payload, pageContext) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.map((/**
         * @param {?} cmp
         * @return {?}
         */
        function (cmp) { return cmp.uid; }))) || this;
        _this.payload = payload;
        _this.pageContext = pageContext;
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
    /** @type {?} */
    CmsGetComponentFromPage.prototype.pageContext;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsc0JBQXNCOztBQUN4RCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsMkJBQTJCOztBQUNsRSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsOEJBQThCOzs7QUFFeEUsTUFBTSxLQUFPLDRCQUE0QixHQUFHLCtCQUErQjtBQUUzRTtJQUFzQyw0Q0FBeUM7SUFFN0UscUlBQXFJO0lBQ3JJLDBCQUFtQixPQUFlLEVBQVMsV0FBeUI7UUFBcEUsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsU0FDakM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLGlCQUFXLEdBQVgsV0FBVyxDQUFjO1FBRjNELFVBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFJbkMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXNDLHdCQUF3QixDQUFDLGdCQUFnQixHQU05RTs7OztJQUxDLGdDQUFtQzs7SUFFdkIsbUNBQXNCOztJQUFFLHVDQUFnQzs7QUFLdEU7SUFBMEMsZ0RBQXlDO0lBRWpGLHFJQUFxSTtJQUNySSw4QkFDRSxHQUFXLEVBQ0osT0FBWSxFQUNaLFdBQXlCO1FBSGxDLFlBS0Usa0JBQU0sZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUN0QztRQUpRLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFDWixpQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUx6QixVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBUXhDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFWRCxDQUEwQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FVbEY7Ozs7SUFUQyxvQ0FBd0M7O0lBSXRDLHVDQUFtQjs7SUFDbkIsMkNBQWdDOzs7OztBQU1wQzs7OztJQUVVLG1EQUE0QztJQUVwRCxxSUFBcUk7SUFDckksaUNBQ1MsT0FBVSxFQUNqQixHQUFZLEVBQ0wsV0FBeUI7UUFIbEMsWUFLRSxrQkFBTSxnQkFBZ0IsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FDbEQ7UUFMUSxhQUFPLEdBQVAsT0FBTyxDQUFHO1FBRVYsaUJBQVcsR0FBWCxXQUFXLENBQWM7UUFMekIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQVEzQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FFVSx3QkFBd0IsQ0FBQyxtQkFBbUIsR0FVckQ7Ozs7Ozs7SUFUQyx1Q0FBMkM7O0lBR3pDLDBDQUFpQjs7SUFFakIsOENBQWdDOzs7OztBQU1wQzs7OztJQUVVLG1EQUE0QztJQUVwRCxxSUFBcUk7SUFDckksaUNBQW1CLE9BQVksRUFBUyxXQUF5QjtRQUFqRSxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxFQUFQLENBQU8sRUFBQyxDQUFDLFNBQ3JEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFBUyxpQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUZ4RCxVQUFJLEdBQUcsNEJBQTRCLENBQUM7O0lBSTdDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFSRCxDQUVVLHdCQUF3QixDQUFDLG1CQUFtQixHQU1yRDs7Ozs7OztJQUxDLHVDQUE2Qzs7SUFFakMsMENBQW1COztJQUFFLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIHJlbmFtZSB0aGUgY29uc3QgdG8gYENNU19HRVRfQ09NUE9ORU5UX0ZST01fUEFHRWBcbmV4cG9ydCBjb25zdCBDTVNfR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnQgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlQ7XG4gIC8vIFRPRE8oaXNzdWU6NjAyNykgLSB0aGlzIGFjdGlvbiBzaG91bGQgaGF2ZSBvbmx5IG9uZSBgcGF5bG9hZGAgcHJvcGVydHkgd2hpY2ggc2hvdWxkIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGUgY29uc3RydWN0b3IncyBhcmd1bWVudHNcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZywgcHVibGljIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudEZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19DT01QT05FTlRfRkFJTDtcbiAgLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIHRoaXMgYWN0aW9uIHNob3VsZCBoYXZlIG9ubHkgb25lIGBwYXlsb2FkYCBwcm9wZXJ0eSB3aGljaCBzaG91bGQgZW5jYXBzdWxhdGUgYWxsIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50c1xuICBjb25zdHJ1Y3RvcihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcGF5bG9hZDogYW55LFxuICAgIHB1YmxpYyBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIC8vIFRPRE8oaXNzdWU6NjAyNykgLSB0aGlzIGFjdGlvbiBzaG91bGQgaGF2ZSBvbmx5IG9uZSBgcGF5bG9hZGAgcHJvcGVydHkgd2hpY2ggc2hvdWxkIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGUgY29uc3RydWN0b3IncyBhcmd1bWVudHNcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IFQsXG4gICAgdWlkPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCB8fCBwYXlsb2FkLnVpZCB8fCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc0dldENvbXBvbmVudEZyb21QYWdlPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRTtcbiAgLy8gVE9ETyhpc3N1ZTo2MDI3KSAtIHRoaXMgYWN0aW9uIHNob3VsZCBoYXZlIG9ubHkgb25lIGBwYXlsb2FkYCBwcm9wZXJ0eSB3aGljaCBzaG91bGQgZW5jYXBzdWxhdGUgYWxsIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50c1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdLCBwdWJsaWMgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dCkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQubWFwKGNtcCA9PiBjbXAudWlkKSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDbXNDb21wb25lbnRBY3Rpb248VCBleHRlbmRzIENtc0NvbXBvbmVudD4gPVxuICB8IExvYWRDbXNDb21wb25lbnRcbiAgfCBMb2FkQ21zQ29tcG9uZW50RmFpbFxuICB8IExvYWRDbXNDb21wb25lbnRTdWNjZXNzPFQ+XG4gIHwgQ21zR2V0Q29tcG9uZW50RnJvbVBhZ2U8VD47XG4iXX0=