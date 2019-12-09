/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
UserInterestsAdapter = /** @class */ (function () {
    function UserInterestsAdapter() {
    }
    return UserInterestsAdapter;
}());
/**
 * @abstract
 */
export { UserInterestsAdapter };
if (false) {
    /**
     * Abstract method used to load product interests for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort Sorting method
     * @param {?=} productCode The product code
     * @param {?=} notificationType The notification type
     * @return {?}
     */
    UserInterestsAdapter.prototype.getInterests = function (userId, pageSize, currentPage, sort, productCode, notificationType) { };
    /**
     * Abstract method used to remove product interest for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} item
     * @return {?}
     */
    UserInterestsAdapter.prototype.removeInterest = function (userId, item) { };
    /**
     * Abstract method to add a product interest for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} productCode The product code
     * @param {?} notificationType The notification type
     * @return {?}
     */
    UserInterestsAdapter.prototype.addInterest = function (userId, productCode, notificationType) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL3VzZXItaW50ZXJlc3RzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BOzs7O0lBQUE7SUEyQ0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaENDLGdJQU8yQzs7Ozs7Ozs7O0lBUTNDLDRFQUdxQjs7Ozs7Ozs7OztJQVNyQixrR0FJbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsXG4gIFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24sXG4gIE5vdGlmaWNhdGlvblR5cGUsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QtaW50ZXJlc3QubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXNlckludGVyZXN0c0FkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBwcm9kdWN0IGludGVyZXN0cyBmb3IgYW4gdXNlci5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIHBhZ2VTaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydCBTb3J0aW5nIG1ldGhvZFxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgVGhlIHByb2R1Y3QgY29kZVxuICAgKiBAcGFyYW0gIG5vdGlmaWNhdGlvblR5cGUgVGhlIG5vdGlmaWNhdGlvbiB0eXBlXG4gICAqL1xuICBhYnN0cmFjdCBnZXRJbnRlcmVzdHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZT86IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlPzogTm90aWZpY2F0aW9uVHlwZVxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHJlbW92ZSBwcm9kdWN0IGludGVyZXN0IGZvciBhbiB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gUHJvZHVjdEludGVyZXN0UmVsYXRpb24gVGhlIHByb2R1Y3QgaW50ZXJlc3QgdG8gYmUgcmVtb3ZlZC5cbiAgICovXG4gIGFic3RyYWN0IHJlbW92ZUludGVyZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGl0ZW06IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB0byBhZGQgYSBwcm9kdWN0IGludGVyZXN0IGZvciBhbiB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgVGhlIHByb2R1Y3QgY29kZVxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uVHlwZSBUaGUgbm90aWZpY2F0aW9uIHR5cGVcbiAgICovXG4gIGFic3RyYWN0IGFkZEludGVyZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgbm90aWZpY2F0aW9uVHlwZTogTm90aWZpY2F0aW9uVHlwZVxuICApOiBPYnNlcnZhYmxlPGFueT47XG59XG4iXX0=