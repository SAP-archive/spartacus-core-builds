import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
import { ProductLoadingService } from '../services/product-loading.service';
import { ProductScope } from '../model/product-scope';
import * as ɵngcc0 from '@angular/core';
export declare class ProductService {
    protected store: Store<StateWithProduct>;
    protected productLoading?: ProductLoadingService;
    constructor(store: Store<StateWithProduct>, productLoading: ProductLoadingService);
    /**
     * @deprecated since 1.4
     */
    constructor(store: Store<StateWithProduct>);
    /** @deprecated since 1.4 */
    private products;
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param productCode Product code to load
     * @param scopes Scope or scopes of the product data
     */
    get(productCode: string, scopes?: (ProductScope | string)[] | ProductScope | string): Observable<Product>;
    /**
     * Returns boolean observable for product's loading state
     */
    isLoading(productCode: string, scope?: ProductScope | string): Observable<boolean>;
    /**
     * Returns boolean observable for product's load success state
     */
    isSuccess(productCode: string, scope?: ProductScope | string): Observable<boolean>;
    /**
     * Returns boolean observable for product's load error state
     */
    hasError(productCode: string, scope?: ProductScope | string): Observable<boolean>;
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    reload(productCode: string, scope?: ProductScope | string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Quc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvZHVjdExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNjb3BlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zY29wZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PjtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExvYWRpbmc/OiBQcm9kdWN0TG9hZGluZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LCBwcm9kdWN0TG9hZGluZzogUHJvZHVjdExvYWRpbmdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD4pO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjQgKi9cbiAgICBwcml2YXRlIHByb2R1Y3RzO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2JzZXJ2YWJsZS4gVGhlIHByb2R1Y3Qgd2lsbCBiZSBsb2FkZWRcbiAgICAgKiB3aGVuZXZlciB0aGVyZSdzIG5vIHZhbHVlIG9ic2VydmVkLlxuICAgICAqXG4gICAgICogVGhlIHVuZGVybHlpbmcgcHJvZHVjdCBsb2FkZXIgZW5zdXJlcyB0aGF0IHRoZSBwcm9kdWN0IGlzXG4gICAgICogb25seSBsb2FkZWQgb25jZSwgZXZlbiBpbiBjYXNlIG9mIHBhcmFsbGVsIG9ic2VydmVycy5cbiAgICAgKlxuICAgICAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9kdWN0IGRhdGEgc2NvcGUgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRvIG5vdCBsb2FkIGFsbFxuICAgICAqIHRoZSBkYXRhIGlmIG5vdCBuZWVkZWQuIFlvdSBjYW4gcHJvdmlkZSBtb3JlIHRoYW4gb25lIHNjb3BlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlIFByb2R1Y3QgY29kZSB0byBsb2FkXG4gICAgICogQHBhcmFtIHNjb3BlcyBTY29wZSBvciBzY29wZXMgb2YgdGhlIHByb2R1Y3QgZGF0YVxuICAgICAqL1xuICAgIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM/OiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWRpbmcgc3RhdGVcbiAgICAgKi9cbiAgICBpc0xvYWRpbmcocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBzdWNjZXNzIHN0YXRlXG4gICAgICovXG4gICAgaXNTdWNjZXNzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogUHJvZHVjdFNjb3BlIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgZXJyb3Igc3RhdGVcbiAgICAgKi9cbiAgICBoYXNFcnJvcihwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZT86IFByb2R1Y3RTY29wZSB8IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVsb2FkcyB0aGUgcHJvZHVjdC4gVGhlIHByb2R1Y3QgaXMgbG9hZGVkIGltcGxpY2V0bHlcbiAgICAgKiB3aGVuZXZlciBzZWxlY3RlZCBieSB0aGUgYGdldGAsIGJ1dCBpbiBzb21lIGNhc2VzIGFuXG4gICAgICogZXhwbGljaXQgcmVsb2FkIG1pZ2h0IGJlIG5lZWRlZC5cbiAgICAgKi9cbiAgICByZWxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiB2b2lkO1xufVxuIl19