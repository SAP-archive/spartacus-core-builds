/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
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
export const REMOVE_CART = '[Multi Cart] Remove Cart';
/** @type {?} */
export const ADD_EMAIL_TO_MULTI_CART = '[Multi Cart] Add Email';
/** @type {?} */
export const ADD_EMAIL_TO_MULTI_CART_FAIL = '[Multi Cart] Add Email Fail';
/** @type {?} */
export const ADD_EMAIL_TO_MULTI_CART_SUCCESS = '[Multi Cart] Add Email Success';
/** @type {?} */
export const CART_PROCESSES_INCREMENT = '[Multi Cart] Cart Processes Increment';
/** @type {?} */
export const CART_PROCESSES_DECREMENT = '[Multi Cart] Cart Processes Decrement';
/**
 * To keep track of cart creation process we use cart with `fresh` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `fresh` cart entity for loading/error state.
 * @type {?}
 */
export const FRESH_CART_ID = 'fresh';
export class ResetFreshCart extends EntityProcessesLoaderResetAction {
    constructor() {
        super(MULTI_CART_FEATURE, FRESH_CART_ID);
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
        super(MULTI_CART_FEATURE, FRESH_CART_ID, payload);
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
        super(MULTI_CART_FEATURE, FRESH_CART_ID);
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
        super(MULTI_CART_FEATURE, FRESH_CART_ID);
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
export class ResetMultiCartDetails extends EntityProcessesLoaderResetAction {
    constructor() {
        super(MULTI_CART_FEATURE, undefined);
        this.type = RESET_MULTI_CART_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetMultiCartDetails.prototype.type;
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
export class CartProcessesIncrement extends EntityProcessesIncrementAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload);
        this.payload = payload;
        this.type = CART_PROCESSES_INCREMENT;
    }
}
if (false) {
    /** @type {?} */
    CartProcessesIncrement.prototype.type;
    /** @type {?} */
    CartProcessesIncrement.prototype.payload;
}
export class CartProcessesDecrement extends EntityProcessesDecrementAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload);
        this.payload = payload;
        this.type = CART_PROCESSES_DECREMENT;
    }
}
if (false) {
    /** @type {?} */
    CartProcessesDecrement.prototype.type;
    /** @type {?} */
    CartProcessesDecrement.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QixnQ0FBZ0MsR0FDakMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFekQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLCtCQUErQjs7QUFFL0QsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFDM0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLGtDQUFrQzs7QUFFM0UsTUFBTSxPQUFPLGVBQWUsR0FBRyx3QkFBd0I7O0FBQ3ZELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBRXZFLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBRXpFLE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBRXpFLE1BQU0sT0FBTyxjQUFjLEdBQUcsNkJBQTZCOztBQUUzRCxNQUFNLE9BQU8sV0FBVyxHQUFHLDBCQUEwQjs7QUFFckQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLHdC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dGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX0ZSRVNIX0NBUlQgPSAnW011bHRpIENhcnRdIFJlc2V0IEZyZXNoIENhcnQnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0JztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9NVUxUSV9DQVJUX0RFVEFJTFMgPSAnW011bHRpIENhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfRlJFU0hfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gU2V0IEZyZXNoIENhcnQnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIEFkZCBFbWFpbCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQgPSAnW011bHRpIENhcnRdIENhcnQgUHJvY2Vzc2VzIEluY3JlbWVudCc7XG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBEZWNyZW1lbnQnO1xuXG4vKipcbiAqIFRvIGtlZXAgdHJhY2sgb2YgY2FydCBjcmVhdGlvbiBwcm9jZXNzIHdlIHVzZSBjYXJ0IHdpdGggYGZyZXNoYCBpZC5cbiAqIEFmdGVyIGNyZWF0aW5nIGNhcnQgd2Ugc3dpdGNoIHRvIGVudGl0eSB3aXRoIGBjb2RlYCBvciBgZ3VpZGAuXG4gKiBXZSBuZWVkIGBmcmVzaGAgY2FydCBlbnRpdHkgZm9yIGxvYWRpbmcvZXJyb3Igc3RhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBGUkVTSF9DQVJUX0lEID0gJ2ZyZXNoJztcblxuZXhwb3J0IGNsYXNzIFJlc2V0RnJlc2hDYXJ0IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfRlJFU0hfQ0FSVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RnJlc2hDYXJ0IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfRlJFU0hfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENhcnQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIEZSRVNIX0NBUlRfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVNdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VNdWx0aUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IG9sZENhcnRJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQub2xkQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRNdWx0aUNhcnREZXRhaWxzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUNhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0luY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlDYXJ0QWN0aW9ucyA9XG4gIHwgUmVzZXRGcmVzaENhcnRcbiAgfCBTZXRGcmVzaENhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRcbiAgfCBDcmVhdGVNdWx0aUNhcnRGYWlsXG4gIHwgQ3JlYXRlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IExvYWRNdWx0aUNhcnRcbiAgfCBMb2FkTXVsdGlDYXJ0RmFpbFxuICB8IExvYWRNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTWVyZ2VNdWx0aUNhcnRcbiAgfCBNZXJnZU11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBSZXNldE11bHRpQ2FydERldGFpbHNcbiAgfCBSZW1vdmVDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFxuICB8IEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsXG4gIHwgQWRkRW1haWxUb011bHRpQ2FydFN1Y2Nlc3NcbiAgfCBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gIHwgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudDtcbiJdfQ==