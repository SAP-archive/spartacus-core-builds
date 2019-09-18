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
    Object.defineProperty(CartDataService.prototype, "isGuestCart", {
        get: /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpEO0lBS0UseUJBQ1ksS0FBMkIsRUFDM0IsV0FBd0I7UUFGcEMsaUJBa0JDO1FBakJXLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVCLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQU90QyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQWhDLENBQWdDLEVBQUMsQ0FBQzthQUMzRCxTQUFTOzs7O1FBQUMsVUFBQSxTQUFTO1lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDbEUsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksb0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLHFCQUFxQjtvQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDZCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUI7b0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDZixLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNWLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNiLENBQUMsQ0FDTCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7OztJQUVPLGlDQUFPOzs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkEvREYsVUFBVTs7OztnQkFaTSxLQUFLO2dCQUViLFdBQVc7O0lBMEVwQixzQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBL0RZLGVBQWU7Ozs7OztJQUMxQixrQ0FBd0M7Ozs7O0lBQ3hDLGdDQUFvQjs7Ozs7SUFHbEIsZ0NBQXFDOzs7OztJQUNyQyxzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgX2NhcnQ6IENhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoZmlsdGVyKHVzZXJUb2tlbiA9PiB0aGlzLnVzZXJJZCAhPT0gdXNlclRva2VuLnVzZXJJZCkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJUb2tlbiA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1c2VyVG9rZW4pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJUb2tlbi51c2VySWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0Q29udGVudCkpLnN1YnNjcmliZShjYXJ0ID0+IHtcbiAgICAgIHRoaXMuX2NhcnQgPSBjYXJ0O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhhc0NhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fY2FydCAmJiBPYmplY3Qua2V5cyh0aGlzLl9jYXJ0KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICBnZXQgY2FydCgpOiBDYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgfVxuXG4gIGdldCBjYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNDYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICA/IHRoaXMuY2FydC5ndWlkXG4gICAgICAgIDogdGhpcy5jYXJ0LmNvZGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnQudXNlciAmJlxuICAgICAgKHRoaXMuY2FydC51c2VyLm5hbWUgPT09IE9DQ19VU0VSX0lEX0dVRVNUIHx8XG4gICAgICAgIHRoaXMuaXNFbWFpbChcbiAgICAgICAgICB0aGlzLmNhcnQudXNlci51aWRcbiAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgIC5qb2luKCd8JylcbiAgICAgICAgKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaChFTUFJTF9QQVRURVJOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=