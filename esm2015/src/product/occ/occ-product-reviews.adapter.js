/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { PRODUCT_REVIEW_NORMALIZER, PRODUCT_REVIEW_SERIALIZER, } from '../connectors/reviews/converters';
import { pluck } from 'rxjs/operators';
export class OccProductReviewsAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    load(productCode, maxCount) {
        return this.http.get(this.getEndpoint(productCode, maxCount)).pipe(pluck('reviews'), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    post(productCode, review) {
        review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        /** @type {?} */
        const body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http.post(this.getEndpoint(productCode), body.toString(), {
            headers,
        });
    }
    /**
     * @protected
     * @param {?} code
     * @param {?=} maxCount
     * @return {?}
     */
    getEndpoint(code, maxCount) {
        return this.occEndpoints.getUrl('productReviews', {
            productCode: code,
        }, { maxCount });
    }
}
OccProductReviewsAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductReviewsAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductReviewsAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccProductReviewsAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductReviewsAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL29jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIseUJBQXlCLEdBQzFCLE1BQU0sa0NBQWtDLENBQUM7QUFFMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUNuQyxZQUNVLElBQWdCLEVBQ2hCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVKLElBQUksQ0FBQyxXQUFtQixFQUFFLFFBQWlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hFLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUFtQixFQUFFLE1BQVc7UUFDbkMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDOztjQUU3RCxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDOztjQUVJLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwRSxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDN0IsZ0JBQWdCLEVBQ2hCO1lBQ0UsV0FBVyxFQUFFLElBQUk7U0FDbEIsRUFDRCxFQUFFLFFBQVEsRUFBRSxDQUNiLENBQUM7SUFDSixDQUFDOzs7WUF6Q0YsVUFBVTs7OztZQWJGLFVBQVU7WUFHVixtQkFBbUI7WUFDbkIsZ0JBQWdCOzs7Ozs7O0lBWXJCLHdDQUF3Qjs7Ozs7SUFDeEIsZ0RBQXlDOzs7OztJQUN6Qyw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFBST0RVQ1RfUkVWSUVXX05PUk1BTElaRVIsXG4gIFBST0RVQ1RfUkVWSUVXX1NFUklBTElaRVIsXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMvcmV2aWV3cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJldmlld3NBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFJldmlld3NBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgbWF4Q291bnQ/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFJldmlld1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5nZXRFbmRwb2ludChwcm9kdWN0Q29kZSwgbWF4Q291bnQpKS5waXBlKFxuICAgICAgcGx1Y2soJ3Jldmlld3MnKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShQUk9EVUNUX1JFVklFV19OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBwb3N0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJldmlldzogYW55KTogT2JzZXJ2YWJsZTxSZXZpZXc+IHtcbiAgICByZXZpZXcgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHJldmlldywgUFJPRFVDVF9SRVZJRVdfU0VSSUFMSVpFUik7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgYm9keS5hcHBlbmQoJ2hlYWRsaW5lJywgcmV2aWV3LmhlYWRsaW5lKTtcbiAgICBib2R5LmFwcGVuZCgnY29tbWVudCcsIHJldmlldy5jb21tZW50KTtcbiAgICBib2R5LmFwcGVuZCgncmF0aW5nJywgcmV2aWV3LnJhdGluZy50b1N0cmluZygpKTtcbiAgICBib2R5LmFwcGVuZCgnYWxpYXMnLCByZXZpZXcuYWxpYXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnQocHJvZHVjdENvZGUpLCBib2R5LnRvU3RyaW5nKCksIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RW5kcG9pbnQoY29kZTogc3RyaW5nLCBtYXhDb3VudD86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0UmV2aWV3cycsXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3RDb2RlOiBjb2RlLFxuICAgICAgfSxcbiAgICAgIHsgbWF4Q291bnQgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==