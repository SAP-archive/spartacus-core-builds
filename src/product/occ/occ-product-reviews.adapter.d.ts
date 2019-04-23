import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../../occ/occ-models/occ.models';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { ProductReviewsAdapter } from '../connectors/reviews/product-reviews.adapter';
export declare class OccProductReviewsAdapter implements ProductReviewsAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(productCode: string, maxCount?: number): Observable<Review[]>;
    post(productCode: string, review: any): Observable<Review>;
    protected getEndpoint(code: string, maxCount?: number): string;
}
