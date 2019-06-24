import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithCart } from '../store/cart-state';
import { CartDataService } from './cart-data.service';
export declare class CartService {
    protected store: Store<StateWithCart>;
    protected cartData: CartDataService;
    protected authService: AuthService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private _activeCart$;
    constructor(store: Store<StateWithCart>, cartData: CartDataService, authService: AuthService);
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
    private isCreated;
    /**
     * Cart is incomplete if it contains only `guid` and `code` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     */
    private isIncomplete;
    private isJustLoggedIn;
}
