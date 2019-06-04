/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    OccProductReviewsAdapter.prototype.load = /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    function (productCode, maxCount) {
        return this.http.get(this.getEndpoint(productCode, maxCount)).pipe(pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    OccProductReviewsAdapter.prototype.post = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
        review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        /** @type {?} */
        var body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http.post(this.getEndpoint(productCode), body.toString(), {
            headers: headers,
        });
    };
    /**
     * @protected
     * @param {?} code
     * @param {?=} maxCount
     * @return {?}
     */
    OccProductReviewsAdapter.prototype.getEndpoint = /**
     * @protected
     * @param {?} code
     * @param {?=} maxCount
     * @return {?}
     */
    function (code, maxCount) {
        return this.occEndpoints.getUrl('productReviews', {
            productCode: code,
        }, { maxCount: maxCount });
    };
    OccProductReviewsAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductReviewsAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductReviewsAdapter;
}());
export { OccProductReviewsAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccProductReviewsAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccProductReviewsAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductReviewsAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L29jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHlCQUF5QixHQUMxQixNQUFNLGdEQUFnRCxDQUFDO0FBR3hEO0lBRUUsa0NBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7O0lBRUosdUNBQUk7Ozs7O0lBQUosVUFBSyxXQUFtQixFQUFFLFFBQWlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hFLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELHVDQUFJOzs7OztJQUFKLFVBQUssV0FBbUIsRUFBRSxNQUFXO1FBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQzs7WUFFN0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQzs7WUFFSSxJQUFJLEdBQUcsSUFBSSxlQUFlLEVBQUU7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEUsT0FBTyxTQUFBO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVTLDhDQUFXOzs7Ozs7SUFBckIsVUFBc0IsSUFBWSxFQUFFLFFBQWlCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLGdCQUFnQixFQUNoQjtZQUNFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLEVBQ0QsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUNiLENBQUM7SUFDSixDQUFDOztnQkF6Q0YsVUFBVTs7OztnQkFiRixVQUFVO2dCQUtWLG1CQUFtQjtnQkFDbkIsZ0JBQWdCOztJQWlEekIsK0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXpDWSx3QkFBd0I7Ozs7OztJQUVqQyx3Q0FBMEI7Ozs7O0lBQzFCLGdEQUEyQzs7Ozs7SUFDM0MsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBQUk9EVUNUX1JFVklFV19OT1JNQUxJWkVSLFxuICBQUk9EVUNUX1JFVklFV19TRVJJQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RSZXZpZXdzQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nLCBtYXhDb3VudD86IG51bWJlcik6IE9ic2VydmFibGU8UmV2aWV3W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdldEVuZHBvaW50KHByb2R1Y3RDb2RlLCBtYXhDb3VudCkpLnBpcGUoXG4gICAgICBwbHVjaygncmV2aWV3cycpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFBST0RVQ1RfUkVWSUVXX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIHBvc3QocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBhbnkpOiBPYnNlcnZhYmxlPFJldmlldz4ge1xuICAgIHJldmlldyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQocmV2aWV3LCBQUk9EVUNUX1JFVklFV19TRVJJQUxJWkVSKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBib2R5LmFwcGVuZCgnaGVhZGxpbmUnLCByZXZpZXcuaGVhZGxpbmUpO1xuICAgIGJvZHkuYXBwZW5kKCdjb21tZW50JywgcmV2aWV3LmNvbW1lbnQpO1xuICAgIGJvZHkuYXBwZW5kKCdyYXRpbmcnLCByZXZpZXcucmF0aW5nLnRvU3RyaW5nKCkpO1xuICAgIGJvZHkuYXBwZW5kKCdhbGlhcycsIHJldmlldy5hbGlhcyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludChwcm9kdWN0Q29kZSksIGJvZHkudG9TdHJpbmcoKSwge1xuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChjb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKFxuICAgICAgJ3Byb2R1Y3RSZXZpZXdzJyxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdENvZGU6IGNvZGUsXG4gICAgICB9LFxuICAgICAgeyBtYXhDb3VudCB9XG4gICAgKTtcbiAgfVxufVxuIl19