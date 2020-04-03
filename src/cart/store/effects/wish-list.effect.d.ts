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
    loadWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.RemoveTempCart | CartActions.CreateWishList | CartActions.LoadWishListFail>;
    resetWishList$: Observable<CartActions.LoadWishListSuccess | CartActions.LoadWishListFail>;
    constructor(actions$: Actions, cartConnector: CartConnector, saveCartConnector: SaveCartConnector, authService: AuthService, store: Store<StateWithMultiCart>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<WishListEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ3aXNoLWxpc3QuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTYXZlQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L3NhdmUtY2FydC5jb25uZWN0ZXInO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgV2lzaExpc3RFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjtcbiAgICBwcml2YXRlIHNhdmVDYXJ0Q29ubmVjdG9yO1xuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBzdG9yZTtcbiAgICBjcmVhdGVXaXNoTGlzdCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RGYWlsPjtcbiAgICBsb2FkV2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5SZW1vdmVUZW1wQ2FydCB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0IHwgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0RmFpbD47XG4gICAgcmVzZXRXaXNoTGlzdCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdEZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLCBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pO1xufVxuIl19