import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
import { ProductLoadingService } from '../services/product-loading.service';
import { ProductScope } from '../model/product-scope';
import * as ɵngcc0 from '@angular/core';
export declare class ProductService {
    protected store: Store<StateWithProduct>;
    protected productLoading: ProductLoadingService;
    constructor(store: Store<StateWithProduct>, productLoading: ProductLoadingService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Quc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3QtbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTY29wZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD47XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMb2FkaW5nOiBQcm9kdWN0TG9hZGluZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LCBwcm9kdWN0TG9hZGluZzogUHJvZHVjdExvYWRpbmdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9ic2VydmFibGUuIFRoZSBwcm9kdWN0IHdpbGwgYmUgbG9hZGVkXG4gICAgICogd2hlbmV2ZXIgdGhlcmUncyBubyB2YWx1ZSBvYnNlcnZlZC5cbiAgICAgKlxuICAgICAqIFRoZSB1bmRlcmx5aW5nIHByb2R1Y3QgbG9hZGVyIGVuc3VyZXMgdGhhdCB0aGUgcHJvZHVjdCBpc1xuICAgICAqIG9ubHkgbG9hZGVkIG9uY2UsIGV2ZW4gaW4gY2FzZSBvZiBwYXJhbGxlbCBvYnNlcnZlcnMuXG4gICAgICpcbiAgICAgKiBZb3Ugc2hvdWxkIHByb3ZpZGUgcHJvZHVjdCBkYXRhIHNjb3BlIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0byBub3QgbG9hZCBhbGxcbiAgICAgKiB0aGUgZGF0YSBpZiBub3QgbmVlZGVkLiBZb3UgY2FuIHByb3ZpZGUgbW9yZSB0aGFuIG9uZSBzY29wZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZSBQcm9kdWN0IGNvZGUgdG8gbG9hZFxuICAgICAqIEBwYXJhbSBzY29wZXMgU2NvcGUgb3Igc2NvcGVzIG9mIHRoZSBwcm9kdWN0IGRhdGFcbiAgICAgKi9cbiAgICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGVzPzogKFByb2R1Y3RTY29wZSB8IHN0cmluZylbXSB8IFByb2R1Y3RTY29wZSB8IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkaW5nIHN0YXRlXG4gICAgICovXG4gICAgaXNMb2FkaW5nKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogUHJvZHVjdFNjb3BlIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCdzIGxvYWQgc3VjY2VzcyBzdGF0ZVxuICAgICAqL1xuICAgIGlzU3VjY2Vzcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZT86IFByb2R1Y3RTY29wZSB8IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIGVycm9yIHN0YXRlXG4gICAgICovXG4gICAgaGFzRXJyb3IocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlbG9hZHMgdGhlIHByb2R1Y3QuIFRoZSBwcm9kdWN0IGlzIGxvYWRlZCBpbXBsaWNldGx5XG4gICAgICogd2hlbmV2ZXIgc2VsZWN0ZWQgYnkgdGhlIGBnZXRgLCBidXQgaW4gc29tZSBjYXNlcyBhblxuICAgICAqIGV4cGxpY2l0IHJlbG9hZCBtaWdodCBiZSBuZWVkZWQuXG4gICAgICovXG4gICAgcmVsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogUHJvZHVjdFNjb3BlIHwgc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==