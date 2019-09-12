/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { NAVIGATION_DETAIL_ENTITY } from '../cms-state';
/** @type {?} */
export var LOAD_CMS_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
export var LOAD_CMS_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
export var LOAD_CMS_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
var LoadCmsNavigationItems = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsNavigationItems, _super);
    function LoadCmsNavigationItems(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_NAVIGATION_ITEMS;
        return _this;
    }
    return LoadCmsNavigationItems;
}(StateEntityLoaderActions.EntityLoadAction));
export { LoadCmsNavigationItems };
if (false) {
    /** @type {?} */
    LoadCmsNavigationItems.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItems.prototype.payload;
}
var LoadCmsNavigationItemsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsNavigationItemsFail, _super);
    function LoadCmsNavigationItemsFail(nodeId, payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, nodeId, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_NAVIGATION_ITEMS_FAIL;
        return _this;
    }
    return LoadCmsNavigationItemsFail;
}(StateEntityLoaderActions.EntityFailAction));
export { LoadCmsNavigationItemsFail };
if (false) {
    /** @type {?} */
    LoadCmsNavigationItemsFail.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItemsFail.prototype.payload;
}
var LoadCmsNavigationItemsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCmsNavigationItemsSuccess, _super);
    function LoadCmsNavigationItemsSuccess(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_NAVIGATION_ITEMS_SUCCESS;
        return _this;
    }
    return LoadCmsNavigationItemsSuccess;
}(StateEntityLoaderActions.EntitySuccessAction));
export { LoadCmsNavigationItemsSuccess };
if (false) {
    /** @type {?} */
    LoadCmsNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUV4RCxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7QUFFNUM7SUFBNEMsa0RBQXlDO0lBRW5GLGdDQUFtQixPQUF5QztRQUE1RCxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDaEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsd0JBQXdCLENBQUMsZ0JBQWdCLEdBS3BGOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBZ0Q7O0FBSzlEO0lBQWdELHNEQUF5QztJQUV2RixvQ0FBWSxNQUFjLEVBQVMsT0FBWTtRQUEvQyxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FDakQ7UUFGa0MsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QyxVQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBRy9DLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFMRCxDQUFnRCx3QkFBd0IsQ0FBQyxnQkFBZ0IsR0FLeEY7Ozs7SUFKQywwQ0FBK0M7O0lBQ25CLDZDQUFtQjs7QUFLakQ7SUFBbUQseURBQTRDO0lBRTdGLHVDQUFtQixPQUE4QztRQUFqRSxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDaEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBdUM7UUFEeEQsVUFBSSxHQUFHLGlDQUFpQyxDQUFDOztJQUdsRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsd0JBQXdCLENBQUMsbUJBQW1CLEdBSzlGOzs7O0lBSkMsNkNBQWtEOztJQUN0QyxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFkgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNUyA9ICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNU19GQUlMID1cbiAgJ1tDbXNdIExvYWQgTmF2aWdhdGlvbkVudHJ5IGl0ZW1zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUyA9XG4gICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNOYXZpZ2F0aW9uSXRlbXMgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBub2RlSWQ6IHN0cmluZzsgaXRlbXM6IGFueVtdIH0pIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIHBheWxvYWQubm9kZUlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKG5vZGVJZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBub2RlSWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGNvbXBvbmVudHM6IGFueVtdIH0pIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIHBheWxvYWQubm9kZUlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc05hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb24gPVxuICB8IExvYWRDbXNOYXZpZ2F0aW9uSXRlbXNcbiAgfCBMb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbFxuICB8IExvYWRDbXNOYXZpZ2F0aW9uSXRlbXNTdWNjZXNzO1xuIl19