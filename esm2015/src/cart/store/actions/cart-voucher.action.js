/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { ADD_VOUCHER_PROCESS_ID, CART_DATA } from '../cart-state';
/** @type {?} */
export const CART_ADD_VOUCHER = '[Cart-voucher] Add Cart Vouchers';
/** @type {?} */
export const CART_ADD_VOUCHER_FAIL = '[Cart-voucher] Add Cart Voucher Fail';
/** @type {?} */
export const CART_ADD_VOUCHER_SUCCESS = '[Cart-voucher] Add Cart Voucher Success';
/** @type {?} */
export const CART_RESET_ADD_VOUCHER = '[Cart-voucher] Reset Add Cart Voucher';
/** @type {?} */
export const CART_REMOVE_VOUCHER = '[Cart-voucher] Remove Cart Voucher';
/** @type {?} */
export const CART_REMOVE_VOUCHER_FAIL = '[Cart-voucher] Remove Cart Voucher Fail';
/** @type {?} */
export const CART_REMOVE_VOUCHER_SUCCESS = '[Cart-voucher] Remove Cart Voucher Success';
// Adding cart voucher actions
export class CartAddVoucher extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER;
    }
}
if (false) {
    /** @type {?} */
    CartAddVoucher.prototype.type;
    /** @type {?} */
    CartAddVoucher.prototype.payload;
}
export class CartAddVoucherFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CartAddVoucherFail.prototype.type;
    /** @type {?} */
    CartAddVoucherFail.prototype.payload;
}
export class CartAddVoucherSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CartAddVoucherSuccess.prototype.type;
    /** @type {?} */
    CartAddVoucherSuccess.prototype.payload;
}
export class CartResetAddVoucher extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.type = CART_RESET_ADD_VOUCHER;
    }
}
if (false) {
    /** @type {?} */
    CartResetAddVoucher.prototype.type;
}
// Deleting cart voucher
export class CartRemoveVoucher extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER;
    }
}
if (false) {
    /** @type {?} */
    CartRemoveVoucher.prototype.type;
    /** @type {?} */
    CartRemoveVoucher.prototype.payload;
}
export class CartRemoveVoucherFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CartRemoveVoucherFail.prototype.type;
    /** @type {?} */
    CartRemoveVoucherFail.prototype.payload;
}
export class CartRemoveVoucherSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CartRemoveVoucherSuccess.prototype.type;
    /** @type {?} */
    CartRemoveVoucherSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvY2FydC12b3VjaGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVsRSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsa0NBQWtDOztBQUNsRSxNQUFNLE9BQU8scUJBQXFCLEdBQUcsc0NBQXNDOztBQUMzRSxNQUFNLE9BQU8sd0JBQXdCLEdBQ25DLHlDQUF5Qzs7QUFDM0MsTUFBTSxPQUFPLHNCQUFzQixHQUFHLHVDQUF1Qzs7QUFFN0UsTUFBTSxPQUFPLG1CQUFtQixHQUFHLG9DQUFvQzs7QUFDdkUsTUFBTSxPQUFPLHdCQUF3QixHQUNuQyx5Q0FBeUM7O0FBQzNDLE1BQU0sT0FBTywyQkFBMkIsR0FDdEMsNENBQTRDOztBQUc5QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjs7OztJQUVsRCxZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUZ4QyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFLakMsQ0FBQztDQUNGOzs7SUFOQyw4QkFBaUM7O0lBRS9CLGlDQUFxRTs7QUFNekUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7OztJQUV0RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEdkMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFHdEMsQ0FBQztDQUNGOzs7SUFKQyxrQ0FBc0M7O0lBQzFCLHFDQUFtQjs7QUFLakMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjs7OztJQUU1RCxZQUFtQixPQUEyQztRQUM1RCxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFEOUIsWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBa0Q7O0FBS2hFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxpQkFBaUI7SUFFeEQ7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFGeEMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBR3ZDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXVDOzs7QUFPekMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjs7OztJQUVyRCxZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUZWLFlBQU8sR0FBUCxPQUFPLENBQXVEO1FBRjlELFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUtwQyxDQUFDO0NBQ0Y7OztJQU5DLGlDQUFvQzs7SUFFbEMsb0NBQXFFOztBQU16RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCOzs7O0lBRXpELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBbUI7O0FBS2pDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxtQkFBbUI7Ozs7SUFFL0QsWUFBbUIsT0FBMkM7UUFDNUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsU0FBSSxHQUFHLDJCQUEyQixDQUFDO0lBRzVDLENBQUM7Q0FDRjs7O0lBSkMsd0NBQTRDOztJQUNoQywyQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5UmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCwgQ0FSVF9EQVRBIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX0FERF9WT1VDSEVSID0gJ1tDYXJ0LXZvdWNoZXJdIEFkZCBDYXJ0IFZvdWNoZXJzJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9WT1VDSEVSX0ZBSUwgPSAnW0NhcnQtdm91Y2hlcl0gQWRkIENhcnQgVm91Y2hlciBGYWlsJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1MgPVxuICAnW0NhcnQtdm91Y2hlcl0gQWRkIENhcnQgVm91Y2hlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFU0VUX0FERF9WT1VDSEVSID0gJ1tDYXJ0LXZvdWNoZXJdIFJlc2V0IEFkZCBDYXJ0IFZvdWNoZXInO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfVk9VQ0hFUiA9ICdbQ2FydC12b3VjaGVyXSBSZW1vdmUgQ2FydCBWb3VjaGVyJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9WT1VDSEVSX0ZBSUwgPVxuICAnW0NhcnQtdm91Y2hlcl0gUmVtb3ZlIENhcnQgVm91Y2hlciBGYWlsJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1MgPVxuICAnW0NhcnQtdm91Y2hlcl0gUmVtb3ZlIENhcnQgVm91Y2hlciBTdWNjZXNzJztcblxuLy8gQWRkaW5nIGNhcnQgdm91Y2hlciBhY3Rpb25zXG5leHBvcnQgY2xhc3MgQ2FydEFkZFZvdWNoZXIgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX1ZPVUNIRVI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdm91Y2hlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkVm91Y2hlckZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX1ZPVUNIRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRWb3VjaGVyU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZXNldEFkZFZvdWNoZXIgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFU0VUX0FERF9WT1VDSEVSO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIERlbGV0aW5nIGNhcnQgdm91Y2hlclxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVWb3VjaGVyIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9WT1VDSEVSO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHZvdWNoZXJJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZVZvdWNoZXJGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9WT1VDSEVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlVm91Y2hlclN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ2FydFZvdWNoZXJBY3Rpb24gPVxuICB8IENhcnRBZGRWb3VjaGVyXG4gIHwgQ2FydEFkZFZvdWNoZXJGYWlsXG4gIHwgQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gIHwgQ2FydFJlc2V0QWRkVm91Y2hlclxuICB8IENhcnRSZW1vdmVWb3VjaGVyXG4gIHwgQ2FydFJlbW92ZVZvdWNoZXJGYWlsXG4gIHwgQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzO1xuIl19