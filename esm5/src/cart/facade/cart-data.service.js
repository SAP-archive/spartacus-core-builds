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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRTNDO0lBTUU7UUFKUSxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFFM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFYixDQUFDO0lBRWhCLHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFZVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQWRELFVBQVcsR0FBRztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFZUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQWRELFVBQVMsR0FBRztZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7Ozs7UUFZZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQWRELFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWNELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNFO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQXhDRixVQUFVOzs7O0lBeUNYLHNCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F4Q1ksZUFBZTs7Ozs7O0lBQzFCLGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQW9COzs7OztJQUNwQixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfVVNFUklEID0gJ2Fub255bW91cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQgPSBBTk9OWU1PVVNfVVNFUklEO1xuICBwcml2YXRlIF9jYXJ0OiBDYXJ0O1xuICBwcml2YXRlIF9nZXREZXRhaWxzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQ7XG4gIH1cblxuICBzZXQgdXNlcklkKHZhbCkge1xuICAgIHRoaXMuX3VzZXJJZCA9IHZhbDtcbiAgfVxuXG4gIHNldCBjYXJ0KHZhbCkge1xuICAgIHRoaXMuX2NhcnQgPSB2YWw7XG4gIH1cblxuICBzZXQgZ2V0RGV0YWlscyh2YWwpIHtcbiAgICB0aGlzLl9nZXREZXRhaWxzID0gdmFsO1xuICB9XG5cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICBnZXQgY2FydCgpOiBDYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgfVxuXG4gIGdldCBnZXREZXRhaWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXREZXRhaWxzO1xuICB9XG5cbiAgZ2V0IGNhcnRJZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhhc0NhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJZCA9PT0gQU5PTllNT1VTX1VTRVJJRCA/IHRoaXMuY2FydC5ndWlkIDogdGhpcy5jYXJ0LmNvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=