import { __decorate, __read } from "tslib";
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
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.activeCartId$ = this.store.pipe(select(MultiCartSelectors.getActiveCartId), map(function (cartId) {
            if (!cartId) {
                return OCC_CART_ID_CURRENT;
            }
            return cartId;
        }));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap(function (cartId) { return _this.multiCartService.getCartEntity(cartId); }));
        this.authService.getOccUserId().subscribe(function (userId) {
            _this.userId = userId;
            if (_this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (_this.isJustLoggedIn(userId)) {
                    _this.loadOrMerge(_this.cartId);
                }
            }
            _this.previousUserId = userId;
        });
        this.activeCartId$.subscribe(function (cartId) {
            _this.cartId = cartId;
        });
        this.initActiveCart();
    }
    ActiveCartService.prototype.initActiveCart = function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFDTCxRQUFRLEVBQ1Isb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUt4RDtJQXVCRSwyQkFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixnQkFBa0M7UUFIOUMsaUJBb0JDO1FBbkJXLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF6QjdCLG1DQUE4QixHQUM3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XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfR1VFU1QsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvcHJvY2Vzc2VzLWxvYWRlci9wcm9jZXNzZXMtbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4gfSBmcm9tICcuLi8uLi91dGlsL3JlZ2V4LXBhdHRlcm4nO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQsIGlzVGVtcENhcnRJZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICBwcml2YXRlIGFjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIHByaXZhdGUgdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICBwcml2YXRlIGNhcnRJZDtcbiAgcHJpdmF0ZSBjYXJ0VXNlcjogVXNlcjtcblxuICBwcml2YXRlIGFjdGl2ZUNhcnRJZCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0SWQpLFxuICAgIG1hcCgoY2FydElkKSA9PiB7XG4gICAgICBpZiAoIWNhcnRJZCkge1xuICAgICAgICByZXR1cm4gT0NDX0NBUlRfSURfQ1VSUkVOVDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJ0SWQ7XG4gICAgfSlcbiAgKTtcbiAgcHJpdmF0ZSBjYXJ0U2VsZWN0b3IkID0gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgc3dpdGNoTWFwKChjYXJ0SWQpID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KGNhcnRJZCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5zdWJzY3JpYmUoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICBpZiAodGhpcy5pc0p1c3RMb2dnZWRJbih1c2VySWQpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSh0aGlzLmNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2ZUNhcnRJZCQuc3Vic2NyaWJlKChjYXJ0SWQpID0+IHtcbiAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0QWN0aXZlQ2FydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QWN0aXZlQ2FydCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGl2ZUNhcnRJZCQpLFxuICAgICAgbWFwKChbY2FydEVudGl0eSwgYWN0aXZlQ2FydElkXTogW1Byb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+LCBzdHJpbmddKToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgICAgaXNTdGFibGU6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgY2FydElkOiBhY3RpdmVDYXJ0SWQsXG4gICAgICAgICAgaXNTdGFibGU6ICFjYXJ0RW50aXR5LmxvYWRpbmcgJiYgY2FydEVudGl0eS5wcm9jZXNzZXNDb3VudCA9PT0gMCxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIC8vIHdlIHdhbnQgdG8gZW1pdCBlbXB0eSBjYXJ0cyBldmVuIGlmIHRob3NlIGFyZSBub3Qgc3RhYmxlXG4gICAgICAvLyBvbiBtZXJnZSBjYXJ0IGFjdGlvbiB3ZSB3YW50IHRvIHN3aXRjaCB0byBlbXB0eSBjYXJ0IHNvIG5vIG9uZSB3b3VsZCB1c2Ugb2xkIGNhcnRJZCB3aGljaCBjYW4gYmUgYWxyZWFkeSBvYnNvbGV0ZVxuICAgICAgLy8gc28gb24gbWVyZ2UgYWN0aW9uIHRoZSByZXN1bHRpbmcgc3RyZWFtIGxvb2tzIGxpa2UgdGhpczogb2xkX2NhcnQgLT4ge30gLT4gbmV3X2NhcnRcbiAgICAgIGZpbHRlcigoeyBpc1N0YWJsZSwgY2FydCB9KSA9PiBpc1N0YWJsZSB8fCB0aGlzLmlzRW1wdHkoY2FydCkpLFxuICAgICAgdGFwKCh7IGNhcnQsIGNhcnRJZCwgbG9hZGVkLCBpc1N0YWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1N0YWJsZSAmJlxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0KSAmJlxuICAgICAgICAgICFsb2FkZWQgJiZcbiAgICAgICAgICAhaXNUZW1wQ2FydElkKGNhcnRJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKGNhcnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCh7IGNhcnQgfSkgPT4gKGNhcnQgPyBjYXJ0IDoge30pKSxcbiAgICAgIHRhcCgoY2FydCkgPT4ge1xuICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgIHRoaXMuY2FydFVzZXIgPSBjYXJ0LnVzZXI7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWN0aXZlIGNhcnRcbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0IGlkXG4gICAqL1xuICBnZXRBY3RpdmVDYXJ0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0JC5waXBlKFxuICAgICAgbWFwKChjYXJ0KSA9PiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0LCB0aGlzLnVzZXJJZCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJpZXNcbiAgICovXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNhcnRJZCkgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoY2FydElkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgZ2V0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoKGNhcnRFbnRpdHkpID0+IGNhcnRFbnRpdHkubG9hZGluZyksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgKi9cbiAgaXNTdGFibGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gRGVib3VuY2UgaXMgdXNlZCBoZXJlLCB0byBhdm9pZCBmbGlja2VyaW5nIHdoZW4gd2Ugc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IGNhcnQgZW50aXRpZXMuXG4gICAgLy8gRm9yIGV4YW1wbGUgZHVyaW5nIGBhZGRFbnRyeWAgbWV0aG9kLiBXZSBtaWdodCB0cnkgdG8gbG9hZCBjdXJyZW50IGNhcnQsIHNvIGBjdXJyZW50IGNhcnQgd2lsbCBiZSB0aGVuIGFjdGl2ZSBpZC5cbiAgICAvLyBBZnRlciBsb2FkIGZhaWxzIHdlIG1pZ2h0IGNyZWF0ZSBuZXcgY2FydCBzbyB3ZSBzd2l0Y2ggdG8gYHRlbXAtJHt1dWlkfWAgY2FydCBlbnRpdHkgdXNlZCB3aGVuIGNyZWF0aW5nIGNhcnQuXG4gICAgLy8gQXQgdGhlIGVuZCB3ZSBmaW5hbGx5IHN3aXRjaCB0byBjYXJ0IGBjb2RlYCBmb3IgY2FydCBpZC4gQmV0d2VlbiB0aG9zZSBzd2l0Y2hlcyBjYXJ0IGBpc1N0YWJsZWAgZnVuY3Rpb24gc2hvdWxkIG5vdCBmbGlja2VyLlxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuaXNTdGFibGUoY2FydElkKSksXG4gICAgICBkZWJvdW5jZSgoc3RhdGUpID0+IChzdGF0ZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT3JNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICghY2FydElkIHx8IGNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy5ndWVzdENhcnRNZXJnZShjYXJ0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UubWVyZ2VUb0N1cnJlbnRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQgPyBjYXJ0SWQgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhcnRJZCAmJiBjYXJ0SWQgIT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVudHJpZXNHdWVzdE1lcmdlKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pIHtcbiAgICBjb25zdCBlbnRyaWVzVG9BZGQgPSBjYXJ0RW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgcHJvZHVjdENvZGU6IGVudHJ5LnByb2R1Y3QuY29kZSxcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KSk7XG4gICAgdGhpcy5yZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKS5zdWJzY3JpYmUoKGNhcnRTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoXG4gICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0U3RhdGUudmFsdWUsIHRoaXMudXNlcklkKSxcbiAgICAgICAgZW50cmllc1RvQWRkXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoXG4gICAgICB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShmaWx0ZXIoKCkgPT4gIXRoaXMuaXNHdWVzdENhcnQoKSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYXJ0Q3JlYXRpbmcoY2FydFN0YXRlKSB7XG4gICAgLy8gY2FydCBjcmVhdGluZyBpcyBhbHdheXMgcmVwcmVzZW50ZWQgd2l0aCBsb2FkaW5nIGZsYWdzXG4gICAgLy8gd2hlbiBhbGwgbG9hZGluZyBmbGFncyBhcmUgZmFsc2UgaXQgbWVhbnMgdGhhdCB3ZSByZXN0b3JlZCB3cm9uZyBjYXJ0IGlkXG4gICAgLy8gY291bGQgaGFwcGVuIG9uIGNvbnRleHQgY2hhbmdlIG9yIHJlbG9hZCByaWdodCBpbiB0aGUgbWlkZGxlIG9uIGNhcnQgY3JlYXRlIGNhbGxcbiAgICByZXR1cm4gKFxuICAgICAgaXNUZW1wQ2FydElkKHRoaXMuY2FydElkKSAmJlxuICAgICAgKGNhcnRTdGF0ZS5sb2FkaW5nIHx8IGNhcnRTdGF0ZS5zdWNjZXNzIHx8IGNhcnRTdGF0ZS5lcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydChcbiAgICBjdXN0b21DYXJ0U2VsZWN0b3IkPzogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj5cbiAgKTogT2JzZXJ2YWJsZTxQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4ge1xuICAgIC8vIEZvciBndWVzdCBjYXJ0IG1lcmdlIHdlIHdhbnQgdG8gZmlsdGVyIGd1ZXN0IGNhcnQgaW4gdGhlIHdob2xlIHN0cmVhbVxuICAgIC8vIFdlIGhhdmUgdG8gd2FpdCB3aXRoIGxvYWQvY3JlYXRlL2FkZEVudHJ5IGFmdGVyIGd1ZXN0IGNhcnQgd2lsbCBiZSBkZWxldGVkLlxuICAgIC8vIFRoYXQncyB3aHkgeW91IGNhbiBwcm92aWRlIGN1c3RvbSBzZWxlY3RvciB3aXRoIHRoaXMgZmlsdGVyIGFwcGxpZWQuXG4gICAgY29uc3QgY2FydFNlbGVjdG9yJCA9IGN1c3RvbUNhcnRTZWxlY3RvciRcbiAgICAgID8gY3VzdG9tQ2FydFNlbGVjdG9yJFxuICAgICAgOiB0aGlzLmNhcnRTZWxlY3RvciQ7XG5cbiAgICByZXR1cm4gY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBBdm9pZCBsb2FkL2NyZWF0ZSBjYWxsIHdoZW4gdGhlcmUgYXJlIG5ldyBjYXJ0IGNyZWF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICAgIGZpbHRlcigoY2FydFN0YXRlKSA9PiAhdGhpcy5pc0NhcnRDcmVhdGluZyhjYXJ0U3RhdGUpKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKGNhcnRTdGF0ZSkgPT4ge1xuICAgICAgICAvLyBUcnkgdG8gbG9hZCB0aGUgY2FydCwgYmVjYXVzZSBpdCBtaWdodCBoYXZlIGJlZW4gY3JlYXRlZCBvbiBhbm90aGVyIGRldmljZSBiZXR3ZWVuIG91ciBsb2dpbiBhbmQgYWRkIGVudHJ5IGNhbGxcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpICYmXG4gICAgICAgICAgdGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWQodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICAvLyBjcmVhdGUgY2FydCBjYW4gaGFwcGVuIHRvIGFub255bW91cyB1c2VyIGlmIGl0IGlzIG5vdCBlbXB0eSBvciB0byBhbnkgb3RoZXIgdXNlciBpZiBpdCBpcyBsb2FkZWQgYW5kIGVtcHR5XG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChjYXJ0U3RhdGUpID0+XG4gICAgICAgICAgdGhpcy51c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB8fFxuICAgICAgICAgIGNhcnRTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgY2FydFN0YXRlLmVycm9yXG4gICAgICApLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoY2FydFN0YXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5jcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydFNlbGVjdG9yJDtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICFjYXJ0U3RhdGUubG9hZGluZyksXG4gICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gY2FydFN0YXRlLnN1Y2Nlc3MgfHwgY2FydFN0YXRlLmVycm9yKSxcbiAgICAgIC8vIHdhaXQgZm9yIGFjdGl2ZSBjYXJ0IGlkIHRvIHBvaW50IHRvIGNvZGUvZ3VpZCB0byBhdm9pZCBzb21lIHdvcmsgb24gdGVtcCBjYXJ0IGVudGl0eVxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICF0aGlzLmlzQ2FydENyZWF0aW5nKGNhcnRTdGF0ZSkpLFxuICAgICAgZmlsdGVyKChjYXJ0U3RhdGUpID0+ICF0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSksXG4gICAgICB0YWtlKDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gYWN0aXZlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVxdWlyZUxvYWRlZENhcnQoKS5zdWJzY3JpYmUoKGNhcnRTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KFxuICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgZ2V0Q2FydElkQnlVc2VySWQoY2FydFN0YXRlLnZhbHVlLCB0aGlzLnVzZXJJZCksXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBxdWFudGl0eVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZW50cnlcbiAgICpcbiAgICogQHBhcmFtIGVudHJ5XG4gICAqL1xuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeS5lbnRyeU51bWJlclxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICovXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FydElkKSA9PlxuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cnkoY2FydElkLCBwcm9kdWN0Q29kZSlcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYXNzaWduRW1haWwodGhpcy5jYXJ0SWQsIHRoaXMudXNlcklkLCBlbWFpbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFzc2lnbmVkIHVzZXIgdG8gY2FydFxuICAgKi9cbiAgZ2V0QXNzaWduZWRVc2VyKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZSgpLnBpcGUobWFwKChjYXJ0KSA9PiBjYXJ0LnVzZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICovXG4gIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnRVc2VyICYmXG4gICAgICAodGhpcy5jYXJ0VXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwodGhpcy5jYXJ0VXNlci51aWQuc3BsaXQoJ3wnKS5zbGljZSgxKS5qb2luKCd8JykpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICovXG4gIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQge1xuICAgIGNhcnRFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICB0aGlzLmFkZEVudHJ5KGVudHJ5LnByb2R1Y3QuY29kZSwgZW50cnkucXVhbnRpdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaChFTUFJTF9QQVRURVJOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgYmFja2VuZCBpcyB1cGRhdGVkXG4gIC8qKlxuICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAqL1xuICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W107XG4gICAgdGhpcy5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNhcnRFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmRlbGV0ZUNhcnQoY2FydElkLCBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpO1xuXG4gICAgdGhpcy5hZGRFbnRyaWVzR3Vlc3RNZXJnZShjYXJ0RW50cmllcyk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==