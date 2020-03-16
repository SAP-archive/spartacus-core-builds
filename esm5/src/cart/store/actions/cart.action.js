import { __extends } from "tslib";
import { StateLoaderActions } from '../../../state/utils/index';
import { CART_DATA } from '../cart-state';
export var CREATE_CART = '[Cart] Create Cart';
export var CREATE_CART_FAIL = '[Cart] Create Cart Fail';
export var CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
export var LOAD_CART = '[Cart] Load Cart';
export var LOAD_CART_FAIL = '[Cart] Load Cart Fail';
export var LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
export var ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
export var ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
export var ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
export var MERGE_CART = '[Cart] Merge Cart';
export var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
export var RESET_CART_DETAILS = '[Cart] Reset Cart Details';
export var CLEAR_EXPIRED_COUPONS = '[Cart] Clear Expired Coupon';
export var CLEAR_CART = '[Cart] Clear Cart';
export var DELETE_CART = '[Cart] Delete Cart';
export var DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
var CreateCart = /** @class */ (function (_super) {
    __extends(CreateCart, _super);
    function CreateCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART;
        return _this;
    }
    return CreateCart;
}(StateLoaderActions.LoaderLoadAction));
export { CreateCart };
var CreateCartFail = /** @class */ (function (_super) {
    __extends(CreateCartFail, _super);
    function CreateCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_FAIL;
        return _this;
    }
    return CreateCartFail;
}(StateLoaderActions.LoaderFailAction));
export { CreateCartFail };
var CreateCartSuccess = /** @class */ (function (_super) {
    __extends(CreateCartSuccess, _super);
    function CreateCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_SUCCESS;
        return _this;
    }
    return CreateCartSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { CreateCartSuccess };
var AddEmailToCart = /** @class */ (function (_super) {
    __extends(AddEmailToCart, _super);
    function AddEmailToCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART;
        return _this;
    }
    return AddEmailToCart;
}(StateLoaderActions.LoaderLoadAction));
export { AddEmailToCart };
var AddEmailToCartFail = /** @class */ (function (_super) {
    __extends(AddEmailToCartFail, _super);
    function AddEmailToCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_FAIL;
        return _this;
    }
    return AddEmailToCartFail;
}(StateLoaderActions.LoaderFailAction));
export { AddEmailToCartFail };
var AddEmailToCartSuccess = /** @class */ (function (_super) {
    __extends(AddEmailToCartSuccess, _super);
    function AddEmailToCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_SUCCESS;
        return _this;
    }
    return AddEmailToCartSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { AddEmailToCartSuccess };
var LoadCart = /** @class */ (function (_super) {
    __extends(LoadCart, _super);
    function LoadCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CART;
        return _this;
    }
    return LoadCart;
}(StateLoaderActions.LoaderLoadAction));
export { LoadCart };
var LoadCartFail = /** @class */ (function (_super) {
    __extends(LoadCartFail, _super);
    function LoadCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_FAIL;
        return _this;
    }
    return LoadCartFail;
}(StateLoaderActions.LoaderFailAction));
export { LoadCartFail };
var LoadCartSuccess = /** @class */ (function (_super) {
    __extends(LoadCartSuccess, _super);
    function LoadCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_SUCCESS;
        return _this;
    }
    return LoadCartSuccess;
}(StateLoaderActions.LoaderSuccessAction));
export { LoadCartSuccess };
var MergeCart = /** @class */ (function () {
    function MergeCart(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
    return MergeCart;
}());
export { MergeCart };
var MergeCartSuccess = /** @class */ (function () {
    function MergeCartSuccess(payload) {
        this.payload = payload;
        this.type = MERGE_CART_SUCCESS;
    }
    return MergeCartSuccess;
}());
export { MergeCartSuccess };
var ResetCartDetails = /** @class */ (function () {
    function ResetCartDetails() {
        this.type = RESET_CART_DETAILS;
    }
    return ResetCartDetails;
}());
export { ResetCartDetails };
var ClearExpiredCoupons = /** @class */ (function () {
    function ClearExpiredCoupons(payload) {
        this.payload = payload;
        this.type = CLEAR_EXPIRED_COUPONS;
    }
    return ClearExpiredCoupons;
}());
export { ClearExpiredCoupons };
var ClearCart = /** @class */ (function (_super) {
    __extends(ClearCart, _super);
    function ClearCart() {
        var _this = _super.call(this, CART_DATA) || this;
        _this.type = CLEAR_CART;
        return _this;
    }
    return ClearCart;
}(StateLoaderActions.LoaderResetAction));
export { ClearCart };
var DeleteCart = /** @class */ (function (_super) {
    __extends(DeleteCart, _super);
    function DeleteCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = DELETE_CART;
        return _this;
    }
    return DeleteCart;
}(StateLoaderActions.LoaderLoadAction));
export { DeleteCart };
var DeleteCartFail = /** @class */ (function (_super) {
    __extends(DeleteCartFail, _super);
    function DeleteCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_CART_FAIL;
        return _this;
    }
    return DeleteCartFail;
}(StateLoaderActions.LoaderFailAction));
export { DeleteCartFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztBQUNoRCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUMxRCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyw0QkFBNEIsQ0FBQztBQUVoRSxNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsTUFBTSxDQUFDLElBQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDO0FBQ3RELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDBCQUEwQixDQUFDO0FBRTVELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDBCQUEwQixDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLCtCQUErQixDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLGtDQUFrQyxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQztBQUM5QyxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQztBQUU5RCxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQztBQUU5RCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyw2QkFBNkIsQ0FBQztBQUVuRSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUM7QUFFOUMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDO0FB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QUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGtCQUFrQixDQUFDLGdCQUFnQixHQUt0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlQgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0FSVCA9ICdbQ2FydF0gTG9hZCBDYXJ0JztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfRkFJTCA9ICdbQ2FydF0gTG9hZCBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBMb2FkIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fQ0FSVCA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19DQVJUX0ZBSUwgPSAnW0NhcnRdIEFkZCBFbWFpbCB0byBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIEFkZCBFbWFpbCB0byBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTUVSR0VfQ0FSVCA9ICdbQ2FydF0gTWVyZ2UgQ2FydCc7XG5leHBvcnQgY29uc3QgTUVSR0VfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBNZXJnZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVF9ERVRBSUxTID0gJ1tDYXJ0XSBSZXNldCBDYXJ0IERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfRVhQSVJFRF9DT1VQT05TID0gJ1tDYXJ0XSBDbGVhciBFeHBpcmVkIENvdXBvbic7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DQVJUID0gJ1tDYXJ0XSBDbGVhciBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9DQVJUID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBUlRfRkFJTCA9ICdbQ2FydF0gRGVsZXRlIENhcnQgRmFpbCc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvQ2FydCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvQ2FydEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfVxuICApIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJ0U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZUNhcnRTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IHVzZXJJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldENhcnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJFeHBpcmVkQ291cG9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9FWFBJUkVEX0NPVVBPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0FSVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2FydCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNhcnRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FydEFjdGlvbiA9XG4gIHwgQ3JlYXRlQ2FydFxuICB8IENyZWF0ZUNhcnRGYWlsXG4gIHwgQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgfCBMb2FkQ2FydFxuICB8IExvYWRDYXJ0RmFpbFxuICB8IExvYWRDYXJ0U3VjY2Vzc1xuICB8IE1lcmdlQ2FydFxuICB8IE1lcmdlQ2FydFN1Y2Nlc3NcbiAgfCBSZXNldENhcnREZXRhaWxzXG4gIHwgQWRkRW1haWxUb0NhcnRcbiAgfCBBZGRFbWFpbFRvQ2FydEZhaWxcbiAgfCBBZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgfCBEZWxldGVDYXJ0XG4gIHwgRGVsZXRlQ2FydEZhaWxcbiAgfCBDbGVhckV4cGlyZWRDb3Vwb25zXG4gIHwgQ2xlYXJDYXJ0O1xuIl19