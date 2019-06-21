/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { BaseSiteService } from '../../site-context/index';
import * as fromAction from '../store/actions';
import * as fromSelector from '../store/selectors';
import { ANONYMOUS_USERID, CartDataService } from './cart-data.service';
var CartService = /** @class */ (function () {
    function CartService(store, cartData, authService, baseSiteService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.baseSiteService = baseSiteService;
        this.init();
    }
    /**
     * @return {?}
     */
    CartService.prototype.getActive = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getCartContent));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getEntries));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getCartMergeComplete = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getCartMergeComplete));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getLoaded = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getLoaded));
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.init = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.pipe(select(fromSelector.getCartContent)).subscribe((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) {
            _this.cartData.cart = cart;
        }));
        combineLatest([
            this.baseSiteService.getActive(),
            this.authService.getUserToken(),
        ])
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), userToken = _b[1];
            return _this.cartData.userId !== userToken.userId;
        })))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), userToken = _b[1];
            _this.setUserId(userToken);
            _this.loadOrMerge();
        }));
        this.refresh();
    };
    /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    CartService.prototype.setUserId = /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    function (userToken) {
        if (Object.keys(userToken).length !== 0) {
            this.cartData.userId = userToken.userId;
        }
        else {
            this.cartData.userId = ANONYMOUS_USERID;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.loadOrMerge = /**
     * @protected
     * @return {?}
     */
    function () {
        this.cartData.getDetails = true;
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            if (!this.isCreated(this.cartData.cart)) {
                this.store.dispatch(new fromAction.LoadCart({
                    userId: this.cartData.userId,
                    cartId: 'current',
                }));
            }
            else {
                this.store.dispatch(new fromAction.MergeCart({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cart.guid,
                }));
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.refresh = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.pipe(select(fromSelector.getRefresh)).subscribe((/**
         * @param {?} refresh
         * @return {?}
         */
        function (refresh) {
            if (refresh) {
                _this.store.dispatch(new fromAction.LoadCart({
                    userId: _this.cartData.userId,
                    cartId: _this.cartData.cartId,
                    details: true,
                }));
            }
        }));
    };
    /**
     * @return {?}
     */
    CartService.prototype.loadDetails = /**
     * @return {?}
     */
    function () {
        this.cartData.getDetails = true;
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
                details: true,
            }));
        }
        else if (this.cartData.cartId) {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                details: true,
            }));
        }
    };
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.addEntry = /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (productCode, quantity) {
        var _this = this;
        this.store
            .pipe(select(fromSelector.getActiveCartState), tap((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            if (!_this.isCreated(cartState.value.content) && !cartState.loading) {
                _this.store.dispatch(new fromAction.CreateCart({ userId: _this.cartData.userId }));
            }
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return _this.isCreated(cartState.value.content); })), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.store.dispatch(new fromAction.AddEntry({
                userId: _this.cartData.userId,
                cartId: _this.cartData.cartId,
                productCode: productCode,
                quantity: quantity,
            }));
        }));
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CartService.prototype.removeEntry = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.store.dispatch(new fromAction.RemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber,
        }));
    };
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.updateEntry = /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (entryNumber, quantity) {
        if (+quantity > 0) {
            this.store.dispatch(new fromAction.UpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.store.dispatch(new fromAction.RemoveEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
            }));
        }
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    CartService.prototype.getEntry = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(fromSelector.getEntrySelectorFactory(productCode)));
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isCreated = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !!Object.keys(cart).length;
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isEmpty = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !cart.totalItems;
    };
    CartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService },
        { type: AuthService },
        { type: BaseSiteService }
    ]; };
    return CartService;
}());
export { CartService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.cartData;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    CartService.prototype.baseSiteService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sa0JBQWtCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEU7SUFFRSxxQkFDWSxLQUEyQixFQUMzQixRQUF5QixFQUN6QixXQUF3QixFQUN4QixlQUFnQztRQUhoQyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFFMUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELCtCQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lB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QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELDZCQUFPOzs7O0lBQVAsVUFBUSxJQUFVO1FBQ2hCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDOztnQkF2TEYsVUFBVTs7OztnQkFaTSxLQUFLO2dCQVVLLGVBQWU7Z0JBUGpDLFdBQVc7Z0JBR1gsZUFBZTs7SUE4THhCLGtCQUFDO0NBQUEsQUF4TEQsSUF3TEM7U0F2TFksV0FBVzs7Ozs7O0lBRXBCLDRCQUFxQzs7Ozs7SUFDckMsK0JBQW1DOzs7OztJQUNuQyxrQ0FBa0M7Ozs7O0lBQ2xDLHNDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21TZWxlY3RvciBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgQU5PTllNT1VTX1VTRVJJRCwgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWRhdGEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRDb250ZW50KSk7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldEVudHJpZXMpKTtcbiAgfVxuXG4gIGdldENhcnRNZXJnZUNvbXBsZXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRDYXJ0TWVyZ2VDb21wbGV0ZSkpO1xuICB9XG5cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRMb2FkZWQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRDb250ZW50KSkuc3Vic2NyaWJlKGNhcnQgPT4ge1xuICAgICAgdGhpcy5jYXJ0RGF0YS5jYXJ0ID0gY2FydDtcbiAgICB9KTtcblxuICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgIF0pXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChbLCB1c2VyVG9rZW5dKSA9PiB0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gdXNlclRva2VuLnVzZXJJZClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKFssIHVzZXJUb2tlbl0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRVc2VySWQodXNlclRva2VuKTtcbiAgICAgICAgdGhpcy5sb2FkT3JNZXJnZSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRVc2VySWQodXNlclRva2VuOiBVc2VyVG9rZW4pOiB2b2lkIHtcbiAgICBpZiAoT2JqZWN0LmtleXModXNlclRva2VuKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuY2FydERhdGEudXNlcklkID0gdXNlclRva2VuLnVzZXJJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0RGF0YS51c2VySWQgPSBBTk9OWU1PVVNfVVNFUklEO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBsb2FkT3JNZXJnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnREYXRhLmdldERldGFpbHMgPSB0cnVlO1xuICAgIC8vIGZvciBsb2dpbiB1c2VyLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4aXN0aW5nIGNhcnQsIHdlIHdpbGwgbG9hZCB0aGUgdXNlclxuICAgIC8vIGN1cnJlbnQgY2FydCBhbmQgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgY2FydFxuICAgIGlmICh0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gQU5PTllNT1VTX1VTRVJJRCkge1xuICAgICAgaWYgKCF0aGlzLmlzQ3JlYXRlZCh0aGlzLmNhcnREYXRhLmNhcnQpKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb24uTG9hZENhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogJ2N1cnJlbnQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9uLk1lcmdlQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuZ3VpZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldFJlZnJlc2gpKS5zdWJzY3JpYmUocmVmcmVzaCA9PiB7XG4gICAgICBpZiAocmVmcmVzaCkge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9uLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgICAgZGV0YWlsczogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9hZERldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0RGF0YS5nZXREZXRhaWxzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gQU5PTllNT1VTX1VTRVJJRCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21BY3Rpb24uTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCA/IHRoaXMuY2FydERhdGEuY2FydElkIDogJ2N1cnJlbnQnLFxuICAgICAgICAgIGRldGFpbHM6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jYXJ0RGF0YS5jYXJ0SWQpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQWN0aW9uLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgZGV0YWlsczogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKFxuICAgICAgICBzZWxlY3QoZnJvbVNlbGVjdG9yLmdldEFjdGl2ZUNhcnRTdGF0ZSksXG4gICAgICAgIHRhcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc0NyZWF0ZWQoY2FydFN0YXRlLnZhbHVlLmNvbnRlbnQpICYmICFjYXJ0U3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb24uQ3JlYXRlQ2FydCh7IHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiB0aGlzLmlzQ3JlYXRlZChjYXJ0U3RhdGUudmFsdWUuY29udGVudCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9uLkFkZEVudHJ5KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tQWN0aW9uLlJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICgrcXVhbnRpdHkgPiAwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUFjdGlvbi5VcGRhdGVFbnRyeSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGVudHJ5OiBlbnRyeU51bWJlcixcbiAgICAgICAgICBxdHk6IHF1YW50aXR5LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21BY3Rpb24uUmVtb3ZlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBlbnRyeTogZW50cnlOdW1iZXIsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRFbnRyeVNlbGVjdG9yRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIGlzQ3JlYXRlZChjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgISFPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGg7XG4gIH1cblxuICBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiAhY2FydC50b3RhbEl0ZW1zO1xuICB9XG59XG4iXX0=