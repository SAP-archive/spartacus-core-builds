/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID } from '../store/cart-state';
import { CartSelectors } from '../store/selectors/index';
export class CartVoucherService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * @param {?} voucherId
     * @param {?=} cartId
     * @return {?}
     */
    addVoucher(voucherId, cartId) {
        this.combineUserAndCartId(cartId).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([occUserId, cartIdentifier]) => this.store.dispatch(new CartActions.CartAddVoucher({
            userId: occUserId,
            cartId: cartIdentifier,
            voucherId: voucherId,
        }))));
    }
    /**
     * @param {?} voucherId
     * @param {?=} cartId
     * @return {?}
     */
    removeVoucher(voucherId, cartId) {
        this.combineUserAndCartId(cartId).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([occUserId, cartIdentifier]) => this.store.dispatch(new CartActions.CartRemoveVoucher({
            userId: occUserId,
            cartId: cartIdentifier,
            voucherId: voucherId,
        }))));
    }
    /**
     * @return {?}
     */
    getAddVoucherResultError() {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    /**
     * @return {?}
     */
    getAddVoucherResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    /**
     * @return {?}
     */
    getAddVoucherResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    /**
     * @return {?}
     */
    resetAddVoucherProcessingState() {
        this.store.dispatch(new CartActions.CartResetAddVoucher());
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    combineUserAndCartId(cartId) {
        return combineLatest([
            this.authService.getOccUserId(),
            cartId
                ? of(cartId)
                : this.store.pipe(select(CartSelectors.getCartContent), map((/**
                 * @param {?} cart
                 * @return {?}
                 */
                cart => cart.code))),
        ]).pipe(take(1));
    }
}
CartVoucherService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartVoucherService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartVoucherService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CartVoucherService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFjLGFBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHekQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsWUFDWSxLQUVULEVBQ1MsV0FBd0I7UUFIeEIsVUFBSyxHQUFMLEtBQUssQ0FFZDtRQUNTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7Ozs7OztJQUVKLFVBQVUsQ0FBQyxTQUFpQixFQUFFLE1BQWU7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUM3QixNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsY0FBYztZQUN0QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQ0gsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLFNBQWlCLEVBQUUsTUFBZTtRQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUMxRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUM7WUFDaEMsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQyxDQUNILEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw4QkFBOEI7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLE1BQWM7UUFDekMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7WUFDL0IsTUFBTTtnQkFDSixDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFDcEMsR0FBRzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FDdkI7U0FDTixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7OztZQWpFRixVQUFVOzs7O1lBZE0sS0FBSztZQUdiLFdBQVc7Ozs7Ozs7SUFjaEIsbUNBRUM7Ozs7O0lBQ0QseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBRERfVk9VQ0hFUl9QUk9DRVNTX0lELCBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRWb3VjaGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBTdGF0ZVdpdGhDYXJ0IHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+XG4gICAgPixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBhZGRWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkKS5zdWJzY3JpYmUoKFtvY2NVc2VySWQsIGNhcnRJZGVudGlmaWVyXSkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlcih7XG4gICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgY2FydElkOiBjYXJ0SWRlbnRpZmllcixcbiAgICAgICAgICB2b3VjaGVySWQ6IHZvdWNoZXJJZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuQ2FydFJlc2V0QWRkVm91Y2hlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFtzdHJpbmcsIHN0cmluZ10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgY2FydElkXG4gICAgICAgID8gb2YoY2FydElkKVxuICAgICAgICA6IHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgIHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRDb250ZW50KSxcbiAgICAgICAgICAgIG1hcChjYXJ0ID0+IGNhcnQuY29kZSlcbiAgICAgICAgICApLFxuICAgIF0pLnBpcGUodGFrZSgxKSk7XG4gIH1cbn1cbiJdfQ==