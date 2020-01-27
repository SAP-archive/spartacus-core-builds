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
     * Simple random temp cart id generator
     */
    /**
     * Simple random temp cart id generator
     * @private
     * @return {?}
     */
    MultiCartService.prototype.generateTempCartId = /**
     * Simple random temp cart id generator
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pseudoUuid = Math.random()
            .toString(36)
            .substr(2, 9);
        return "temp-" + pseudoUuid;
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
        // to support creating multiple carts at the same time we need to use different entity for every process
        // simple random uuid generator is used here for entity names
        /** @type {?} */
        var tempCartId = this.generateTempCartId();
        this.store.dispatch(new DeprecatedCartActions.CreateCart({
            extraData: extraData,
            userId: userId,
            oldCartId: oldCartId,
            toMergeCartGuid: toMergeCartGuid,
            tempCartId: tempCartId,
        }));
        return this.getCartEntity(tempCartId);
    };
    /**
     * Merge provided cart to current user cart
     *
     * @param params Object with userId, cartId and extraData
     */
    /**
     * Merge provided cart to current user cart
     *
     * @param {?} __0
     * @return {?}
     */
    MultiCartService.prototype.mergeToCurrentCart = /**
     * Merge provided cart to current user cart
     *
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var userId = _a.userId, cartId = _a.cartId, extraData = _a.extraData;
        /** @type {?} */
        var tempCartId = this.generateTempCartId();
        this.store.dispatch(new DeprecatedCartActions.MergeCart({
            userId: userId,
            cartId: cartId,
            extraData: extraData,
            tempCartId: tempCartId,
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU5RDtJQUVFLDBCQUFzQixLQUFnQztRQUFoQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtJQUFHLENBQUM7SUFFMUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGtDQUFPOzs7Ozs7SUFBUCxVQUFRLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILHdDQUFhOzs7Ozs7SUFBYixVQUFjLE1BQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILG1DQUFR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Ozs7O0lBQ0gsbUNBQVE7Ozs7Ozs7SUFBUixVQUFTLE1BQWMsRUFBRSxXQUFtQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUNwRSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxzQ0FBVzs7Ozs7Ozs7SUFBWCxVQUFZLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7WUFDdkMsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sS0FBSyxPQUFBO1NBQ04sQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gscUNBQVU7Ozs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztZQUNuQyxNQUFNLFFBQUE7WUFDTixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQS9RRixVQUFVOzs7O2dCQVhNLEtBQUs7O0lBMlJ0Qix1QkFBQztDQUFBLEFBaFJELElBZ1JDO1NBL1FZLGdCQUFnQjs7Ozs7O0lBQ2YsaUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZnJvbSBzdG9yZSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50aXR5IGZyb20gc3RvcmUgKGNhcnQgd2l0aCBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcyBmbGFncykgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRDYXJ0RW50aXR5KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRpdHlTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZXJlIGFyZSBubyBvcGVyYXRpb25zIG9uIHRoYXQgaW4gcHJvZ3Jlc3MgYW5kIGl0IGlzIG5vdCBjdXJyZW50bHkgbG9hZGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBpc1N0YWJsZShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRJc1N0YWJsZVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKSxcbiAgICAgIC8vIFdlIGRpc3BhdGNoIGEgbG90IG9mIGFjdGlvbnMganVzdCBhZnRlciBmaW5pc2hpbmcgc29tZSBwcm9jZXNzIG9yIGxvYWRpbmcsIHNvIHdlIHdhbnQgdGhpcyBmbGFnIG5vdCB0byBmbGlja2VyLlxuICAgICAgLy8gVGhpcyBmbGlja2VyaW5nIHNob3VsZCBvbmx5IGJlIGF2b2lkZWQgd2hlbiBzd2l0Y2hpbmcgZnJvbSBmYWxzZSB0byB0cnVlXG4gICAgICAvLyBTdGFydCBvZiBsb2FkaW5nIHNob3VsZCBiZSBzaG93ZWQgaW5zdGFudGx5IChubyBkZWJvdW5jZSlcbiAgICAgIC8vIEV4dHJhIGFjdGlvbnMgYXJlIG9ubHkgZGlzcGF0Y2hlZCBhZnRlciBzb21lIGxvYWRpbmdcbiAgICAgIGRlYm91bmNlKGlzU3RhYmxlID0+IChpc1N0YWJsZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSByYW5kb20gdGVtcCBjYXJ0IGlkIGdlbmVyYXRvclxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVRlbXBDYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwc2V1ZG9VdWlkID0gTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgLnN1YnN0cigyLCA5KTtcbiAgICByZXR1cm4gYHRlbXAtJHtwc2V1ZG9VdWlkfWA7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9yIG1lcmdlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkIGFuZCBleHRyYURhdGFcbiAgICovXG4gIGNyZWF0ZUNhcnQoe1xuICAgIHVzZXJJZCxcbiAgICBvbGRDYXJ0SWQsXG4gICAgdG9NZXJnZUNhcnRHdWlkLFxuICAgIGV4dHJhRGF0YSxcbiAgfToge1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIG9sZENhcnRJZD86IHN0cmluZztcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmc7XG4gICAgZXh0cmFEYXRhPzogYW55O1xuICB9KTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIHRvIHN1cHBvcnQgY3JlYXRpbmcgbXVsdGlwbGUgY2FydHMgYXQgdGhlIHNhbWUgdGltZSB3ZSBuZWVkIHRvIHVzZSBkaWZmZXJlbnQgZW50aXR5IGZvciBldmVyeSBwcm9jZXNzXG4gICAgLy8gc2ltcGxlIHJhbmRvbSB1dWlkIGdlbmVyYXRvciBpcyB1c2VkIGhlcmUgZm9yIGVudGl0eSBuYW1lc1xuICAgIGNvbnN0IHRlbXBDYXJ0SWQgPSB0aGlzLmdlbmVyYXRlVGVtcENhcnRJZCgpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICBleHRyYURhdGEsXG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgb2xkQ2FydElkLFxuICAgICAgICB0b01lcmdlQ2FydEd1aWQsXG4gICAgICAgIHRlbXBDYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FydEVudGl0eSh0ZW1wQ2FydElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBwcm92aWRlZCBjYXJ0IHRvIGN1cnJlbnQgdXNlciBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgbWVyZ2VUb0N1cnJlbnRDYXJ0KHsgdXNlcklkLCBjYXJ0SWQsIGV4dHJhRGF0YSB9KSB7XG4gICAgY29uc3QgdGVtcENhcnRJZCA9IHRoaXMuZ2VuZXJhdGVUZW1wQ2FydElkKCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgICAgdGVtcENhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBsb2FkQ2FydCh7XG4gICAgY2FydElkLFxuICAgIHVzZXJJZCxcbiAgICBleHRyYURhdGEsXG4gIH06IHtcbiAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBleHRyYURhdGE/OiBhbnk7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBleHRyYURhdGEsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhcnQgZW50cmllcyBhcyBhbiBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldEVudHJpZXMoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyaWVzU2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgYWRkRW50cnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBxdWFudGl0eSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdHMgQXJyYXkgd2l0aCBpdGVtcyAocHJvZHVjdENvZGUgYW5kIHF1YW50aXR5KVxuICAgKi9cbiAgYWRkRW50cmllcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0czogQXJyYXk8eyBwcm9kdWN0Q29kZTogc3RyaW5nOyBxdWFudGl0eTogbnVtYmVyIH0+XG4gICk6IHZvaWQge1xuICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0LnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnkgZnJvbSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICovXG4gIHJlbW92ZUVudHJ5KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW50cnlOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnkgaW4gY2FydC4gRm9yIHF1YW50aXR5ID0gMCBpdCByZW1vdmVzIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICB1cGRhdGVFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogbnVtYmVyLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgaWYgKHF1YW50aXR5ID4gMCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgICAgcXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRW50cnkodXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNwZWNpZmljIGVudHJ5IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkoY2FydElkOiBzdHJpbmcsIHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnkgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQsIHByb2R1Y3RDb2RlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIHRoZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFzc2lnbkVtYWlsKGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKi9cbiAgZGVsZXRlQ2FydChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==