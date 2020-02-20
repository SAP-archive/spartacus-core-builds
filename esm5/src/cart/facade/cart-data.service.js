import { __decorate } from "tslib";
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
            .pipe(filter(function (userToken) { return _this.userId !== userToken.userId; }))
            .subscribe(function (userToken) {
            if (Object.keys(userToken).length !== 0) {
                _this._userId = userToken.userId;
            }
            else {
                _this._userId = OCC_USER_ID_ANONYMOUS;
            }
        });
        this.store.pipe(select(CartSelectors.getCartContent)).subscribe(function (cart) {
            _this._cart = cart;
        });
    }
    Object.defineProperty(CartDataService.prototype, "hasCart", {
        get: function () {
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
        get: function () {
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
        get: function () {
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
        get: function () {
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
        get: function () {
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
    CartDataService.prototype.isEmail = function (str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
    };
    CartDataService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    CartDataService = __decorate([
        Injectable()
    ], CartDataService);
    return CartDataService;
}());
export { CartDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpEOzs7R0FHRztBQUVIO0lBSUUseUJBQ1ksS0FBMkIsRUFDM0IsV0FBd0I7UUFGcEMsaUJBa0JDO1FBakJXLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVCLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQU90QyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQWhDLENBQWdDLENBQUMsQ0FBQzthQUMzRCxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDbEUsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksb0NBQU87YUFBWDtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLG1DQUFNO1FBSlY7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxpQ0FBSTtRQUpSOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksbUNBQU07UUFKVjs7O1dBR0c7YUFDSDtZQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLHFCQUFxQjtvQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx3Q0FBVztRQUpmOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDZCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUI7b0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzt5QkFDZixLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNWLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNiLENBQUMsQ0FDTCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFTyxpQ0FBTyxHQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF6RWtCLEtBQUs7Z0JBQ0MsV0FBVzs7SUFOekIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBK0UzQjtJQUFELHNCQUFDO0NBQUEsQUEvRUQsSUErRUM7U0EvRVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19VU0VSX0lEX0dVRVNULFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBFTUFJTF9QQVRURVJOIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICogUmVwbGFjZSBwYXJ0aWN1bGFyIG1ldGhvZHMgdXNhZ2Ugd2l0aCByZXBsYWNlbWVudHMgZnJvbSBvdGhlciBzZXJ2aWNlc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICBwcml2YXRlIF9jYXJ0OiBDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKGZpbHRlcih1c2VyVG9rZW4gPT4gdGhpcy51c2VySWQgIT09IHVzZXJUb2tlbi51c2VySWQpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModXNlclRva2VuKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICB0aGlzLl91c2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpKS5zdWJzY3JpYmUoY2FydCA9PiB7XG4gICAgICB0aGlzLl9jYXJ0ID0gY2FydDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQgJiYgT2JqZWN0LmtleXModGhpcy5fY2FydCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgYGdldE9jY1VzZXJJZGAgZnJvbSBgQXV0aFNlcnZpY2VgIGluc3RlYWRcbiAgICovXG4gIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBgZ2V0QWN0aXZlYCBmcm9tIGBBY3RpdmVDYXJ0U2VydmljZWAgaW5zdGVhZFxuICAgKi9cbiAgZ2V0IGNhcnQoKTogQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGBnZXRBY3RpdmVDYXJ0SWRgIGZyb20gYEFjdGl2ZUNhcnRTZXJ2aWNlYCBpbnN0ZWFkXG4gICAqL1xuICBnZXQgY2FydElkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaGFzQ2FydCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICAgICAgPyB0aGlzLmNhcnQuZ3VpZFxuICAgICAgICA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgYGlzR3Vlc3RDYXJ0YCBmcm9tIGBBY3RpdmVDYXJ0U2VydmljZWAgaW5zdGVhZFxuICAgKi9cbiAgZ2V0IGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnQudXNlciAmJlxuICAgICAgKHRoaXMuY2FydC51c2VyLm5hbWUgPT09IE9DQ19VU0VSX0lEX0dVRVNUIHx8XG4gICAgICAgIHRoaXMuaXNFbWFpbChcbiAgICAgICAgICB0aGlzLmNhcnQudXNlci51aWRcbiAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgIC5qb2luKCd8JylcbiAgICAgICAgKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaChFTUFJTF9QQVRURVJOKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=