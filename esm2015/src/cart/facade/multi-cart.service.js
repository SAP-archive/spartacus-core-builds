import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
let MultiCartService = class MultiCartService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns cart from store as an observable
     *
     * @param cartId
     */
    getCart(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(cartId)));
    }
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param cartId
     */
    getCartEntity(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntitySelectorFactory(cartId)));
    }
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param cartId
     */
    isStable(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartIsStableSelectorFactory(cartId)), 
        // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
        // This flickering should only be avoided when switching from false to true
        // Start of loading should be showed instantly (no debounce)
        // Extra actions are only dispatched after some loading
        debounce(isStable => (isStable ? timer(0) : EMPTY)), distinctUntilChanged());
    }
    /**
     * Simple random temp cart id generator
     */
    generateTempCartId() {
        const pseudoUuid = Math.random()
            .toString(36)
            .substr(2, 9);
        return `temp-${pseudoUuid}`;
    }
    /**
     * Create or merge cart
     *
     * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
     */
    createCart({ userId, oldCartId, toMergeCartGuid, extraData, }) {
        // to support creating multiple carts at the same time we need to use different entity for every process
        // simple random uuid generator is used here for entity names
        const tempCartId = this.generateTempCartId();
        this.store.dispatch(new DeprecatedCartActions.CreateCart({
            extraData,
            userId,
            oldCartId,
            toMergeCartGuid,
            tempCartId,
        }));
        return this.getCartEntity(tempCartId);
    }
    /**
     * Merge provided cart to current user cart
     *
     * @param params Object with userId, cartId and extraData
     */
    mergeToCurrentCart({ userId, cartId, extraData }) {
        const tempCartId = this.generateTempCartId();
        this.store.dispatch(new DeprecatedCartActions.MergeCart({
            userId,
            cartId,
            extraData,
            tempCartId,
        }));
    }
    /**
     * Load cart
     *
     * @param params Object with userId, cartId and extraData
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
     * @param cartId
     */
    getEntries(cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntriesSelectorFactory(cartId)));
    }
    /**
     * Add entry to cart
     *
     * @param userId
     * @param cartId
     * @param productCode
     * @param quantity
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
     * @param userId
     * @param cartId
     * @param products Array with items (productCode and quantity)
     */
    addEntries(userId, cartId, products) {
        products.forEach(product => {
            this.store.dispatch(new CartActions.CartAddEntry({
                userId,
                cartId,
                productCode: product.productCode,
                quantity: product.quantity,
            }));
        });
    }
    /**
     * Remove entry from cart
     *
     * @param userId
     * @param cartId
     * @param entryNumber
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
     * @param userId
     * @param cartId
     * @param entryNumber
     * @param quantity
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
     * @param cartId
     * @param productCode
     */
    getEntry(cartId, productCode) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntrySelectorFactory(cartId, productCode)));
    }
    /**
     * Assign email to the cart
     *
     * @param cartId
     * @param userId
     * @param email
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
     * @param cartId
     * @param userId
     */
    deleteCart(cartId, userId) {
        this.store.dispatch(new DeprecatedCartActions.DeleteCart({
            userId,
            cartId,
        }));
    }
};
MultiCartService.ctorParameters = () => [
    { type: Store }
];
MultiCartService = __decorate([
    Injectable()
], MultiCartService);
export { MultiCartService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUc5RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUFzQixLQUFnQztRQUFoQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtJQUFHLENBQUM7SUFFMUQ7Ozs7T0FJRztJQUNILE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsTUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFDLE1BQWM7UUFD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TixNQUFNO1lBQ04sS0FBSztTQUNOLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztZQUNuQyxNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBOVE4QixLQUFLOztBQUR2QixnQkFBZ0I7SUFENUIsVUFBVSxFQUFFO0dBQ0EsZ0JBQWdCLENBK1E1QjtTQS9RWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0ICogYXMgRGVwcmVjYXRlZENhcnRBY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBmcm9tIHN0b3JlIGFzIGFuIG9ic2VydmFibGVcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0Q2FydChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRpdHkgZnJvbSBzdG9yZSAoY2FydCB3aXRoIGxvYWRpbmcsIGVycm9yLCBzdWNjZXNzIGZsYWdzKSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnRFbnRpdHkoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudGl0eVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIHdoZW4gdGhlcmUgYXJlIG5vIG9wZXJhdGlvbnMgb24gdGhhdCBpbiBwcm9ncmVzcyBhbmQgaXQgaXMgbm90IGN1cnJlbnRseSBsb2FkaW5nXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGlzU3RhYmxlKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydElzU3RhYmxlU2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpLFxuICAgICAgLy8gV2UgZGlzcGF0Y2ggYSBsb3Qgb2YgYWN0aW9ucyBqdXN0IGFmdGVyIGZpbmlzaGluZyBzb21lIHByb2Nlc3Mgb3IgbG9hZGluZywgc28gd2Ugd2FudCB0aGlzIGZsYWcgbm90IHRvIGZsaWNrZXIuXG4gICAgICAvLyBUaGlzIGZsaWNrZXJpbmcgc2hvdWxkIG9ubHkgYmUgYXZvaWRlZCB3aGVuIHN3aXRjaGluZyBmcm9tIGZhbHNlIHRvIHRydWVcbiAgICAgIC8vIFN0YXJ0IG9mIGxvYWRpbmcgc2hvdWxkIGJlIHNob3dlZCBpbnN0YW50bHkgKG5vIGRlYm91bmNlKVxuICAgICAgLy8gRXh0cmEgYWN0aW9ucyBhcmUgb25seSBkaXNwYXRjaGVkIGFmdGVyIHNvbWUgbG9hZGluZ1xuICAgICAgZGVib3VuY2UoaXNTdGFibGUgPT4gKGlzU3RhYmxlID8gdGltZXIoMCkgOiBFTVBUWSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIHJhbmRvbSB0ZW1wIGNhcnQgaWQgZ2VuZXJhdG9yXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlVGVtcENhcnRJZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBzZXVkb1V1aWQgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAuc3Vic3RyKDIsIDkpO1xuICAgIHJldHVybiBgdGVtcC0ke3BzZXVkb1V1aWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3IgbWVyZ2UgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgY3JlYXRlQ2FydCh7XG4gICAgdXNlcklkLFxuICAgIG9sZENhcnRJZCxcbiAgICB0b01lcmdlQ2FydEd1aWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgb2xkQ2FydElkPzogc3RyaW5nO1xuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZztcbiAgICBleHRyYURhdGE/OiBhbnk7XG4gIH0pOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gdG8gc3VwcG9ydCBjcmVhdGluZyBtdWx0aXBsZSBjYXJ0cyBhdCB0aGUgc2FtZSB0aW1lIHdlIG5lZWQgdG8gdXNlIGRpZmZlcmVudCBlbnRpdHkgZm9yIGV2ZXJ5IHByb2Nlc3NcbiAgICAvLyBzaW1wbGUgcmFuZG9tIHV1aWQgZ2VuZXJhdG9yIGlzIHVzZWQgaGVyZSBmb3IgZW50aXR5IG5hbWVzXG4gICAgY29uc3QgdGVtcENhcnRJZCA9IHRoaXMuZ2VuZXJhdGVUZW1wQ2FydElkKCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBvbGRDYXJ0SWQsXG4gICAgICAgIHRvTWVyZ2VDYXJ0R3VpZCxcbiAgICAgICAgdGVtcENhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0RW50aXR5KHRlbXBDYXJ0SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHByb3ZpZGVkIGNhcnQgdG8gY3VycmVudCB1c2VyIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBtZXJnZVRvQ3VycmVudENhcnQoeyB1c2VySWQsIGNhcnRJZCwgZXh0cmFEYXRhIH0pIHtcbiAgICBjb25zdCB0ZW1wQ2FydElkID0gdGhpcy5nZW5lcmF0ZVRlbXBDYXJ0SWQoKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICB0ZW1wQ2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgY2FydElkIGFuZCBleHRyYURhdGFcbiAgICovXG4gIGxvYWRDYXJ0KHtcbiAgICBjYXJ0SWQsXG4gICAgdXNlcklkLFxuICAgIGV4dHJhRGF0YSxcbiAgfToge1xuICAgIGNhcnRJZDogc3RyaW5nO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IGFueTtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FydCBlbnRyaWVzIGFzIGFuIG9ic2VydmFibGVcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0RW50cmllcyhjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJpZXNTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBlbnRyeSB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhZGRFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0cyBBcnJheSB3aXRoIGl0ZW1zIChwcm9kdWN0Q29kZSBhbmQgcXVhbnRpdHkpXG4gICAqL1xuICBhZGRFbnRyaWVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RzOiBBcnJheTx7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXIgfT5cbiAgKTogdm9pZCB7XG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3QucHJvZHVjdENvZGUsXG4gICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKi9cbiAgcmVtb3ZlRW50cnkodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbnRyeSBpbiBjYXJ0LiBGb3IgcXVhbnRpdHkgPSAwIGl0IHJlbW92ZXMgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBudW1iZXIsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgICBxdHk6IHF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVFbnRyeSh1c2VySWQsIGNhcnRJZCwgZW50cnlOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3BlY2lmaWMgZW50cnkgZnJvbSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqL1xuICBnZXRFbnRyeShjYXJ0SWQ6IHN0cmluZywgcHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCwgcHJvZHVjdENvZGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gdGhlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKi9cbiAgYXNzaWduRW1haWwoY2FydElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW1haWwsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqL1xuICBkZWxldGVDYXJ0KGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19