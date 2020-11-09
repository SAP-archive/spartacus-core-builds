import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth';
import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';
import { ProcessesLoaderState } from '../../state/utils/processes-loader/processes-loader-state';
import { StateWithMultiCart } from '../store/multi-cart-state';
export declare class MultiCartService {
    protected store: Store<StateWithMultiCart>;
    protected userIdService: UserIdService;
    constructor(store: Store<StateWithMultiCart>, userIdService: UserIdService);
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
     * Get last entry for specific product code from cart.
     * Needed to cover processes where multiple entries can share the same product code
     * (e.g. promotions or configurable products)
     *
     * @param cartId
     * @param productCode
     */
    getLastEntry(cartId: string, productCode: string): Observable<OrderEntry | null>;
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
     * Get first entry from cart matching the specified product code
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
    /**
     * Reloads the cart with specified id.
     *
     * @param cartId
     * @param extraData
     */
    reloadCart(cartId: string, extraData?: {
        active: boolean;
    }): void;
}
