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
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { FRESH_CART_ID } from '../store/actions/multi-cart.action';
import { MultiCartSelectors } from '../store/selectors/index';
import { getCartIdByUserId } from '../utils/utils';
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
                cartId !== FRESH_CART_ID) {
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
        // After load fails we might create new cart so we switch to `fresh` cart entity used when creating cart.
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
            this.store.dispatch(new DeprecatedCartActions.MergeCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            }));
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
        return (this.cartId === FRESH_CART_ID &&
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
        // wait for active cart id to point to code/guid to avoid some work on fresh entity
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxxQkFBcUIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUF3QkUsMkJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSDlDLGlCQW9CQztRQW5CVyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNo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QlgsZ0JBQWdCOztJQThZekIsd0JBQUM7Q0FBQSxBQTVZRCxJQTRZQztTQTNZWSxpQkFBaUI7Ozs7OztJQUM1QiwyREFDbUM7Ozs7O0lBQ25DLDJDQUE2RDs7Ozs7SUFDN0Qsd0NBQXNDOzs7OztJQUV0QyxtQ0FBdUM7Ozs7O0lBQ3ZDLG1DQUFlOzs7OztJQUNmLHFDQUF1Qjs7Ozs7SUFFdkIsMENBUUU7Ozs7O0lBQ0YsMENBRUU7Ozs7O0lBR0Esa0NBQTBDOzs7OztJQUMxQyx3Q0FBa0M7Ozs7O0lBQ2xDLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwvcmVnZXgtcGF0dGVybic7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBGUkVTSF9DQVJUX0lEIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9tdWx0aS1jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICBwcml2YXRlIGFjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIHByaXZhdGUgdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICBwcml2YXRlIGNhcnRJZDtcbiAgcHJpdmF0ZSBjYXJ0VXNlcjogVXNlcjtcblxuICBwcml2YXRlIGFjdGl2ZUNhcnRJZCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0SWQpLFxuICAgIG1hcChjYXJ0SWQgPT4ge1xuICAgICAgaWYgKCFjYXJ0SWQpIHtcbiAgICAgICAgcmV0dXJuIE9DQ19DQVJUX0lEX0NVUlJFTlQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FydElkO1xuICAgIH0pXG4gICk7XG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnRFbnRpdHkoY2FydElkKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLnN1YnNjcmliZSh1c2VySWQgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICBpZiAodGhpcy5pc0p1c3RMb2dnZWRJbih1c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSh0aGlzLmNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2ZUNhcnRJZCQuc3Vic2NyaWJlKGNhcnRJZCA9PiB7XG4gICAgICB0aGlzLmNhcnRJZCA9IGNhcnRJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdEFjdGl2ZUNhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEFjdGl2ZUNhcnQoKSB7XG4gICAgdGhpcy5hY3RpdmVDYXJ0JCA9IHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hY3RpdmVDYXJ0SWQkKSxcbiAgICAgIG1hcCgoW2NhcnRFbnRpdHksIGFjdGl2ZUNhcnRJZF06IFtQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Piwgc3RyaW5nXSk6IHtcbiAgICAgICAgY2FydDogQ2FydDtcbiAgICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICAgIGlzU3RhYmxlOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGNhcnRJZDogYWN0aXZlQ2FydElkLFxuICAgICAgICAgIGlzU3RhYmxlOiAhY2FydEVudGl0eS5sb2FkaW5nICYmIGNhcnRFbnRpdHkucHJvY2Vzc2VzQ291bnQgPT09IDAsXG4gICAgICAgICAgbG9hZGVkOlxuICAgICAgICAgICAgKGNhcnRFbnRpdHkuZXJyb3IgfHwgY2FydEVudGl0eS5zdWNjZXNzKSAmJiAhY2FydEVudGl0eS5sb2FkaW5nLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAvLyB3ZSB3YW50IHRvIGVtaXQgZW1wdHkgY2FydHMgZXZlbiBpZiB0aG9zZSBhcmUgbm90IHN0YWJsZVxuICAgICAgLy8gb24gbWVyZ2UgY2FydCBhY3Rpb24gd2Ugd2FudCB0byBzd2l0Y2ggdG8gZW1wdHkgY2FydCBzbyBubyBvbmUgd291bGQgdXNlIG9sZCBjYXJ0SWQgd2hpY2ggY2FuIGJlIGFscmVhZHkgb2Jzb2xldGVcbiAgICAgIC8vIHNvIG9uIG1lcmdlIGFjdGlvbiB0aGUgcmVzdWx0aW5nIHN0cmVhbSBsb29rcyBsaWtlIHRoaXM6IG9sZF9jYXJ0IC0+IHt9IC0+IG5ld19jYXJ0XG4gICAgICBmaWx0ZXIoKHsgaXNTdGFibGUsIGNhcnQgfSkgPT4gaXNTdGFibGUgfHwgdGhpcy5pc0VtcHR5KGNhcnQpKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBjYXJ0SWQsIGxvYWRlZCwgaXNTdGFibGUgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNTdGFibGUgJiZcbiAgICAgICAgICB0aGlzLmlzRW1wdHkoY2FydCkgJiZcbiAgICAgICAgICAhbG9hZGVkICYmXG4gICAgICAgICAgY2FydElkICE9PSBGUkVTSF9DQVJUX0lEXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZChjYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICB0YXAoY2FydCA9PiB7XG4gICAgICAgIGlmIChjYXJ0KSB7XG4gICAgICAgICAgdGhpcy5jYXJ0VXNlciA9IGNhcnQudXNlcjtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydFxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnQkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnQgaWRcbiAgICovXG4gIGdldEFjdGl2ZUNhcnRJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnQkLnBpcGUoXG4gICAgICBtYXAoY2FydCA9PiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0LCB0aGlzLnVzZXJJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJpZXNcbiAgICovXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyaWVzKGNhcnRJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIHdoZW4gY2FydCBpcyBzdGFibGUgKG5vdCBsb2FkaW5nIGFuZCBub3QgcGVuZGluZyBwcm9jZXNzZXMgb24gY2FydClcbiAgICovXG4gIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBEZWJvdW5jZSBpcyB1c2VkIGhlcmUsIHRvIGF2b2lkIGZsaWNrZXJpbmcgd2hlbiB3ZSBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgY2FydCBlbnRpdGllcy5cbiAgICAvLyBGb3IgZXhhbXBsZSBkdXJpbmcgYGFkZEVudHJ5YCBtZXRob2QuIFdlIG1pZ2h0IHRyeSB0byBsb2FkIGN1cnJlbnQgY2FydCwgc28gYGN1cnJlbnQgY2FydCB3aWxsIGJlIHRoZW4gYWN0aXZlIGlkLlxuICAgIC8vIEFmdGVyIGxvYWQgZmFpbHMgd2UgbWlnaHQgY3JlYXRlIG5ldyBjYXJ0IHNvIHdlIHN3aXRjaCB0byBgZnJlc2hgIGNhcnQgZW50aXR5IHVzZWQgd2hlbiBjcmVhdGluZyBjYXJ0LlxuICAgIC8vIEF0IHRoZSBlbmQgd2UgZmluYWxseSBzd2l0Y2ggdG8gY2FydCBgY29kZWAgZm9yIGNhcnQgaWQuIEJldHdlZW4gdGhvc2Ugc3dpdGNoZXMgY2FydCBgZ2V0TG9hZGVkYCBmdW5jdGlvbiBzaG91bGQgbm90IGZsaWNrZXIuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuaXNTdGFibGUoY2FydElkKSksXG4gICAgICBkZWJvdW5jZShzdGF0ZSA9PiAoc3RhdGUgPyB0aW1lcigwKSA6IEVNUFRZKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE9yTWVyZ2UoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBmb3IgbG9naW4gdXNlciwgd2hlbmV2ZXIgdGhlcmUncyBhbiBleGlzdGluZyBjYXJ0LCB3ZSB3aWxsIGxvYWQgdGhlIHVzZXJcbiAgICAvLyBjdXJyZW50IGNhcnQgYW5kIG1lcmdlIGl0IGludG8gdGhlIGV4aXN0aW5nIGNhcnRcbiAgICBpZiAoIWNhcnRJZCB8fCBjYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMuZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkID8gY2FydElkIDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjYXJ0SWQgJiYgY2FydElkICE9PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbnRyaWVzR3Vlc3RNZXJnZShjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKSB7XG4gICAgY29uc3QgZW50cmllc1RvQWRkID0gY2FydEVudHJpZXMubWFwKGVudHJ5ID0+ICh7XG4gICAgICBwcm9kdWN0Q29kZTogZW50cnkucHJvZHVjdC5jb2RlLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pKTtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZSgpLnN1YnNjcmliZShjYXJ0U3RhdGUgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgZW50cmllc1RvQWRkXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoXG4gICAgICB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShmaWx0ZXIoKCkgPT4gIXRoaXMuaXNHdWVzdENhcnQoKSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSB7XG4gICAgLy8gY2FydCBjcmVhdGluZyBpcyBhbHdheXMgcmVwcmVzZW50ZWQgd2l0aCBsb2FkaW5nIGZsYWdzXG4gICAgLy8gd2hlbiBhbGwgbG9hZGluZyBmbGFncyBhcmUgZmFsc2UgaXQgbWVhbnMgdGhhdCB3ZSByZXN0b3JlZCB3cm9uZyBjYXJ0IGlkXG4gICAgLy8gY291bGQgaGFwcGVuIG9uIGNvbnRleHQgY2hhbmdlIG9yIHJlbG9hZCByaWdodCBpbiB0aGUgbWlkZGxlIG9uIGNhcnQgY3JlYXRlIGNhbGxcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYXJ0SWQgPT09IEZSRVNIX0NBUlRfSUQgJiZcbiAgICAgIChjYXJ0U3RhdGUubG9hZGluZyB8fCBjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnQoXG4gICAgY3VzdG9tQ2FydFNlbGVjdG9yJD86IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+XG4gICk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+IHtcbiAgICAvLyBGb3IgZ3Vlc3QgY2FydCBtZXJnZSB3ZSB3YW50IHRvIGZpbHRlciBndWVzdCBjYXJ0IGluIHRoZSB3aG9sZSBzdHJlYW1cbiAgICAvLyBXZSBoYXZlIHRvIHdhaXQgd2l0aCBsb2FkL2NyZWF0ZS9hZGRFbnRyeSBhZnRlciBndWVzdCBjYXJ0IHdpbGwgYmUgZGVsZXRlZC5cbiAgICAvLyBUaGF0J3Mgd2h5IHlvdSBjYW4gcHJvdmlkZSBjdXN0b20gc2VsZWN0b3Igd2l0aCB0aGlzIGZpbHRlciBhcHBsaWVkLlxuICAgIGNvbnN0IGNhcnRTZWxlY3RvciQgPSBjdXN0b21DYXJ0U2VsZWN0b3IkXG4gICAgICA/IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgIDogdGhpcy5jYXJ0U2VsZWN0b3IkO1xuXG4gICAgcmV0dXJuIGNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIEF2b2lkIGxvYWQvY3JlYXRlIGNhbGwgd2hlbiB0aGVyZSBhcmUgbmV3IGNhcnQgY3JlYXRpbmcgYXQgdGhlIG1vbWVudFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgLy8gVHJ5IHRvIGxvYWQgdGhlIGNhcnQsIGJlY2F1c2UgaXQgbWlnaHQgaGF2ZSBiZWVuIGNyZWF0ZWQgb24gYW5vdGhlciBkZXZpY2UgYmV0d2VlbiBvdXIgbG9naW4gYW5kIGFkZCBlbnRyeSBjYWxsXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSAmJlxuICAgICAgICAgIHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRTZWxlY3RvciQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIC8vIGNyZWF0ZSBjYXJ0IGNhbiBoYXBwZW4gdG8gYW5vbnltb3VzIHVzZXIgaWYgaXQgaXMgbm90IGVtcHR5IG9yIHRvIGFueSBvdGhlciB1c2VyIGlmIGl0IGlzIGxvYWRlZCBhbmQgZW1wdHlcbiAgICAgIGZpbHRlcihcbiAgICAgICAgY2FydFN0YXRlID0+XG4gICAgICAgICAgdGhpcy51c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB8fFxuICAgICAgICAgIChjYXJ0U3RhdGUuc3VjY2VzcyB8fCBjYXJ0U3RhdGUuZXJyb3IpXG4gICAgICApLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuY3JlYXRlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRTZWxlY3RvciQ7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIWNhcnRTdGF0ZS5sb2FkaW5nKSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKSxcbiAgICAgIC8vIHdhaXQgZm9yIGFjdGl2ZSBjYXJ0IGlkIHRvIHBvaW50IHRvIGNvZGUvZ3VpZCB0byBhdm9pZCBzb21lIHdvcmsgb24gZnJlc2ggZW50aXR5XG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGVudHJ5IHRvIGFjdGl2ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KCkuc3Vic2NyaWJlKGNhcnRTdGF0ZSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIHF1YW50aXR5XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlcbiAgICovXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqL1xuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cnkoY2FydElkLCBwcm9kdWN0Q29kZSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFzc2lnbkVtYWlsKHRoaXMuY2FydElkLCB0aGlzLnVzZXJJZCwgZW1haWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhc3NpZ25lZCB1c2VyIHRvIGNhcnRcbiAgICovXG4gIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmUoKS5waXBlKG1hcChjYXJ0ID0+IGNhcnQudXNlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmb3IgZ3Vlc3QgY2FydFxuICAgKi9cbiAgaXNHdWVzdENhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY2FydFVzZXIgJiZcbiAgICAgICh0aGlzLmNhcnRVc2VyLm5hbWUgPT09IE9DQ19VU0VSX0lEX0dVRVNUIHx8XG4gICAgICAgIHRoaXMuaXNFbWFpbChcbiAgICAgICAgICB0aGlzLmNhcnRVc2VyLnVpZFxuICAgICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJ3wnKVxuICAgICAgICApKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICovXG4gIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQge1xuICAgIGNhcnRFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgdGhpcy5hZGRFbnRyeShlbnRyeS5wcm9kdWN0LmNvZGUsIGVudHJ5LnF1YW50aXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goRU1BSUxfUEFUVEVSTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IFJlbW92ZSBvbmNlIGJhY2tlbmQgaXMgdXBkYXRlZFxuICAvKipcbiAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdO1xuICAgIHRoaXMuZ2V0RW50cmllcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShlbnRyaWVzID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZGVsZXRlQ2FydChjYXJ0SWQsIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG5cbiAgICB0aGlzLmFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbXB0eShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFjYXJ0IHx8ICh0eXBlb2YgY2FydCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19