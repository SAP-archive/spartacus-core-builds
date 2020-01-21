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
                            new CartActions.LoadWishListSuccess({
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
                    new CartActions.LoadWishListSuccess({ cart: wishList, userId: userId }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7O0FBU2xEO0lBb0dFLHlCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixLQUFnQztRQUwxQyxpQkFNSTtRQUxNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixh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Q0FDTyxVQUFVOzJEQXdCeEI7SUFTSixzQkFBQztDQUFBLEFBM0dELElBMkdDO1NBMUdZLGVBQWU7OztJQUMxQiwwQ0FtQ0U7O0lBRUYsd0NBZ0NFOztJQUVGLHlDQXlCRTs7Ozs7SUFHQSxtQ0FBeUI7Ozs7O0lBQ3pCLHdDQUFvQzs7Ozs7SUFDcEMsNENBQTRDOzs7OztJQUM1QyxzQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGNvbmNhdE1hcCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTYXZlQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L3NhdmUtY2FydC5jb25uZWN0ZXInO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IGVmZmVjdHMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lzaExpc3RFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZVdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ1JFQVRFX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5jcmVhdGUocGF5bG9hZC51c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlQ2FydENvbm5lY3RvclxuICAgICAgICAgICAgLnNhdmVDYXJ0KFxuICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydC5jb2RlLFxuICAgICAgICAgICAgICBwYXlsb2FkLm5hbWUsXG4gICAgICAgICAgICAgIHBheWxvYWQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoc2F2ZUNhcnRSZXN1bHQgPT4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY2FydDogc2F2ZUNhcnRSZXN1bHQuc2F2ZWRDYXJ0RGF0YSxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0XG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTE9BRF9XSVNIX0xJU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAodXNlcklkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZEFsbCh1c2VySWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0cyA9PiB7XG4gICAgICAgICAgaWYgKGNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCB3aXNoTGlzdCA9IGNhcnRzLmZpbmQoY2FydCA9PiBjYXJ0Lm5hbWUgPT09ICd3aXNobGlzdCcpO1xuICAgICAgICAgICAgaWYgKEJvb2xlYW4od2lzaExpc3QpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY2FydDogd2lzaExpc3QsXG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCh7IHVzZXJJZCwgbmFtZTogJ3dpc2hsaXN0JyB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRXaXNoTGlzdCQ6IE9ic2VydmFibGU8XG4gICAgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRXaXNoTGlzdElkKSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoWywgdXNlcklkLCB3aXNoTGlzdElkXSkgPT4ge1xuICAgICAgaWYgKEJvb2xlYW4od2lzaExpc3RJZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHVzZXJJZCwgd2lzaExpc3RJZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAod2lzaExpc3QgPT4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdFN1Y2Nlc3MoeyBjYXJ0OiB3aXNoTGlzdCwgdXNlcklkIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIGZyb20oW25ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSldKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgc2F2ZUNhcnRDb25uZWN0b3I6IFNhdmVDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKSB7fVxufVxuIl19