import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, Subscription, timer } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
import { MultiCartSelectors } from '../store/selectors/index';
import { getCartIdByUserId, isTempCartId } from '../utils/utils';
import { MultiCartService } from './multi-cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "./multi-cart.service";
var ActiveCartService = /** @class */ (function () {
    function ActiveCartService(store, authService, multiCartService) {
        var _this = this;
        this.store = store;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.subscription = new Subscription();
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.activeCartId$ = this.store.pipe(select(MultiCartSelectors.getActiveCartId), map(function (cartId) {
            if (!cartId) {
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        }));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap(function (cartId) { return _this.multiCartService.getCartEntity(cartId); }));
        this.initActiveCart();
    }
    ActiveCartService.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ActiveCartService.prototype.initActiveCart = function () {
        var _this = this;
        this.subscription.add(this.authService.getOccUserId().subscribe(function (userId) {
            _this.userId = userId;
            if (_this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (_this.isJustLoggedIn(userId)) {
                    _this.loadOrMerge(_this.cartId);
                }
            }
            _this.previousUserId = userId;
        }));
        this.subscription.add(this.activeCartId$.subscribe(function (cartId) {
            _this.cartId = cartId;
        }));
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map(function (_a) {
            var _b = __read(_a, 2), cartEntity = _b[0], activeCartId = _b[1];
            return {
                cart: cartEntity.value,
                cartId: activeCartId,
                isStable: !cartEntity.loading && cartEntity.processesCount === 0,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), 
        // we want to emit empty carts even if those are not stable
        // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
        // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
        filter(function (_a) {
            var isStable = _a.isStable, cart = _a.cart;
            return isStable || _this.isEmpty(cart);
        }), tap(function (_a) {
            var cart = _a.cart, cartId = _a.cartId, loaded = _a.loaded, isStable = _a.isStable;
            if (isStable &&
                _this.isEmpty(cart) &&
                !loaded &&
                !isTempCartId(cartId)) {
                _this.load(cartId);
            }
        }), map(function (_a) {
            var cart = _a.cart;
            return (cart ? cart : {});
        }), tap(function (cart) {
            if (cart) {
                _this.cartUser = cart.user;
            }
        }), distinctUntilChanged(), shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Returns active cart
     */
    ActiveCartService.prototype.getActive = function () {
        return this.activeCart$;
    };
    /**
     * Returns active cart id
     */
    ActiveCartService.prototype.getActiveCartId = function () {
        var _this = this;
        return this.activeCart$.pipe(map(function (cart) { return getCartIdByUserId(cart, _this.userId); }), distinctUntilChanged());
    };
    /**
     * Returns cart entries
     */
    ActiveCartService.prototype.getEntries = function () {
        var _this = this;
        return this.activeCartId$.pipe(switchMap(function (cartId) { return _this.multiCartService.getEntries(cartId); }), distinctUntilChanged());
    };
    /**
     * Returns cart loading state
     */
    ActiveCartService.prototype.getLoading = function () {
        return this.cartSelector$.pipe(map(function (cartEntity) { return cartEntity.loading; }), distinctUntilChanged());
    };
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     */
    ActiveCartService.prototype.isStable = function () {
        var _this = this;
        // Debounce is used here, to avoid flickering when we switch between different cart entities.
        // For example during `addEntry` method. We might try to load current cart, so `current cart will be then active id.
        // After load fails we might create new cart so we switch to `temp-${uuid}` cart entity used when creating cart.
        // At the end we finally switch to cart `code` for cart id. Between those switches cart `isStable` function should not flicker.
        return this.activeCartId$.pipe(switchMap(function (cartId) { return _this.multiCartService.isStable(cartId); }), debounce(function (state) { return (state ? timer(0) : EMPTY); }), distinctUntilChanged());
    };
    ActiveCartService.prototype.loadOrMerge = function (cartId) {
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
    ActiveCartService.prototype.load = function (cartId) {
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
    ActiveCartService.prototype.addEntriesGuestMerge = function (cartEntries) {
        var _this = this;
        var entriesToAdd = cartEntries.map(function (entry) { return ({
            productCode: entry.product.code,
            quantity: entry.quantity,
        }); });
        this.requireLoadedCartForGuestMerge().subscribe(function (cartState) {
            _this.multiCartService.addEntries(_this.userId, getCartIdByUserId(cartState.value, _this.userId), entriesToAdd);
        });
    };
    ActiveCartService.prototype.requireLoadedCartForGuestMerge = function () {
        var _this = this;
        return this.requireLoadedCart(this.cartSelector$.pipe(filter(function () { return !_this.isGuestCart(); })));
    };
    ActiveCartService.prototype.isCartCreating = function (cartState) {
        // cart creating is always represented with loading flags
        // when all loading flags are false it means that we restored wrong cart id
        // could happen on context change or reload right in the middle on cart create call
        return (isTempCartId(this.cartId) &&
            (cartState.loading || cartState.success || cartState.error));
    };
    ActiveCartService.prototype.requireLoadedCart = function (customCartSelector$) {
        var _this = this;
        // For guest cart merge we want to filter guest cart in the whole stream
        // We have to wait with load/create/addEntry after guest cart will be deleted.
        // That's why you can provide custom selector with this filter applied.
        var cartSelector$ = customCartSelector$
            ? customCartSelector$
            : this.cartSelector$;
        return cartSelector$.pipe(filter(function (cartState) { return !cartState.loading; }), 
        // Avoid load/create call when there are new cart creating at the moment
        filter(function (cartState) { return !_this.isCartCreating(cartState); }), take(1), switchMap(function (cartState) {
            // Try to load the cart, because it might have been created on another device between our login and add entry call
            if (_this.isEmpty(cartState.value) &&
                _this.userId !== OCC_USER_ID_ANONYMOUS) {
                _this.load(undefined);
            }
            return cartSelector$;
        }), filter(function (cartState) { return !cartState.loading; }), 
        // create cart can happen to anonymous user if it is not empty or to any other user if it is loaded and empty
        filter(function (cartState) {
            return _this.userId === OCC_USER_ID_ANONYMOUS ||
                cartState.success ||
                cartState.error;
        }), take(1), switchMap(function (cartState) {
            if (_this.isEmpty(cartState.value)) {
                _this.multiCartService.createCart({
                    userId: _this.userId,
                    extraData: {
                        active: true,
                    },
                });
            }
            return cartSelector$;
        }), filter(function (cartState) { return !cartState.loading; }), filter(function (cartState) { return cartState.success || cartState.error; }), 
        // wait for active cart id to point to code/guid to avoid some work on temp cart entity
        filter(function (cartState) { return !_this.isCartCreating(cartState); }), filter(function (cartState) { return !_this.isEmpty(cartState.value); }), take(1));
    };
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     */
    ActiveCartService.prototype.addEntry = function (productCode, quantity) {
        var _this = this;
        this.requireLoadedCart().subscribe(function (cartState) {
            _this.multiCartService.addEntry(_this.userId, getCartIdByUserId(cartState.value, _this.userId), productCode, quantity);
        });
    };
    /**
     * Remove entry
     *
     * @param entry
     */
    ActiveCartService.prototype.removeEntry = function (entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    };
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    ActiveCartService.prototype.updateEntry = function (entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    };
    /**
     * Returns cart entry
     *
     * @param productCode
     */
    ActiveCartService.prototype.getEntry = function (productCode) {
        var _this = this;
        return this.activeCartId$.pipe(switchMap(function (cartId) {
            return _this.multiCartService.getEntry(cartId, productCode);
        }), distinctUntilChanged());
    };
    /**
     * Assign email to cart
     *
     * @param email
     */
    ActiveCartService.prototype.addEmail = function (email) {
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    };
    /**
     * Get assigned user to cart
     */
    ActiveCartService.prototype.getAssignedUser = function () {
        return this.getActive().pipe(map(function (cart) { return cart.user; }));
    };
    /**
     * Returns true for guest cart
     */
    ActiveCartService.prototype.isGuestCart = function () {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid.split('|').slice(1).join('|'))));
    };
    /**
     * Add multiple entries to a cart
     *
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    ActiveCartService.prototype.addEntries = function (cartEntries) {
        var _this = this;
        cartEntries.forEach(function (entry) {
            _this.addEntry(entry.product.code, entry.quantity);
        });
    };
    ActiveCartService.prototype.isEmail = function (str) {
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
    ActiveCartService.prototype.guestCartMerge = function (cartId) {
        var cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe(function (entries) {
            cartEntries = entries;
        });
        this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
        this.addEntriesGuestMerge(cartEntries);
    };
    ActiveCartService.prototype.isEmpty = function (cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    };
    ActiveCartService.prototype.isJustLoggedIn = function (userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    };
    ActiveCartService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: MultiCartService }
    ]; };
    ActiveCartService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActiveCartService_Factory() { return new ActiveCartService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.MultiCartService)); }, token: ActiveCartService, providedIn: "root" });
    ActiveCartService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ActiveCartService);
    return ActiveCartService;
}());
export { ActiveCartService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFLeEQ7SUF3QkUsMkJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSDlDLGlCQU1DO1FBTFcsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTFCN0IsbUNB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Ozs7SUEzQm5DLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBMFo3Qjs0QkEzYkQ7Q0EyYkMsQUExWkQsSUEwWkM7U0ExWlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwvcmVnZXgtcGF0dGVybic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCwgaXNUZW1wQ2FydElkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhcnRTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSB1c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgY2FydElkO1xuICBwcml2YXRlIGNhcnRVc2VyOiBVc2VyO1xuXG4gIHByaXZhdGUgYWN0aXZlQ2FydElkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldEFjdGl2ZUNhcnRJZCksXG4gICAgbWFwKChjYXJ0SWQpID0+IHtcbiAgICAgIGlmICghY2FydElkKSB7XG4gICAgICAgIHJldHVybiBPQ0NfQ0FSVF9JRF9DVVJSRU5UO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcnRJZDtcbiAgICB9KVxuICApO1xuICBwcml2YXRlIGNhcnRTZWxlY3RvciQgPSB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoKGNhcnRJZCkgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnRFbnRpdHkoY2FydElkKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmluaXRBY3RpdmVDYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRBY3RpdmVDYXJ0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkuc3Vic2NyaWJlKCh1c2VySWQpID0+IHtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIGlmICh0aGlzLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSh0aGlzLmNhcnRJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmFjdGl2ZUNhcnRJZCQuc3Vic2NyaWJlKChjYXJ0SWQpID0+IHtcbiAgICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmFjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQpLFxuICAgICAgbWFwKChbY2FydEVudGl0eSwgYWN0aXZlQ2FydElkXTogW1Byb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+LCBzdHJpbmddKToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgaXNTdGFibGU6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgY2FydElkOiBhY3RpdmVDYXJ0SWQsXG4gICAgICAgICAgaXNTdGFibGU6ICFjYXJ0RW50aXR5LmxvYWRpbmcgJiYgY2FydEVudGl0eS5wcm9jZXNzZXNDb3VudCA9PT0gMCxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIC8vIHdlIHdhbnQgdG8gZW1pdCBlbXB0eSBjYXJ0cyBldmVuIGlmIHRob3NlIGFyZSBub3Qgc3RhYmxlXG4gICAgICAvLyBvbiBtZXJnZSBjYXJ0IGFjdGlvbiB3ZSB3YW50IHRvIHN3aXRjaCB0byBlbXB0eSBjYXJ0IHNvIG5vIG9uZSB3b3VsZCB1c2Ugb2xkIGNhcnRJZCB3aGljaCBjYW4gYmUgYWxyZWFkeSBvYnNvbGV0ZVxuICAgICAgLy8gc28gb24gbWVyZ2UgYWN0aW9uIHRoZSByZXN1bHRpbmcgc3RyZWFtIGxvb2tzIGxpa2UgdGhpczogb2xkX2NhcnQgLT4ge30gLT4gbmV3X2NhcnRcbiAgICAgIGZpbHRlcigoeyBpc1N0YWJsZSwgY2FydCB9KSA9PiBpc1N0YWJsZSB8fCB0aGlzLmlzRW1wdHkoY2FydCkpLFxuICAgICAgdGFwKCh7IGNhcnQsIGNhcnRJZCwgbG9hZGVkLCBpc1N0YWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1N0YWJsZSAmJlxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0KSAmJlxuICAgICAgICAgICFsb2FkZWQgJiZcbiAgICAgICAgICAhaXNUZW1wQ2FydElkKGNhcnRJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKGNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCh7IGNhcnQgfSkgPT4gKGNhcnQgPyBjYXJ0IDoge30pKSxcbiAgICAgIHRhcCgoY2FydCkgPT4ge1xuICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgIHRoaXMuY2FydFVzZXIgPSBjYXJ0LnVzZXI7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnRcbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0IGlkXG4gICAqL1xuICBnZXRBY3RpdmVDYXJ0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JC5waXBlKFxuICAgICAgbWFwKChjYXJ0KSA9PiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0LCB0aGlzLnVzZXJJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJpZXNcbiAgICovXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNhcnRJZCkgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoY2FydElkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoKGNhcnRFbnRpdHkpID0+IGNhcnRFbnRpdHkubG9hZGluZyksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgKi9cbiAgaXNTdGFibGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gRGVib3VuY2UgaXMgdXNlZCBoZXJlLCB0byBhdm9pZCBmbGlja2VyaW5nIHdoZW4gd2Ugc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IGNhcnQgZW50aXRpZXMuXG4gICAgLy8gRm9yIGV4YW1wbGUgZHVyaW5nIGBhZGRFbnRyeWAgbWV0aG9kLiBXZSBtaWdodCB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQsIHNvIGBjdXJyZW50IGNhcnQgd2lsbCBiZSB0aGVuIGFjdGl2ZSBpZC5cbiAgICAvLyBBZnRlciBsb2FkIGZhaWxzIHdlIG1pZ2h0IGNyZWF0ZSBuZXcgY2FydCBzbyB3ZSBzd2l0Y2ggdG8gYHRlbXAtJHt1dWlkfWAgY2FydCBlbnRpdHkgdXNlZCB3aGVuIGNyZWF0aW5nIGNhcnQuXG4gICAgLy8gQXQgdGhlIGVuZCB3ZSBmaW5hbGx5IHN3aXRjaCB0byBjYXJ0IGBjb2RlYCBmb3IgY2FydCBpZC4gQmV0d2VlbiB0aG9zZSBzd2l0Y2hlcyBjYXJ0IGBpc1N0YWJsZWAgZnVuY3Rpb24gc2hvdWxkIG5vdCBmbGlja2VyLlxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuaXNTdGFibGUoY2FydElkKSksXG4gICAgICBkZWJvdW5jZSgoc3RhdGUpID0+IChzdGF0ZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghY2FydElkIHx8IGNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZShjYXJ0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubWVyZ2VUb0N1cnJlbnRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQgPyBjYXJ0SWQgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhcnRJZCAmJiBjYXJ0SWQgIT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pIHtcbiAgICBjb25zdCBlbnRyaWVzVG9BZGQgPSBjYXJ0RW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgcHJvZHVjdENvZGU6IGVudHJ5LnByb2R1Y3QuY29kZSxcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KSk7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKS5zdWJzY3JpYmUoKGNhcnRTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgZW50cmllc1RvQWRkXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoXG4gICAgICB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShmaWx0ZXIoKCkgPT4gIXRoaXMuaXNHdWVzdENhcnQoKSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSB7XG4gICAgLy8gY2FydCBjcmVhdGluZyBpcyBhbHdheXMgcmVwcmVzZW50ZWQgd2l0aCBsb2FkaW5nIGZsYWdzXG4gICAgLy8gd2hlbiBhbGwgbG9hZGluZyBmbGFncyBhcmUgZmFsc2UgaXQgbWVhbnMgdGhhdCB3ZSByZXN0b3JlZCB3cm9uZyBjYXJ0IGlkXG4gICAgLy8gY291bGQgaGFwcGVuIG9uIGNvbnRleHQgY2hhbmdlIG9yIHJlbG9hZCByaWdodCBpbiB0aGUgbWlkZGxlIG9uIGNhcnQgY3JlYXRlIGNhbGxcbiAgICByZXR1cm4gKFxuICAgICAgaXNUZW1wQ2FydElkKHRoaXMuY2FydElkKSAmJlxuICAgICAgKGNhcnRTdGF0ZS5sb2FkaW5nIHx8IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydChcbiAgICBjdXN0b21DYXJ0U2VsZWN0b3IkPzogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj5cbiAgKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIEZvciBndWVzdCBjYXJ0IG1lcmdlIHdlIHdhbnQgdG8gZmlsdGVyIGd1ZXN0IGNhcnQgaW4gdGhlIHdob2xlIHN0cmVhbVxuICAgIC8vIFdlIGhhdmUgdG8gd2FpdCB3aXRoIGxvYWQvY3JlYXRlL2FkZEVudHJ5IGFmdGVyIGd1ZXN0IGNhcnQgd2lsbCBiZSBkZWxldGVkLlxuICAgIC8vIFRoYXQncyB3aHkgeW91IGNhbiBwcm92aWRlIGN1c3RvbSBzZWxlY3RvciB3aXRoIHRoaXMgZmlsdGVyIGFwcGxpZWQuXG4gICAgY29uc3QgY2FydFNlbGVjdG9yJCA9IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgID8gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgOiB0aGlzLmNhcnRTZWxlY3RvciQ7XG5cbiAgICByZXR1cm4gY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBBdm9pZCBsb2FkL2NyZWF0ZSBjYWxsIHdoZW4gdGhlcmUgYXJlIG5ldyBjYXJ0IGNyZWF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICAgIGZpbHRlcigoY2FydFN0YXRlKSA9PiAhdGhpcy5pc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKGNhcnRTdGF0ZSkgPT4ge1xuICAgICAgICAvLyBUcnkgdG8gbG9hZCB0aGUgY2FydCwgYmVjYXVzZSBpdCBtaWdodCBoYXZlIGJlZW4gY3JlYXRlZCBvbiBhbm90aGVyIGRldmljZSBiZXR3ZWVuIG91ciBsb2dpbiBhbmQgYWRkIGVudHJ5IGNhbGxcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpICYmXG4gICAgICAgICAgdGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBjcmVhdGUgY2FydCBjYW4gaGFwcGVuIHRvIGFub255bW91cyB1c2VyIGlmIGl0IGlzIG5vdCBlbXB0eSBvciB0byBhbnkgb3RoZXIgdXNlciBpZiBpdCBpcyBsb2FkZWQgYW5kIGVtcHR5XG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChjYXJ0U3RhdGUpID0+XG4gICAgICAgICAgdGhpcy51c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB8fFxuICAgICAgICAgIGNhcnRTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgY2FydFN0YXRlLmVycm9yXG4gICAgICApLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoY2FydFN0YXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5jcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKSxcbiAgICAgIC8vIHdhaXQgZm9yIGFjdGl2ZSBjYXJ0IGlkIHRvIHBvaW50IHRvIGNvZGUvZ3VpZCB0byBhdm9pZCBzb21lIHdvcmsgb24gdGVtcCBjYXJ0IGVudGl0eVxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICF0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gYWN0aXZlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoKS5zdWJzY3JpYmUoKGNhcnRTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBxdWFudGl0eVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5XG4gICAqL1xuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeS5lbnRyeU51bWJlclxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PlxuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cnkoY2FydElkLCBwcm9kdWN0Q29kZSlcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYXNzaWduRW1haWwodGhpcy5jYXJ0SWQsIHRoaXMudXNlcklkLCBlbWFpbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFzc2lnbmVkIHVzZXIgdG8gY2FydFxuICAgKi9cbiAgZ2V0QXNzaWduZWRVc2VyKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZSgpLnBpcGUobWFwKChjYXJ0KSA9PiBjYXJ0LnVzZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICovXG4gIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnRVc2VyICYmXG4gICAgICAodGhpcy5jYXJ0VXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwodGhpcy5jYXJ0VXNlci51aWQuc3BsaXQoJ3wnKS5zbGljZSgxKS5qb2luKCd8JykpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICovXG4gIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQge1xuICAgIGNhcnRFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICB0aGlzLmFkZEVudHJ5KGVudHJ5LnByb2R1Y3QuY29kZSwgZW50cnkucXVhbnRpdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaChFTUFJTF9QQVRURVJOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgYmFja2VuZCBpcyB1cGRhdGVkXG4gIC8qKlxuICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAqL1xuICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W107XG4gICAgdGhpcy5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNhcnRFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmRlbGV0ZUNhcnQoY2FydElkLCBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpO1xuXG4gICAgdGhpcy5hZGRFbnRyaWVzR3Vlc3RNZXJnZShjYXJ0RW50cmllcyk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==