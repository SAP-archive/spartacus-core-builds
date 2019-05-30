/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Country() { }
if (false) {
    /** @type {?|undefined} */
    Country.prototype.isocode;
    /** @type {?|undefined} */
    Country.prototype.name;
}
/** @enum {string} */
const CountryType = {
    BILLING: 'BILLING',
    SHIPPING: 'SHIPPING',
};
export { CountryType };
/**
 * @record
 */
export function Region() { }
if (false) {
    /** @type {?|undefined} */
    Region.prototype.countryIso;
    /** @type {?|undefined} */
    Region.prototype.isocode;
    /** @type {?|undefined} */
    Region.prototype.isocodeShort;
    /** @type {?|undefined} */
    Region.prototype.name;
}
/**
 * @record
 */
export function Address() { }
if (false) {
    /** @type {?|undefined} */
    Address.prototype.companyName;
    /** @type {?|undefined} */
    Address.prototype.country;
    /** @type {?|undefined} */
    Address.prototype.defaultAddress;
    /** @type {?|undefined} */
    Address.prototype.email;
    /** @type {?|undefined} */
    Address.prototype.firstName;
    /** @type {?|undefined} */
    Address.prototype.formattedAddress;
    /** @type {?|undefined} */
    Address.prototype.id;
    /** @type {?|undefined} */
    Address.prototype.lastName;
    /** @type {?|undefined} */
    Address.prototype.line1;
    /** @type {?|undefined} */
    Address.prototype.line2;
    /** @type {?|undefined} */
    Address.prototype.phone;
    /** @type {?|undefined} */
    Address.prototype.postalCode;
    /** @type {?|undefined} */
    Address.prototype.region;
    /** @type {?|undefined} */
    Address.prototype.shippingAddress;
    /** @type {?|undefined} */
    Address.prototype.title;
    /** @type {?|undefined} */
    Address.prototype.titleCode;
    /** @type {?|undefined} */
    Address.prototype.town;
    /** @type {?|undefined} */
    Address.prototype.visibleInAddressBook;
}
/**
 * @record
 */
export function AddressValidation() { }
if (false) {
    /** @type {?|undefined} */
    AddressValidation.prototype.decision;
    /** @type {?|undefined} */
    AddressValidation.prototype.errors;
    /** @type {?|undefined} */
    AddressValidation.prototype.suggestedAddresses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hZGRyZXNzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw2QkFHQzs7O0lBRkMsMEJBQWlCOztJQUNqQix1QkFBYzs7OztJQUlkLFNBQVUsU0FBUztJQUNuQixVQUFXLFVBQVU7Ozs7OztBQUd2Qiw0QkFLQzs7O0lBSkMsNEJBQW9COztJQUNwQix5QkFBaUI7O0lBQ2pCLDhCQUFzQjs7SUFDdEIsc0JBQWM7Ozs7O0FBR2hCLDZCQW1CQzs7O0lBbEJDLDhCQUFxQjs7SUFDckIsMEJBQWtCOztJQUNsQixpQ0FBeUI7O0lBQ3pCLHdCQUFlOztJQUNmLDRCQUFtQjs7SUFDbkIsbUNBQTBCOztJQUMxQixxQkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLHdCQUFlOztJQUNmLHdCQUFlOztJQUNmLHdCQUFlOztJQUNmLDZCQUFvQjs7SUFDcEIseUJBQWdCOztJQUNoQixrQ0FBMEI7O0lBQzFCLHdCQUFlOztJQUNmLDRCQUFtQjs7SUFDbkIsdUJBQWM7O0lBQ2QsdUNBQStCOzs7OztBQUdqQyx1Q0FLQzs7O0lBSkMscUNBQWtCOztJQUVsQixtQ0FBa0M7O0lBQ2xDLCtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuL21pc2MubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvdW50cnkge1xuICBpc29jb2RlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBDb3VudHJ5VHlwZSB7XG4gIEJJTExJTkcgPSAnQklMTElORycsXG4gIFNISVBQSU5HID0gJ1NISVBQSU5HJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpb24ge1xuICBjb3VudHJ5SXNvPzogc3RyaW5nO1xuICBpc29jb2RlPzogc3RyaW5nO1xuICBpc29jb2RlU2hvcnQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICBjb3VudHJ5PzogQ291bnRyeTtcbiAgZGVmYXVsdEFkZHJlc3M/OiBib29sZWFuO1xuICBlbWFpbD86IHN0cmluZztcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICBmb3JtYXR0ZWRBZGRyZXNzPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gIGxpbmUxPzogc3RyaW5nO1xuICBsaW5lMj86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gIHJlZ2lvbj86IFJlZ2lvbjtcbiAgc2hpcHBpbmdBZGRyZXNzPzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRpdGxlQ29kZT86IHN0cmluZztcbiAgdG93bj86IHN0cmluZztcbiAgdmlzaWJsZUluQWRkcmVzc0Jvb2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NWYWxpZGF0aW9uIHtcbiAgZGVjaXNpb24/OiBzdHJpbmc7XG4gIC8vIFRPRE86IFNpbXBsaWZ5IHdpdGggY29udmVydGVyXG4gIGVycm9ycz86IHsgZXJyb3JzOiBFcnJvck1vZGVsW10gfTtcbiAgc3VnZ2VzdGVkQWRkcmVzc2VzPzogQWRkcmVzc1tdO1xufVxuIl19