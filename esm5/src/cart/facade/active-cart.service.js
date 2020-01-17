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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxxQkFBcUIsTUFBTSw4QkFBOEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUF3QkUsMkJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSDlDLGlCQW9CQztRQW5CVyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFB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QkFBQztDQUFBLEFBNVlELElBNFlDO1NBM1lZLGlCQUFpQjs7Ozs7O0lBQzVCLDJEQUNtQzs7Ozs7SUFDbkMsMkNBQTZEOzs7OztJQUM3RCx3Q0FBc0M7Ozs7O0lBRXRDLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQWU7Ozs7O0lBQ2YscUNBQXVCOzs7OztJQUV2QiwwQ0FRRTs7Ozs7SUFDRiwwQ0FFRTs7Ozs7SUFHQSxrQ0FBMEM7Ozs7O0lBQzFDLHdDQUFrQzs7Ozs7SUFDbEMsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2UsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19VU0VSX0lEX0dVRVNULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBFTUFJTF9QQVRURVJOIH0gZnJvbSAnLi4vLi4vdXRpbC9yZWdleC1wYXR0ZXJuJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkLCBpc1RlbXBDYXJ0SWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZlQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgcHJpdmF0ZSBhY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBwcml2YXRlIHVzZXJJZCA9IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgcHJpdmF0ZSBjYXJ0SWQ7XG4gIHByaXZhdGUgY2FydFVzZXI6IFVzZXI7XG5cbiAgcHJpdmF0ZSBhY3RpdmVDYXJ0SWQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0QWN0aXZlQ2FydElkKSxcbiAgICBtYXAoY2FydElkID0+IHtcbiAgICAgIGlmICghY2FydElkKSB7XG4gICAgICAgIHJldHVybiBPQ0NfQ0FSVF9JRF9DVVJSRU5UO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcnRJZDtcbiAgICB9KVxuICApO1xuICBwcml2YXRlIGNhcnRTZWxlY3RvciQgPSB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KGNhcnRJZCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5zdWJzY3JpYmUodXNlcklkID0+IHtcbiAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgaWYgKHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICAgIHRoaXMubG9hZE9yTWVyZ2UodGhpcy5jYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkID0gdXNlcklkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVDYXJ0SWQkLnN1YnNjcmliZShjYXJ0SWQgPT4ge1xuICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRBY3RpdmVDYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRBY3RpdmVDYXJ0KCkge1xuICAgIHRoaXMuYWN0aXZlQ2FydCQgPSB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYWN0aXZlQ2FydElkJCksXG4gICAgICBtYXAoKFtjYXJ0RW50aXR5LCBhY3RpdmVDYXJ0SWRdOiBbUHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4sIHN0cmluZ10pOiB7XG4gICAgICAgIGNhcnQ6IENhcnQ7XG4gICAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgICBpc1N0YWJsZTogYm9vbGVhbjtcbiAgICAgICAgbG9hZGVkOiBib29sZWFuO1xuICAgICAgfSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FydDogY2FydEVudGl0eS52YWx1ZSxcbiAgICAgICAgICBjYXJ0SWQ6IGFjdGl2ZUNhcnRJZCxcbiAgICAgICAgICBpc1N0YWJsZTogIWNhcnRFbnRpdHkubG9hZGluZyAmJiBjYXJ0RW50aXR5LnByb2Nlc3Nlc0NvdW50ID09PSAwLFxuICAgICAgICAgIGxvYWRlZDpcbiAgICAgICAgICAgIChjYXJ0RW50aXR5LmVycm9yIHx8IGNhcnRFbnRpdHkuc3VjY2VzcykgJiYgIWNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgLy8gd2Ugd2FudCB0byBlbWl0IGVtcHR5IGNhcnRzIGV2ZW4gaWYgdGhvc2UgYXJlIG5vdCBzdGFibGVcbiAgICAgIC8vIG9uIG1lcmdlIGNhcnQgYWN0aW9uIHdlIHdhbnQgdG8gc3dpdGNoIHRvIGVtcHR5IGNhcnQgc28gbm8gb25lIHdvdWxkIHVzZSBvbGQgY2FydElkIHdoaWNoIGNhbiBiZSBhbHJlYWR5IG9ic29sZXRlXG4gICAgICAvLyBzbyBvbiBtZXJnZSBhY3Rpb24gdGhlIHJlc3VsdGluZyBzdHJlYW0gbG9va3MgbGlrZSB0aGlzOiBvbGRfY2FydCAtPiB7fSAtPiBuZXdfY2FydFxuICAgICAgZmlsdGVyKCh7IGlzU3RhYmxlLCBjYXJ0IH0pID0+IGlzU3RhYmxlIHx8IHRoaXMuaXNFbXB0eShjYXJ0KSksXG4gICAgICB0YXAoKHsgY2FydCwgY2FydElkLCBsb2FkZWQsIGlzU3RhYmxlIH0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU3RhYmxlICYmXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KGNhcnQpICYmXG4gICAgICAgICAgIWxvYWRlZCAmJlxuICAgICAgICAgICFpc1RlbXBDYXJ0SWQoY2FydElkKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQoY2FydElkKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHsgY2FydCB9KSA9PiAoY2FydCA/IGNhcnQgOiB7fSkpLFxuICAgICAgdGFwKGNhcnQgPT4ge1xuICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgIHRoaXMuY2FydFVzZXIgPSBjYXJ0LnVzZXI7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnRcbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0IGlkXG4gICAqL1xuICBnZXRBY3RpdmVDYXJ0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JC5waXBlKFxuICAgICAgbWFwKGNhcnQgPT4gZ2V0Q2FydElkQnlVc2VySWQoY2FydCwgdGhpcy51c2VySWQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyaWVzXG4gICAqL1xuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cmllcyhjYXJ0SWQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIGNhcnQgaXMgc3RhYmxlIChub3QgbG9hZGluZyBhbmQgbm90IHBlbmRpbmcgcHJvY2Vzc2VzIG9uIGNhcnQpXG4gICAqL1xuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gRGVib3VuY2UgaXMgdXNlZCBoZXJlLCB0byBhdm9pZCBmbGlja2VyaW5nIHdoZW4gd2Ugc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IGNhcnQgZW50aXRpZXMuXG4gICAgLy8gRm9yIGV4YW1wbGUgZHVyaW5nIGBhZGRFbnRyeWAgbWV0aG9kLiBXZSBtaWdodCB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQsIHNvIGBjdXJyZW50IGNhcnQgd2lsbCBiZSB0aGVuIGFjdGl2ZSBpZC5cbiAgICAvLyBBZnRlciBsb2FkIGZhaWxzIHdlIG1pZ2h0IGNyZWF0ZSBuZXcgY2FydCBzbyB3ZSBzd2l0Y2ggdG8gYHRlbXAtJHt1dWlkfWAgY2FydCBlbnRpdHkgdXNlZCB3aGVuIGNyZWF0aW5nIGNhcnQuXG4gICAgLy8gQXQgdGhlIGVuZCB3ZSBmaW5hbGx5IHN3aXRjaCB0byBjYXJ0IGBjb2RlYCBmb3IgY2FydCBpZC4gQmV0d2VlbiB0aG9zZSBzd2l0Y2hlcyBjYXJ0IGBnZXRMb2FkZWRgIGZ1bmN0aW9uIHNob3VsZCBub3QgZmxpY2tlci5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5pc1N0YWJsZShjYXJ0SWQpKSxcbiAgICAgIGRlYm91bmNlKHN0YXRlID0+IChzdGF0ZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghY2FydElkIHx8IGNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZShjYXJ0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQgPyBjYXJ0SWQgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhcnRJZCAmJiBjYXJ0SWQgIT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pIHtcbiAgICBjb25zdCBlbnRyaWVzVG9BZGQgPSBjYXJ0RW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgIHByb2R1Y3RDb2RlOiBlbnRyeS5wcm9kdWN0LmNvZGUsXG4gICAgICBxdWFudGl0eTogZW50cnkucXVhbnRpdHksXG4gICAgfSkpO1xuICAgIHRoaXMucmVxdWlyZUxvYWRlZENhcnRGb3JHdWVzdE1lcmdlKCkuc3Vic2NyaWJlKGNhcnRTdGF0ZSA9PiB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cmllcyhcbiAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdGhpcy51c2VySWQpLFxuICAgICAgICBlbnRyaWVzVG9BZGRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlTG9hZGVkQ2FydChcbiAgICAgIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKGZpbHRlcigoKSA9PiAhdGhpcy5pc0d1ZXN0Q2FydCgpKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpIHtcbiAgICAvLyBjYXJ0IGNyZWF0aW5nIGlzIGFsd2F5cyByZXByZXNlbnRlZCB3aXRoIGxvYWRpbmcgZmxhZ3NcbiAgICAvLyB3aGVuIGFsbCBsb2FkaW5nIGZsYWdzIGFyZSBmYWxzZSBpdCBtZWFucyB0aGF0IHdlIHJlc3RvcmVkIHdyb25nIGNhcnQgaWRcbiAgICAvLyBjb3VsZCBoYXBwZW4gb24gY29udGV4dCBjaGFuZ2Ugb3IgcmVsb2FkIHJpZ2h0IGluIHRoZSBtaWRkbGUgb24gY2FydCBjcmVhdGUgY2FsbFxuICAgIHJldHVybiAoXG4gICAgICBpc1RlbXBDYXJ0SWQodGhpcy5jYXJ0SWQpICYmXG4gICAgICAoY2FydFN0YXRlLmxvYWRpbmcgfHwgY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgIGN1c3RvbUNhcnRTZWxlY3RvciQ/OiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PlxuICApOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gRm9yIGd1ZXN0IGNhcnQgbWVyZ2Ugd2Ugd2FudCB0byBmaWx0ZXIgZ3Vlc3QgY2FydCBpbiB0aGUgd2hvbGUgc3RyZWFtXG4gICAgLy8gV2UgaGF2ZSB0byB3YWl0IHdpdGggbG9hZC9jcmVhdGUvYWRkRW50cnkgYWZ0ZXIgZ3Vlc3QgY2FydCB3aWxsIGJlIGRlbGV0ZWQuXG4gICAgLy8gVGhhdCdzIHdoeSB5b3UgY2FuIHByb3ZpZGUgY3VzdG9tIHNlbGVjdG9yIHdpdGggdGhpcyBmaWx0ZXIgYXBwbGllZC5cbiAgICBjb25zdCBjYXJ0U2VsZWN0b3IkID0gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgPyBjdXN0b21DYXJ0U2VsZWN0b3IkXG4gICAgICA6IHRoaXMuY2FydFNlbGVjdG9yJDtcblxuICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBBdm9pZCBsb2FkL2NyZWF0ZSBjYWxsIHdoZW4gdGhlcmUgYXJlIG5ldyBjYXJ0IGNyZWF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgIC8vIFRyeSB0byBsb2FkIHRoZSBjYXJ0LCBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgYmVlbiBjcmVhdGVkIG9uIGFub3RoZXIgZGV2aWNlIGJldHdlZW4gb3VyIGxvZ2luIGFuZCBhZGQgZW50cnkgY2FsbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkgJiZcbiAgICAgICAgICB0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBjcmVhdGUgY2FydCBjYW4gaGFwcGVuIHRvIGFub255bW91cyB1c2VyIGlmIGl0IGlzIG5vdCBlbXB0eSBvciB0byBhbnkgb3RoZXIgdXNlciBpZiBpdCBpcyBsb2FkZWQgYW5kIGVtcHR5XG4gICAgICBmaWx0ZXIoXG4gICAgICAgIGNhcnRTdGF0ZSA9PlxuICAgICAgICAgIHRoaXMudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfHxcbiAgICAgICAgICAoY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKVxuICAgICAgKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvciksXG4gICAgICAvLyB3YWl0IGZvciBhY3RpdmUgY2FydCBpZCB0byBwb2ludCB0byBjb2RlL2d1aWQgdG8gYXZvaWQgc29tZSB3b3JrIG9uIHRlbXAgY2FydCBlbnRpdHlcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICF0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gYWN0aXZlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoKS5zdWJzY3JpYmUoY2FydFN0YXRlID0+IHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyeShcbiAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdGhpcy51c2VySWQpLFxuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeVxuICAgKi9cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnkuZW50cnlOdW1iZXJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyeShjYXJ0SWQsIHByb2R1Y3RDb2RlKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYXNzaWduRW1haWwodGhpcy5jYXJ0SWQsIHRoaXMudXNlcklkLCBlbWFpbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFzc2lnbmVkIHVzZXIgdG8gY2FydFxuICAgKi9cbiAgZ2V0QXNzaWduZWRVc2VyKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZSgpLnBpcGUobWFwKGNhcnQgPT4gY2FydC51c2VyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGZvciBndWVzdCBjYXJ0XG4gICAqL1xuICBpc0d1ZXN0Q2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYXJ0VXNlciAmJlxuICAgICAgKHRoaXMuY2FydFVzZXIubmFtZSA9PT0gT0NDX1VTRVJfSURfR1VFU1QgfHxcbiAgICAgICAgdGhpcy5pc0VtYWlsKFxuICAgICAgICAgIHRoaXMuY2FydFVzZXIudWlkXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAuam9pbignfCcpXG4gICAgICAgICkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBhIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgKi9cbiAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZCB7XG4gICAgY2FydEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICB0aGlzLmFkZEVudHJ5KGVudHJ5LnByb2R1Y3QuY29kZSwgZW50cnkucXVhbnRpdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaChFTUFJTF9QQVRURVJOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgYmFja2VuZCBpcyB1cGRhdGVkXG4gIC8qKlxuICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAqL1xuICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W107XG4gICAgdGhpcy5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKGVudHJpZXMgPT4ge1xuICAgICAgICBjYXJ0RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KTtcblxuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5kZWxldGVDYXJ0KGNhcnRJZCwgT0NDX1VTRVJfSURfQU5PTllNT1VTKTtcblxuICAgIHRoaXMuYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWNhcnQgfHwgKHR5cGVvZiBjYXJ0ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=