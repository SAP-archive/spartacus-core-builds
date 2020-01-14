/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiCartService } from './multi-cart.service';
import { UserService } from '../../user/facade/user.service';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { of, BehaviorSubject } from 'rxjs';
import { map, filter, tap, shareReplay, switchMap, take } from 'rxjs/operators';
var SelectiveCartService = /** @class */ (function () {
    function SelectiveCartService(store, userService, authService, multiCartService) {
        var _this = this;
        this.store = store;
        this.userService = userService;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.cartId$ = new BehaviorSubject(undefined);
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.cartSelector$ = this.cartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            _this.cartId = cartId;
            return _this.multiCartService.getCartEntity(cartId);
        })));
        this.userService.get().subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            if (user && user.customerId) {
                _this.customerId = user.customerId;
                _this.cartId$.next("selectivecart" + _this.customerId);
            }
            else if (user && !user.customerId) {
                _this.cartId$.next(undefined);
            }
        }));
        this.authService.getOccUserId().subscribe((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            _this.userId = userId;
            if (_this.isJustLoggedIn(userId)) {
                _this.load();
            }
            _this.previousUserId = userId;
        }));
        this.selectiveCart$ = this.cartSelector$.pipe(map((/**
         * @param {?} cartEntity
         * @return {?}
         */
        function (cartEntity) {
            return {
                cart: cartEntity.value,
                loading: cartEntity.loading,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var loading = _a.loading;
            return !loading;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var cart = _a.cart, loaded = _a.loaded;
            if (_this.cartId && _this.isEmpty(cart) && !loaded) {
                _this.load();
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var cart = _a.cart;
            return (cart ? cart : {});
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    SelectiveCartService.prototype.getCart = /**
     * @return {?}
     */
    function () {
        return this.selectiveCart$;
    };
    /**
     * @return {?}
     */
    SelectiveCartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.multiCartService.getEntries(this.cartId);
    };
    /**
     * @return {?}
     */
    SelectiveCartService.prototype.getLoaded = /**
     * @return {?}
     */
    function () {
        return this.cartSelector$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return (cart.success || cart.error) && !cart.loading; })));
    };
    /**
     * @private
     * @return {?}
     */
    SelectiveCartService.prototype.load = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isLoggedIn(this.userId) && this.cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: this.cartId,
            });
        }
    };
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    SelectiveCartService.prototype.addEntry = /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (productCode, quantity) {
        var _this = this;
        /** @type {?} */
        var loadAttempted = false;
        this.cartSelector$
            .pipe(filter((/**
         * @return {?}
         */
        function () { return !loadAttempted; })), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) {
            if (_this.isEmpty(cartState.value) && !cartState.loading) {
                loadAttempted = true;
                _this.load();
            }
            return of(cartState);
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        function (cartState) { return !_this.isEmpty(cartState.value); })), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.multiCartService.addEntry(_this.userId, _this.cartId, productCode, quantity);
        }));
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    SelectiveCartService.prototype.removeEntry = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    };
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    SelectiveCartService.prototype.updateEntry = /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    SelectiveCartService.prototype.getEntry = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.multiCartService.getEntry(this.cartId, productCode);
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    SelectiveCartService.prototype.isEmpty = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    };
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    SelectiveCartService.prototype.isJustLoggedIn = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    };
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    SelectiveCartService.prototype.isLoggedIn = /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return typeof userId !== 'undefined' && userId !== OCC_USER_ID_ANONYMOUS;
    };
    SelectiveCartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectiveCartService.ctorParameters = function () { return [
        { type: Store },
        { type: UserService },
        { type: AuthService },
        { type: MultiCartService }
    ]; };
    return SelectiveCartService;
}());
export { SelectiveCartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.customerId;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.selectiveCart$;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.cartId$;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.PREVIOUS_USER_ID_INITIAL_VALUE;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.previousUserId;
    /**
     * @type {?}
     * @private
     */
    SelectiveCartService.prototype.cartSelector$;
    /**
     * @type {?}
     * @protected
     */
    SelectiveCartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    SelectiveCartService.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    SelectiveCartService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    SelectiveCartService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9zZWxlY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRjtJQXFCRSw4QkFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0M7UUFKOUMsaUJBK0NDO1FBOUNXLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFuQnRDLFlBQU8sR0FBNEIsSUFBSSxlQUFlLENBQzVELFNBQVMsQ0FDVixDQUFDO1FBRWUsbUNBQThCLEdBQzdDLGdDQUFnQyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1FBRXJELGtCQUFhLEdBQUcsSUFBSSxDQUFD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QW1CLE1BQWM7UUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLHFCQUFxQixDQUFDO0lBQzNFLENBQUM7O2dCQTNKRixVQUFVOzs7O2dCQVpGLEtBQUs7Z0JBR0wsV0FBVztnQkFDWCxXQUFXO2dCQUZYLGdCQUFnQjs7SUFzS3pCLDJCQUFDO0NBQUEsQUE1SkQsSUE0SkM7U0EzSlksb0JBQW9COzs7Ozs7SUFDL0IsMENBQTJCOzs7OztJQUMzQixzQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUF1Qjs7Ozs7SUFDdkIsOENBQXlDOzs7OztJQUN6Qyx1Q0FFRTs7Ozs7SUFFRiw4REFDbUM7Ozs7O0lBQ25DLDhDQUE2RDs7Ozs7SUFFN0QsNkNBS0U7Ozs7O0lBR0EscUNBQTBDOzs7OztJQUMxQywyQ0FBa0M7Ozs7O0lBQ2xDLDJDQUFrQzs7Ozs7SUFDbEMsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RpdmVDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgY3VzdG9tZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIHVzZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIGNhcnRJZDogc3RyaW5nO1xuICBwcml2YXRlIHNlbGVjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBwcml2YXRlIGNhcnRJZCQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuXG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuY2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4ge1xuICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnRFbnRpdHkoY2FydElkKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5nZXQoKS5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICBpZiAodXNlciAmJiB1c2VyLmN1c3RvbWVySWQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lcklkID0gdXNlci5jdXN0b21lcklkO1xuICAgICAgICB0aGlzLmNhcnRJZCQubmV4dChgc2VsZWN0aXZlY2FydCR7dGhpcy5jdXN0b21lcklkfWApO1xuICAgICAgfSBlbHNlIGlmICh1c2VyICYmICF1c2VyLmN1c3RvbWVySWQpIHtcbiAgICAgICAgdGhpcy5jYXJ0SWQkLm5leHQodW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkuc3Vic2NyaWJlKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblxuICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aXZlQ2FydCQgPSB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIG1hcCgoY2FydEVudGl0eTogTG9hZGVyU3RhdGU8Q2FydD4pOiB7XG4gICAgICAgIGNhcnQ6IENhcnQ7XG4gICAgICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgbG9hZGluZzogY2FydEVudGl0eS5sb2FkaW5nLFxuICAgICAgICAgIGxvYWRlZDpcbiAgICAgICAgICAgIChjYXJ0RW50aXR5LmVycm9yIHx8IGNhcnRFbnRpdHkuc3VjY2VzcykgJiYgIWNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKCh7IGxvYWRpbmcgfSkgPT4gIWxvYWRpbmcpLFxuICAgICAgdGFwKCh7IGNhcnQsIGxvYWRlZCB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhcnRJZCAmJiB0aGlzLmlzRW1wdHkoY2FydCkgJiYgIWxvYWRlZCkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENhcnQoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aXZlQ2FydCQ7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyaWVzKHRoaXMuY2FydElkKTtcbiAgfVxuXG4gIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoY2FydCA9PiAoY2FydC5zdWNjZXNzIHx8IGNhcnQuZXJyb3IpICYmICFjYXJ0LmxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKHRoaXMudXNlcklkKSAmJiB0aGlzLmNhcnRJZCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnRJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbG9hZEF0dGVtcHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FydFNlbGVjdG9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhbG9hZEF0dGVtcHRlZCksXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSAmJiAhY2FydFN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGxvYWRBdHRlbXB0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZihjYXJ0U3RhdGUpO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkoXG4gICAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnkuZW50cnlOdW1iZXJcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMuY2FydElkLCBwcm9kdWN0Q29kZSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzTG9nZ2VkSW4odXNlcklkKSAmJlxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB1c2VySWQgIT09ICd1bmRlZmluZWQnICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICB9XG59XG4iXX0=