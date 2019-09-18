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
export class CartDataService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this._userId = OCC_USER_ID_ANONYMOUS;
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
                this._userId = OCC_USER_ID_ANONYMOUS;
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
            return this.userId === OCC_USER_ID_ANONYMOUS
                ? this.cart.guid
                : this.cart.code;
        }
    }
    /**
     * @return {?}
     */
    get isGuestCart() {
        return (this.cart.user &&
            (this.cart.user.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cart.user.uid
                    .split('|')
                    .slice(1)
                    .join('|'))));
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    isEmail(str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3pELE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUNZLEtBQTJCLEVBQzNCLFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVCLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQU90QyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQzthQUMzRCxTQUFTOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUsscUJBQXFCO2dCQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNkLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQjtnQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO3FCQUNmLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ1YsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQ2IsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsR0FBVztRQUN6QixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQS9ERixVQUFVOzs7O1lBWk0sS0FBSztZQUViLFdBQVc7Ozs7Ozs7SUFZbEIsa0NBQXdDOzs7OztJQUN4QyxnQ0FBb0I7Ozs7O0lBR2xCLGdDQUFxQzs7Ozs7SUFDckMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfR1VFU1QsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IEVNQUlMX1BBVFRFUk4gfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IENhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICBwcml2YXRlIF9jYXJ0OiBDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKGZpbHRlcih1c2VyVG9rZW4gPT4gdGhpcy51c2VySWQgIT09IHVzZXJUb2tlbi51c2VySWQpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModXNlclRva2VuKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICB0aGlzLl91c2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpKS5zdWJzY3JpYmUoY2FydCA9PiB7XG4gICAgICB0aGlzLl9jYXJ0ID0gY2FydDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcnQgJiYgT2JqZWN0LmtleXModGhpcy5fY2FydCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG5cbiAgZ2V0IGNhcnQoKTogQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gIH1cblxuICBnZXQgY2FydElkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaGFzQ2FydCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICAgICAgPyB0aGlzLmNhcnQuZ3VpZFxuICAgICAgICA6IHRoaXMuY2FydC5jb2RlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0d1ZXN0Q2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYXJ0LnVzZXIgJiZcbiAgICAgICh0aGlzLmNhcnQudXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwoXG4gICAgICAgICAgdGhpcy5jYXJ0LnVzZXIudWlkXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAuam9pbignfCcpXG4gICAgICAgICkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goRU1BSUxfUEFUVEVSTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19