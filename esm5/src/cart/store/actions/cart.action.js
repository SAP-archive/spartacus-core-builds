/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { CART_DATA } from '../cart-state';
/** @type {?} */
export var CREATE_CART = '[Cart] Create Cart';
/** @type {?} */
export var CREATE_CART_FAIL = '[Cart] Create Cart Fail';
/** @type {?} */
export var CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
/** @type {?} */
export var LOAD_CART = '[Cart] Load Cart';
/** @type {?} */
export var LOAD_CART_FAIL = '[Cart] Load Cart Fail';
/** @type {?} */
export var LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
/** @type {?} */
export var MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
export var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
var CreateCart = /** @class */ (function (_super) {
    tslib_1.__extends(CreateCart, _super);
    function CreateCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART;
        return _this;
    }
    return CreateCart;
}(LoaderLoadAction));
export { CreateCart };
if (false) {
    /** @type {?} */
    CreateCart.prototype.type;
    /** @type {?} */
    CreateCart.prototype.payload;
}
var CreateCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(CreateCartFail, _super);
    function CreateCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_FAIL;
        return _this;
    }
    return CreateCartFail;
}(LoaderFailAction));
export { CreateCartFail };
if (false) {
    /** @type {?} */
    CreateCartFail.prototype.type;
    /** @type {?} */
    CreateCartFail.prototype.payload;
}
var CreateCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CreateCartSuccess, _super);
    function CreateCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_SUCCESS;
        return _this;
    }
    return CreateCartSuccess;
}(LoaderSuccessAction));
export { CreateCartSuccess };
if (false) {
    /** @type {?} */
    CreateCartSuccess.prototype.type;
    /** @type {?} */
    CreateCartSuccess.prototype.payload;
}
var LoadCart = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCart, _super);
    function LoadCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CART;
        return _this;
    }
    return LoadCart;
}(LoaderLoadAction));
export { LoadCart };
if (false) {
    /** @type {?} */
    LoadCart.prototype.type;
    /** @type {?} */
    LoadCart.prototype.payload;
}
var LoadCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCartFail, _super);
    function LoadCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_FAIL;
        return _this;
    }
    return LoadCartFail;
}(LoaderFailAction));
export { LoadCartFail };
if (false) {
    /** @type {?} */
    LoadCartFail.prototype.type;
    /** @type {?} */
    LoadCartFail.prototype.payload;
}
var LoadCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCartSuccess, _super);
    function LoadCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_SUCCESS;
        return _this;
    }
    return LoadCartSuccess;
}(LoaderSuccessAction));
export { LoadCartSuccess };
if (false) {
    /** @type {?} */
    LoadCartSuccess.prototype.type;
    /** @type {?} */
    LoadCartSuccess.prototype.payload;
}
var MergeCart = /** @class */ (function () {
    function MergeCart(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
    return MergeCart;
}());
export { MergeCart };
if (false) {
    /** @type {?} */
    MergeCart.prototype.type;
    /** @type {?} */
    MergeCart.prototype.payload;
}
var MergeCartSuccess = /** @class */ (function () {
    function MergeCartSuccess() {
        this.type = MERGE_CART_SUCCESS;
    }
    return MergeCartSuccess;
}());
export { MergeCartSuccess };
if (false) {
    /** @type {?} */
    MergeCartSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBRS9ELE1BQU0sS0FBTyxTQUFTLEdBQUcsa0JBQWtCOztBQUMzQyxNQUFNLEtBQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFFM0QsTUFBTSxLQUFPLFVBQVUsR0FBRyxtQkFBbUI7O0FBQzdDLE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7QUFFN0Q7SUFBZ0Msc0NBQWdCO0lBRTlDLG9CQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLFdBQVcsQ0FBQzs7SUFHNUIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQWdDLGdCQUFnQixHQUsvQzs7OztJQUpDLDBCQUE0Qjs7SUFDaEIsNkJBQW1COztBQUtqQztJQUFvQywwQ0FBZ0I7SUFFbEQsd0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQUdqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBb0MsZ0JBQWdCLEdBS25EOzs7O0lBSkMsOEJBQWlDOztJQUNyQixpQ0FBbUI7O0FBS2pDO0lBQXVDLDZDQUFtQjtJQUV4RCwyQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFHcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVDLG1CQUFtQixHQUt6RDs7OztJQUpDLGlDQUFvQzs7SUFDeEIsb0NBQW1COztBQUtqQztJQUE4QixvQ0FBZ0I7SUFFNUMsa0JBQ1MsT0FBOEQ7UUFEdkUsWUFHRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxVQUFJLEdBQUcsU0FBUyxDQUFDOztJQUsxQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFQRCxDQUE4QixnQkFBZ0IsR0FPN0M7Ozs7SUFOQyx3QkFBMEI7O0lBRXhCLDJCQUFxRTs7QUFNekU7SUFBa0Msd0NBQWdCO0lBRWhELHNCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxjQUFjLENBQUM7O0lBRy9CLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyxnQkFBZ0IsR0FLakQ7Ozs7SUFKQyw0QkFBK0I7O0lBQ25CLCtCQUFtQjs7QUFLakM7SUFBcUMsMkNBQW1CO0lBRXRELHlCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsbUJBQW1CLEdBS3ZEOzs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDO0lBRUUsbUJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxVQUFVLENBQUM7SUFDTyxDQUFDO0lBQ3JDLGdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyx5QkFBMkI7O0lBQ2YsNEJBQW1COztBQUdqQztJQUVFO1FBRFMsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ3BCLENBQUM7SUFDbEIsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlQgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0FSVCA9ICdbQ2FydF0gTG9hZCBDYXJ0JztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfRkFJTCA9ICdbQ2FydF0gTG9hZCBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBMb2FkIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUID0gJ1tDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0IGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydCBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGRldGFpbHM/OiBib29sZWFuIH1cbiAgKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJ0U3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlQ2FydFN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPVxuICB8IENyZWF0ZUNhcnRcbiAgfCBDcmVhdGVDYXJ0RmFpbFxuICB8IENyZWF0ZUNhcnRTdWNjZXNzXG4gIHwgTG9hZENhcnRcbiAgfCBMb2FkQ2FydEZhaWxcbiAgfCBMb2FkQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZUNhcnRcbiAgfCBNZXJnZUNhcnRTdWNjZXNzO1xuIl19