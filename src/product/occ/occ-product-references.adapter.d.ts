import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductReference } from '../../model/product.model';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { ProductReferencesAdapter } from '../connectors/references/product-references.adapter';
export declare class OccProductReferencesAdapter implements ProductReferencesAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
    protected getEndpoint(code: string, reference?: string, pageSize?: number): string;
}
