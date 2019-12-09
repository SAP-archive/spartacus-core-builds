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
/**
 * @deprecated since version 1.4
 * Replace particular methods usage with replacements from other services
 */
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
     * @deprecated since version 1.4
     * Use `getOccUserId` from `AuthService` instead
     * @return {?}
     */
    get userId() {
        return this._userId;
    }
    /**
     * @deprecated since version 1.4
     * Use `getActive` from `ActiveCartService` instead
     * @return {?}
     */
    get cart() {
        return this._cart;
    }
    /**
     * @deprecated since version 1.4
     * Use `getActiveCartId` from `ActiveCartService` instead
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
     * @deprecated since version 1.4
     * Use `isGuestCart` from `ActiveCartService` instead
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU96RCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFJMUIsWUFDWSxLQUEyQixFQUMzQixXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw1QixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFPdEMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUM7YUFDM0QsU0FBUzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBTUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQU1ELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFNRCxJQUFJLE1BQU07UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLHFCQUFxQjtnQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNkLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQjtnQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO3FCQUNmLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ1YsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQ2IsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsR0FBVztRQUN6QixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQS9FRixVQUFVOzs7O1lBaEJNLEtBQUs7WUFFYixXQUFXOzs7Ozs7O0lBZ0JsQixrQ0FBd0M7Ozs7O0lBQ3hDLGdDQUFvQjs7Ozs7SUFHbEIsZ0NBQXFDOzs7OztJQUNyQyxzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgRU1BSUxfUEFUVEVSTiB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAqIFJlcGxhY2UgcGFydGljdWxhciBtZXRob2RzIHVzYWdlIHdpdGggcmVwbGFjZW1lbnRzIGZyb20gb3RoZXIgc2VydmljZXNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnREYXRhU2VydmljZSB7XG4gIHByaXZhdGUgX3VzZXJJZCA9IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgcHJpdmF0ZSBfY2FydDogQ2FydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZShmaWx0ZXIodXNlclRva2VuID0+IHRoaXMudXNlcklkICE9PSB1c2VyVG9rZW4udXNlcklkKSlcbiAgICAgIC5zdWJzY3JpYmUodXNlclRva2VuID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVzZXJUb2tlbikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy5fdXNlcklkID0gdXNlclRva2VuLnVzZXJJZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl91c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDYXJ0U2VsZWN0b3JzLmdldENhcnRDb250ZW50KSkuc3Vic2NyaWJlKGNhcnQgPT4ge1xuICAgICAgdGhpcy5fY2FydCA9IGNhcnQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaGFzQ2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9jYXJ0ICYmIE9iamVjdC5rZXlzKHRoaXMuX2NhcnQpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGBnZXRPY2NVc2VySWRgIGZyb20gYEF1dGhTZXJ2aWNlYCBpbnN0ZWFkXG4gICAqL1xuICBnZXQgdXNlcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgYGdldEFjdGl2ZWAgZnJvbSBgQWN0aXZlQ2FydFNlcnZpY2VgIGluc3RlYWRcbiAgICovXG4gIGdldCBjYXJ0KCk6IENhcnQge1xuICAgIHJldHVybiB0aGlzLl9jYXJ0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBgZ2V0QWN0aXZlQ2FydElkYCBmcm9tIGBBY3RpdmVDYXJ0U2VydmljZWAgaW5zdGVhZFxuICAgKi9cbiAgZ2V0IGNhcnRJZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmhhc0NhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTXG4gICAgICAgID8gdGhpcy5jYXJ0Lmd1aWRcbiAgICAgICAgOiB0aGlzLmNhcnQuY29kZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGBpc0d1ZXN0Q2FydGAgZnJvbSBgQWN0aXZlQ2FydFNlcnZpY2VgIGluc3RlYWRcbiAgICovXG4gIGdldCBpc0d1ZXN0Q2FydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYXJ0LnVzZXIgJiZcbiAgICAgICh0aGlzLmNhcnQudXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwoXG4gICAgICAgICAgdGhpcy5jYXJ0LnVzZXIudWlkXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAuam9pbignfCcpXG4gICAgICAgICkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goRU1BSUxfUEFUVEVSTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19