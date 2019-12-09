import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart } from '../../model/cart.model';
import { StateWithCart } from '../store/cart-state';
/**
 * @deprecated since version 1.4
 * Replace particular methods usage with replacements from other services
 */
export declare class CartDataService {
    protected store: Store<StateWithCart>;
    protected authService: AuthService;
    private _userId;
    private _cart;
    constructor(store: Store<StateWithCart>, authService: AuthService);
    readonly hasCart: boolean;
    /**
     * @deprecated since version 1.4
     * Use `getOccUserId` from `AuthService` instead
     */
    readonly userId: string;
    /**
     * @deprecated since version 1.4
     * Use `getActive` from `ActiveCartService` instead
     */
    readonly cart: Cart;
    /**
     * @deprecated since version 1.4
     * Use `getActiveCartId` from `ActiveCartService` instead
     */
    readonly cartId: string;
    /**
     * @deprecated since version 1.4
     * Use `isGuestCart` from `ActiveCartService` instead
     */
    readonly isGuestCart: boolean;
    private isEmail;
}
