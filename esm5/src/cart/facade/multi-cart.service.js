import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
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
    MultiCartService.prototype.getCart = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(cartId)));
    };
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param cartId
     */
    MultiCartService.prototype.getCartEntity = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntitySelectorFactory(cartId)));
    };
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param cartId
     */
    MultiCartService.prototype.isStable = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartIsStableSelectorFactory(cartId)), 
        // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
        // This flickering should only be avoided when switching from false to true
        // Start of loading should be showed instantly (no debounce)
        // Extra actions are only dispatched after some loading
        debounce(function (isStable) { return (isStable ? timer(0) : EMPTY); }), distinctUntilChanged());
    };
    /**
     * Simple random temp cart id generator
     */
    MultiCartService.prototype.generateTempCartId = function () {
        var pseudoUuid = Math.random().toString(36).substr(2, 9);
        return "temp-" + pseudoUuid;
    };
    /**
     * Create or merge cart
     *
     * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
     */
    MultiCartService.prototype.createCart = function (_a) {
        var userId = _a.userId, oldCartId = _a.oldCartId, toMergeCartGuid = _a.toMergeCartGuid, extraData = _a.extraData;
        // to support creating multiple carts at the same time we need to use different entity for every process
        // simple random uuid generator is used here for entity names
        var tempCartId = this.generateTempCartId();
        this.store.dispatch(new CartActions.CreateCart({
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
    MultiCartService.prototype.mergeToCurrentCart = function (_a) {
        var userId = _a.userId, cartId = _a.cartId, extraData = _a.extraData;
        var tempCartId = this.generateTempCartId();
        this.store.dispatch(new CartActions.MergeCart({
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
    MultiCartService.prototype.loadCart = function (_a) {
        var cartId = _a.cartId, userId = _a.userId, extraData = _a.extraData;
        this.store.dispatch(new CartActions.LoadCart({
            userId: userId,
            cartId: cartId,
            extraData: extraData,
        }));
    };
    /**
     * Get cart entries as an observable
     * @param cartId
     */
    MultiCartService.prototype.getEntries = function (cartId) {
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
    MultiCartService.prototype.addEntry = function (userId, cartId, productCode, quantity) {
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
    MultiCartService.prototype.addEntries = function (userId, cartId, products) {
        var _this = this;
        products.forEach(function (product) {
            _this.store.dispatch(new CartActions.CartAddEntry({
                userId: userId,
                cartId: cartId,
                productCode: product.productCode,
                quantity: product.quantity,
            }));
        });
    };
    /**
     * Remove entry from cart
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     */
    MultiCartService.prototype.removeEntry = function (userId, cartId, entryNumber) {
        this.store.dispatch(new CartActions.CartRemoveEntry({
            userId: userId,
            cartId: cartId,
            entryNumber: "" + entryNumber,
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
    MultiCartService.prototype.updateEntry = function (userId, cartId, entryNumber, quantity) {
        if (quantity > 0) {
            this.store.dispatch(new CartActions.CartUpdateEntry({
                userId: userId,
                cartId: cartId,
                entryNumber: "" + entryNumber,
                quantity: quantity,
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
    MultiCartService.prototype.getEntry = function (cartId, productCode) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntrySelectorFactory(cartId, productCode)));
    };
    /**
     * Assign email to the cart
     *
     * @param cartId
     * @param userId
     * @param email
     */
    MultiCartService.prototype.assignEmail = function (cartId, userId, email) {
        this.store.dispatch(new CartActions.AddEmailToCart({
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
    MultiCartService.prototype.deleteCart = function (cartId, userId) {
        this.store.dispatch(new CartActions.DeleteCart({
            userId: userId,
            cartId: cartId,
        }));
    };
    MultiCartService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    MultiCartService = __decorate([
        Injectable()
    ], MultiCartService);
    return MultiCartService;
}());
export { MultiCartService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzlEO0lBQ0UsMEJBQXNCLEtBQWdDO1FBQWhDLFVBQUssR0FBTCxLQUFLLENBQTJCO0lBQUcsQ0FBQztJQUUxRDs7OztPQUlHO0lBQ0gsa0NBQU8sR0FBUCxVQUFRLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JB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QUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsc0NBQVcsR0FBWCxVQUFZLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzdCLE1BQU0sUUFBQTtZQUNOLE1BQU0sUUFBQTtZQUNOLEtBQUssT0FBQTtTQUNOLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUNBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDekIsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkF2UjRCLEtBQUs7O0lBRHZCLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0F5UjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXpSRCxJQXlSQztTQXpSWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBmcm9tIHN0b3JlIGFzIGFuIG9ic2VydmFibGVcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0Q2FydChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRpdHkgZnJvbSBzdG9yZSAoY2FydCB3aXRoIGxvYWRpbmcsIGVycm9yLCBzdWNjZXNzIGZsYWdzKSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnRFbnRpdHkoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudGl0eVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIHdoZW4gdGhlcmUgYXJlIG5vIG9wZXJhdGlvbnMgb24gdGhhdCBpbiBwcm9ncmVzcyBhbmQgaXQgaXMgbm90IGN1cnJlbnRseSBsb2FkaW5nXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGlzU3RhYmxlKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydElzU3RhYmxlU2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpLFxuICAgICAgLy8gV2UgZGlzcGF0Y2ggYSBsb3Qgb2YgYWN0aW9ucyBqdXN0IGFmdGVyIGZpbmlzaGluZyBzb21lIHByb2Nlc3Mgb3IgbG9hZGluZywgc28gd2Ugd2FudCB0aGlzIGZsYWcgbm90IHRvIGZsaWNrZXIuXG4gICAgICAvLyBUaGlzIGZsaWNrZXJpbmcgc2hvdWxkIG9ubHkgYmUgYXZvaWRlZCB3aGVuIHN3aXRjaGluZyBmcm9tIGZhbHNlIHRvIHRydWVcbiAgICAgIC8vIFN0YXJ0IG9mIGxvYWRpbmcgc2hvdWxkIGJlIHNob3dlZCBpbnN0YW50bHkgKG5vIGRlYm91bmNlKVxuICAgICAgLy8gRXh0cmEgYWN0aW9ucyBhcmUgb25seSBkaXNwYXRjaGVkIGFmdGVyIHNvbWUgbG9hZGluZ1xuICAgICAgZGVib3VuY2UoKGlzU3RhYmxlKSA9PiAoaXNTdGFibGUgPyB0aW1lcigwKSA6IEVNUFRZKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgcmFuZG9tIHRlbXAgY2FydCBpZCBnZW5lcmF0b3JcbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVUZW1wQ2FydElkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcHNldWRvVXVpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICByZXR1cm4gYHRlbXAtJHtwc2V1ZG9VdWlkfWA7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9yIG1lcmdlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkIGFuZCBleHRyYURhdGFcbiAgICovXG4gIGNyZWF0ZUNhcnQoe1xuICAgIHVzZXJJZCxcbiAgICBvbGRDYXJ0SWQsXG4gICAgdG9NZXJnZUNhcnRHdWlkLFxuICAgIGV4dHJhRGF0YSxcbiAgfToge1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIG9sZENhcnRJZD86IHN0cmluZztcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmc7XG4gICAgZXh0cmFEYXRhPzoge1xuICAgICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICB9O1xuICB9KTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIHRvIHN1cHBvcnQgY3JlYXRpbmcgbXVsdGlwbGUgY2FydHMgYXQgdGhlIHNhbWUgdGltZSB3ZSBuZWVkIHRvIHVzZSBkaWZmZXJlbnQgZW50aXR5IGZvciBldmVyeSBwcm9jZXNzXG4gICAgLy8gc2ltcGxlIHJhbmRvbSB1dWlkIGdlbmVyYXRvciBpcyB1c2VkIGhlcmUgZm9yIGVudGl0eSBuYW1lc1xuICAgIGNvbnN0IHRlbXBDYXJ0SWQgPSB0aGlzLmdlbmVyYXRlVGVtcENhcnRJZCgpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBvbGRDYXJ0SWQsXG4gICAgICAgIHRvTWVyZ2VDYXJ0R3VpZCxcbiAgICAgICAgdGVtcENhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0RW50aXR5KHRlbXBDYXJ0SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHByb3ZpZGVkIGNhcnQgdG8gY3VycmVudCB1c2VyIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBtZXJnZVRvQ3VycmVudENhcnQoe1xuICAgIHVzZXJJZCxcbiAgICBjYXJ0SWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgY2FydElkOiBzdHJpbmc7XG4gICAgZXh0cmFEYXRhPzoge1xuICAgICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICB9O1xuICB9KSB7XG4gICAgY29uc3QgdGVtcENhcnRJZCA9IHRoaXMuZ2VuZXJhdGVUZW1wQ2FydElkKCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICB0ZW1wQ2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgY2FydElkIGFuZCBleHRyYURhdGFcbiAgICovXG4gIGxvYWRDYXJ0KHtcbiAgICBjYXJ0SWQsXG4gICAgdXNlcklkLFxuICAgIGV4dHJhRGF0YSxcbiAgfToge1xuICAgIGNhcnRJZDogc3RyaW5nO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IGFueTtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJ0IGVudHJpZXMgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRFbnRyaWVzKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cmllc1NlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgcXVhbnRpdHksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RzIEFycmF5IHdpdGggaXRlbXMgKHByb2R1Y3RDb2RlIGFuZCBxdWFudGl0eSlcbiAgICovXG4gIGFkZEVudHJpZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcHJvZHVjdHM6IEFycmF5PHsgcHJvZHVjdENvZGU6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9PlxuICApOiB2b2lkIHtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0LnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnkgZnJvbSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICovXG4gIHJlbW92ZUVudHJ5KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW50cnlOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVudHJ5TnVtYmVyOiBgJHtlbnRyeU51bWJlcn1gLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbnRyeSBpbiBjYXJ0LiBGb3IgcXVhbnRpdHkgPSAwIGl0IHJlbW92ZXMgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBudW1iZXIsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICAgIGVudHJ5TnVtYmVyOiBgJHtlbnRyeU51bWJlcn1gLFxuICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRW50cnkodXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNwZWNpZmljIGVudHJ5IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkoY2FydElkOiBzdHJpbmcsIHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnkgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQsIHByb2R1Y3RDb2RlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIHRoZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFzc2lnbkVtYWlsKGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW1haWwsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqL1xuICBkZWxldGVDYXJ0KGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=