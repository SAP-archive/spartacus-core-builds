/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { asyncScheduler, combineLatest } from 'rxjs';
import { debounceTime, filter, map, shareReplay, take, tap, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import * as fromAction from '../store/actions';
import * as fromSelector from '../store/selectors';
import { ANONYMOUS_USERID, CartDataService } from './cart-data.service';
export class CartService {
    /**
     * @param {?} store
     * @param {?} cartData
     * @param {?} authService
     */
    constructor(store, cartData, authService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this._activeCart$ = combineLatest([
            this.store.select(fromSelector.getCartContent),
            this.store.select(fromSelector.getCartLoading),
            this.authService.getUserToken(),
        ]).pipe(
        // combineLatest emits multiple times on each property update instead of one emit
        // additionally dispatching actions that changes selectors used here needs to happen in order
        // for this asyncScheduler is used here
        debounceTime(1, asyncScheduler), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, loading]) => !loading)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart, , userToken]) => {
            if (this.isJustLoggedIn(userToken.userId)) {
                this.loadOrMerge();
            }
            else if (this.isCreated(cart) && this.isIncomplete(cart)) {
                this.load();
            }
            this.previousUserId = userToken.userId;
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => !this.isCreated(cart) ||
            (this.isCreated(cart) && !this.isIncomplete(cart)))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => cart)), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    getActive() {
        return this._activeCart$;
    }
    /**
     * @return {?}
     */
    getEntries() {
        return this.store.pipe(select(fromSelector.getCartEntries));
    }
    /**
     * @return {?}
     */
    getCartMergeComplete() {
        return this.store.pipe(select(fromSelector.getCartMergeComplete));
    }
    /**
     * @return {?}
     */
    getLoaded() {
        return this.store.pipe(select(fromSelector.getCartLoaded));
    }
    /**
     * @private
     * @return {?}
     */
    loadOrMerge() {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!this.isCreated(this.cartData.cart)) {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: 'current',
            }));
        }
        else {
            this.store.dispatch(new fromAction.MergeCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.guid,
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    load() {
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
            }));
        }
        else {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        this.store
            .pipe(select(fromSelector.getActiveCartState), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (!this.isCreated(cartState.value.content) && !cartState.loading) {
                this.store.dispatch(new fromAction.CreateCart({ userId: this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => this.isCreated(cartState.value.content))), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.store.dispatch(new fromAction.AddEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                productCode: productCode,
                quantity: quantity,
            }));
        }));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.store.dispatch(new fromAction.RemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber,
        }));
    }
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        if (quantity > 0) {
            this.store.dispatch(new fromAction.UpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.store.dispatch(new fromAction.RemoveEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
            }));
        }
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.store.pipe(select(fromSelector.getCartEntrySelectorFactory(productCode)));
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isCreated(cart) {
        return cart && typeof cart.guid !== 'undefined';
    }
    /**
     * Cart is incomplete if it contains only `guid` and `code` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     * @private
     * @param {?} cart
     * @return {?}
     */
    isIncomplete(cart) {
        return cart && Object.keys(cart).length <= 2;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isJustLoggedIn(userId) {
        return (typeof userId !== 'undefined' && // logged in user
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
}
CartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.PREVIOUS_USER_ID_INITIAL_VALUE;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.previousUserId;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype._activeCart$;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.cartData;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd4RSxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBTXRCLFlBQ1ksS0FBMkIsRUFDM0IsUUFBeUIsRUFDekIsV0FBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFSbkIsbUNBQThCLEdBQzdDLGdDQUFnQyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1FBUTNELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENB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LENBQUMsTUFBTTtnQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsS0FBSyxFQUFFLFdBQVc7YUFDbkIsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUM7SUFDbEQsQ0FBQzs7Ozs7Ozs7SUFNTyxZQUFZLENBQUMsSUFBVTtRQUM3QixPQUFPLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQWM7UUFDbkMsT0FBTyxDQUNMLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxpQkFBaUI7WUFDbEQsSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLElBQUksbUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQzs7O1lBaExGLFVBQVU7Ozs7WUFsQk0sS0FBSztZQWdCSyxlQUFlO1lBTmpDLFdBQVc7Ozs7Ozs7SUFVbEIscURBQ21DOzs7OztJQUNuQyxxQ0FBNkQ7Ozs7O0lBQzdELG1DQUF1Qzs7Ozs7SUFHckMsNEJBQXFDOzs7OztJQUNyQywrQkFBbUM7Ozs7O0lBQ25DLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBhc3luY1NjaGVkdWxlciwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVNlbGVjdG9yIGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBBTk9OWU1PVVNfVVNFUklELCBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuL2NhcnQtZGF0YS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgX2FjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICB0aGlzLl9hY3RpdmVDYXJ0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRDb250ZW50KSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRDYXJ0TG9hZGluZyksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgIF0pLnBpcGUoXG4gICAgICAvLyBjb21iaW5lTGF0ZXN0IGVtaXRzIG11bHRpcGxlIHRpbWVzIG9uIGVhY2ggcHJvcGVydHkgdXBkYXRlIGluc3RlYWQgb2Ygb25lIGVtaXRcbiAgICAgIC8vIGFkZGl0aW9uYWxseSBkaXNwYXRjaGluZyBhY3Rpb25zIHRoYXQgY2hhbmdlcyBzZWxlY3RvcnMgdXNlZCBoZXJlIG5lZWRzIHRvIGhhcHBlbiBpbiBvcmRlclxuICAgICAgLy8gZm9yIHRoaXMgYXN5bmNTY2hlZHVsZXIgaXMgdXNlZCBoZXJlXG4gICAgICBkZWJvdW5jZVRpbWUoMSwgYXN5bmNTY2hlZHVsZXIpLFxuICAgICAgZmlsdGVyKChbLCBsb2FkaW5nXSkgPT4gIWxvYWRpbmcpLFxuICAgICAgdGFwKChbY2FydCwgLCB1c2VyVG9rZW5dKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJUb2tlbi51c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDcmVhdGVkKGNhcnQpICYmIHRoaXMuaXNJbmNvbXBsZXRlKGNhcnQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZpb3VzVXNlcklkID0gdXNlclRva2VuLnVzZXJJZDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoW2NhcnRdKSA9PlxuICAgICAgICAgICF0aGlzLmlzQ3JlYXRlZChjYXJ0KSB8fFxuICAgICAgICAgICh0aGlzLmlzQ3JlYXRlZChjYXJ0KSAmJiAhdGhpcy5pc0luY29tcGxldGUoY2FydCkpXG4gICAgICApLFxuICAgICAgbWFwKChbY2FydF0pID0+IGNhcnQpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNhcnQkO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRDYXJ0RW50cmllcykpO1xuICB9XG5cbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRNZXJnZUNvbXBsZXRlKSk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRMb2FkZWQpKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE9yTWVyZ2UoKTogdm9pZCB7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKCF0aGlzLmlzQ3JlYXRlZCh0aGlzLmNhcnREYXRhLmNhcnQpKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6ICdjdXJyZW50JyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQWN0aW9uLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5ndWlkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FydERhdGEudXNlcklkICE9PSBBTk9OWU1PVVNfVVNFUklEKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkID8gdGhpcy5jYXJ0RGF0YS5jYXJ0SWQgOiAnY3VycmVudCcsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChmcm9tU2VsZWN0b3IuZ2V0QWN0aXZlQ2FydFN0YXRlKSxcbiAgICAgICAgdGFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzQ3JlYXRlZChjYXJ0U3RhdGUudmFsdWUuY29udGVudCkgJiYgIWNhcnRTdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbi5DcmVhdGVDYXJ0KHsgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoY2FydFN0YXRlID0+IHRoaXMuaXNDcmVhdGVkKGNhcnRTdGF0ZS52YWx1ZS5jb250ZW50KSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb24uQWRkRW50cnkoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21BY3Rpb24uUmVtb3ZlRW50cnkoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICBlbnRyeTogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHF1YW50aXR5ID4gMCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21BY3Rpb24uVXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgICAgcXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQWN0aW9uLlJlbW92ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU2VsZWN0b3IuZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5KHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NyZWF0ZWQoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjYXJ0ICYmIHR5cGVvZiBjYXJ0Lmd1aWQgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcnQgaXMgaW5jb21wbGV0ZSBpZiBpdCBjb250YWlucyBvbmx5IGBndWlkYCBhbmQgYGNvZGVgIHByb3BlcnRpZXMsIHdoaWNoIGNvbWUgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICAgKiBUbyBnZXQgY2FydCBjb250ZW50LCB3ZSBuZWVkIHRvIGxvYWQgY2FydCBmcm9tIGJhY2tlbmQuXG4gICAqL1xuICBwcml2YXRlIGlzSW5jb21wbGV0ZShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoIDw9IDI7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB1c2VySWQgIT09ICd1bmRlZmluZWQnICYmIC8vIGxvZ2dlZCBpbiB1c2VyXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==