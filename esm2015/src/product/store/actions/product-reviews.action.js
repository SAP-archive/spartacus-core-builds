/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
/** @type {?} */
export const LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
/** @type {?} */
export const LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
/** @type {?} */
export const POST_PRODUCT_REVIEW = '[Product] Post Product Review';
/** @type {?} */
export const POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
/** @type {?} */
export const POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
export class LoadProductReviews {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductReviews.prototype.type;
    /** @type {?} */
    LoadProductReviews.prototype.payload;
}
export class LoadProductReviewsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadProductReviewsFail.prototype.type;
    /** @type {?} */
    LoadProductReviewsFail.prototype.payload;
}
export class LoadProductReviewsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductReviewsSuccess.prototype.type;
    /** @type {?} */
    LoadProductReviewsSuccess.prototype.payload;
}
export class PostProductReview {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
}
if (false) {
    /** @type {?} */
    PostProductReview.prototype.type;
    /** @type {?} */
    PostProductReview.prototype.payload;
}
export class PostProductReviewFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
}
if (false) {
    /** @type {?} */
    PostProductReviewFail.prototype.type;
    /** @type {?} */
    PostProductReviewFail.prototype.payload;
}
export class PostProductReviewSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    PostProductReviewSuccess.prototype.type;
    /** @type {?} */
    PostProductReviewSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC1yZXZpZXdzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxxQ0FBcUM7O0FBQ3pFLE1BQU0sT0FBTyx5QkFBeUIsR0FDcEMsMENBQTBDOztBQUM1QyxNQUFNLE9BQU8sNEJBQTRCLEdBQ3ZDLDZDQUE2Qzs7QUFDL0MsTUFBTSxPQUFPLG1CQUFtQixHQUFHLCtCQUErQjs7QUFDbEUsTUFBTSxPQUFPLHdCQUF3QixHQUFHLG9DQUFvQzs7QUFDNUUsTUFBTSxPQUFPLDJCQUEyQixHQUN0Qyx1Q0FBdUM7QUFFekMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU3QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDQSxDQUFDO0NBQ3ZDOzs7SUFGQyxrQ0FBcUM7O0lBQ3pCLHFDQUFzQjs7QUFHcEMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVqQyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUNELENBQUM7Q0FDM0M7OztJQUZDLHNDQUEwQzs7SUFDOUIseUNBQTBCOztBQUd4QyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBRXBDLFlBQW1CLE9BQWdEO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQXlDO1FBRDFELFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUN5QixDQUFDO0NBQ3hFOzs7SUFGQyx5Q0FBNkM7O0lBQ2pDLDRDQUF1RDs7QUFHckUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFtQixPQUFnRDtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUF5QztRQUQxRCxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDa0MsQ0FBQztDQUN4RTs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBdUQ7O0FBR3JFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFaEMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBQ0osQ0FBQztDQUN2Qzs7O0lBRkMscUNBQXlDOztJQUM3Qix3Q0FBc0I7O0FBR3BDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFbkMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLDJCQUEyQixDQUFDO0lBQ1AsQ0FBQztDQUN2Qzs7O0lBRkMsd0NBQTRDOztJQUNoQywyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFJldmlldywgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRVZJRVdTID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmV2aWV3cyBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfUkVWSUVXU19GQUlMID1cbiAgJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmV2aWV3cyBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRVZJRVdTX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZXZpZXdzIERhdGEgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUE9TVF9QUk9EVUNUX1JFVklFVyA9ICdbUHJvZHVjdF0gUG9zdCBQcm9kdWN0IFJldmlldyc7XG5leHBvcnQgY29uc3QgUE9TVF9QUk9EVUNUX1JFVklFV19GQUlMID0gJ1tQcm9kdWN0XSBQb3N0IFByb2R1Y3QgUmV2aWV3IEZhaWwnO1xuZXhwb3J0IGNvbnN0IFBPU1RfUFJPRFVDVF9SRVZJRVdfU1VDQ0VTUyA9XG4gICdbUHJvZHVjdF0gUG9zdCBQcm9kdWN0IFJldmlldyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmV2aWV3cyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfUkVWSUVXUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmV2aWV3c0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFVklFV1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9SRVZJRVdTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IGxpc3Q6IFJldmlld1tdIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0UHJvZHVjdFJldmlldyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQT1NUX1BST0RVQ1RfUkVWSUVXO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBwcm9kdWN0Q29kZTogc3RyaW5nOyByZXZpZXc6IFJldmlldyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdFByb2R1Y3RSZXZpZXdGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBPU1RfUFJPRFVDVF9SRVZJRVdfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RQcm9kdWN0UmV2aWV3U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQT1NUX1BST0RVQ1RfUkVWSUVXX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXZpZXcpIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdFJldmlld3NBY3Rpb24gPVxuICB8IExvYWRQcm9kdWN0UmV2aWV3c1xuICB8IExvYWRQcm9kdWN0UmV2aWV3c0ZhaWxcbiAgfCBMb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzXG4gIHwgUG9zdFByb2R1Y3RSZXZpZXdcbiAgfCBQb3N0UHJvZHVjdFJldmlld0ZhaWxcbiAgfCBQb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3M7XG4iXX0=