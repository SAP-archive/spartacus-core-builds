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
    function LoadComponentSuccess(payload, uid) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid || payload.uid || '') || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLEtBQU8sY0FBYyxHQUFHLHNCQUFzQjs7QUFDcEQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLDhCQUE4Qjs7QUFDcEUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLCtCQUErQjtBQUV2RTtJQUFtQyx5Q0FBZ0I7SUFFakQsdUJBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsU0FDakM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsY0FBYyxDQUFDOztJQUcvQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsZ0JBQWdCLEdBS2xEOzs7O0lBSkMsNkJBQStCOztJQUNuQixnQ0FBc0I7O0FBS3BDO0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFBWSxHQUFXLEVBQVMsT0FBWTtRQUE1QyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FDdEM7UUFGK0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQURuQyxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxnQkFBZ0IsR0FLdEQ7Ozs7SUFKQyxpQ0FBb0M7O0lBQ1gsb0NBQW1COzs7OztBQUs5Qzs7OztJQUVVLGdEQUFtQjtJQUUzQiw4QkFBbUIsT0FBVSxFQUFFLEdBQVk7UUFBM0MsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FDbEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBRztRQURwQixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFQRCxDQUVVLG1CQUFtQixHQUs1Qjs7Ozs7OztJQUpDLG9DQUF1Qzs7SUFDM0IsdUNBQWlCOzs7OztBQUsvQjs7OztJQUVVLGdEQUFtQjtJQUUzQiw4QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxFQUFQLENBQU8sQ0FBQyxDQUFDLFNBQ3JEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FFVSxtQkFBbUIsR0FLNUI7Ozs7Ozs7SUFKQyxvQ0FBeUM7O0lBQzdCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IENPTVBPTkVOVF9FTlRJVFkgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DT01QT05FTlQgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ09NUE9ORU5UX0ZBSUwgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT01QT05FTlRfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfQ09NUE9ORU5FVF9GUk9NX1BBR0UgPSAnW0Ntc10gR2V0IENvbXBvbmVudCBmcm9tIFBhZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENvbXBvbmVudCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT01QT05FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvbXBvbmVudEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09NUE9ORU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgdWlkLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvbXBvbmVudFN1Y2Nlc3M8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBULCB1aWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCB1aWQgfHwgcGF5bG9hZC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgcGF5bG9hZC5tYXAoY21wID0+IGNtcC51aWQpKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENvbXBvbmVudEFjdGlvbjxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PiA9XG4gIHwgTG9hZENvbXBvbmVudFxuICB8IExvYWRDb21wb25lbnRGYWlsXG4gIHwgTG9hZENvbXBvbmVudFN1Y2Nlc3M8VD5cbiAgfCBHZXRDb21wb25lbnRGcm9tUGFnZTxUPjtcbiJdfQ==