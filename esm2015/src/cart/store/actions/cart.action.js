/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { CART_DATA } from '../cart-state';
/** @type {?} */
export const CREATE_CART = '[Cart] Create Cart';
/** @type {?} */
export const CREATE_CART_FAIL = '[Cart] Create Cart Fail';
/** @type {?} */
export const CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
/** @type {?} */
export const LOAD_CART = '[Cart] Load Cart';
/** @type {?} */
export const LOAD_CART_FAIL = '[Cart] Load Cart Fail';
/** @type {?} */
export const LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
/** @type {?} */
export const ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
/** @type {?} */
export const ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
/** @type {?} */
export const ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
/** @type {?} */
export const MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
export const MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
/** @type {?} */
export const RESET_CART_DETAILS = '[Cart] Reset Cart Details';
/** @type {?} */
export const CLEAR_CART = '[Cart] Clear Cart';
/** @type {?} */
export const DELETE_CART = '[Cart] Delete Cart';
/** @type {?} */
export const DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
export class CreateCart extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CREATE_CART;
    }
}
if (false) {
    /** @type {?} */
    CreateCart.prototype.type;
    /** @type {?} */
    CreateCart.prototype.payload;
}
export class CreateCartFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CREATE_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CreateCartFail.prototype.type;
    /** @type {?} */
    CreateCartFail.prototype.payload;
}
export class CreateCartSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CREATE_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CreateCartSuccess.prototype.type;
    /** @type {?} */
    CreateCartSuccess.prototype.payload;
}
export class AddEmailToCart extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART;
    }
}
if (false) {
    /** @type {?} */
    AddEmailToCart.prototype.type;
    /** @type {?} */
    AddEmailToCart.prototype.payload;
}
export class AddEmailToCartFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddEmailToCartFail.prototype.type;
    /** @type {?} */
    AddEmailToCartFail.prototype.payload;
}
export class AddEmailToCartSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddEmailToCartSuccess.prototype.type;
    /** @type {?} */
    AddEmailToCartSuccess.prototype.payload;
}
export class LoadCart extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = LOAD_CART;
    }
}
if (false) {
    /** @type {?} */
    LoadCart.prototype.type;
    /** @type {?} */
    LoadCart.prototype.payload;
}
export class LoadCartFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCartFail.prototype.type;
    /** @type {?} */
    LoadCartFail.prototype.payload;
}
export class LoadCartSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = LOAD_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCartSuccess.prototype.type;
    /** @type {?} */
    LoadCartSuccess.prototype.payload;
}
export class MergeCart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
}
if (false) {
    /** @type {?} */
    MergeCart.prototype.type;
    /** @type {?} */
    MergeCart.prototype.payload;
}
export class MergeCartSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    MergeCartSuccess.prototype.type;
    /** @type {?} */
    MergeCartSuccess.prototype.payload;
}
export class ResetCartDetails {
    constructor() {
        this.type = RESET_CART_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetCartDetails.prototype.type;
}
export class ClearCart extends StateLoaderActions.LoaderResetAction {
    constructor() {
        super(CART_DATA);
        this.type = CLEAR_CART;
    }
}
if (false) {
    /** @type {?} */
    ClearCart.prototype.type;
}
export class DeleteCart extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = DELETE_CART;
    }
}
if (false) {
    /** @type {?} */
    DeleteCart.prototype.type;
    /** @type {?} */
    DeleteCart.prototype.payload;
}
export class DeleteCartFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = DELETE_CART_FAIL;
    }
}
if (false) {
    /** @type {?} */
    DeleteCartFail.prototype.type;
    /** @type {?} */
    DeleteCartFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQyxNQUFNLE9BQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxPQUFPLGdCQUFnQixHQUFHLHlCQUF5Qjs7QUFDekQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDRCQUE0Qjs7QUFFL0QsTUFBTSxPQUFPLFNBQVMsR0FBRyxrQkFBa0I7O0FBQzNDLE1BQU0sT0FBTyxjQUFjLEdBQUcsdUJBQXVCOztBQUNyRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUUzRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUMzRCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLE9BQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUUzRSxNQUFNLE9BQU8sVUFBVSxHQUFHLG1CQUFtQjs7QUFDN0MsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFFN0QsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFFN0QsTUFBTSxPQUFPLFVBQVUsR0FBRyxtQkFBbUI7O0FBRTdDLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcseUJBQXlCO0FBRXpELE1BQU0sT0FBTyxVQUFXLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRWpFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdB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QWdCOzs7O0lBRTNCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNELENBQUM7Q0FDcEM7OztJQUZDLGdDQUFtQzs7SUFDdkIsbUNBQW1COztBQUdqQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCO1FBRFMsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ3BCLENBQUM7Q0FDakI7OztJQUZDLGdDQUFtQzs7QUFJckMsTUFBTSxPQUFPLFNBQVUsU0FBUSxrQkFBa0IsQ0FBQyxpQkFBaUI7SUFFakU7UUFDRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFGVixTQUFJLEdBQUcsVUFBVSxDQUFDO0lBRzNCLENBQUM7Q0FDRjs7O0lBSkMseUJBQTJCOztBQU03QixNQUFNLE9BQU8sVUFBVyxTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUVqRSxZQUFtQixPQUEyQztRQUM1RCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFEQSxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBRzVCLENBQUM7Q0FDRjs7O0lBSkMsMEJBQTRCOztJQUNoQiw2QkFBa0Q7O0FBS2hFLE1BQU0sT0FBTyxjQUFlLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRXJFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBR2pDLENBQUM7Q0FDRjs7O0lBSkMsOEJBQWlDOztJQUNyQixpQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDQVJUX0RBVEEgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlRfRkFJTCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlQgPSAnW0NhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX0ZBSUwgPSAnW0NhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlQgPSAnW0NhcnRdIEFkZCBFbWFpbCB0byBDYXJ0JztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fQ0FSVF9GQUlMID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IE1FUkdFX0NBUlQgPSAnW0NhcnRdIE1lcmdlIENhcnQnO1xuZXhwb3J0IGNvbnN0IE1FUkdFX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gTWVyZ2UgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlRfREVUQUlMUyA9ICdbQ2FydF0gUmVzZXQgQ2FydCBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlQgPSAnW0NhcnRdIENsZWFyIENhcnQnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBUlQgPSAnW0NhcnRdIERlbGV0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBGYWlsJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldENhcnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVDYXJ0RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERFTEVURV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPVxuICB8IENyZWF0ZUNhcnRcbiAgfCBDcmVhdGVDYXJ0RmFpbFxuICB8IENyZWF0ZUNhcnRTdWNjZXNzXG4gIHwgTG9hZENhcnRcbiAgfCBMb2FkQ2FydEZhaWxcbiAgfCBMb2FkQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZUNhcnRcbiAgfCBNZXJnZUNhcnRTdWNjZXNzXG4gIHwgUmVzZXRDYXJ0RGV0YWlsc1xuICB8IENsZWFyQ2FydFxuICB8IEFkZEVtYWlsVG9DYXJ0XG4gIHwgQWRkRW1haWxUb0NhcnRGYWlsXG4gIHwgQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gIHwgRGVsZXRlQ2FydFxuICB8IERlbGV0ZUNhcnRGYWlsO1xuIl19