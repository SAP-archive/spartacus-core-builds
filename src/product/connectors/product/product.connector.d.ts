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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuL3Byb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBTY29wZWRQcm9kdWN0RGF0YSB9IGZyb20gJy4vc2NvcGVkLXByb2R1Y3QtZGF0YSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdEFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogUHJvZHVjdEFkYXB0ZXIpO1xuICAgIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZT86IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgZ2V0TWFueShwcm9kdWN0czogU2NvcGVkUHJvZHVjdERhdGFbXSk6IFNjb3BlZFByb2R1Y3REYXRhW107XG59XG4iXX0=