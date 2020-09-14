import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { NotificationType, ProductInterestEntryRelation, ProductInterestSearchResult } from '../../model/product-interest.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import * as ɵngcc0 from '@angular/core';
export declare class UserInterestsService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserInterestsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWludGVyZXN0cy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlLCBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLCBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckludGVyZXN0c1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYW4gcHJvZHVjdCBpbnRlcmVzdCBsaXN0XG4gICAgICogQHBhcmFtIHBhZ2VTaXplIHBhZ2Ugc2l6ZVxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZSBjdXJyZW50IHBhZ2VcbiAgICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAgICovXG4gICAgbG9hZFByb2R1Y3RJbnRlcmVzdHMocGFnZVNpemU/OiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwcm9kdWN0Q29kZT86IHN0cmluZywgbm90aWZpY2F0aW9uVHlwZT86IE5vdGlmaWNhdGlvblR5cGUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICAgKi9cbiAgICBnZXRQcm9kdWN0SW50ZXJlc3RzKCk6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAgICogQHBhcmFtIHBhZ2VTaXplIHRoZSBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBnZXRBbmRMb2FkUHJvZHVjdEludGVyZXN0cyhwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBwcm9kdWN0IGludGVyZXN0c1xuICAgICAqL1xuICAgIGdldFByb2R1dEludGVyZXN0c0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgUHJvZHVjdEludGVyZXN0UmVsYXRpb25cbiAgICAgKiBAcGFyYW0gaXRlbSBwcm9kdWN0IGludGVyZXN0IHJlbGF0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0gc2luZ2xlRGVsZXRlIGZsYWcgdG8gZGVsZXRlIG9ubHkgb25lIGludGVyZXN0XG4gICAgICovXG4gICAgcmVtb3ZlUHJvZHV0SW50ZXJlc3QoaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiwgc2luZ2xlRGVsZXRlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcmVtb3ZpbmcgcHJvZHVjdCBpbnRlcmVzdHMuXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN1Y2Nlc3MgZmxhZyBmb3IgcmVtb3ZpbmcgYSBwcm9kdWN0IGludGVyZXN0cy5cbiAgICAgKi9cbiAgICBnZXRSZW1vdmVQcm9kdXRJbnRlcmVzdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgcHJvZHVjdCBpbnRlcmVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZSB0aGUgcHJvZHVjdCBjb2RlXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblR5cGUgdGhlIG5vdGlmaWNhdGlvbiB0eXBlXG4gICAgICovXG4gICAgYWRkUHJvZHVjdEludGVyZXN0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIG5vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdWNjZXNzIGZsYWcgZm9yIGFkZGluZyBhIHByb2R1Y3QgaW50ZXJlc3QuXG4gICAgICovXG4gICAgZ2V0QWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBlcnJvciBmbGFnIGZvciBhZGRpbmcgYSBwcm9kdWN0IGludGVyZXN0LlxuICAgICAqL1xuICAgIGdldEFkZFByb2R1Y3RJbnRlcmVzdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXQgcHJvZHVjdCBpbnRlcmVzdCBhZGRpbmcgc3RhdGUuXG4gICAgICovXG4gICAgcmVzZXRBZGRJbnRlcmVzdFN0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVzZXQgcHJvZHVjdCBpbnRlcmVzdCByZW1vdmluZyBzdGF0ZS5cbiAgICAgKi9cbiAgICByZXNldFJlbW92ZUludGVyZXN0U3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICAgKi9cbiAgICBjbGVhclByb2R1Y3RJbnRlcmVzdHMoKTogdm9pZDtcbn1cbiJdfQ==