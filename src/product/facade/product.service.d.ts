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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Quc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0TG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9kdWN0LWxvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0LXNjb3BlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TG9hZGluZzogUHJvZHVjdExvYWRpbmdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PiwgcHJvZHVjdExvYWRpbmc6IFByb2R1Y3RMb2FkaW5nU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvZHVjdCBvYnNlcnZhYmxlLiBUaGUgcHJvZHVjdCB3aWxsIGJlIGxvYWRlZFxuICAgICAqIHdoZW5ldmVyIHRoZXJlJ3Mgbm8gdmFsdWUgb2JzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBUaGUgdW5kZXJseWluZyBwcm9kdWN0IGxvYWRlciBlbnN1cmVzIHRoYXQgdGhlIHByb2R1Y3QgaXNcbiAgICAgKiBvbmx5IGxvYWRlZCBvbmNlLCBldmVuIGluIGNhc2Ugb2YgcGFyYWxsZWwgb2JzZXJ2ZXJzLlxuICAgICAqXG4gICAgICogWW91IHNob3VsZCBwcm92aWRlIHByb2R1Y3QgZGF0YSBzY29wZSB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdG8gbm90IGxvYWQgYWxsXG4gICAgICogdGhlIGRhdGEgaWYgbm90IG5lZWRlZC4gWW91IGNhbiBwcm92aWRlIG1vcmUgdGhhbiBvbmUgc2NvcGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgUHJvZHVjdCBjb2RlIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0gc2NvcGVzIFNjb3BlIG9yIHNjb3BlcyBvZiB0aGUgcHJvZHVjdCBkYXRhXG4gICAgICovXG4gICAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blcz86IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZGluZyBzdGF0ZVxuICAgICAqL1xuICAgIGlzTG9hZGluZyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZT86IFByb2R1Y3RTY29wZSB8IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIHN1Y2Nlc3Mgc3RhdGVcbiAgICAgKi9cbiAgICBpc1N1Y2Nlc3MocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgICAqL1xuICAgIGhhc0Vycm9yKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogUHJvZHVjdFNjb3BlIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZWxvYWRzIHRoZSBwcm9kdWN0LiBUaGUgcHJvZHVjdCBpcyBsb2FkZWQgaW1wbGljZXRseVxuICAgICAqIHdoZW5ldmVyIHNlbGVjdGVkIGJ5IHRoZSBgZ2V0YCwgYnV0IGluIHNvbWUgY2FzZXMgYW5cbiAgICAgKiBleHBsaWNpdCByZWxvYWQgbWlnaHQgYmUgbmVlZGVkLlxuICAgICAqL1xuICAgIHJlbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZT86IFByb2R1Y3RTY29wZSB8IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=