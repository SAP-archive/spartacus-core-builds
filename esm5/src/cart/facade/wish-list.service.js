/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, filter, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
var WishListService = /** @class */ (function () {
    function WishListService(store, authService) {
        this.store = store;
        this.authService = authService;
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
            return _this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(wishListId)));
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
            return _this.store.dispatch(new CartActions.CartAddEntry({
                userId: userId,
                cartId: wishListId,
                productCode: productCode,
                quantity: 1,
            }));
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
            return _this.store.dispatch(new CartActions.CartRemoveEntry({
                userId: userId,
                cartId: wishListId,
                entry: entry.entryNumber,
            }));
        }));
    };
    /**
     * @return {?}
     */
    WishListService.prototype.getWishListLoading = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(MultiCartSelectors.getWishListLoading));
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
        { type: AuthService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFOUQ7SUFFRSx5QkFDWSxLQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDOzs7Ozs7O0lBRUosd0NBQWM7Ozs7OztJQUFkLFVBQWUsTUFBYyxFQUFFLElBQWEsRUFBRSxXQUFvQjtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUFBLGlCQWdCQztRQWZDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDOUIsb0JB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QUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxFQUFvQjtnQkFBcEIsMEJBQW9CLEVBQW5CLGtCQUFVLEVBQUUsY0FBTTtZQUM3QixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7Z0JBQzlCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7YUFDekIsQ0FBQyxDQUNIO1FBTkQsQ0FNQyxFQUNGLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsNENBQWtCOzs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFUyx1Q0FBYTs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBMUZGLFVBQVU7Ozs7Z0JBakJNLEtBQUs7Z0JBVWIsV0FBVzs7SUFrR3BCLHNCQUFDO0NBQUEsQUEzRkQsSUEyRkM7U0ExRlksZUFBZTs7Ozs7O0lBRXhCLGdDQUEwQzs7Ozs7SUFDMUMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgY3JlYXRlV2lzaExpc3QodXNlcklkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCh7IHVzZXJJZCwgbmFtZSwgZGVzY3JpcHRpb24gfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lzaExpc3RJZCgpLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSksXG4gICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbih3aXNoTGlzdElkKSAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgc3dpdGNoTWFwKChbd2lzaExpc3RJZF0pID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRTZWxlY3RvckZhY3Rvcnkod2lzaExpc3RJZCkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbG9hZFdpc2hMaXN0KHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuTG9hZFdpc3RoTGlzdCh1c2VySWQpKTtcbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFCb29sZWFuKHdpc2hMaXN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeSh7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogd2lzaExpc3RJZCxcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0V2lzaExpc3RJZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSksXG4gICAgICAgIHRhcCgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4od2lzaExpc3RJZCkpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5KHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiB3aXNoTGlzdElkLFxuICAgICAgICAgICAgZW50cnk6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBnZXRXaXNoTGlzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0TG9hZGluZykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFdpc2hMaXN0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0V2lzaExpc3RJZCkpO1xuICB9XG59XG4iXX0=