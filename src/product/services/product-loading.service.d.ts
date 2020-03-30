import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { StateWithProduct } from '../store/product-state';
import * as ɵngcc0 from '@angular/core';
export declare class ProductLoadingService {
    protected store: Store<StateWithProduct>;
    protected loadingScopes: LoadingScopesService;
    protected actions$: Actions;
    protected platformId: any;
    protected products: {
        [code: string]: {
            [scope: string]: Observable<Product>;
        };
    };
    constructor(store: Store<StateWithProduct>, loadingScopes: LoadingScopesService, actions$: Actions, platformId: any);
    get(productCode: string, scopes: string[]): Observable<Product>;
    protected initProductScopes(productCode: string, scopes: string[]): void;
    protected getScopesIndex(scopes: string[]): string;
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    protected getProductForScope(productCode: string, scope: string): Observable<Product>;
    /**
     * Returns reload triggers for product per scope
     *
     * @param productCode
     * @param scope
     */
    protected getProductReloadTriggers(productCode: string, scope: string): Observable<boolean>[];
    /**
     * Generic method that returns stream triggering reload by maxAge
     *
     * Could be refactored to separate service in future to use in other
     * max age reload implementations
     *
     * @param loadStart$ Stream that emits on load start
     * @param loadFinish$ Stream that emits on load finish
     * @param maxAge max age
     */
    private getMaxAgeTrigger;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductLoadingService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RMb2FkaW5nU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PjtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zO1xuICAgIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnk7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RzOiB7XG4gICAgICAgIFtjb2RlOiBzdHJpbmddOiB7XG4gICAgICAgICAgICBbc2NvcGU6IHN0cmluZ106IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4sIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlLCBhY3Rpb25zJDogQWN0aW9ucywgcGxhdGZvcm1JZDogYW55KTtcbiAgICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgcHJvdGVjdGVkIGluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRTY29wZXNJbmRleChzY29wZXM6IHN0cmluZ1tdKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFByb2R1Y3RGb3JTY29wZShwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJlbG9hZCB0cmlnZ2VycyBmb3IgcHJvZHVjdCBwZXIgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgICAqIEBwYXJhbSBzY29wZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj5bXTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmljIG1ldGhvZCB0aGF0IHJldHVybnMgc3RyZWFtIHRyaWdnZXJpbmcgcmVsb2FkIGJ5IG1heEFnZVxuICAgICAqXG4gICAgICogQ291bGQgYmUgcmVmYWN0b3JlZCB0byBzZXBhcmF0ZSBzZXJ2aWNlIGluIGZ1dHVyZSB0byB1c2UgaW4gb3RoZXJcbiAgICAgKiBtYXggYWdlIHJlbG9hZCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2FkU3RhcnQkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgc3RhcnRcbiAgICAgKiBAcGFyYW0gbG9hZEZpbmlzaCQgU3RyZWFtIHRoYXQgZW1pdHMgb24gbG9hZCBmaW5pc2hcbiAgICAgKiBAcGFyYW0gbWF4QWdlIG1heCBhZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1heEFnZVRyaWdnZXI7XG59XG4iXX0=