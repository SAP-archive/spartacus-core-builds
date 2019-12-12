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
     * Client logout (revoke authorization token)
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.revoke;
    /**
     * Get product details
     *
     * \@member string
     * @type {?|undefined}
     */
    OccEndpoints.prototype.product;
    /**
     * Get product details for scope
     *
     * \@member Object
     * @type {?|undefined}
     */
    OccEndpoints.prototype.product_scopes;
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
    /**
     * Explicitly saves a cart
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.saveCart;
    /**
     * Endpoint for notification preference
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.notificationPreference;
    /**
     * Endpoint for product interests
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.productInterests;
    /**
     * Endpoint for getting product interests
     *
     * \@member {string}
     * @type {?|undefined}
     */
    OccEndpoints.prototype.getProductInterests;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLW1vZGVscy9vY2MtZW5kcG9pbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrQ0FnVUM7Ozs7Ozs7O0lBMVRDLDZCQUFlOzs7Ozs7O0lBT2YsOEJBQWdCOzs7Ozs7O0lBTWhCLCtCQUFpQjs7Ozs7OztJQU9qQixzQ0FJRTs7Ozs7OztJQU9GLHNDQUF3Qjs7Ozs7OztJQU14Qix5Q0FBMkI7Ozs7Ozs7SUFNM0IscUNBQXVCOzs7Ozs7O0lBTXZCLDBDQUE0Qjs7Ozs7OztJQU01QixpQ0FBbUI7Ozs7Ozs7SUFNbkIsa0NBQW9COzs7Ozs7O0lBTXBCLDZCQUFlOzs7Ozs7O0lBTWYsNEJBQWM7Ozs7Ozs7SUFNZCw2QkFBZTs7Ozs7OztJQU1mLDRCQUFjOzs7Ozs7O0lBTWQsa0NBQW9COzs7Ozs7O0lBTXBCLGtDQUFvQjs7Ozs7OztJQU1wQixrQ0FBb0I7Ozs7Ozs7SUFNcEIscUNBQXVCOzs7Ozs7O0lBTXZCLHFDQUF1Qjs7Ozs7OztJQU12QixnQ0FBa0I7Ozs7Ozs7SUFNbEIsNkJBQWU7Ozs7Ozs7SUFNZiw4QkFBZ0I7Ozs7Ozs7SUFNaEIsb0NBQXNCOzs7Ozs7O0lBTXRCLGlDQUFtQjs7Ozs7OztJQU1uQixrQ0FBb0I7Ozs7Ozs7SUFNcEIsaUNBQW1COzs7Ozs7O0lBTW5CLCtCQUFpQjs7Ozs7OztJQU1qQiw4QkFBZ0I7Ozs7Ozs7SUFNaEIsNEJBQWM7Ozs7Ozs7SUFNZCxvQ0FBc0I7Ozs7Ozs7SUFNdEIsMENBQTRCOzs7Ozs7O0lBTTVCLHlDQUEyQjs7Ozs7OztJQU0zQix5Q0FBMkI7Ozs7Ozs7SUFNM0IsMENBQTRCOzs7Ozs7O0lBTTVCLHlDQUEyQjs7Ozs7OztJQU0zQixxQ0FBdUI7Ozs7Ozs7SUFNdkIsb0NBQXNCOzs7Ozs7O0lBTXRCLG1DQUFxQjs7Ozs7OztJQU1yQixpREFBbUM7Ozs7Ozs7SUFNbkMsd0NBQTBCOzs7Ozs7O0lBTTFCLGdDQUFrQjs7Ozs7OztJQU1sQixxQ0FBdUI7Ozs7Ozs7SUFNdkIsaUNBQW1COzs7Ozs7O0lBTW5CLHFDQUF1Qjs7Ozs7OztJQU12QiwyQ0FBNkI7Ozs7Ozs7SUFNN0IsMkNBQTZCOzs7Ozs7O0lBTTdCLHlDQUEyQjs7Ozs7OztJQU0zQixtQ0FBcUI7Ozs7Ozs7SUFNckIsZ0NBQWtCOzs7Ozs7O0lBTWxCLDhDQUFnQzs7Ozs7OztJQU1oQyx3Q0FBMEI7Ozs7Ozs7SUFNMUIsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBPY2NFbmRwb2ludHMge1xuICAvKipcbiAgICogQ2xpZW50IGxvZ2luIChnZXQgYXV0aG9yaXphdGlvbiB0b2tlbilcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgbG9naW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENsaWVudCBsb2dvdXQgKHJldm9rZSBhdXRob3JpemF0aW9uIHRva2VuKVxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICByZXZva2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBkZXRhaWxzXG4gICAqXG4gICAqIEBtZW1iZXIgc3RyaW5nXG4gICAqL1xuICBwcm9kdWN0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBkZXRhaWxzIGZvciBzY29wZVxuICAgKlxuICAgKiBAbWVtYmVyIE9iamVjdFxuICAgKi9cbiAgcHJvZHVjdF9zY29wZXM/OiB7XG4gICAgbGlzdD86IHN0cmluZztcbiAgICBkZXRhaWxzPzogc3RyaW5nO1xuICAgIFtzY29wZTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcmV2aWV3cyBmb3IgYSBwcm9kdWN0XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHByb2R1Y3RSZXZpZXdzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBwcm9kdWN0IHJlZmVyZW5jZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcHJvZHVjdFJlZmVyZW5jZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIHByb2R1Y3RzIGFuZCBhZGRpdGlvbmFsIGRhdGFcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcHJvZHVjdFNlYXJjaD86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYXZhaWxhYmxlIHN1Z2dlc3Rpb25zXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHByb2R1Y3RTdWdnZXN0aW9ucz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBDTVMgY29tcG9uZW50IGRldGFpbHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY29tcG9uZW50Pzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBDTVMgY29tcG9uZW50IGRldGFpbHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY29tcG9uZW50cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBwYWdlIGRhdGEgd2l0aCBsaXN0IG9mIGNtcyBjb250ZW50IHNsb3RzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHBhZ2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IHBhZ2UgZGF0YSB3aXRoIGxpc3Qgb2YgY21zIGNvbnRlbnQgc2xvdHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcGFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhbGwgY2FydHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbY2FydHNdXG4gICAqL1xuICBjYXJ0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGNhcnQgd2l0aCBhIGdpdmVuIGlkZW50aWZpZXJcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbY2FydF1cbiAgICovXG4gIGNhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDcmVhdGVzIG9yIHJlc3RvcmUgYSBjYXJ0IGZvciBhIHVzZXJcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbY3JlYXRlQ2FydF1cbiAgICovXG4gIGNyZWF0ZUNhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2FydCB3aXRoIGEgZ2l2ZW4gY2FydCBpZFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxldGVDYXJ0XVxuICAgKi9cbiAgZGVsZXRlQ2FydD86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZHMgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ30gW2FkZEVudHJpZXNdXG4gICAqL1xuICBhZGRFbnRyaWVzPzogc3RyaW5nO1xuICAvKipcbiAgICogVXBkYXRlIHF1YW50aXR5IGFuZCBzdG9yZSB0aGUgZGV0YWlscyBvZiBhIGNhcnQgZW50cnlcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbdXBkYXRlRW50cmllc11cbiAgICovXG4gIHVwZGF0ZUVudHJpZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWxldGVzIGNhcnQgZW50cnlcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVtb3ZlRW50cmllc11cbiAgICovXG4gIHJlbW92ZUVudHJpZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBc3NpZ24gZW1haWwgdG8gY2FydFxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthZGRFbWFpbF1cbiAgICovXG4gIGFkZEVtYWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgc3RvcmUgbG9jYXRpb25cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbcGFnZV1cbiAgICovXG4gIHN0b3JlPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBzdG9yZSBsb2NhdGlvbnNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfSBbcGFnZV1cbiAgICovXG4gIHN0b3Jlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldHMgYSBzdG9yZSBsb2NhdGlvbiBjb3VudCBwZXIgY291bnRyeSBhbmQgcmVnaW9uc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwYWdlXVxuICAgKi9cbiAgc3RvcmVzY291bnRzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhdmFpbGFibGUgbGFuZ3VhZ2VzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGxhbmd1YWdlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYXZhaWxhYmxlIGN1cnJlbmNpZXNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY3VycmVuY2llcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgY291bnRyaWVzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvdW50cmllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEZldGNoIHRoZSBsaXN0IG9mIHJlZ2lvbnMgZm9yIHRoZSBwcm92aWRlZCBjb3VudHJ5XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHJlZ2lvbnM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaXRsZXMgdXNlZCBmb3IgdXNlcidzIHBlcnNvbmFsIGluZm8uXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHRpdGxlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCB1c2VyIGRldGFpbHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdXNlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXIuXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHVzZXJSZWdpc3Rlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlcXVlc3QgYW4gZW1haWwgdG8gcmVzZXQgdGhlIHBhc3N3b3JkXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHVzZXJGb3Jnb3RQYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwYXNzd29yZCBvbmNlIHRoZSBlbWFpbCBpcyByZWNpZXZlZC5cbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgdXNlclJlc2V0UGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHVzZXIgaWQgd2l0aCB3aGljaCB0aGUgdXNlciBhdXRoZW50aWNhdGVzLlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyVXBkYXRlTG9naW5JZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdXNlcidzIHBhc3N3b3JkXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHVzZXJVcGRhdGVQYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFBheW1lbnQgZGV0YWlscyByb290IGVuZHBvaW50LlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwYXltZW50RGV0YWlsc0FsbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhIHNwZWNpZmljIHBheW1lbnQgbWV0aG9kLlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBwYXltZW50RGV0YWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIHRoZSBsaXN0IG9mIG9uZSB1c2VyJ3Mgb3JkZXJzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIG9yZGVySGlzdG9yeT86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciB0aGUgZGV0YWlscyBvZiBvbmUgdXNlcidzIG9yZGVyXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIG9yZGVyRGV0YWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGNvbnNlbnQgdGVtcGxhdGVzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGNvbnNlbnRUZW1wbGF0ZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYSB1c2VyJ3MgY29uc2VudHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY29uc2VudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYSB1c2VyJ3Mgc3BlY2lmaWMgcHJldmlvdXNseSBnaXZlbiBjb25zZW50LlxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjb25zZW50RGV0YWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGEgdXNlcidzIGFkZHJlc3Nlc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBhZGRyZXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgYSB1c2VyJ3Mgc3BlY2lmaWMgYWRkcmVzc1xuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBhZGRyZXNzRGV0YWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGFkZHJlc3MgdmVyaWZpY2F0aW9uXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGFkZHJlc3NWZXJpZmljYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgY29uc2lnbm1lbnQgdHJhY2tpbmdcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgY29uc2lnbm1lbnRUcmFja2luZz86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBhc20gY3VzdG9tZXIgc2VhcmNoXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGFzbUN1c3RvbWVyU2VhcmNoPzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIGNhcnQgdm91Y2hlclxuICAgKlxuICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBjYXJ0Vm91Y2hlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEV4cGxpY2l0bHkgc2F2ZXMgYSBjYXJ0XG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIHNhdmVDYXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogRW5kcG9pbnQgZm9yIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIG5vdGlmaWNhdGlvblByZWZlcmVuY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbmRwb2ludCBmb3IgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICpcbiAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgKi9cbiAgcHJvZHVjdEludGVyZXN0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEVuZHBvaW50IGZvciBnZXR0aW5nIHByb2R1Y3QgaW50ZXJlc3RzXG4gICAqXG4gICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICovXG4gIGdldFByb2R1Y3RJbnRlcmVzdHM/OiBzdHJpbmc7XG59XG4iXX0=