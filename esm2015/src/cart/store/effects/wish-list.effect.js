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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvd2lzaC1saXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHbEQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBbUcxQixZQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixLQUFnQztRQUpoQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdB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OztJQUN6Qix3Q0FBb0M7Ozs7O0lBQ3BDLDRDQUE0Qzs7Ozs7SUFDNUMsc0NBQWdDOzs7OztJQUNoQyxnQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2F2ZUNhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NhdmUtY2FydC9zYXZlLWNhcnQuY29ubmVjdGVyJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgY3JlYXRlV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfV0lTSF9MSVNUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVDYXJ0Q29ubmVjdG9yXG4gICAgICAgICAgICAuc2F2ZUNhcnQoXG4gICAgICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBjYXJ0LmNvZGUsXG4gICAgICAgICAgICAgIHBheWxvYWQubmFtZSxcbiAgICAgICAgICAgICAgcGF5bG9hZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChzYXZlQ2FydFJlc3VsdCA9PiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjYXJ0OiBzYXZlQ2FydFJlc3VsdC5zYXZlZENhcnREYXRhLFxuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkV2lzaExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3RcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5MT0FEX1dJU0hfTElTVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcCh1c2VySWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkQWxsKHVzZXJJZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNhcnRzID0+IHtcbiAgICAgICAgICBpZiAoY2FydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpc2hMaXN0ID0gY2FydHMuZmluZChjYXJ0ID0+IGNhcnQubmFtZSA9PT0gJ3dpc2hsaXN0Jyk7XG4gICAgICAgICAgICBpZiAoQm9vbGVhbih3aXNoTGlzdCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjYXJ0OiB3aXNoTGlzdCxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KHsgdXNlcklkLCBuYW1lOiAnd2lzaGxpc3QnIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBmcm9tKFtuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFdpc2hMaXN0JDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3RTdWNjZXNzIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0SWQpKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChbLCB1c2VySWQsIHdpc2hMaXN0SWRdKSA9PiB7XG4gICAgICBpZiAoQm9vbGVhbih3aXNoTGlzdElkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQodXNlcklkLCB3aXNoTGlzdElkKS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCh3aXNoTGlzdCA9PiBbXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc2hMaXN0U3VjY2Vzcyh7IGNhcnQ6IHdpc2hMaXN0LCB1c2VySWQgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgZnJvbShbbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBzYXZlQ2FydENvbm5lY3RvcjogU2F2ZUNhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PlxuICApIHt9XG59XG4iXX0=