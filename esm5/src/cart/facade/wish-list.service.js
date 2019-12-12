/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
import { MultiCartService } from './multi-cart.service';
var WishListService = /** @class */ (function () {
    function WishListService(store, authService, multiCartService) {
        this.store = store;
        this.authService = authService;
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
        return this.getWishListId().pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), wishListId = _b[0], userId = _b[1];
            if (!Boolean(wishListId) && userId !== OCC_USER_ID_ANONYMOUS) {
                _this.loadWishList(userId);
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
     * @return {?}
     */
    WishListService.prototype.loadWishList = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new CartActions.LoadWisthList(userId));
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
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), wishListId = _b[0], userId = _b[1];
            if (!Boolean(wishListId)) {
                _this.loadWishList(userId);
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
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), wishListId = _b[0], userId = _b[1];
            if (!Boolean(wishListId)) {
                _this.loadWishList(userId);
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
    WishListService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBRUUseUJBQ1ksS0FBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRmxDLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDM0MsQ0FBQzs7Ozs7OztJQUVKLHdDQUFjOzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FD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QSxTQUFTOzs7O1FBQUMsVUFBQyxFQUFvQjtnQkFBcEIsMEJBQW9CLEVBQW5CLGtCQUFVLEVBQUUsY0FBTTtZQUM3QixPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQXhFLENBQXdFLEVBQ3pFLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsNENBQWtCOzs7SUFBbEI7UUFBQSxpQkFNQztRQUxDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDOUIsU0FBUzs7OztRQUFDLFVBQUEsVUFBVTtZQUNsQixPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsTUFBTSxFQUFQLENBQU8sRUFBQyxDQUFDO1FBQXZFLENBQXVFLEVBQ3hFLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRVMsdUNBQWE7Ozs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQTlFRixVQUFVOzs7O2dCQW5CTSxLQUFLO2dCQVdiLFdBQVc7Z0JBTVgsZ0JBQWdCOztJQWlGekIsc0JBQUM7Q0FBQSxBQS9FRCxJQStFQztTQTlFWSxlQUFlOzs7Ozs7SUFFeEIsZ0NBQTBDOzs7OztJQUMxQyxzQ0FBa0M7Ozs7O0lBQ2xDLDJDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lzaExpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNyZWF0ZVdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QoeyB1c2VySWQsIG5hbWUsIGRlc2NyaXB0aW9uIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFdpc2hMaXN0KCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmdldFdpc2hMaXN0SWQoKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkpLFxuICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4od2lzaExpc3RJZCkgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoW3dpc2hMaXN0SWRdKSA9PiB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZ2V0Q2FydCh3aXNoTGlzdElkKSlcbiAgICApO1xuICB9XG5cbiAgbG9hZFdpc2hMaXN0KHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc3RoTGlzdCh1c2VySWQpKTtcbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFCb29sZWFuKHdpc2hMaXN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hZGRFbnRyeSh1c2VySWQsIHdpc2hMaXN0SWQsIHByb2R1Y3RDb2RlLCAxKVxuICAgICAgKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5nZXRXaXNoTGlzdElkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpKSxcbiAgICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT4ge1xuICAgICAgICAgIGlmICghQm9vbGVhbih3aXNoTGlzdElkKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFt3aXNoTGlzdElkXSkgPT4gQm9vbGVhbih3aXNoTGlzdElkKSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PlxuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkodXNlcklkLCB3aXNoTGlzdElkLCBlbnRyeS5lbnRyeU51bWJlcilcbiAgICAgICk7XG4gIH1cblxuICBnZXRXaXNoTGlzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lzaExpc3RJZCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAod2lzaExpc3RJZCA9PlxuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuaXNTdGFibGUod2lzaExpc3RJZCkucGlwZShtYXAoc3RhYmxlID0+ICFzdGFibGUpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0V2lzaExpc3RJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRXaXNoTGlzdElkKSk7XG4gIH1cbn1cbiJdfQ==