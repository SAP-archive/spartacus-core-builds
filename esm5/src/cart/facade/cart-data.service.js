/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { CartSelectors } from '../store/selectors/index';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
var CartDataService = /** @class */ (function () {
    function CartDataService(store, authService) {
        var _this = this;
        this.store = store;
        this.authService = authService;
        this._userId = OCC_USER_ID_ANONYMOUS;
        this.authService
            .getUserToken()
            .pipe(filter((/**
         * @param {?} userToken
         * @return {?}
         */
        function (userToken) { return _this.userId !== userToken.userId; })))
            .subscribe((/**
         * @param {?} userToken
         * @return {?}
         */
        function (userToken) {
            if (Object.keys(userToken).length !== 0) {
                _this._userId = userToken.userId;
            }
            else {
                _this._userId = OCC_USER_ID_ANONYMOUS;
            }
        }));
        this.store.pipe(select(CartSelectors.getCartContent)).subscribe((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) {
            _this._cart = cart;
        }));
    }
    Object.defineProperty(CartDataService.prototype, "hasCart", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._cart && Object.keys(this._cart).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "userId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cart", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cartId", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.hasCart) {
                return this.userId === OCC_USER_ID_ANONYMOUS
                    ? this.cart.guid
                    : this.cart.code;
            }
        },
        enumerable: true,
        configurable: true
    });
    CartDataService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartDataService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    return CartDataService;
}());
export { CartDataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartDataService.prototype._userId;
    /**
     * @type {?}
     * @private
     */
    CartDataService.prototype._cart;
    /**
     * @type {?}
     * @protected
     */
    CartDataService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CartDataService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUFLRSx5QkFDWSxLQUEyQixFQUMzQixXQUF3QjtRQUZwQyxpQkFrQkM7UUFqQlcsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMNUIsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBT3RDLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBaEMsQ0FBZ0MsRUFBQyxDQUFDO2FBQzNELFNBQVM7Ozs7UUFBQyxVQUFBLFNBQVM7WUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNsRSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSxvQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTTs7OztRQUFWO1lBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUsscUJBQXFCO29CQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDcEI7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBM0NGLFVBQVU7Ozs7Z0JBUk0sS0FBSztnQkFFYixXQUFXOztJQWtEcEIsc0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTNDWSxlQUFlOzs7Ozs7SUFDMUIsa0NBQXdDOzs7OztJQUN4QyxnQ0FBb0I7Ozs7O0lBR2xCLGdDQUFxQzs7Ozs7SUFDckMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICBwcml2YXRlIF9jYXJ0OiBDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKGZpbHRlcih1c2VyVG9rZW4gPT4gdGhpcy51c2VySWQgIT09IHVzZXJUb2tlbi51c2VySWQpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModXNlclRva2VuKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICB0aGlzLl91c2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpKS5zdWJzY3JpYmUoY2FydCA9PiB7XG4gICAgICB0aGlzLl9jYXJ0ID0gY2FydDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQgJiYgT2JqZWN0LmtleXModGhpcy5fY2FydCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG5cbiAgZ2V0IGNhcnQoKTogQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgY2FydElkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaGFzQ2FydCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICAgICAgPyB0aGlzLmNhcnQuZ3VpZFxuICAgICAgICA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19