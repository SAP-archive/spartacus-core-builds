import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/facade/auth.service';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { SaveCartConnector } from '../../connectors/save-cart/save-cart.connecter';
import { CartActions } from '../actions';
import { StateWithMultiCart } from '../multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class WishListEffects {
    private actions$;
    private cartConnector;
    private saveCartConnector;
    private authService;
    private store;
    createWishList$: Observable<CartActions.CreateWishListSuccess | CartActions.CreateWishListFail>;
    loadWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.CreateWishList | CartActions.LoadCartFail>;
    resetWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.LoadCartFail>;
    constructor(actions$: Actions, cartConnector: CartConnector, saveCartConnector: SaveCartConnector, authService: AuthService, store: Store<StateWithMultiCart>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<WishListEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ3aXNoLWxpc3QuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2F2ZUNhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NhdmUtY2FydC9zYXZlLWNhcnQuY29ubmVjdGVyJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFdpc2hMaXN0RWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSBzYXZlQ2FydENvbm5lY3RvcjtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3RvcmU7XG4gICAgY3JlYXRlV2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbD47XG4gICAgbG9hZFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWw+O1xuICAgIHJlc2V0V2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLCBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pO1xufVxuIl19