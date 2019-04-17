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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRTNDO0lBTUU7UUFKUSxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFFM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFYixDQUFDO0lBRWhCLHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFZVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQWRELFVBQVcsR0FBRztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFZUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQWRELFVBQVMsR0FBRztZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7Ozs7UUFZZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQWRELFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWNELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNFO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQXhDRixVQUFVOzs7O0lBeUNYLHNCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F4Q1ksZUFBZTs7Ozs7O0lBQzFCLGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQW9COzs7OztJQUNwQixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX1VTRVJJRCA9ICdhbm9ueW1vdXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkID0gQU5PTllNT1VTX1VTRVJJRDtcbiAgcHJpdmF0ZSBfY2FydDogQ2FydDtcbiAgcHJpdmF0ZSBfZ2V0RGV0YWlscyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXQgaGFzQ2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9jYXJ0O1xuICB9XG5cbiAgc2V0IHVzZXJJZCh2YWwpIHtcbiAgICB0aGlzLl91c2VySWQgPSB2YWw7XG4gIH1cblxuICBzZXQgY2FydCh2YWwpIHtcbiAgICB0aGlzLl9jYXJ0ID0gdmFsO1xuICB9XG5cbiAgc2V0IGdldERldGFpbHModmFsKSB7XG4gICAgdGhpcy5fZ2V0RGV0YWlscyA9IHZhbDtcbiAgfVxuXG4gIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG5cbiAgZ2V0IGNhcnQoKTogQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgZ2V0RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RGV0YWlscztcbiAgfVxuXG4gIGdldCBjYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNDYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWQgPT09IEFOT05ZTU9VU19VU0VSSUQgPyB0aGlzLmNhcnQuZ3VpZCA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19