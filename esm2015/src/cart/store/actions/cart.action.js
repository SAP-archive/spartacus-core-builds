/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
export const MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
/** @type {?} */
export const RESET_CART_DETAILS = '[Cart] Reset Cart Details';
/** @type {?} */
export const CLEAR_CART = '[Cart] Clear Cart';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQyxNQUFNLE9BQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxPQUFPLGdCQUFnQixHQUFHLHlCQUF5Qjs7QUFDekQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDRCQUE0Qjs7QUFFL0QsTUFBTSxPQUFPLFNBQVMsR0FBRyxrQkFBa0I7O0FBQzNDLE1BQU0sT0FBTyxjQUFjLEdBQUcsdUJBQXVCOztBQUNyRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsMEJBQTBCOztBQUUzRCxNQUFNLE9BQU8sVUFBVSxHQUFHLG1CQUFtQjs7QUFDN0MsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFFN0QsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFFN0QsTUFBTSxPQUFPLFVBQVUsR0FBRyxtQkFBbUI7QUFFN0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFakUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFEQSxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHNUIsQ0FBQztDQUNGOzs7SUFKQywwQkFBNEI7O0lBQ2hCLDZCQUFtQjs7QUFLakMsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFckUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRFQsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGtCQUFrQixDQUFDLG1CQUFtQjs7OztJQUUzRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURBLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQW9DOztJQUN4QixvQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxRQUFTLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRS9ELFlBQW1CLE9BQTJDO1FBQzVELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURBLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxTQUFTLENBQUM7SUFHMUIsQ0FBQztDQUNGOzs7SUFKQyx3QkFBMEI7O0lBQ2QsMkJBQWtEOztBQUtoRSxNQUFNLE9BQU8sWUFBYSxTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUVuRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxjQUFjLENBQUM7SUFHL0IsQ0FBQztDQUNGOzs7SUFKQyw0QkFBK0I7O0lBQ25CLCtCQUFtQjs7QUFLakMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRXpFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFHbEMsQ0FBQztDQUNGOzs7SUFKQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFLakMsTUFBTSxPQUFPLFNBQVM7Ozs7SUFFcEIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLFVBQVUsQ0FBQztJQUNPLENBQUM7Q0FDcEM7OztJQUZDLHlCQUEyQjs7SUFDZiw0QkFBbUI7O0FBR2pDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFM0IsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0QsQ0FBQztDQUNwQzs7O0lBRkMsZ0NBQW1DOztJQUN2QixtQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0I7UUFEUyxTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDcEIsQ0FBQztDQUNqQjs7O0lBRkMsZ0NBQW1DOztBQUlyQyxNQUFNLE9BQU8sU0FBVSxTQUFRLGtCQUFrQixDQUFDLGlCQUFpQjtJQUVqRTtRQUNFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUZWLFNBQUksR0FBRyxVQUFVLENBQUM7SUFHM0IsQ0FBQztDQUNGOzs7SUFKQyx5QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDQVJUX0RBVEEgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUID0gJ1tDYXJ0XSBDcmVhdGUgQ2FydCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlRfRkFJTCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gQ3JlYXRlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlQgPSAnW0NhcnRdIExvYWQgQ2FydCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX0ZBSUwgPSAnW0NhcnRdIExvYWQgQ2FydCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gTG9hZCBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTUVSR0VfQ0FSVCA9ICdbQ2FydF0gTWVyZ2UgQ2FydCc7XG5leHBvcnQgY29uc3QgTUVSR0VfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBNZXJnZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVF9ERVRBSUxTID0gJ1tDYXJ0XSBSZXNldCBDYXJ0IERldGFpbHMnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0FSVCA9ICdbQ2FydF0gQ2xlYXIgQ2FydCc7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0RmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FydEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJ0U3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJnZUNhcnRTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0Q2FydERldGFpbHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNhcnQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0FSVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0QWN0aW9uID1cbiAgfCBDcmVhdGVDYXJ0XG4gIHwgQ3JlYXRlQ2FydEZhaWxcbiAgfCBDcmVhdGVDYXJ0U3VjY2Vzc1xuICB8IExvYWRDYXJ0XG4gIHwgTG9hZENhcnRGYWlsXG4gIHwgTG9hZENhcnRTdWNjZXNzXG4gIHwgTWVyZ2VDYXJ0XG4gIHwgTWVyZ2VDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0Q2FydERldGFpbHNcbiAgfCBDbGVhckNhcnQ7XG4iXX0=