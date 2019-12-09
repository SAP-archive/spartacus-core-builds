/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MULTI_CART_FEATURE } from '../multi-cart-state';
import { EntityLoadAction, EntitySuccessAction, EntityFailAction, EntityResetAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
/** @type {?} */
export const RESET_FRESH_CART = '[Multi Cart] Reset Fresh Cart';
/** @type {?} */
export const CREATE_MULTI_CART = '[Multi Cart] Create Cart';
/** @type {?} */
export const CREATE_MULTI_CART_FAIL = '[Multi Cart] Create Cart Fail';
/** @type {?} */
export const CREATE_MULTI_CART_SUCCESS = '[Multi Cart] Create Cart Success';
/** @type {?} */
export const LOAD_MULTI_CART = '[Multi Cart] Load Cart';
/** @type {?} */
export const LOAD_MULTI_CART_FAIL = '[Multi Cart] Load Cart Fail';
/** @type {?} */
export const LOAD_MULTI_CART_SUCCESS = '[Multi Cart] Load Cart Success';
/** @type {?} */
export const MERGE_MULTI_CART = '[Multi Cart] Merge Cart';
/** @type {?} */
export const MERGE_MULTI_CART_SUCCESS = '[Multi Cart] Merge Cart Success';
/** @type {?} */
export const RESET_MULTI_CART_DETAILS = '[Multi Cart] Reset Cart Details';
/** @type {?} */
export const SET_FRESH_CART = '[Multi Cart] Set Fresh Cart';
/** @type {?} */
export const SET_CART_LOADING = '[Multi Cart] Set Cart Loading';
/** @type {?} */
export const REMOVE_CART = '[Multi Cart] Remove Cart';
/** @type {?} */
export const ADD_EMAIL_TO_MULTI_CART = '[Multi Cart] Add Email';
/** @type {?} */
export const ADD_EMAIL_TO_MULTI_CART_FAIL = '[Multi Cart] Add Email Fail';
/** @type {?} */
export const ADD_EMAIL_TO_MULTI_CART_SUCCESS = '[Multi Cart] Add Email Success';
export class ResetFreshCart extends EntityResetAction {
    constructor() {
        super(MULTI_CART_FEATURE, 'fresh');
        this.type = RESET_FRESH_CART;
    }
}
if (false) {
    /** @type {?} */
    ResetFreshCart.prototype.type;
}
export class SetFreshCart extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, 'fresh', payload);
        this.payload = payload;
        this.type = SET_FRESH_CART;
    }
}
if (false) {
    /** @type {?} */
    SetFreshCart.prototype.type;
    /** @type {?} */
    SetFreshCart.prototype.payload;
}
export class CreateMultiCart extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, 'fresh');
        this.payload = payload;
        this.type = CREATE_MULTI_CART;
    }
}
if (false) {
    /** @type {?} */
    CreateMultiCart.prototype.type;
    /** @type {?} */
    CreateMultiCart.prototype.payload;
}
export class CreateMultiCartFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, 'fresh');
        this.payload = payload;
        this.type = CREATE_MULTI_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CreateMultiCartFail.prototype.type;
    /** @type {?} */
    CreateMultiCartFail.prototype.payload;
}
export class CreateMultiCartSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = CREATE_MULTI_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CreateMultiCartSuccess.prototype.type;
    /** @type {?} */
    CreateMultiCartSuccess.prototype.payload;
}
export class LoadMultiCart extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId);
        this.payload = payload;
        this.type = LOAD_MULTI_CART;
    }
}
if (false) {
    /** @type {?} */
    LoadMultiCart.prototype.type;
    /** @type {?} */
    LoadMultiCart.prototype.payload;
}
export class LoadMultiCartFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId, payload.error);
        this.payload = payload;
        this.type = LOAD_MULTI_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadMultiCartFail.prototype.type;
    /** @type {?} */
    LoadMultiCartFail.prototype.payload;
}
export class LoadMultiCartSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = LOAD_MULTI_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadMultiCartSuccess.prototype.type;
    /** @type {?} */
    LoadMultiCartSuccess.prototype.payload;
}
export class MergeMultiCart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_MULTI_CART;
    }
}
if (false) {
    /** @type {?} */
    MergeMultiCart.prototype.type;
    /** @type {?} */
    MergeMultiCart.prototype.payload;
}
// I don't know if we should keep it or replace with different action for removal
export class MergeMultiCartSuccess extends EntityRemoveAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.oldCartId);
        this.payload = payload;
        this.type = MERGE_MULTI_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    MergeMultiCartSuccess.prototype.type;
    /** @type {?} */
    MergeMultiCartSuccess.prototype.payload;
}
export class ResetMultiCartDetails extends EntityResetAction {
    constructor() {
        super(MULTI_CART_FEATURE, undefined);
        this.type = RESET_MULTI_CART_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetMultiCartDetails.prototype.type;
}
export class SetCartLoading extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId);
        this.payload = payload;
        this.type = SET_CART_LOADING;
    }
}
if (false) {
    /** @type {?} */
    SetCartLoading.prototype.type;
    /** @type {?} */
    SetCartLoading.prototype.payload;
}
export class RemoveCart extends EntityRemoveAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload);
        this.payload = payload;
        this.type = REMOVE_CART;
    }
}
if (false) {
    /** @type {?} */
    RemoveCart.prototype.type;
    /** @type {?} */
    RemoveCart.prototype.payload;
}
export class AddEmailToMultiCart extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_MULTI_CART;
    }
}
if (false) {
    /** @type {?} */
    AddEmailToMultiCart.prototype.type;
    /** @type {?} */
    AddEmailToMultiCart.prototype.payload;
}
export class AddEmailToMultiCartFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId, payload.error);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_MULTI_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddEmailToMultiCartFail.prototype.type;
    /** @type {?} */
    AddEmailToMultiCartFail.prototype.payload;
}
export class AddEmailToMultiCartSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_MULTI_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddEmailToMultiCartSuccess.prototype.type;
    /** @type {?} */
    AddEmailToMultiCartSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBR3RELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRywrQkFBK0I7O0FBRS9ELE1BQU0sT0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sT0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7O0FBRTNFLE1BQU0sT0FBTyxlQUFlLEdBQUcsd0JBQXdCOztBQUN2RCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsZ0NBQWdDOztBQUV2RSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV6RSxNQUFNLE9BQU8sY0FBYyxHQUFHLDZCQUE2Qjs7QUFFM0QsTUFBTSxPQUFPLGdCQUFnQixHQUFHLCtCQUErQjs7QUFFL0QsTUFBTSxPQUFPLFdBQVcsR0FBRywwQkFBMEI7O0FBRXJELE1BQU0sT0FBTyx1QkFBdUIsR0FBRyx3QkFBd0I7O0FBQy9ELE1BQU0sT0FBTyw0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QUFNLENBQUMsQ0FBQztRQUZuQyxZQUFPLEdBQVAsT0FBTyxDQUFtRDtRQUYxRCxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFLeEMsQ0FBQztDQUNGOzs7SUFOQyxtQ0FBd0M7O0lBRXRDLHNDQUFpRTs7QUFNckUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFnQjs7OztJQUUzRCxZQUFtQixPQUF1RDtRQUN4RSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0Q7UUFEakUsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBRzdDLENBQUM7Q0FDRjs7O0lBSkMsdUNBQTZDOztJQUNqQywwQ0FBOEQ7O0FBSzVFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBbUI7Ozs7SUFFakUsWUFBbUIsT0FBMkM7UUFDNUQsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUR6QixZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGOzs7SUFKQywwQ0FBZ0Q7O0lBQ3BDLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9GUkVTSF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTWVyZ2UgQ2FydCc7XG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBDYXJ0IERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0ZSRVNIX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFNFVF9DQVJUX0xPQURJTkcgPSAnW011bHRpIENhcnRdIFNldCBDYXJ0IExvYWRpbmcnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIEFkZCBFbWFpbCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBSZXNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgJ2ZyZXNoJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXJ0KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCAnZnJlc2gnLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgJ2ZyZXNoJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsICdmcmVzaCcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnRJZDogc3RyaW5nOyBlcnJvcj86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbi8vIEkgZG9uJ3Qga25vdyBpZiB3ZSBzaG91bGQga2VlcCBpdCBvciByZXBsYWNlIHdpdGggZGlmZmVyZW50IGFjdGlvbiBmb3IgcmVtb3ZhbFxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IG9sZENhcnRJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQub2xkQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRNdWx0aUNhcnREZXRhaWxzIGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldENhcnRMb2FkaW5nIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQ0FSVF9MT0FESU5HO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUNhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhcnRBY3Rpb25zID1cbiAgfCBSZXNldEZyZXNoQ2FydFxuICB8IFNldEZyZXNoQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydEZhaWxcbiAgfCBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTG9hZE11bHRpQ2FydFxuICB8IExvYWRNdWx0aUNhcnRGYWlsXG4gIHwgTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZU11bHRpQ2FydFxuICB8IE1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICB8IFNldENhcnRMb2FkaW5nXG4gIHwgUmVtb3ZlQ2FydFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0RmFpbFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzO1xuIl19