/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { CartActions } from '../store/actions/index';
import { FRESH_CART_ID } from '../store/actions/multi-cart.action';
import { MultiCartSelectors } from '../store/selectors/index';
export class MultiCartService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns cart from store as an observable
     *
     * @param {?} cartId
     * @return {?}
     */
    getCart(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(cartId)));
    }
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param {?} cartId
     * @return {?}
     */
    getCartEntity(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntitySelectorFactory(cartId)));
    }
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param {?} cartId
     * @return {?}
     */
    isStable(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartIsStableSelectorFactory(cartId)), 
        // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
        // This flickering should only be avoided when switching from false to true
        // Start of loading should be showed instantly (no debounce)
        // Extra actions are only dispatched after some loading
        debounce((/**
         * @param {?} isStable
         * @return {?}
         */
        isStable => (isStable ? timer(0) : EMPTY))), distinctUntilChanged());
    }
    /**
     * Create or merge cart
     *
     * @param {?} __0
     * @return {?}
     */
    createCart({ userId, oldCartId, toMergeCartGuid, extraData, }) {
        this.store.dispatch(new DeprecatedCartActions.CreateCart({
            extraData,
            userId,
            oldCartId,
            toMergeCartGuid,
        }));
        return this.getCartEntity(FRESH_CART_ID);
    }
    /**
     * Load cart
     *
     * @param {?} __0
     * @return {?}
     */
    loadCart({ cartId, userId, extraData, }) {
        this.store.dispatch(new DeprecatedCartActions.LoadCart({
            userId,
            cartId,
            extraData,
        }));
    }
    /**
     * Get cart entries as an observable
     * @param {?} cartId
     * @return {?}
     */
    getEntries(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntriesSelectorFactory(cartId)));
    }
    /**
     * Add entry to cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(userId, cartId, productCode, quantity) {
        this.store.dispatch(new CartActions.CartAddEntry({
            userId,
            cartId,
            productCode,
            quantity,
        }));
    }
    /**
     * Add multiple entries to cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} products Array with items (productCode and quantity)
     * @return {?}
     */
    addEntries(userId, cartId, products) {
        products.forEach((/**
         * @param {?} product
         * @return {?}
         */
        product => {
            this.store.dispatch(new CartActions.CartAddEntry({
                userId,
                cartId,
                productCode: product.productCode,
                quantity: product.quantity,
            }));
        }));
    }
    /**
     * Remove entry from cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    removeEntry(userId, cartId, entryNumber) {
        this.store.dispatch(new CartActions.CartRemoveEntry({
            userId,
            cartId,
            entry: entryNumber,
        }));
    }
    /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(userId, cartId, entryNumber, quantity) {
        if (quantity > 0) {
            this.store.dispatch(new CartActions.CartUpdateEntry({
                userId,
                cartId,
                entry: entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.removeEntry(userId, cartId, entryNumber);
        }
    }
    /**
     * Get specific entry from cart
     *
     * @param {?} cartId
     * @param {?} productCode
     * @return {?}
     */
    getEntry(cartId, productCode) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntrySelectorFactory(cartId, productCode)));
    }
    /**
     * Assign email to the cart
     *
     * @param {?} cartId
     * @param {?} userId
     * @param {?} email
     * @return {?}
     */
    assignEmail(cartId, userId, email) {
        this.store.dispatch(new DeprecatedCartActions.AddEmailToCart({
            userId,
            cartId,
            email,
        }));
    }
    /**
     * Delete cart
     *
     * @param {?} cartId
     * @param {?} userId
     * @return {?}
     */
    deleteCart(cartId, userId) {
        this.store.dispatch(new DeprecatedCartActions.DeleteCart({
            userId,
            cartId,
        }));
    }
}
MultiCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MultiCartService.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MultiCartService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFzQixLQUFnQztRQUFoQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtJQUFHLENBQUM7Ozs7Ozs7SUFPMUQsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBT0QsYUFBYSxDQUFDLE1BQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBT0QsUUFB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QUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7Ozs7O0lBUUQsUUFBUSxDQUFDLE1BQWMsRUFBRSxXQUFtQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUNwRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxXQUFXLENBQUMsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztZQUN2QyxNQUFNO1lBQ04sTUFBTTtZQUNOLEtBQUs7U0FDTixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztZQUNuQyxNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBaFBGLFVBQVU7Ozs7WUFaTSxLQUFLOzs7Ozs7O0lBY1IsaUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBGUkVTSF9DQVJUX0lEIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9tdWx0aS1jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZnJvbSBzdG9yZSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50aXR5IGZyb20gc3RvcmUgKGNhcnQgd2l0aCBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcyBmbGFncykgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRDYXJ0RW50aXR5KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRpdHlTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZXJlIGFyZSBubyBvcGVyYXRpb25zIG9uIHRoYXQgaW4gcHJvZ3Jlc3MgYW5kIGl0IGlzIG5vdCBjdXJyZW50bHkgbG9hZGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBpc1N0YWJsZShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRJc1N0YWJsZVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKSxcbiAgICAgIC8vIFdlIGRpc3BhdGNoIGEgbG90IG9mIGFjdGlvbnMganVzdCBhZnRlciBmaW5pc2hpbmcgc29tZSBwcm9jZXNzIG9yIGxvYWRpbmcsIHNvIHdlIHdhbnQgdGhpcyBmbGFnIG5vdCB0byBmbGlja2VyLlxuICAgICAgLy8gVGhpcyBmbGlja2VyaW5nIHNob3VsZCBvbmx5IGJlIGF2b2lkZWQgd2hlbiBzd2l0Y2hpbmcgZnJvbSBmYWxzZSB0byB0cnVlXG4gICAgICAvLyBTdGFydCBvZiBsb2FkaW5nIHNob3VsZCBiZSBzaG93ZWQgaW5zdGFudGx5IChubyBkZWJvdW5jZSlcbiAgICAgIC8vIEV4dHJhIGFjdGlvbnMgYXJlIG9ubHkgZGlzcGF0Y2hlZCBhZnRlciBzb21lIGxvYWRpbmdcbiAgICAgIGRlYm91bmNlKGlzU3RhYmxlID0+IChpc1N0YWJsZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvciBtZXJnZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBjcmVhdGVDYXJ0KHtcbiAgICB1c2VySWQsXG4gICAgb2xkQ2FydElkLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZCxcbiAgICBleHRyYURhdGEsXG4gIH06IHtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmc7XG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IGFueTtcbiAgfSk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+IHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIG9sZENhcnRJZCxcbiAgICAgICAgdG9NZXJnZUNhcnRHdWlkLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldENhcnRFbnRpdHkoRlJFU0hfQ0FSVF9JRCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgbG9hZENhcnQoe1xuICAgIGNhcnRJZCxcbiAgICB1c2VySWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgY2FydElkOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgZXh0cmFEYXRhPzogYW55O1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJ0IGVudHJpZXMgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRFbnRyaWVzKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cmllc1NlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgcXVhbnRpdHksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RzIEFycmF5IHdpdGggaXRlbXMgKHByb2R1Y3RDb2RlIGFuZCBxdWFudGl0eSlcbiAgICovXG4gIGFkZEVudHJpZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcHJvZHVjdHM6IEFycmF5PHsgcHJvZHVjdENvZGU6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9PlxuICApOiB2b2lkIHtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVudHJ5IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqL1xuICByZW1vdmVFbnRyeSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5IGluIGNhcnQuIEZvciBxdWFudGl0eSA9IDAgaXQgcmVtb3ZlcyBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IG51bWJlcixcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGlmIChxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgICAgIHF0eTogcXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUVudHJ5KHVzZXJJZCwgY2FydElkLCBlbnRyeU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzcGVjaWZpYyBlbnRyeSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkoY2FydElkLCBwcm9kdWN0Q29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byB0aGUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhc3NpZ25FbWFpbChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICovXG4gIGRlbGV0ZUNhcnQoY2FydElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=