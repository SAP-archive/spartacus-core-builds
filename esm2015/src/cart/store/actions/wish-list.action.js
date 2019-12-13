/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
import { FRESH_CART_ID } from './multi-cart.action';
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
export class CreateWishList extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, FRESH_CART_ID);
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
export class ResetWishListDetails extends EntityResetAction {
    constructor() {
        super(MULTI_CART_FEATURE, undefined);
        this.type = RESET_WISH_LIST_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetWishListDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFcEQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLDhCQUE4Qjs7QUFDOUQsTUFBTSxPQUFPLHFCQUFxQixHQUFHLG1DQUFtQzs7QUFDeEUsTUFBTSxPQUFPLHdCQUF3QixHQUFHLHNDQUFzQzs7QUFFOUUsTUFBTSxPQUFPLGNBQWMsR0FBRyw0QkFBNEI7O0FBQzFELE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxvQ0FBb0M7O0FBRTFFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyw2QkFBNkI7QUFFcEUsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7Ozs7SUFFbEQsWUFDUyxPQUlOO1FBRUQsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBTmxDLFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFTakMsQ0FBQztDQUNGOzs7SUFWQyw4QkFBaUM7O0lBRS9CLGlDQUlDOztBQU1MLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7Ozs7SUFFNUQsWUFBbUIsT0FBdUM7UUFDeEQsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFEMUQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0M7UUFEakQsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBOEM7O0FBSzVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7Ozs7SUFFdEQsWUFBbUIsT0FBd0M7UUFDekQsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRHhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRGxELFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLGtDQUFzQzs7SUFDMUIscUNBQStDOztBQUs3RCxNQUFNLE9BQU8sWUFBWTs7OztJQUV2QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ00sQ0FBQztDQUN2Qzs7O0lBRkMsNEJBQStCOztJQUNuQiwrQkFBc0I7O0FBR3BDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxtQkFBbUI7Ozs7SUFFMUQsWUFBbUIsT0FBd0Q7UUFDekUsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFEMUQsWUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFEbEUsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBR3ZDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXVDOztJQUMzQixzQ0FBK0Q7O0FBSzdFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFFekQ7UUFDRSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFGOUIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBR3hDLENBQUM7Q0FDRjs7O0lBSkMsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IEZSRVNIX0NBUlRfSUQgfSBmcm9tICcuL211bHRpLWNhcnQuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVF9GQUlMID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1dJU0hfTElTVCA9ICdbV2lzaCBMaXN0XSBMb2FkIFdpc2ggTGlzdCc7XG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBMb2FkIFdpc2ggTGlzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX1dJU0hfTElTVF9ERVRBSUxTID0gJ1tXaXNoIExpc3RdIFJlc2V0IFdpc2ggTGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXNoTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXNoTGlzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfV0lTSF9MSVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFdpc2hMaXN0RGV0YWlscyBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1dJU0hfTElTVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2lzaExpc3RBY3Rpb25zID1cbiAgfCBDcmVhdGVXaXNoTGlzdFxuICB8IENyZWF0ZVdpc2hMaXN0U3VjY2Vzc1xuICB8IENyZWF0ZVdpc2hMaXN0RmFpbFxuICB8IExvYWRXaXNoTGlzdFxuICB8IExvYWRXaXNoTGlzdFN1Y2Nlc3NcbiAgfCBSZXNldFdpc2hMaXN0RGV0YWlscztcbiJdfQ==