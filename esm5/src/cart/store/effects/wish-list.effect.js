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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2xEO0lBeUdFLHlCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixLQUFnQztRQUwxQyxpQkFNSTtRQUxNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlC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SDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQWhIWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFNhdmVDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmNvbm5lY3Rlcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lzaExpc3RFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZVdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ1JFQVRFX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5jcmVhdGUocGF5bG9hZC51c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlQ2FydENvbm5lY3RvclxuICAgICAgICAgICAgLnNhdmVDYXJ0KFxuICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydC5jb2RlLFxuICAgICAgICAgICAgICBwYXlsb2FkLm5hbWUsXG4gICAgICAgICAgICAgIHBheWxvYWQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoc2F2ZUNhcnRSZXN1bHQgPT4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY2FydDogc2F2ZUNhcnRSZXN1bHQuc2F2ZWRDYXJ0RGF0YSxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0XG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9XSVNIX0xJU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCB7IHVzZXJJZCwgY3VzdG9tZXJJZCB9ID0gcGF5bG9hZDtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZEFsbCh1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0cyA9PiB7XG4gICAgICAgICAgaWYgKGNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCB3aXNoTGlzdCA9IGNhcnRzLmZpbmQoXG4gICAgICAgICAgICAgIGNhcnQgPT4gY2FydC5uYW1lID09PSBgd2lzaGxpc3Qke2N1c3RvbWVySWR9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChCb29sZWFuKHdpc2hMaXN0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IHdpc2hMaXN0LFxuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3Qoe1xuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgbmFtZTogYHdpc2hsaXN0JHtjdXN0b21lcklkfWAsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIGZyb20oW25ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSldKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0V2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgd2l0aExhdGVzdEZyb20oXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0V2lzaExpc3RJZCkpXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoKFssIHVzZXJJZCwgd2lzaExpc3RJZF0pID0+IHtcbiAgICAgIGlmIChCb29sZWFuKHdpc2hMaXN0SWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZCh1c2VySWQsIHdpc2hMaXN0SWQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKHdpc2hMaXN0ID0+IFtcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzKHsgY2FydDogd2lzaExpc3QsIHVzZXJJZCB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIHNhdmVDYXJ0Q29ubmVjdG9yOiBTYXZlQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICkge31cbn1cbiJdfQ==