import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { filter, map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { UserService } from '../../user/facade/user.service';
import { CartConfigService } from '../services/cart-config.service';
import { MultiCartService } from './multi-cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../user/facade/user.service";
import * as i3 from "../../auth/facade/auth.service";
import * as i4 from "./multi-cart.service";
import * as i5 from "../../site-context/facade/base-site.service";
import * as i6 from "../services/cart-config.service";
var SelectiveCartService = /** @class */ (function () {
    function SelectiveCartService(store, userService, authService, multiCartService, baseSiteService, cartConfigService) {
        var _this = this;
        this.store = store;
        this.userService = userService;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.baseSiteService = baseSiteService;
        this.cartConfigService = cartConfigService;
        this.cartId$ = new BehaviorSubject(undefined);
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.cartSelector$ = this.cartId$.pipe(switchMap(function (cartId) {
            _this.cartId = cartId;
            return _this.multiCartService.getCartEntity(cartId);
        }));
        combineLatest([
            this.userService.get(),
            this.baseSiteService.getActive(),
        ]).subscribe(function (_a) {
            var _b = __read(_a, 2), user = _b[0], activeBaseSite = _b[1];
            if (user && user.customerId && activeBaseSite) {
                _this.customerId = user.customerId;
                _this.cartId$.next("selectivecart" + activeBaseSite + _this.customerId);
            }
            else if (user && !user.customerId) {
                _this.cartId$.next(undefined);
            }
        });
        this.authService.getOccUserId().subscribe(function (userId) {
            _this.userId = userId;
            if (_this.isJustLoggedIn(userId)) {
                _this.load();
            }
            _this.previousUserId = userId;
        });
        this.selectiveCart$ = this.cartSelector$.pipe(map(function (cartEntity) {
            return {
                cart: cartEntity.value,
                loading: cartEntity.loading,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), filter(function (_a) {
            var loading = _a.loading;
            return !loading;
        }), tap(function (_a) {
            var cart = _a.cart, loaded = _a.loaded;
            if (_this.cartId && _this.isEmpty(cart) && !loaded) {
                _this.load();
            }
        }), map(function (_a) {
            var cart = _a.cart;
            return (cart ? cart : {});
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    SelectiveCartService.prototype.getCart = function () {
        return this.selectiveCart$;
    };
    SelectiveCartService.prototype.getEntries = function () {
        return this.multiCartService.getEntries(this.cartId);
    };
    SelectiveCartService.prototype.getLoaded = function () {
        return this.cartSelector$.pipe(map(function (cart) { return (cart.success || cart.error) && !cart.loading; }));
    };
    SelectiveCartService.prototype.load = function () {
        if (this.isLoggedIn(this.userId) && this.cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: this.cartId,
            });
        }
    };
    SelectiveCartService.prototype.addEntry = function (productCode, quantity) {
        var _this = this;
        var loadAttempted = false;
        this.cartSelector$
            .pipe(filter(function () { return !loadAttempted; }), switchMap(function (cartState) {
            if (_this.isEmpty(cartState.value) && !cartState.loading) {
                loadAttempted = true;
                _this.load();
            }
            return of(cartState);
        }), filter(function (cartState) { return !_this.isEmpty(cartState.value); }), take(1))
            .subscribe(function () {
            _this.multiCartService.addEntry(_this.userId, _this.cartId, productCode, quantity);
        });
    };
    SelectiveCartService.prototype.removeEntry = function (entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    };
    SelectiveCartService.prototype.updateEntry = function (entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    };
    SelectiveCartService.prototype.getEntry = function (productCode) {
        return this.multiCartService.getEntry(this.cartId, productCode);
    };
    /**
     * Indicates if selectiveCart feature is enabled based on cart configuration.
     */
    SelectiveCartService.prototype.isEnabled = function () {
        return this.cartConfigService.isSelectiveCartEnabled();
    };
    SelectiveCartService.prototype.isEmpty = function (cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    };
    SelectiveCartService.prototype.isJustLoggedIn = function (userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    };
    SelectiveCartService.prototype.isLoggedIn = function (userId) {
        return typeof userId !== 'undefined' && userId !== OCC_USER_ID_ANONYMOUS;
    };
    SelectiveCartService.ctorParameters = function () { return [
        { type: Store },
        { type: UserService },
        { type: AuthService },
        { type: MultiCartService },
        { type: BaseSiteService },
        { type: CartConfigService }
    ]; };
    SelectiveCartService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SelectiveCartService_Factory() { return new SelectiveCartService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserService), i0.ɵɵinject(i3.AuthService), i0.ɵɵinject(i4.MultiCartService), i0.ɵɵinject(i5.BaseSiteService), i0.ɵɵinject(i6.CartConfigService)); }, token: SelectiveCartService, providedIn: "root" });
    SelectiveCartService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SelectiveCartService);
    return SelectiveCartService;
}());
export { SelectiveCartService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9zZWxlY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7OztBQUt4RDtJQW9CRSw4QkFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBTmhELGlCQW9EQztRQW5EVyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYs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QUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRU8sNkNBQWMsR0FBdEIsVUFBdUIsTUFBYztRQUNuQyxPQUFPLENBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLElBQUksbUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQztJQUVPLHlDQUFVLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLHFCQUFxQixDQUFDO0lBQzNFLENBQUM7O2dCQWpKa0IsS0FBSztnQkFDQyxXQUFXO2dCQUNYLFdBQVc7Z0JBQ04sZ0JBQWdCO2dCQUNqQixlQUFlO2dCQUNiLGlCQUFpQjs7O0lBMUJyQyxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXVLaEM7K0JBekxEO0NBeUxDLEFBdktELElBdUtDO1NBdktZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhcnQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0aXZlQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSB1c2VySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYXJ0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWxlY3RpdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgcHJpdmF0ZSBjYXJ0SWQkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSA9XG4gICAgJ1BSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRSc7XG4gIHByaXZhdGUgcHJldmlvdXNVc2VySWQgPSB0aGlzLlBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcblxuICBwcml2YXRlIGNhcnRTZWxlY3RvciQgPSB0aGlzLmNhcnRJZCQucGlwZShcbiAgICBzd2l0Y2hNYXAoKGNhcnRJZCkgPT4ge1xuICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnRFbnRpdHkoY2FydElkKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0Q29uZmlnU2VydmljZTogQ2FydENvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLFxuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgXSkuc3Vic2NyaWJlKChbdXNlciwgYWN0aXZlQmFzZVNpdGVdKSA9PiB7XG4gICAgICBpZiAodXNlciAmJiB1c2VyLmN1c3RvbWVySWQgJiYgYWN0aXZlQmFzZVNpdGUpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lcklkID0gdXNlci5jdXN0b21lcklkO1xuICAgICAgICB0aGlzLmNhcnRJZCQubmV4dChgc2VsZWN0aXZlY2FydCR7YWN0aXZlQmFzZVNpdGV9JHt0aGlzLmN1c3RvbWVySWR9YCk7XG4gICAgICB9IGVsc2UgaWYgKHVzZXIgJiYgIXVzZXIuY3VzdG9tZXJJZCkge1xuICAgICAgICB0aGlzLmNhcnRJZCQubmV4dCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5zdWJzY3JpYmUoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG5cbiAgICAgIGlmICh0aGlzLmlzSnVzdExvZ2dlZEluKHVzZXJJZCkpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgPSB1c2VySWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGl2ZUNhcnQkID0gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoKGNhcnRFbnRpdHk6IExvYWRlclN0YXRlPENhcnQ+KToge1xuICAgICAgICBjYXJ0OiBDYXJ0O1xuICAgICAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGxvYWRpbmc6IGNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoeyBsb2FkaW5nIH0pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJ0SWQgJiYgdGhpcy5pc0VtcHR5KGNhcnQpICYmICFsb2FkZWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHsgY2FydCB9KSA9PiAoY2FydCA/IGNhcnQgOiB7fSkpLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0KCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGl2ZUNhcnQkO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cmllcyh0aGlzLmNhcnRJZCk7XG4gIH1cblxuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgbWFwKChjYXJ0KSA9PiAoY2FydC5zdWNjZXNzIHx8IGNhcnQuZXJyb3IpICYmICFjYXJ0LmxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKHRoaXMudXNlcklkKSAmJiB0aGlzLmNhcnRJZCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnRJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbG9hZEF0dGVtcHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FydFNlbGVjdG9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhbG9hZEF0dGVtcHRlZCksXG4gICAgICAgIHN3aXRjaE1hcCgoY2FydFN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpICYmICFjYXJ0U3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgbG9hZEF0dGVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9mKGNhcnRTdGF0ZSk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKGNhcnRTdGF0ZSkgPT4gIXRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyeShcbiAgICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgICB0aGlzLmNhcnRJZCxcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICBxdWFudGl0eVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeS5lbnRyeU51bWJlclxuICAgICk7XG4gIH1cblxuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5jYXJ0SWQsIHByb2R1Y3RDb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgc2VsZWN0aXZlQ2FydCBmZWF0dXJlIGlzIGVuYWJsZWQgYmFzZWQgb24gY2FydCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRDb25maWdTZXJ2aWNlLmlzU2VsZWN0aXZlQ2FydEVuYWJsZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbXB0eShjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFjYXJ0IHx8ICh0eXBlb2YgY2FydCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzSnVzdExvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNMb2dnZWRJbih1c2VySWQpICYmXG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkICE9PSB1c2VySWQgJiYgLy8gKmp1c3QqIGxvZ2dlZCBpblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgLy8gbm90IGFwcCBpbml0aWFsaXphdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzTG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHVzZXJJZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIH1cbn1cbiJdfQ==