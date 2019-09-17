/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { CartSelectors } from '../store/selectors/index';
/** @type {?} */
export const ANONYMOUS_USERID = 'anonymous';
export class CartDataService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this._userId = ANONYMOUS_USERID;
        this.authService
            .getUserToken()
            .pipe(filter((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => this.userId !== userToken.userId)))
            .subscribe((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => {
            if (Object.keys(userToken).length !== 0) {
                this._userId = userToken.userId;
            }
            else {
                this._userId = ANONYMOUS_USERID;
            }
        }));
        this.store.pipe(select(CartSelectors.getCartContent)).subscribe((/**
         * @param {?} cart
         * @return {?}
         */
        cart => {
            this._cart = cart;
        }));
    }
    /**
     * @return {?}
     */
    get hasCart() {
        return !!this._cart && Object.keys(this._cart).length > 0;
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
CartDataService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxXQUFXO0FBRzNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUNZLEtBQTJCLEVBQzNCLFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQU9qQyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQzthQUMzRCxTQUFTOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMzRTtJQUNILENBQUM7OztZQXpDRixVQUFVOzs7O1lBVE0sS0FBSztZQUViLFdBQVc7Ozs7Ozs7SUFTbEIsa0NBQW1DOzs7OztJQUNuQyxnQ0FBb0I7Ozs7O0lBR2xCLGdDQUFxQzs7Ozs7SUFDckMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX1VTRVJJRCA9ICdhbm9ueW1vdXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkID0gQU5PTllNT1VTX1VTRVJJRDtcbiAgcHJpdmF0ZSBfY2FydDogQ2FydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZShmaWx0ZXIodXNlclRva2VuID0+IHRoaXMudXNlcklkICE9PSB1c2VyVG9rZW4udXNlcklkKSlcbiAgICAgIC5zdWJzY3JpYmUodXNlclRva2VuID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVzZXJUb2tlbikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy5fdXNlcklkID0gdXNlclRva2VuLnVzZXJJZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl91c2VySWQgPSBBTk9OWU1PVVNfVVNFUklEO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ2FydFNlbGVjdG9ycy5nZXRDYXJ0Q29udGVudCkpLnN1YnNjcmliZShjYXJ0ID0+IHtcbiAgICAgIHRoaXMuX2NhcnQgPSBjYXJ0O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGhhc0NhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fY2FydCAmJiBPYmplY3Qua2V5cyh0aGlzLl9jYXJ0KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICBnZXQgY2FydCgpOiBDYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgfVxuXG4gIGdldCBjYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5oYXNDYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWQgPT09IEFOT05ZTU9VU19VU0VSSUQgPyB0aGlzLmNhcnQuZ3VpZCA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19