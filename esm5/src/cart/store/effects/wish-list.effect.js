/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, from, Observable } from 'rxjs';
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
        this.createWishList$ = this.actions$.pipe(ofType(CartActions.CREATE_WISH_LIST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.cartConnector.create(payload.userId).pipe(switchMap((/**
             * @param {?} cart
             * @return {?}
             */
            function (cart) {
                return _this.saveCartConnector
                    .saveCart(payload.userId, cart.code, payload.name, payload.description)
                    .pipe(switchMap((/**
                 * @param {?} saveCartResult
                 * @return {?}
                 */
                function (saveCartResult) { return [
                    new CartActions.CreateWishListSuccess({
                        cart: saveCartResult.savedCartData,
                        userId: payload.userId,
                    }),
                ]; })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return from([
                        new CartActions.CreateWishListFail({
                            cartId: cart.code,
                            error: makeErrorSerializable(error),
                        }),
                    ]);
                })));
            })));
        })));
        this.loadWishList$ = this.actions$.pipe(ofType(CartActions.LOAD_WISH_LIST), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.cartConnector.loadAll(userId).pipe(switchMap((/**
             * @param {?} carts
             * @return {?}
             */
            function (carts) {
                if (carts) {
                    /** @type {?} */
                    var wishList = carts.find((/**
                     * @param {?} cart
                     * @return {?}
                     */
                    function (cart) { return cart.name === 'wishlist'; }));
                    if (Boolean(wishList)) {
                        return [
                            new CartActions.LoadWisthListSuccess({
                                cart: wishList,
                                userId: userId,
                            }),
                        ];
                    }
                    else {
                        return [
                            new CartActions.CreateWishList({ userId: userId, name: 'wishlist' }),
                        ];
                    }
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return from([new CartActions.LoadCartFail(makeErrorSerializable(error))]);
            })));
        })));
        this.resetWishList$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), withLatestFrom(this.authService.getOccUserId(), this.store.pipe(select(MultiCartSelectors.getWishListId))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), userId = _b[1], wishListId = _b[2];
            if (Boolean(wishListId)) {
                return _this.cartConnector.load(userId, wishListId).pipe(switchMap((/**
                 * @param {?} wishList
                 * @return {?}
                 */
                function (wishList) { return [
                    new CartActions.LoadWisthListSuccess({ cart: wishList, userId: userId }),
                ]; })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return from([new CartActions.LoadCartFail(makeErrorSerializable(error))]);
                })));
            }
            return EMPTY;
        })));
    }
    WishListEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WishListEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: SaveCartConnector },
        { type: AuthService },
        { type: Store }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], WishListEffects.prototype, "createWishList$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], WishListEffects.prototype, "loadWishList$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], WishListEffects.prototype, "resetWishList$", void 0);
    return WishListEffects;
}());
export { WishListEffects };
if (false) {
    /** @type {?} */
    WishListEffects.prototype.createWishList$;
    /** @type {?} */
    WishListEffects.prototype.loadWishList$;
    /** @type {?} */
    WishListEffects.prototype.resetWishList$;
    /**
     * @type {?}
     * @private
     */
    WishListEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    WishListEffects.prototype.cartConnector;
    /**
     * @type {?}
     * @private
     */
    WishListEffects.prototype.saveCartConnector;
    /**
     * @type {?}
     * @private
     */
    WishListEffects.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    WishListEffects.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQ7SUFvR0UseUJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLEtBQWdDO1FBTDFDLGlCQU1JO1FBTE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FB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QVU7MkRBd0J4QjtJQVNKLHNCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0ExR1ksZUFBZTs7O0lBQzFCLDBDQW1DRTs7SUFFRix3Q0FnQ0U7O0lBRUYseUNBeUJFOzs7OztJQUdBLG1DQUF5Qjs7Ozs7SUFDekIsd0NBQW9DOzs7OztJQUNwQyw0Q0FBNEM7Ozs7O0lBQzVDLHNDQUFnQzs7Ozs7SUFDaEMsZ0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFNhdmVDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmNvbm5lY3Rlcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lzaExpc3RFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZVdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ1JFQVRFX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5jcmVhdGUocGF5bG9hZC51c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlQ2FydENvbm5lY3RvclxuICAgICAgICAgICAgLnNhdmVDYXJ0KFxuICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydC5jb2RlLFxuICAgICAgICAgICAgICBwYXlsb2FkLm5hbWUsXG4gICAgICAgICAgICAgIHBheWxvYWQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoc2F2ZUNhcnRSZXN1bHQgPT4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY2FydDogc2F2ZUNhcnRSZXN1bHQuc2F2ZWRDYXJ0RGF0YSxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRXaXN0aExpc3RTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkxPQURfV0lTSF9MSVNUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuTG9hZFdpc3RoTGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcCh1c2VySWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkQWxsKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnRzID0+IHtcbiAgICAgICAgICBpZiAoY2FydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpc2hMaXN0ID0gY2FydHMuZmluZChjYXJ0ID0+IGNhcnQubmFtZSA9PT0gJ3dpc2hsaXN0Jyk7XG4gICAgICAgICAgICBpZiAoQm9vbGVhbih3aXNoTGlzdCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc3RoTGlzdFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY2FydDogd2lzaExpc3QsXG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCh7IHVzZXJJZCwgbmFtZTogJ3dpc2hsaXN0JyB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRXaXNoTGlzdCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuTG9hZFdpc3RoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgd2l0aExhdGVzdEZyb20oXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0V2lzaExpc3RJZCkpXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoKFssIHVzZXJJZCwgd2lzaExpc3RJZF0pID0+IHtcbiAgICAgIGlmIChCb29sZWFuKHdpc2hMaXN0SWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZCh1c2VySWQsIHdpc2hMaXN0SWQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKHdpc2hMaXN0ID0+IFtcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzdGhMaXN0U3VjY2Vzcyh7IGNhcnQ6IHdpc2hMaXN0LCB1c2VySWQgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG59XG4iXX0=