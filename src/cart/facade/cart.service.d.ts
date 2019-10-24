import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { User } from '../../model/misc.model';
import { OrderEntry } from '../../model/order.model';
import * as fromProcessStore from '../../process/store/process-state';
import { StateWithCart } from '../store/cart-state';
import { CartDataService } from './cart-data.service';
export declare class CartService {
    protected store: Store<StateWithCart | fromProcessStore.StateWithProcess<void>>;
    protected cartData: CartDataService;
    protected authService: AuthService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private _activeCart$;
    constructor(store: Store<StateWithCart | fromProcessStore.StateWithProcess<void>>, cartData: CartDataService, authService: AuthService);
    getActive(): Observable<Cart>;
    getEntries(): Observable<OrderEntry[]>;
    getCartMergeComplete(): Observable<boolean>;
    getLoaded(): Observable<boolean>;
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
     * Temporary method to merge guest cart with user cart because of beackend limitation
     * This is for an edge case
     */
    private guestCartMerge;
    addVoucher(voucherId: string): void;
}
