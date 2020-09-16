import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { ProductLoadingService } from '../services/product-loading.service';
import { DEFAULT_SCOPE } from '../../occ/occ-models/occ-endpoints.model';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../services/product-loading.service";
export class ProductService {
    constructor(store, productLoading) {
        this.store = store;
        this.productLoading = productLoading;
    }
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
    get(productCode, scopes = DEFAULT_SCOPE) {
        return productCode
            ? this.productLoading.get(productCode, [].concat(scopes))
            : of(undefined);
    }
    /**
     * Returns boolean observable for product's loading state
     */
    isLoading(productCode, scope = '') {
        return this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
    }
    /**
     * Returns boolean observable for product's load success state
     */
    isSuccess(productCode, scope = '') {
        return this.store.pipe(select(ProductSelectors.getSelectedProductSuccessFactory(productCode, scope)));
    }
    /**
     * Returns boolean observable for product's load error state
     */
    hasError(productCode, scope = '') {
        return this.store.pipe(select(ProductSelectors.getSelectedProductErrorFactory(productCode, scope)));
    }
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    reload(productCode, scope = '') {
        this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
    }
}
ProductService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductService_Factory() { return new ProductService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ProductLoadingService)); }, token: ProductService, providedIn: "root" });
ProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductService.ctorParameters = () => [
    { type: Store },
    { type: ProductLoadingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcHJvZHVjdC9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBS3pFLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQ1ksS0FBOEIsRUFDOUIsY0FBcUM7UUFEckMsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO0lBQzlDLENBQUM7SUFFSjs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCxHQUFHLENBQ0QsV0FBbUIsRUFDbkIsU0FBNEQsYUFBYTtRQUV6RSxPQUFPLFdBQVc7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUNQLFdBQW1CLEVBQ25CLFFBQStCLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUNQLFdBQW1CLEVBQ25CLFFBQStCLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDdEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUNOLFdBQW1CLEVBQ25CLFFBQStCLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FDcEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsV0FBbUIsRUFBRSxRQUErQixFQUFFO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O1lBaEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWmdCLEtBQUs7WUFNYixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3QtbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTY29wZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuaW1wb3J0IHsgREVGQVVMVF9TQ09QRSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy1lbmRwb2ludHMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LFxuICAgIHByb3RlY3RlZCBwcm9kdWN0TG9hZGluZzogUHJvZHVjdExvYWRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvZHVjdCBvYnNlcnZhYmxlLiBUaGUgcHJvZHVjdCB3aWxsIGJlIGxvYWRlZFxuICAgKiB3aGVuZXZlciB0aGVyZSdzIG5vIHZhbHVlIG9ic2VydmVkLlxuICAgKlxuICAgKiBUaGUgdW5kZXJseWluZyBwcm9kdWN0IGxvYWRlciBlbnN1cmVzIHRoYXQgdGhlIHByb2R1Y3QgaXNcbiAgICogb25seSBsb2FkZWQgb25jZSwgZXZlbiBpbiBjYXNlIG9mIHBhcmFsbGVsIG9ic2VydmVycy5cbiAgICpcbiAgICogWW91IHNob3VsZCBwcm92aWRlIHByb2R1Y3QgZGF0YSBzY29wZSB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdG8gbm90IGxvYWQgYWxsXG4gICAqIHRoZSBkYXRhIGlmIG5vdCBuZWVkZWQuIFlvdSBjYW4gcHJvdmlkZSBtb3JlIHRoYW4gb25lIHNjb3BlLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgUHJvZHVjdCBjb2RlIHRvIGxvYWRcbiAgICogQHBhcmFtIHNjb3BlcyBTY29wZSBvciBzY29wZXMgb2YgdGhlIHByb2R1Y3QgZGF0YVxuICAgKi9cbiAgZ2V0KFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGVzOiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gREVGQVVMVF9TQ09QRVxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gcHJvZHVjdENvZGVcbiAgICAgID8gdGhpcy5wcm9kdWN0TG9hZGluZy5nZXQocHJvZHVjdENvZGUsIFtdLmNvbmNhdChzY29wZXMpKVxuICAgICAgOiBvZih1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZGluZyBzdGF0ZVxuICAgKi9cbiAgaXNMb2FkaW5nKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IFByb2R1Y3RTY29wZSB8IHN0cmluZyA9ICcnXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgZm9yIHByb2R1Y3QncyBsb2FkIHN1Y2Nlc3Mgc3RhdGVcbiAgICovXG4gIGlzU3VjY2VzcyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJ1xuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0J3MgbG9hZCBlcnJvciBzdGF0ZVxuICAgKi9cbiAgaGFzRXJyb3IoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzY29wZTogUHJvZHVjdFNjb3BlIHwgc3RyaW5nID0gJydcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RFcnJvckZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgcHJvZHVjdC4gVGhlIHByb2R1Y3QgaXMgbG9hZGVkIGltcGxpY2V0bHlcbiAgICogd2hlbmV2ZXIgc2VsZWN0ZWQgYnkgdGhlIGBnZXRgLCBidXQgaW4gc29tZSBjYXNlcyBhblxuICAgKiBleHBsaWNpdCByZWxvYWQgbWlnaHQgYmUgbmVlZGVkLlxuICAgKi9cbiAgcmVsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlOiBQcm9kdWN0U2NvcGUgfCBzdHJpbmcgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlLCBzY29wZSkpO1xuICB9XG59XG4iXX0=