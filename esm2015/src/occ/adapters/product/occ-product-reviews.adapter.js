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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L29jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHlCQUF5QixHQUMxQixNQUFNLGdEQUFnRCxDQUFDO0FBSXhELE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUNuQyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVKLElBQUksQ0FBQyxXQUFtQixFQUFFLFFBQWlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hFLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxXQUFtQixFQUFFLE1BQVc7UUFDbkMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDOztjQUU3RCxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDOztjQUVJLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwRSxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDN0IsZ0JBQWdCLEVBQ2hCO1lBQ0UsV0FBVyxFQUFFLElBQUk7U0FDbEIsRUFDRCxFQUFFLFFBQVEsRUFBRSxDQUNiLENBQUM7SUFDSixDQUFDOzs7WUF6Q0YsVUFBVTs7OztZQWJGLFVBQVU7WUFLVixtQkFBbUI7WUFDbkIsZ0JBQWdCOzs7Ozs7O0lBVXJCLHdDQUEwQjs7Ozs7SUFDMUIsZ0RBQTJDOzs7OztJQUMzQyw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFBST0RVQ1RfUkVWSUVXX05PUk1BTElaRVIsXG4gIFBST0RVQ1RfUkVWSUVXX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZXZpZXdzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Jldmlld3MvcHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJldmlld3NBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFJldmlld3NBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2V0RW5kcG9pbnQocHJvZHVjdENvZGUsIG1heENvdW50KSkucGlwZShcbiAgICAgIHBsdWNrKCdyZXZpZXdzJyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUFJPRFVDVF9SRVZJRVdfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcG9zdChwcm9kdWN0Q29kZTogc3RyaW5nLCByZXZpZXc6IGFueSk6IE9ic2VydmFibGU8UmV2aWV3PiB7XG4gICAgcmV2aWV3ID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChyZXZpZXcsIFBST0RVQ1RfUkVWSUVXX1NFUklBTElaRVIpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGJvZHkuYXBwZW5kKCdoZWFkbGluZScsIHJldmlldy5oZWFkbGluZSk7XG4gICAgYm9keS5hcHBlbmQoJ2NvbW1lbnQnLCByZXZpZXcuY29tbWVudCk7XG4gICAgYm9keS5hcHBlbmQoJ3JhdGluZycsIHJldmlldy5yYXRpbmcudG9TdHJpbmcoKSk7XG4gICAgYm9keS5hcHBlbmQoJ2FsaWFzJywgcmV2aWV3LmFsaWFzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50KHByb2R1Y3RDb2RlKSwgYm9keS50b1N0cmluZygpLCB7XG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVuZHBvaW50KGNvZGU6IHN0cmluZywgbWF4Q291bnQ/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAncHJvZHVjdFJldmlld3MnLFxuICAgICAge1xuICAgICAgICBwcm9kdWN0Q29kZTogY29kZSxcbiAgICAgIH0sXG4gICAgICB7IG1heENvdW50IH1cbiAgICApO1xuICB9XG59XG4iXX0=