/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiCartService } from './multi-cart.service';
import { UserService } from '../../user/facade/user.service';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { of, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, tap, shareReplay, switchMap, take } from 'rxjs/operators';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
var SelectiveCartService = /** @class */ (function () {
    function SelectiveCartService(store, userService, authService, multiCartService, baseSiteService) {
        var _this = this;
        this.store = store;
        this.userService = userService;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.baseSiteService = baseSiteService;
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
        combineLatest([
            this.userService.get(),
            this.baseSiteService.getActive(),
        ]).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), user = _b[0], activeBaseSite = _b[1];
            if (user && user.customerId && activeBaseSite) {
                _this.customerId = user.customerId;
                _this.cartId$.next("selectivecart" + activeBaseSite + _this.customerId);
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
        { type: MultiCartService },
        { type: BaseSiteService }
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
    /**
     * @type {?}
     * @protected
     */
    SelectiveCartService.prototype.baseSiteService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9zZWxlY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUU5RTtJQXFCRSw4QkFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsZUFBZ0M7UUFMNUMsaUJBbURDO1FBbERXLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBcEJwQyxZQUFPLEdBQTRCLElBQUksZUFBZSxDQUM1RCxTQUFTLENBQ1YsQ0FBQztR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Ozs7SUFBdEIsVUFBdUIsTUFBYztRQUNuQyxPQUFPLENBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLElBQUksbUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8seUNBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQWM7UUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLHFCQUFxQixDQUFDO0lBQzNFLENBQUM7O2dCQS9KRixVQUFVOzs7O2dCQWJGLEtBQUs7Z0JBR0wsV0FBVztnQkFDWCxXQUFXO2dCQUZYLGdCQUFnQjtnQkFTaEIsZUFBZTs7SUFrS3hCLDJCQUFDO0NBQUEsQUFoS0QsSUFnS0M7U0EvSlksb0JBQW9COzs7Ozs7SUFDL0IsMENBQTJCOzs7OztJQUMzQixzQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUF1Qjs7Ozs7SUFDdkIsOENBQXlDOzs7OztJQUN6Qyx1Q0FFRTs7Ozs7SUFFRiw4REFDbUM7Ozs7O0lBQ25DLDhDQUE2RDs7Ozs7SUFFN0QsNkNBS0U7Ozs7O0lBR0EscUNBQTBDOzs7OztJQUMxQywyQ0FBa0M7Ozs7O0lBQ2xDLDJDQUFrQzs7Ozs7SUFDbEMsZ0RBQTRDOzs7OztJQUM1QywrQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9mYWNhZGUvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0aXZlQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSB1c2VySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYXJ0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgcHJpdmF0ZSBjYXJ0SWQkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcblxuICBwcml2YXRlIGNhcnRTZWxlY3RvciQgPSB0aGlzLmNhcnRJZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoY2FydElkID0+IHtcbiAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KGNhcnRJZCk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCksXG4gICAgICB0aGlzLmJhc2VTaXRlU2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICBdKS5zdWJzY3JpYmUoKFt1c2VyLCBhY3RpdmVCYXNlU2l0ZV0pID0+IHtcbiAgICAgIGlmICh1c2VyICYmIHVzZXIuY3VzdG9tZXJJZCAmJiBhY3RpdmVCYXNlU2l0ZSkge1xuICAgICAgICB0aGlzLmN1c3RvbWVySWQgPSB1c2VyLmN1c3RvbWVySWQ7XG4gICAgICAgIHRoaXMuY2FydElkJC5uZXh0KGBzZWxlY3RpdmVjYXJ0JHthY3RpdmVCYXNlU2l0ZX0ke3RoaXMuY3VzdG9tZXJJZH1gKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlciAmJiAhdXNlci5jdXN0b21lcklkKSB7XG4gICAgICAgIHRoaXMuY2FydElkJC5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLnN1YnNjcmliZSh1c2VySWQgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG5cbiAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJJZCkpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoKGNhcnRFbnRpdHk6IExvYWRlclN0YXRlPENhcnQ+KToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGxvYWRpbmc6IGNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoeyBsb2FkaW5nIH0pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJ0SWQgJiYgdGhpcy5pc0VtcHR5KGNhcnQpICYmICFsb2FkZWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHsgY2FydCB9KSA9PiAoY2FydCA/IGNhcnQgOiB7fSkpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0KCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGl2ZUNhcnQkO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cmllcyh0aGlzLmNhcnRJZCk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgbWFwKGNhcnQgPT4gKGNhcnQuc3VjY2VzcyB8fCBjYXJ0LmVycm9yKSAmJiAhY2FydC5sb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnZWRJbih0aGlzLnVzZXJJZCkgJiYgdGhpcy5jYXJ0SWQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0SWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGxvYWRBdHRlbXB0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhcnRTZWxlY3RvciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIWxvYWRBdHRlbXB0ZWQpLFxuICAgICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkgJiYgIWNhcnRTdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICBsb2FkQXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoY2FydFN0YXRlKTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KFxuICAgICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICAgIHRoaXMuY2FydElkLFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eVxuICAgICk7XG4gIH1cblxuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLmNhcnRJZCwgcHJvZHVjdENvZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWNhcnQgfHwgKHR5cGVvZiBjYXJ0ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc0xvZ2dlZEluKHVzZXJJZCkgJiZcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdXNlcklkICE9PSAndW5kZWZpbmVkJyAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgfVxufVxuIl19