/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
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
var CreateWishList = /** @class */ (function (_super) {
    tslib_1.__extends(CreateWishList, _super);
    function CreateWishList(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, 'fresh') || this;
        _this.payload = payload;
        _this.type = CREATE_WISH_LIST;
        return _this;
    }
    return CreateWishList;
}(EntityLoadAction));
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
var LoadWisthList = /** @class */ (function () {
    function LoadWisthList(payload) {
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
    return LoadWisthList;
}());
export { LoadWisthList };
if (false) {
    /** @type {?} */
    LoadWisthList.prototype.type;
    /** @type {?} */
    LoadWisthList.prototype.payload;
}
var LoadWisthListSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadWisthListSuccess, _super);
    function LoadWisthListSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = LOAD_WISH_LIST_SUCCESS;
        return _this;
    }
    return LoadWisthListSuccess;
}(EntitySuccessAction));
export { LoadWisthListSuccess };
if (false) {
    /** @type {?} */
    LoadWisthListSuccess.prototype.type;
    /** @type {?} */
    LoadWisthListSuccess.prototype.payload;
}
var ResetWishListDetails = /** @class */ (function (_super) {
    tslib_1.__extends(ResetWishListDetails, _super);
    function ResetWishListDetails() {
        var _this = _super.call(this, MULTI_CART_FEATURE, undefined) || this;
        _this.type = RESET_WISH_LIST_DETAILS;
        return _this;
    }
    return ResetWishListDetails;
}(EntityResetAction));
export { ResetWishListDetails };
if (false) {
    /** @type {?} */
    ResetWishListDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFekQsTUFBTSxLQUFPLGdCQUFnQixHQUFHLDhCQUE4Qjs7QUFDOUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLG1DQUFtQzs7QUFDeEUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLHNDQUFzQzs7QUFFOUUsTUFBTSxLQUFPLGNBQWMsR0FBRyw0QkFBNEI7O0FBQzFELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxvQ0FBb0M7O0FBRTFFLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyw2QkFBNkI7QUFFcEU7SUFBb0MsMENBQWdCO0lBRWxELHdCQUNTLE9BSU47UUFMSCxZQU9FLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUNuQztRQVBRLGFBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBU2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFYRCxDQUFvQyxnQkFBZ0IsR0FXbkQ7Ozs7SUFWQyw4QkFBaUM7O0lBRS9CLGlDQUlDOztBQU1MO0lBQTJDLGlEQUFtQjtJQUU1RCwrQkFBbUIsT0FBdUM7UUFBMUQsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUMzRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFnQztRQURqRCxVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxtQkFBbUIsR0FLN0Q7Ozs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUE4Qzs7QUFLNUQ7SUFBd0MsOENBQWdCO0lBRXRELDRCQUFtQixPQUF3QztRQUEzRCxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUN6RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFpQztRQURsRCxVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxnQkFBZ0IsR0FLdkQ7Ozs7SUFKQyxrQ0FBc0M7O0lBQzFCLHFDQUErQzs7QUFLN0Q7SUFFRSx1QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUNNLENBQUM7SUFDeEMsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDZCQUErQjs7SUFDbkIsZ0NBQXNCOztBQUdwQztJQUEwQyxnREFBbUI7SUFFM0QsOEJBQW1CLE9BQXdEO1FBQTNFLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FDM0U7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFEbEUsVUFBSSxHQUFHLHNCQUFzQixDQUFDOztJQUd2QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsbUJBQW1CLEdBSzVEOzs7O0lBSkMsb0NBQXVDOztJQUMzQix1Q0FBK0Q7O0FBSzdFO0lBQTBDLGdEQUFpQjtJQUV6RDtRQUFBLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsU0FBUyxDQUFDLFNBQ3JDO1FBSFEsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsaUJBQWlCLEdBSzFEOzs7O0lBSkMsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVF9GQUlMID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1dJU0hfTElTVCA9ICdbV2lzaCBMaXN0XSBMb2FkIFdpc2ggTGlzdCc7XG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBMb2FkIFdpc2ggTGlzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX1dJU0hfTElTVF9ERVRBSUxTID0gJ1tXaXNoIExpc3RdIFJlc2V0IFdpc2ggTGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCAnZnJlc2gnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXN0aExpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9XSVNIX0xJU1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzdGhMaXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0V2lzaExpc3REZXRhaWxzIGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfV0lTSF9MSVNUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgdW5kZWZpbmVkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXaXNoTGlzdEFjdGlvbnMgPVxuICB8IENyZWF0ZVdpc2hMaXN0XG4gIHwgQ3JlYXRlV2lzaExpc3RTdWNjZXNzXG4gIHwgQ3JlYXRlV2lzaExpc3RGYWlsXG4gIHwgTG9hZFdpc3RoTGlzdFxuICB8IExvYWRXaXN0aExpc3RTdWNjZXNzXG4gIHwgUmVzZXRXaXNoTGlzdERldGFpbHM7XG4iXX0=