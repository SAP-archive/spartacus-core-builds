import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, from } from 'rxjs';
import { catchError, concatMap, map, switchMap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../../auth/facade/auth.service';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { SaveCartConnector } from '../../connectors/save-cart/save-cart.connecter';
import { getCartIdByUserId, getWishlistName } from '../../utils/utils';
import { CartActions } from '../actions';
import { MultiCartSelectors } from '../selectors';
var WishListEffects = /** @class */ (function () {
    function WishListEffects(actions$, cartConnector, saveCartConnector, authService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.saveCartConnector = saveCartConnector;
        this.authService = authService;
        this.store = store;
        this.createWishList$ = this.actions$.pipe(ofType(CartActions.CREATE_WISH_LIST), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.cartConnector.create(payload.userId).pipe(switchMap(function (cart) {
                return _this.saveCartConnector
                    .saveCart(payload.userId, cart.code, payload.name, payload.description)
                    .pipe(switchMap(function (saveCartResult) { return [
                    new CartActions.CreateWishListSuccess({
                        cart: saveCartResult.savedCartData,
                        userId: payload.userId,
                    }),
                ]; }), catchError(function (error) {
                    return from([
                        new CartActions.CreateWishListFail({
                            cartId: cart.code,
                            error: makeErrorSerializable(error),
                        }),
                    ]);
                }));
            }));
        }));
        this.loadWishList$ = this.actions$.pipe(ofType(CartActions.LOAD_WISH_LIST), map(function (action) { return action.payload; }), concatMap(function (payload) {
            var userId = payload.userId, customerId = payload.customerId, tempCartId = payload.tempCartId;
            return _this.cartConnector.loadAll(userId).pipe(switchMap(function (carts) {
                if (carts) {
                    var wishList = carts.find(function (cart) { return cart.name === getWishlistName(customerId); });
                    if (Boolean(wishList)) {
                        return [
                            new CartActions.LoadWishListSuccess({
                                cart: wishList,
                                userId: userId,
                                tempCartId: tempCartId,
                                customerId: customerId,
                                cartId: getCartIdByUserId(wishList, userId),
                            }),
                            new CartActions.RemoveCart({ cartId: tempCartId }),
                        ];
                    }
                    else {
                        return [
                            new CartActions.CreateWishList({
                                userId: userId,
                                name: getWishlistName(customerId),
                            }),
                        ];
                    }
                }
            }), catchError(function (error) {
                return from([
                    new CartActions.LoadWishListFail({
                        userId: userId,
                        cartId: tempCartId,
                        customerId: customerId,
                        error: makeErrorSerializable(error),
                    }),
                ]);
            }));
        }));
        this.resetWishList$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), withLatestFrom(this.authService.getOccUserId(), this.store.pipe(select(MultiCartSelectors.getWishListId))), switchMap(function (_a) {
            var _b = __read(_a, 3), userId = _b[1], wishListId = _b[2];
            if (Boolean(wishListId)) {
                return _this.cartConnector.load(userId, wishListId).pipe(switchMap(function (wishList) { return [
                    new CartActions.LoadWishListSuccess({
                        cart: wishList,
                        userId: userId,
                        cartId: getCartIdByUserId(wishList, userId),
                    }),
                ]; }), catchError(function (error) {
                    return from([
                        new CartActions.LoadWishListFail({
                            userId: userId,
                            cartId: wishListId,
                            error: makeErrorSerializable(error),
                        }),
                    ]);
                }));
            }
            return EMPTY;
        }));
    }
    WishListEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: SaveCartConnector },
        { type: AuthService },
        { type: Store }
    ]; };
    __decorate([
        Effect()
    ], WishListEffects.prototype, "createWishList$", void 0);
    __decorate([
        Effect()
    ], WishListEffects.prototype, "loadWishList$", void 0);
    __decorate([
        Effect()
    ], WishListEffects.prototype, "resetWishList$", void 0);
    WishListEffects = __decorate([
        Injectable()
    ], WishListEffects);
    return WishListEffects;
}());
export { WishListEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUdsRDtJQStIRSx5QkFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsS0FBZ0M7UUFMMUMsaUJBTUk7UUFMTSxhQUFR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QkFDZixPQUFBLElBQUksQ0FBQzt3QkFDSCxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs0QkFDL0IsTUFBTSxRQUFBOzRCQUNOLE1BQU0sRUFBRSxVQUFVOzRCQUNsQixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO3lCQUNwQyxDQUFDO3FCQUNILENBQUM7Z0JBTkYsQ0FNRSxDQUNILENBQ0YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBUUMsQ0FBQzs7Z0JBTGdCLE9BQU87Z0JBQ0YsYUFBYTtnQkFDVCxpQkFBaUI7Z0JBQ3ZCLFdBQVc7Z0JBQ2pCLEtBQUs7O0lBbEl0QjtRQURDLE1BQU0sRUFBRTs0REFtQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTswREFrRFA7SUFHRjtRQURDLE1BQU0sRUFBRTsyREFtQ1A7SUE3SFMsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBc0kzQjtJQUFELHNCQUFDO0NBQUEsQUF0SUQsSUFzSUM7U0F0SVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGNvbmNhdE1hcCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTYXZlQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L3NhdmUtY2FydC5jb25uZWN0ZXInO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQsIGdldFdpc2hsaXN0TmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgY3JlYXRlV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfV0lTSF9MSVNUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IuY3JlYXRlKHBheWxvYWQudXNlcklkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGNhcnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlQ2FydENvbm5lY3RvclxuICAgICAgICAgICAgLnNhdmVDYXJ0KFxuICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydC5jb2RlLFxuICAgICAgICAgICAgICBwYXlsb2FkLm5hbWUsXG4gICAgICAgICAgICAgIHBheWxvYWQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHNhdmVDYXJ0UmVzdWx0KSA9PiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjYXJ0OiBzYXZlQ2FydFJlc3VsdC5zYXZlZENhcnREYXRhLFxuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbCh7XG4gICAgICAgICAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRXaXNoTGlzdCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5MT0FEX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgY29uc3QgeyB1c2VySWQsIGN1c3RvbWVySWQsIHRlbXBDYXJ0SWQgfSA9IHBheWxvYWQ7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWRBbGwodXNlcklkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGNhcnRzKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCB3aXNoTGlzdCA9IGNhcnRzLmZpbmQoXG4gICAgICAgICAgICAgIChjYXJ0KSA9PiBjYXJ0Lm5hbWUgPT09IGdldFdpc2hsaXN0TmFtZShjdXN0b21lcklkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChCb29sZWFuKHdpc2hMaXN0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IHdpc2hMaXN0LFxuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgdGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbWVySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGdldENhcnRJZEJ5VXNlcklkKHdpc2hMaXN0LCB1c2VySWQpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KHsgY2FydElkOiB0ZW1wQ2FydElkIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3Qoe1xuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgbmFtZTogZ2V0V2lzaGxpc3ROYW1lKGN1c3RvbWVySWQpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdEZhaWwoe1xuICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogdGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgY3VzdG9tZXJJZCxcbiAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0V2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0SWQpKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChbLCB1c2VySWQsIHdpc2hMaXN0SWRdKSA9PiB7XG4gICAgICBpZiAoQm9vbGVhbih3aXNoTGlzdElkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQodXNlcklkLCB3aXNoTGlzdElkKS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgod2lzaExpc3QpID0+IFtcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzKHtcbiAgICAgICAgICAgICAgY2FydDogd2lzaExpc3QsXG4gICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBnZXRDYXJ0SWRCeVVzZXJJZCh3aXNoTGlzdCwgdXNlcklkKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RGYWlsKHtcbiAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiB3aXNoTGlzdElkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG59XG4iXX0=