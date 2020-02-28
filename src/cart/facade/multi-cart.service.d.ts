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
        extraData?: any;
    }): Observable<ProcessesLoaderState<Cart>>;
    /**
     * Merge provided cart to current user cart
     *
     * @param params Object with userId, cartId and extraData
     */
    mergeToCurrentCart({ userId, cartId, extraData }: {
        userId: any;
        cartId: any;
        extraData: any;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm11bHRpLWNhcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0hBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXVsdGlDYXJ0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgZnJvbSBzdG9yZSBhcyBhbiBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICovXG4gICAgZ2V0Q2FydChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXJ0IGVudGl0eSBmcm9tIHN0b3JlIChjYXJ0IHdpdGggbG9hZGluZywgZXJyb3IsIHN1Y2Nlc3MgZmxhZ3MpIGFzIGFuIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKi9cbiAgICBnZXRDYXJ0RW50aXR5KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIHdoZW4gdGhlcmUgYXJlIG5vIG9wZXJhdGlvbnMgb24gdGhhdCBpbiBwcm9ncmVzcyBhbmQgaXQgaXMgbm90IGN1cnJlbnRseSBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICovXG4gICAgaXNTdGFibGUoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSByYW5kb20gdGVtcCBjYXJ0IGlkIGdlbmVyYXRvclxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVUZW1wQ2FydElkO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciBtZXJnZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQgYW5kIGV4dHJhRGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZUNhcnQoeyB1c2VySWQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkLCBleHRyYURhdGEsIH06IHtcbiAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgIG9sZENhcnRJZD86IHN0cmluZztcbiAgICAgICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nO1xuICAgICAgICBleHRyYURhdGE/OiBhbnk7XG4gICAgfSk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+O1xuICAgIC8qKlxuICAgICAqIE1lcmdlIHByb3ZpZGVkIGNhcnQgdG8gY3VycmVudCB1c2VyIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgICAqL1xuICAgIG1lcmdlVG9DdXJyZW50Q2FydCh7IHVzZXJJZCwgY2FydElkLCBleHRyYURhdGEgfToge1xuICAgICAgICB1c2VySWQ6IGFueTtcbiAgICAgICAgY2FydElkOiBhbnk7XG4gICAgICAgIGV4dHJhRGF0YTogYW55O1xuICAgIH0pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExvYWQgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAgICovXG4gICAgbG9hZENhcnQoeyBjYXJ0SWQsIHVzZXJJZCwgZXh0cmFEYXRhLCB9OiB7XG4gICAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgZXh0cmFEYXRhPzogYW55O1xuICAgIH0pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGVudHJpZXMgYXMgYW4gb2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKi9cbiAgICBnZXRFbnRyaWVzKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIC8qKlxuICAgICAqIEFkZCBlbnRyeSB0byBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgICAqIEBwYXJhbSBxdWFudGl0eVxuICAgICAqL1xuICAgIGFkZEVudHJ5KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgcHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gcHJvZHVjdHMgQXJyYXkgd2l0aCBpdGVtcyAocHJvZHVjdENvZGUgYW5kIHF1YW50aXR5KVxuICAgICAqL1xuICAgIGFkZEVudHJpZXModXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0czogQXJyYXk8e1xuICAgICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgICBxdWFudGl0eTogbnVtYmVyO1xuICAgIH0+KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50cnkgZnJvbSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgICAqL1xuICAgIHJlbW92ZUVudHJ5KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW50cnlOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVudHJ5IGluIGNhcnQuIEZvciBxdWFudGl0eSA9IDAgaXQgcmVtb3ZlcyBlbnRyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICAgKi9cbiAgICB1cGRhdGVFbnRyeSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBzcGVjaWZpYyBlbnRyeSBmcm9tIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICAgKi9cbiAgICBnZXRFbnRyeShjYXJ0SWQ6IHN0cmluZywgcHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeSB8IG51bGw+O1xuICAgIC8qKlxuICAgICAqIEFzc2lnbiBlbWFpbCB0byB0aGUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gZW1haWxcbiAgICAgKi9cbiAgICBhc3NpZ25FbWFpbChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIERlbGV0ZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqL1xuICAgIGRlbGV0ZUNhcnQoY2FydElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==