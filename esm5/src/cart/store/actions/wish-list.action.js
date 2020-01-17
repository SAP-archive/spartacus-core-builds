/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
/** @type {?} */
export var CREATE_WISH_LIST = '[Wish List] Create Wish List';
/** @type {?} */
export var CREATE_WISH_LIST_FAIL = '[Wish List] Create Wish List Fail';
/** @type {?} */
export var CREATE_WISH_LIST_SUCCESS = '[Wish List] Create Wish List Success';
/** @type {?} */
export var LOAD_WISH_LIST = '[Wish List] Load Wish List';
/** @type {?} */
export var LOAD_WISH_LIST_SUCCESS = '[Wish List] Load Wish List Success';
/** @type {?} */
export var RESET_WISH_LIST_DETAILS = '[Wish List] Reset Wish List';
var CreateWishList = /** @class */ (function () {
    function CreateWishList(payload) {
        this.payload = payload;
        this.type = CREATE_WISH_LIST;
    }
    return CreateWishList;
}());
export { CreateWishList };
if (false) {
    /** @type {?} */
    CreateWishList.prototype.type;
    /** @type {?} */
    CreateWishList.prototype.payload;
}
var CreateWishListSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CreateWishListSuccess, _super);
    function CreateWishListSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = CREATE_WISH_LIST_SUCCESS;
        return _this;
    }
    return CreateWishListSuccess;
}(EntitySuccessAction));
export { CreateWishListSuccess };
if (false) {
    /** @type {?} */
    CreateWishListSuccess.prototype.type;
    /** @type {?} */
    CreateWishListSuccess.prototype.payload;
}
var CreateWishListFail = /** @class */ (function (_super) {
    tslib_1.__extends(CreateWishListFail, _super);
    function CreateWishListFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = CREATE_WISH_LIST_FAIL;
        return _this;
    }
    return CreateWishListFail;
}(EntityFailAction));
export { CreateWishListFail };
if (false) {
    /** @type {?} */
    CreateWishListFail.prototype.type;
    /** @type {?} */
    CreateWishListFail.prototype.payload;
}
var LoadWishList = /** @class */ (function () {
    function LoadWishList(payload) {
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
    return LoadWishList;
}());
export { LoadWishList };
if (false) {
    /** @type {?} */
    LoadWishList.prototype.type;
    /** @type {?} */
    LoadWishList.prototype.payload;
}
var LoadWishListSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadWishListSuccess, _super);
    function LoadWishListSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = LOAD_WISH_LIST_SUCCESS;
        return _this;
    }
    return LoadWishListSuccess;
}(EntitySuccessAction));
export { LoadWishListSuccess };
if (false) {
    /** @type {?} */
    LoadWishListSuccess.prototype.type;
    /** @type {?} */
    LoadWishListSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyw4QkFBOEI7O0FBQzlELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxtQ0FBbUM7O0FBQ3hFLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxzQ0FBc0M7O0FBRTlFLE1BQU0sS0FBTyxjQUFjLEdBQUcsNEJBQTRCOztBQUMxRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsb0NBQW9DOztBQUUxRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsNkJBQTZCO0FBRXBFO0lBRUUsd0JBQ1MsT0FJTjtRQUpNLFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFPOUIsQ0FBQztJQUNOLHFCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQyw4QkFBaUM7O0lBRS9CLGlDQUlDOztBQUlMO0lBQTJDLGlEQUFtQjtJQUU1RCwrQkFBbUIsT0FBdUM7UUFBMUQsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUMzRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFnQztRQURqRCxVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxtQkFBbUIsR0FLN0Q7Ozs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUE4Qzs7QUFLNUQ7SUFBd0MsOENBQWdCO0lBRXRELDRCQUFtQixPQUF3QztRQUEzRCxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUN6RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFpQztRQURsRCxVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxnQkFBZ0IsR0FLdkQ7Ozs7SUFKQyxrQ0FBc0M7O0lBQzFCLHFDQUErQzs7QUFLN0Q7SUFFRSxzQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUNNLENBQUM7SUFDeEMsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDRCQUErQjs7SUFDbkIsK0JBQXNCOztBQUdwQztJQUF5QywrQ0FBbUI7SUFFMUQsNkJBQW1CLE9BQXdEO1FBQTNFLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FDM0U7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFEbEUsVUFBSSxHQUFHLHNCQUFzQixDQUFDOztJQUd2QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsbUJBQW1CLEdBSzNEOzs7O0lBSkMsbUNBQXVDOztJQUMzQixzQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfRkFJTCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUyA9ICdbV2lzaCBMaXN0XSBSZXNldCBXaXNoIExpc3QnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXNoTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXNoTGlzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfV0lTSF9MSVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdpc2hMaXN0QWN0aW9ucyA9XG4gIHwgQ3JlYXRlV2lzaExpc3RcbiAgfCBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3NcbiAgfCBDcmVhdGVXaXNoTGlzdEZhaWxcbiAgfCBMb2FkV2lzaExpc3RcbiAgfCBMb2FkV2lzaExpc3RTdWNjZXNzO1xuIl19