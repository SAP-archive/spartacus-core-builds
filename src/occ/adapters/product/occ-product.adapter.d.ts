import { ProductAdapter } from '../../../product/connectors/product/product.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { Product } from '../../../model/product.model';
import { ScopedProductData } from '../../../product/connectors/product/scoped-product-data';
import { OccRequestsOptimizerService } from '../../services/occ-requests-optimizer.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductAdapter implements ProductAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    protected requestsOptimizer: OccRequestsOptimizerService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService, requestsOptimizer: OccRequestsOptimizerService);
    load(productCode: string, scope?: string): Observable<Product>;
    loadMany(products: ScopedProductData[]): ScopedProductData[];
    protected getEndpoint(code: string, scope?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccProductAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtcHJvZHVjdC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgU2NvcGVkUHJvZHVjdERhdGEgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9zY29wZWQtcHJvZHVjdC1kYXRhJztcbmltcG9ydCB7IE9jY1JlcXVlc3RzT3B0aW1pemVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1yZXF1ZXN0cy1vcHRpbWl6ZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NQcm9kdWN0QWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlcXVlc3RzT3B0aW1pemVyOiBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UsIHJlcXVlc3RzT3B0aW1pemVyOiBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2UpO1xuICAgIGxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIGxvYWRNYW55KHByb2R1Y3RzOiBTY29wZWRQcm9kdWN0RGF0YVtdKTogU2NvcGVkUHJvZHVjdERhdGFbXTtcbiAgICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQoY29kZTogc3RyaW5nLCBzY29wZT86IHN0cmluZyk6IHN0cmluZztcbn1cbiJdfQ==