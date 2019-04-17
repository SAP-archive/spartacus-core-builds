import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart, OrderEntry } from '../../occ/occ-models/index';
import { AuthService, UserToken } from '../../auth/index';
import { CartDataService } from './cart-data.service';
import { StateWithCart } from '../store/cart-state';
export declare class CartService {
    private store;
    private cartData;
    private authService;
    private callback;
    constructor(store: Store<StateWithCart>, cartData: CartDataService, authService: AuthService);
    getActive(): Observable<Cart>;
    getEntries(): Observable<OrderEntry[]>;
    getCartMergeComplete(): Observable<boolean>;
    getLoaded(): Observable<boolean>;
    protected init(): void;
    protected setUserId(userToken: UserToken): void;
    protected loadOrMerge(): void;
    protected refresh(): void;
    loadDetails(): void;
    addEntry(productCode: string, quantity: number): void;
    removeEntry(entry: OrderEntry): void;
    updateEntry(entryNumber: string, quantity: number): void;
    getEntry(productCode: string): Observable<OrderEntry>;
    isCreated(cart: Cart): boolean;
    isEmpty(cart: Cart): boolean;
}
