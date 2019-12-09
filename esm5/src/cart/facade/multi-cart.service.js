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
var MultiCartService = /** @class */ (function () {
    function MultiCartService(store) {
        this.store = store;
    }
    /**
     * Returns cart from store as an observable
     *
     * @param cartId
     */
    /**
     * Returns cart from store as an observable
     *
     * @param {?} cartId
     * @return {?}
     */
    MultiCartService.prototype.getCart = /**
     * Returns cart from store as an observable
     *
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(cartId)));
    };
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param cartId
     */
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param {?} cartId
     * @return {?}
     */
    MultiCartService.prototype.getCartEntity = /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntitySelectorFactory(cartId)));
    };
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param cartId
     */
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param {?} cartId
     * @return {?}
     */
    MultiCartService.prototype.isStable = /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartIsStableSelectorFactory(cartId)), 
        // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
        // This flickering should only be avoided when switching from false to true
        // Start of loading should be showed instantly (no debounce)
        // Extra actions are only dispatched after some loading
        debounce((/**
         * @param {?} isStable
         * @return {?}
         */
        function (isStable) { return (isStable ? timer(0) : EMPTY); })), distinctUntilChanged());
    };
    /**
     * Create or merge cart
     *
     * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
     */
    /**
     * Create or merge cart
     *
     * @param {?} __0
     * @return {?}
     */
    MultiCartService.prototype.createCart = /**
     * Create or merge cart
     *
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var userId = _a.userId, oldCartId = _a.oldCartId, toMergeCartGuid = _a.toMergeCartGuid, extraData = _a.extraData;
        this.store.dispatch(new DeprecatedCartActions.CreateCart({
            extraData: extraData,
            userId: userId,
            oldCartId: oldCartId,
            toMergeCartGuid: toMergeCartGuid,
        }));
        return this.getCartEntity(FRESH_CART_ID);
    };
    /**
     * Load cart
     *
     * @param params Object with userId, cartId and extraData
     */
    /**
     * Load cart
     *
     * @param {?} __0
     * @return {?}
     */
    MultiCartService.prototype.loadCart = /**
     * Load cart
     *
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var cartId = _a.cartId, userId = _a.userId, extraData = _a.extraData;
        this.store.dispatch(new DeprecatedCartActions.LoadCart({
            userId: userId,
            cartId: cartId,
            extraData: extraData,
        }));
    };
    /**
     * Get cart entries as an observable
     * @param cartId
     */
    /**
     * Get cart entries as an observable
     * @param {?} cartId
     * @return {?}
     */
    MultiCartService.prototype.getEntries = /**
     * Get cart entries as an observable
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntriesSelectorFactory(cartId)));
    };
    /**
     * Add entry to cart
     *
     * @param userId
     * @param cartId
     * @param productCode
     * @param quantity
     */
    /**
     * Add entry to cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    MultiCartService.prototype.addEntry = /**
     * Add entry to cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (userId, cartId, productCode, quantity) {
        this.store.dispatch(new CartActions.CartAddEntry({
            userId: userId,
            cartId: cartId,
            productCode: productCode,
            quantity: quantity,
        }));
    };
    /**
     * Add multiple entries to cart
     *
     * @param userId
     * @param cartId
     * @param products Array with items (productCode and quantity)
     */
    /**
     * Add multiple entries to cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} products Array with items (productCode and quantity)
     * @return {?}
     */
    MultiCartService.prototype.addEntries = /**
     * Add multiple entries to cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} products Array with items (productCode and quantity)
     * @return {?}
     */
    function (userId, cartId, products) {
        var _this = this;
        products.forEach((/**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            _this.store.dispatch(new CartActions.CartAddEntry({
                userId: userId,
                cartId: cartId,
                productCode: product.productCode,
                quantity: product.quantity,
            }));
        }));
    };
    /**
     * Remove entry from cart
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     */
    /**
     * Remove entry from cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    MultiCartService.prototype.removeEntry = /**
     * Remove entry from cart
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    function (userId, cartId, entryNumber) {
        this.store.dispatch(new CartActions.CartRemoveEntry({
            userId: userId,
            cartId: cartId,
            entry: entryNumber,
        }));
    };
    /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     * @param quantity
     */
    /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    MultiCartService.prototype.updateEntry = /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (userId, cartId, entryNumber, quantity) {
        if (quantity > 0) {
            this.store.dispatch(new CartActions.CartUpdateEntry({
                userId: userId,
                cartId: cartId,
                entry: entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.removeEntry(userId, cartId, entryNumber);
        }
    };
    /**
     * Get specific entry from cart
     *
     * @param cartId
     * @param productCode
     */
    /**
     * Get specific entry from cart
     *
     * @param {?} cartId
     * @param {?} productCode
     * @return {?}
     */
    MultiCartService.prototype.getEntry = /**
     * Get specific entry from cart
     *
     * @param {?} cartId
     * @param {?} productCode
     * @return {?}
     */
    function (cartId, productCode) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntrySelectorFactory(cartId, productCode)));
    };
    /**
     * Assign email to the cart
     *
     * @param cartId
     * @param userId
     * @param email
     */
    /**
     * Assign email to the cart
     *
     * @param {?} cartId
     * @param {?} userId
     * @param {?} email
     * @return {?}
     */
    MultiCartService.prototype.assignEmail = /**
     * Assign email to the cart
     *
     * @param {?} cartId
     * @param {?} userId
     * @param {?} email
     * @return {?}
     */
    function (cartId, userId, email) {
        this.store.dispatch(new DeprecatedCartActions.AddEmailToCart({
            userId: userId,
            cartId: cartId,
            email: email,
        }));
    };
    /**
     * Delete cart
     *
     * @param cartId
     * @param userId
     */
    /**
     * Delete cart
     *
     * @param {?} cartId
     * @param {?} userId
     * @return {?}
     */
    MultiCartService.prototype.deleteCart = /**
     * Delete cart
     *
     * @param {?} cartId
     * @param {?} userId
     * @return {?}
     */
    function (cartId, userId) {
        this.store.dispatch(new DeprecatedCartActions.DeleteCart({
            userId: userId,
            cartId: cartId,
        }));
    };
    MultiCartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MultiCartService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return MultiCartService;
}());
export { MultiCartService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MultiCartService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFOUQ7SUFFRSwwQkFBc0IsS0FBZ0M7UUFBaEMsVUFBSyxHQUFMLEtBQUssQ0FBMkI7SUFBRyxDQUFDO0lBRTFEOzs7O09BSUc7Ozs7Ozs7SUFDSCxrQ0FBTzs7Ozs7O0lBQVAsVUFBUSxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx3Q0FBYTs7Ozs7O0lBQWIsVUFBYyxNQUFjO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNoRSxD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QUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztZQUNuQyxNQUFNLFFBQUE7WUFDTixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQWhQRixVQUFVOzs7O2dCQVpNLEtBQUs7O0lBNlB0Qix1QkFBQztDQUFBLEFBalBELElBaVBDO1NBaFBZLGdCQUFnQjs7Ozs7O0lBQ2YsaUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBGUkVTSF9DQVJUX0lEIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9tdWx0aS1jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZnJvbSBzdG9yZSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50aXR5IGZyb20gc3RvcmUgKGNhcnQgd2l0aCBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcyBmbGFncykgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRDYXJ0RW50aXR5KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRpdHlTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZXJlIGFyZSBubyBvcGVyYXRpb25zIG9uIHRoYXQgaW4gcHJvZ3Jlc3MgYW5kIGl0IGlzIG5vdCBjdXJyZW50bHkgbG9hZGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBpc1N0YWJsZShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRJc1N0YWJsZVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKSxcbiAgICAgIC8vIFdlIGRpc3BhdGNoIGEgbG90IG9mIGFjdGlvbnMganVzdCBhZnRlciBmaW5pc2hpbmcgc29tZSBwcm9jZXNzIG9yIGxvYWRpbmcsIHNvIHdlIHdhbnQgdGhpcyBmbGFnIG5vdCB0byBmbGlja2VyLlxuICAgICAgLy8gVGhpcyBmbGlja2VyaW5nIHNob3VsZCBvbmx5IGJlIGF2b2lkZWQgd2hlbiBzd2l0Y2hpbmcgZnJvbSBmYWxzZSB0byB0cnVlXG4gICAgICAvLyBTdGFydCBvZiBsb2FkaW5nIHNob3VsZCBiZSBzaG93ZWQgaW5zdGFudGx5IChubyBkZWJvdW5jZSlcbiAgICAgIC8vIEV4dHJhIGFjdGlvbnMgYXJlIG9ubHkgZGlzcGF0Y2hlZCBhZnRlciBzb21lIGxvYWRpbmdcbiAgICAgIGRlYm91bmNlKGlzU3RhYmxlID0+IChpc1N0YWJsZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvciBtZXJnZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBjcmVhdGVDYXJ0KHtcbiAgICB1c2VySWQsXG4gICAgb2xkQ2FydElkLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZCxcbiAgICBleHRyYURhdGEsXG4gIH06IHtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmc7XG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IGFueTtcbiAgfSk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+IHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIG9sZENhcnRJZCxcbiAgICAgICAgdG9NZXJnZUNhcnRHdWlkLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldENhcnRFbnRpdHkoRlJFU0hfQ0FSVF9JRCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgbG9hZENhcnQoe1xuICAgIGNhcnRJZCxcbiAgICB1c2VySWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgY2FydElkOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgZXh0cmFEYXRhPzogYW55O1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJ0IGVudHJpZXMgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRFbnRyaWVzKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cmllc1NlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgcXVhbnRpdHksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RzIEFycmF5IHdpdGggaXRlbXMgKHByb2R1Y3RDb2RlIGFuZCBxdWFudGl0eSlcbiAgICovXG4gIGFkZEVudHJpZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcHJvZHVjdHM6IEFycmF5PHsgcHJvZHVjdENvZGU6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9PlxuICApOiB2b2lkIHtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVudHJ5IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqL1xuICByZW1vdmVFbnRyeSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5IGluIGNhcnQuIEZvciBxdWFudGl0eSA9IDAgaXQgcmVtb3ZlcyBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IG51bWJlcixcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGlmIChxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgICAgIHF0eTogcXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUVudHJ5KHVzZXJJZCwgY2FydElkLCBlbnRyeU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzcGVjaWZpYyBlbnRyeSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkoY2FydElkLCBwcm9kdWN0Q29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byB0aGUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhc3NpZ25FbWFpbChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICovXG4gIGRlbGV0ZUNhcnQoY2FydElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=