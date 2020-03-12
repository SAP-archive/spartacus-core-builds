import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { ProductAdapter } from './product.adapter';
import { ScopedProductData } from './scoped-product-data';
import * as ɵngcc0 from '@angular/core';
export declare class ProductConnector {
    protected adapter: ProductAdapter;
    constructor(adapter: ProductAdapter);
    get(productCode: string, scope?: string): Observable<Product>;
    getMany(products: ScopedProductData[]): ScopedProductData[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi9zY29wZWQtcHJvZHVjdC1kYXRhJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBQcm9kdWN0QWRhcHRlcik7XG4gICAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICBnZXRNYW55KHByb2R1Y3RzOiBTY29wZWRQcm9kdWN0RGF0YVtdKTogU2NvcGVkUHJvZHVjdERhdGFbXTtcbn1cbiJdfQ==