/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NAVIGATION_DETAIL_ENTITY } from '../cms-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export var LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
export var LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
export var LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
var LoadNavigationItems = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNavigationItems, _super);
    function LoadNavigationItems(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS;
        return _this;
    }
    return LoadNavigationItems;
}(EntityLoadAction));
export { LoadNavigationItems };
if (false) {
    /** @type {?} */
    LoadNavigationItems.prototype.type;
    /** @type {?} */
    LoadNavigationItems.prototype.payload;
}
var LoadNavigationItemsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNavigationItemsFail, _super);
    function LoadNavigationItemsFail(nodeId, payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, nodeId, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS_FAIL;
        return _this;
    }
    return LoadNavigationItemsFail;
}(EntityFailAction));
export { LoadNavigationItemsFail };
if (false) {
    /** @type {?} */
    LoadNavigationItemsFail.prototype.type;
    /** @type {?} */
    LoadNavigationItemsFail.prototype.payload;
}
var LoadNavigationItemsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNavigationItemsSuccess, _super);
    function LoadNavigationItemsSuccess(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
        return _this;
    }
    return LoadNavigationItemsSuccess;
}(EntitySuccessAction));
export { LoadNavigationItemsSuccess };
if (false) {
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDOztBQUVqRSxNQUFNLEtBQU8scUJBQXFCLEdBQUcsa0NBQWtDOztBQUN2RSxNQUFNLEtBQU8sMEJBQTBCLEdBQ3JDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLDZCQUE2QixHQUN4QywwQ0FBMEM7QUFFNUM7SUFBeUMsK0NBQWdCO0lBRXZELDZCQUFtQixPQUF5QztRQUE1RCxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDaEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsZ0JBQWdCLEdBS3hEOzs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBZ0Q7O0FBSzlEO0lBQTZDLG1EQUFnQjtJQUUzRCxpQ0FBWSxNQUFjLEVBQVMsT0FBWTtRQUEvQyxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FDakQ7UUFGa0MsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QyxVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2QyxnQkFBZ0IsR0FLNUQ7Ozs7SUFKQyx1Q0FBMkM7O0lBQ2YsMENBQW1COztBQUtqRDtJQUFnRCxzREFBbUI7SUFFakUsb0NBQW1CLE9BQThDO1FBQWpFLFlBQ0Usa0JBQU0sd0JBQXdCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUNoRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUF1QztRQUR4RCxVQUFJLEdBQUcsNkJBQTZCLENBQUM7O0lBRzlDLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFMRCxDQUFnRCxtQkFBbUIsR0FLbEU7Ozs7SUFKQywwQ0FBOEM7O0lBQ2xDLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfTkFWSUdBVElPTl9JVEVNUyA9ICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyc7XG5leHBvcnQgY29uc3QgTE9BRF9OQVZJR0FUSU9OX0lURU1TX0ZBSUwgPVxuICAnW0Ntc10gTG9hZCBOYXZpZ2F0aW9uRW50cnkgaXRlbXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9OQVZJR0FUSU9OX0lURU1TX1NVQ0NFU1MgPVxuICAnW0Ntc10gTG9hZCBOYXZpZ2F0aW9uRW50cnkgaXRlbXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkTmF2aWdhdGlvbkl0ZW1zIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05BVklHQVRJT05fSVRFTVM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IG5vZGVJZDogc3RyaW5nOyBpdGVtczogYW55W10gfSkge1xuICAgIHN1cGVyKE5BVklHQVRJT05fREVUQUlMX0VOVElUWSwgcGF5bG9hZC5ub2RlSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9OQVZJR0FUSU9OX0lURU1TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKG5vZGVJZDogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBub2RlSWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9OQVZJR0FUSU9OX0lURU1TX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IG5vZGVJZDogc3RyaW5nOyBjb21wb25lbnRzOiBhbnlbXSB9KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLm5vZGVJZCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBOYXZpZ2F0aW9uRW50cnlJdGVtQWN0aW9uID1cbiAgfCBMb2FkTmF2aWdhdGlvbkl0ZW1zXG4gIHwgTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWxcbiAgfCBMb2FkTmF2aWdhdGlvbkl0ZW1zU3VjY2VzcztcbiJdfQ==