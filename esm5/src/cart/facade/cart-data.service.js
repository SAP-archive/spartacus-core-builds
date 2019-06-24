/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import * as fromSelector from '../store/selectors/index';
/** @type {?} */
export var ANONYMOUS_USERID = 'anonymous';
var CartDataService = /** @class */ (function () {
    function CartDataService(store, authService) {
        var _this = this;
        this.store = store;
        this.authService = authService;
        this._userId = ANONYMOUS_USERID;
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
                _this._userId = ANONYMOUS_USERID;
            }
        }));
        this.store.pipe(select(fromSelector.getCartContent)).subscribe((/**
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
            return !!this._cart;
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
                return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsV0FBVztBQUUzQztJQUtFLHlCQUNZLEtBQTJCLEVBQzNCLFdBQXdCO1FBRnBDLGlCQWtCQztRQWpCVyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw1QixZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFPakMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFoQyxDQUFnQyxFQUFDLENBQUM7YUFDM0QsU0FBUzs7OztRQUFDLFVBQUEsU0FBUztZQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7YUFDakM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2pFLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTTs7OztRQUFWO1lBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMzRTtRQUNILENBQUM7OztPQUFBOztnQkF6Q0YsVUFBVTs7OztnQkFUTSxLQUFLO2dCQUViLFdBQVc7O0lBaURwQixzQkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLGVBQWU7Ozs7OztJQUMxQixrQ0FBbUM7Ozs7O0lBQ25DLGdDQUFvQjs7Ozs7SUFHbEIsZ0NBQXFDOzs7OztJQUNyQyxzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVNlbGVjdG9yIGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfVVNFUklEID0gJ2Fub255bW91cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQgPSBBTk9OWU1PVVNfVVNFUklEO1xuICBwcml2YXRlIF9jYXJ0OiBDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKGZpbHRlcih1c2VyVG9rZW4gPT4gdGhpcy51c2VySWQgIT09IHVzZXJUb2tlbi51c2VySWQpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModXNlclRva2VuKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICB0aGlzLl91c2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IEFOT05ZTU9VU19VU0VSSUQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU2VsZWN0b3IuZ2V0Q2FydENvbnRlbnQpKS5zdWJzY3JpYmUoY2FydCA9PiB7XG4gICAgICB0aGlzLl9jYXJ0ID0gY2FydDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgdXNlcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuXG4gIGdldCBjYXJ0KCk6IENhcnQge1xuICAgIHJldHVybiB0aGlzLl9jYXJ0O1xuICB9XG5cbiAgZ2V0IGNhcnRJZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhhc0NhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJZCA9PT0gQU5PTllNT1VTX1VTRVJJRCA/IHRoaXMuY2FydC5ndWlkIDogdGhpcy5jYXJ0LmNvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=