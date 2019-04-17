import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../occ/occ-models/occ.models';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class ProductLoaderService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    load(productCode: string): Observable<Product>;
    protected getEndpoint(code: string): string;
}
