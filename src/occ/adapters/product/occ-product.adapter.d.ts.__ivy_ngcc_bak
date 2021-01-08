import { ProductAdapter } from '../../../product/connectors/product/product.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { Product } from '../../../model/product.model';
import { ScopedProductData } from '../../../product/connectors/product/scoped-product-data';
import { OccRequestsOptimizerService } from '../../services/occ-requests-optimizer.service';
export declare class OccProductAdapter implements ProductAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    protected requestsOptimizer: OccRequestsOptimizerService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService, requestsOptimizer: OccRequestsOptimizerService);
    load(productCode: string, scope?: string): Observable<Product>;
    loadMany(products: ScopedProductData[]): ScopedProductData[];
    protected getEndpoint(code: string, scope?: string): string;
}
