/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { REMOVE_PRODUCT_INTERESTS_PROCESS_ID, ADD_PRODUCT_INTEREST_PROCESS_ID, } from '../store/user-state';
import { tap, map } from 'rxjs/operators';
import { getProcessLoadingFactory, getProcessSuccessFactory, getProcessErrorFactory, } from '../../process/store/selectors/process.selectors';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserInterestsService = /** @class */ (function () {
    function UserInterestsService(store) {
        this.store = store;
    }
    /**
     * Retrieves an product interest list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    /**
     * Retrieves an product interest list
     * @param {?=} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @param {?=} productCode
     * @param {?=} notificationType
     * @return {?}
     */
    UserInterestsService.prototype.loadProductInterests = /**
     * Retrieves an product interest list
     * @param {?=} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @param {?=} productCode
     * @param {?=} notificationType
     * @return {?}
     */
    function (pageSize, currentPage, sort, productCode, notificationType) {
        this.store.dispatch(new UserActions.LoadProductInterests({
            userId: OCC_USER_ID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
            productCode: productCode,
            notificationType: notificationType,
        }));
    };
    /**
     * Returns product interests
     */
    /**
     * Returns product interests
     * @return {?}
     */
    UserInterestsService.prototype.getProductInterests = /**
     * Returns product interests
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getInterests));
    };
    /**
     * Returns product interests
     * @param pageSize the page size
     */
    /**
     * Returns product interests
     * @param {?=} pageSize the page size
     * @return {?}
     */
    UserInterestsService.prototype.getAndLoadProductInterests = /**
     * Returns product interests
     * @param {?=} pageSize the page size
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getInterestsState), tap((/**
         * @param {?} interestListState
         * @return {?}
         */
        function (interestListState) {
            /** @type {?} */
            var attemptedLoad = interestListState.loading ||
                interestListState.success ||
                interestListState.error;
            if (!attemptedLoad) {
                _this.loadProductInterests(pageSize);
            }
        })), map((/**
         * @param {?} interestListState
         * @return {?}
         */
        function (interestListState) { return interestListState.value; })));
    };
    /**
     * Returns a loading flag for product interests
     */
    /**
     * Returns a loading flag for product interests
     * @return {?}
     */
    UserInterestsService.prototype.getProdutInterestsLoading = /**
     * Returns a loading flag for product interests
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getInterestsLoading));
    };
    /**
     * Removes a ProductInterestRelation
     * @param item product interest relation item
     * @param singleDelete flag to delete only one interest
     */
    /**
     * Removes a ProductInterestRelation
     * @param {?} item product interest relation item
     * @param {?=} singleDelete flag to delete only one interest
     * @return {?}
     */
    UserInterestsService.prototype.removeProdutInterest = /**
     * Removes a ProductInterestRelation
     * @param {?} item product interest relation item
     * @param {?=} singleDelete flag to delete only one interest
     * @return {?}
     */
    function (item, singleDelete) {
        this.store.dispatch(new UserActions.RemoveProductInterest({
            userId: OCC_USER_ID_CURRENT,
            item: item,
            singleDelete: singleDelete,
        }));
    };
    /**
     * Returns a loading flag for removing product interests.
     */
    /**
     * Returns a loading flag for removing product interests.
     * @return {?}
     */
    UserInterestsService.prototype.getRemoveProdutInterestLoading = /**
     * Returns a loading flag for removing product interests.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    };
    /**
     * Returns a success flag for removing a product interests.
     */
    /**
     * Returns a success flag for removing a product interests.
     * @return {?}
     */
    UserInterestsService.prototype.getRemoveProdutInterestSuccess = /**
     * Returns a success flag for removing a product interests.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    };
    /**
     * Add a new product interest.
     *
     * @param productCode the product code
     * @param notificationType the notification type
     */
    /**
     * Add a new product interest.
     *
     * @param {?} productCode the product code
     * @param {?} notificationType the notification type
     * @return {?}
     */
    UserInterestsService.prototype.addProductInterest = /**
     * Add a new product interest.
     *
     * @param {?} productCode the product code
     * @param {?} notificationType the notification type
     * @return {?}
     */
    function (productCode, notificationType) {
        this.store.dispatch(new UserActions.AddProductInterest({
            userId: OCC_USER_ID_CURRENT,
            productCode: productCode,
            notificationType: notificationType,
        }));
    };
    /**
     * Returns a success flag for adding a product interest.
     */
    /**
     * Returns a success flag for adding a product interest.
     * @return {?}
     */
    UserInterestsService.prototype.getAddProductInterestSuccess = /**
     * Returns a success flag for adding a product interest.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    };
    /**
     * Returns a error flag for adding a product interest.
     */
    /**
     * Returns a error flag for adding a product interest.
     * @return {?}
     */
    UserInterestsService.prototype.getAddProductInterestError = /**
     * Returns a error flag for adding a product interest.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProcessErrorFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    };
    /**
     * Reset product interest adding state.
     */
    /**
     * Reset product interest adding state.
     * @return {?}
     */
    UserInterestsService.prototype.resetAddInterestState = /**
     * Reset product interest adding state.
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ResetAddInterestState());
    };
    /**
     * Reset product interest removing state.
     */
    /**
     * Reset product interest removing state.
     * @return {?}
     */
    UserInterestsService.prototype.resetRemoveInterestState = /**
     * Reset product interest removing state.
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ResetRemoveInterestState());
    };
    /**
     * Clears product interests
     */
    /**
     * Clears product interests
     * @return {?}
     */
    UserInterestsService.prototype.clearProductInterests = /**
     * Clears product interests
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearProductInterests());
    };
    UserInterestsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserInterestsService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ UserInterestsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserInterestsService_Factory() { return new UserInterestsService(i0.ɵɵinject(i1.Store)); }, token: UserInterestsService, providedIn: "root" });
    return UserInterestsService;
}());
export { UserInterestsService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserInterestsService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS91c2VyLWludGVyZXN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUVMLG1DQUFtQyxFQUNuQywrQkFBK0IsR0FDaEMsTUFBTSxxQkFBcUIsQ0FBQztBQU03QixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixHQUN2QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFFcEU7SUFJRSw4QkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOzs7OztPQUtHOzs7Ozs7Ozs7O0lBQ0gsbURBQW9COzs7Ozs7Ozs7SUFBcEIsVUFDRSxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhLEVBQ2IsV0FBb0IsRUFDcEIsZ0JBQW1DO1FBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztZQUNuQyxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLElBQUksRUFBRSxJQUFJO1lBQ1Ys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QXJCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1REFBd0I7Ozs7SUFBeEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9EQUFxQjs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkEvSkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF6QmdCLEtBQUs7OzsrQkFEdEI7Q0F3TEMsQUFoS0QsSUFnS0M7U0E3Slksb0JBQW9COzs7Ozs7SUFDbkIscUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lELFxuICBBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCxcbiAgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgTm90aWZpY2F0aW9uVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxuICBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckludGVyZXN0c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pikge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFuIHByb2R1Y3QgaW50ZXJlc3QgbGlzdFxuICAgKiBAcGFyYW0gcGFnZVNpemUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgKi9cbiAgbG9hZFByb2R1Y3RJbnRlcmVzdHMoXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZT86IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlPzogTm90aWZpY2F0aW9uVHlwZVxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRQcm9kdWN0SW50ZXJlc3RzKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgc29ydDogc29ydCxcbiAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3RDb2RlLFxuICAgICAgICBub3RpZmljYXRpb25UeXBlOiBub3RpZmljYXRpb25UeXBlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICovXG4gIGdldFByb2R1Y3RJbnRlcmVzdHMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRJbnRlcmVzdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSB0aGUgcGFnZSBzaXplXG4gICAqL1xuICBnZXRBbmRMb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICBwYWdlU2l6ZT86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0SW50ZXJlc3RzU3RhdGUpLFxuICAgICAgdGFwKGludGVyZXN0TGlzdFN0YXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgaW50ZXJlc3RMaXN0U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIGludGVyZXN0TGlzdFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBpbnRlcmVzdExpc3RTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEludGVyZXN0cyhwYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKGludGVyZXN0TGlzdFN0YXRlID0+IGludGVyZXN0TGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICovXG4gIGdldFByb2R1dEludGVyZXN0c0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0SW50ZXJlc3RzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBQcm9kdWN0SW50ZXJlc3RSZWxhdGlvblxuICAgKiBAcGFyYW0gaXRlbSBwcm9kdWN0IGludGVyZXN0IHJlbGF0aW9uIGl0ZW1cbiAgICogQHBhcmFtIHNpbmdsZURlbGV0ZSBmbGFnIHRvIGRlbGV0ZSBvbmx5IG9uZSBpbnRlcmVzdFxuICAgKi9cbiAgcmVtb3ZlUHJvZHV0SW50ZXJlc3QoXG4gICAgaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgICBzaW5nbGVEZWxldGU/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0KHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBzaW5nbGVEZWxldGU6IHNpbmdsZURlbGV0ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciByZW1vdmluZyBwcm9kdWN0IGludGVyZXN0cy5cbiAgICovXG4gIGdldFJlbW92ZVByb2R1dEludGVyZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3VjY2VzcyBmbGFnIGZvciByZW1vdmluZyBhIHByb2R1Y3QgaW50ZXJlc3RzLlxuICAgKi9cbiAgZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwcm9kdWN0IGludGVyZXN0LlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgdGhlIHByb2R1Y3QgY29kZVxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uVHlwZSB0aGUgbm90aWZpY2F0aW9uIHR5cGVcbiAgICovXG4gIGFkZFByb2R1Y3RJbnRlcmVzdChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGVcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRQcm9kdWN0SW50ZXJlc3Qoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogbm90aWZpY2F0aW9uVHlwZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3VjY2VzcyBmbGFnIGZvciBhZGRpbmcgYSBwcm9kdWN0IGludGVyZXN0LlxuICAgKi9cbiAgZ2V0QWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBlcnJvciBmbGFnIGZvciBhZGRpbmcgYSBwcm9kdWN0IGludGVyZXN0LlxuICAgKi9cbiAgZ2V0QWRkUHJvZHVjdEludGVyZXN0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgcHJvZHVjdCBpbnRlcmVzdCBhZGRpbmcgc3RhdGUuXG4gICAqL1xuICByZXNldEFkZEludGVyZXN0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRBZGRJbnRlcmVzdFN0YXRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHByb2R1Y3QgaW50ZXJlc3QgcmVtb3Zpbmcgc3RhdGUuXG4gICAqL1xuICByZXNldFJlbW92ZUludGVyZXN0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBwcm9kdWN0IGludGVyZXN0c1xuICAgKi9cbiAgY2xlYXJQcm9kdWN0SW50ZXJlc3RzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyUHJvZHVjdEludGVyZXN0cygpKTtcbiAgfVxufVxuIl19