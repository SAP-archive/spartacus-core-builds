/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
import { MultiCartService } from './multi-cart.service';
export class WishListService {
    /**
     * @param {?} store
     * @param {?} authService
     * @param {?} multiCartService
     */
    constructor(store, authService, multiCartService) {
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
    createWishList(userId, name, description) {
        this.store.dispatch(new CartActions.CreateWishList({ userId, name, description }));
    }
    /**
     * @return {?}
     */
    getWishList() {
        return this.getWishListId().pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId]) => {
            if (!Boolean(wishListId) && userId !== OCC_USER_ID_ANONYMOUS) {
                this.loadWishList(userId);
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId]) => Boolean(wishListId))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId]) => this.multiCartService.getCart(wishListId))));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadWishList(userId) {
        this.store.dispatch(new CartActions.LoadWisthList(userId));
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    addEntry(productCode) {
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId]) => {
            if (!Boolean(wishListId)) {
                this.loadWishList(userId);
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId]) => Boolean(wishListId))), take(1))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId]) => this.multiCartService.addEntry(userId, wishListId, productCode, 1)));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId]) => {
            if (!Boolean(wishListId)) {
                this.loadWishList(userId);
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId]) => Boolean(wishListId))), take(1))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId]) => this.multiCartService.removeEntry(userId, wishListId, entry.entryNumber)));
    }
    /**
     * @return {?}
     */
    getWishListLoading() {
        return this.getWishListId().pipe(switchMap((/**
         * @param {?} wishListId
         * @return {?}
         */
        wishListId => this.multiCartService.isStable(wishListId).pipe(map((/**
         * @param {?} stable
         * @return {?}
         */
        stable => !stable))))));
    }
    /**
     * @protected
     * @return {?}
     */
    getWishListId() {
        return this.store.pipe(select(MultiCartSelectors.getWishListId));
    }
}
WishListService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WishListService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: MultiCartService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixZQUNZLEtBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUZsQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7Ozs7Ozs7SUFFSixjQUFjLENBQUMsTUFBYyxFQUFFLElBQWEsRUFBRSxXQUFvQjtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUM5RCxDQUFD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QUMsSUFBSSxDQUM5QixTQUFTOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUUsQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUN4RSxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVTLGFBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUE5RUYsVUFBVTs7OztZQW5CTSxLQUFLO1lBV2IsV0FBVztZQU1YLGdCQUFnQjs7Ozs7OztJQUtyQixnQ0FBMEM7Ozs7O0lBQzFDLHNDQUFrQzs7Ozs7SUFDbEMsMkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgY3JlYXRlV2lzaExpc3QodXNlcklkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVXaXNoTGlzdCh7IHVzZXJJZCwgbmFtZSwgZGVzY3JpcHRpb24gfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lzaExpc3RJZCgpLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSksXG4gICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbih3aXNoTGlzdElkKSAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgc3dpdGNoTWFwKChbd2lzaExpc3RJZF0pID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0KHdpc2hMaXN0SWQpKVxuICAgICk7XG4gIH1cblxuICBsb2FkV2lzaExpc3QodXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5Mb2FkV2lzdGhMaXN0KHVzZXJJZCkpO1xuICB9XG5cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZ2V0V2lzaExpc3RJZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSksXG4gICAgICAgIHRhcCgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4od2lzaExpc3RJZCkpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJ5KHVzZXJJZCwgd2lzaExpc3RJZCwgcHJvZHVjdENvZGUsIDEpXG4gICAgICApO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFCb29sZWFuKHdpc2hMaXN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5yZW1vdmVFbnRyeSh1c2VySWQsIHdpc2hMaXN0SWQsIGVudHJ5LmVudHJ5TnVtYmVyKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldFdpc2hMaXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaXNoTGlzdElkKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCh3aXNoTGlzdElkID0+XG4gICAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5pc1N0YWJsZSh3aXNoTGlzdElkKS5waXBlKG1hcChzdGFibGUgPT4gIXN0YWJsZSkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRXaXNoTGlzdElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0SWQpKTtcbiAgfVxufVxuIl19