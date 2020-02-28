import { __decorate } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_REVIEW_NORMALIZER, PRODUCT_REVIEW_SERIALIZER, } from '../../../product/connectors/reviews/converters';
var OccProductReviewsAdapter = /** @class */ (function () {
    function OccProductReviewsAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    OccProductReviewsAdapter.prototype.load = function (productCode, maxCount) {
        return this.http
            .get(this.getEndpoint(productCode, maxCount))
            .pipe(pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
    };
    OccProductReviewsAdapter.prototype.post = function (productCode, review) {
        review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http.post(this.getEndpoint(productCode), body.toString(), {
            headers: headers,
        });
    };
    OccProductReviewsAdapter.prototype.getEndpoint = function (code, maxCount) {
        return this.occEndpoints.getUrl('productReviews', {
            productCode: code,
        }, { maxCount: maxCount });
    };
    OccProductReviewsAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccProductReviewsAdapter = __decorate([
        Injectable()
    ], OccProductReviewsAdapter);
    return OccProductReviewsAdapter;
}());
export { OccProductReviewsAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L29jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHlCQUF5QixHQUMxQixNQUFNLGdEQUFnRCxDQUFDO0FBSXhEO0lBQ0Usa0NBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKLHVDQUFJLEdBQUosVUFBSyxXQUFtQixFQUFFLFFBQWlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDNUMsSUFBSSxDQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FDdkQsQ0FBQztJQUNOLENBQUM7SUFFRCx1Q0FBSSxHQUFKLFVBQUssV0FBbUIsRUFBRSxNQUFXO1FBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUVuRSxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUMsQ0FBQztRQUVILElBQU0sSUFBSSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEUsT0FBTyxTQUFBO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLDhDQUFXLEdBQXJCLFVBQXNCLElBQVksRUFBRSxRQUFpQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM3QixnQkFBZ0IsRUFDaEI7WUFDRSxXQUFXLEVBQUUsSUFBSTtTQUNsQixFQUNELEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FDYixDQUFDO0lBQ0osQ0FBQzs7Z0JBeENpQixVQUFVO2dCQUNGLG1CQUFtQjtnQkFDdEIsZ0JBQWdCOztJQUo1Qix3QkFBd0I7UUFEcEMsVUFBVSxFQUFFO09BQ0Esd0JBQXdCLENBMkNwQztJQUFELCtCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0EzQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBQUk9EVUNUX1JFVklFV19OT1JNQUxJWkVSLFxuICBQUk9EVUNUX1JFVklFV19TRVJJQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RSZXZpZXdzQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBtYXhDb3VudD86IG51bWJlcik6IE9ic2VydmFibGU8UmV2aWV3W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0RW5kcG9pbnQocHJvZHVjdENvZGUsIG1heENvdW50KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygncmV2aWV3cycpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUFJPRFVDVF9SRVZJRVdfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBwb3N0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogYW55KTogT2JzZXJ2YWJsZTxSZXZpZXc+IHtcbiAgICByZXZpZXcgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHJldmlldywgUFJPRFVDVF9SRVZJRVdfU0VSSUFMSVpFUik7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgYm9keS5hcHBlbmQoJ2hlYWRsaW5lJywgcmV2aWV3LmhlYWRsaW5lKTtcbiAgICBib2R5LmFwcGVuZCgnY29tbWVudCcsIHJldmlldy5jb21tZW50KTtcbiAgICBib2R5LmFwcGVuZCgncmF0aW5nJywgcmV2aWV3LnJhdGluZy50b1N0cmluZygpKTtcbiAgICBib2R5LmFwcGVuZCgnYWxpYXMnLCByZXZpZXcuYWxpYXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnQocHJvZHVjdENvZGUpLCBib2R5LnRvU3RyaW5nKCksIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQoY29kZTogc3RyaW5nLCBtYXhDb3VudD86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0UmV2aWV3cycsXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBjb2RlLFxuICAgICAgfSxcbiAgICAgIHsgbWF4Q291bnQgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==