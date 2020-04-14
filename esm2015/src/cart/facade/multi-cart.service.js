import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
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
        debounce((isStable) => (isStable ? timer(0) : EMPTY)), distinctUntilChanged());
    }
    /**
     * Simple random temp cart id generator
     */
    generateTempCartId() {
        const pseudoUuid = Math.random().toString(36).substr(2, 9);
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
        this.store.dispatch(new CartActions.CreateCart({
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
    mergeToCurrentCart({ userId, cartId, extraData, }) {
        const tempCartId = this.generateTempCartId();
        this.store.dispatch(new CartActions.MergeCart({
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
        this.store.dispatch(new CartActions.LoadCart({
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
        products.forEach((product) => {
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
            entryNumber: `${entryNumber}`,
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
                entryNumber: `${entryNumber}`,
                quantity: quantity,
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
        this.store.dispatch(new CartActions.AddEmailToCart({
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
        this.store.dispatch(new CartActions.DeleteCart({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzlELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQXNCLEtBQWdDO1FBQWhDLFVBQUssR0FBTCxLQUFLLENBQTJCO0lBQUcsQ0FBQztJQUUxRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxNQUFjO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsTUFBYztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixN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QUNOLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDekIsTUFBTTtZQUNOLE1BQU07U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXhSOEIsS0FBSzs7QUFEdkIsZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtHQUNBLGdCQUFnQixDQXlSNUI7U0F6UlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZnJvbSBzdG9yZSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50aXR5IGZyb20gc3RvcmUgKGNhcnQgd2l0aCBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcyBmbGFncykgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRDYXJ0RW50aXR5KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRpdHlTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZXJlIGFyZSBubyBvcGVyYXRpb25zIG9uIHRoYXQgaW4gcHJvZ3Jlc3MgYW5kIGl0IGlzIG5vdCBjdXJyZW50bHkgbG9hZGluZ1xuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBpc1N0YWJsZShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRJc1N0YWJsZVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKSxcbiAgICAgIC8vIFdlIGRpc3BhdGNoIGEgbG90IG9mIGFjdGlvbnMganVzdCBhZnRlciBmaW5pc2hpbmcgc29tZSBwcm9jZXNzIG9yIGxvYWRpbmcsIHNvIHdlIHdhbnQgdGhpcyBmbGFnIG5vdCB0byBmbGlja2VyLlxuICAgICAgLy8gVGhpcyBmbGlja2VyaW5nIHNob3VsZCBvbmx5IGJlIGF2b2lkZWQgd2hlbiBzd2l0Y2hpbmcgZnJvbSBmYWxzZSB0byB0cnVlXG4gICAgICAvLyBTdGFydCBvZiBsb2FkaW5nIHNob3VsZCBiZSBzaG93ZWQgaW5zdGFudGx5IChubyBkZWJvdW5jZSlcbiAgICAgIC8vIEV4dHJhIGFjdGlvbnMgYXJlIG9ubHkgZGlzcGF0Y2hlZCBhZnRlciBzb21lIGxvYWRpbmdcbiAgICAgIGRlYm91bmNlKChpc1N0YWJsZSkgPT4gKGlzU3RhYmxlID8gdGltZXIoMCkgOiBFTVBUWSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIHJhbmRvbSB0ZW1wIGNhcnQgaWQgZ2VuZXJhdG9yXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlVGVtcENhcnRJZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBzZXVkb1V1aWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgcmV0dXJuIGB0ZW1wLSR7cHNldWRvVXVpZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvciBtZXJnZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBjcmVhdGVDYXJ0KHtcbiAgICB1c2VySWQsXG4gICAgb2xkQ2FydElkLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZCxcbiAgICBleHRyYURhdGEsXG4gIH06IHtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmc7XG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IHtcbiAgICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgfTtcbiAgfSk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+IHtcbiAgICAvLyB0byBzdXBwb3J0IGNyZWF0aW5nIG11bHRpcGxlIGNhcnRzIGF0IHRoZSBzYW1lIHRpbWUgd2UgbmVlZCB0byB1c2UgZGlmZmVyZW50IGVudGl0eSBmb3IgZXZlcnkgcHJvY2Vzc1xuICAgIC8vIHNpbXBsZSByYW5kb20gdXVpZCBnZW5lcmF0b3IgaXMgdXNlZCBoZXJlIGZvciBlbnRpdHkgbmFtZXNcbiAgICBjb25zdCB0ZW1wQ2FydElkID0gdGhpcy5nZW5lcmF0ZVRlbXBDYXJ0SWQoKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICBleHRyYURhdGEsXG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgb2xkQ2FydElkLFxuICAgICAgICB0b01lcmdlQ2FydEd1aWQsXG4gICAgICAgIHRlbXBDYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FydEVudGl0eSh0ZW1wQ2FydElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBwcm92aWRlZCBjYXJ0IHRvIGN1cnJlbnQgdXNlciBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgbWVyZ2VUb0N1cnJlbnRDYXJ0KHtcbiAgICB1c2VySWQsXG4gICAgY2FydElkLFxuICAgIGV4dHJhRGF0YSxcbiAgfToge1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGNhcnRJZDogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IHtcbiAgICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgfTtcbiAgfSkge1xuICAgIGNvbnN0IHRlbXBDYXJ0SWQgPSB0aGlzLmdlbmVyYXRlVGVtcENhcnRJZCgpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgICAgdGVtcENhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBsb2FkQ2FydCh7XG4gICAgY2FydElkLFxuICAgIHVzZXJJZCxcbiAgICBleHRyYURhdGEsXG4gIH06IHtcbiAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBleHRyYURhdGE/OiBhbnk7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FydCBlbnRyaWVzIGFzIGFuIG9ic2VydmFibGVcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0RW50cmllcyhjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJpZXNTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBlbnRyeSB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhZGRFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0cyBBcnJheSB3aXRoIGl0ZW1zIChwcm9kdWN0Q29kZSBhbmQgcXVhbnRpdHkpXG4gICAqL1xuICBhZGRFbnRyaWVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RzOiBBcnJheTx7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXIgfT5cbiAgKTogdm9pZCB7XG4gICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVudHJ5IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqL1xuICByZW1vdmVFbnRyeSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBlbnRyeU51bWJlcjogYCR7ZW50cnlOdW1iZXJ9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnkgaW4gY2FydC4gRm9yIHF1YW50aXR5ID0gMCBpdCByZW1vdmVzIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICB1cGRhdGVFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogbnVtYmVyLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgaWYgKHF1YW50aXR5ID4gMCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICBlbnRyeU51bWJlcjogYCR7ZW50cnlOdW1iZXJ9YCxcbiAgICAgICAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUVudHJ5KHVzZXJJZCwgY2FydElkLCBlbnRyeU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzcGVjaWZpYyBlbnRyeSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50cnlTZWxlY3RvckZhY3RvcnkoY2FydElkLCBwcm9kdWN0Q29kZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byB0aGUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhc3NpZ25FbWFpbChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKi9cbiAgZGVsZXRlQ2FydChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19