/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
/** @type {?} */
export var LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
/** @type {?} */
export var LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
/** @type {?} */
export var POST_PRODUCT_REVIEW = '[Product] Post Product Review';
/** @type {?} */
export var POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
/** @type {?} */
export var POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
var LoadProductReviews = /** @class */ (function () {
    function LoadProductReviews(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
    return LoadProductReviews;
}());
export { LoadProductReviews };
if (false) {
    /** @type {?} */
    LoadProductReviews.prototype.type;
    /** @type {?} */
    LoadProductReviews.prototype.payload;
}
var LoadProductReviewsFail = /** @class */ (function () {
    function LoadProductReviewsFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
    return LoadProductReviewsFail;
}());
export { LoadProductReviewsFail };
if (false) {
    /** @type {?} */
    LoadProductReviewsFail.prototype.type;
    /** @type {?} */
    LoadProductReviewsFail.prototype.payload;
}
var LoadProductReviewsSuccess = /** @class */ (function () {
    function LoadProductReviewsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
    return LoadProductReviewsSuccess;
}());
export { LoadProductReviewsSuccess };
if (false) {
    /** @type {?} */
    LoadProductReviewsSuccess.prototype.type;
    /** @type {?} */
    LoadProductReviewsSuccess.prototype.payload;
}
var PostProductReview = /** @class */ (function () {
    function PostProductReview(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
    return PostProductReview;
}());
export { PostProductReview };
if (false) {
    /** @type {?} */
    PostProductReview.prototype.type;
    /** @type {?} */
    PostProductReview.prototype.payload;
}
var PostProductReviewFail = /** @class */ (function () {
    function PostProductReviewFail(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
    return PostProductReviewFail;
}());
export { PostProductReviewFail };
if (false) {
    /** @type {?} */
    PostProductReviewFail.prototype.type;
    /** @type {?} */
    PostProductReviewFail.prototype.payload;
}
var PostProductReviewSuccess = /** @class */ (function () {
    function PostProductReviewSuccess(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
    return PostProductReviewSuccess;
}());
export { PostProductReviewSuccess };
if (false) {
    /** @type {?} */
    PostProductReviewSuccess.prototype.type;
    /** @type {?} */
    PostProductReviewSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC1yZXZpZXdzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxxQ0FBcUM7O0FBQ3pFLE1BQU0sS0FBTyx5QkFBeUIsR0FDcEMsMENBQTBDOztBQUM1QyxNQUFNLEtBQU8sNEJBQTRCLEdBQ3ZDLDZDQUE2Qzs7QUFDL0MsTUFBTSxLQUFPLG1CQUFtQixHQUFHLCtCQUErQjs7QUFDbEUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLG9DQUFvQzs7QUFDNUUsTUFBTSxLQUFPLDJCQUEyQixHQUN0Qyx1Q0FBdUM7QUFFekM7SUFFRSw0QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ0EsQ0FBQztJQUN4Qyx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsa0NBQXFDOztJQUN6QixxQ0FBc0I7O0FBR3BDO0lBRUUsZ0NBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ0QsQ0FBQztJQUM1Qyw2QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsc0NBQTBDOztJQUM5Qix5Q0FBMEI7O0FBR3hDO0lBRUUsbUNBQW1CLE9BQWdEO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUN5QixDQUFDO0lBQ3pFLGdDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyx5Q0FBNkM7O0lBQ2pDLDRDQUF1RDs7QUFHckU7SUFFRSwyQkFBbUIsT0FBZ0Q7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ2tDLENBQUM7SUFDekUsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGlDQUFvQzs7SUFDeEIsb0NBQXVEOztBQUdyRTtJQUVFLCtCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFDSixDQUFDO0lBQ3hDLDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxxQ0FBeUM7O0lBQzdCLHdDQUFzQjs7QUFHcEM7SUFFRSxrQ0FBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLDJCQUEyQixDQUFDO0lBQ1AsQ0FBQztJQUN4QywrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsd0NBQTRDOztJQUNoQywyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRVZJRVdTID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmV2aWV3cyBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfUkVWSUVXU19GQUlMID1cbiAgJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmV2aWV3cyBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRVZJRVdTX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZXZpZXdzIERhdGEgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUE9TVF9QUk9EVUNUX1JFVklFVyA9ICdbUHJvZHVjdF0gUG9zdCBQcm9kdWN0IFJldmlldyc7XG5leHBvcnQgY29uc3QgUE9TVF9QUk9EVUNUX1JFVklFV19GQUlMID0gJ1tQcm9kdWN0XSBQb3N0IFByb2R1Y3QgUmV2aWV3IEZhaWwnO1xuZXhwb3J0IGNvbnN0IFBPU1RfUFJPRFVDVF9SRVZJRVdfU1VDQ0VTUyA9XG4gICdbUHJvZHVjdF0gUG9zdCBQcm9kdWN0IFJldmlldyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmV2aWV3cyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfUkVWSUVXUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmV2aWV3c0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFVklFV1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9SRVZJRVdTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IGxpc3Q6IFJldmlld1tdIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0UHJvZHVjdFJldmlldyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQT1NUX1BST0RVQ1RfUkVWSUVXO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBwcm9kdWN0Q29kZTogc3RyaW5nOyByZXZpZXc6IFJldmlldyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdFByb2R1Y3RSZXZpZXdGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBPU1RfUFJPRFVDVF9SRVZJRVdfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RQcm9kdWN0UmV2aWV3U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQT1NUX1BST0RVQ1RfUkVWSUVXX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXZpZXcpIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdFJldmlld3NBY3Rpb24gPVxuICB8IExvYWRQcm9kdWN0UmV2aWV3c1xuICB8IExvYWRQcm9kdWN0UmV2aWV3c0ZhaWxcbiAgfCBMb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzXG4gIHwgUG9zdFByb2R1Y3RSZXZpZXdcbiAgfCBQb3N0UHJvZHVjdFJldmlld0ZhaWxcbiAgfCBQb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3M7XG4iXX0=