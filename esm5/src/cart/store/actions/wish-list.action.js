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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyw4QkFBOEI7O0FBQzlELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxtQ0FBbUM7O0FBQ3hFLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxzQ0FBc0M7O0FBRTlFLE1BQU0sS0FBTyxjQUFjLEdBQUcsNEJBQTRCOztBQUMxRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsb0NBQW9DOztBQUUxRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsNkJBQTZCO0FBRXBFO0lBRUUsd0JBQ1MsT0FJTjtRQUpNLFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFPOUIsQ0FBQztJQUNOLHFCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQyw4QkFBaUM7O0lBRS9CLGlDQUlDOztBQUlMO0lBQTJDLGlEQUFtQjtJQUU1RCwrQkFBbUIsT0FBdUM7UUFBMUQsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUMzRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFnQztRQURqRCxVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxtQkFBbUIsR0FLN0Q7Ozs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUE4Qzs7QUFLNUQ7SUFBd0MsOENBQWdCO0lBRXRELDRCQUFtQixPQUF3QztRQUEzRCxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUN6RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFpQztRQURsRCxVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxnQkFBZ0IsR0FLdkQ7Ozs7SUFKQyxrQ0FBc0M7O0lBQzFCLHFDQUErQzs7QUFLN0Q7SUFFRSxzQkFBbUIsT0FBK0M7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0M7UUFEekQsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUNzQyxDQUFDO0lBQ3hFLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBK0I7O0lBQ25CLCtCQUFzRDs7QUFHcEU7SUFBeUMsK0NBQW1CO0lBRTFELDZCQUFtQixPQUF3RDtRQUEzRSxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQzNFO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWlEO1FBRGxFLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLG1CQUFtQixHQUszRDs7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUX0ZBSUwgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIExvYWQgV2lzaCBMaXN0JztcbmV4cG9ydCBjb25zdCBMT0FEX1dJU0hfTElTVF9TVUNDRVNTID0gJ1tXaXNoIExpc3RdIExvYWQgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfV0lTSF9MSVNUX0RFVEFJTFMgPSAnW1dpc2ggTGlzdF0gUmVzZXQgV2lzaCBMaXN0JztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdpc2hMaXN0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXNoTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGN1c3RvbWVySWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFdpc2hMaXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2lzaExpc3RBY3Rpb25zID1cbiAgfCBDcmVhdGVXaXNoTGlzdFxuICB8IENyZWF0ZVdpc2hMaXN0U3VjY2Vzc1xuICB8IENyZWF0ZVdpc2hMaXN0RmFpbFxuICB8IExvYWRXaXNoTGlzdFxuICB8IExvYWRXaXNoTGlzdFN1Y2Nlc3M7XG4iXX0=