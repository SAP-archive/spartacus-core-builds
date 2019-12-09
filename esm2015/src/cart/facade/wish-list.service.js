/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, filter, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
export class WishListService {
    /**
     * @param {?} store
     * @param {?} authService
     */
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
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
        ([wishListId]) => this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(wishListId))))));
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
        ([wishListId, userId]) => this.store.dispatch(new CartActions.CartAddEntry({
            userId: userId,
            cartId: wishListId,
            productCode: productCode,
            quantity: 1,
        }))));
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
        ([wishListId, userId]) => this.store.dispatch(new CartActions.CartRemoveEntry({
            userId: userId,
            cartId: wishListId,
            entry: entry.entryNumber,
        }))));
    }
    /**
     * @return {?}
     */
    getWishListLoading() {
        return this.store.pipe(select(MultiCartSelectors.getWishListLoading));
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
    { type: AuthService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUc5RCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFDMUIsWUFDWSxLQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDOzs7Ozs7O0lBRUosY0FBYyxDQUFDLE1BQWMsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUM5QixvQkFBb0IsRUFBRSxFQUN0QixjQUFjLENBQUMsSUFB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Q0FBQyxXQUFXO1NBQ3pCLENBQUMsQ0FDSCxFQUNGLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVTLGFBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUExRkYsVUFBVTs7OztZQWpCTSxLQUFLO1lBVWIsV0FBVzs7Ozs7OztJQVVoQixnQ0FBMEM7Ozs7O0lBQzFDLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQsIE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lzaExpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNyZWF0ZVdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QoeyB1c2VySWQsIG5hbWUsIGRlc2NyaXB0aW9uIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFdpc2hMaXN0KCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmdldFdpc2hMaXN0SWQoKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkpLFxuICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4od2lzaExpc3RJZCkgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoW3dpc2hMaXN0SWRdKSA9PlxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0U2VsZWN0b3JGYWN0b3J5KHdpc2hMaXN0SWQpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRXaXNoTGlzdCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENhcnRBY3Rpb25zLkxvYWRXaXN0aExpc3QodXNlcklkKSk7XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nZXRXaXNoTGlzdElkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpKSxcbiAgICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT4ge1xuICAgICAgICAgIGlmICghQm9vbGVhbih3aXNoTGlzdElkKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkV2lzaExpc3QodXNlcklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFt3aXNoTGlzdElkXSkgPT4gQm9vbGVhbih3aXNoTGlzdElkKSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IHdpc2hMaXN0SWQsXG4gICAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmdldFdpc2hMaXN0SWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkpLFxuICAgICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFCb29sZWFuKHdpc2hMaXN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3dpc2hMaXN0SWRdKSA9PiBCb29sZWFuKHdpc2hMaXN0SWQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3dpc2hMaXN0SWQsIHVzZXJJZF0pID0+XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeSh7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogd2lzaExpc3RJZCxcbiAgICAgICAgICAgIGVudHJ5OiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgZ2V0V2lzaExpc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRXaXNoTGlzdExvYWRpbmcpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRXaXNoTGlzdElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldFdpc2hMaXN0SWQpKTtcbiAgfVxufVxuIl19