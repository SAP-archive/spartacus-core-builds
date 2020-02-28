import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductSearchPage } from '../../model/product-search.model';
import { SearchConfig } from '../model/search-config';
import { StateWithProduct } from '../store/product-state';
import * as ɵngcc0 from '@angular/core';
export declare class ProductSearchService {
    protected store: Store<StateWithProduct>;
    constructor(store: Store<StateWithProduct>);
    search(query: string, searchConfig?: SearchConfig): void;
    getResults(): Observable<ProductSearchPage>;
    clearResults(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSearchService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductSearchService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RTZWFyY2hTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0Pik7XG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQ7XG4gICAgZ2V0UmVzdWx0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgICBjbGVhclJlc3VsdHMoKTogdm9pZDtcbn1cbiJdfQ==