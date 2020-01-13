/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CUSTOMER_COUPONS, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, CLAIM_CUSTOMER_COUPON_PROCESS_ID, } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { PROCESS_FEATURE } from '../../../process/store';
/** @type {?} */
export var LOAD_CUSTOMER_COUPONS = '[User] Load Customer Coupons';
/** @type {?} */
export var LOAD_CUSTOMER_COUPONS_FAIL = '[User] Load Customer Coupons Fail';
/** @type {?} */
export var LOAD_CUSTOMER_COUPONS_SUCCESS = '[User] Load Customer Coupons Success';
/** @type {?} */
export var RESET_LOAD_CUSTOMER_COUPONS = '[User] Reset Load Customer Coupons';
/** @type {?} */
export var SUBSCRIBE_CUSTOMER_COUPON = '[User] Subscribe Customer Notification Coupon';
/** @type {?} */
export var SUBSCRIBE_CUSTOMER_COUPON_FAIL = '[User] Subscribe Customer Coupon Notification Fail';
/** @type {?} */
export var SUBSCRIBE_CUSTOMER_COUPON_SUCCESS = '[User] Subscribe Customer Coupon Notification Success';
/** @type {?} */
export var RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS = '[User] Reset Subscribe Customer Coupon Process';
/** @type {?} */
export var UNSUBSCRIBE_CUSTOMER_COUPON = '[User] Unsubscribe Customer Notification Coupon';
/** @type {?} */
export var UNSUBSCRIBE_CUSTOMER_COUPON_FAIL = '[User] Unsubscribe Customer Coupon Notification Fail';
/** @type {?} */
export var UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS = '[User] Unsubscribe Customer Coupon Notification Success';
/** @type {?} */
export var RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS = '[User] Reset Unsubscribe Customer Coupon Process';
/** @type {?} */
export var CLAIM_CUSTOMER_COUPON = '[User] Claim Customer';
/** @type {?} */
export var CLAIM_CUSTOMER_COUPON_FAIL = '[User] Claim Customer Fail';
/** @type {?} */
export var CLAIM_CUSTOMER_COUPON_SUCCESS = '[User] Claim Customer Success';
var LoadCustomerCoupons = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCustomerCoupons, _super);
    function LoadCustomerCoupons(payload) {
        var _this = _super.call(this, CUSTOMER_COUPONS) || this;
        _this.payload = payload;
        _this.type = LOAD_CUSTOMER_COUPONS;
        return _this;
    }
    return LoadCustomerCoupons;
}(LoaderLoadAction));
export { LoadCustomerCoupons };
if (false) {
    /** @type {?} */
    LoadCustomerCoupons.prototype.type;
    /** @type {?} */
    LoadCustomerCoupons.prototype.payload;
}
var LoadCustomerCouponsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCustomerCouponsFail, _super);
    function LoadCustomerCouponsFail(payload) {
        var _this = _super.call(this, CUSTOMER_COUPONS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CUSTOMER_COUPONS_FAIL;
        return _this;
    }
    return LoadCustomerCouponsFail;
}(LoaderFailAction));
export { LoadCustomerCouponsFail };
if (false) {
    /** @type {?} */
    LoadCustomerCouponsFail.prototype.type;
    /** @type {?} */
    LoadCustomerCouponsFail.prototype.payload;
}
var LoadCustomerCouponsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCustomerCouponsSuccess, _super);
    function LoadCustomerCouponsSuccess(payload) {
        var _this = _super.call(this, CUSTOMER_COUPONS) || this;
        _this.payload = payload;
        _this.type = LOAD_CUSTOMER_COUPONS_SUCCESS;
        return _this;
    }
    return LoadCustomerCouponsSuccess;
}(LoaderSuccessAction));
export { LoadCustomerCouponsSuccess };
if (false) {
    /** @type {?} */
    LoadCustomerCouponsSuccess.prototype.type;
    /** @type {?} */
    LoadCustomerCouponsSuccess.prototype.payload;
}
var ResetLoadCustomerCoupons = /** @class */ (function (_super) {
    tslib_1.__extends(ResetLoadCustomerCoupons, _super);
    function ResetLoadCustomerCoupons() {
        var _this = _super.call(this, CUSTOMER_COUPONS) || this;
        _this.type = RESET_LOAD_CUSTOMER_COUPONS;
        return _this;
    }
    return ResetLoadCustomerCoupons;
}(LoaderResetAction));
export { ResetLoadCustomerCoupons };
if (false) {
    /** @type {?} */
    ResetLoadCustomerCoupons.prototype.type;
}
// Subscribe coupon notification actions
var 
// Subscribe coupon notification actions
SubscribeCustomerCoupon = /** @class */ (function (_super) {
    tslib_1.__extends(SubscribeCustomerCoupon, _super);
    function SubscribeCustomerCoupon(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SUBSCRIBE_CUSTOMER_COUPON;
        return _this;
    }
    return SubscribeCustomerCoupon;
}(EntityLoadAction));
// Subscribe coupon notification actions
export { SubscribeCustomerCoupon };
if (false) {
    /** @type {?} */
    SubscribeCustomerCoupon.prototype.type;
    /** @type {?} */
    SubscribeCustomerCoupon.prototype.payload;
}
var SubscribeCustomerCouponFail = /** @class */ (function (_super) {
    tslib_1.__extends(SubscribeCustomerCouponFail, _super);
    function SubscribeCustomerCouponFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SUBSCRIBE_CUSTOMER_COUPON_FAIL;
        return _this;
    }
    return SubscribeCustomerCouponFail;
}(EntityFailAction));
export { SubscribeCustomerCouponFail };
if (false) {
    /** @type {?} */
    SubscribeCustomerCouponFail.prototype.type;
    /** @type {?} */
    SubscribeCustomerCouponFail.prototype.payload;
}
var SubscribeCustomerCouponSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(SubscribeCustomerCouponSuccess, _super);
    function SubscribeCustomerCouponSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
        return _this;
    }
    return SubscribeCustomerCouponSuccess;
}(EntitySuccessAction));
export { SubscribeCustomerCouponSuccess };
if (false) {
    /** @type {?} */
    SubscribeCustomerCouponSuccess.prototype.type;
    /** @type {?} */
    SubscribeCustomerCouponSuccess.prototype.payload;
}
var ResetSubscribeCustomerCouponProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetSubscribeCustomerCouponProcess, _super);
    function ResetSubscribeCustomerCouponProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID) || this;
        _this.type = RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS;
        return _this;
    }
    return ResetSubscribeCustomerCouponProcess;
}(EntityResetAction));
export { ResetSubscribeCustomerCouponProcess };
if (false) {
    /** @type {?} */
    ResetSubscribeCustomerCouponProcess.prototype.type;
}
var UnsubscribeCustomerCoupon = /** @class */ (function (_super) {
    tslib_1.__extends(UnsubscribeCustomerCoupon, _super);
    function UnsubscribeCustomerCoupon(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = UNSUBSCRIBE_CUSTOMER_COUPON;
        return _this;
    }
    return UnsubscribeCustomerCoupon;
}(EntityLoadAction));
export { UnsubscribeCustomerCoupon };
if (false) {
    /** @type {?} */
    UnsubscribeCustomerCoupon.prototype.type;
    /** @type {?} */
    UnsubscribeCustomerCoupon.prototype.payload;
}
var UnsubscribeCustomerCouponFail = /** @class */ (function (_super) {
    tslib_1.__extends(UnsubscribeCustomerCouponFail, _super);
    function UnsubscribeCustomerCouponFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UNSUBSCRIBE_CUSTOMER_COUPON_FAIL;
        return _this;
    }
    return UnsubscribeCustomerCouponFail;
}(EntityFailAction));
export { UnsubscribeCustomerCouponFail };
if (false) {
    /** @type {?} */
    UnsubscribeCustomerCouponFail.prototype.type;
    /** @type {?} */
    UnsubscribeCustomerCouponFail.prototype.payload;
}
var UnsubscribeCustomerCouponSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UnsubscribeCustomerCouponSuccess, _super);
    function UnsubscribeCustomerCouponSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
        return _this;
    }
    return UnsubscribeCustomerCouponSuccess;
}(EntitySuccessAction));
export { UnsubscribeCustomerCouponSuccess };
if (false) {
    /** @type {?} */
    UnsubscribeCustomerCouponSuccess.prototype.type;
    /** @type {?} */
    UnsubscribeCustomerCouponSuccess.prototype.payload;
}
var ResetUnsubscribeCustomerCouponProcess = /** @class */ (function (_super) {
    tslib_1.__extends(ResetUnsubscribeCustomerCouponProcess, _super);
    function ResetUnsubscribeCustomerCouponProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID) || this;
        _this.type = RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS;
        return _this;
    }
    return ResetUnsubscribeCustomerCouponProcess;
}(EntityResetAction));
export { ResetUnsubscribeCustomerCouponProcess };
if (false) {
    /** @type {?} */
    ResetUnsubscribeCustomerCouponProcess.prototype.type;
}
var ClaimCustomerCoupon = /** @class */ (function (_super) {
    tslib_1.__extends(ClaimCustomerCoupon, _super);
    function ClaimCustomerCoupon(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CLAIM_CUSTOMER_COUPON;
        return _this;
    }
    return ClaimCustomerCoupon;
}(EntityLoadAction));
export { ClaimCustomerCoupon };
if (false) {
    /** @type {?} */
    ClaimCustomerCoupon.prototype.type;
    /** @type {?} */
    ClaimCustomerCoupon.prototype.payload;
}
var ClaimCustomerCouponFail = /** @class */ (function (_super) {
    tslib_1.__extends(ClaimCustomerCouponFail, _super);
    function ClaimCustomerCouponFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = CLAIM_CUSTOMER_COUPON_FAIL;
        return _this;
    }
    return ClaimCustomerCouponFail;
}(EntityFailAction));
export { ClaimCustomerCouponFail };
if (false) {
    /** @type {?} */
    ClaimCustomerCouponFail.prototype.type;
    /** @type {?} */
    ClaimCustomerCouponFail.prototype.payload;
}
var ClaimCustomerCouponSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(ClaimCustomerCouponSuccess, _super);
    function ClaimCustomerCouponSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = CLAIM_CUSTOMER_COUPON_SUCCESS;
        return _this;
    }
    return ClaimCustomerCouponSuccess;
}(EntitySuccessAction));
export { ClaimCustomerCouponSuccess };
if (false) {
    /** @type {?} */
    ClaimCustomerCouponSuccess.prototype.type;
    /** @type {?} */
    ClaimCustomerCouponSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvY3VzdG9tZXItY291cG9uLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsb0NBQW9DLEVBQ3BDLHNDQUFzQyxFQUN0QyxnQ0FBZ0MsR0FDakMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDJDQUEyQyxDQUFDO0FBTW5ELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBQ25FLE1BQU0sS0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7O0FBQzdFLE1BQU0sS0FBTyw2QkFBNkIsR0FDeEMsc0NBQXNDOztBQUN4QyxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUUvRSxNQUFNLEtBQU8seUJBQXlCLEdBQ3BDLCtDQUErQzs7QUFDakQsTUFBTSxLQUFPLDhCQUE4QixHQUN6QyxvREFBb0Q7O0FBQ3RELE1BQU0sS0FBTyxpQ0FBaUMsR0FDNUMsdURBQXVEOztBQUN6RCxNQUFNLEtBQU8sdUNBQXVDLEdBQ2xELGdEQUFnRDs7QUFFbEQsTUFBTSxLQUFPLDJCQUEyQixHQUN0QyxpREFBaUQ7O0FBQ25ELE1BQU0sS0FBTyxnQ0FBZ0MsR0FDM0Msc0RBQXNEOztBQUN4RCxNQUFNLEtBQU8sbUNBQW1DLEdBQzlDLHlEQUF5RDs7QUFDM0QsTUFBTSxLQUFPLHlDQUF5QyxHQUNwRCxrREFBa0Q7O0FBRXBELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7O0FBQzVELE1BQU0sS0FBTywwQkFBMEIsR0FBRyw0QkFBNEI7O0FBQ3RFLE1BQU0sS0FBTyw2QkFBNkIsR0FBRywrQkFBK0I7QUFFNUU7SUFBeUMsK0NBQWdCO0lBRXZELDZCQUNTLE9BS047UUFOSCxZQVFFLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3hCO1FBUlEsYUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFVdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVpELENBQXlDLGdCQUFnQixHQVl4RDs7OztJQVhDLG1DQUFzQzs7SUFFcEMsc0NBS0M7O0FBTUw7SUFBNkMsbURBQWdCO0lBRTNELGlDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLFNBQ2pDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNkMsZ0JBQWdCLEdBSzVEOzs7O0lBSkMsdUNBQTJDOztJQUMvQiwwQ0FBbUI7O0FBS2pDO0lBQWdELHNEQUFtQjtJQUVqRSxvQ0FBbUIsT0FBbUM7UUFBdEQsWUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN4QjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUE0QjtRQUQ3QyxVQUFJLEdBQUcsNkJBQTZCLENBQUM7O0lBRzlDLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFMRCxDQUFnRCxtQkFBbUIsR0FLbEU7Ozs7SUFKQywwQ0FBOEM7O0lBQ2xDLDZDQUEwQzs7QUFLeEQ7SUFBOEMsb0RBQWlCO0lBRTdEO1FBQUEsWUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN4QjtRQUhRLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLGlCQUFpQixHQUs5RDs7OztJQUpDLHdDQUE0Qzs7O0FBTzlDOzs7SUFBNkMsbURBQWdCO0lBRTNELGlDQUNTLE9BR047UUFKSCxZQU1FLGtCQUFNLGVBQWUsRUFBRSxvQ0FBb0MsQ0FBQyxTQUM3RDtRQU5RLGFBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxVQUFJLEdBQUcseUJBQXlCLENBQUM7O0lBUTFDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFWRCxDQUE2QyxnQkFBZ0IsR0FVNUQ7Ozs7O0lBVEMsdUNBQTBDOztJQUV4QywwQ0FHQzs7QUFNTDtJQUFpRCx1REFBZ0I7SUFFL0QscUNBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsb0NBQW9DLEVBQUUsT0FBTyxDQUFDLFNBQ3RFO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDhCQUE4QixDQUFDOztJQUcvQyxDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUQsZ0JBQWdCLEdBS2hFOzs7O0lBSkMsMkNBQStDOztJQUNuQyw4Q0FBbUI7O0FBS2pDO0lBQW9ELDBEQUFtQjtJQUVyRSx3Q0FBbUIsT0FBbUM7UUFBdEQsWUFDRSxrQkFBTSxlQUFlLEVBQUUsb0NBQW9DLEVBQUUsT0FBTyxDQUFDLFNBQ3RFO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQTRCO1FBRDdDLFVBQUksR0FBRyxpQ0FBaUMsQ0FBQzs7SUFHbEQsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0FBQyxBQUxELENBQW9ELG1CQUFtQixHQUt0RTs7OztJQUpDLDhDQUFrRDs7SUFDdEMsaURBQTBDOztBQUt4RDtJQUF5RCwrREFBaUI7SUFFeEU7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxvQ0FBb0MsQ0FBQyxTQUM3RDtRQUhRLFVBQUksR0FBRyx1Q0FBdUMsQ0FBQzs7SUFHeEQsQ0FBQztJQUNILDBDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlELGlCQUFpQixHQUt6RTs7OztJQUpDLG1EQUF3RDs7QUFNMUQ7SUFBK0MscURBQWdCO0lBRTdELG1DQUNTLE9BR047UUFKSCxZQU1FLGtCQUFNLGVBQWUsRUFBRSxzQ0FBc0MsQ0FBQyxTQUMvRDtRQU5RLGFBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBUTVDLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFWRCxDQUErQyxnQkFBZ0IsR0FVOUQ7Ozs7SUFUQyx5Q0FBNEM7O0lBRTFDLDRDQUdDOztBQU1MO0lBQW1ELHlEQUFnQjtJQUVqRSx1Q0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQ0FBc0MsRUFBRSxPQUFPLENBQUMsU0FDeEU7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsZ0NBQWdDLENBQUM7O0lBR2pELENBQUM7SUFDSCxvQ0FBQztBQUFELENBQUMsQUFMRCxDQUFtRCxnQkFBZ0IsR0FLbEU7Ozs7SUFKQyw2Q0FBaUQ7O0lBQ3JDLGdEQUFtQjs7QUFLakM7SUFBc0QsNERBQW1CO0lBRXZFLDBDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNDQUFzQyxFQUFFLE9BQU8sQ0FBQyxTQUN4RTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxtQ0FBbUMsQ0FBQzs7SUFHcEQsQ0FBQztJQUNILHVDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNELG1CQUFtQixHQUt4RTs7OztJQUpDLGdEQUFvRDs7SUFDeEMsbURBQW1COztBQUtqQztJQUEyRCxpRUFBaUI7SUFFMUU7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxzQ0FBc0MsQ0FBQyxTQUMvRDtRQUhRLFVBQUksR0FBRyx5Q0FBeUMsQ0FBQzs7SUFHMUQsQ0FBQztJQUNILDRDQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJELGlCQUFpQixHQUszRTs7OztJQUpDLHFEQUEwRDs7QUFNNUQ7SUFBeUMsK0NBQWdCO0lBRXZELDZCQUNTLE9BR047UUFKSCxZQU1FLGtCQUFNLGVBQWUsRUFBRSxnQ0FBZ0MsQ0FBQyxTQUN6RDtRQU5RLGFBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBUXRDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFWRCxDQUF5QyxnQkFBZ0IsR0FVeEQ7Ozs7SUFUQyxtQ0FBc0M7O0lBRXBDLHNDQUdDOztBQU1MO0lBQTZDLG1EQUFnQjtJQUUzRCxpQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsU0FDbEU7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2QyxnQkFBZ0IsR0FLNUQ7Ozs7SUFKQyx1Q0FBMkM7O0lBQy9CLDBDQUFtQjs7QUFLakM7SUFBZ0Qsc0RBQW1CO0lBRWpFLG9DQUFtQixPQUFnQztRQUFuRCxZQUNFLGtCQUFNLGVBQWUsRUFBRSxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsU0FDbEU7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFEMUMsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0QsbUJBQW1CLEdBS2xFOzs7O0lBSkMsMENBQThDOztJQUNsQyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDVVNUT01FUl9DT1VQT05TLFxuICBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsXG4gIFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELFxuICBDTEFJTV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxuICBMb2FkZXJSZXNldEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uTm90aWZpY2F0aW9uLFxuICBDdXN0b21lckNvdXBvbjJDdXN0b21lcixcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DVVNUT01FUl9DT1VQT05TID0gJ1tVc2VyXSBMb2FkIEN1c3RvbWVyIENvdXBvbnMnO1xuZXhwb3J0IGNvbnN0IExPQURfQ1VTVE9NRVJfQ09VUE9OU19GQUlMID0gJ1tVc2VyXSBMb2FkIEN1c3RvbWVyIENvdXBvbnMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DVVNUT01FUl9DT1VQT05TX1NVQ0NFU1MgPVxuICAnW1VzZXJdIExvYWQgQ3VzdG9tZXIgQ291cG9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9MT0FEX0NVU1RPTUVSX0NPVVBPTlMgPSAnW1VzZXJdIFJlc2V0IExvYWQgQ3VzdG9tZXIgQ291cG9ucyc7XG5cbmV4cG9ydCBjb25zdCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OID1cbiAgJ1tVc2VyXSBTdWJzY3JpYmUgQ3VzdG9tZXIgTm90aWZpY2F0aW9uIENvdXBvbic7XG5leHBvcnQgY29uc3QgU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9GQUlMID1cbiAgJ1tVc2VyXSBTdWJzY3JpYmUgQ3VzdG9tZXIgQ291cG9uIE5vdGlmaWNhdGlvbiBGYWlsJztcbmV4cG9ydCBjb25zdCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1NVQ0NFU1MgPVxuICAnW1VzZXJdIFN1YnNjcmliZSBDdXN0b21lciBDb3Vwb24gTm90aWZpY2F0aW9uIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTUyA9XG4gICdbVXNlcl0gUmVzZXQgU3Vic2NyaWJlIEN1c3RvbWVyIENvdXBvbiBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTiA9XG4gICdbVXNlcl0gVW5zdWJzY3JpYmUgQ3VzdG9tZXIgTm90aWZpY2F0aW9uIENvdXBvbic7XG5leHBvcnQgY29uc3QgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX0ZBSUwgPVxuICAnW1VzZXJdIFVuc3Vic2NyaWJlIEN1c3RvbWVyIENvdXBvbiBOb3RpZmljYXRpb24gRmFpbCc7XG5leHBvcnQgY29uc3QgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1NVQ0NFU1MgPVxuICAnW1VzZXJdIFVuc3Vic2NyaWJlIEN1c3RvbWVyIENvdXBvbiBOb3RpZmljYXRpb24gU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1MgPVxuICAnW1VzZXJdIFJlc2V0IFVuc3Vic2NyaWJlIEN1c3RvbWVyIENvdXBvbiBQcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IENMQUlNX0NVU1RPTUVSX0NPVVBPTiA9ICdbVXNlcl0gQ2xhaW0gQ3VzdG9tZXInO1xuZXhwb3J0IGNvbnN0IENMQUlNX0NVU1RPTUVSX0NPVVBPTl9GQUlMID0gJ1tVc2VyXSBDbGFpbSBDdXN0b21lciBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEFJTV9DVVNUT01FUl9DT1VQT05fU1VDQ0VTUyA9ICdbVXNlcl0gQ2xhaW0gQ3VzdG9tZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VzdG9tZXJDb3Vwb25zIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVU1RPTUVSX0NPVVBPTlM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHBhZ2VTaXplOiBudW1iZXI7XG4gICAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAgIHNvcnQ/OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDVVNUT01FUl9DT1VQT05TKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1c3RvbWVyQ291cG9uc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VTVE9NRVJfQ09VUE9OU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfQ09VUE9OUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDdXN0b21lckNvdXBvbnNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVU1RPTUVSX0NPVVBPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0KSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfQ09VUE9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0TG9hZEN1c3RvbWVyQ291cG9ucyBleHRlbmRzIExvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0xPQURfQ1VTVE9NRVJfQ09VUE9OUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfQ09VUE9OUyk7XG4gIH1cbn1cblxuLy8gU3Vic2NyaWJlIGNvdXBvbiBub3RpZmljYXRpb24gYWN0aW9uc1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUN1c3RvbWVyQ291cG9uIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjb3Vwb25Db2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUN1c3RvbWVyQ291cG9uRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVDdXN0b21lckNvdXBvblN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEN1c3RvbWVyQ291cG9uTm90aWZpY2F0aW9uKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUHJvY2VzcyBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT047XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvdXBvbkNvZGU6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblByb2Nlc3MgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9VTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBVTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYWltQ3VzdG9tZXJDb3Vwb24gZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMQUlNX0NVU1RPTUVSX0NPVVBPTjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY291cG9uQ29kZTtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFpbUN1c3RvbWVyQ291cG9uRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xBSU1fQ1VTVE9NRVJfQ09VUE9OX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhaW1DdXN0b21lckNvdXBvblN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMQUlNX0NVU1RPTUVSX0NPVVBPTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VzdG9tZXJDb3Vwb24yQ3VzdG9tZXIpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIEN1c3RvbWVyQ291cG9uQWN0aW9uID1cbiAgfCBMb2FkQ3VzdG9tZXJDb3Vwb25zXG4gIHwgTG9hZEN1c3RvbWVyQ291cG9uc0ZhaWxcbiAgfCBMb2FkQ3VzdG9tZXJDb3Vwb25zU3VjY2Vzc1xuICB8IFJlc2V0TG9hZEN1c3RvbWVyQ291cG9uc1xuICB8IFN1YnNjcmliZUN1c3RvbWVyQ291cG9uXG4gIHwgU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25GYWlsXG4gIHwgU3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25TdWNjZXNzXG4gIHwgUmVzZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblByb2Nlc3NcbiAgfCBVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uXG4gIHwgVW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbkZhaWxcbiAgfCBVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uU3VjY2Vzc1xuICB8IFJlc2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblByb2Nlc3NcbiAgfCBDbGFpbUN1c3RvbWVyQ291cG9uXG4gIHwgQ2xhaW1DdXN0b21lckNvdXBvbkZhaWxcbiAgfCBDbGFpbUN1c3RvbWVyQ291cG9uU3VjY2VzcztcbiJdfQ==