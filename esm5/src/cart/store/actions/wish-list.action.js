/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
import { FRESH_CART_ID } from './multi-cart.action';
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
        var _this = _super.call(this, MULTI_CART_FEATURE, FRESH_CART_ID) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXBELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyw4QkFBOEI7O0FBQzlELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxtQ0FBbUM7O0FBQ3hFLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxzQ0FBc0M7O0FBRTlFLE1BQU0sS0FBTyxjQUFjLEdBQUcsNEJBQTRCOztBQUMxRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsb0NBQW9DOztBQUUxRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsNkJBQTZCO0FBRXBFO0lBQW9DLDBDQUFnQjtJQUVsRCx3QkFDUyxPQUlOO1FBTEgsWUFPRSxrQkFBTSxrQkFBa0IsRUFBRSxhQUFhLENBQUMsU0FDekM7UUFQUSxhQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQVNqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBb0MsZ0JBQWdCLEdBV25EOzs7O0lBVkMsOEJBQWlDOztJQUUvQixpQ0FJQzs7QUFNTDtJQUEyQyxpREFBbUI7SUFFNUQsK0JBQW1CLE9BQXVDO1FBQTFELFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FDM0U7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBZ0M7UUFEakQsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsbUJBQW1CLEdBSzdEOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBOEM7O0FBSzVEO0lBQXdDLDhDQUFnQjtJQUV0RCw0QkFBbUIsT0FBd0M7UUFBM0QsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FDekQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFEbEQsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsZ0JBQWdCLEdBS3ZEOzs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBK0M7O0FBSzdEO0lBRUUsc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxjQUFjLENBQUM7SUFDTSxDQUFDO0lBQ3hDLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBK0I7O0lBQ25CLCtCQUFzQjs7QUFHcEM7SUFBeUMsK0NBQW1CO0lBRTFELDZCQUFtQixPQUF3RDtRQUEzRSxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQzNFO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWlEO1FBRGxFLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLG1CQUFtQixHQUszRDs7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQStEOztBQUs3RTtJQUEwQyxnREFBaUI7SUFFekQ7UUFBQSxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxTQUNyQztRQUhRLFVBQUksR0FBRyx1QkFBdUIsQ0FBQzs7SUFHeEMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTBDLGlCQUFpQixHQUsxRDs7OztJQUpDLG9DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBGUkVTSF9DQVJUX0lEIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfRkFJTCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUyA9ICdbV2lzaCBMaXN0XSBSZXNldCBXaXNoIExpc3QnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3QgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdpc2hMaXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdpc2hMaXN0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZzsgZXJyb3I/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzaExpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9XSVNIX0xJU1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRXaXNoTGlzdERldGFpbHMgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCB1bmRlZmluZWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdpc2hMaXN0QWN0aW9ucyA9XG4gIHwgQ3JlYXRlV2lzaExpc3RcbiAgfCBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3NcbiAgfCBDcmVhdGVXaXNoTGlzdEZhaWxcbiAgfCBMb2FkV2lzaExpc3RcbiAgfCBMb2FkV2lzaExpc3RTdWNjZXNzXG4gIHwgUmVzZXRXaXNoTGlzdERldGFpbHM7XG4iXX0=