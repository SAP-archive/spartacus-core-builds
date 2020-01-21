/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class WishListService {
    /**
     * @param {?} store
     * @param {?} authService
     * @param {?} userService
     * @param {?} multiCartService
     */
    constructor(store, authService, userService, multiCartService) {
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
    createWishList(userId, name, description) {
        this.store.dispatch(new CartActions.CreateWishList({ userId, name, description }));
    }
    /**
     * @return {?}
     */
    getWishList() {
        return combineLatest([
            this.getWishListId(),
            this.userService.get(),
            this.authService.getOccUserId(),
        ]).pipe(distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, user, userId]) => {
            if (!Boolean(wishListId) &&
                userId !== OCC_USER_ID_ANONYMOUS &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                this.loadWishList(userId, user.customerId);
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
     * @param {?} customerId
     * @return {?}
     */
    loadWishList(userId, customerId) {
        this.store.dispatch(new CartActions.LoadWishList({ userId, customerId }));
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    addEntry(productCode) {
        this.getWishListId()
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId, user]) => {
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                this.loadWishList(userId, user.customerId);
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
            .pipe(distinctUntilChanged(), withLatestFrom(this.authService.getOccUserId(), this.userService.get()), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([wishListId, userId, user]) => {
            if (!Boolean(wishListId) &&
                Boolean(user) &&
                Boolean(user.customerId)) {
                this.loadWishList(userId, user.customerId);
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
    { type: UserService },
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
    WishListService.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    WishListService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvd2lzaC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFDMUIsWUFDWSxLQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QixFQUN4QixnQkFBa0M7UUFIbEMsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMzQyxDQUFDOzs7Ozs7O0lBRUosY0FBYyxDQUFDLE1BQWMsRUFBRSxJQUFh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QUFnQjs7Ozs7OztJQUtyQixnQ0FBMEM7Ozs7O0lBQzFDLHNDQUFrQzs7Ozs7SUFDbEMsc0NBQWtDOzs7OztJQUNsQywyQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQsIE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNyZWF0ZVdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ3JlYXRlV2lzaExpc3QoeyB1c2VySWQsIG5hbWUsIGRlc2NyaXB0aW9uIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFdpc2hMaXN0KCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0V2lzaExpc3RJZCgpLFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXQoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgXSkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICB0YXAoKFt3aXNoTGlzdElkLCB1c2VyLCB1c2VySWRdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhQm9vbGVhbih3aXNoTGlzdElkKSAmJlxuICAgICAgICAgIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTICYmXG4gICAgICAgICAgQm9vbGVhbih1c2VyKSAmJlxuICAgICAgICAgIEJvb2xlYW4odXNlci5jdXN0b21lcklkKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQsIHVzZXIuY3VzdG9tZXJJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgc3dpdGNoTWFwKChbd2lzaExpc3RJZF0pID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0KHdpc2hMaXN0SWQpKVxuICAgICk7XG4gIH1cblxuICBsb2FkV2lzaExpc3QodXNlcklkOiBzdHJpbmcsIGN1c3RvbWVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENhcnRBY3Rpb25zLkxvYWRXaXNoTGlzdCh7IHVzZXJJZCwgY3VzdG9tZXJJZCB9KSk7XG4gIH1cblxuICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nZXRXaXNoTGlzdElkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLCB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpKSxcbiAgICAgICAgdGFwKChbd2lzaExpc3RJZCwgdXNlcklkLCB1c2VyXSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFCb29sZWFuKHdpc2hMaXN0SWQpICYmXG4gICAgICAgICAgICBCb29sZWFuKHVzZXIpICYmXG4gICAgICAgICAgICBCb29sZWFuKHVzZXIuY3VzdG9tZXJJZClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdpc2hMaXN0KHVzZXJJZCwgdXNlci5jdXN0b21lcklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFt3aXNoTGlzdElkXSkgPT4gQm9vbGVhbih3aXNoTGlzdElkKSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKFt3aXNoTGlzdElkLCB1c2VySWRdKSA9PlxuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkodXNlcklkLCB3aXNoTGlzdElkLCBwcm9kdWN0Q29kZSwgMSlcbiAgICAgICk7XG4gIH1cblxuICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0V2lzaExpc3RJZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSwgdGhpcy51c2VyU2VydmljZS5nZXQoKSksXG4gICAgICAgIHRhcCgoW3dpc2hMaXN0SWQsIHVzZXJJZCwgdXNlcl0pID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhQm9vbGVhbih3aXNoTGlzdElkKSAmJlxuICAgICAgICAgICAgQm9vbGVhbih1c2VyKSAmJlxuICAgICAgICAgICAgQm9vbGVhbih1c2VyLmN1c3RvbWVySWQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXaXNoTGlzdCh1c2VySWQsIHVzZXIuY3VzdG9tZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbd2lzaExpc3RJZF0pID0+IEJvb2xlYW4od2lzaExpc3RJZCkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbd2lzaExpc3RJZCwgdXNlcklkXSkgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KHVzZXJJZCwgd2lzaExpc3RJZCwgZW50cnkuZW50cnlOdW1iZXIpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0V2lzaExpc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFdpc2hMaXN0SWQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHdpc2hMaXN0SWQgPT5cbiAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmlzU3RhYmxlKHdpc2hMaXN0SWQpLnBpcGUobWFwKHN0YWJsZSA9PiAhc3RhYmxlKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFdpc2hMaXN0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0V2lzaExpc3RJZCkpO1xuICB9XG59XG4iXX0=