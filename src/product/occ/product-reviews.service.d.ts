import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewList, Review } from '../../occ/occ-models/occ.models';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class ProductReviewsLoaderService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    load(productCode: string, maxCount?: number): Observable<ReviewList>;
    post(productCode: string, review: any): Observable<Review>;
    protected getEndpoint(code: string, maxCount?: number): string;
}
