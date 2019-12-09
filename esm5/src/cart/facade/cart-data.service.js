/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { EMAIL_PATTERN } from '../../util';
import { CartSelectors } from '../store/selectors/index';
/**
 * @deprecated since version 1.4
 * Replace particular methods usage with replacements from other services
 */
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
        /**
         * @deprecated since version 1.4
         * Use `getOccUserId` from `AuthService` instead
         */
        get: /**
         * @deprecated since version 1.4
         * Use `getOccUserId` from `AuthService` instead
         * @return {?}
         */
        function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cart", {
        /**
         * @deprecated since version 1.4
         * Use `getActive` from `ActiveCartService` instead
         */
        get: /**
         * @deprecated since version 1.4
         * Use `getActive` from `ActiveCartService` instead
         * @return {?}
         */
        function () {
            return this._cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cartId", {
        /**
         * @deprecated since version 1.4
         * Use `getActiveCartId` from `ActiveCartService` instead
         */
        get: /**
         * @deprecated since version 1.4
         * Use `getActiveCartId` from `ActiveCartService` instead
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
    Object.defineProperty(CartDataService.prototype, "isGuestCart", {
        /**
         * @deprecated since version 1.4
         * Use `isGuestCart` from `ActiveCartService` instead
         */
        get: /**
         * @deprecated since version 1.4
         * Use `isGuestCart` from `ActiveCartService` instead
         * @return {?}
         */
        function () {
            return (this.cart.user &&
                (this.cart.user.name === OCC_USER_ID_GUEST ||
                    this.isEmail(this.cart.user.uid
                        .split('|')
                        .slice(1)
                        .join('|'))));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    CartDataService.prototype.isEmail = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU16RDtJQUtFLHlCQUNZLEtBQTJCLEVBQzNCLFdBQXdCO1FBRnBDLGlCQWtCQztRQWpCVyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw1QixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFPdEMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFoQyxDQUFnQyxFQUFDLENBQUM7YUFDM0QsU0FBUzs7OztRQUFDLFVBQUEsU0FBUztZQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7YUFDdEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2xFLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtQ0FBTTtRQUpWOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxpQ0FBSTtRQUpSOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtQ0FBTTtRQUpWOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxxQkFBcUI7b0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNwQjtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQUksd0NBQVc7UUFKZjs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDZCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUI7b0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDZixLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNWLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNiLENBQUMsQ0FDTCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7OztJQUVPLGlDQUFPOzs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkEvRUYsVUFBVTs7OztnQkFoQk0sS0FBSztnQkFFYixXQUFXOztJQThGcEIsc0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQS9FWSxlQUFlOzs7Ozs7SUFDMUIsa0NBQXdDOzs7OztJQUN4QyxnQ0FBb0I7Ozs7O0lBR2xCLGdDQUFxQzs7Ozs7SUFDckMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfR1VFU1QsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4gfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gKiBSZXBsYWNlIHBhcnRpY3VsYXIgbWV0aG9kcyB1c2FnZSB3aXRoIHJlcGxhY2VtZW50cyBmcm9tIG90aGVyIHNlcnZpY2VzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgX2NhcnQ6IENhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoZmlsdGVyKHVzZXJUb2tlbiA9PiB0aGlzLnVzZXJJZCAhPT0gdXNlclRva2VuLnVzZXJJZCkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJUb2tlbiA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1c2VyVG9rZW4pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0Q29udGVudCkpLnN1YnNjcmliZShjYXJ0ID0+IHtcbiAgICAgIHRoaXMuX2NhcnQgPSBjYXJ0O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhhc0NhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fY2FydCAmJiBPYmplY3Qua2V5cyh0aGlzLl9jYXJ0KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBgZ2V0T2NjVXNlcklkYCBmcm9tIGBBdXRoU2VydmljZWAgaW5zdGVhZFxuICAgKi9cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGBnZXRBY3RpdmVgIGZyb20gYEFjdGl2ZUNhcnRTZXJ2aWNlYCBpbnN0ZWFkXG4gICAqL1xuICBnZXQgY2FydCgpOiBDYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgYGdldEFjdGl2ZUNhcnRJZGAgZnJvbSBgQWN0aXZlQ2FydFNlcnZpY2VgIGluc3RlYWRcbiAgICovXG4gIGdldCBjYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNDYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICA/IHRoaXMuY2FydC5ndWlkXG4gICAgICAgIDogdGhpcy5jYXJ0LmNvZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBgaXNHdWVzdENhcnRgIGZyb20gYEFjdGl2ZUNhcnRTZXJ2aWNlYCBpbnN0ZWFkXG4gICAqL1xuICBnZXQgaXNHdWVzdENhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY2FydC51c2VyICYmXG4gICAgICAodGhpcy5jYXJ0LnVzZXIubmFtZSA9PT0gT0NDX1VTRVJfSURfR1VFU1QgfHxcbiAgICAgICAgdGhpcy5pc0VtYWlsKFxuICAgICAgICAgIHRoaXMuY2FydC51c2VyLnVpZFxuICAgICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJ3wnKVxuICAgICAgICApKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLm1hdGNoKEVNQUlMX1BBVFRFUk4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==