/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CartVoucherService = /** @class */ (function () {
    function CartVoucherService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * @param {?} voucherId
     * @param {?=} cartId
     * @return {?}
     */
    CartVoucherService.prototype.addVoucher = /**
     * @param {?} voucherId
     * @param {?=} cartId
     * @return {?}
     */
    function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartAddVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        }));
    };
    /**
     * @param {?} voucherId
     * @param {?=} cartId
     * @return {?}
     */
    CartVoucherService.prototype.removeVoucher = /**
     * @param {?} voucherId
     * @param {?=} cartId
     * @return {?}
     */
    function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartRemoveVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        }));
    };
    /**
     * @return {?}
     */
    CartVoucherService.prototype.getAddVoucherResultError = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    /**
     * @return {?}
     */
    CartVoucherService.prototype.getAddVoucherResultSuccess = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    /**
     * @return {?}
     */
    CartVoucherService.prototype.getAddVoucherResultLoading = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    /**
     * @return {?}
     */
    CartVoucherService.prototype.resetAddVoucherProcessingState = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CartActions.CartResetAddVoucher());
    };
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    CartVoucherService.prototype.combineUserAndCartId = /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        if (cartId) {
            return this.authService.getOccUserId().pipe(take(1), map((/**
             * @param {?} userId
             * @return {?}
             */
            function (userId) { return [userId, cartId]; })));
        }
        else {
            return combineLatest([
                this.authService.getOccUserId(),
                this.store.pipe(select(CartSelectors.getCartContent), map((/**
                 * @param {?} cart
                 * @return {?}
                 */
                function (cart) { return cart; }))),
            ]).pipe(take(1), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), userId = _b[0], cart = _b[1];
                return [
                    userId,
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code,
                ];
            })));
        }
    };
    CartVoucherService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartVoucherService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    return CartVoucherService;
}());
export { CartVoucherService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUFFRSw0QkFDWSxLQUVULEVBQ1MsV0FBd0I7UUFIeEIsVUFBSyxHQUFMLEtBQUssQ0FFZDtRQUNTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7Ozs7OztJQUVKLHVDQUFVOzs7OztJQUFWLFVBQVcsU0FBaUIsRUFBRSxNQUFlO1FBQTdDLGlCQVVDO1FBVEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQTJCO2dCQUEzQiwwQkFBMkIsRUFBMUIsaUJBQVMsRUFBRSxzQkFBYztZ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QUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBRERfVk9VQ0hFUl9QUk9DRVNTX0lELCBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRWb3VjaGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBTdGF0ZVdpdGhDYXJ0IHwgZnJvbVByb2Nlc3NTdG9yZS5TdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+XG4gICAgPixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBhZGRWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkKS5zdWJzY3JpYmUoKFtvY2NVc2VySWQsIGNhcnRJZGVudGlmaWVyXSkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlcih7XG4gICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgY2FydElkOiBjYXJ0SWRlbnRpZmllcixcbiAgICAgICAgICB2b3VjaGVySWQ6IHZvdWNoZXJJZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuQ2FydFJlc2V0QWRkVm91Y2hlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFtzdHJpbmcsIHN0cmluZ10+IHtcbiAgICBpZiAoY2FydElkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAodXNlcklkID0+IFt1c2VySWQsIGNhcnRJZF0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0Q29udGVudCksXG4gICAgICAgICAgbWFwKGNhcnQgPT4gY2FydClcbiAgICAgICAgKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCgoW3VzZXJJZCwgY2FydF06IFtzdHJpbmcsIENhcnRdKSA9PiBbXG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTID8gY2FydC5ndWlkIDogY2FydC5jb2RlLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==