/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { CartSelectors } from '../store/selectors/index';
/** @type {?} */
export const ANONYMOUS_USERID = 'anonymous';
export class CartDataService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this._userId = ANONYMOUS_USERID;
        this.authService
            .getUserToken()
            .pipe(filter((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => this.userId !== userToken.userId)))
            .subscribe((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => {
            if (Object.keys(userToken).length !== 0) {
                this._userId = userToken.userId;
            }
            else {
                this._userId = ANONYMOUS_USERID;
            }
        }));
        this.store.pipe(select(CartSelectors.getCartContent)).subscribe((/**
         * @param {?} cart
         * @return {?}
         */
        cart => {
            this._cart = cart;
        }));
    }
    /**
     * @return {?}
     */
    get hasCart() {
        return !!this._cart;
    }
    /**
     * @return {?}
     */
    get userId() {
        return this._userId;
    }
    /**
     * @return {?}
     */
    get cart() {
        return this._cart;
    }
    /**
     * @return {?}
     */
    get cartId() {
        if (this.hasCart) {
            return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
        }
    }
}
CartDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartDataService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartDataService.prototype._userId;
    /**
     * @type {?}
     * @private
     */
    CartDataService.prototype._cart;
    /**
     * @type {?}
     * @protected
     */
    CartDataService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CartDataService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRzNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUNZLEtBQTJCLEVBQzNCLFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQU9qQyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQzthQUMzRCxTQUFTOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7WUF6Q0YsVUFBVTs7OztZQVRNLEtBQUs7WUFFYixXQUFXOzs7Ozs7O0lBU2xCLGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQW9COzs7OztJQUdsQixnQ0FBcUM7Ozs7O0lBQ3JDLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IEFOT05ZTU9VU19VU0VSSUQgPSAnYW5vbnltb3VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnREYXRhU2VydmljZSB7XG4gIHByaXZhdGUgX3VzZXJJZCA9IEFOT05ZTU9VU19VU0VSSUQ7XG4gIHByaXZhdGUgX2NhcnQ6IENhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoZmlsdGVyKHVzZXJUb2tlbiA9PiB0aGlzLnVzZXJJZCAhPT0gdXNlclRva2VuLnVzZXJJZCkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJUb2tlbiA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1c2VyVG9rZW4pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fdXNlcklkID0gQU5PTllNT1VTX1VTRVJJRDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpKS5zdWJzY3JpYmUoY2FydCA9PiB7XG4gICAgICB0aGlzLl9jYXJ0ID0gY2FydDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgdXNlcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuXG4gIGdldCBjYXJ0KCk6IENhcnQge1xuICAgIHJldHVybiB0aGlzLl9jYXJ0O1xuICB9XG5cbiAgZ2V0IGNhcnRJZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhhc0NhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJZCA9PT0gQU5PTllNT1VTX1VTRVJJRCA/IHRoaXMuY2FydC5ndWlkIDogdGhpcy5jYXJ0LmNvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=