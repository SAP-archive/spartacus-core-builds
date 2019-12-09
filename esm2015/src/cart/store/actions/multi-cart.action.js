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
export const SET_ACTIVE_CART_ID = '[Multi Cart] Set Active Cart Id';
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
export class SetActiveCartId {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CART_ID;
    }
}
if (false) {
    /** @type {?} */
    SetActiveCartId.prototype.type;
    /** @type {?} */
    SetActiveCartId.prototype.payload;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QixnQ0FBZ0MsR0FDakMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFekQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLCtCQUErQjs7QUFFL0QsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFDM0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLGtDQUFrQzs7QUFFM0UsTUFBTSxPQUFPLGVBQWUsR0FBRyx3QkFBd0I7O0FBQ3ZELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBRXZFLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBRXpFLE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBRXpFLE1BQU0sT0FBTyxjQUFjLEdBQUcsNkJBQTZCOztBQUUzRCxNQUFNLE9BQU8sV0FBVyxHQUFHLDBCQUEwQjs7QUFFckQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLHdC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QWU7UUFDaEMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjs7O0lBSkMsc0NBQXlDOztJQUM3Qix5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IEVudGl0eVJlbW92ZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS9lbnRpdHkuYWN0aW9uJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9GUkVTSF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfRkFJTCA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gTWVyZ2UgQ2FydCc7XG5leHBvcnQgY29uc3QgTUVSR0VfTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBNZXJnZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTID0gJ1tNdWx0aSBDYXJ0XSBSZXNldCBDYXJ0IERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0ZSRVNIX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBGcmVzaCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZW1vdmUgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gQWRkIEVtYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gQWRkIEVtYWlsIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9DQVJUX0lEID0gJ1tNdWx0aSBDYXJ0XSBTZXQgQWN0aXZlIENhcnQgSWQnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBJbmNyZW1lbnQnO1xuZXhwb3J0IGNvbnN0IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVCA9ICdbTXVsdGkgQ2FydF0gQ2FydCBQcm9jZXNzZXMgRGVjcmVtZW50JztcblxuLyoqXG4gKiBUbyBrZWVwIHRyYWNrIG9mIGNhcnQgY3JlYXRpb24gcHJvY2VzcyB3ZSB1c2UgY2FydCB3aXRoIGBmcmVzaGAgaWQuXG4gKiBBZnRlciBjcmVhdGluZyBjYXJ0IHdlIHN3aXRjaCB0byBlbnRpdHkgd2l0aCBgY29kZWAgb3IgYGd1aWRgLlxuICogV2UgbmVlZCBgZnJlc2hgIGNhcnQgZW50aXR5IGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlLlxuICovXG5leHBvcnQgY29uc3QgRlJFU0hfQ0FSVF9JRCA9ICdmcmVzaCc7XG5cbmV4cG9ydCBjbGFzcyBSZXNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEZyZXNoQ2FydCBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0ZSRVNIX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXJ0KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBGUkVTSF9DQVJUX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgRlJFU0hfQ0FSVF9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIEZSRVNIX0NBUlRfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVDYXJ0SWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9DQVJUX0lEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmc7IGV4dHJhRGF0YT86IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZzsgZXJyb3I/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZU11bHRpQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VNdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgb2xkQ2FydElkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyB1c2VySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5vbGRDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldE11bHRpQ2FydERldGFpbHMgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9NVUxUSV9DQVJUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgdW5kZWZpbmVkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlQ2FydCBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb011bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZXJyb3I6IGFueSB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0lOQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNEZWNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhcnRBY3Rpb25zID1cbiAgfCBSZXNldEZyZXNoQ2FydFxuICB8IFNldEZyZXNoQ2FydFxuICB8IFNldEFjdGl2ZUNhcnRJZFxuICB8IENyZWF0ZU11bHRpQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydEZhaWxcbiAgfCBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTG9hZE11bHRpQ2FydFxuICB8IExvYWRNdWx0aUNhcnRGYWlsXG4gIHwgTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZU11bHRpQ2FydFxuICB8IE1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICB8IFJlbW92ZUNhcnRcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IENhcnRQcm9jZXNzZXNJbmNyZW1lbnRcbiAgfCBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50O1xuIl19