import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart, OrderEntry } from '../../model/index';
import { StateWithMultiCart } from '../store/multi-cart-state';
export declare class WishListService {
    protected store: Store<StateWithMultiCart>;
    protected authService: AuthService;
    constructor(store: Store<StateWithMultiCart>, authService: AuthService);
    createWishList(userId: string, name?: string, description?: string): void;
    getWishList(): Observable<Cart>;
    loadWishList(userId: string): void;
    addEntry(productCode: string): void;
    removeEntry(entry: OrderEntry): void;
    getWishListLoading(): Observable<boolean>;
    protected getWishListId(): Observable<string>;
}
