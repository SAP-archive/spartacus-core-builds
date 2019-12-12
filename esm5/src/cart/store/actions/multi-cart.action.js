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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUNMLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsZ0NBQWdDLEdBQ2pDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRywrQkFBK0I7O0FBRS9ELE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sS0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBRTNFLE1BQU0sS0FBTyxlQUFlLEdBQUcsd0JBQXdCOztBQUN2RCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUV2RSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLEtBQU8sY0FBYyxHQUFHLDZCQUE2Qjs7QUFFM0QsTUFBTSxLQUFPLFdBQVcsR0FBRywwQkFBMEI7O0FBRXJELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyx3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QyxZQUNFLGtCQUFNLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUNuQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLDhCQUE4QixHQUt6RTs7OztJQUpDLHNDQUF5Qzs7SUFDN0IseUNBQXNCOztBQUtwQztJQUE0QyxrREFBOEI7SUFFeEUsZ0NBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FDbkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBR3pDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0Qyw4QkFBOEIsR0FLekU7Ozs7SUFKQyxzQ0FBeUM7O0lBQzdCLHlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX0ZSRVNIX0NBUlQgPSAnW011bHRpIENhcnRdIFJlc2V0IEZyZXNoIENhcnQnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0JztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9NVUxUSV9DQVJUX0RFVEFJTFMgPSAnW011bHRpIENhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfRlJFU0hfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gU2V0IEZyZXNoIENhcnQnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIEFkZCBFbWFpbCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQgPSAnW011bHRpIENhcnRdIENhcnQgUHJvY2Vzc2VzIEluY3JlbWVudCc7XG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBEZWNyZW1lbnQnO1xuXG4vKipcbiAqIFRvIGtlZXAgdHJhY2sgb2YgY2FydCBjcmVhdGlvbiBwcm9jZXNzIHdlIHVzZSBjYXJ0IHdpdGggYGZyZXNoYCBpZC5cbiAqIEFmdGVyIGNyZWF0aW5nIGNhcnQgd2Ugc3dpdGNoIHRvIGVudGl0eSB3aXRoIGBjb2RlYCBvciBgZ3VpZGAuXG4gKiBXZSBuZWVkIGBmcmVzaGAgY2FydCBlbnRpdHkgZm9yIGxvYWRpbmcvZXJyb3Igc3RhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBGUkVTSF9DQVJUX0lEID0gJ2ZyZXNoJztcblxuZXhwb3J0IGNsYXNzIFJlc2V0RnJlc2hDYXJ0IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfRlJFU0hfQ0FSVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RnJlc2hDYXJ0IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfRlJFU0hfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENhcnQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIEZSRVNIX0NBUlRfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VNdWx0aUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IG9sZENhcnRJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQub2xkQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRNdWx0aUNhcnREZXRhaWxzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUNhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0luY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlDYXJ0QWN0aW9ucyA9XG4gIHwgUmVzZXRGcmVzaENhcnRcbiAgfCBTZXRGcmVzaENhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRGYWlsXG4gIHwgQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IExvYWRNdWx0aUNhcnRcbiAgfCBMb2FkTXVsdGlDYXJ0RmFpbFxuICB8IExvYWRNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTWVyZ2VNdWx0aUNhcnRcbiAgfCBNZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBSZXNldE11bHRpQ2FydERldGFpbHNcbiAgfCBSZW1vdmVDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsXG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgfCBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gIHwgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudDtcbiJdfQ==