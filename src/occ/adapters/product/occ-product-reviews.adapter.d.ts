import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../../../model/product.model';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { ProductReviewsAdapter } from '../../../product/connectors/reviews/product-reviews.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductReviewsAdapter implements ProductReviewsAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(productCode: string, maxCount?: number): Observable<Review[]>;
    post(productCode: string, review: any): Observable<Review>;
    protected getEndpoint(code: string, maxCount?: number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductReviewsAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccProductReviewsAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7QUFRQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RSZXZpZXdzQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT47XG4gICAgcG9zdChwcm9kdWN0Q29kZTogc3RyaW5nLCByZXZpZXc6IGFueSk6IE9ic2VydmFibGU8UmV2aWV3PjtcbiAgICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQoY29kZTogc3RyaW5nLCBtYXhDb3VudD86IG51bWJlcik6IHN0cmluZztcbn1cbiJdfQ==