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
    /**
     * Endpoint for cart voucher
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.cartVoucher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLW1vZGVscy9vY2MtZW5kcG9pbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrQ0FxUkM7Ozs7Ozs7O0lBL1FDLDZCQUFlOzs7Ozs7O0lBTWYsK0JBQWlCOzs7Ozs7O0lBTWpCLHNDQUF3Qjs7Ozs7OztJQU14Qix5Q0FBMkI7Ozs7Ozs7SUFNM0IscUNBQXVCOzs7Ozs7O0lBTXZCLDBDQUE0Qjs7Ozs7OztJQU01QixpQ0FBbUI7Ozs7Ozs7SUFNbkIsa0NBQW9COzs7Ozs7O0lBTXBCLDZCQUFlOzs7Ozs7O0lBTWYsNEJBQWM7Ozs7Ozs7SUFNZCw2QkFBZTs7Ozs7OztJQU1mLDRCQUFjOzs7Ozs7O0lBTWQsa0NBQW9COzs7Ozs7O0lBTXBCLGtDQUFvQjs7Ozs7OztJQU1wQixrQ0FBb0I7Ozs7Ozs7SUFNcEIscUNBQXVCOzs7Ozs7O0lBTXZCLHFDQUF1Qjs7Ozs7OztJQU12QixnQ0FBa0I7Ozs7Ozs7SUFNbEIsNkJBQWU7Ozs7Ozs7SUFNZiw4QkFBZ0I7Ozs7Ozs7SUFNaEIsb0NBQXNCOzs7Ozs7O0lBTXRCLGlDQUFtQjs7Ozs7OztJQU1uQixrQ0FBb0I7Ozs7Ozs7SUFNcEIsaUNBQW1COzs7Ozs7O0lBTW5CLCtCQUFpQjs7Ozs7OztJQU1qQiw4QkFBZ0I7Ozs7Ozs7SUFNaEIsNEJBQWM7Ozs7Ozs7SUFNZCxvQ0FBc0I7Ozs7Ozs7SUFNdEIsMENBQTRCOzs7Ozs7O0lBTTVCLHlDQUEyQjs7Ozs7OztJQU0zQix5Q0FBMkI7Ozs7Ozs7SUFNM0IsMENBQTRCOzs7Ozs7O0lBTTVCLHlDQUEyQjs7Ozs7OztJQU0zQixxQ0FBdUI7Ozs7Ozs7SUFNdkIsb0NBQXNCOzs7Ozs7O0lBTXRCLG1DQUFxQjs7Ozs7OztJQU1yQixpREFBbUM7Ozs7Ozs7SUFNbkMsd0NBQTBCOzs7Ozs7O0lBTTFCLGdDQUFrQjs7Ozs7OztJQU1sQixxQ0FBdUI7Ozs7Ozs7SUFNdkIsaUNBQW1COzs7Ozs7O0lBTW5CLHFDQUF1Qjs7Ozs7OztJQU12QiwyQ0FBNkI7Ozs7Ozs7SUFNN0IsMkNBQTZCOzs7Ozs7O0lBTTdCLHlDQUEyQjs7Ozs7OztJQU0zQixtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE9jY0VuZHBvaW50cyB7XG4gIC8qKlxuICAgKiBDbGllbnQgbG9naW4gKGdldCBhdXRob3JpemF0aW9uIHRva2VuKVxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBsb2dpbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBwcm9kdWN0IGRldGFpbHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcHJvZHVjdD86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCByZXZpZXdzIGZvciBhIHByb2R1Y3RcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcHJvZHVjdFJldmlld3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIHByb2R1Y3QgcmVmZXJlbmNlc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwcm9kdWN0UmVmZXJlbmNlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgcHJvZHVjdHMgYW5kIGFkZGl0aW9uYWwgZGF0YVxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwcm9kdWN0U2VhcmNoPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhdmFpbGFibGUgc3VnZ2VzdGlvbnNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcHJvZHVjdFN1Z2dlc3Rpb25zPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IENNUyBjb21wb25lbnQgZGV0YWlsc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb21wb25lbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIENNUyBjb21wb25lbnQgZGV0YWlsc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb21wb25lbnRzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IHBhZ2UgZGF0YSB3aXRoIGxpc3Qgb2YgY21zIGNvbnRlbnQgc2xvdHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcGFnZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgcGFnZSBkYXRhIHdpdGggbGlzdCBvZiBjbXMgY29udGVudCBzbG90c1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGFsbCBjYXJ0c1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXJ0c11cbiAgICovXG4gIGNhcnRzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgY2FydCB3aXRoIGEgZ2l2ZW4gaWRlbnRpZmllclxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXJ0XVxuICAgKi9cbiAgY2FydD86IHN0cmluZztcbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgcmVzdG9yZSBhIGNhcnQgZm9yIGEgdXNlclxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjcmVhdGVDYXJ0XVxuICAgKi9cbiAgY3JlYXRlQ2FydD86IHN0cmluZztcbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjYXJ0IHdpdGggYSBnaXZlbiBjYXJ0IGlkXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW2RlbGV0ZUNhcnRdXG4gICAqL1xuICBkZWxldGVDYXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGNhcnRcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbYWRkRW50cmllc11cbiAgICovXG4gIGFkZEVudHJpZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVcGRhdGUgcXVhbnRpdHkgYW5kIHN0b3JlIHRoZSBkZXRhaWxzIG9mIGEgY2FydCBlbnRyeVxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cGRhdGVFbnRyaWVzXVxuICAgKi9cbiAgdXBkYXRlRW50cmllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIERlbGV0ZXMgY2FydCBlbnRyeVxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZW1vdmVFbnRyaWVzXVxuICAgKi9cbiAgcmVtb3ZlRW50cmllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byBjYXJ0XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW2FkZEVtYWlsXVxuICAgKi9cbiAgYWRkRW1haWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBzdG9yZSBsb2NhdGlvblxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwYWdlXVxuICAgKi9cbiAgc3RvcmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIHN0b3JlIGxvY2F0aW9uc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwYWdlXVxuICAgKi9cbiAgc3RvcmVzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0cyBhIHN0b3JlIGxvY2F0aW9uIGNvdW50IHBlciBjb3VudHJ5IGFuZCByZWdpb25zXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW3BhZ2VdXG4gICAqL1xuICBzdG9yZXNjb3VudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGF2YWlsYWJsZSBsYW5ndWFnZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgbGFuZ3VhZ2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhdmFpbGFibGUgY3VycmVuY2llc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjdXJyZW5jaWVzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBjb3VudHJpZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY291bnRyaWVzPzogc3RyaW5nO1xuICAvKipcbiAgICogRmV0Y2ggdGhlIGxpc3Qgb2YgcmVnaW9ucyBmb3IgdGhlIHByb3ZpZGVkIGNvdW50cnlcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcmVnaW9ucz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRpdGxlcyB1c2VkIGZvciB1c2VyJ3MgcGVyc29uYWwgaW5mby5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdGl0bGVzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IHVzZXIgZGV0YWlsc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgdXNlci5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdXNlclJlZ2lzdGVyPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVxdWVzdCBhbiBlbWFpbCB0byByZXNldCB0aGUgcGFzc3dvcmRcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdXNlckZvcmdvdFBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzZXQgdGhlIHBhc3N3b3JkIG9uY2UgdGhlIGVtYWlsIGlzIHJlY2lldmVkLlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyUmVzZXRQYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdXNlciBpZCB3aXRoIHdoaWNoIHRoZSB1c2VyIGF1dGhlbnRpY2F0ZXMuXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHVzZXJVcGRhdGVMb2dpbklkPzogc3RyaW5nO1xuICAvKipcbiAgICogVXBkYXRlIHRoZSB1c2VyJ3MgcGFzc3dvcmRcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdXNlclVwZGF0ZVBhc3N3b3JkPzogc3RyaW5nO1xuICAvKipcbiAgICogUGF5bWVudCBkZXRhaWxzIHJvb3QgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHBheW1lbnREZXRhaWxzQWxsPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGEgc3BlY2lmaWMgcGF5bWVudCBtZXRob2QuXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHBheW1lbnREZXRhaWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgdGhlIGxpc3Qgb2Ygb25lIHVzZXIncyBvcmRlcnNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgb3JkZXJIaXN0b3J5Pzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIHRoZSBkZXRhaWxzIG9mIG9uZSB1c2VyJ3Mgb3JkZXJcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgb3JkZXJEZXRhaWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGFub255bW91c0NvbnNlbnRUZW1wbGF0ZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgY29uc2VudCB0ZW1wbGF0ZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY29uc2VudFRlbXBsYXRlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhIHVzZXIncyBjb25zZW50c1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb25zZW50cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhIHVzZXIncyBzcGVjaWZpYyBwcmV2aW91c2x5IGdpdmVuIGNvbnNlbnQuXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvbnNlbnREZXRhaWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYSB1c2VyJ3MgYWRkcmVzc2VzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGFkZHJlc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhIHVzZXIncyBzcGVjaWZpYyBhZGRyZXNzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGFkZHJlc3NEZXRhaWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYWRkcmVzcyB2ZXJpZmljYXRpb25cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgYWRkcmVzc1ZlcmlmaWNhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBjb25zaWdubWVudCB0cmFja2luZ1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb25zaWdubWVudFRyYWNraW5nPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGFzbSBjdXN0b21lciBzZWFyY2hcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgYXNtQ3VzdG9tZXJTZWFyY2g/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgY2FydCB2b3VjaGVyXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNhcnRWb3VjaGVyPzogc3RyaW5nO1xufVxuIl19