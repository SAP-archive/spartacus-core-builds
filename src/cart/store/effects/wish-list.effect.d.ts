import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/facade/auth.service';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { SaveCartConnector } from '../../connectors/save-cart/save-cart.connecter';
import { CartActions } from '../actions';
import { StateWithMultiCart } from '../multi-cart-state';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ3aXNoLWxpc3QuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFNhdmVDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmNvbm5lY3Rlcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggZWZmZWN0cyB3aWxsIG5vIGxvbmdlciBiZSBhIHBhcnQgb2YgcHVibGljIEFQSVxuICpcbiAqIFRPRE8oaXNzdWU6IzQ1MDcpXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFdpc2hMaXN0RWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSBzYXZlQ2FydENvbm5lY3RvcjtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3RvcmU7XG4gICAgY3JlYXRlV2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbD47XG4gICAgbG9hZFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWw+O1xuICAgIHJlc2V0V2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLCBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pO1xufVxuIl19