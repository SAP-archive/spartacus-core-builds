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
export class SelectiveCartService {
    /**
     * @param {?} store
     * @param {?} userService
     * @param {?} authService
     * @param {?} multiCartService
     */
    constructor(store, userService, authService, multiCartService) {
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
        cartId => {
            this.cartId = cartId;
            return this.multiCartService.getCartEntity(cartId);
        })));
        this.userService.get().subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (user && user.customerId) {
                this.customerId = user.customerId;
                this.cartId$.next(`selectivecart${this.customerId}`);
            }
            else if (user && !user.customerId) {
                this.cartId$.next(undefined);
            }
        }));
        this.authService.getOccUserId().subscribe((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            this.userId = userId;
            if (this.isJustLoggedIn(userId)) {
                this.load();
            }
            this.previousUserId = userId;
        }));
        this.selectiveCart$ = this.cartSelector$.pipe(map((/**
         * @param {?} cartEntity
         * @return {?}
         */
        (cartEntity) => {
            return {
                cart: cartEntity.value,
                loading: cartEntity.loading,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ loading }) => !loading)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart, loaded }) => {
            if (this.cartId && this.isEmpty(cart) && !loaded) {
                this.load();
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart }) => (cart ? cart : {}))), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    getCart() {
        return this.selectiveCart$;
    }
    /**
     * @return {?}
     */
    getEntries() {
        return this.multiCartService.getEntries(this.cartId);
    }
    /**
     * @return {?}
     */
    getLoaded() {
        return this.cartSelector$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => (cart.success || cart.error) && !cart.loading)));
    }
    /**
     * @private
     * @return {?}
     */
    load() {
        if (this.isLoggedIn(this.userId) && this.cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: this.cartId,
            });
        }
    }
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        /** @type {?} */
        let loadAttempted = false;
        this.cartSelector$
            .pipe(filter((/**
         * @return {?}
         */
        () => !loadAttempted)), switchMap((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => {
            if (this.isEmpty(cartState.value) && !cartState.loading) {
                loadAttempted = true;
                this.load();
            }
            return of(cartState);
        })), filter((/**
         * @param {?} cartState
         * @return {?}
         */
        cartState => !this.isEmpty(cartState.value))), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.multiCartService.addEntry(this.userId, this.cartId, productCode, quantity);
        }));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.multiCartService.getEntry(this.cartId, productCode);
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isJustLoggedIn(userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isLoggedIn(userId) {
        return typeof userId !== 'undefined' && userId !== OCC_USER_ID_ANONYMOUS;
    }
}
SelectiveCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectiveCartService.ctorParameters = () => [
    { type: Store },
    { type: UserService },
    { type: AuthService },
    { type: MultiCartService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9zZWxlY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUloRixNQUFNLE9BQU8sb0JBQW9COzs7Ozs7O0lBb0IvQixZQUNZLEtBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUhsQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBbkJ0QyxZQUFPLEdBQTRCLElBQUksZUFBZSxDQUM1RCxTQUFTLENBQ1YsQ0FBQztRQUVlLG1DQUE4QixHQUM3QyxnQ0FBZ0MsQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztRQUVyRCxrQkFBYSxHQUFH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QUdMLFdBQVc7WUFDWCxXQUFXO1lBRlgsZ0JBQWdCOzs7Ozs7O0lBWXZCLDBDQUEyQjs7Ozs7SUFDM0Isc0NBQXVCOzs7OztJQUN2QixzQ0FBdUI7Ozs7O0lBQ3ZCLDhDQUF5Qzs7Ozs7SUFDekMsdUNBRUU7Ozs7O0lBRUYsOERBQ21DOzs7OztJQUNuQyw4Q0FBNkQ7Ozs7O0lBRTdELDZDQUtFOzs7OztJQUdBLHFDQUEwQzs7Ozs7SUFDMUMsMkNBQWtDOzs7OztJQUNsQywyQ0FBa0M7Ozs7O0lBQ2xDLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0aXZlQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSB1c2VySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYXJ0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgcHJpdmF0ZSBjYXJ0SWQkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcblxuICBwcml2YXRlIGNhcnRTZWxlY3RvciQgPSB0aGlzLmNhcnRJZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoY2FydElkID0+IHtcbiAgICAgIHRoaXMuY2FydElkID0gY2FydElkO1xuICAgICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KGNhcnRJZCk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCkuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIgJiYgdXNlci5jdXN0b21lcklkKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJJZCA9IHVzZXIuY3VzdG9tZXJJZDtcbiAgICAgICAgdGhpcy5jYXJ0SWQkLm5leHQoYHNlbGVjdGl2ZWNhcnQke3RoaXMuY3VzdG9tZXJJZH1gKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlciAmJiAhdXNlci5jdXN0b21lcklkKSB7XG4gICAgICAgIHRoaXMuY2FydElkJC5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLnN1YnNjcmliZSh1c2VySWQgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG5cbiAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJJZCkpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoKGNhcnRFbnRpdHk6IExvYWRlclN0YXRlPENhcnQ+KToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGxvYWRpbmc6IGNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoeyBsb2FkaW5nIH0pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJ0SWQgJiYgdGhpcy5pc0VtcHR5KGNhcnQpICYmICFsb2FkZWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHsgY2FydCB9KSA9PiAoY2FydCA/IGNhcnQgOiB7fSkpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0KCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGl2ZUNhcnQkO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cmllcyh0aGlzLmNhcnRJZCk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgbWFwKGNhcnQgPT4gKGNhcnQuc3VjY2VzcyB8fCBjYXJ0LmVycm9yKSAmJiAhY2FydC5sb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnZWRJbih0aGlzLnVzZXJJZCkgJiYgdGhpcy5jYXJ0SWQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0SWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGxvYWRBdHRlbXB0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhcnRTZWxlY3RvciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIWxvYWRBdHRlbXB0ZWQpLFxuICAgICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkgJiYgIWNhcnRTdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICBsb2FkQXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoY2FydFN0YXRlKTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcihjYXJ0U3RhdGUgPT4gIXRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KFxuICAgICAgICAgIHRoaXMudXNlcklkLFxuICAgICAgICAgIHRoaXMuY2FydElkLFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eVxuICAgICk7XG4gIH1cblxuICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLmNhcnRJZCwgcHJvZHVjdENvZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWNhcnQgfHwgKHR5cGVvZiBjYXJ0ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc0xvZ2dlZEluKHVzZXJJZCkgJiZcbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHVzZXJJZCAmJiAvLyAqanVzdCogbG9nZ2VkIGluXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSAvLyBub3QgYXBwIGluaXRpYWxpemF0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdXNlcklkICE9PSAndW5kZWZpbmVkJyAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgfVxufVxuIl19