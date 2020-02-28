import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import { ProductInterestSearchResult, ProductInterestEntryRelation, NotificationType } from '../../model/product-interest.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserInterestsService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
    /**
     * Retrieves an product interest list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadProductInterests(pageSize?: number, currentPage?: number, sort?: string, productCode?: string, notificationType?: NotificationType): void;
    /**
     * Returns product interests
     */
    getProductInterests(): Observable<ProductInterestSearchResult>;
    /**
     * Returns product interests
     * @param pageSize the page size
     */
    getAndLoadProductInterests(pageSize?: number): Observable<ProductInterestSearchResult>;
    /**
     * Returns a loading flag for product interests
     */
    getProdutInterestsLoading(): Observable<boolean>;
    /**
     * Removes a ProductInterestRelation
     * @param item product interest relation item
     * @param singleDelete flag to delete only one interest
     */
    removeProdutInterest(item: ProductInterestEntryRelation, singleDelete?: boolean): void;
    /**
     * Returns a loading flag for removing product interests.
     */
    getRemoveProdutInterestLoading(): Observable<boolean>;
    /**
     * Returns a success flag for removing a product interests.
     */
    getRemoveProdutInterestSuccess(): Observable<boolean>;
    /**
     * Add a new product interest.
     *
     * @param productCode the product code
     * @param notificationType the notification type
     */
    addProductInterest(productCode: string, notificationType: NotificationType): void;
    /**
     * Returns a success flag for adding a product interest.
     */
    getAddProductInterestSuccess(): Observable<boolean>;
    /**
     * Returns a error flag for adding a product interest.
     */
    getAddProductInterestError(): Observable<boolean>;
    /**
     * Reset product interest adding state.
     */
    resetAddInterestState(): void;
    /**
     * Reset product interest removing state.
     */
    resetRemoveInterestState(): void;
    /**
     * Clears product interests
     */
    clearProductInterests(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserInterestsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWludGVyZXN0cy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LCBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLCBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VySW50ZXJlc3RzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFuIHByb2R1Y3QgaW50ZXJlc3QgbGlzdFxuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICAgKiBAcGFyYW0gY3VycmVudFBhZ2UgY3VycmVudCBwYWdlXG4gICAgICogQHBhcmFtIHNvcnQgc29ydFxuICAgICAqL1xuICAgIGxvYWRQcm9kdWN0SW50ZXJlc3RzKHBhZ2VTaXplPzogbnVtYmVyLCBjdXJyZW50UGFnZT86IG51bWJlciwgc29ydD86IHN0cmluZywgcHJvZHVjdENvZGU/OiBzdHJpbmcsIG5vdGlmaWNhdGlvblR5cGU/OiBOb3RpZmljYXRpb25UeXBlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAgICovXG4gICAgZ2V0UHJvZHVjdEludGVyZXN0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBwcm9kdWN0IGludGVyZXN0c1xuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSB0aGUgcGFnZSBzaXplXG4gICAgICovXG4gICAgZ2V0QW5kTG9hZFByb2R1Y3RJbnRlcmVzdHMocGFnZVNpemU/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICAgKi9cbiAgICBnZXRQcm9kdXRJbnRlcmVzdHNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIFByb2R1Y3RJbnRlcmVzdFJlbGF0aW9uXG4gICAgICogQHBhcmFtIGl0ZW0gcHJvZHVjdCBpbnRlcmVzdCByZWxhdGlvbiBpdGVtXG4gICAgICogQHBhcmFtIHNpbmdsZURlbGV0ZSBmbGFnIHRvIGRlbGV0ZSBvbmx5IG9uZSBpbnRlcmVzdFxuICAgICAqL1xuICAgIHJlbW92ZVByb2R1dEludGVyZXN0KGl0ZW06IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24sIHNpbmdsZURlbGV0ZT86IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIHJlbW92aW5nIHByb2R1Y3QgaW50ZXJlc3RzLlxuICAgICAqL1xuICAgIGdldFJlbW92ZVByb2R1dEludGVyZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdWNjZXNzIGZsYWcgZm9yIHJlbW92aW5nIGEgcHJvZHVjdCBpbnRlcmVzdHMuXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IHByb2R1Y3QgaW50ZXJlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgdGhlIHByb2R1Y3QgY29kZVxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25UeXBlIHRoZSBub3RpZmljYXRpb24gdHlwZVxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RJbnRlcmVzdChwcm9kdWN0Q29kZTogc3RyaW5nLCBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3VjY2VzcyBmbGFnIGZvciBhZGRpbmcgYSBwcm9kdWN0IGludGVyZXN0LlxuICAgICAqL1xuICAgIGdldEFkZFByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZXJyb3IgZmxhZyBmb3IgYWRkaW5nIGEgcHJvZHVjdCBpbnRlcmVzdC5cbiAgICAgKi9cbiAgICBnZXRBZGRQcm9kdWN0SW50ZXJlc3RFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2R1Y3QgaW50ZXJlc3QgYWRkaW5nIHN0YXRlLlxuICAgICAqL1xuICAgIHJlc2V0QWRkSW50ZXJlc3RTdGF0ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlc2V0IHByb2R1Y3QgaW50ZXJlc3QgcmVtb3Zpbmcgc3RhdGUuXG4gICAgICovXG4gICAgcmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAgICovXG4gICAgY2xlYXJQcm9kdWN0SW50ZXJlc3RzKCk6IHZvaWQ7XG59XG4iXX0=