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
    WishListService = __decorate([
        Injectable()
    ], WishListService);
    return WishListService;
}());
export { WishListService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hEO0lBQ0UseUJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSGxDLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDM0MsQ0FBQztJQUVKLHdDQUFjLEdBQWQs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LENBQUM7aUJBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxDQUFDLE1BQU0sRUFBUCxDQUFPLENBQUMsQ0FBQztRQUZqQyxDQUVpQyxDQUNsQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRVMsdUNBQWEsR0FBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXBHa0IsS0FBSztnQkFDQyxXQUFXO2dCQUNYLFdBQVc7Z0JBQ04sZ0JBQWdCOztJQUxuQyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0F1RzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXZHWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IGdldFdpc2hsaXN0TmFtZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBjcmVhdGVXaXNoTGlzdCh1c2VySWQ6IHN0cmluZywgbmFtZT86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KHsgdXNlcklkLCBuYW1lLCBkZXNjcmlwdGlvbiB9KVxuICAgICk7XG4gIH1cblxuICBnZXRXaXNoTGlzdCgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmdldFdpc2hMaXN0SWQoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlciwgdXNlcklkXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIUJvb2xlYW4od2lzaExpc3RJZCkgJiZcbiAgICAgICAgICB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyAmJlxuICAgICAgICAgIEJvb2xlYW4odXNlcikgJiZcbiAgICAgICAgICBCb29sZWFuKHVzZXIuY3VzdG9tZXJJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkLCB1c2VyLmN1c3RvbWVySWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoW3dpc2hMaXN0SWRdKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydCh3aXNoTGlzdElkKSlcbiAgICApO1xuICB9XG5cbiAgbG9hZFdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBjdXN0b21lcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY3VzdG9tZXJJZCxcbiAgICAgICAgdGVtcENhcnRJZDogZ2V0V2lzaGxpc3ROYW1lKGN1c3RvbWVySWQpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZ2V0V2lzaExpc3RJZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSwgdGhpcy51c2VyU2VydmljZS5nZXQoKSksXG4gICAgICAgIHRhcCgoW3dpc2hMaXN0SWQsIHVzZXJJZCwgdXNlcl0pID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhQm9vbGVhbih3aXNoTGlzdElkKSAmJlxuICAgICAgICAgICAgQm9vbGVhbih1c2VyKSAmJlxuICAgICAgICAgICAgQm9vbGVhbih1c2VyLmN1c3RvbWVySWQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQsIHVzZXIuY3VzdG9tZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KHVzZXJJZCwgd2lzaExpc3RJZCwgcHJvZHVjdENvZGUsIDEpXG4gICAgICApO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksIHRoaXMudXNlclNlcnZpY2UuZ2V0KCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWQsIHVzZXJdKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIUJvb2xlYW4od2lzaExpc3RJZCkgJiZcbiAgICAgICAgICAgIEJvb2xlYW4odXNlcikgJiZcbiAgICAgICAgICAgIEJvb2xlYW4odXNlci5jdXN0b21lcklkKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkLCB1c2VyLmN1c3RvbWVySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeSh1c2VySWQsIHdpc2hMaXN0SWQsIGVudHJ5LmVudHJ5TnVtYmVyKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldFdpc2hMaXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaXNoTGlzdElkKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgod2lzaExpc3RJZCkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlXG4gICAgICAgICAgLmlzU3RhYmxlKHdpc2hMaXN0SWQpXG4gICAgICAgICAgLnBpcGUobWFwKChzdGFibGUpID0+ICFzdGFibGUpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0V2lzaExpc3RJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRXaXNoTGlzdElkKSk7XG4gIH1cbn1cbiJdfQ==