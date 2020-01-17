/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
/** @type {?} */
export const CREATE_WISH_LIST = '[Wish List] Create Wish List';
/** @type {?} */
export const CREATE_WISH_LIST_FAIL = '[Wish List] Create Wish List Fail';
/** @type {?} */
export const CREATE_WISH_LIST_SUCCESS = '[Wish List] Create Wish List Success';
/** @type {?} */
export const LOAD_WISH_LIST = '[Wish List] Load Wish List';
/** @type {?} */
export const LOAD_WISH_LIST_SUCCESS = '[Wish List] Load Wish List Success';
/** @type {?} */
export const RESET_WISH_LIST_DETAILS = '[Wish List] Reset Wish List';
export class CreateWishList {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_WISH_LIST;
    }
}
if (false) {
    /** @type {?} */
    CreateWishList.prototype.type;
    /** @type {?} */
    CreateWishList.prototype.payload;
}
export class CreateWishListSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = CREATE_WISH_LIST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CreateWishListSuccess.prototype.type;
    /** @type {?} */
    CreateWishListSuccess.prototype.payload;
}
export class CreateWishListFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId, payload.error);
        this.payload = payload;
        this.type = CREATE_WISH_LIST_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CreateWishListFail.prototype.type;
    /** @type {?} */
    CreateWishListFail.prototype.payload;
}
export class LoadWishList {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
}
if (false) {
    /** @type {?} */
    LoadWishList.prototype.type;
    /** @type {?} */
    LoadWishList.prototype.payload;
}
export class LoadWishListSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = LOAD_WISH_LIST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadWishListSuccess.prototype.type;
    /** @type {?} */
    LoadWishListSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFekQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLDhCQUE4Qjs7QUFDOUQsTUFBTSxPQUFPLHFCQUFxQixHQUFHLG1DQUFtQzs7QUFDeEUsTUFBTSxPQUFPLHdCQUF3QixHQUFHLHNDQUFzQzs7QUFFOUUsTUFBTSxPQUFPLGNBQWMsR0FBRyw0QkFBNEI7O0FBQzFELE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxvQ0FBb0M7O0FBRTFFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyw2QkFBNkI7QUFFcEUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFFekIsWUFDUyxPQUlOO1FBSk0sWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQU85QixDQUFDO0NBQ0w7OztJQVJDLDhCQUFpQzs7SUFFL0IsaUNBSUM7O0FBSUwsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjs7OztJQUU1RCxZQUFtQixPQUF1QztRQUN4RCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUQxRCxZQUFPLEdBQVAsT0FBTyxDQUFnQztRQURqRCxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFHekMsQ0FBQztDQUNGOzs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUE4Qzs7QUFLNUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7OztJQUV0RCxZQUFtQixPQUF3QztRQUN6RCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFEbEQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBK0M7O0FBSzdELE1BQU0sT0FBTyxZQUFZOzs7O0lBRXZCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxjQUFjLENBQUM7SUFDTSxDQUFDO0NBQ3ZDOzs7SUFGQyw0QkFBK0I7O0lBQ25CLCtCQUFzQjs7QUFHcEMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjs7OztJQUUxRCxZQUFtQixPQUF3RDtRQUN6RSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUQxRCxZQUFPLEdBQVAsT0FBTyxDQUFpRDtRQURsRSxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGOzs7SUFKQyxtQ0FBdUM7O0lBQzNCLHNDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVF9GQUlMID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1dJU0hfTElTVCA9ICdbV2lzaCBMaXN0XSBMb2FkIFdpc2ggTGlzdCc7XG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBMb2FkIFdpc2ggTGlzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX1dJU0hfTElTVF9ERVRBSUxTID0gJ1tXaXNoIExpc3RdIFJlc2V0IFdpc2ggTGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFdpc2hMaXN0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfV0lTSF9MSVNUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFdpc2hMaXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2lzaExpc3RBY3Rpb25zID1cbiAgfCBDcmVhdGVXaXNoTGlzdFxuICB8IENyZWF0ZVdpc2hMaXN0U3VjY2Vzc1xuICB8IENyZWF0ZVdpc2hMaXN0RmFpbFxuICB8IExvYWRXaXNoTGlzdFxuICB8IExvYWRXaXNoTGlzdFN1Y2Nlc3M7XG4iXX0=