/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function OccEndpoints() { }
if (false) {
    /**
     * Client login (get authorization token)
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.login;
    /**
     * Get product details
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.product;
    /**
     * Get reviews for a product
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.productReviews;
    /**
     * Get a list of product references
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.productReferences;
    /**
     * Get a list of products and additional data
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.productSearch;
    /**
     * Get a list of available suggestions
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.productSuggestions;
    /**
     * Get CMS component details
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.component;
    /**
     * Get a list of CMS component details
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.components;
    /**
     * Get page data with list of cms content slots
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.pages;
    /**
     * Get page data with list of cms content slots
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.page;
    /**
     * Get all carts
     *
     * \@member {string} [carts]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.carts;
    /**
     * Get a cart with a given identifier
     *
     * \@member {string} [cart]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.cart;
    /**
     * Creates or restore a cart for a user
     *
     * \@member {string} [createCart]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.createCart;
    /**
     * Deletes a cart with a given cart id
     *
     * \@member {string} [deleteCart]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.deleteCart;
    /**
     * Adds a product to the cart
     *
     * \@member {string} [addEntries]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.addEntries;
    /**
     * Update quantity and store the details of a cart entry
     *
     * \@member {string} [updateEntries]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.updateEntries;
    /**
     * Deletes cart entry
     *
     * \@member {string} [removeEntries]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.removeEntries;
    /**
     * Assign email to cart
     *
     * \@member {string} [addEmail]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.addEmail;
    /**
     * Get a store location
     *
     * \@member {string} [page]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.store;
    /**
     * Get a list of store locations
     *
     * \@member {string} [page]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.stores;
    /**
     * Gets a store location count per country and regions
     *
     * \@member {string} [page]
     * @type {?|undefined}
     */
    OccEndpoints.prototype.storescounts;
    /**
     * Get a list of available languages
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.languages;
    /**
     * Get a list of available currencies
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.currencies;
    /**
     * Get a list of countries
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.countries;
    /**
     * Fetch the list of regions for the provided country
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.regions;
    /**
     * Titles used for user's personal info.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.titles;
    /**
     * Get user details
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.user;
    /**
     * Register a new user.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.userRegister;
    /**
     * Request an email to reset the password
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.userForgotPassword;
    /**
     * Reset the password once the email is recieved.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.userResetPassword;
    /**
     * Update the user id with which the user authenticates.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.userUpdateLoginId;
    /**
     * Update the user's password
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.userUpdatePassword;
    /**
     * Payment details root endpoint.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.paymentDetailsAll;
    /**
     * Endpoint for a specific payment method.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.paymentDetail;
    /**
     * Endpoint for the list of one user's orders
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.orderHistory;
    /**
     * Endpoint for the details of one user's order
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.orderDetail;
    /**
     * Endpoint for anonymous consent templates
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.anonymousConsentTemplates;
    /**
     * Endpoint for consent templates
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.consentTemplates;
    /**
     * Endpoint for a user's consents
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.consents;
    /**
     * Endpoint for a user's specific previously given consent.
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.consentDetail;
    /**
     * Endpoint for a user's addresses
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.addresses;
    /**
     * Endpoint for a user's specific address
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.addressDetail;
    /**
     * Endpoint for address verification
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.addressVerification;
    /**
     * Endpoint for consignment tracking
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.consignmentTracking;
    /**
     * Endpoint for asm customer search
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.asmCustomerSearch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLW1vZGVscy9vY2MtZW5kcG9pbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrQ0ErUUM7Ozs7Ozs7O0lBelFDLDZCQUFlOzs7Ozs7O0lBTWYsK0JBQWlCOzs7Ozs7O0lBTWpCLHNDQUF3Qjs7Ozs7OztJQU14Qix5Q0FBMkI7Ozs7Ozs7SUFNM0IscUNBQXVCOzs7Ozs7O0lBTXZCLDBDQUE0Qjs7Ozs7OztJQU01QixpQ0FBbUI7Ozs7Ozs7SUFNbkIsa0NBQW9COzs7Ozs7O0lBTXBCLDZCQUFlOzs7Ozs7O0lBTWYsNEJBQWM7Ozs7Ozs7SUFNZCw2QkFBZTs7Ozs7OztJQU1mLDRCQUFjOzs7Ozs7O0lBTWQsa0NBQW9COzs7Ozs7O0lBTXBCLGtDQUFvQjs7Ozs7OztJQU1wQixrQ0FBb0I7Ozs7Ozs7SUFNcEIscUNBQXVCOzs7Ozs7O0lBTXZCLHFDQUF1Qjs7Ozs7OztJQU12QixnQ0FBa0I7Ozs7Ozs7SUFNbEIsNkJBQWU7Ozs7Ozs7SUFNZiw4QkFBZ0I7Ozs7Ozs7SUFNaEIsb0NBQXNCOzs7Ozs7O0lBTXRCLGlDQUFtQjs7Ozs7OztJQU1uQixrQ0FBb0I7Ozs7Ozs7SUFNcEIsaUNBQW1COzs7Ozs7O0lBTW5CLCtCQUFpQjs7Ozs7OztJQU1qQiw4QkFBZ0I7Ozs7Ozs7SUFNaEIsNEJBQWM7Ozs7Ozs7SUFNZCxvQ0FBc0I7Ozs7Ozs7SUFNdEIsMENBQTRCOzs7Ozs7O0lBTTVCLHlDQUEyQjs7Ozs7OztJQU0zQix5Q0FBMkI7Ozs7Ozs7SUFNM0IsMENBQTRCOzs7Ozs7O0lBTTVCLHlDQUEyQjs7Ozs7OztJQU0zQixxQ0FBdUI7Ozs7Ozs7SUFNdkIsb0NBQXNCOzs7Ozs7O0lBTXRCLG1DQUFxQjs7Ozs7OztJQU1yQixpREFBbUM7Ozs7Ozs7SUFNbkMsd0NBQTBCOzs7Ozs7O0lBTTFCLGdDQUFrQjs7Ozs7OztJQU1sQixxQ0FBdUI7Ozs7Ozs7SUFNdkIsaUNBQW1COzs7Ozs7O0lBTW5CLHFDQUF1Qjs7Ozs7OztJQU12QiwyQ0FBNkI7Ozs7Ozs7SUFNN0IsMkNBQTZCOzs7Ozs7O0lBTTdCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgT2NjRW5kcG9pbnRzIHtcbiAgLyoqXG4gICAqIENsaWVudCBsb2dpbiAoZ2V0IGF1dGhvcml6YXRpb24gdG9rZW4pXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGxvZ2luPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IHByb2R1Y3QgZGV0YWlsc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwcm9kdWN0Pzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IHJldmlld3MgZm9yIGEgcHJvZHVjdFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwcm9kdWN0UmV2aWV3cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgcHJvZHVjdCByZWZlcmVuY2VzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHByb2R1Y3RSZWZlcmVuY2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBwcm9kdWN0cyBhbmQgYWRkaXRpb25hbCBkYXRhXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHByb2R1Y3RTZWFyY2g/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGF2YWlsYWJsZSBzdWdnZXN0aW9uc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwcm9kdWN0U3VnZ2VzdGlvbnM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkZXRhaWxzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvbXBvbmVudD86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgQ01TIGNvbXBvbmVudCBkZXRhaWxzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvbXBvbmVudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgcGFnZSBkYXRhIHdpdGggbGlzdCBvZiBjbXMgY29udGVudCBzbG90c1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwYWdlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBwYWdlIGRhdGEgd2l0aCBsaXN0IG9mIGNtcyBjb250ZW50IHNsb3RzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHBhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYWxsIGNhcnRzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW2NhcnRzXVxuICAgKi9cbiAgY2FydHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBjYXJ0IHdpdGggYSBnaXZlbiBpZGVudGlmaWVyXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW2NhcnRdXG4gICAqL1xuICBjYXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogQ3JlYXRlcyBvciByZXN0b3JlIGEgY2FydCBmb3IgYSB1c2VyXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW2NyZWF0ZUNhcnRdXG4gICAqL1xuICBjcmVhdGVDYXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogRGVsZXRlcyBhIGNhcnQgd2l0aCBhIGdpdmVuIGNhcnQgaWRcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVsZXRlQ2FydF1cbiAgICovXG4gIGRlbGV0ZUNhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRzIGEgcHJvZHVjdCB0byB0aGUgY2FydFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthZGRFbnRyaWVzXVxuICAgKi9cbiAgYWRkRW50cmllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFVwZGF0ZSBxdWFudGl0eSBhbmQgc3RvcmUgdGhlIGRldGFpbHMgb2YgYSBjYXJ0IGVudHJ5XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW3VwZGF0ZUVudHJpZXNdXG4gICAqL1xuICB1cGRhdGVFbnRyaWVzPzogc3RyaW5nO1xuICAvKipcbiAgICogRGVsZXRlcyBjYXJ0IGVudHJ5XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW3JlbW92ZUVudHJpZXNdXG4gICAqL1xuICByZW1vdmVFbnRyaWVzPzogc3RyaW5nO1xuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbYWRkRW1haWxdXG4gICAqL1xuICBhZGRFbWFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIHN0b3JlIGxvY2F0aW9uXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW3BhZ2VdXG4gICAqL1xuICBzdG9yZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2Ygc3RvcmUgbG9jYXRpb25zXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW3BhZ2VdXG4gICAqL1xuICBzdG9yZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXRzIGEgc3RvcmUgbG9jYXRpb24gY291bnQgcGVyIGNvdW50cnkgYW5kIHJlZ2lvbnNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbcGFnZV1cbiAgICovXG4gIHN0b3Jlc2NvdW50cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYXZhaWxhYmxlIGxhbmd1YWdlc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBsYW5ndWFnZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGF2YWlsYWJsZSBjdXJyZW5jaWVzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGN1cnJlbmNpZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGNvdW50cmllc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb3VudHJpZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGZXRjaCB0aGUgbGlzdCBvZiByZWdpb25zIGZvciB0aGUgcHJvdmlkZWQgY291bnRyeVxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICByZWdpb25zPzogc3RyaW5nO1xuICAvKipcbiAgICogVGl0bGVzIHVzZWQgZm9yIHVzZXIncyBwZXJzb25hbCBpbmZvLlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB0aXRsZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgdXNlciBkZXRhaWxzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHVzZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyLlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyUmVnaXN0ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IGFuIGVtYWlsIHRvIHJlc2V0IHRoZSBwYXNzd29yZFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyRm9yZ290UGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcGFzc3dvcmQgb25jZSB0aGUgZW1haWwgaXMgcmVjaWV2ZWQuXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHVzZXJSZXNldFBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgICogVXBkYXRlIHRoZSB1c2VyIGlkIHdpdGggd2hpY2ggdGhlIHVzZXIgYXV0aGVudGljYXRlcy5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdXNlclVwZGF0ZUxvZ2luSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHVzZXIncyBwYXNzd29yZFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyVXBkYXRlUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYXltZW50IGRldGFpbHMgcm9vdCBlbmRwb2ludC5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcGF5bWVudERldGFpbHNBbGw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYSBzcGVjaWZpYyBwYXltZW50IG1ldGhvZC5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcGF5bWVudERldGFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciB0aGUgbGlzdCBvZiBvbmUgdXNlcidzIG9yZGVyc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBvcmRlckhpc3Rvcnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgdGhlIGRldGFpbHMgb2Ygb25lIHVzZXIncyBvcmRlclxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBvcmRlckRldGFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBjb25zZW50IHRlbXBsYXRlc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb25zZW50VGVtcGxhdGVzPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGEgdXNlcidzIGNvbnNlbnRzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvbnNlbnRzPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGEgdXNlcidzIHNwZWNpZmljIHByZXZpb3VzbHkgZ2l2ZW4gY29uc2VudC5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY29uc2VudERldGFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhIHVzZXIncyBhZGRyZXNzZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgYWRkcmVzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGEgdXNlcidzIHNwZWNpZmljIGFkZHJlc3NcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgYWRkcmVzc0RldGFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhZGRyZXNzIHZlcmlmaWNhdGlvblxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBhZGRyZXNzVmVyaWZpY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvbnNpZ25tZW50VHJhY2tpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYXNtIGN1c3RvbWVyIHNlYXJjaFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBhc21DdXN0b21lclNlYXJjaD86IHN0cmluZztcbn1cbiJdfQ==