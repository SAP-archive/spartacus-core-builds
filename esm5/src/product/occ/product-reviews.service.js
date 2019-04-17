/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
var ProductReviewsLoaderService = /** @class */ (function () {
    function ProductReviewsLoaderService(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    ProductReviewsLoaderService.prototype.load = /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    function (productCode, maxCount) {
        return this.http
            .get(this.getEndpoint(productCode, maxCount))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    ProductReviewsLoaderService.prototype.post = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
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
        return this.http
            .post(this.getEndpoint(productCode), body.toString(), { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} code
     * @param {?=} maxCount
     * @return {?}
     */
    ProductReviewsLoaderService.prototype.getEndpoint = /**
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
    ProductReviewsLoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewsLoaderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return ProductReviewsLoaderService;
}());
export { ProductReviewsLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductReviewsLoaderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsLoaderService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9vY2MvcHJvZHVjdC1yZXZpZXdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUvRTtJQUVFLHFDQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7OztJQUVKLDBDQUFJOzs7OztJQUFKLFVBQUssV0FBbUIsRUFBRSxRQUFpQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELDBDQUFJOzs7OztJQUFKLFVBQUssV0FBbUIsRUFBRSxNQUFXOztZQUM3QixPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDOztZQUVJLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7OztJQUVTLGlEQUFXOzs7Ozs7SUFBckIsVUFBc0IsSUFBWSxFQUFFLFFBQWlCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLGdCQUFnQixFQUNoQjtZQUNFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLEVBQ0QsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUNiLENBQUM7SUFDSixDQUFDOztnQkFyQ0YsVUFBVTs7OztnQkFQRixVQUFVO2dCQUtWLG1CQUFtQjs7SUF3QzVCLGtDQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FyQ1ksMkJBQTJCOzs7Ozs7SUFFcEMsMkNBQXdCOzs7OztJQUN4QixtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldmlld0xpc3QsIFJldmlldyB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NMb2FkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIG1heENvdW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXZpZXdMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldEVuZHBvaW50KHByb2R1Y3RDb2RlLCBtYXhDb3VudCkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHBvc3QocHJvZHVjdENvZGU6IHN0cmluZywgcmV2aWV3OiBhbnkpOiBPYnNlcnZhYmxlPFJldmlldz4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBib2R5LmFwcGVuZCgnaGVhZGxpbmUnLCByZXZpZXcuaGVhZGxpbmUpO1xuICAgIGJvZHkuYXBwZW5kKCdjb21tZW50JywgcmV2aWV3LmNvbW1lbnQpO1xuICAgIGJvZHkuYXBwZW5kKCdyYXRpbmcnLCByZXZpZXcucmF0aW5nLnRvU3RyaW5nKCkpO1xuICAgIGJvZHkuYXBwZW5kKCdhbGlhcycsIHJldmlldy5hbGlhcyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh0aGlzLmdldEVuZHBvaW50KHByb2R1Y3RDb2RlKSwgYm9keS50b1N0cmluZygpLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVuZHBvaW50KGNvZGU6IHN0cmluZywgbWF4Q291bnQ/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAncHJvZHVjdFJldmlld3MnLFxuICAgICAge1xuICAgICAgICBwcm9kdWN0Q29kZTogY29kZSxcbiAgICAgIH0sXG4gICAgICB7IG1heENvdW50IH1cbiAgICApO1xuICB9XG59XG4iXX0=