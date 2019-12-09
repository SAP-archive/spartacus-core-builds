/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MULTI_CART_FEATURE } from '../multi-cart-state';
import { EntityLoadAction, EntitySuccessAction, EntityFailAction, EntityResetAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
/** @type {?} */
export var RESET_FRESH_CART = '[Multi Cart] Reset Fresh Cart';
/** @type {?} */
export var CREATE_MULTI_CART = '[Multi Cart] Create Cart';
/** @type {?} */
export var CREATE_MULTI_CART_FAIL = '[Multi Cart] Create Cart Fail';
/** @type {?} */
export var CREATE_MULTI_CART_SUCCESS = '[Multi Cart] Create Cart Success';
/** @type {?} */
export var LOAD_MULTI_CART = '[Multi Cart] Load Cart';
/** @type {?} */
export var LOAD_MULTI_CART_FAIL = '[Multi Cart] Load Cart Fail';
/** @type {?} */
export var LOAD_MULTI_CART_SUCCESS = '[Multi Cart] Load Cart Success';
/** @type {?} */
export var MERGE_MULTI_CART = '[Multi Cart] Merge Cart';
/** @type {?} */
export var MERGE_MULTI_CART_SUCCESS = '[Multi Cart] Merge Cart Success';
/** @type {?} */
export var RESET_MULTI_CART_DETAILS = '[Multi Cart] Reset Cart Details';
/** @type {?} */
export var SET_FRESH_CART = '[Multi Cart] Set Fresh Cart';
/** @type {?} */
export var SET_CART_LOADING = '[Multi Cart] Set Cart Loading';
/** @type {?} */
export var REMOVE_CART = '[Multi Cart] Remove Cart';
/** @type {?} */
export var ADD_EMAIL_TO_MULTI_CART = '[Multi Cart] Add Email';
/** @type {?} */
export var ADD_EMAIL_TO_MULTI_CART_FAIL = '[Multi Cart] Add Email Fail';
/** @type {?} */
export var ADD_EMAIL_TO_MULTI_CART_SUCCESS = '[Multi Cart] Add Email Success';
var ResetFreshCart = /** @class */ (function (_super) {
    tslib_1.__extends(ResetFreshCart, _super);
    function ResetFreshCart() {
        var _this = _super.call(this, MULTI_CART_FEATURE, 'fresh') || this;
        _this.type = RESET_FRESH_CART;
        return _this;
    }
    return ResetFreshCart;
}(EntityResetAction));
export { ResetFreshCart };
if (false) {
    /** @type {?} */
    ResetFreshCart.prototype.type;
}
var SetFreshCart = /** @class */ (function (_super) {
    tslib_1.__extends(SetFreshCart, _super);
    function SetFreshCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, 'fresh', payload) || this;
        _this.payload = payload;
        _this.type = SET_FRESH_CART;
        return _this;
    }
    return SetFreshCart;
}(EntitySuccessAction));
export { SetFreshCart };
if (false) {
    /** @type {?} */
    SetFreshCart.prototype.type;
    /** @type {?} */
    SetFreshCart.prototype.payload;
}
var CreateMultiCart = /** @class */ (function (_super) {
    tslib_1.__extends(CreateMultiCart, _super);
    function CreateMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, 'fresh') || this;
        _this.payload = payload;
        _this.type = CREATE_MULTI_CART;
        return _this;
    }
    return CreateMultiCart;
}(EntityLoadAction));
export { CreateMultiCart };
if (false) {
    /** @type {?} */
    CreateMultiCart.prototype.type;
    /** @type {?} */
    CreateMultiCart.prototype.payload;
}
var CreateMultiCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(CreateMultiCartFail, _super);
    function CreateMultiCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, 'fresh') || this;
        _this.payload = payload;
        _this.type = CREATE_MULTI_CART_FAIL;
        return _this;
    }
    return CreateMultiCartFail;
}(EntityFailAction));
export { CreateMultiCartFail };
if (false) {
    /** @type {?} */
    CreateMultiCartFail.prototype.type;
    /** @type {?} */
    CreateMultiCartFail.prototype.payload;
}
var CreateMultiCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(CreateMultiCartSuccess, _super);
    function CreateMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = CREATE_MULTI_CART_SUCCESS;
        return _this;
    }
    return CreateMultiCartSuccess;
}(EntitySuccessAction));
export { CreateMultiCartSuccess };
if (false) {
    /** @type {?} */
    CreateMultiCartSuccess.prototype.type;
    /** @type {?} */
    CreateMultiCartSuccess.prototype.payload;
}
var LoadMultiCart = /** @class */ (function (_super) {
    tslib_1.__extends(LoadMultiCart, _super);
    function LoadMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = LOAD_MULTI_CART;
        return _this;
    }
    return LoadMultiCart;
}(EntityLoadAction));
export { LoadMultiCart };
if (false) {
    /** @type {?} */
    LoadMultiCart.prototype.type;
    /** @type {?} */
    LoadMultiCart.prototype.payload;
}
var LoadMultiCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadMultiCartFail, _super);
    function LoadMultiCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = LOAD_MULTI_CART_FAIL;
        return _this;
    }
    return LoadMultiCartFail;
}(EntityFailAction));
export { LoadMultiCartFail };
if (false) {
    /** @type {?} */
    LoadMultiCartFail.prototype.type;
    /** @type {?} */
    LoadMultiCartFail.prototype.payload;
}
var LoadMultiCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadMultiCartSuccess, _super);
    function LoadMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = LOAD_MULTI_CART_SUCCESS;
        return _this;
    }
    return LoadMultiCartSuccess;
}(EntitySuccessAction));
export { LoadMultiCartSuccess };
if (false) {
    /** @type {?} */
    LoadMultiCartSuccess.prototype.type;
    /** @type {?} */
    LoadMultiCartSuccess.prototype.payload;
}
var MergeMultiCart = /** @class */ (function () {
    function MergeMultiCart(payload) {
        this.payload = payload;
        this.type = MERGE_MULTI_CART;
    }
    return MergeMultiCart;
}());
export { MergeMultiCart };
if (false) {
    /** @type {?} */
    MergeMultiCart.prototype.type;
    /** @type {?} */
    MergeMultiCart.prototype.payload;
}
// I don't know if we should keep it or replace with different action for removal
var 
// I don't know if we should keep it or replace with different action for removal
MergeMultiCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(MergeMultiCartSuccess, _super);
    function MergeMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.oldCartId) || this;
        _this.payload = payload;
        _this.type = MERGE_MULTI_CART_SUCCESS;
        return _this;
    }
    return MergeMultiCartSuccess;
}(EntityRemoveAction));
// I don't know if we should keep it or replace with different action for removal
export { MergeMultiCartSuccess };
if (false) {
    /** @type {?} */
    MergeMultiCartSuccess.prototype.type;
    /** @type {?} */
    MergeMultiCartSuccess.prototype.payload;
}
var ResetMultiCartDetails = /** @class */ (function (_super) {
    tslib_1.__extends(ResetMultiCartDetails, _super);
    function ResetMultiCartDetails() {
        var _this = _super.call(this, MULTI_CART_FEATURE, undefined) || this;
        _this.type = RESET_MULTI_CART_DETAILS;
        return _this;
    }
    return ResetMultiCartDetails;
}(EntityResetAction));
export { ResetMultiCartDetails };
if (false) {
    /** @type {?} */
    ResetMultiCartDetails.prototype.type;
}
var SetCartLoading = /** @class */ (function (_super) {
    tslib_1.__extends(SetCartLoading, _super);
    function SetCartLoading(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = SET_CART_LOADING;
        return _this;
    }
    return SetCartLoading;
}(EntityLoadAction));
export { SetCartLoading };
if (false) {
    /** @type {?} */
    SetCartLoading.prototype.type;
    /** @type {?} */
    SetCartLoading.prototype.payload;
}
var RemoveCart = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveCart, _super);
    function RemoveCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_CART;
        return _this;
    }
    return RemoveCart;
}(EntityRemoveAction));
export { RemoveCart };
if (false) {
    /** @type {?} */
    RemoveCart.prototype.type;
    /** @type {?} */
    RemoveCart.prototype.payload;
}
var AddEmailToMultiCart = /** @class */ (function (_super) {
    tslib_1.__extends(AddEmailToMultiCart, _super);
    function AddEmailToMultiCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_MULTI_CART;
        return _this;
    }
    return AddEmailToMultiCart;
}(EntityLoadAction));
export { AddEmailToMultiCart };
if (false) {
    /** @type {?} */
    AddEmailToMultiCart.prototype.type;
    /** @type {?} */
    AddEmailToMultiCart.prototype.payload;
}
var AddEmailToMultiCartFail = /** @class */ (function (_super) {
    tslib_1.__extends(AddEmailToMultiCartFail, _super);
    function AddEmailToMultiCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_MULTI_CART_FAIL;
        return _this;
    }
    return AddEmailToMultiCartFail;
}(EntityFailAction));
export { AddEmailToMultiCartFail };
if (false) {
    /** @type {?} */
    AddEmailToMultiCartFail.prototype.type;
    /** @type {?} */
    AddEmailToMultiCartFail.prototype.payload;
}
var AddEmailToMultiCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(AddEmailToMultiCartSuccess, _super);
    function AddEmailToMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_MULTI_CART_SUCCESS;
        return _this;
    }
    return AddEmailToMultiCartSuccess;
}(EntitySuccessAction));
export { AddEmailToMultiCartSuccess };
if (false) {
    /** @type {?} */
    AddEmailToMultiCartSuccess.prototype.type;
    /** @type {?} */
    AddEmailToMultiCartSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixHQUNsQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUd0RCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsK0JBQStCOztBQUUvRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUMzRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUUzRSxNQUFNLEtBQU8sZUFBZSxHQUFHLHdCQUF3Qjs7QUFDdkQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGdDQUFnQzs7QUFFdkUsTUFBTSxLQUFPLGdCQUFnQixHQUFHLHlCQUF5Qjs7QUFDekQsTUFBTSxLQUFPLHdCQUF3QixHQUFHLGlDQUFpQzs7QUFFekUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLGlDQUFpQzs7QUFFekUsTUFBTSxLQUFPLGNBQWMsR0FBRyw2QkFBNkI7O0FBRTNELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRywrQkFBK0I7O0FBRS9ELE1BQU0sS0FBTyxXQUFXLEdBQUcsMEJBQTBCOztBQUVyRCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsd0JBQXdCOztBQUMvRCxNQUFNLEtBQU8s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QztBQUFELENBQUMsQUFMRCxDQUFnRCxtQkFBbUIsR0FLbEU7Ozs7SUFKQywwQ0FBZ0Q7O0lBQ3BDLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9GUkVTSF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTWVyZ2UgQ2FydCc7XG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBDYXJ0IERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0ZSRVNIX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFNFVF9DQVJUX0xPQURJTkcgPSAnW011bHRpIENhcnRdIFNldCBDYXJ0IExvYWRpbmcnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIEFkZCBFbWFpbCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBSZXNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgJ2ZyZXNoJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXJ0KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCAnZnJlc2gnLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgJ2ZyZXNoJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsICdmcmVzaCcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbi8vIEkgZG9uJ3Qga25vdyBpZiB3ZSBzaG91bGQga2VlcCBpdCBvciByZXBsYWNlIHdpdGggZGlmZmVyZW50IGFjdGlvbiBmb3IgcmVtb3ZhbFxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IG9sZENhcnRJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQub2xkQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRNdWx0aUNhcnREZXRhaWxzIGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldENhcnRMb2FkaW5nIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQ0FSVF9MT0FESU5HO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUNhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhcnRBY3Rpb25zID1cbiAgfCBSZXNldEZyZXNoQ2FydFxuICB8IFNldEZyZXNoQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydEZhaWxcbiAgfCBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTG9hZE11bHRpQ2FydFxuICB8IExvYWRNdWx0aUNhcnRGYWlsXG4gIHwgTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZU11bHRpQ2FydFxuICB8IE1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICB8IFNldENhcnRMb2FkaW5nXG4gIHwgUmVtb3ZlQ2FydFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzO1xuIl19