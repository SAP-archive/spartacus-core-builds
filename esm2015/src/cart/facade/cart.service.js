/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { asyncScheduler, combineLatest } from 'rxjs';
import { debounceTime, filter, map, shareReplay, take, tap, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { CartActions } from '../store/actions/index';
import { CartSelectors } from '../store/selectors/index';
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
            this.store.select(CartSelectors.getCartContent),
            this.store.select(CartSelectors.getCartLoading),
            this.authService.getUserToken(),
            this.store.select(CartSelectors.getCartLoaded),
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
        ([cart, , userToken, loaded]) => {
            if (this.isJustLoggedIn(userToken.userId)) {
                this.loadOrMerge();
            }
            else if ((this.isCreated(cart) && this.isIncomplete(cart)) ||
                (this.isLoggedIn(userToken.userId) &&
                    !this.isCreated(cart) &&
                    !loaded) // try to load current cart for logged in user (loaded flag to prevent infinite loop when user doesn't have cart)
            ) {
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
        return this.store.pipe(select(CartSelectors.getCartEntries));
    }
    /**
     * @return {?}
     */
    getCartMergeComplete() {
        return this.store.pipe(select(CartSelectors.getCartMergeComplete));
    }
    /**
     * @return {?}
     */
    getLoaded() {
        return this.store.pipe(select(CartSelectors.getCartLoaded));
    }
    /**
     * @private
     * @return {?}
     */
    loadOrMerge() {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!this.isCreated(this.cartData.cart)) {
            this.store.dispatch(new CartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: 'current',
            }));
        }
        else {
            this.store.dispatch(new CartActions.MergeCart({
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
            this.store.dispatch(new CartActions.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
            }));
        }
        else {
            this.store.dispatch(new CartActions.LoadCart({
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
            .pipe(select(CartSelectors.getActiveCartState), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (!this.isCreated(cartState.value.content) && !cartState.loading) {
                this.store.dispatch(new CartActions.CreateCart({ userId: this.cartData.userId }));
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
            this.store.dispatch(new CartActions.CartAddEntry({
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
        this.store.dispatch(new CartActions.CartRemoveEntry({
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
            this.store.dispatch(new CartActions.CartUpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.store.dispatch(new CartActions.CartRemoveEntry({
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
        return this.store.pipe(select(CartSelectors.getCartEntrySelectorFactory(productCode)));
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
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isLoggedIn(userId) {
        return typeof userId !== 'undefined';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLElBQUksRUFDSixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHeEUsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQU10QixZQUNZLEtBQTJCLEVBQzNCLFFBQXlCLEVBQ3pCLFdBQXdCO1FBRnhCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUm5CLG1DQUE4QixHQUM3QyxnQ0FBZ0MsQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztRQVEzRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLENB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TSxLQUFLLFdBQVcsQ0FBQztJQUN2QyxDQUFDOzs7WUExTEYsVUFBVTs7OztZQWxCTSxLQUFLO1lBZ0JLLGVBQWU7WUFOakMsV0FBVzs7Ozs7OztJQVVsQixxREFDbUM7Ozs7O0lBQ25DLHFDQUE2RDs7Ozs7SUFDN0QsbUNBQXVDOzs7OztJQUdyQyw0QkFBcUM7Ozs7O0lBQ3JDLCtCQUFtQzs7Ozs7SUFDbkMsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGFzeW5jU2NoZWR1bGVyLCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IEFOT05ZTU9VU19VU0VSSUQsIENhcnREYXRhU2VydmljZSB9IGZyb20gJy4vY2FydC1kYXRhLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgcHJpdmF0ZSBfYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX2FjdGl2ZUNhcnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRDb250ZW50KSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRpbmcpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKSxcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRlZCksXG4gICAgXSkucGlwZShcbiAgICAgIC8vIGNvbWJpbmVMYXRlc3QgZW1pdHMgbXVsdGlwbGUgdGltZXMgb24gZWFjaCBwcm9wZXJ0eSB1cGRhdGUgaW5zdGVhZCBvZiBvbmUgZW1pdFxuICAgICAgLy8gYWRkaXRpb25hbGx5IGRpc3BhdGNoaW5nIGFjdGlvbnMgdGhhdCBjaGFuZ2VzIHNlbGVjdG9ycyB1c2VkIGhlcmUgbmVlZHMgdG8gaGFwcGVuIGluIG9yZGVyXG4gICAgICAvLyBmb3IgdGhpcyBhc3luY1NjaGVkdWxlciBpcyB1c2VkIGhlcmVcbiAgICAgIGRlYm91bmNlVGltZSgxLCBhc3luY1NjaGVkdWxlciksXG4gICAgICBmaWx0ZXIoKFssIGxvYWRpbmddKSA9PiAhbG9hZGluZyksXG4gICAgICB0YXAoKFtjYXJ0LCAsIHVzZXJUb2tlbiwgbG9hZGVkXSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0p1c3RMb2dnZWRJbih1c2VyVG9rZW4udXNlcklkKSkge1xuICAgICAgICAgIHRoaXMubG9hZE9yTWVyZ2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAodGhpcy5pc0NyZWF0ZWQoY2FydCkgJiYgdGhpcy5pc0luY29tcGxldGUoY2FydCkpIHx8XG4gICAgICAgICAgKHRoaXMuaXNMb2dnZWRJbih1c2VyVG9rZW4udXNlcklkKSAmJlxuICAgICAgICAgICAgIXRoaXMuaXNDcmVhdGVkKGNhcnQpICYmXG4gICAgICAgICAgICAhbG9hZGVkKSAvLyB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQgZm9yIGxvZ2dlZCBpbiB1c2VyIChsb2FkZWQgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB1c2VyIGRvZXNuJ3QgaGF2ZSBjYXJ0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbY2FydF0pID0+XG4gICAgICAgICAgIXRoaXMuaXNDcmVhdGVkKGNhcnQpIHx8XG4gICAgICAgICAgKHRoaXMuaXNDcmVhdGVkKGNhcnQpICYmICF0aGlzLmlzSW5jb21wbGV0ZShjYXJ0KSlcbiAgICAgICksXG4gICAgICBtYXAoKFtjYXJ0XSkgPT4gY2FydCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ2FydCQ7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cmllcykpO1xuICB9XG5cbiAgZ2V0Q2FydE1lcmdlQ29tcGxldGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0TWVyZ2VDb21wbGV0ZSkpO1xuICB9XG5cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydExvYWRlZCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZSgpOiB2b2lkIHtcbiAgICAvLyBmb3IgbG9naW4gdXNlciwgd2hlbmV2ZXIgdGhlcmUncyBhbiBleGlzdGluZyBjYXJ0LCB3ZSB3aWxsIGxvYWQgdGhlIHVzZXJcbiAgICAvLyBjdXJyZW50IGNhcnQgYW5kIG1lcmdlIGl0IGludG8gdGhlIGV4aXN0aW5nIGNhcnRcbiAgICBpZiAoIXRoaXMuaXNDcmVhdGVkKHRoaXMuY2FydERhdGEuY2FydCkpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6ICdjdXJyZW50JyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuZ3VpZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gQU5PTllNT1VTX1VTRVJJRCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQgPyB0aGlzLmNhcnREYXRhLmNhcnRJZCA6ICdjdXJyZW50JyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRTdGF0ZSksXG4gICAgICAgIHRhcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpICYmICFjYXJ0U3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoeyB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICBlbnRyeTogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHF1YW50aXR5ID4gMCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgICBxdHk6IHF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkocHJvZHVjdENvZGUpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzQ3JlYXRlZChjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgdHlwZW9mIGNhcnQuZ3VpZCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvKipcbiAgICogQ2FydCBpcyBpbmNvbXBsZXRlIGlmIGl0IGNvbnRhaW5zIG9ubHkgYGd1aWRgIGFuZCBgY29kZWAgcHJvcGVydGllcywgd2hpY2ggY29tZSBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gICAqIFRvIGdldCBjYXJ0IGNvbnRlbnQsIHdlIG5lZWQgdG8gbG9hZCBjYXJ0IGZyb20gYmFja2VuZC5cbiAgICovXG4gIHByaXZhdGUgaXNJbmNvbXBsZXRlKGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPD0gMjtcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc0xvZ2dlZEluKHVzZXJJZCkgJiZcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdXNlcklkICE9PSAndW5kZWZpbmVkJztcbiAgfVxufVxuIl19