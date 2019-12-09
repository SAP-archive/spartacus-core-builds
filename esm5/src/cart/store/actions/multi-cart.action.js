/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
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
export var REMOVE_CART = '[Multi Cart] Remove Cart';
/** @type {?} */
export var ADD_EMAIL_TO_MULTI_CART = '[Multi Cart] Add Email';
/** @type {?} */
export var ADD_EMAIL_TO_MULTI_CART_FAIL = '[Multi Cart] Add Email Fail';
/** @type {?} */
export var ADD_EMAIL_TO_MULTI_CART_SUCCESS = '[Multi Cart] Add Email Success';
/** @type {?} */
export var SET_ACTIVE_CART_ID = '[Multi Cart] Set Active Cart Id';
/** @type {?} */
export var CART_PROCESSES_INCREMENT = '[Multi Cart] Cart Processes Increment';
/** @type {?} */
export var CART_PROCESSES_DECREMENT = '[Multi Cart] Cart Processes Decrement';
/**
 * To keep track of cart creation process we use cart with `fresh` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `fresh` cart entity for loading/error state.
 * @type {?}
 */
export var FRESH_CART_ID = 'fresh';
var ResetFreshCart = /** @class */ (function (_super) {
    tslib_1.__extends(ResetFreshCart, _super);
    function ResetFreshCart() {
        var _this = _super.call(this, MULTI_CART_FEATURE, FRESH_CART_ID) || this;
        _this.type = RESET_FRESH_CART;
        return _this;
    }
    return ResetFreshCart;
}(EntityProcessesLoaderResetAction));
export { ResetFreshCart };
if (false) {
    /** @type {?} */
    ResetFreshCart.prototype.type;
}
var SetFreshCart = /** @class */ (function (_super) {
    tslib_1.__extends(SetFreshCart, _super);
    function SetFreshCart(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, FRESH_CART_ID, payload) || this;
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
        var _this = _super.call(this, MULTI_CART_FEATURE, FRESH_CART_ID) || this;
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
        var _this = _super.call(this, MULTI_CART_FEATURE, FRESH_CART_ID) || this;
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
var SetActiveCartId = /** @class */ (function () {
    function SetActiveCartId(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CART_ID;
    }
    return SetActiveCartId;
}());
export { SetActiveCartId };
if (false) {
    /** @type {?} */
    SetActiveCartId.prototype.type;
    /** @type {?} */
    SetActiveCartId.prototype.payload;
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
var MergeMultiCartSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(MergeMultiCartSuccess, _super);
    function MergeMultiCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.oldCartId) || this;
        _this.payload = payload;
        _this.type = MERGE_MULTI_CART_SUCCESS;
        return _this;
    }
    return MergeMultiCartSuccess;
}(EntityRemoveAction));
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
}(EntityProcessesLoaderResetAction));
export { ResetMultiCartDetails };
if (false) {
    /** @type {?} */
    ResetMultiCartDetails.prototype.type;
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
var CartProcessesIncrement = /** @class */ (function (_super) {
    tslib_1.__extends(CartProcessesIncrement, _super);
    function CartProcessesIncrement(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_INCREMENT;
        return _this;
    }
    return CartProcessesIncrement;
}(EntityProcessesIncrementAction));
export { CartProcessesIncrement };
if (false) {
    /** @type {?} */
    CartProcessesIncrement.prototype.type;
    /** @type {?} */
    CartProcessesIncrement.prototype.payload;
}
var CartProcessesDecrement = /** @class */ (function (_super) {
    tslib_1.__extends(CartProcessesDecrement, _super);
    function CartProcessesDecrement(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_DECREMENT;
        return _this;
    }
    return CartProcessesDecrement;
}(EntityProcessesDecrementAction));
export { CartProcessesDecrement };
if (false) {
    /** @type {?} */
    CartProcessesDecrement.prototype.type;
    /** @type {?} */
    CartProcessesDecrement.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUNMLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsZ0NBQWdDLEdBQ2pDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRywrQkFBK0I7O0FBRS9ELE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sS0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBRTNFLE1BQU0sS0FBTyxlQUFlLEdBQUcsd0JBQXdCOztBQUN2RCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUV2RSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8sY0FBYyxHQUFHLDZCQUE2Qjs7QUFFM0QsTUFBTSxLQUFPLFdBQVcsR0FBRywwQkFBMEI7O0FBRXJELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyx3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O1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFVBQUksR0FBRywrQkFBK0IsQ0FBQzs7SUFHaEQsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQUxELENBQWdELG1CQUFtQixHQUtsRTs7OztJQUpDLDBDQUFnRDs7SUFDcEMsNkNBQWtEOztBQUtoRTtJQUE0QyxrREFBOEI7SUFFeEUsZ0NBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FDbkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0Qyw4QkFBOEIsR0FLekU7Ozs7SUFKQyxzQ0FBeUM7O0lBQzdCLHlDQUFzQjs7QUFLcEM7SUFBNEMsa0RBQThCO0lBRXhFLGdDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQ25DO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsOEJBQThCLEdBS3pFOzs7O0lBSkMsc0NBQXlDOztJQUM3Qix5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IEVudGl0eVJlbW92ZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS9lbnRpdHkuYWN0aW9uJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9GUkVTSF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTWVyZ2UgQ2FydCc7XG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBDYXJ0IERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0ZSRVNIX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZW1vdmUgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gQWRkIEVtYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQWRkIEVtYWlsIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9DQVJUX0lEID0gJ1tNdWx0aSBDYXJ0XSBTZXQgQWN0aXZlIENhcnQgSWQnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBJbmNyZW1lbnQnO1xuZXhwb3J0IGNvbnN0IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVCA9ICdbTXVsdGkgQ2FydF0gQ2FydCBQcm9jZXNzZXMgRGVjcmVtZW50JztcblxuLyoqXG4gKiBUbyBrZWVwIHRyYWNrIG9mIGNhcnQgY3JlYXRpb24gcHJvY2VzcyB3ZSB1c2UgY2FydCB3aXRoIGBmcmVzaGAgaWQuXG4gKiBBZnRlciBjcmVhdGluZyBjYXJ0IHdlIHN3aXRjaCB0byBlbnRpdHkgd2l0aCBgY29kZWAgb3IgYGd1aWRgLlxuICogV2UgbmVlZCBgZnJlc2hgIGNhcnQgZW50aXR5IGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlLlxuICovXG5leHBvcnQgY29uc3QgRlJFU0hfQ0FSVF9JRCA9ICdmcmVzaCc7XG5cbmV4cG9ydCBjbGFzcyBSZXNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXJ0KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIEZSRVNIX0NBUlRfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVDYXJ0SWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9DQVJUX0lEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZzsgZXJyb3I/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZU11bHRpQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgb2xkQ2FydElkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyB1c2VySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5vbGRDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldE11bHRpQ2FydERldGFpbHMgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9NVUxUSV9DQVJUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgdW5kZWZpbmVkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlQ2FydCBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb011bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZXJyb3I6IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0lOQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNEZWNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhcnRBY3Rpb25zID1cbiAgfCBSZXNldEZyZXNoQ2FydFxuICB8IFNldEZyZXNoQ2FydFxuICB8IFNldEFjdGl2ZUNhcnRJZFxuICB8IENyZWF0ZU11bHRpQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydEZhaWxcbiAgfCBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTG9hZE11bHRpQ2FydFxuICB8IExvYWRNdWx0aUNhcnRGYWlsXG4gIHwgTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZU11bHRpQ2FydFxuICB8IE1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICB8IFJlbW92ZUNhcnRcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IENhcnRQcm9jZXNzZXNJbmNyZW1lbnRcbiAgfCBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50O1xuIl19