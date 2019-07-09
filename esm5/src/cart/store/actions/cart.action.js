/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
export var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
/** @type {?} */
export var RESET_CART_DETAILS = '[Cart] Reset Cart Details';
/** @type {?} */
export var CLEAR_CART = '[Cart] Clear Cart';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyw0QkFBNEI7O0FBRS9ELE1BQU0sS0FBTyxTQUFTLEdBQUcsa0JBQWtCOztBQUMzQyxNQUFNLEtBQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFFM0QsTUFBTSxLQUFPLFVBQVUsR0FBRyxtQkFBbUI7O0FBQzdDLE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBRTdELE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBRTdELE1BQU0sS0FBTyxVQUFVLEdBQUcsbUJBQW1CO0FBRTdDO0lBQWdDLHNDQUFtQztJQUVqRSxvQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBRzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUFnQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLbEU7Ozs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFtQjs7QUFLakM7SUFBb0MsMENBQW1DO0lBRXJFLHdCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9DLGtCQUFrQixDQUFDLGdCQUFnQixHQUt0RTs7OztJQUpDLDhCQUFpQzs7SUFDckIsaUNBQW1COztBQUtqQztJQUF1Qyw2Q0FBc0M7SUFFM0UsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLNUU7Ozs7SUFKQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFLakM7SUFBOEIsb0NBQW1DO0lBRS9ELGtCQUFtQixPQUEyQztRQUE5RCxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcsU0FBUyxDQUFDOztJQUcxQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFMRCxDQUE4QixrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FLaEU7Ozs7SUFKQyx3QkFBMEI7O0lBQ2QsMkJBQWtEOztBQUtoRTtJQUFrQyx3Q0FBbUM7SUFFbkUsc0JBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQzFCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGNBQWMsQ0FBQzs7SUFHL0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQUxELENBQWtDLGtCQUFrQixDQUFDLGdCQUFnQixHQUtwRTs7OztJQUpDLDRCQUErQjs7SUFDbkIsK0JBQW1COztBQUtqQztJQUFxQywyQ0FBc0M7SUFFekUseUJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FLMUU7Ozs7SUFKQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFLakM7SUFFRSxtQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLFVBQVUsQ0FBQztJQUNPLENBQUM7SUFDckMsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHlCQUEyQjs7SUFDZiw0QkFBbUI7O0FBR2pDO0lBRUUsMEJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNELENBQUM7SUFDckMsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGdDQUFtQzs7SUFDdkIsbUNBQW1COztBQUdqQztJQUVFO1FBRFMsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ3BCLENBQUM7SUFDbEIsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGdDQUFtQzs7QUFJckM7SUFBK0IscUNBQW9DO0lBRWpFO1FBQUEsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFIUSxVQUFJLEdBQUcsVUFBVSxDQUFDOztJQUczQixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBK0Isa0JBQWtCLENBQUMsaUJBQWlCLEdBS2xFOzs7O0lBSkMseUJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ0FSVF9EQVRBIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX0ZBSUwgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUID0gJ1tDYXJ0XSBMb2FkIENhcnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBMb2FkIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIExvYWQgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IE1FUkdFX0NBUlQgPSAnW0NhcnRdIE1lcmdlIENhcnQnO1xuZXhwb3J0IGNvbnN0IE1FUkdFX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gTWVyZ2UgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlRfREVUQUlMUyA9ICdbQ2FydF0gUmVzZXQgQ2FydCBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlQgPSAnW0NhcnRdIENsZWFyIENhcnQnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2FydCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2FydEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldENhcnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FydEFjdGlvbiA9XG4gIHwgQ3JlYXRlQ2FydFxuICB8IENyZWF0ZUNhcnRGYWlsXG4gIHwgQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgfCBMb2FkQ2FydFxuICB8IExvYWRDYXJ0RmFpbFxuICB8IExvYWRDYXJ0U3VjY2Vzc1xuICB8IE1lcmdlQ2FydFxuICB8IE1lcmdlQ2FydFN1Y2Nlc3NcbiAgfCBSZXNldENhcnREZXRhaWxzXG4gIHwgQ2xlYXJDYXJ0O1xuIl19