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
        })), 
        // we want to emit empty carts even if those are not stable
        // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
        // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
        filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ isStable, cart }) => isStable || this.isEmpty(cart))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart, cartId, loaded, isStable }) => {
            if (isStable &&
                this.isEmpty(cart) &&
                !loaded &&
                cartId !== FRESH_CART_ID) {
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
     * @param {?} cartState
     * @return {?}
     */
    isCartCreating(cartState) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (this.cartId === FRESH_CART_ID &&
            (cartState.loading || cartState.success || cartState.error));
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
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isCartCreating(cartState))), take(1), switchMap((/**
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
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isCartCreating(cartState))), filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFDTCxRQUFRLEVBQ1Isb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF1QjVCLFlBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRmxDLFVBQUssR0FBTCxLQUFLLENB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QUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBYztRQUNuQyxPQUFPLENBQ0wsSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLElBQUksbUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQzs7O1lBM1lGLFVBQVU7Ozs7WUEvQk0sS0FBSztZQWFiLFdBQVc7WUFnQlgsZ0JBQWdCOzs7Ozs7O0lBSXZCLDJEQUNtQzs7Ozs7SUFDbkMsMkNBQTZEOzs7OztJQUM3RCx3Q0FBc0M7Ozs7O0lBRXRDLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQWU7Ozs7O0lBQ2YscUNBQXVCOzs7OztJQUV2QiwwQ0FRRTs7Ozs7SUFDRiwwQ0FFRTs7Ozs7SUFHQSxrQ0FBMEM7Ozs7O0lBQzFDLHdDQUFrQzs7Ozs7SUFDbEMsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2UsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19VU0VSX0lEX0dVRVNULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBFTUFJTF9QQVRURVJOIH0gZnJvbSAnLi4vLi4vdXRpbC9yZWdleC1wYXR0ZXJuJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IEZSRVNIX0NBUlRfSUQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgcHJpdmF0ZSB1c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgY2FydElkO1xuICBwcml2YXRlIGNhcnRVc2VyOiBVc2VyO1xuXG4gIHByaXZhdGUgYWN0aXZlQ2FydElkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRJZCksXG4gICAgbWFwKGNhcnRJZCA9PiB7XG4gICAgICBpZiAoIWNhcnRJZCkge1xuICAgICAgICByZXR1cm4gT0NDX0NBUlRfSURfQ1VSUkVOVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJ0SWQ7XG4gICAgfSlcbiAgKTtcbiAgcHJpdmF0ZSBjYXJ0U2VsZWN0b3IkID0gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydEVudGl0eShjYXJ0SWQpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkuc3Vic2NyaWJlKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJJZCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPck1lcmdlKHRoaXMuY2FydElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlQ2FydElkJC5zdWJzY3JpYmUoY2FydElkID0+IHtcbiAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0QWN0aXZlQ2FydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QWN0aXZlQ2FydCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQpLFxuICAgICAgbWFwKChbY2FydEVudGl0eSwgYWN0aXZlQ2FydElkXTogW1Byb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+LCBzdHJpbmddKToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgaXNTdGFibGU6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgY2FydElkOiBhY3RpdmVDYXJ0SWQsXG4gICAgICAgICAgaXNTdGFibGU6ICFjYXJ0RW50aXR5LmxvYWRpbmcgJiYgY2FydEVudGl0eS5wcm9jZXNzZXNDb3VudCA9PT0gMCxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIC8vIHdlIHdhbnQgdG8gZW1pdCBlbXB0eSBjYXJ0cyBldmVuIGlmIHRob3NlIGFyZSBub3Qgc3RhYmxlXG4gICAgICAvLyBvbiBtZXJnZSBjYXJ0IGFjdGlvbiB3ZSB3YW50IHRvIHN3aXRjaCB0byBlbXB0eSBjYXJ0IHNvIG5vIG9uZSB3b3VsZCB1c2Ugb2xkIGNhcnRJZCB3aGljaCBjYW4gYmUgYWxyZWFkeSBvYnNvbGV0ZVxuICAgICAgLy8gc28gb24gbWVyZ2UgYWN0aW9uIHRoZSByZXN1bHRpbmcgc3RyZWFtIGxvb2tzIGxpa2UgdGhpczogb2xkX2NhcnQgLT4ge30gLT4gbmV3X2NhcnRcbiAgICAgIGZpbHRlcigoeyBpc1N0YWJsZSwgY2FydCB9KSA9PiBpc1N0YWJsZSB8fCB0aGlzLmlzRW1wdHkoY2FydCkpLFxuICAgICAgdGFwKCh7IGNhcnQsIGNhcnRJZCwgbG9hZGVkLCBpc1N0YWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1N0YWJsZSAmJlxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0KSAmJlxuICAgICAgICAgICFsb2FkZWQgJiZcbiAgICAgICAgICBjYXJ0SWQgIT09IEZSRVNIX0NBUlRfSURcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKGNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCh7IGNhcnQgfSkgPT4gKGNhcnQgPyBjYXJ0IDoge30pKSxcbiAgICAgIHRhcChjYXJ0ID0+IHtcbiAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyID0gY2FydC51c2VyO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydCBpZFxuICAgKi9cbiAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQucGlwZShcbiAgICAgIG1hcChjYXJ0ID0+IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHRoaXMudXNlcklkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoY2FydElkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgKi9cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIC8vIERlYm91bmNlIGlzIHVzZWQgaGVyZSwgdG8gYXZvaWQgZmxpY2tlcmluZyB3aGVuIHdlIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBjYXJ0IGVudGl0aWVzLlxuICAgIC8vIEZvciBleGFtcGxlIGR1cmluZyBgYWRkRW50cnlgIG1ldGhvZC4gV2UgbWlnaHQgdHJ5IHRvIGxvYWQgY3VycmVudCBjYXJ0LCBzbyBgY3VycmVudCBjYXJ0IHdpbGwgYmUgdGhlbiBhY3RpdmUgaWQuXG4gICAgLy8gQWZ0ZXIgbG9hZCBmYWlscyB3ZSBtaWdodCBjcmVhdGUgbmV3IGNhcnQgc28gd2Ugc3dpdGNoIHRvIGBmcmVzaGAgY2FydCBlbnRpdHkgdXNlZCB3aGVuIGNyZWF0aW5nIGNhcnQuXG4gICAgLy8gQXQgdGhlIGVuZCB3ZSBmaW5hbGx5IHN3aXRjaCB0byBjYXJ0IGBjb2RlYCBmb3IgY2FydCBpZC4gQmV0d2VlbiB0aG9zZSBzd2l0Y2hlcyBjYXJ0IGBnZXRMb2FkZWRgIGZ1bmN0aW9uIHNob3VsZCBub3QgZmxpY2tlci5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5pc1N0YWJsZShjYXJ0SWQpKSxcbiAgICAgIGRlYm91bmNlKHN0YXRlID0+IChzdGF0ZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghY2FydElkIHx8IGNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZShjYXJ0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQgPyBjYXJ0SWQgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhcnRJZCAmJiBjYXJ0SWQgIT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pIHtcbiAgICBjb25zdCBlbnRyaWVzVG9BZGQgPSBjYXJ0RW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgIHByb2R1Y3RDb2RlOiBlbnRyeS5wcm9kdWN0LmNvZGUsXG4gICAgICBxdWFudGl0eTogZW50cnkucXVhbnRpdHksXG4gICAgfSkpO1xuICAgIHRoaXMucmVxdWlyZUxvYWRlZENhcnRGb3JHdWVzdE1lcmdlKCkuc3Vic2NyaWJlKGNhcnRTdGF0ZSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cmllcyhcbiAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdGhpcy51c2VySWQpLFxuICAgICAgICBlbnRyaWVzVG9BZGRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlTG9hZGVkQ2FydChcbiAgICAgIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKGZpbHRlcigoKSA9PiAhdGhpcy5pc0d1ZXN0Q2FydCgpKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpIHtcbiAgICAvLyBjYXJ0IGNyZWF0aW5nIGlzIGFsd2F5cyByZXByZXNlbnRlZCB3aXRoIGxvYWRpbmcgZmxhZ3NcbiAgICAvLyB3aGVuIGFsbCBsb2FkaW5nIGZsYWdzIGFyZSBmYWxzZSBpdCBtZWFucyB0aGF0IHdlIHJlc3RvcmVkIHdyb25nIGNhcnQgaWRcbiAgICAvLyBjb3VsZCBoYXBwZW4gb24gY29udGV4dCBjaGFuZ2Ugb3IgcmVsb2FkIHJpZ2h0IGluIHRoZSBtaWRkbGUgb24gY2FydCBjcmVhdGUgY2FsbFxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnRJZCA9PT0gRlJFU0hfQ0FSVF9JRCAmJlxuICAgICAgKGNhcnRTdGF0ZS5sb2FkaW5nIHx8IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydChcbiAgICBjdXN0b21DYXJ0U2VsZWN0b3IkPzogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj5cbiAgKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIEZvciBndWVzdCBjYXJ0IG1lcmdlIHdlIHdhbnQgdG8gZmlsdGVyIGd1ZXN0IGNhcnQgaW4gdGhlIHdob2xlIHN0cmVhbVxuICAgIC8vIFdlIGhhdmUgdG8gd2FpdCB3aXRoIGxvYWQvY3JlYXRlL2FkZEVudHJ5IGFmdGVyIGd1ZXN0IGNhcnQgd2lsbCBiZSBkZWxldGVkLlxuICAgIC8vIFRoYXQncyB3aHkgeW91IGNhbiBwcm92aWRlIGN1c3RvbSBzZWxlY3RvciB3aXRoIHRoaXMgZmlsdGVyIGFwcGxpZWQuXG4gICAgY29uc3QgY2FydFNlbGVjdG9yJCA9IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgID8gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgOiB0aGlzLmNhcnRTZWxlY3RvciQ7XG5cbiAgICByZXR1cm4gY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgLy8gQXZvaWQgbG9hZC9jcmVhdGUgY2FsbCB3aGVuIHRoZXJlIGFyZSBuZXcgY2FydCBjcmVhdGluZyBhdCB0aGUgbW9tZW50XG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAvLyBUcnkgdG8gbG9hZCB0aGUgY2FydCwgYmVjYXVzZSBpdCBtaWdodCBoYXZlIGJlZW4gY3JlYXRlZCBvbiBhbm90aGVyIGRldmljZSBiZXR3ZWVuIG91ciBsb2dpbiBhbmQgYWRkIGVudHJ5IGNhbGxcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpICYmXG4gICAgICAgICAgdGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgLy8gY3JlYXRlIGNhcnQgY2FuIGhhcHBlbiB0byBhbm9ueW1vdXMgdXNlciBpZiBpdCBpcyBub3QgZW1wdHkgb3IgdG8gYW55IG90aGVyIHVzZXIgaWYgaXQgaXMgbG9hZGVkIGFuZCBlbXB0eVxuICAgICAgZmlsdGVyKFxuICAgICAgICBjYXJ0U3RhdGUgPT5cbiAgICAgICAgICB0aGlzLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTIHx8XG4gICAgICAgICAgKGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICAgICksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5jcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiBjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpLFxuICAgICAgLy8gd2FpdCBmb3IgYWN0aXZlIGNhcnQgaWQgdG8gcG9pbnQgdG8gY29kZS9ndWlkIHRvIGF2b2lkIHNvbWUgd29yayBvbiBmcmVzaCBlbnRpdHlcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICF0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gYWN0aXZlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoKS5zdWJzY3JpYmUoY2FydFN0YXRlID0+IHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyeShcbiAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdGhpcy51c2VySWQpLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeVxuICAgKi9cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnkuZW50cnlOdW1iZXJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyeShjYXJ0SWQsIHByb2R1Y3RDb2RlKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYXNzaWduRW1haWwodGhpcy5jYXJ0SWQsIHRoaXMudXNlcklkLCBlbWFpbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFzc2lnbmVkIHVzZXIgdG8gY2FydFxuICAgKi9cbiAgZ2V0QXNzaWduZWRVc2VyKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZSgpLnBpcGUobWFwKGNhcnQgPT4gY2FydC51c2VyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGZvciBndWVzdCBjYXJ0XG4gICAqL1xuICBpc0d1ZXN0Q2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYXJ0VXNlciAmJlxuICAgICAgKHRoaXMuY2FydFVzZXIubmFtZSA9PT0gT0NDX1VTRVJfSURfR1VFU1QgfHxcbiAgICAgICAgdGhpcy5pc0VtYWlsKFxuICAgICAgICAgIHRoaXMuY2FydFVzZXIudWlkXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAuam9pbignfCcpXG4gICAgICAgICkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBhIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgKi9cbiAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZCB7XG4gICAgY2FydEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICB0aGlzLmFkZEVudHJ5KGVudHJ5LnByb2R1Y3QuY29kZSwgZW50cnkucXVhbnRpdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaChFTUFJTF9QQVRURVJOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgYmFja2VuZCBpcyB1cGRhdGVkXG4gIC8qKlxuICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAqL1xuICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W107XG4gICAgdGhpcy5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKGVudHJpZXMgPT4ge1xuICAgICAgICBjYXJ0RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KTtcblxuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5kZWxldGVDYXJ0KGNhcnRJZCwgT0NDX1VTRVJfSURfQU5PTllNT1VTKTtcblxuICAgIHRoaXMuYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWNhcnQgfHwgKHR5cGVvZiBjYXJ0ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=