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
export class WishListEffects {
    /**
     * @param {?} actions$
     * @param {?} cartConnector
     * @param {?} saveCartConnector
     * @param {?} authService
     * @param {?} store
     */
    constructor(actions$, cartConnector, saveCartConnector, authService, store) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.saveCartConnector = saveCartConnector;
        this.authService = authService;
        this.store = store;
        this.createWishList$ = this.actions$.pipe(ofType(CartActions.CREATE_WISH_LIST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.cartConnector.create(payload.userId).pipe(switchMap((/**
             * @param {?} cart
             * @return {?}
             */
            cart => {
                return this.saveCartConnector
                    .saveCart(payload.userId, cart.code, payload.name, payload.description)
                    .pipe(switchMap((/**
                 * @param {?} saveCartResult
                 * @return {?}
                 */
                saveCartResult => [
                    new CartActions.CreateWishListSuccess({
                        cart: saveCartResult.savedCartData,
                        userId: payload.userId,
                    }),
                ])), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => from([
                    new CartActions.CreateWishListFail({
                        cartId: cart.code,
                        error: makeErrorSerializable(error),
                    }),
                ]))));
            })));
        })));
        this.loadWishList$ = this.actions$.pipe(ofType(CartActions.LOAD_WISH_LIST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            return this.cartConnector.loadAll(userId).pipe(switchMap((/**
             * @param {?} carts
             * @return {?}
             */
            carts => {
                if (carts) {
                    /** @type {?} */
                    const wishList = carts.find((/**
                     * @param {?} cart
                     * @return {?}
                     */
                    cart => cart.name === 'wishlist'));
                    if (Boolean(wishList)) {
                        return [
                            new CartActions.LoadWishListSuccess({
                                cart: wishList,
                                userId,
                            }),
                        ];
                    }
                    else {
                        return [
                            new CartActions.CreateWishList({ userId, name: 'wishlist' }),
                        ];
                    }
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => from([new CartActions.LoadCartFail(makeErrorSerializable(error))]))));
        })));
        this.resetWishList$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), withLatestFrom(this.authService.getOccUserId(), this.store.pipe(select(MultiCartSelectors.getWishListId))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, userId, wishListId]) => {
            if (Boolean(wishListId)) {
                return this.cartConnector.load(userId, wishListId).pipe(switchMap((/**
                 * @param {?} wishList
                 * @return {?}
                 */
                wishList => [
                    new CartActions.LoadWishListSuccess({ cart: wishList, userId }),
                ])), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => from([new CartActions.LoadCartFail(makeErrorSerializable(error))]))));
            }
            return EMPTY;
        })));
    }
}
WishListEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WishListEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartConnector },
    { type: SaveCartConnector },
    { type: AuthService },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7O0FBVWxELE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQW1HMUIsWUFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsS0FBZ0M7UUFKaEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixr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QUF5Qjs7Ozs7SUFDekIsd0NBQW9DOzs7OztJQUNwQyw0Q0FBNEM7Ozs7O0lBQzVDLHNDQUFnQzs7Ozs7SUFDaEMsZ0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFNhdmVDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmNvbm5lY3Rlcic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggZWZmZWN0cyB3aWxsIG5vIGxvbmdlciBiZSBhIHBhcnQgb2YgcHVibGljIEFQSVxuICpcbiAqIFRPRE8oaXNzdWU6IzQ1MDcpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgY3JlYXRlV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfV0lTSF9MSVNUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVDYXJ0Q29ubmVjdG9yXG4gICAgICAgICAgICAuc2F2ZUNhcnQoXG4gICAgICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgIHBheWxvYWQubmFtZSxcbiAgICAgICAgICAgICAgcGF5bG9hZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChzYXZlQ2FydFJlc3VsdCA9PiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjYXJ0OiBzYXZlQ2FydFJlc3VsdC5zYXZlZENhcnREYXRhLFxuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5MT0FEX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcCh1c2VySWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkQWxsKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnRzID0+IHtcbiAgICAgICAgICBpZiAoY2FydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpc2hMaXN0ID0gY2FydHMuZmluZChjYXJ0ID0+IGNhcnQubmFtZSA9PT0gJ3dpc2hsaXN0Jyk7XG4gICAgICAgICAgICBpZiAoQm9vbGVhbih3aXNoTGlzdCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjYXJ0OiB3aXNoTGlzdCxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KHsgdXNlcklkLCBuYW1lOiAnd2lzaGxpc3QnIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBmcm9tKFtuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0SWQpKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChbLCB1c2VySWQsIHdpc2hMaXN0SWRdKSA9PiB7XG4gICAgICBpZiAoQm9vbGVhbih3aXNoTGlzdElkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQodXNlcklkLCB3aXNoTGlzdElkKS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCh3aXNoTGlzdCA9PiBbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzcyh7IGNhcnQ6IHdpc2hMaXN0LCB1c2VySWQgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG59XG4iXX0=