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
     * Simple random temp cart id generator
     * @private
     * @return {?}
     */
    generateTempCartId() {
        /** @type {?} */
        const pseudoUuid = Math.random()
            .toString(36)
            .substr(2, 9);
        return `temp-${pseudoUuid}`;
    }
    /**
     * Create or merge cart
     *
     * @param {?} __0
     * @return {?}
     */
    createCart({ userId, oldCartId, toMergeCartGuid, extraData, }) {
        // to support creating multiple carts at the same time we need to use different entity for every process
        // simple random uuid generator is used here for entity names
        /** @type {?} */
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
     * @param {?} __0
     * @return {?}
     */
    mergeToCurrentCart({ userId, cartId, extraData }) {
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUc5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQXNCLEtBQWdDO1FBQWhDLFVBQUssR0FBTCxLQUFLLENBQTJCO0lBQUcsQ0FBQzs7Ozs7OztJQU8xRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxhQUFhLENBQUMsTUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxRQUFRLENBQUMsTUFBYztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMs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Q25DLE1BQU07WUFDTixNQUFNO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUEvUUYsVUFBVTs7OztZQVhNLEtBQUs7Ozs7Ozs7SUFhUixpQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0ICogYXMgRGVwcmVjYXRlZENhcnRBY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBmcm9tIHN0b3JlIGFzIGFuIG9ic2VydmFibGVcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0Q2FydChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRpdHkgZnJvbSBzdG9yZSAoY2FydCB3aXRoIGxvYWRpbmcsIGVycm9yLCBzdWNjZXNzIGZsYWdzKSBhcyBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldENhcnRFbnRpdHkoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudGl0eVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIHdoZW4gdGhlcmUgYXJlIG5vIG9wZXJhdGlvbnMgb24gdGhhdCBpbiBwcm9ncmVzcyBhbmQgaXQgaXMgbm90IGN1cnJlbnRseSBsb2FkaW5nXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGlzU3RhYmxlKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydElzU3RhYmxlU2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpLFxuICAgICAgLy8gV2UgZGlzcGF0Y2ggYSBsb3Qgb2YgYWN0aW9ucyBqdXN0IGFmdGVyIGZpbmlzaGluZyBzb21lIHByb2Nlc3Mgb3IgbG9hZGluZywgc28gd2Ugd2FudCB0aGlzIGZsYWcgbm90IHRvIGZsaWNrZXIuXG4gICAgICAvLyBUaGlzIGZsaWNrZXJpbmcgc2hvdWxkIG9ubHkgYmUgYXZvaWRlZCB3aGVuIHN3aXRjaGluZyBmcm9tIGZhbHNlIHRvIHRydWVcbiAgICAgIC8vIFN0YXJ0IG9mIGxvYWRpbmcgc2hvdWxkIGJlIHNob3dlZCBpbnN0YW50bHkgKG5vIGRlYm91bmNlKVxuICAgICAgLy8gRXh0cmEgYWN0aW9ucyBhcmUgb25seSBkaXNwYXRjaGVkIGFmdGVyIHNvbWUgbG9hZGluZ1xuICAgICAgZGVib3VuY2UoaXNTdGFibGUgPT4gKGlzU3RhYmxlID8gdGltZXIoMCkgOiBFTVBUWSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIHJhbmRvbSB0ZW1wIGNhcnQgaWQgZ2VuZXJhdG9yXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlVGVtcENhcnRJZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBzZXVkb1V1aWQgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAuc3Vic3RyKDIsIDkpO1xuICAgIHJldHVybiBgdGVtcC0ke3BzZXVkb1V1aWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3IgbWVyZ2UgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgY3JlYXRlQ2FydCh7XG4gICAgdXNlcklkLFxuICAgIG9sZENhcnRJZCxcbiAgICB0b01lcmdlQ2FydEd1aWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgb2xkQ2FydElkPzogc3RyaW5nO1xuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZztcbiAgICBleHRyYURhdGE/OiBhbnk7XG4gIH0pOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gdG8gc3VwcG9ydCBjcmVhdGluZyBtdWx0aXBsZSBjYXJ0cyBhdCB0aGUgc2FtZSB0aW1lIHdlIG5lZWQgdG8gdXNlIGRpZmZlcmVudCBlbnRpdHkgZm9yIGV2ZXJ5IHByb2Nlc3NcbiAgICAvLyBzaW1wbGUgcmFuZG9tIHV1aWQgZ2VuZXJhdG9yIGlzIHVzZWQgaGVyZSBmb3IgZW50aXR5IG5hbWVzXG4gICAgY29uc3QgdGVtcENhcnRJZCA9IHRoaXMuZ2VuZXJhdGVUZW1wQ2FydElkKCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydCh7XG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBvbGRDYXJ0SWQsXG4gICAgICAgIHRvTWVyZ2VDYXJ0R3VpZCxcbiAgICAgICAgdGVtcENhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0RW50aXR5KHRlbXBDYXJ0SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHByb3ZpZGVkIGNhcnQgdG8gY3VycmVudCB1c2VyIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAqL1xuICBtZXJnZVRvQ3VycmVudENhcnQoeyB1c2VySWQsIGNhcnRJZCwgZXh0cmFEYXRhIH0pIHtcbiAgICBjb25zdCB0ZW1wQ2FydElkID0gdGhpcy5nZW5lcmF0ZVRlbXBDYXJ0SWQoKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICB0ZW1wQ2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgY2FydElkIGFuZCBleHRyYURhdGFcbiAgICovXG4gIGxvYWRDYXJ0KHtcbiAgICBjYXJ0SWQsXG4gICAgdXNlcklkLFxuICAgIGV4dHJhRGF0YSxcbiAgfToge1xuICAgIGNhcnRJZDogc3RyaW5nO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGV4dHJhRGF0YT86IGFueTtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FydCBlbnRyaWVzIGFzIGFuIG9ic2VydmFibGVcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0RW50cmllcyhjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJpZXNTZWxlY3RvckZhY3RvcnkoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBlbnRyeSB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhZGRFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0cyBBcnJheSB3aXRoIGl0ZW1zIChwcm9kdWN0Q29kZSBhbmQgcXVhbnRpdHkpXG4gICAqL1xuICBhZGRFbnRyaWVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RzOiBBcnJheTx7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXIgfT5cbiAgKTogdm9pZCB7XG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3QucHJvZHVjdENvZGUsXG4gICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKi9cbiAgcmVtb3ZlRW50cnkodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbnRyeSBpbiBjYXJ0LiBGb3IgcXVhbnRpdHkgPSAwIGl0IHJlbW92ZXMgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBudW1iZXIsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgICBxdHk6IHF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVFbnRyeSh1c2VySWQsIGNhcnRJZCwgZW50cnlOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3BlY2lmaWMgZW50cnkgZnJvbSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqL1xuICBnZXRFbnRyeShjYXJ0SWQ6IHN0cmluZywgcHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCwgcHJvZHVjdENvZGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gdGhlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKi9cbiAgYXNzaWduRW1haWwoY2FydElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW1haWwsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqL1xuICBkZWxldGVDYXJ0KGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkRlbGV0ZUNhcnQoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19