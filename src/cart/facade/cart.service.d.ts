import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActiveCartService } from './active-cart.service';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { User } from '../../model/misc.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithCart } from '../store/cart-state';
import { CartDataService } from './cart-data.service';
/**
 * @deprecated since version 1.4
 * Use ActiveCartService instead (API is almost the same)
 * From 1.4 version CartService uses ActiveCartService if it is available
 * Fixes and improvements will be only implemented in ActiveCartService
 */
export declare class CartService {
    protected store: Store<StateWithCart>;
    protected cartData: CartDataService;
    protected authService: AuthService;
    protected activeCartService?: ActiveCartService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private _activeCart$;
    constructor(store: Store<StateWithCart>, cartData: CartDataService, authService: AuthService, activeCartService?: ActiveCartService);
    getActive(): Observable<Cart>;
    getEntries(): Observable<OrderEntry[]>;
    getCartMergeComplete(): Observable<boolean>;
    getLoaded(): Observable<boolean>;
    getAddEntryLoaded(): Observable<boolean>;
    private loadOrMerge;
    private load;
    addEntry(productCode: string, quantity: number): void;
    removeEntry(entry: OrderEntry): void;
    updateEntry(entryNumber: string, quantity: number): void;
    getEntry(productCode: string): Observable<OrderEntry>;
    addEmail(email: string): void;
    getAssignedUser(): Observable<User>;
    isGuestCart(): boolean;
    /**
     * Add multiple entries to a cart
     * Requires a created cart
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    addEntries(cartEntries: OrderEntry[]): void;
    private isCreated;
    /**
     * Cart is incomplete if it contains only `guid`, `code` and `user` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     */
    private isIncomplete;
    private isJustLoggedIn;
    private isLoggedIn;
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    private guestCartMerge;
    addVoucher(voucherId: string): void;
}
