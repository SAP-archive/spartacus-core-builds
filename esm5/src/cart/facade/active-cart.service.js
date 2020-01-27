/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
import { MultiCartSelectors } from '../store/selectors/index';
import { getCartIdByUserId, isTempCartId } from '../utils/utils';
import { MultiCartService } from './multi-cart.service';
var ActiveCartService = /** @class */ (function () {
    function ActiveCartService(store, authService, multiCartService) {
        var _this = this;
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
        function (cartId) {
            if (!cartId) {
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        })));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.multiCartService.getCartEntity(cartId); })));
        this.authService.getOccUserId().subscribe((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            _this.userId = userId;
            if (_this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (_this.isJustLoggedIn(userId)) {
                    _this.loadOrMerge(_this.cartId);
                }
            }
            _this.previousUserId = userId;
        }));
        this.activeCartId$.subscribe((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            _this.cartId = cartId;
        }));
        this.initActiveCart();
    }
    /**
     * @private
     * @return {?}
     */
    ActiveCartService.prototype.initActiveCart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), cartEntity = _b[0], activeCartId = _b[1];
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
        function (_a) {
            var isStable = _a.isStable, cart = _a.cart;
            return isStable || _this.isEmpty(cart);
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var cart = _a.cart, cartId = _a.cartId, loaded = _a.loaded, isStable = _a.isStable;
            if (isStable &&
                _this.isEmpty(cart) &&
                !loaded &&
                !isTempCartId(cartId)) {
                _this.load(cartId);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var cart = _a.cart;
            return (cart ? cart : {});
        })), tap((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) {
            if (cart) {
                _this.cartUser = cart.user;
            }
        })), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Returns active cart
     */
    /**
     * Returns active cart
     * @return {?}
     */
    ActiveCartService.prototype.getActive = /**
     * Returns active cart
     * @return {?}
     */
    function () {
        return this.activeCart$;
    };
    /**
     * Returns active cart id
     */
    /**
     * Returns active cart id
     * @return {?}
     */
    ActiveCartService.prototype.getActiveCartId = /**
     * Returns active cart id
     * @return {?}
     */
    function () {
        var _this = this;
        return this.activeCart$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return getCartIdByUserId(cart, _this.userId); })), distinctUntilChanged());
    };
    /**
     * Returns cart entries
     */
    /**
     * Returns cart entries
     * @return {?}
     */
    ActiveCartService.prototype.getEntries = /**
     * Returns cart entries
     * @return {?}
     */
    function () {
        var _this = this;
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.multiCartService.getEntries(cartId); })), distinctUntilChanged());
    };
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     */
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     * @return {?}
     */
    ActiveCartService.prototype.getLoaded = /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     * @return {?}
     */
    function () {
        var _this = this;
        // Debounce is used here, to avoid flickering when we switch between different cart entities.
        // For example during `addEntry` method. We might try to load current cart, so `current cart will be then active id.
        // After load fails we might create new cart so we switch to `temp-${uuid}` cart entity used when creating cart.
        // At the end we finally switch to cart `code` for cart id. Between those switches cart `getLoaded` function should not flicker.
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.multiCartService.isStable(cartId); })), debounce((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return (state ? timer(0) : EMPTY); })), distinctUntilChanged());
    };
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    ActiveCartService.prototype.loadOrMerge = /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
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
            this.multiCartService.mergeToCurrentCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            });
        }
    };
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    ActiveCartService.prototype.load = /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
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
    };
    /**
     * @private
     * @param {?} cartEntries
     * @return {?}
     */
    ActiveCartService.prototype.addEntriesGuestMerge = /**
     * @private
     * @param {?} cartEntries
     * @return {?}
     */
    function (cartEntries) {
        var _this = this;
        /** @type {?} */
        var entriesToAdd = cartEntries.map((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) { return ({
            productCode: entry.product.code,
            quantity: entry.quantity,
        }); }));
        this.requireLoadedCartForGuestMerge().subscribe((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            _this.multiCartService.addEntries(_this.userId, getCartIdByUserId(cartState.value, _this.userId), entriesToAdd);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ActiveCartService.prototype.requireLoadedCartForGuestMerge = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.requireLoadedCart(this.cartSelector$.pipe(filter((/**
         * @return {?}
         */
        function () { return !_this.isGuestCart(); }))));
    };
    /**
     * @private
     * @param {?} cartState
     * @return {?}
     */
    ActiveCartService.prototype.isCartCreating = /**
     * @private
     * @param {?} cartState
     * @return {?}
     */
    function (cartState) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (isTempCartId(this.cartId) &&
            (cartState.loading || cartState.success || cartState.error));
    };
    /**
     * @private
     * @param {?=} customCartSelector$
     * @return {?}
     */
    ActiveCartService.prototype.requireLoadedCart = /**
     * @private
     * @param {?=} customCartSelector$
     * @return {?}
     */
    function (customCartSelector$) {
        var _this = this;
        // For guest cart merge we want to filter guest cart in the whole stream
        // We have to wait with load/create/addEntry after guest cart will be deleted.
        // That's why you can provide custom selector with this filter applied.
        /** @type {?} */
        var cartSelector$ = customCartSelector$
            ? customCartSelector$
            : this.cartSelector$;
        return cartSelector$.pipe(filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return !cartState.loading; })), 
        // Avoid load/create call when there are new cart creating at the moment
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return !_this.isCartCreating(cartState); })), take(1), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (_this.isEmpty(cartState.value) &&
                _this.userId !== OCC_USER_ID_ANONYMOUS) {
                _this.load(undefined);
            }
            return cartSelector$;
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return !cartState.loading; })), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            return _this.userId === OCC_USER_ID_ANONYMOUS ||
                (cartState.success || cartState.error);
        })), take(1), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            if (_this.isEmpty(cartState.value)) {
                _this.multiCartService.createCart({
                    userId: _this.userId,
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
        function (cartState) { return !cartState.loading; })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return cartState.success || cartState.error; })), 
        // wait for active cart id to point to code/guid to avoid some work on temp cart entity
        filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return !_this.isCartCreating(cartState); })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return !_this.isEmpty(cartState.value); })), take(1));
    };
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     */
    /**
     * Add entry to active cart
     *
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    ActiveCartService.prototype.addEntry = /**
     * Add entry to active cart
     *
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (productCode, quantity) {
        var _this = this;
        this.requireLoadedCart().subscribe((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            _this.multiCartService.addEntry(_this.userId, getCartIdByUserId(cartState.value, _this.userId), productCode, quantity);
        }));
    };
    /**
     * Remove entry
     *
     * @param entry
     */
    /**
     * Remove entry
     *
     * @param {?} entry
     * @return {?}
     */
    ActiveCartService.prototype.removeEntry = /**
     * Remove entry
     *
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    };
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    /**
     * Update entry
     *
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    ActiveCartService.prototype.updateEntry = /**
     * Update entry
     *
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    };
    /**
     * Returns cart entry
     *
     * @param productCode
     */
    /**
     * Returns cart entry
     *
     * @param {?} productCode
     * @return {?}
     */
    ActiveCartService.prototype.getEntry = /**
     * Returns cart entry
     *
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        var _this = this;
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.multiCartService.getEntry(cartId, productCode); })), distinctUntilChanged());
    };
    /**
     * Assign email to cart
     *
     * @param email
     */
    /**
     * Assign email to cart
     *
     * @param {?} email
     * @return {?}
     */
    ActiveCartService.prototype.addEmail = /**
     * Assign email to cart
     *
     * @param {?} email
     * @return {?}
     */
    function (email) {
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    };
    /**
     * Get assigned user to cart
     */
    /**
     * Get assigned user to cart
     * @return {?}
     */
    ActiveCartService.prototype.getAssignedUser = /**
     * Get assigned user to cart
     * @return {?}
     */
    function () {
        return this.getActive().pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return cart.user; })));
    };
    /**
     * Returns true for guest cart
     */
    /**
     * Returns true for guest cart
     * @return {?}
     */
    ActiveCartService.prototype.isGuestCart = /**
     * Returns true for guest cart
     * @return {?}
     */
    function () {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid
                    .split('|')
                    .slice(1)
                    .join('|'))));
    };
    /**
     * Add multiple entries to a cart
     *
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    /**
     * Add multiple entries to a cart
     *
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    ActiveCartService.prototype.addEntries = /**
     * Add multiple entries to a cart
     *
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @return {?}
     */
    function (cartEntries) {
        var _this = this;
        cartEntries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            _this.addEntry(entry.product.code, entry.quantity);
        }));
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    ActiveCartService.prototype.isEmail = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
    };
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @param {?} cartId
     * @return {?}
     */
    ActiveCartService.prototype.guestCartMerge = 
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        /** @type {?} */
        var cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) {
            cartEntries = entries;
        }));
        this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
        this.addEntriesGuestMerge(cartEntries);
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    ActiveCartService.prototype.isEmpty = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    };
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    ActiveCartService.prototype.isJustLoggedIn = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    };
    ActiveCartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ActiveCartService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: MultiCartService }
    ]; };
    return ActiveCartService;
}());
export { ActiveCartService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQXdCRSwyQkFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixnQkFBa0M7UUFIOUMsaUJBb0JDO1FBbkJXLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF6QjdCLG1DQUE4QixHQUM3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SUFDN0Qsd0NBQXNDOzs7OztJQUV0QyxtQ0FBdUM7Ozs7O0lBQ3ZDLG1DQUFlOzs7OztJQUNmLHFDQUF1Qjs7Ozs7SUFFdkIsMENBUUU7Ozs7O0lBQ0YsMENBRUU7Ozs7O0lBR0Esa0NBQTBDOzs7OztJQUMxQyx3Q0FBa0M7Ozs7O0lBQ2xDLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwvcmVnZXgtcGF0dGVybic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCwgaXNUZW1wQ2FydElkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgcHJpdmF0ZSB1c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgY2FydElkO1xuICBwcml2YXRlIGNhcnRVc2VyOiBVc2VyO1xuXG4gIHByaXZhdGUgYWN0aXZlQ2FydElkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRJZCksXG4gICAgbWFwKGNhcnRJZCA9PiB7XG4gICAgICBpZiAoIWNhcnRJZCkge1xuICAgICAgICByZXR1cm4gT0NDX0NBUlRfSURfQ1VSUkVOVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJ0SWQ7XG4gICAgfSlcbiAgKTtcbiAgcHJpdmF0ZSBjYXJ0U2VsZWN0b3IkID0gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydEVudGl0eShjYXJ0SWQpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkuc3Vic2NyaWJlKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJJZCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWRPck1lcmdlKHRoaXMuY2FydElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlQ2FydElkJC5zdWJzY3JpYmUoY2FydElkID0+IHtcbiAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0QWN0aXZlQ2FydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QWN0aXZlQ2FydCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQpLFxuICAgICAgbWFwKChbY2FydEVudGl0eSwgYWN0aXZlQ2FydElkXTogW1Byb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+LCBzdHJpbmddKToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgaXNTdGFibGU6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgY2FydElkOiBhY3RpdmVDYXJ0SWQsXG4gICAgICAgICAgaXNTdGFibGU6ICFjYXJ0RW50aXR5LmxvYWRpbmcgJiYgY2FydEVudGl0eS5wcm9jZXNzZXNDb3VudCA9PT0gMCxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIC8vIHdlIHdhbnQgdG8gZW1pdCBlbXB0eSBjYXJ0cyBldmVuIGlmIHRob3NlIGFyZSBub3Qgc3RhYmxlXG4gICAgICAvLyBvbiBtZXJnZSBjYXJ0IGFjdGlvbiB3ZSB3YW50IHRvIHN3aXRjaCB0byBlbXB0eSBjYXJ0IHNvIG5vIG9uZSB3b3VsZCB1c2Ugb2xkIGNhcnRJZCB3aGljaCBjYW4gYmUgYWxyZWFkeSBvYnNvbGV0ZVxuICAgICAgLy8gc28gb24gbWVyZ2UgYWN0aW9uIHRoZSByZXN1bHRpbmcgc3RyZWFtIGxvb2tzIGxpa2UgdGhpczogb2xkX2NhcnQgLT4ge30gLT4gbmV3X2NhcnRcbiAgICAgIGZpbHRlcigoeyBpc1N0YWJsZSwgY2FydCB9KSA9PiBpc1N0YWJsZSB8fCB0aGlzLmlzRW1wdHkoY2FydCkpLFxuICAgICAgdGFwKCh7IGNhcnQsIGNhcnRJZCwgbG9hZGVkLCBpc1N0YWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1N0YWJsZSAmJlxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0KSAmJlxuICAgICAgICAgICFsb2FkZWQgJiZcbiAgICAgICAgICAhaXNUZW1wQ2FydElkKGNhcnRJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKGNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCh7IGNhcnQgfSkgPT4gKGNhcnQgPyBjYXJ0IDoge30pKSxcbiAgICAgIHRhcChjYXJ0ID0+IHtcbiAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyID0gY2FydC51c2VyO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydCBpZFxuICAgKi9cbiAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQucGlwZShcbiAgICAgIG1hcChjYXJ0ID0+IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHRoaXMudXNlcklkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoY2FydElkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgKi9cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIC8vIERlYm91bmNlIGlzIHVzZWQgaGVyZSwgdG8gYXZvaWQgZmxpY2tlcmluZyB3aGVuIHdlIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBjYXJ0IGVudGl0aWVzLlxuICAgIC8vIEZvciBleGFtcGxlIGR1cmluZyBgYWRkRW50cnlgIG1ldGhvZC4gV2UgbWlnaHQgdHJ5IHRvIGxvYWQgY3VycmVudCBjYXJ0LCBzbyBgY3VycmVudCBjYXJ0IHdpbGwgYmUgdGhlbiBhY3RpdmUgaWQuXG4gICAgLy8gQWZ0ZXIgbG9hZCBmYWlscyB3ZSBtaWdodCBjcmVhdGUgbmV3IGNhcnQgc28gd2Ugc3dpdGNoIHRvIGB0ZW1wLSR7dXVpZH1gIGNhcnQgZW50aXR5IHVzZWQgd2hlbiBjcmVhdGluZyBjYXJ0LlxuICAgIC8vIEF0IHRoZSBlbmQgd2UgZmluYWxseSBzd2l0Y2ggdG8gY2FydCBgY29kZWAgZm9yIGNhcnQgaWQuIEJldHdlZW4gdGhvc2Ugc3dpdGNoZXMgY2FydCBgZ2V0TG9hZGVkYCBmdW5jdGlvbiBzaG91bGQgbm90IGZsaWNrZXIuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuaXNTdGFibGUoY2FydElkKSksXG4gICAgICBkZWJvdW5jZShzdGF0ZSA9PiAoc3RhdGUgPyB0aW1lcigwKSA6IEVNUFRZKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE9yTWVyZ2UoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBmb3IgbG9naW4gdXNlciwgd2hlbmV2ZXIgdGhlcmUncyBhbiBleGlzdGluZyBjYXJ0LCB3ZSB3aWxsIGxvYWQgdGhlIHVzZXJcbiAgICAvLyBjdXJyZW50IGNhcnQgYW5kIG1lcmdlIGl0IGludG8gdGhlIGV4aXN0aW5nIGNhcnRcbiAgICBpZiAoIWNhcnRJZCB8fCBjYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMuZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLm1lcmdlVG9DdXJyZW50Q2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkID8gY2FydElkIDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjYXJ0SWQgJiYgY2FydElkICE9PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbnRyaWVzR3Vlc3RNZXJnZShjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKSB7XG4gICAgY29uc3QgZW50cmllc1RvQWRkID0gY2FydEVudHJpZXMubWFwKGVudHJ5ID0+ICh7XG4gICAgICBwcm9kdWN0Q29kZTogZW50cnkucHJvZHVjdC5jb2RlLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pKTtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZSgpLnN1YnNjcmliZShjYXJ0U3RhdGUgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgZW50cmllc1RvQWRkXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoXG4gICAgICB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShmaWx0ZXIoKCkgPT4gIXRoaXMuaXNHdWVzdENhcnQoKSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSB7XG4gICAgLy8gY2FydCBjcmVhdGluZyBpcyBhbHdheXMgcmVwcmVzZW50ZWQgd2l0aCBsb2FkaW5nIGZsYWdzXG4gICAgLy8gd2hlbiBhbGwgbG9hZGluZyBmbGFncyBhcmUgZmFsc2UgaXQgbWVhbnMgdGhhdCB3ZSByZXN0b3JlZCB3cm9uZyBjYXJ0IGlkXG4gICAgLy8gY291bGQgaGFwcGVuIG9uIGNvbnRleHQgY2hhbmdlIG9yIHJlbG9hZCByaWdodCBpbiB0aGUgbWlkZGxlIG9uIGNhcnQgY3JlYXRlIGNhbGxcbiAgICByZXR1cm4gKFxuICAgICAgaXNUZW1wQ2FydElkKHRoaXMuY2FydElkKSAmJlxuICAgICAgKGNhcnRTdGF0ZS5sb2FkaW5nIHx8IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydChcbiAgICBjdXN0b21DYXJ0U2VsZWN0b3IkPzogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj5cbiAgKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIEZvciBndWVzdCBjYXJ0IG1lcmdlIHdlIHdhbnQgdG8gZmlsdGVyIGd1ZXN0IGNhcnQgaW4gdGhlIHdob2xlIHN0cmVhbVxuICAgIC8vIFdlIGhhdmUgdG8gd2FpdCB3aXRoIGxvYWQvY3JlYXRlL2FkZEVudHJ5IGFmdGVyIGd1ZXN0IGNhcnQgd2lsbCBiZSBkZWxldGVkLlxuICAgIC8vIFRoYXQncyB3aHkgeW91IGNhbiBwcm92aWRlIGN1c3RvbSBzZWxlY3RvciB3aXRoIHRoaXMgZmlsdGVyIGFwcGxpZWQuXG4gICAgY29uc3QgY2FydFNlbGVjdG9yJCA9IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgID8gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgOiB0aGlzLmNhcnRTZWxlY3RvciQ7XG5cbiAgICByZXR1cm4gY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgLy8gQXZvaWQgbG9hZC9jcmVhdGUgY2FsbCB3aGVuIHRoZXJlIGFyZSBuZXcgY2FydCBjcmVhdGluZyBhdCB0aGUgbW9tZW50XG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAvLyBUcnkgdG8gbG9hZCB0aGUgY2FydCwgYmVjYXVzZSBpdCBtaWdodCBoYXZlIGJlZW4gY3JlYXRlZCBvbiBhbm90aGVyIGRldmljZSBiZXR3ZWVuIG91ciBsb2dpbiBhbmQgYWRkIGVudHJ5IGNhbGxcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpICYmXG4gICAgICAgICAgdGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgLy8gY3JlYXRlIGNhcnQgY2FuIGhhcHBlbiB0byBhbm9ueW1vdXMgdXNlciBpZiBpdCBpcyBub3QgZW1wdHkgb3IgdG8gYW55IG90aGVyIHVzZXIgaWYgaXQgaXMgbG9hZGVkIGFuZCBlbXB0eVxuICAgICAgZmlsdGVyKFxuICAgICAgICBjYXJ0U3RhdGUgPT5cbiAgICAgICAgICB0aGlzLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTIHx8XG4gICAgICAgICAgKGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICAgICksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5jcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhY2FydFN0YXRlLmxvYWRpbmcpLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiBjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpLFxuICAgICAgLy8gd2FpdCBmb3IgYWN0aXZlIGNhcnQgaWQgdG8gcG9pbnQgdG8gY29kZS9ndWlkIHRvIGF2b2lkIHNvbWUgd29yayBvbiB0ZW1wIGNhcnQgZW50aXR5XG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGFjdGl2ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KCkuc3Vic2NyaWJlKGNhcnRTdGF0ZSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlcbiAgICovXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqL1xuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cnkoY2FydElkLCBwcm9kdWN0Q29kZSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFzc2lnbkVtYWlsKHRoaXMuY2FydElkLCB0aGlzLnVzZXJJZCwgZW1haWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhc3NpZ25lZCB1c2VyIHRvIGNhcnRcbiAgICovXG4gIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChjYXJ0ID0+IGNhcnQudXNlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmb3IgZ3Vlc3QgY2FydFxuICAgKi9cbiAgaXNHdWVzdENhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY2FydFVzZXIgJiZcbiAgICAgICh0aGlzLmNhcnRVc2VyLm5hbWUgPT09IE9DQ19VU0VSX0lEX0dVRVNUIHx8XG4gICAgICAgIHRoaXMuaXNFbWFpbChcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyLnVpZFxuICAgICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJ3wnKVxuICAgICAgICApKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICovXG4gIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQge1xuICAgIGNhcnRFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgdGhpcy5hZGRFbnRyeShlbnRyeS5wcm9kdWN0LmNvZGUsIGVudHJ5LnF1YW50aXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goRU1BSUxfUEFUVEVSTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IFJlbW92ZSBvbmNlIGJhY2tlbmQgaXMgdXBkYXRlZFxuICAvKipcbiAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdO1xuICAgIHRoaXMuZ2V0RW50cmllcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShlbnRyaWVzID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZGVsZXRlQ2FydChjYXJ0SWQsIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG5cbiAgICB0aGlzLmFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbXB0eShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFjYXJ0IHx8ICh0eXBlb2YgY2FydCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19