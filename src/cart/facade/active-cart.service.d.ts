import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import { StateWithProcess } from '../../process';
import { User } from '../../model/misc.model';
export declare class ActiveCartService {
    protected store: Store<StateWithMultiCart | StateWithProcess<void>>;
    protected authService: AuthService;
    protected multiCartService: MultiCartService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private activeCart$;
    private userId;
    private cartId;
    private cartUser;
    private addEntrySub;
    private entriesToAdd;
    private activeCartId$;
    private cartSelector$;
    constructor(store: Store<StateWithMultiCart | StateWithProcess<void>>, authService: AuthService, multiCartService: MultiCartService);
    private initActiveCart;
    /**
     * Returns active cart
     */
    getActive(): Observable<Cart>;
    /**
     * Returns active cart id
     */
    getActiveCartId(): Observable<string>;
    /**
     * Returns cart entries
     */
    getEntries(): Observable<OrderEntry[]>;
    /**
     * Returns loaded flag (success or error)
     */
    getLoaded(): Observable<boolean>;
    private loadOrMerge;
    private load;
    /**
     * Returns loaded flag for add entry process (success)
     */
    getAddEntryLoaded(): Observable<boolean>;
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     * @param guestMerge
     */
    addEntry(productCode: string, quantity: number, guestMerge?: boolean): void;
    /**
     * Remove entry
     *
     * @param entry
     */
    removeEntry(entry: OrderEntry): void;
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    updateEntry(entryNumber: number, quantity: number): void;
    /**
     * Returns cart entry
     *
     * @param productCode
     */
    getEntry(productCode: string): Observable<OrderEntry>;
    /**
     * Assign email to cart
     *
     * @param email
     */
    addEmail(email: string): void;
    /**
     * Get assigned user to cart
     */
    getAssignedUser(): Observable<User>;
    /**
     * Returns true for guest cart
     */
    isGuestCart(): boolean;
    /**
     * Add multiple entries to a cart
     *
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    addEntries(cartEntries: OrderEntry[], guestMerge?: boolean): void;
    private isEmail;
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    private guestCartMerge;
    private isEmpty;
    private isJustLoggedIn;
}
