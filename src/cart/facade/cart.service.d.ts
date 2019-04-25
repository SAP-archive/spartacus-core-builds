import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService, UserToken } from '../../auth/index';
import { CartDataService } from './cart-data.service';
import { StateWithCart } from '../store/cart-state';
import { UICart, UIOrderEntry } from '../model/cart';
export declare class CartService {
    private store;
    private cartData;
    private authService;
    private callback;
    constructor(store: Store<StateWithCart>, cartData: CartDataService, authService: AuthService);
    getActive(): Observable<UICart>;
    getEntries(): Observable<UIOrderEntry[]>;
    getCartMergeComplete(): Observable<boolean>;
    getLoaded(): Observable<boolean>;
    protected init(): void;
    protected setUserId(userToken: UserToken): void;
    protected loadOrMerge(): void;
    protected refresh(): void;
    loadDetails(): void;
    addEntry(productCode: string, quantity: number): void;
    removeEntry(entry: UIOrderEntry): void;
    updateEntry(entryNumber: string, quantity: number): void;
    getEntry(productCode: string): Observable<UIOrderEntry>;
    isCreated(cart: UICart): boolean;
    isEmpty(cart: UICart): boolean;
}
