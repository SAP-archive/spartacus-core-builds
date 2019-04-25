/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/** @type {?} */
export var ANONYMOUS_USERID = 'anonymous';
var CartDataService = /** @class */ (function () {
    function CartDataService() {
        this._userId = ANONYMOUS_USERID;
        this._getDetails = false;
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
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._userId = val;
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
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._cart = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "getDetails", {
        get: /**
         * @return {?}
         */
        function () {
            return this._getDetails;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._getDetails = val;
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
    CartDataService.ctorParameters = function () { return []; };
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
     * @private
     */
    CartDataService.prototype._getDetails;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRTNDO0lBTUU7UUFKUSxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFFM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFYixDQUFDO0lBRWhCLHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFZVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQWRELFVBQVcsR0FBRztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFZUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQWRELFVBQVMsR0FBRztZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7Ozs7UUFZZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQWRELFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWNELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNFO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQXhDRixVQUFVOzs7O0lBeUNYLHNCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F4Q1ksZUFBZTs7Ozs7O0lBQzFCLGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQXNCOzs7OztJQUN0QixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSUNhcnQgfSBmcm9tICcuLi9tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfVVNFUklEID0gJ2Fub255bW91cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQgPSBBTk9OWU1PVVNfVVNFUklEO1xuICBwcml2YXRlIF9jYXJ0OiBVSUNhcnQ7XG4gIHByaXZhdGUgX2dldERldGFpbHMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0IGhhc0NhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fY2FydDtcbiAgfVxuXG4gIHNldCB1c2VySWQodmFsKSB7XG4gICAgdGhpcy5fdXNlcklkID0gdmFsO1xuICB9XG5cbiAgc2V0IGNhcnQodmFsKSB7XG4gICAgdGhpcy5fY2FydCA9IHZhbDtcbiAgfVxuXG4gIHNldCBnZXREZXRhaWxzKHZhbCkge1xuICAgIHRoaXMuX2dldERldGFpbHMgPSB2YWw7XG4gIH1cblxuICBnZXQgdXNlcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuXG4gIGdldCBjYXJ0KCk6IFVJQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgZ2V0RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RGV0YWlscztcbiAgfVxuXG4gIGdldCBjYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNDYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWQgPT09IEFOT05ZTU9VU19VU0VSSUQgPyB0aGlzLmNhcnQuZ3VpZCA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19