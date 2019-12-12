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
         * @return {?}
         */
        function () { return _this.cartId !== FRESH_CART_ID; })), take(1), switchMap((/**
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
         * @return {?}
         */
        function () { return _this.cartId !== FRESH_CART_ID; })), filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxxQkFBcUIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUF3QkUsMkJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSDlDLGlCQW9CQztRQW5CVyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNo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dCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfR1VFU1QsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4gfSBmcm9tICcuLi8uLi91dGlsL3JlZ2V4LXBhdHRlcm4nO1xuaW1wb3J0ICogYXMgRGVwcmVjYXRlZENhcnRBY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgRlJFU0hfQ0FSVF9JRCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvbXVsdGktY2FydC5hY3Rpb24nO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZlQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgcHJpdmF0ZSBhY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBwcml2YXRlIHVzZXJJZCA9IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgcHJpdmF0ZSBjYXJ0SWQ7XG4gIHByaXZhdGUgY2FydFVzZXI6IFVzZXI7XG5cbiAgcHJpdmF0ZSBhY3RpdmVDYXJ0SWQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0QWN0aXZlQ2FydElkKSxcbiAgICBtYXAoY2FydElkID0+IHtcbiAgICAgIGlmICghY2FydElkKSB7XG4gICAgICAgIHJldHVybiBPQ0NfQ0FSVF9JRF9DVVJSRU5UO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcnRJZDtcbiAgICB9KVxuICApO1xuICBwcml2YXRlIGNhcnRTZWxlY3RvciQgPSB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KGNhcnRJZCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5zdWJzY3JpYmUodXNlcklkID0+IHtcbiAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgaWYgKHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICAgIHRoaXMubG9hZE9yTWVyZ2UodGhpcy5jYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkID0gdXNlcklkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVDYXJ0SWQkLnN1YnNjcmliZShjYXJ0SWQgPT4ge1xuICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRBY3RpdmVDYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRBY3RpdmVDYXJ0KCkge1xuICAgIHRoaXMuYWN0aXZlQ2FydCQgPSB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYWN0aXZlQ2FydElkJCksXG4gICAgICBtYXAoKFtjYXJ0RW50aXR5LCBhY3RpdmVDYXJ0SWRdOiBbUHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4sIHN0cmluZ10pOiB7XG4gICAgICAgIGNhcnQ6IENhcnQ7XG4gICAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgICBpc1N0YWJsZTogYm9vbGVhbjtcbiAgICAgICAgbG9hZGVkOiBib29sZWFuO1xuICAgICAgfSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FydDogY2FydEVudGl0eS52YWx1ZSxcbiAgICAgICAgICBjYXJ0SWQ6IGFjdGl2ZUNhcnRJZCxcbiAgICAgICAgICBpc1N0YWJsZTogIWNhcnRFbnRpdHkubG9hZGluZyAmJiBjYXJ0RW50aXR5LnByb2Nlc3Nlc0NvdW50ID09PSAwLFxuICAgICAgICAgIGxvYWRlZDpcbiAgICAgICAgICAgIChjYXJ0RW50aXR5LmVycm9yIHx8IGNhcnRFbnRpdHkuc3VjY2VzcykgJiYgIWNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgLy8gd2Ugd2FudCB0byBlbWl0IGVtcHR5IGNhcnRzIGV2ZW4gaWYgdGhvc2UgYXJlIG5vdCBzdGFibGVcbiAgICAgIC8vIG9uIG1lcmdlIGNhcnQgYWN0aW9uIHdlIHdhbnQgdG8gc3dpdGNoIHRvIGVtcHR5IGNhcnQgc28gbm8gb25lIHdvdWxkIHVzZSBvbGQgY2FydElkIHdoaWNoIGNhbiBiZSBhbHJlYWR5IG9ic29sZXRlXG4gICAgICAvLyBzbyBvbiBtZXJnZSBhY3Rpb24gdGhlIHJlc3VsdGluZyBzdHJlYW0gbG9va3MgbGlrZSB0aGlzOiBvbGRfY2FydCAtPiB7fSAtPiBuZXdfY2FydFxuICAgICAgZmlsdGVyKCh7IGlzU3RhYmxlLCBjYXJ0IH0pID0+IGlzU3RhYmxlIHx8IHRoaXMuaXNFbXB0eShjYXJ0KSksXG4gICAgICB0YXAoKHsgY2FydCwgY2FydElkLCBsb2FkZWQsIGlzU3RhYmxlIH0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU3RhYmxlICYmXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KGNhcnQpICYmXG4gICAgICAgICAgIWxvYWRlZCAmJlxuICAgICAgICAgIGNhcnRJZCAhPT0gRlJFU0hfQ0FSVF9JRFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQoY2FydElkKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHsgY2FydCB9KSA9PiAoY2FydCA/IGNhcnQgOiB7fSkpLFxuICAgICAgdGFwKGNhcnQgPT4ge1xuICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgIHRoaXMuY2FydFVzZXIgPSBjYXJ0LnVzZXI7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnRcbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0IGlkXG4gICAqL1xuICBnZXRBY3RpdmVDYXJ0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JC5waXBlKFxuICAgICAgbWFwKGNhcnQgPT4gZ2V0Q2FydElkQnlVc2VySWQoY2FydCwgdGhpcy51c2VySWQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyaWVzXG4gICAqL1xuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cmllcyhjYXJ0SWQpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIGNhcnQgaXMgc3RhYmxlIChub3QgbG9hZGluZyBhbmQgbm90IHBlbmRpbmcgcHJvY2Vzc2VzIG9uIGNhcnQpXG4gICAqL1xuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gRGVib3VuY2UgaXMgdXNlZCBoZXJlLCB0byBhdm9pZCBmbGlja2VyaW5nIHdoZW4gd2Ugc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IGNhcnQgZW50aXRpZXMuXG4gICAgLy8gRm9yIGV4YW1wbGUgZHVyaW5nIGBhZGRFbnRyeWAgbWV0aG9kLiBXZSBtaWdodCB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQsIHNvIGBjdXJyZW50IGNhcnQgd2lsbCBiZSB0aGVuIGFjdGl2ZSBpZC5cbiAgICAvLyBBZnRlciBsb2FkIGZhaWxzIHdlIG1pZ2h0IGNyZWF0ZSBuZXcgY2FydCBzbyB3ZSBzd2l0Y2ggdG8gYGZyZXNoYCBjYXJ0IGVudGl0eSB1c2VkIHdoZW4gY3JlYXRpbmcgY2FydC5cbiAgICAvLyBBdCB0aGUgZW5kIHdlIGZpbmFsbHkgc3dpdGNoIHRvIGNhcnQgYGNvZGVgIGZvciBjYXJ0IGlkLiBCZXR3ZWVuIHRob3NlIHN3aXRjaGVzIGNhcnQgYGdldExvYWRlZGAgZnVuY3Rpb24gc2hvdWxkIG5vdCBmbGlja2VyLlxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmlzU3RhYmxlKGNhcnRJZCkpLFxuICAgICAgZGVib3VuY2Uoc3RhdGUgPT4gKHN0YXRlID8gdGltZXIoMCkgOiBFTVBUWSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKCFjYXJ0SWQgfHwgY2FydElkID09PSBPQ0NfQ0FSVF9JRF9DVVJSRU5UKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLmd1ZXN0Q2FydE1lcmdlKGNhcnRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZChjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubG9hZENhcnQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IGNhcnRJZCA/IGNhcnRJZCA6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY2FydElkICYmIGNhcnRJZCAhPT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW50cmllc0d1ZXN0TWVyZ2UoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSkge1xuICAgIGNvbnN0IGVudHJpZXNUb0FkZCA9IGNhcnRFbnRyaWVzLm1hcChlbnRyeSA9PiAoe1xuICAgICAgcHJvZHVjdENvZGU6IGVudHJ5LnByb2R1Y3QuY29kZSxcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KSk7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKS5zdWJzY3JpYmUoY2FydFN0YXRlID0+IHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyaWVzKFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIGVudHJpZXNUb0FkZFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnRGb3JHdWVzdE1lcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgICAgdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoZmlsdGVyKCgpID0+ICF0aGlzLmlzR3Vlc3RDYXJ0KCkpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0KFxuICAgIGN1c3RvbUNhcnRTZWxlY3RvciQ/OiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PlxuICApOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gRm9yIGd1ZXN0IGNhcnQgbWVyZ2Ugd2Ugd2FudCB0byBmaWx0ZXIgZ3Vlc3QgY2FydCBpbiB0aGUgd2hvbGUgc3RyZWFtXG4gICAgLy8gV2UgaGF2ZSB0byB3YWl0IHdpdGggbG9hZC9jcmVhdGUvYWRkRW50cnkgYWZ0ZXIgZ3Vlc3QgY2FydCB3aWxsIGJlIGRlbGV0ZWQuXG4gICAgLy8gVGhhdCdzIHdoeSB5b3UgY2FuIHByb3ZpZGUgY3VzdG9tIHNlbGVjdG9yIHdpdGggdGhpcyBmaWx0ZXIgYXBwbGllZC5cbiAgICBjb25zdCBjYXJ0U2VsZWN0b3IkID0gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgPyBjdXN0b21DYXJ0U2VsZWN0b3IkXG4gICAgICA6IHRoaXMuY2FydFNlbGVjdG9yJDtcblxuICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBBdm9pZCBsb2FkL2NyZWF0ZSBjYWxsIHdoZW4gdGhlcmUgYXJlIG5ldyBjYXJ0IGNyZWF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNhcnRJZCAhPT0gRlJFU0hfQ0FSVF9JRCksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgIC8vIFRyeSB0byBsb2FkIHRoZSBjYXJ0LCBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgYmVlbiBjcmVhdGVkIG9uIGFub3RoZXIgZGV2aWNlIGJldHdlZW4gb3VyIGxvZ2luIGFuZCBhZGQgZW50cnkgY2FsbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkgJiZcbiAgICAgICAgICB0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBjcmVhdGUgY2FydCBjYW4gaGFwcGVuIHRvIGFub255bW91cyB1c2VyIGlmIGl0IGlzIG5vdCBlbXB0eSBvciB0byBhbnkgb3RoZXIgdXNlciBpZiBpdCBpcyBsb2FkZWQgYW5kIGVtcHR5XG4gICAgICBmaWx0ZXIoXG4gICAgICAgIGNhcnRTdGF0ZSA9PlxuICAgICAgICAgIHRoaXMudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfHxcbiAgICAgICAgICAoY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKVxuICAgICAgKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0U2VsZWN0b3IkO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICBmaWx0ZXIoY2FydFN0YXRlID0+IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvciksXG4gICAgICAvLyB3YWl0IGZvciBhY3RpdmUgY2FydCBpZCB0byBwb2ludCB0byBjb2RlL2d1aWQgdG8gYXZvaWQgc29tZSB3b3JrIG9uIGZyZXNoIGVudGl0eVxuICAgICAgZmlsdGVyKCgpID0+IHRoaXMuY2FydElkICE9PSBGUkVTSF9DQVJUX0lEKSxcbiAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBlbnRyeSB0byBhY3RpdmUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydCgpLnN1YnNjcmliZShjYXJ0U3RhdGUgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBxdWFudGl0eVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5XG4gICAqL1xuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeS5lbnRyeU51bWJlclxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJ5KGNhcnRJZCwgcHJvZHVjdENvZGUpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKi9cbiAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hc3NpZ25FbWFpbCh0aGlzLmNhcnRJZCwgdGhpcy51c2VySWQsIGVtYWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXNzaWduZWQgdXNlciB0byBjYXJ0XG4gICAqL1xuICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoY2FydCA9PiBjYXJ0LnVzZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICovXG4gIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnRVc2VyICYmXG4gICAgICAodGhpcy5jYXJ0VXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwoXG4gICAgICAgICAgdGhpcy5jYXJ0VXNlci51aWRcbiAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgIC5qb2luKCd8JylcbiAgICAgICAgKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydEVudHJpZXMgOiBsaXN0IG9mIGVudHJpZXMgdG8gYWRkIChPcmRlckVudHJ5W10pXG4gICAqL1xuICBhZGRFbnRyaWVzKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pOiB2b2lkIHtcbiAgICBjYXJ0RW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuYWRkRW50cnkoZW50cnkucHJvZHVjdC5jb2RlLCBlbnRyeS5xdWFudGl0eSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLm1hdGNoKEVNQUlMX1BBVFRFUk4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUT0RPOiBSZW1vdmUgb25jZSBiYWNrZW5kIGlzIHVwZGF0ZWRcbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICovXG4gIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgICB0aGlzLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoZW50cmllcyA9PiB7XG4gICAgICAgIGNhcnRFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmRlbGV0ZUNhcnQoY2FydElkLCBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpO1xuXG4gICAgdGhpcy5hZGRFbnRyaWVzR3Vlc3RNZXJnZShjYXJ0RW50cmllcyk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==