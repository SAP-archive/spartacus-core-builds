/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { UserService } from '../../user/facade/user.service';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
import { MultiCartService } from './multi-cart.service';
var WishListService = /** @class */ (function () {
    function WishListService(store, authService, userService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.userService = userService;
        this.multiCartService = multiCartService;
    }
    /**
     * @param {?} userId
     * @param {?=} name
     * @param {?=} description
     * @return {?}
     */
    WishListService.prototype.createWishList = /**
     * @param {?} userId
     * @param {?=} name
     * @param {?=} description
     * @return {?}
     */
    function (userId, name, description) {
        this.store.dispatch(new CartActions.CreateWishList({ userId: userId, name: name, description: description }));
    };
    /**
     * @return {?}
     */
    WishListService.prototype.getWishList = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return combineLatest([
            this.getWishListId(),
            this.userService.get(),
            this.authService.getOccUserId(),
        ]).pipe(distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), wishListId = _b[0], user = _b[1], userId = _b[2];
            if (!Boolean(wishListId) &&
                userId !== OCC_USER_ID_ANONYMOUS &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                _this.loadWishList(userId, user.customerId);
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), wishListId = _b[0];
            return Boolean(wishListId);
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), wishListId = _b[0];
            return _this.multiCartService.getCart(wishListId);
        })));
    };
    /**
     * @param {?} userId
     * @param {?} customerId
     * @return {?}
     */
    WishListService.prototype.loadWishList = /**
     * @param {?} userId
     * @param {?} customerId
     * @return {?}
     */
    function (userId, customerId) {
        this.store.dispatch(new CartActions.LoadWishList({ userId: userId, customerId: customerId }));
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    WishListService.prototype.addEntry = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        var _this = this;
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), wishListId = _b[0], userId = _b[1], user = _b[2];
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                _this.loadWishList(userId, user.customerId);
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), wishListId = _b[0];
            return Boolean(wishListId);
        })), take(1))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), wishListId = _b[0], userId = _b[1];
            return _this.multiCartService.addEntry(userId, wishListId, productCode, 1);
        }));
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    WishListService.prototype.removeEntry = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        var _this = this;
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), wishListId = _b[0], userId = _b[1], user = _b[2];
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                _this.loadWishList(userId, user.customerId);
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), wishListId = _b[0];
            return Boolean(wishListId);
        })), take(1))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), wishListId = _b[0], userId = _b[1];
            return _this.multiCartService.removeEntry(userId, wishListId, entry.entryNumber);
        }));
    };
    /**
     * @return {?}
     */
    WishListService.prototype.getWishListLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getWishListId().pipe(switchMap((/**
         * @param {?} wishListId
         * @return {?}
         */
        function (wishListId) {
            return _this.multiCartService.isStable(wishListId).pipe(map((/**
             * @param {?} stable
             * @return {?}
             */
            function (stable) { return !stable; })));
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    WishListService.prototype.getWishListId = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.store.pipe(select(MultiCartSelectors.getWishListId));
    };
    WishListService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WishListService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: UserService },
        { type: MultiCartService }
    ]; };
    return WishListService;
}());
export { WishListService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    WishListService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    WishListService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    WishListService.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    WishListService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBRUUseUJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSGxDLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDM0MsQ0FBQzs7Ozs7OztJQUVKLHdDQUFjOzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxJQUFhLEVBQUUsV0FB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QyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sRUFBUCxDQUFPLEVBQUMsQ0FBQztRQUF2RSxDQUF1RSxFQUN4RSxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVTLHVDQUFhOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkEvRkYsVUFBVTs7OztnQkFwQk0sS0FBSztnQkFXYixXQUFXO2dCQUdYLFdBQVc7Z0JBSVgsZ0JBQWdCOztJQWtHekIsc0JBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQS9GWSxlQUFlOzs7Ozs7SUFFeEIsZ0NBQTBDOzs7OztJQUMxQyxzQ0FBa0M7Ozs7O0lBQ2xDLHNDQUFrQzs7Ozs7SUFDbEMsMkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBjcmVhdGVXaXNoTGlzdCh1c2VySWQ6IHN0cmluZywgbmFtZT86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZVdpc2hMaXN0KHsgdXNlcklkLCBuYW1lLCBkZXNjcmlwdGlvbiB9KVxuICAgICk7XG4gIH1cblxuICBnZXRXaXNoTGlzdCgpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmdldFdpc2hMaXN0SWQoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlciwgdXNlcklkXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIUJvb2xlYW4od2lzaExpc3RJZCkgJiZcbiAgICAgICAgICB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyAmJlxuICAgICAgICAgIEJvb2xlYW4odXNlcikgJiZcbiAgICAgICAgICBCb29sZWFuKHVzZXIuY3VzdG9tZXJJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkLCB1c2VyLmN1c3RvbWVySWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoW3dpc2hMaXN0SWRdKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydCh3aXNoTGlzdElkKSlcbiAgICApO1xuICB9XG5cbiAgbG9hZFdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBjdXN0b21lcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzaExpc3QoeyB1c2VySWQsIGN1c3RvbWVySWQgfSkpO1xuICB9XG5cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZ2V0V2lzaExpc3RJZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSwgdGhpcy51c2VyU2VydmljZS5nZXQoKSksXG4gICAgICAgIHRhcCgoW3dpc2hMaXN0SWQsIHVzZXJJZCwgdXNlcl0pID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhQm9vbGVhbih3aXNoTGlzdElkKSAmJlxuICAgICAgICAgICAgQm9vbGVhbih1c2VyKSAmJlxuICAgICAgICAgICAgQm9vbGVhbih1c2VyLmN1c3RvbWVySWQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQsIHVzZXIuY3VzdG9tZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KHVzZXJJZCwgd2lzaExpc3RJZCwgcHJvZHVjdENvZGUsIDEpXG4gICAgICApO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksIHRoaXMudXNlclNlcnZpY2UuZ2V0KCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWQsIHVzZXJdKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIUJvb2xlYW4od2lzaExpc3RJZCkgJiZcbiAgICAgICAgICAgIEJvb2xlYW4odXNlcikgJiZcbiAgICAgICAgICAgIEJvb2xlYW4odXNlci5jdXN0b21lcklkKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkLCB1c2VyLmN1c3RvbWVySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeSh1c2VySWQsIHdpc2hMaXN0SWQsIGVudHJ5LmVudHJ5TnVtYmVyKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldFdpc2hMaXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaXNoTGlzdElkKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCh3aXNoTGlzdElkID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5pc1N0YWJsZSh3aXNoTGlzdElkKS5waXBlKG1hcChzdGFibGUgPT4gIXN0YWJsZSkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRXaXNoTGlzdElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0SWQpKTtcbiAgfVxufVxuIl19