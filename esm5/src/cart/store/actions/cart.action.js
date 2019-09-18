/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
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
export var ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
/** @type {?} */
export var ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
/** @type {?} */
export var ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
/** @type {?} */
export var MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
export var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
/** @type {?} */
export var RESET_CART_DETAILS = '[Cart] Reset Cart Details';
/** @type {?} */
export var CLEAR_CART = '[Cart] Clear Cart';
/** @type {?} */
export var DELETE_CART = '[Cart] Delete Cart';
/** @type {?} */
export var DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
var CreateCart = /** @class */ (function (_super) {
    tslib_1.__extends(CreateCart, _super);
    function CreateCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART;
        return _this;
    }
    return CreateCart;
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
export { CreateCartSuccess };
if (false) {
    /** @type {?} */
    CreateCartSuccess.prototype.type;
    /** @type {?} */
    CreateCartSuccess.prototype.payload;
}
var AddEmailToCart = /** @class */ (function (_super) {
    tslib_1.__extends(AddEmailToCart, _super);
    function AddEmailToCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART;
        return _this;
    }
    return AddEmailToCart;
}(StateLoaderActions.LoaderLoadAction));
export { AddEmailToCart };
if (false) {
    /** @type {?} */
    AddEmailToCart.prototype.type;
    /** @type {?} */
    AddEmailToCart.prototype.payload;
}
var AddEmailToCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(AddEmailToCartFail, _super);
    function AddEmailToCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_FAIL;
        return _this;
    }
    return AddEmailToCartFail;
}(StateLoaderActions.LoaderFailAction));
export { AddEmailToCartFail };
if (false) {
    /** @type {?} */
    AddEmailToCartFail.prototype.type;
    /** @type {?} */
    AddEmailToCartFail.prototype.payload;
}
var AddEmailToCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(AddEmailToCartSuccess, _super);
    function AddEmailToCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_SUCCESS;
        return _this;
    }
    return AddEmailToCartSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { AddEmailToCartSuccess };
if (false) {
    /** @type {?} */
    AddEmailToCartSuccess.prototype.type;
    /** @type {?} */
    AddEmailToCartSuccess.prototype.payload;
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
}(StateLoaderActions.LoaderLoadAction));
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
}(StateLoaderActions.LoaderFailAction));
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
}(StateLoaderActions.LoaderSuccessAction));
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
    function MergeCartSuccess(payload) {
        this.payload = payload;
        this.type = MERGE_CART_SUCCESS;
    }
    return MergeCartSuccess;
}());
export { MergeCartSuccess };
if (false) {
    /** @type {?} */
    MergeCartSuccess.prototype.type;
    /** @type {?} */
    MergeCartSuccess.prototype.payload;
}
var ResetCartDetails = /** @class */ (function () {
    function ResetCartDetails() {
        this.type = RESET_CART_DETAILS;
    }
    return ResetCartDetails;
}());
export { ResetCartDetails };
if (false) {
    /** @type {?} */
    ResetCartDetails.prototype.type;
}
var ClearCart = /** @class */ (function (_super) {
    tslib_1.__extends(ClearCart, _super);
    function ClearCart() {
        var _this = _super.call(this, CART_DATA) || this;
        _this.type = CLEAR_CART;
        return _this;
    }
    return ClearCart;
}(StateLoaderActions.LoaderResetAction));
export { ClearCart };
if (false) {
    /** @type {?} */
    ClearCart.prototype.type;
}
var DeleteCart = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteCart, _super);
    function DeleteCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = DELETE_CART;
        return _this;
    }
    return DeleteCart;
}(StateLoaderActions.LoaderLoadAction));
export { DeleteCart };
if (false) {
    /** @type {?} */
    DeleteCart.prototype.type;
    /** @type {?} */
    DeleteCart.prototype.payload;
}
var DeleteCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteCartFail, _super);
    function DeleteCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_CART_FAIL;
        return _this;
    }
    return DeleteCartFail;
}(StateLoaderActions.LoaderFailAction));
export { DeleteCartFail };
if (false) {
    /** @type {?} */
    DeleteCartFail.prototype.type;
    /** @type {?} */
    DeleteCartFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBRS9ELE1BQU0sS0FBTyxTQUFTLEdBQUcsa0JBQWtCOztBQUMzQyxNQUFNLEtBQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFFM0QsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFDM0QsTUFBTSxLQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFDckUsTUFBTSxLQUFPLHlCQUF5QixHQUFHLGtDQUFrQzs7QUFFM0UsTUFBTSxLQUFPLFVBQVUsR0FBRyxtQkFBbUI7O0FBQzdDLE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBRTdELE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBRTdELE1BQU0sS0FBTyxVQUFVLEdBQUcsbUJBQW1COztBQUU3QyxNQUFNLEtBQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxLQUFPLGdCQUFnQixHQUFHLHlCQUF5QjtBQUV6RDtJQUFnQyxzQ0FBbUM7SUFFakUsb0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsV0FBVyxDQUFDOztJQUc1QixDQUFD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ckUsd0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQUdqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBb0Msa0JBQWtCLENBQUMsZ0JBQWdCLEdBS3RFOzs7O0lBSkMsOEJBQWlDOztJQUNyQixpQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDQVJUX0RBVEEgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlRfRkFJTCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlQgPSAnW0NhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX0ZBSUwgPSAnW0NhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlQgPSAnW0NhcnRdIEFkZCBFbWFpbCB0byBDYXJ0JztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fQ0FSVF9GQUlMID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IE1FUkdFX0NBUlQgPSAnW0NhcnRdIE1lcmdlIENhcnQnO1xuZXhwb3J0IGNvbnN0IE1FUkdFX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gTWVyZ2UgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlRfREVUQUlMUyA9ICdbQ2FydF0gUmVzZXQgQ2FydCBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlQgPSAnW0NhcnRdIENsZWFyIENhcnQnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBUlQgPSAnW0NhcnRdIERlbGV0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBGYWlsJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldENhcnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVDYXJ0RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPVxuICB8IENyZWF0ZUNhcnRcbiAgfCBDcmVhdGVDYXJ0RmFpbFxuICB8IENyZWF0ZUNhcnRTdWNjZXNzXG4gIHwgTG9hZENhcnRcbiAgfCBMb2FkQ2FydEZhaWxcbiAgfCBMb2FkQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZUNhcnRcbiAgfCBNZXJnZUNhcnRTdWNjZXNzXG4gIHwgUmVzZXRDYXJ0RGV0YWlsc1xuICB8IENsZWFyQ2FydFxuICB8IEFkZEVtYWlsVG9DYXJ0XG4gIHwgQWRkRW1haWxUb0NhcnRGYWlsXG4gIHwgQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gIHwgRGVsZXRlQ2FydFxuICB8IERlbGV0ZUNhcnRGYWlsO1xuIl19