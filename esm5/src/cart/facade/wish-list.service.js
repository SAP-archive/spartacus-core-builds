import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { UserService } from '../../user/facade/user.service';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
import { getWishlistName } from '../utils/utils';
import { MultiCartService } from './multi-cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../user/facade/user.service";
import * as i4 from "./multi-cart.service";
var WishListService = /** @class */ (function () {
    function WishListService(store, authService, userService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.userService = userService;
        this.multiCartService = multiCartService;
    }
    WishListService.prototype.createWishList = function (userId, name, description) {
        this.store.dispatch(new CartActions.CreateWishList({ userId: userId, name: name, description: description }));
    };
    WishListService.prototype.getWishList = function () {
        var _this = this;
        return combineLatest([
            this.getWishListId(),
            this.userService.get(),
            this.authService.getOccUserId(),
        ]).pipe(distinctUntilChanged(), tap(function (_a) {
            var _b = __read(_a, 3), wishListId = _b[0], user = _b[1], userId = _b[2];
            if (!Boolean(wishListId) &&
                userId !== OCC_USER_ID_ANONYMOUS &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                _this.loadWishList(userId, user.customerId);
            }
        }), filter(function (_a) {
            var _b = __read(_a, 1), wishListId = _b[0];
            return Boolean(wishListId);
        }), switchMap(function (_a) {
            var _b = __read(_a, 1), wishListId = _b[0];
            return _this.multiCartService.getCart(wishListId);
        }));
    };
    WishListService.prototype.loadWishList = function (userId, customerId) {
        this.store.dispatch(new CartActions.LoadWishList({
            userId: userId,
            customerId: customerId,
            tempCartId: getWishlistName(customerId),
        }));
    };
    WishListService.prototype.addEntry = function (productCode) {
        var _this = this;
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap(function (_a) {
            var _b = __read(_a, 3), wishListId = _b[0], userId = _b[1], user = _b[2];
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                _this.loadWishList(userId, user.customerId);
            }
        }), filter(function (_a) {
            var _b = __read(_a, 1), wishListId = _b[0];
            return Boolean(wishListId);
        }), take(1))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), wishListId = _b[0], userId = _b[1];
            return _this.multiCartService.addEntry(userId, wishListId, productCode, 1);
        });
    };
    WishListService.prototype.removeEntry = function (entry) {
        var _this = this;
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap(function (_a) {
            var _b = __read(_a, 3), wishListId = _b[0], userId = _b[1], user = _b[2];
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                _this.loadWishList(userId, user.customerId);
            }
        }), filter(function (_a) {
            var _b = __read(_a, 1), wishListId = _b[0];
            return Boolean(wishListId);
        }), take(1))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), wishListId = _b[0], userId = _b[1];
            return _this.multiCartService.removeEntry(userId, wishListId, entry.entryNumber);
        });
    };
    WishListService.prototype.getWishListLoading = function () {
        var _this = this;
        return this.getWishListId().pipe(switchMap(function (wishListId) {
            return _this.multiCartService
                .isStable(wishListId)
                .pipe(map(function (stable) { return !stable; }));
        }));
    };
    WishListService.prototype.getWishListId = function () {
        return this.store.pipe(select(MultiCartSelectors.getWishListId));
    };
    WishListService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: UserService },
        { type: MultiCartService }
    ]; };
    WishListService.ɵprov = i0.ɵɵdefineInjectable({ factory: function WishListService_Factory() { return new WishListService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.UserService), i0.ɵɵinject(i4.MultiCartService)); }, token: WishListService, providedIn: "root" });
    WishListService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], WishListService);
    return WishListService;
}());
export { WishListService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFLeEQ7SUFDRSx5QkFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0M7UUFIbEMsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMzQyxDQUFDO0lBRUosd0NBQWMs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LFVBQVUsQ0FBQztpQkFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLENBQUMsTUFBTSxFQUFQLENBQU8sQ0FBQyxDQUFDO1FBRmpDLENBRWlDLENBQ2xDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFUyx1Q0FBYSxHQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBcEdrQixLQUFLO2dCQUNDLFdBQVc7Z0JBQ1gsV0FBVztnQkFDTixnQkFBZ0I7OztJQUxuQyxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBdUczQjswQkFoSUQ7Q0FnSUMsQUF2R0QsSUF1R0M7U0F2R1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9mYWNhZGUvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBnZXRXaXNobGlzdE5hbWUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgV2lzaExpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgY3JlYXRlV2lzaExpc3QodXNlcklkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCh7IHVzZXJJZCwgbmFtZSwgZGVzY3JpcHRpb24gfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRXaXNoTGlzdElkKCksXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHRhcCgoW3dpc2hMaXN0SWQsIHVzZXIsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFCb29sZWFuKHdpc2hMaXN0SWQpICYmXG4gICAgICAgICAgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgJiZcbiAgICAgICAgICBCb29sZWFuKHVzZXIpICYmXG4gICAgICAgICAgQm9vbGVhbih1c2VyLmN1c3RvbWVySWQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCwgdXNlci5jdXN0b21lcklkKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKFt3aXNoTGlzdElkXSkgPT4gQm9vbGVhbih3aXNoTGlzdElkKSksXG4gICAgICBzd2l0Y2hNYXAoKFt3aXNoTGlzdElkXSkgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnQod2lzaExpc3RJZCkpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRXaXNoTGlzdCh1c2VySWQ6IHN0cmluZywgY3VzdG9tZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3Qoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGN1c3RvbWVySWQsXG4gICAgICAgIHRlbXBDYXJ0SWQ6IGdldFdpc2hsaXN0TmFtZShjdXN0b21lcklkKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksIHRoaXMudXNlclNlcnZpY2UuZ2V0KCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWQsIHVzZXJdKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIUJvb2xlYW4od2lzaExpc3RJZCkgJiZcbiAgICAgICAgICAgIEJvb2xlYW4odXNlcikgJiZcbiAgICAgICAgICAgIEJvb2xlYW4odXNlci5jdXN0b21lcklkKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkLCB1c2VyLmN1c3RvbWVySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyeSh1c2VySWQsIHdpc2hMaXN0SWQsIHByb2R1Y3RDb2RlLCAxKVxuICAgICAgKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5nZXRXaXNoTGlzdElkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLCB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpKSxcbiAgICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlcklkLCB1c2VyXSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFCb29sZWFuKHdpc2hMaXN0SWQpICYmXG4gICAgICAgICAgICBCb29sZWFuKHVzZXIpICYmXG4gICAgICAgICAgICBCb29sZWFuKHVzZXIuY3VzdG9tZXJJZClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCwgdXNlci5jdXN0b21lcklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFt3aXNoTGlzdElkXSkgPT4gQm9vbGVhbih3aXNoTGlzdElkKSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PlxuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkodXNlcklkLCB3aXNoTGlzdElkLCBlbnRyeS5lbnRyeU51bWJlcilcbiAgICAgICk7XG4gIH1cblxuICBnZXRXaXNoTGlzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lzaExpc3RJZCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHdpc2hMaXN0SWQpID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZVxuICAgICAgICAgIC5pc1N0YWJsZSh3aXNoTGlzdElkKVxuICAgICAgICAgIC5waXBlKG1hcCgoc3RhYmxlKSA9PiAhc3RhYmxlKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFdpc2hMaXN0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0V2lzaExpc3RJZCkpO1xuICB9XG59XG4iXX0=