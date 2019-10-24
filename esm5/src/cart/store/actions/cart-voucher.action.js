/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { ADD_VOUCHER_PROCESS_ID, CART_DATA } from '../cart-state';
/** @type {?} */
export var CART_ADD_VOUCHER = '[Cart-voucher] Add Cart Vouchers';
/** @type {?} */
export var CART_ADD_VOUCHER_FAIL = '[Cart-voucher] Add Cart Voucher Fail';
/** @type {?} */
export var CART_ADD_VOUCHER_SUCCESS = '[Cart-voucher] Add Cart Voucher Success';
/** @type {?} */
export var CART_RESET_ADD_VOUCHER = '[Cart-voucher] Reset Add Cart Voucher';
/** @type {?} */
export var CART_REMOVE_VOUCHER = '[Cart-voucher] Remove Cart Voucher';
/** @type {?} */
export var CART_REMOVE_VOUCHER_FAIL = '[Cart-voucher] Remove Cart Voucher Fail';
/** @type {?} */
export var CART_REMOVE_VOUCHER_SUCCESS = '[Cart-voucher] Remove Cart Voucher Success';
// Adding cart voucher actions
var 
// Adding cart voucher actions
CartAddVoucher = /** @class */ (function (_super) {
    tslib_1.__extends(CartAddVoucher, _super);
    function CartAddVoucher(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CART_ADD_VOUCHER;
        return _this;
    }
    return CartAddVoucher;
}(EntityLoadAction));
// Adding cart voucher actions
export { CartAddVoucher };
if (false) {
    /** @type {?} */
    CartAddVoucher.prototype.type;
    /** @type {?} */
    CartAddVoucher.prototype.payload;
}
var CartAddVoucherFail = /** @class */ (function (_super) {
    tslib_1.__extends(CartAddVoucherFail, _super);
    function CartAddVoucherFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = CART_ADD_VOUCHER_FAIL;
        return _this;
    }
    return CartAddVoucherFail;
}(EntityFailAction));
export { CartAddVoucherFail };
if (false) {
    /** @type {?} */
    CartAddVoucherFail.prototype.type;
    /** @type {?} */
    CartAddVoucherFail.prototype.payload;
}
var CartAddVoucherSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CartAddVoucherSuccess, _super);
    function CartAddVoucherSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CART_ADD_VOUCHER_SUCCESS;
        return _this;
    }
    return CartAddVoucherSuccess;
}(EntitySuccessAction));
export { CartAddVoucherSuccess };
if (false) {
    /** @type {?} */
    CartAddVoucherSuccess.prototype.type;
    /** @type {?} */
    CartAddVoucherSuccess.prototype.payload;
}
var CartResetAddVoucher = /** @class */ (function (_super) {
    tslib_1.__extends(CartResetAddVoucher, _super);
    function CartResetAddVoucher() {
        var _this = _super.call(this, PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID) || this;
        _this.type = CART_RESET_ADD_VOUCHER;
        return _this;
    }
    return CartResetAddVoucher;
}(EntityResetAction));
export { CartResetAddVoucher };
if (false) {
    /** @type {?} */
    CartResetAddVoucher.prototype.type;
}
// Deleting cart voucher
var 
// Deleting cart voucher
CartRemoveVoucher = /** @class */ (function (_super) {
    tslib_1.__extends(CartRemoveVoucher, _super);
    function CartRemoveVoucher(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_VOUCHER;
        return _this;
    }
    return CartRemoveVoucher;
}(LoaderLoadAction));
// Deleting cart voucher
export { CartRemoveVoucher };
if (false) {
    /** @type {?} */
    CartRemoveVoucher.prototype.type;
    /** @type {?} */
    CartRemoveVoucher.prototype.payload;
}
var CartRemoveVoucherFail = /** @class */ (function (_super) {
    tslib_1.__extends(CartRemoveVoucherFail, _super);
    function CartRemoveVoucherFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_VOUCHER_FAIL;
        return _this;
    }
    return CartRemoveVoucherFail;
}(LoaderFailAction));
export { CartRemoveVoucherFail };
if (false) {
    /** @type {?} */
    CartRemoveVoucherFail.prototype.type;
    /** @type {?} */
    CartRemoveVoucherFail.prototype.payload;
}
var CartRemoveVoucherSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CartRemoveVoucherSuccess, _super);
    function CartRemoveVoucherSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CART_REMOVE_VOUCHER_SUCCESS;
        return _this;
    }
    return CartRemoveVoucherSuccess;
}(LoaderSuccessAction));
export { CartRemoveVoucherSuccess };
if (false) {
    /** @type {?} */
    CartRemoveVoucherSuccess.prototype.type;
    /** @type {?} */
    CartRemoveVoucherSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvY2FydC12b3VjaGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFbEUsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGtDQUFrQzs7QUFDbEUsTUFBTSxLQUFPLHFCQUFxQixHQUFHLHNDQUFzQzs7QUFDM0UsTUFBTSxLQUFPLHdCQUF3QixHQUNuQyx5Q0FBeUM7O0FBQzNDLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyx1Q0FBdUM7O0FBRTdFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxvQ0FBb0M7O0FBQ3ZFLE1BQU0sS0FBTyx3QkFBd0IsR0FDbkMseUNBQXlDOztBQUMzQyxNQUFNLEtBQU8sMkJBQTJCLEdBQ3RDLDRDQUE0Qzs7QUFHOUM7OztJQUFvQywwQ0FBZ0I7SUFFbEQsd0JBQ1MsT0FBOEQ7UUFEdkUsWUFHRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxVQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBS2pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFQRCxDQUFvQyxnQkFBZ0IsR0FPbkQ7Ozs7O0lBTkMsOEJBQWlDOztJQUUvQixpQ0FBcUU7O0FBTXpFO0lBQXdDLDhDQUFnQjtJQUV0RCw0QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxPQUFPLENBQUMsU0FDeEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBR3RDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxnQkFBZ0IsR0FLdkQ7Ozs7SUFKQyxrQ0FBc0M7O0lBQzFCLHFDQUFtQjs7QUFLakM7SUFBMkMsaURBQW1CO0lBRTVELCtCQUFtQixPQUEyQztRQUE5RCxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxTQUMvQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFMRCxDQUEyQyxtQkFBbUIsR0FLN0Q7Ozs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUFrRDs7QUFLaEU7SUFBeUMsK0NBQWlCO0lBRXhEO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsU0FDL0M7UUFIUSxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxpQkFBaUIsR0FLekQ7Ozs7SUFKQyxtQ0FBdUM7OztBQU96Qzs7O0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFDUyxPQUE4RDtRQUR2RSxZQUdFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUhRLGFBQU8sR0FBUCxPQUFPLENBQXVEO1FBRjlELFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFLcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXVDLGdCQUFnQixHQU90RDs7Ozs7SUFOQyxpQ0FBb0M7O0lBRWxDLG9DQUFxRTs7QUFNekU7SUFBMkMsaURBQWdCO0lBRXpELCtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLGdCQUFnQixHQUsxRDs7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQW1COztBQUtqQztJQUE4QyxvREFBbUI7SUFFL0Qsa0NBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLG1CQUFtQixHQUtoRTs7OztJQUpDLHdDQUE0Qzs7SUFDaEMsMkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IEFERF9WT1VDSEVSX1BST0NFU1NfSUQsIENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9BRERfVk9VQ0hFUiA9ICdbQ2FydC12b3VjaGVyXSBBZGQgQ2FydCBWb3VjaGVycyc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfVk9VQ0hFUl9GQUlMID0gJ1tDYXJ0LXZvdWNoZXJdIEFkZCBDYXJ0IFZvdWNoZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTID1cbiAgJ1tDYXJ0LXZvdWNoZXJdIEFkZCBDYXJ0IFZvdWNoZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRVNFVF9BRERfVk9VQ0hFUiA9ICdbQ2FydC12b3VjaGVyXSBSZXNldCBBZGQgQ2FydCBWb3VjaGVyJztcblxuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX1ZPVUNIRVIgPSAnW0NhcnQtdm91Y2hlcl0gUmVtb3ZlIENhcnQgVm91Y2hlcic7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfVk9VQ0hFUl9GQUlMID1cbiAgJ1tDYXJ0LXZvdWNoZXJdIFJlbW92ZSBDYXJ0IFZvdWNoZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfVk9VQ0hFUl9TVUNDRVNTID1cbiAgJ1tDYXJ0LXZvdWNoZXJdIFJlbW92ZSBDYXJ0IFZvdWNoZXIgU3VjY2Vzcyc7XG5cbi8vIEFkZGluZyBjYXJ0IHZvdWNoZXIgYWN0aW9uc1xuZXhwb3J0IGNsYXNzIENhcnRBZGRWb3VjaGVyIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9WT1VDSEVSO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHZvdWNoZXJJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydEFkZFZvdWNoZXJGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX0FERF9WT1VDSEVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkVm91Y2hlclN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVzZXRBZGRWb3VjaGVyIGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9SRVNFVF9BRERfVk9VQ0hFUjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBEZWxldGluZyBjYXJ0IHZvdWNoZXJcbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlVm91Y2hlciBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9SRU1PVkVfVk9VQ0hFUjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyB2b3VjaGVySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVWb3VjaGVyRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9SRU1PVkVfVk9VQ0hFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENhcnRWb3VjaGVyQWN0aW9uID1cbiAgfCBDYXJ0QWRkVm91Y2hlclxuICB8IENhcnRBZGRWb3VjaGVyRmFpbFxuICB8IENhcnRBZGRWb3VjaGVyU3VjY2Vzc1xuICB8IENhcnRSZXNldEFkZFZvdWNoZXJcbiAgfCBDYXJ0UmVtb3ZlVm91Y2hlclxuICB8IENhcnRSZW1vdmVWb3VjaGVyRmFpbFxuICB8IENhcnRSZW1vdmVWb3VjaGVyU3VjY2VzcztcbiJdfQ==