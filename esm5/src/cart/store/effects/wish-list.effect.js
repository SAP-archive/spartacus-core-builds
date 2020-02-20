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
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxEOzs7Ozs7R0FNRztBQUVIO0lBeUdFLHlCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixLQUFnQztRQUwxQyxpQkFNSTtRQUxNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENB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RTtPQUNBLGVBQWUsQ0FnSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQWhIWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFNhdmVDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmNvbm5lY3Rlcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggZWZmZWN0cyB3aWxsIG5vIGxvbmdlciBiZSBhIHBhcnQgb2YgcHVibGljIEFQSVxuICpcbiAqIFRPRE8oaXNzdWU6IzQ1MDcpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgY3JlYXRlV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfV0lTSF9MSVNUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVDYXJ0Q29ubmVjdG9yXG4gICAgICAgICAgICAuc2F2ZUNhcnQoXG4gICAgICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgIHBheWxvYWQubmFtZSxcbiAgICAgICAgICAgICAgcGF5bG9hZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChzYXZlQ2FydFJlc3VsdCA9PiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjYXJ0OiBzYXZlQ2FydFJlc3VsdC5zYXZlZENhcnREYXRhLFxuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5MT0FEX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcChwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IHsgdXNlcklkLCBjdXN0b21lcklkIH0gPSBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkQWxsKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnRzID0+IHtcbiAgICAgICAgICBpZiAoY2FydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpc2hMaXN0ID0gY2FydHMuZmluZChcbiAgICAgICAgICAgICAgY2FydCA9PiBjYXJ0Lm5hbWUgPT09IGB3aXNobGlzdCR7Y3VzdG9tZXJJZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKEJvb2xlYW4od2lzaExpc3QpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY2FydDogd2lzaExpc3QsXG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBgd2lzaGxpc3Qke2N1c3RvbWVySWR9YCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRXaXNoTGlzdCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRXaXNoTGlzdElkKSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoWywgdXNlcklkLCB3aXNoTGlzdElkXSkgPT4ge1xuICAgICAgaWYgKEJvb2xlYW4od2lzaExpc3RJZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHVzZXJJZCwgd2lzaExpc3RJZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAod2lzaExpc3QgPT4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MoeyBjYXJ0OiB3aXNoTGlzdCwgdXNlcklkIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW25ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSldKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgc2F2ZUNhcnRDb25uZWN0b3I6IFNhdmVDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKSB7fVxufVxuIl19