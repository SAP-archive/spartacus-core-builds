/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
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
}(EntityLoadAction));
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
}(EntityFailAction));
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
}(EntitySuccessAction));
export { LoadCmsNavigationItemsSuccess };
if (false) {
    /** @type {?} */
    LoadCmsNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadCmsNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUV4RCxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7QUFFNUM7SUFBNEMsa0RBQWdCO0lBRTFELGdDQUFtQixPQUF5QztRQUE1RCxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDaEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsZ0JBQWdCLEdBSzNEOzs7O0lBSkMsc0NBQTBDOztJQUM5Qix5Q0FBZ0Q7O0FBSzlEO0lBQWdELHNEQUFnQjtJQUU5RCxvQ0FBWSxNQUFjLEVBQVMsT0FBWTtRQUEvQyxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FDakQ7UUFGa0MsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QyxVQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBRy9DLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFMRCxDQUFnRCxnQkFBZ0IsR0FLL0Q7Ozs7SUFKQywwQ0FBK0M7O0lBQ25CLDZDQUFtQjs7QUFLakQ7SUFBbUQseURBQW1CO0lBRXBFLHVDQUFtQixPQUE4QztRQUFqRSxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDaEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBdUM7UUFEeEQsVUFBSSxHQUFHLGlDQUFpQyxDQUFDOztJQUdsRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsbUJBQW1CLEdBS3JFOzs7O0lBSkMsNkNBQWtEOztJQUN0QyxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TID0gJ1tDbXNdIExvYWQgTmF2aWdhdGlvbkVudHJ5IGl0ZW1zJztcbmV4cG9ydCBjb25zdCBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TX0ZBSUwgPVxuICAnW0Ntc10gTG9hZCBOYXZpZ2F0aW9uRW50cnkgaXRlbXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNU19TVUNDRVNTID1cbiAgJ1tDbXNdIExvYWQgTmF2aWdhdGlvbkVudHJ5IGl0ZW1zIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENtc05hdmlnYXRpb25JdGVtcyBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLm5vZGVJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKG5vZGVJZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBub2RlSWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBub2RlSWQ6IHN0cmluZzsgY29tcG9uZW50czogYW55W10gfSkge1xuICAgIHN1cGVyKE5BVklHQVRJT05fREVUQUlMX0VOVElUWSwgcGF5bG9hZC5ub2RlSWQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zTmF2aWdhdGlvbkVudHJ5SXRlbUFjdGlvbiA9XG4gIHwgTG9hZENtc05hdmlnYXRpb25JdGVtc1xuICB8IExvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsXG4gIHwgTG9hZENtc05hdmlnYXRpb25JdGVtc1N1Y2Nlc3M7XG4iXX0=