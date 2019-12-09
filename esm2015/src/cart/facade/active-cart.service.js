/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
import { CartActions } from '../store';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { FRESH_CART_ID } from '../store/actions/multi-cart.action';
import { MultiCartSelectors } from '../store/selectors/index';
import { getCartIdByUserId } from '../utils/utils';
import { MultiCartService } from './multi-cart.service';
export class ActiveCartService {
    /**
     * @param {?} store
     * @param {?} authService
     * @param {?} multiCartService
     */
    constructor(store, authService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.activeCartId$ = this.store.pipe(select(MultiCartSelectors.getActiveCartId), map((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => {
            if (!cartId) {
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        })));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getCartEntity(cartId))));
        this.authService.getOccUserId().subscribe((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            this.userId = userId;
            if (this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (this.isJustLoggedIn(userId)) {
                    this.loadOrMerge(this.cartId);
                }
            }
            this.previousUserId = userId;
        }));
        this.activeCartId$.subscribe((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => {
            this.cartId = cartId;
        }));
        this.initActiveCart();
    }
    /**
     * @private
     * @return {?}
     */
    initActiveCart() {
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cartEntity, activeCartId]) => {
            return {
                cart: cartEntity.value,
                cartId: activeCartId,
                isStable: !cartEntity.loading && cartEntity.processesCount === 0,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ isStable }) => isStable)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart, cartId, loaded }) => {
            if (this.isEmpty(cart) && !loaded && cartId !== FRESH_CART_ID) {
                this.load(cartId);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart }) => (cart ? cart : {}))), tap((/**
         * @param {?} cart
         * @return {?}
         */
        cart => {
            if (cart) {
                this.cartUser = cart.user;
            }
        })), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns active cart
     * @return {?}
     */
    getActive() {
        return this.activeCart$;
    }
    /**
     * Returns active cart id
     * @return {?}
     */
    getActiveCartId() {
        return this.activeCart$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => getCartIdByUserId(cart, this.userId))), distinctUntilChanged());
    }
    /**
     * Returns cart entries
     * @return {?}
     */
    getEntries() {
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getEntries(cartId))), distinctUntilChanged());
    }
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     * @return {?}
     */
    getLoaded() {
        // Debounce is used here, to avoid flickering when we switch between different cart entities.
        // For example during `addEntry` method. We might try to load current cart, so `current cart will be then active id.
        // After load fails we might create new cart so we switch to `fresh` cart entity used when creating cart.
        // At the end we finally switch to cart `code` for cart id. Between those switches cart `getLoaded` function should not flicker.
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.isStable(cartId))), debounce((/**
         * @param {?} state
         * @return {?}
         */
        state => (state ? timer(0) : EMPTY))), distinctUntilChanged());
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    loadOrMerge(cartId) {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!cartId || cartId === OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge(cartId);
        }
        else {
            this.store.dispatch(new DeprecatedCartActions.MergeCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            }));
        }
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    load(cartId) {
        if (this.userId !== OCC_USER_ID_ANONYMOUS) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId ? cartId : OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (cartId && cartId !== OCC_CART_ID_CURRENT) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setActiveCartIdToFresh() {
        this.store.dispatch(new CartActions.SetActiveCartId(FRESH_CART_ID));
    }
    /**
     * @private
     * @param {?} cartEntries
     * @return {?}
     */
    addEntriesGuestMerge(cartEntries) {
        /** @type {?} */
        const entriesToAdd = cartEntries.map((/**
         * @param {?} entry
         * @return {?}
         */
        entry => ({
            productCode: entry.product.code,
            quantity: entry.quantity,
        })));
        this.requireLoadedCartForGuestMerge().subscribe((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            this.multiCartService.addEntries(this.userId, getCartIdByUserId(cartState.value, this.userId), entriesToAdd);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    requireLoadedCartForGuestMerge() {
        return this.requireLoadedCart(this.cartSelector$.pipe(filter((/**
         * @return {?}
         */
        () => !this.isGuestCart()))));
    }
    /**
     * @private
     * @param {?=} customCartSelector$
     * @return {?}
     */
    requireLoadedCart(customCartSelector$) {
        // For guest cart merge we want to filter guest cart in the whole stream
        // We have to wait with load/create/addEntry after guest cart will be deleted.
        // That's why you can provide custom selector with this filter applied.
        /** @type {?} */
        const cartSelector$ = customCartSelector$
            ? customCartSelector$
            : this.cartSelector$;
        return cartSelector$.pipe(filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), 
        // Avoid load/create call when there are new cart creating at the moment
        filter((/**
         * @return {?}
         */
        () => this.cartId !== FRESH_CART_ID)), take(1), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (this.isEmpty(cartState.value) &&
                this.userId !== OCC_USER_ID_ANONYMOUS) {
                this.load(undefined);
            }
            return cartSelector$;
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => this.userId === OCC_USER_ID_ANONYMOUS ||
            (cartState.success || cartState.error))), take(1), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (this.isEmpty(cartState.value)) {
                // point to fresh cart to use their `loading` flag while we create cart
                this.setActiveCartIdToFresh();
                this.multiCartService.createCart({
                    userId: this.userId,
                    extraData: {
                        active: true,
                    },
                });
            }
            return cartSelector$;
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !cartState.loading)), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => cartState.success || cartState.error)), 
        // wait for active cart id to point to code/guid to avoid some work on fresh entity
        filter((/**
         * @return {?}
         */
        () => this.cartId !== FRESH_CART_ID)), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isEmpty(cartState.value))), take(1));
    }
    /**
     * Add entry to active cart
     *
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        this.requireLoadedCart().subscribe((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            this.multiCartService.addEntry(this.userId, getCartIdByUserId(cartState.value, this.userId), productCode, quantity);
        }));
    }
    /**
     * Remove entry
     *
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    /**
     * Update entry
     *
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    }
    /**
     * Returns cart entry
     *
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getEntry(cartId, productCode))), distinctUntilChanged());
    }
    /**
     * Assign email to cart
     *
     * @param {?} email
     * @return {?}
     */
    addEmail(email) {
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    }
    /**
     * Get assigned user to cart
     * @return {?}
     */
    getAssignedUser() {
        return this.getActive().pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.user)));
    }
    /**
     * Returns true for guest cart
     * @return {?}
     */
    isGuestCart() {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid
                    .split('|')
                    .slice(1)
                    .join('|'))));
    }
    /**
     * Add multiple entries to a cart
     *
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    addEntries(cartEntries) {
        cartEntries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            this.addEntry(entry.product.code, entry.quantity);
        }));
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    isEmail(str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
    }
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @param {?} cartId
     * @return {?}
     */
    guestCartMerge(cartId) {
        /** @type {?} */
        let cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} entries
         * @return {?}
         */
        entries => {
            cartEntries = entries;
        }));
        this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
        this.addEntriesGuestMerge(cartEntries);
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isJustLoggedIn(userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
}
ActiveCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActiveCartService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: MultiCartService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.PREVIOUS_USER_ID_INITIAL_VALUE;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.previousUserId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.activeCart$;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartUser;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.activeCartId$;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartSelector$;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFDTCxRQUFRLEVBQ1Isb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN2QyxPQUFPLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXVCNUIsWUFDWSxLQUFnQyxFQUNoQyxX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QkFBeUI7U0FDdEYsQ0FBQztJQUNKLENBQUM7OztZQS9YRixVQUFVOzs7O1lBaENNLEtBQUs7WUFhYixXQUFXO1lBaUJYLGdCQUFnQjs7Ozs7OztJQUl2QiwyREFDbUM7Ozs7O0lBQ25DLDJDQUE2RDs7Ozs7SUFDN0Qsd0NBQXNDOzs7OztJQUV0QyxtQ0FBdUM7Ozs7O0lBQ3ZDLG1DQUFlOzs7OztJQUNmLHFDQUF1Qjs7Ozs7SUFFdkIsMENBUUU7Ozs7O0lBQ0YsMENBRUU7Ozs7O0lBR0Esa0NBQTBDOzs7OztJQUMxQyx3Q0FBa0M7Ozs7O0lBQ2xDLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwvcmVnZXgtcGF0dGVybic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IEZSRVNIX0NBUlRfSUQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgcHJpdmF0ZSB1c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgY2FydElkO1xuICBwcml2YXRlIGNhcnRVc2VyOiBVc2VyO1xuXG4gIHByaXZhdGUgYWN0aXZlQ2FydElkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRJZCksXG4gICAgbWFwKGNhcnRJZCA9PiB7XG4gICAgICBpZiAoIWNhcnRJZCkge1xuICAgICAgICByZXR1cm4gT0NDX0NBUlRfSURfQ1VSUkVOVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJ0SWQ7XG4gICAgfSlcbiAgKTtcbiAgcHJpdmF0ZSBjYXJ0U2VsZWN0b3IkID0gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydEVudGl0eShjYXJ0SWQpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkuc3Vic2NyaWJlKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJJZCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPck1lcmdlKHRoaXMuY2FydElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlQ2FydElkJC5zdWJzY3JpYmUoY2FydElkID0+IHtcbiAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0QWN0aXZlQ2FydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QWN0aXZlQ2FydCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQpLFxuICAgICAgbWFwKChbY2FydEVudGl0eSwgYWN0aXZlQ2FydElkXTogW1Byb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+LCBzdHJpbmddKToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgaXNTdGFibGU6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgY2FydElkOiBhY3RpdmVDYXJ0SWQsXG4gICAgICAgICAgaXNTdGFibGU6ICFjYXJ0RW50aXR5LmxvYWRpbmcgJiYgY2FydEVudGl0eS5wcm9jZXNzZXNDb3VudCA9PT0gMCxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoeyBpc1N0YWJsZSB9KSA9PiBpc1N0YWJsZSksXG4gICAgICB0YXAoKHsgY2FydCwgY2FydElkLCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KGNhcnQpICYmICFsb2FkZWQgJiYgY2FydElkICE9PSBGUkVTSF9DQVJUX0lEKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKGNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCh7IGNhcnQgfSkgPT4gKGNhcnQgPyBjYXJ0IDoge30pKSxcbiAgICAgIHRhcChjYXJ0ID0+IHtcbiAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyID0gY2FydC51c2VyO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydCBpZFxuICAgKi9cbiAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQucGlwZShcbiAgICAgIG1hcChjYXJ0ID0+IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHRoaXMudXNlcklkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoY2FydElkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgKi9cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIC8vIERlYm91bmNlIGlzIHVzZWQgaGVyZSwgdG8gYXZvaWQgZmxpY2tlcmluZyB3aGVuIHdlIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBjYXJ0IGVudGl0aWVzLlxuICAgIC8vIEZvciBleGFtcGxlIGR1cmluZyBgYWRkRW50cnlgIG1ldGhvZC4gV2UgbWlnaHQgdHJ5IHRvIGxvYWQgY3VycmVudCBjYXJ0LCBzbyBgY3VycmVudCBjYXJ0IHdpbGwgYmUgdGhlbiBhY3RpdmUgaWQuXG4gICAgLy8gQWZ0ZXIgbG9hZCBmYWlscyB3ZSBtaWdodCBjcmVhdGUgbmV3IGNhcnQgc28gd2Ugc3dpdGNoIHRvIGBmcmVzaGAgY2FydCBlbnRpdHkgdXNlZCB3aGVuIGNyZWF0aW5nIGNhcnQuXG4gICAgLy8gQXQgdGhlIGVuZCB3ZSBmaW5hbGx5IHN3aXRjaCB0byBjYXJ0IGBjb2RlYCBmb3IgY2FydCBpZC4gQmV0d2VlbiB0aG9zZSBzd2l0Y2hlcyBjYXJ0IGBnZXRMb2FkZWRgIGZ1bmN0aW9uIHNob3VsZCBub3QgZmxpY2tlci5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5pc1N0YWJsZShjYXJ0SWQpKSxcbiAgICAgIGRlYm91bmNlKHN0YXRlID0+IChzdGF0ZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghY2FydElkIHx8IGNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZShjYXJ0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQgPyBjYXJ0SWQgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhcnRJZCAmJiBjYXJ0SWQgIT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGl2ZUNhcnRJZFRvRnJlc2goKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuU2V0QWN0aXZlQ2FydElkKEZSRVNIX0NBUlRfSUQpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSkge1xuICAgIGNvbnN0IGVudHJpZXNUb0FkZCA9IGNhcnRFbnRyaWVzLm1hcChlbnRyeSA9PiAoe1xuICAgICAgcHJvZHVjdENvZGU6IGVudHJ5LnByb2R1Y3QuY29kZSxcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KSk7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKS5zdWJzY3JpYmUoY2FydFN0YXRlID0+IHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyaWVzKFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIGVudHJpZXNUb0FkZFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnRGb3JHdWVzdE1lcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgICAgdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoZmlsdGVyKCgpID0+ICF0aGlzLmlzR3Vlc3RDYXJ0KCkpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgIGN1c3RvbUNhcnRTZWxlY3RvciQ/OiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PlxuICApOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gRm9yIGd1ZXN0IGNhcnQgbWVyZ2Ugd2Ugd2FudCB0byBmaWx0ZXIgZ3Vlc3QgY2FydCBpbiB0aGUgd2hvbGUgc3RyZWFtXG4gICAgLy8gV2UgaGF2ZSB0byB3YWl0IHdpdGggbG9hZC9jcmVhdGUvYWRkRW50cnkgYWZ0ZXIgZ3Vlc3QgY2FydCB3aWxsIGJlIGRlbGV0ZWQuXG4gICAgLy8gVGhhdCdzIHdoeSB5b3UgY2FuIHByb3ZpZGUgY3VzdG9tIHNlbGVjdG9yIHdpdGggdGhpcyBmaWx0ZXIgYXBwbGllZC5cbiAgICBjb25zdCBjYXJ0U2VsZWN0b3IkID0gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgPyBjdXN0b21DYXJ0U2VsZWN0b3IkXG4gICAgICA6IHRoaXMuY2FydFNlbGVjdG9yJDtcblxuICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBBdm9pZCBsb2FkL2NyZWF0ZSBjYWxsIHdoZW4gdGhlcmUgYXJlIG5ldyBjYXJ0IGNyZWF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNhcnRJZCAhPT0gRlJFU0hfQ0FSVF9JRCksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgIC8vIFRyeSB0byBsb2FkIHRoZSBjYXJ0LCBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgYmVlbiBjcmVhdGVkIG9uIGFub3RoZXIgZGV2aWNlIGJldHdlZW4gb3VyIGxvZ2luIGFuZCBhZGQgZW50cnkgY2FsbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkgJiZcbiAgICAgICAgICB0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBjcmVhdGUgY2FydCBjYW4gaGFwcGVuIHRvIGFub255bW91cyB1c2VyIGlmIGl0IGlzIG5vdCBlbXB0eSBvciB0byBhbnkgb3RoZXIgdXNlciBpZiBpdCBpcyBsb2FkZWQgYW5kIGVtcHR5XG4gICAgICBmaWx0ZXIoXG4gICAgICAgIGNhcnRTdGF0ZSA9PlxuICAgICAgICAgIHRoaXMudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfHxcbiAgICAgICAgICAoY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKVxuICAgICAgKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgLy8gcG9pbnQgdG8gZnJlc2ggY2FydCB0byB1c2UgdGhlaXIgYGxvYWRpbmdgIGZsYWcgd2hpbGUgd2UgY3JlYXRlIGNhcnRcbiAgICAgICAgICB0aGlzLnNldEFjdGl2ZUNhcnRJZFRvRnJlc2goKTtcbiAgICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuY3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRTZWxlY3RvciQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKSxcbiAgICAgIC8vIHdhaXQgZm9yIGFjdGl2ZSBjYXJ0IGlkIHRvIHBvaW50IHRvIGNvZGUvZ3VpZCB0byBhdm9pZCBzb21lIHdvcmsgb24gZnJlc2ggZW50aXR5XG4gICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5jYXJ0SWQgIT09IEZSRVNIX0NBUlRfSUQpLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGFjdGl2ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KCkuc3Vic2NyaWJlKGNhcnRTdGF0ZSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlcbiAgICovXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqL1xuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cnkoY2FydElkLCBwcm9kdWN0Q29kZSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFzc2lnbkVtYWlsKHRoaXMuY2FydElkLCB0aGlzLnVzZXJJZCwgZW1haWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhc3NpZ25lZCB1c2VyIHRvIGNhcnRcbiAgICovXG4gIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChjYXJ0ID0+IGNhcnQudXNlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmb3IgZ3Vlc3QgY2FydFxuICAgKi9cbiAgaXNHdWVzdENhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY2FydFVzZXIgJiZcbiAgICAgICh0aGlzLmNhcnRVc2VyLm5hbWUgPT09IE9DQ19VU0VSX0lEX0dVRVNUIHx8XG4gICAgICAgIHRoaXMuaXNFbWFpbChcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyLnVpZFxuICAgICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJ3wnKVxuICAgICAgICApKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICovXG4gIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQge1xuICAgIGNhcnRFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgdGhpcy5hZGRFbnRyeShlbnRyeS5wcm9kdWN0LmNvZGUsIGVudHJ5LnF1YW50aXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goRU1BSUxfUEFUVEVSTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IFJlbW92ZSBvbmNlIGJhY2tlbmQgaXMgdXBkYXRlZFxuICAvKipcbiAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdO1xuICAgIHRoaXMuZ2V0RW50cmllcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShlbnRyaWVzID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZGVsZXRlQ2FydChjYXJ0SWQsIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG5cbiAgICB0aGlzLmFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbXB0eShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFjYXJ0IHx8ICh0eXBlb2YgY2FydCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19