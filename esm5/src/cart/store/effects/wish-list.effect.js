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
            var userId = payload.userId, customerId = payload.customerId;
            return _this.cartConnector.loadAll(userId).pipe(switchMap(function (carts) {
                if (carts) {
                    var wishList = carts.find(function (cart) { return cart.name === "wishlist" + customerId; });
                    if (Boolean(wishList)) {
                        return [
                            new CartActions.LoadWishListSuccess({
                                cart: wishList,
                                userId: userId,
                            }),
                        ];
                    }
                    else {
                        return [
                            new CartActions.CreateWishList({
                                userId: userId,
                                name: "wishlist" + customerId,
                            }),
                        ];
                    }
                }
            }), catchError(function (error) {
                return from([new CartActions.LoadCartFail(makeErrorSerializable(error))]);
            }));
        }));
        this.resetWishList$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), withLatestFrom(this.authService.getOccUserId(), this.store.pipe(select(MultiCartSelectors.getWishListId))), switchMap(function (_a) {
            var _b = __read(_a, 3), userId = _b[1], wishListId = _b[2];
            if (Boolean(wishListId)) {
                return _this.cartConnector.load(userId, wishListId).pipe(switchMap(function (wishList) { return [
                    new CartActions.LoadWishListSuccess({ cart: wishList, userId: userId }),
                ]; }), catchError(function (error) {
                    return from([new CartActions.LoadCartFail(makeErrorSerializable(error))]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2xEO0lBeUdFLHlCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixLQUFnQztRQUwxQyxpQkFNSTtRQUxNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlC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Z0gzQjtJQUFELHNCQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0FoSFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGNvbmNhdE1hcCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTYXZlQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L3NhdmUtY2FydC5jb25uZWN0ZXInO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBjcmVhdGVXaXNoTGlzdCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkNSRUFURV9XSVNIX0xJU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5jcmVhdGUocGF5bG9hZC51c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoY2FydCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVDYXJ0Q29ubmVjdG9yXG4gICAgICAgICAgICAuc2F2ZUNhcnQoXG4gICAgICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgIHBheWxvYWQubmFtZSxcbiAgICAgICAgICAgICAgcGF5bG9hZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoc2F2ZUNhcnRSZXN1bHQpID0+IFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IHNhdmVDYXJ0UmVzdWx0LnNhdmVkQ2FydERhdGEsXG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0XG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9XSVNIX0xJU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIGNvbnN0IHsgdXNlcklkLCBjdXN0b21lcklkIH0gPSBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkQWxsKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChjYXJ0cykgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0cykge1xuICAgICAgICAgICAgY29uc3Qgd2lzaExpc3QgPSBjYXJ0cy5maW5kKFxuICAgICAgICAgICAgICAoY2FydCkgPT4gY2FydC5uYW1lID09PSBgd2lzaGxpc3Qke2N1c3RvbWVySWR9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChCb29sZWFuKHdpc2hMaXN0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IHdpc2hMaXN0LFxuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3Qoe1xuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgbmFtZTogYHdpc2hsaXN0JHtjdXN0b21lcklkfWAsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRXaXNoTGlzdCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRXaXNoTGlzdElkKSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoWywgdXNlcklkLCB3aXNoTGlzdElkXSkgPT4ge1xuICAgICAgaWYgKEJvb2xlYW4od2lzaExpc3RJZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHVzZXJJZCwgd2lzaExpc3RJZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKHdpc2hMaXN0KSA9PiBbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzcyh7IGNhcnQ6IHdpc2hMaXN0LCB1c2VySWQgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBmcm9tKFtuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIHNhdmVDYXJ0Q29ubmVjdG9yOiBTYXZlQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICkge31cbn1cbiJdfQ==