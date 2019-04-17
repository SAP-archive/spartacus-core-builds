/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/** @type {?} */
export const ANONYMOUS_USERID = 'anonymous';
export class CartDataService {
    constructor() {
        this._userId = ANONYMOUS_USERID;
        this._getDetails = false;
    }
    /**
     * @return {?}
     */
    get hasCart() {
        return !!this._cart;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set userId(val) {
        this._userId = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cart(val) {
        this._cart = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set getDetails(val) {
        this._getDetails = val;
    }
    /**
     * @return {?}
     */
    get userId() {
        return this._userId;
    }
    /**
     * @return {?}
     */
    get cart() {
        return this._cart;
    }
    /**
     * @return {?}
     */
    get getDetails() {
        return this._getDetails;
    }
    /**
     * @return {?}
     */
    get cartId() {
        if (this.hasCart) {
            return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
        }
    }
}
CartDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartDataService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRzNDLE1BQU0sT0FBTyxlQUFlO0lBSzFCO1FBSlEsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBRTNCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRWIsQ0FBQzs7OztJQUVoQixJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsR0FBRztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsR0FBRztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7O1lBeENGLFVBQVU7Ozs7Ozs7OztJQUVULGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQW9COzs7OztJQUNwQixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX1VTRVJJRCA9ICdhbm9ueW1vdXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkID0gQU5PTllNT1VTX1VTRVJJRDtcbiAgcHJpdmF0ZSBfY2FydDogQ2FydDtcbiAgcHJpdmF0ZSBfZ2V0RGV0YWlscyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXQgaGFzQ2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9jYXJ0O1xuICB9XG5cbiAgc2V0IHVzZXJJZCh2YWwpIHtcbiAgICB0aGlzLl91c2VySWQgPSB2YWw7XG4gIH1cblxuICBzZXQgY2FydCh2YWwpIHtcbiAgICB0aGlzLl9jYXJ0ID0gdmFsO1xuICB9XG5cbiAgc2V0IGdldERldGFpbHModmFsKSB7XG4gICAgdGhpcy5fZ2V0RGV0YWlscyA9IHZhbDtcbiAgfVxuXG4gIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG5cbiAgZ2V0IGNhcnQoKTogQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgZ2V0RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RGV0YWlscztcbiAgfVxuXG4gIGdldCBjYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNDYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWQgPT09IEFOT05ZTU9VU19VU0VSSUQgPyB0aGlzLmNhcnQuZ3VpZCA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19