import { ProductAdapter } from '../connectors/product/product.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { UIProduct } from '../model/product';
export declare class OccProductAdapter implements ProductAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(productCode: string): Observable<UIProduct>;
    protected getEndpoint(code: string): string;
}
