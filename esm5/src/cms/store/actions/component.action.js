/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { COMPONENT_ENTITY } from '../cms-state';
/** @type {?} */
export var LOAD_COMPONENT = '[Cms] Load Component';
/** @type {?} */
export var LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
export var LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
export var GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
var LoadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoadComponent, _super);
    function LoadComponent(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT;
        return _this;
    }
    return LoadComponent;
}(EntityLoadAction));
export { LoadComponent };
if (false) {
    /** @type {?} */
    LoadComponent.prototype.type;
    /** @type {?} */
    LoadComponent.prototype.payload;
}
var LoadComponentFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadComponentFail, _super);
    function LoadComponentFail(uid, payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT_FAIL;
        return _this;
    }
    return LoadComponentFail;
}(EntityFailAction));
export { LoadComponentFail };
if (false) {
    /** @type {?} */
    LoadComponentFail.prototype.type;
    /** @type {?} */
    LoadComponentFail.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
LoadComponentSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadComponentSuccess, _super);
    function LoadComponentSuccess(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT_SUCCESS;
        return _this;
    }
    return LoadComponentSuccess;
}(EntitySuccessAction));
/**
 * @template T
 */
export { LoadComponentSuccess };
if (false) {
    /** @type {?} */
    LoadComponentSuccess.prototype.type;
    /** @type {?} */
    LoadComponentSuccess.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
GetComponentFromPage = /** @class */ (function (_super) {
    tslib_1.__extends(GetComponentFromPage, _super);
    function GetComponentFromPage(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.map(function (cmp) { return cmp.uid; })) || this;
        _this.payload = payload;
        _this.type = GET_COMPONENET_FROM_PAGE;
        return _this;
    }
    return GetComponentFromPage;
}(EntitySuccessAction));
/**
 * @template T
 */
export { GetComponentFromPage };
if (false) {
    /** @type {?} */
    GetComponentFromPage.prototype.type;
    /** @type {?} */
    GetComponentFromPage.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLEtBQU8sY0FBYyxHQUFHLHNCQUFzQjs7QUFDcEQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLDhCQUE4Qjs7QUFDcEUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLCtCQUErQjtBQUV2RTtJQUFtQyx5Q0FBZ0I7SUFFakQsdUJBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsU0FDakM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsY0FBYyxDQUFDOztJQUcvQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsZ0JBQWdCLEdBS2xEOzs7O0lBSkMsNkJBQStCOztJQUNuQixnQ0FBc0I7O0FBS3BDO0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFBWSxHQUFXLEVBQVMsT0FBWTtRQUE1QyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FDdEM7UUFGK0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQURuQyxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxnQkFBZ0IsR0FLdEQ7Ozs7SUFKQyxpQ0FBb0M7O0lBQ1gsb0NBQW1COzs7OztBQUs5Qzs7OztJQUVVLGdEQUFtQjtJQUUzQiw4QkFBbUIsT0FBVTtRQUE3QixZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FDckM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBRztRQURwQixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFQRCxDQUVVLG1CQUFtQixHQUs1Qjs7Ozs7OztJQUpDLG9DQUF1Qzs7SUFDM0IsdUNBQWlCOzs7OztBQUsvQjs7OztJQUVVLGdEQUFtQjtJQUUzQiw4QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxFQUFQLENBQU8sQ0FBQyxDQUFDLFNBQ3JEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FFVSxtQkFBbUIsR0FLNUI7Ozs7Ozs7SUFKQyxvQ0FBeUM7O0lBQzdCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQ09NUE9ORU5UX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NPTVBPTkVOVCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT01QT05FTlRfRkFJTCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NPTVBPTkVOVF9TVUNDRVNTID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9DT01QT05FTkVUX0ZST01fUEFHRSA9ICdbQ21zXSBHZXQgQ29tcG9uZW50IGZyb20gUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29tcG9uZW50IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTVBPTkVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29tcG9uZW50RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT01QT05FTlRfRkFJTDtcbiAgY29uc3RydWN0b3IodWlkOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCB1aWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29tcG9uZW50U3VjY2VzczxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT01QT05FTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldENvbXBvbmVudEZyb21QYWdlPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLm1hcChjbXAgPT4gY21wLnVpZCkpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ29tcG9uZW50XG4gIHwgTG9hZENvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IEdldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19