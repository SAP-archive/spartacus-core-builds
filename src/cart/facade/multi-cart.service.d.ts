import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';
import { ProcessesLoaderState } from '../../state/utils/processes-loader/processes-loader-state';
import { StateWithMultiCart } from '../store/multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartService {
    protected store: Store<StateWithMultiCart>;
    constructor(store: Store<StateWithMultiCart>);
    /**
     * Returns cart from store as an observable
     *
     * @param cartId
     */
    getCart(cartId: string): Observable<Cart>;
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param cartId
     */
    getCartEntity(cartId: string): Observable<ProcessesLoaderState<Cart>>;
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param cartId
     */
    isStable(cartId: string): Observable<boolean>;
    /**
     * Simple random temp cart id generator
     */
    private generateTempCartId;
    /**
     * Create or merge cart
     *
     * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
     */
    createCart({ userId, oldCartId, toMergeCartGuid, extraData, }: {
        userId: string;
        oldCartId?: string;
        toMergeCartGuid?: string;
        extraData?: {
            active?: boolean;
        };
    }): Observable<ProcessesLoaderState<Cart>>;
    /**
     * Merge provided cart to current user cart
     *
     * @param params Object with userId, cartId and extraData
     */
    mergeToCurrentCart({ userId, cartId, extraData, }: {
        userId: string;
        cartId: string;
        extraData?: {
            active?: boolean;
        };
    }): void;
    /**
     * Load cart
     *
     * @param params Object with userId, cartId and extraData
     */
    loadCart({ cartId, userId, extraData, }: {
        cartId: string;
        userId: string;
        extraData?: any;
    }): void;
    /**
     * Get cart entries as an observable
     * @param cartId
     */
    getEntries(cartId: string): Observable<OrderEntry[]>;
    /**
     * Add entry to cart
     *
     * @param userId
     * @param cartId
     * @param productCode
     * @param quantity
     */
    addEntry(userId: string, cartId: string, productCode: string, quantity: number): void;
    /**
     * Add multiple entries to cart
     *
     * @param userId
     * @param cartId
     * @param products Array with items (productCode and quantity)
     */
    addEntries(userId: string, cartId: string, products: Array<{
        productCode: string;
        quantity: number;
    }>): void;
    /**
     * Remove entry from cart
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     */
    removeEntry(userId: string, cartId: string, entryNumber: number): void;
    /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     * @param quantity
     */
    updateEntry(userId: string, cartId: string, entryNumber: number, quantity: number): void;
    /**
     * Get specific entry from cart
     *
     * @param cartId
     * @param productCode
     */
    getEntry(cartId: string, productCode: string): Observable<OrderEntry | null>;
    /**
     * Assign email to the cart
     *
     * @param cartId
     * @param userId
     * @param email
     */
    assignEmail(cartId: string, userId: string, email: string): void;
    /**
     * Delete cart
     *
     * @param cartId
     * @param userId
     */
    deleteCart(cartId: string, userId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm11bHRpLWNhcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRIQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXVsdGlDYXJ0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgZnJvbSBzdG9yZSBhcyBhbiBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICovXG4gICAgZ2V0Q2FydChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXJ0IGVudGl0eSBmcm9tIHN0b3JlIChjYXJ0IHdpdGggbG9hZGluZywgZXJyb3IsIHN1Y2Nlc3MgZmxhZ3MpIGFzIGFuIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKi9cbiAgICBnZXRDYXJ0RW50aXR5KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIHdoZW4gdGhlcmUgYXJlIG5vIG9wZXJhdGlvbnMgb24gdGhhdCBpbiBwcm9ncmVzcyBhbmQgaXQgaXMgbm90IGN1cnJlbnRseSBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICovXG4gICAgaXNTdGFibGUoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSByYW5kb20gdGVtcCBjYXJ0IGlkIGdlbmVyYXRvclxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVUZW1wQ2FydElkO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciBtZXJnZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQgYW5kIGV4dHJhRGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZUNhcnQoeyB1c2VySWQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkLCBleHRyYURhdGEsIH06IHtcbiAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgIG9sZENhcnRJZD86IHN0cmluZztcbiAgICAgICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nO1xuICAgICAgICBleHRyYURhdGE/OiB7XG4gICAgICAgICAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgICAgICB9O1xuICAgIH0pOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PjtcbiAgICAvKipcbiAgICAgKiBNZXJnZSBwcm92aWRlZCBjYXJ0IHRvIGN1cnJlbnQgdXNlciBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgY2FydElkIGFuZCBleHRyYURhdGFcbiAgICAgKi9cbiAgICBtZXJnZVRvQ3VycmVudENhcnQoeyB1c2VySWQsIGNhcnRJZCwgZXh0cmFEYXRhLCB9OiB7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgZXh0cmFEYXRhPzoge1xuICAgICAgICAgICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICAgICAgfTtcbiAgICB9KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2FkIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgICAqL1xuICAgIGxvYWRDYXJ0KHsgY2FydElkLCB1c2VySWQsIGV4dHJhRGF0YSwgfToge1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgIGV4dHJhRGF0YT86IGFueTtcbiAgICB9KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBlbnRyaWVzIGFzIGFuIG9ic2VydmFibGVcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICovXG4gICAgZ2V0RW50cmllcyhjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICAvKipcbiAgICAgKiBBZGQgZW50cnkgdG8gY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICAgKi9cbiAgICBhZGRFbnRyeSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIHByb2R1Y3RzIEFycmF5IHdpdGggaXRlbXMgKHByb2R1Y3RDb2RlIGFuZCBxdWFudGl0eSlcbiAgICAgKi9cbiAgICBhZGRFbnRyaWVzKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgcHJvZHVjdHM6IEFycmF5PHtcbiAgICAgICAgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgICAgICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICB9Pik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVudHJ5IGZyb20gY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICAgKi9cbiAgICByZW1vdmVFbnRyeSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBlbnRyeSBpbiBjYXJ0LiBGb3IgcXVhbnRpdHkgPSAwIGl0IHJlbW92ZXMgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAgICogQHBhcmFtIHF1YW50aXR5XG4gICAgICovXG4gICAgdXBkYXRlRW50cnkodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgc3BlY2lmaWMgZW50cnkgZnJvbSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAgICovXG4gICAgZ2V0RW50cnkoY2FydElkOiBzdHJpbmcsIHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnkgfCBudWxsPjtcbiAgICAvKipcbiAgICAgKiBBc3NpZ24gZW1haWwgdG8gdGhlIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIGVtYWlsXG4gICAgICovXG4gICAgYXNzaWduRW1haWwoY2FydElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEZWxldGUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKi9cbiAgICBkZWxldGVDYXJ0KGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=