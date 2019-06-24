import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart } from '../../model/cart.model';
import { StateWithCart } from '../store/cart-state';
export declare const ANONYMOUS_USERID = "anonymous";
export declare class CartDataService {
    protected store: Store<StateWithCart>;
    protected authService: AuthService;
    private _userId;
    private _cart;
    constructor(store: Store<StateWithCart>, authService: AuthService);
    readonly hasCart: boolean;
    readonly userId: string;
    readonly cart: Cart;
    readonly cartId: string;
}
