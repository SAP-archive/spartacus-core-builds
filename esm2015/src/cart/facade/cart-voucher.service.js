/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID } from '../store/cart-state';
import { CartSelectors } from '../store/selectors/index';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
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
        if (cartId) {
            return this.authService.getOccUserId().pipe(take(1), map((/**
             * @param {?} userId
             * @return {?}
             */
            userId => [userId, cartId])));
        }
        else {
            return combineLatest([
                this.authService.getOccUserId(),
                this.store.pipe(select(CartSelectors.getCartContent), map((/**
                 * @param {?} cart
                 * @return {?}
                 */
                cart => cart))),
            ]).pipe(take(1), map((/**
             * @param {?} __0
             * @return {?}
             */
            ([userId, cart]) => [
                userId,
                userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code,
            ])));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd0RSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixZQUNZLEtBRVQsRUFDUyxXQUF3QjtRQUh4QixVQUFLLEdBQUwsS0FBSyxDQUVkO1FBQ1MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQzs7Ozs7O0lBRUosVUFBVSxDQUFDLFNBQWlCLEVBQUUsTUFBZTtRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUMxRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzdCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FDSCxFQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsU0FBaUIsRUFBRSxNQUFlO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLENBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztZQUNoQyxNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsY0FBYztZQUN0QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQ0gsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDhCQUE4QjtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsTUFBYztRQUN6QyxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBQyxDQUNoQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFDcEMsR0FBRzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUNsQjthQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBaUIsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLE1BQU07Z0JBQ04sTUFBTSxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTthQUN6RCxFQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBNUVGLFVBQVU7Ozs7WUFoQk0sS0FBSztZQUdiLFdBQVc7Ozs7Ozs7SUFnQmhCLG1DQUVDOzs7OztJQUNELHlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBRERfVk9VQ0hFUl9QUk9DRVNTX0lELCBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRWb3VjaGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBTdGF0ZVdpdGhDYXJ0IHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+XG4gICAgPixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBhZGRWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkKS5zdWJzY3JpYmUoKFtvY2NVc2VySWQsIGNhcnRJZGVudGlmaWVyXSkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlcih7XG4gICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgY2FydElkOiBjYXJ0SWRlbnRpZmllcixcbiAgICAgICAgICB2b3VjaGVySWQ6IHZvdWNoZXJJZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuQ2FydFJlc2V0QWRkVm91Y2hlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFtzdHJpbmcsIHN0cmluZ10+IHtcbiAgICBpZiAoY2FydElkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAodXNlcklkID0+IFt1c2VySWQsIGNhcnRJZF0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0Q29udGVudCksXG4gICAgICAgICAgbWFwKGNhcnQgPT4gY2FydClcbiAgICAgICAgKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCgoW3VzZXJJZCwgY2FydF06IFtzdHJpbmcsIENhcnRdKSA9PiBbXG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTID8gY2FydC5ndWlkIDogY2FydC5jb2RlLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==