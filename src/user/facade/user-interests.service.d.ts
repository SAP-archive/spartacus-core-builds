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

//# sourceMappingURL=user-interests.service.d.ts.map