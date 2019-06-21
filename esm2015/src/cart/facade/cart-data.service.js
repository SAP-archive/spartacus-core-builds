/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRzNDLE1BQU0sT0FBTyxlQUFlO0lBSzFCO1FBSlEsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBRTNCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRWIsQ0FBQzs7OztJQUVoQixJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsR0FBRztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsR0FBRztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7O1lBeENGLFVBQVU7Ozs7Ozs7OztJQUVULGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQW9COzs7OztJQUNwQixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfVVNFUklEID0gJ2Fub255bW91cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQgPSBBTk9OWU1PVVNfVVNFUklEO1xuICBwcml2YXRlIF9jYXJ0OiBDYXJ0O1xuICBwcml2YXRlIF9nZXREZXRhaWxzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQ7XG4gIH1cblxuICBzZXQgdXNlcklkKHZhbCkge1xuICAgIHRoaXMuX3VzZXJJZCA9IHZhbDtcbiAgfVxuXG4gIHNldCBjYXJ0KHZhbCkge1xuICAgIHRoaXMuX2NhcnQgPSB2YWw7XG4gIH1cblxuICBzZXQgZ2V0RGV0YWlscyh2YWwpIHtcbiAgICB0aGlzLl9nZXREZXRhaWxzID0gdmFsO1xuICB9XG5cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICBnZXQgY2FydCgpOiBDYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgfVxuXG4gIGdldCBnZXREZXRhaWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXREZXRhaWxzO1xuICB9XG5cbiAgZ2V0IGNhcnRJZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhhc0NhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJZCA9PT0gQU5PTllNT1VTX1VTRVJJRCA/IHRoaXMuY2FydC5ndWlkIDogdGhpcy5jYXJ0LmNvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=