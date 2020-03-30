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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm11bHRpLWNhcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0hBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNdWx0aUNhcnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgY2FydCBmcm9tIHN0b3JlIGFzIGFuIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKi9cbiAgICBnZXRDYXJ0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgZW50aXR5IGZyb20gc3RvcmUgKGNhcnQgd2l0aCBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcyBmbGFncykgYXMgYW4gb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqL1xuICAgIGdldENhcnRFbnRpdHkoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgd2hlbiB0aGVyZSBhcmUgbm8gb3BlcmF0aW9ucyBvbiB0aGF0IGluIHByb2dyZXNzIGFuZCBpdCBpcyBub3QgY3VycmVudGx5IGxvYWRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKi9cbiAgICBpc1N0YWJsZShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogU2ltcGxlIHJhbmRvbSB0ZW1wIGNhcnQgaWQgZ2VuZXJhdG9yXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVRlbXBDYXJ0SWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yIG1lcmdlIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCBhbmQgZXh0cmFEYXRhXG4gICAgICovXG4gICAgY3JlYXRlQ2FydCh7IHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQsIGV4dHJhRGF0YSwgfToge1xuICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgb2xkQ2FydElkPzogc3RyaW5nO1xuICAgICAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmc7XG4gICAgICAgIGV4dHJhRGF0YT86IGFueTtcbiAgICB9KTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj47XG4gICAgLyoqXG4gICAgICogTWVyZ2UgcHJvdmlkZWQgY2FydCB0byBjdXJyZW50IHVzZXIgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtcyBPYmplY3Qgd2l0aCB1c2VySWQsIGNhcnRJZCBhbmQgZXh0cmFEYXRhXG4gICAgICovXG4gICAgbWVyZ2VUb0N1cnJlbnRDYXJ0KHsgdXNlcklkLCBjYXJ0SWQsIGV4dHJhRGF0YSB9OiB7XG4gICAgICAgIHVzZXJJZDogYW55O1xuICAgICAgICBjYXJ0SWQ6IGFueTtcbiAgICAgICAgZXh0cmFEYXRhOiBhbnk7XG4gICAgfSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTG9hZCBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgY2FydElkIGFuZCBleHRyYURhdGFcbiAgICAgKi9cbiAgICBsb2FkQ2FydCh7IGNhcnRJZCwgdXNlcklkLCBleHRyYURhdGEsIH06IHtcbiAgICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBleHRyYURhdGE/OiBhbnk7XG4gICAgfSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgZW50cmllcyBhcyBhbiBvYnNlcnZhYmxlXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqL1xuICAgIGdldEVudHJpZXMoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgLyoqXG4gICAgICogQWRkIGVudHJ5IHRvIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAgICogQHBhcmFtIHF1YW50aXR5XG4gICAgICovXG4gICAgYWRkRW50cnkodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSBwcm9kdWN0cyBBcnJheSB3aXRoIGl0ZW1zIChwcm9kdWN0Q29kZSBhbmQgcXVhbnRpdHkpXG4gICAgICovXG4gICAgYWRkRW50cmllcyh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHByb2R1Y3RzOiBBcnJheTx7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgfT4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRyeSBmcm9tIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VySWRcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAgICovXG4gICAgcmVtb3ZlRW50cnkodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZW50cnkgaW4gY2FydC4gRm9yIHF1YW50aXR5ID0gMCBpdCByZW1vdmVzIGVudHJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgICAqIEBwYXJhbSBxdWFudGl0eVxuICAgICAqL1xuICAgIHVwZGF0ZUVudHJ5KHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHNwZWNpZmljIGVudHJ5IGZyb20gY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcnRJZFxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgICAqL1xuICAgIGdldEVudHJ5KGNhcnRJZDogc3RyaW5nLCBwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5IHwgbnVsbD47XG4gICAgLyoqXG4gICAgICogQXNzaWduIGVtYWlsIHRvIHRoZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydElkXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqIEBwYXJhbSBlbWFpbFxuICAgICAqL1xuICAgIGFzc2lnbkVtYWlsKGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVsZXRlIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0SWRcbiAgICAgKiBAcGFyYW0gdXNlcklkXG4gICAgICovXG4gICAgZGVsZXRlQ2FydChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19