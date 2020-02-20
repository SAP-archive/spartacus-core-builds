import { __decorate } from "tslib";
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
let UserInterestsService = class UserInterestsService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves an product interest list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadProductInterests(pageSize, currentPage, sort, productCode, notificationType) {
        this.store.dispatch(new UserActions.LoadProductInterests({
            userId: OCC_USER_ID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
            productCode: productCode,
            notificationType: notificationType,
        }));
    }
    /**
     * Returns product interests
     */
    getProductInterests() {
        return this.store.pipe(select(UsersSelectors.getInterests));
    }
    /**
     * Returns product interests
     * @param pageSize the page size
     */
    getAndLoadProductInterests(pageSize) {
        return this.store.pipe(select(UsersSelectors.getInterestsState), tap(interestListState => {
            const attemptedLoad = interestListState.loading ||
                interestListState.success ||
                interestListState.error;
            if (!attemptedLoad) {
                this.loadProductInterests(pageSize);
            }
        }), map(interestListState => interestListState.value));
    }
    /**
     * Returns a loading flag for product interests
     */
    getProdutInterestsLoading() {
        return this.store.pipe(select(UsersSelectors.getInterestsLoading));
    }
    /**
     * Removes a ProductInterestRelation
     * @param item product interest relation item
     * @param singleDelete flag to delete only one interest
     */
    removeProdutInterest(item, singleDelete) {
        this.store.dispatch(new UserActions.RemoveProductInterest({
            userId: OCC_USER_ID_CURRENT,
            item: item,
            singleDelete: singleDelete,
        }));
    }
    /**
     * Returns a loading flag for removing product interests.
     */
    getRemoveProdutInterestLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    }
    /**
     * Returns a success flag for removing a product interests.
     */
    getRemoveProdutInterestSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    }
    /**
     * Add a new product interest.
     *
     * @param productCode the product code
     * @param notificationType the notification type
     */
    addProductInterest(productCode, notificationType) {
        this.store.dispatch(new UserActions.AddProductInterest({
            userId: OCC_USER_ID_CURRENT,
            productCode: productCode,
            notificationType: notificationType,
        }));
    }
    /**
     * Returns a success flag for adding a product interest.
     */
    getAddProductInterestSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    }
    /**
     * Returns a error flag for adding a product interest.
     */
    getAddProductInterestError() {
        return this.store.pipe(select(getProcessErrorFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    }
    /**
     * Reset product interest adding state.
     */
    resetAddInterestState() {
        this.store.dispatch(new UserActions.ResetAddInterestState());
    }
    /**
     * Reset product interest removing state.
     */
    resetRemoveInterestState() {
        this.store.dispatch(new UserActions.ResetRemoveInterestState());
    }
    /**
     * Clears product interests
     */
    clearProductInterests() {
        this.store.dispatch(new UserActions.ClearProductInterests());
    }
};
UserInterestsService.ctorParameters = () => [
    { type: Store }
];
UserInterestsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserInterestsService_Factory() { return new UserInterestsService(i0.ɵɵinject(i1.Store)); }, token: UserInterestsService, providedIn: "root" });
UserInterestsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserInterestsService);
export { UserInterestsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS91c2VyLWludGVyZXN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUVMLG1DQUFtQyxFQUNuQywrQkFBK0IsR0FDaEMsTUFBTSxxQkFBcUIsQ0FBQztBQU03QixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixHQUN2QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFLcEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOzs7OztPQUtHO0lBQ0gsb0JBQW9CLENBQ2xCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLElBQWEsRUFDYixXQUFvQixFQUNwQixnQkFBbUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDO1lBQ25DLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUk7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QUMsSUFBSSxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQjtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGLENBQUE7O1lBNUo4QixLQUFLOzs7QUFEdkIsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxvQkFBb0IsQ0E2SmhDO1NBN0pZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhVc2VyLFxuICBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCxcbiAgQUREX1BST0RVQ1RfSU5URVJFU1RfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsXG4gIFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24sXG4gIE5vdGlmaWNhdGlvblR5cGUsXG59IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QtaW50ZXJlc3QubW9kZWwnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnksXG4gIGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbn0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJJbnRlcmVzdHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbiBwcm9kdWN0IGludGVyZXN0IGxpc3RcbiAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAqIEBwYXJhbSBzb3J0IHNvcnRcbiAgICovXG4gIGxvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU/OiBzdHJpbmcsXG4gICAgbm90aWZpY2F0aW9uVHlwZT86IE5vdGlmaWNhdGlvblR5cGVcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkUHJvZHVjdEludGVyZXN0cyh7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogbm90aWZpY2F0aW9uVHlwZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAqL1xuICBnZXRQcm9kdWN0SW50ZXJlc3RzKCk6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0SW50ZXJlc3RzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwcm9kdWN0IGludGVyZXN0c1xuICAgKiBAcGFyYW0gcGFnZVNpemUgdGhlIHBhZ2Ugc2l6ZVxuICAgKi9cbiAgZ2V0QW5kTG9hZFByb2R1Y3RJbnRlcmVzdHMoXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEludGVyZXN0c1N0YXRlKSxcbiAgICAgIHRhcChpbnRlcmVzdExpc3RTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIGludGVyZXN0TGlzdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICBpbnRlcmVzdExpc3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgaW50ZXJlc3RMaXN0U3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZFByb2R1Y3RJbnRlcmVzdHMocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcChpbnRlcmVzdExpc3RTdGF0ZSA9PiBpbnRlcmVzdExpc3RTdGF0ZS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAqL1xuICBnZXRQcm9kdXRJbnRlcmVzdHNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEludGVyZXN0c0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgUHJvZHVjdEludGVyZXN0UmVsYXRpb25cbiAgICogQHBhcmFtIGl0ZW0gcHJvZHVjdCBpbnRlcmVzdCByZWxhdGlvbiBpdGVtXG4gICAqIEBwYXJhbSBzaW5nbGVEZWxldGUgZmxhZyB0byBkZWxldGUgb25seSBvbmUgaW50ZXJlc3RcbiAgICovXG4gIHJlbW92ZVByb2R1dEludGVyZXN0KFxuICAgIGl0ZW06IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24sXG4gICAgc2luZ2xlRGVsZXRlPzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlbW92ZVByb2R1Y3RJbnRlcmVzdCh7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgc2luZ2xlRGVsZXRlOiBzaW5nbGVEZWxldGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcmVtb3ZpbmcgcHJvZHVjdCBpbnRlcmVzdHMuXG4gICAqL1xuICBnZXRSZW1vdmVQcm9kdXRJbnRlcmVzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN1Y2Nlc3MgZmxhZyBmb3IgcmVtb3ZpbmcgYSBwcm9kdWN0IGludGVyZXN0cy5cbiAgICovXG4gIGdldFJlbW92ZVByb2R1dEludGVyZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgcHJvZHVjdCBpbnRlcmVzdC5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlIHRoZSBwcm9kdWN0IGNvZGVcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvblR5cGUgdGhlIG5vdGlmaWNhdGlvbiB0eXBlXG4gICAqL1xuICBhZGRQcm9kdWN0SW50ZXJlc3QoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuQWRkUHJvZHVjdEludGVyZXN0KHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgIG5vdGlmaWNhdGlvblR5cGU6IG5vdGlmaWNhdGlvblR5cGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN1Y2Nlc3MgZmxhZyBmb3IgYWRkaW5nIGEgcHJvZHVjdCBpbnRlcmVzdC5cbiAgICovXG4gIGdldEFkZFByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1BST0RVQ1RfSU5URVJFU1RfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZXJyb3IgZmxhZyBmb3IgYWRkaW5nIGEgcHJvZHVjdCBpbnRlcmVzdC5cbiAgICovXG4gIGdldEFkZFByb2R1Y3RJbnRlcmVzdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHByb2R1Y3QgaW50ZXJlc3QgYWRkaW5nIHN0YXRlLlxuICAgKi9cbiAgcmVzZXRBZGRJbnRlcmVzdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0QWRkSW50ZXJlc3RTdGF0ZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBwcm9kdWN0IGludGVyZXN0IHJlbW92aW5nIHN0YXRlLlxuICAgKi9cbiAgcmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0UmVtb3ZlSW50ZXJlc3RTdGF0ZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICovXG4gIGNsZWFyUHJvZHVjdEludGVyZXN0cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclByb2R1Y3RJbnRlcmVzdHMoKSk7XG4gIH1cbn1cbiJdfQ==