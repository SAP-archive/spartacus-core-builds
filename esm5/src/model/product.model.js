/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function VariantOptionQualifier() { }
if (false) {
    /** @type {?|undefined} */
    VariantOptionQualifier.prototype.image;
    /** @type {?|undefined} */
    VariantOptionQualifier.prototype.name;
    /** @type {?|undefined} */
    VariantOptionQualifier.prototype.qualifier;
    /** @type {?|undefined} */
    VariantOptionQualifier.prototype.value;
}
/**
 * @record
 */
export function PromotionRestriction() { }
if (false) {
    /** @type {?|undefined} */
    PromotionRestriction.prototype.description;
    /** @type {?|undefined} */
    PromotionRestriction.prototype.restrictionType;
}
/**
 * @record
 */
export function FeatureUnit() { }
if (false) {
    /** @type {?|undefined} */
    FeatureUnit.prototype.name;
    /** @type {?|undefined} */
    FeatureUnit.prototype.symbol;
    /** @type {?|undefined} */
    FeatureUnit.prototype.unitType;
}
/**
 * @record
 */
export function FeatureValue() { }
if (false) {
    /** @type {?|undefined} */
    FeatureValue.prototype.value;
}
/**
 * @record
 */
export function Feature() { }
if (false) {
    /** @type {?|undefined} */
    Feature.prototype.code;
    /** @type {?|undefined} */
    Feature.prototype.comparable;
    /** @type {?|undefined} */
    Feature.prototype.description;
    /** @type {?|undefined} */
    Feature.prototype.featureUnit;
    /** @type {?|undefined} */
    Feature.prototype.featureValues;
    /** @type {?|undefined} */
    Feature.prototype.name;
    /** @type {?|undefined} */
    Feature.prototype.range;
    /** @type {?|undefined} */
    Feature.prototype.type;
}
/**
 * @record
 */
export function VariantCategory() { }
if (false) {
    /** @type {?|undefined} */
    VariantCategory.prototype.hasImage;
    /** @type {?|undefined} */
    VariantCategory.prototype.name;
    /** @type {?|undefined} */
    VariantCategory.prototype.priority;
}
/**
 * @record
 */
export function VariantValueCategory() { }
if (false) {
    /** @type {?|undefined} */
    VariantValueCategory.prototype.name;
    /** @type {?|undefined} */
    VariantValueCategory.prototype.sequence;
    /** @type {?|undefined} */
    VariantValueCategory.prototype.superCategories;
}
/** @enum {string} */
var PriceType = {
    BUY: 'BUY',
    FROM: 'FROM',
};
export { PriceType };
/**
 * @record
 */
export function Price() { }
if (false) {
    /** @type {?|undefined} */
    Price.prototype.currencyIso;
    /** @type {?|undefined} */
    Price.prototype.formattedValue;
    /** @type {?|undefined} */
    Price.prototype.maxQuantity;
    /** @type {?|undefined} */
    Price.prototype.minQuantity;
    /** @type {?|undefined} */
    Price.prototype.priceType;
    /** @type {?|undefined} */
    Price.prototype.value;
}
/**
 * @record
 */
export function Stock() { }
if (false) {
    /** @type {?|undefined} */
    Stock.prototype.stockLevel;
    /** @type {?|undefined} */
    Stock.prototype.stockLevelStatus;
}
/**
 * @record
 */
export function VariantOption() { }
if (false) {
    /** @type {?|undefined} */
    VariantOption.prototype.code;
    /** @type {?|undefined} */
    VariantOption.prototype.priceData;
    /** @type {?|undefined} */
    VariantOption.prototype.stock;
    /** @type {?|undefined} */
    VariantOption.prototype.url;
    /** @type {?|undefined} */
    VariantOption.prototype.variantOptionQualifiers;
}
/**
 * @record
 */
export function Promotion() { }
if (false) {
    /** @type {?|undefined} */
    Promotion.prototype.code;
    /** @type {?|undefined} */
    Promotion.prototype.couldFireMessages;
    /** @type {?|undefined} */
    Promotion.prototype.description;
    /** @type {?|undefined} */
    Promotion.prototype.enabled;
    /** @type {?|undefined} */
    Promotion.prototype.endDate;
    /** @type {?|undefined} */
    Promotion.prototype.firedMessages;
    /** @type {?|undefined} */
    Promotion.prototype.priority;
    /** @type {?|undefined} */
    Promotion.prototype.productBanner;
    /** @type {?|undefined} */
    Promotion.prototype.promotionGroup;
    /** @type {?|undefined} */
    Promotion.prototype.promotionType;
    /** @type {?|undefined} */
    Promotion.prototype.restrictions;
    /** @type {?|undefined} */
    Promotion.prototype.startDate;
    /** @type {?|undefined} */
    Promotion.prototype.title;
}
/**
 * @record
 */
export function Category() { }
if (false) {
    /** @type {?|undefined} */
    Category.prototype.code;
    /** @type {?|undefined} */
    Category.prototype.name;
    /** @type {?|undefined} */
    Category.prototype.image;
    /** @type {?|undefined} */
    Category.prototype.url;
}
/**
 * @record
 */
export function Classification() { }
if (false) {
    /** @type {?|undefined} */
    Classification.prototype.code;
    /** @type {?|undefined} */
    Classification.prototype.features;
    /** @type {?|undefined} */
    Classification.prototype.name;
}
/**
 * @record
 */
export function FutureStock() { }
if (false) {
    /** @type {?|undefined} */
    FutureStock.prototype.date;
    /** @type {?|undefined} */
    FutureStock.prototype.formattedDate;
    /** @type {?|undefined} */
    FutureStock.prototype.stock;
}
/**
 * @record
 */
export function PriceRange() { }
if (false) {
    /** @type {?|undefined} */
    PriceRange.prototype.maxPrice;
    /** @type {?|undefined} */
    PriceRange.prototype.minPrice;
}
/**
 * @record
 */
export function ProductReference() { }
if (false) {
    /** @type {?|undefined} */
    ProductReference.prototype.description;
    /** @type {?|undefined} */
    ProductReference.prototype.preselected;
    /** @type {?|undefined} */
    ProductReference.prototype.quantity;
    /** @type {?|undefined} */
    ProductReference.prototype.referenceType;
    /** @type {?|undefined} */
    ProductReference.prototype.target;
}
/**
 * @record
 */
export function Review() { }
if (false) {
    /** @type {?|undefined} */
    Review.prototype.alias;
    /** @type {?|undefined} */
    Review.prototype.comment;
    /** @type {?|undefined} */
    Review.prototype.date;
    /** @type {?|undefined} */
    Review.prototype.headline;
    /** @type {?|undefined} */
    Review.prototype.id;
    /** @type {?|undefined} */
    Review.prototype.principal;
    /** @type {?|undefined} */
    Review.prototype.rating;
}
/**
 * @record
 */
export function VariantMatrixElement() { }
if (false) {
    /** @type {?|undefined} */
    VariantMatrixElement.prototype.elements;
    /** @type {?|undefined} */
    VariantMatrixElement.prototype.isLeaf;
    /** @type {?|undefined} */
    VariantMatrixElement.prototype.parentVariantCategory;
    /** @type {?|undefined} */
    VariantMatrixElement.prototype.variantOption;
    /** @type {?|undefined} */
    VariantMatrixElement.prototype.variantValueCategory;
}
/**
 * @record
 */
export function ProductReferences() { }
/**
 * @record
 */
export function BaseOption() { }
if (false) {
    /** @type {?|undefined} */
    BaseOption.prototype.options;
    /** @type {?|undefined} */
    BaseOption.prototype.selected;
    /** @type {?|undefined} */
    BaseOption.prototype.variantType;
}
/**
 * @record
 */
export function Product() { }
if (false) {
    /** @type {?|undefined} */
    Product.prototype.availableForPickup;
    /** @type {?|undefined} */
    Product.prototype.averageRating;
    /** @type {?|undefined} */
    Product.prototype.baseOptions;
    /** @type {?|undefined} */
    Product.prototype.baseProduct;
    /** @type {?|undefined} */
    Product.prototype.categories;
    /** @type {?|undefined} */
    Product.prototype.classifications;
    /** @type {?|undefined} */
    Product.prototype.code;
    /** @type {?|undefined} */
    Product.prototype.description;
    /** @type {?|undefined} */
    Product.prototype.futureStocks;
    /** @type {?|undefined} */
    Product.prototype.images;
    /** @type {?|undefined} */
    Product.prototype.manufacturer;
    /** @type {?|undefined} */
    Product.prototype.multidimensional;
    /** @type {?|undefined} */
    Product.prototype.name;
    /** @type {?|undefined} */
    Product.prototype.numberOfReviews;
    /** @type {?|undefined} */
    Product.prototype.potentialPromotions;
    /** @type {?|undefined} */
    Product.prototype.price;
    /** @type {?|undefined} */
    Product.prototype.priceRange;
    /** @type {?|undefined} */
    Product.prototype.productReferences;
    /** @type {?|undefined} */
    Product.prototype.purchasable;
    /** @type {?|undefined} */
    Product.prototype.reviews;
    /** @type {?|undefined} */
    Product.prototype.stock;
    /** @type {?|undefined} */
    Product.prototype.summary;
    /** @type {?|undefined} */
    Product.prototype.url;
    /** @type {?|undefined} */
    Product.prototype.variantMatrix;
    /** @type {?|undefined} */
    Product.prototype.variantOptions;
    /** @type {?|undefined} */
    Product.prototype.variantType;
    /** @type {?|undefined} */
    Product.prototype.volumePrices;
    /** @type {?|undefined} */
    Product.prototype.volumePricesFlag;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9wcm9kdWN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSw0Q0FLQzs7O0lBSkMsdUNBQWM7O0lBQ2Qsc0NBQWM7O0lBQ2QsMkNBQW1COztJQUNuQix1Q0FBZTs7Ozs7QUFHakIsMENBR0M7OztJQUZDLDJDQUFxQjs7SUFDckIsK0NBQXlCOzs7OztBQUczQixpQ0FJQzs7O0lBSEMsMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiwrQkFBa0I7Ozs7O0FBR3BCLGtDQUVDOzs7SUFEQyw2QkFBZTs7Ozs7QUFHakIsNkJBU0M7OztJQVJDLHVCQUFjOztJQUNkLDZCQUFxQjs7SUFDckIsOEJBQXFCOztJQUNyQiw4QkFBMEI7O0lBQzFCLGdDQUErQjs7SUFDL0IsdUJBQWM7O0lBQ2Qsd0JBQWdCOztJQUNoQix1QkFBYzs7Ozs7QUFHaEIscUNBSUM7OztJQUhDLG1DQUFtQjs7SUFDbkIsK0JBQWM7O0lBQ2QsbUNBQWtCOzs7OztBQUdwQiwwQ0FJQzs7O0lBSEMsb0NBQWM7O0lBQ2Qsd0NBQWtCOztJQUNsQiwrQ0FBb0M7Ozs7SUFJcEMsS0FBTSxLQUFLO0lBQ1gsTUFBTyxNQUFNOzs7Ozs7QUFHZiwyQkFPQzs7O0lBTkMsNEJBQXFCOztJQUNyQiwrQkFBd0I7O0lBQ3hCLDRCQUFxQjs7SUFDckIsNEJBQXFCOztJQUNyQiwwQkFBc0I7O0lBQ3RCLHNCQUFlOzs7OztBQUdqQiwyQkFHQzs7O0lBRkMsMkJBQW9COztJQUNwQixpQ0FBMEI7Ozs7O0FBRzVCLG1DQU1DOzs7SUFMQyw2QkFBYzs7SUFDZCxrQ0FBa0I7O0lBQ2xCLDhCQUFjOztJQUNkLDRCQUFhOztJQUNiLGdEQUFtRDs7Ozs7QUFHckQsK0JBY0M7OztJQWJDLHlCQUFjOztJQUNkLHNDQUE2Qjs7SUFDN0IsZ0NBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDRCQUFlOztJQUNmLGtDQUF5Qjs7SUFDekIsNkJBQWtCOztJQUNsQixrQ0FBc0I7O0lBQ3RCLG1DQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2QixpQ0FBc0M7O0lBQ3RDLDhCQUFpQjs7SUFDakIsMEJBQWU7Ozs7O0FBR2pCLDhCQUtDOzs7SUFKQyx3QkFBYzs7SUFDZCx3QkFBYzs7SUFDZCx5QkFBYzs7SUFDZCx1QkFBYTs7Ozs7QUFHZixvQ0FJQzs7O0lBSEMsOEJBQWM7O0lBQ2Qsa0NBQXFCOztJQUNyQiw4QkFBYzs7Ozs7QUFHaEIsaUNBSUM7OztJQUhDLDJCQUFZOztJQUNaLG9DQUF1Qjs7SUFDdkIsNEJBQWM7Ozs7O0FBR2hCLGdDQUdDOzs7SUFGQyw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7QUFHbkIsc0NBTUM7OztJQUxDLHVDQUFxQjs7SUFDckIsdUNBQXNCOztJQUN0QixvQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsa0NBQWlCOzs7OztBQUduQiw0QkFRQzs7O0lBUEMsdUJBQWU7O0lBQ2YseUJBQWlCOztJQUNqQixzQkFBWTs7SUFDWiwwQkFBa0I7O0lBQ2xCLG9CQUFZOztJQUNaLDJCQUFpQjs7SUFDakIsd0JBQWdCOzs7OztBQUdsQiwwQ0FNQzs7O0lBTEMsd0NBQWtDOztJQUNsQyxzQ0FBaUI7O0lBQ2pCLHFEQUF3Qzs7SUFDeEMsNkNBQThCOztJQUM5QixvREFBNEM7Ozs7O0FBRzlDLHVDQUVDOzs7O0FBRUQsZ0NBSUM7OztJQUhDLDZCQUEwQjs7SUFDMUIsOEJBQXlCOztJQUN6QixpQ0FBcUI7Ozs7O0FBR3ZCLDZCQTZCQzs7O0lBNUJDLHFDQUE2Qjs7SUFDN0IsZ0NBQXVCOztJQUN2Qiw4QkFBMkI7O0lBQzNCLDhCQUFxQjs7SUFDckIsNkJBQXdCOztJQUN4QixrQ0FBbUM7O0lBQ25DLHVCQUFjOztJQUNkLDhCQUFxQjs7SUFDckIsK0JBQTZCOztJQUM3Qix5QkFBZ0I7O0lBQ2hCLCtCQUFzQjs7SUFDdEIsbUNBQTJCOztJQUMzQix1QkFBYzs7SUFDZCxrQ0FBeUI7O0lBQ3pCLHNDQUFrQzs7SUFDbEMsd0JBQWM7O0lBQ2QsNkJBQXdCOztJQUN4QixvQ0FBc0M7O0lBQ3RDLDhCQUFzQjs7SUFDdEIsMEJBQW1COztJQUNuQix3QkFBYzs7SUFDZCwwQkFBaUI7O0lBQ2pCLHNCQUFhOztJQUNiLGdDQUF1Qzs7SUFDdkMsaUNBQWlDOztJQUNqQyw4QkFBcUI7O0lBQ3JCLCtCQUF1Qjs7SUFDdkIsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UsIEltYWdlcyB9IGZyb20gJy4vaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudE9wdGlvblF1YWxpZmllciB7XG4gIGltYWdlPzogSW1hZ2U7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHF1YWxpZmllcj86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdHJpY3Rpb24ge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcmVzdHJpY3Rpb25UeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVVbml0IHtcbiAgbmFtZT86IHN0cmluZztcbiAgc3ltYm9sPzogc3RyaW5nO1xuICB1bml0VHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlVmFsdWUge1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlIHtcbiAgY29kZT86IHN0cmluZztcbiAgY29tcGFyYWJsZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBmZWF0dXJlVW5pdD86IEZlYXR1cmVVbml0O1xuICBmZWF0dXJlVmFsdWVzPzogRmVhdHVyZVZhbHVlW107XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJhbmdlPzogYm9vbGVhbjtcbiAgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYW50Q2F0ZWdvcnkge1xuICBoYXNJbWFnZT86IGJvb2xlYW47XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHByaW9yaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRWYWx1ZUNhdGVnb3J5IHtcbiAgbmFtZT86IHN0cmluZztcbiAgc2VxdWVuY2U/OiBudW1iZXI7XG4gIHN1cGVyQ2F0ZWdvcmllcz86IFZhcmlhbnRDYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgZW51bSBQcmljZVR5cGUge1xuICBCVVkgPSAnQlVZJyxcbiAgRlJPTSA9ICdGUk9NJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmljZSB7XG4gIGN1cnJlbmN5SXNvPzogc3RyaW5nO1xuICBmb3JtYXR0ZWRWYWx1ZT86IHN0cmluZztcbiAgbWF4UXVhbnRpdHk/OiBudW1iZXI7XG4gIG1pblF1YW50aXR5PzogbnVtYmVyO1xuICBwcmljZVR5cGU/OiBQcmljZVR5cGU7XG4gIHZhbHVlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b2NrIHtcbiAgc3RvY2tMZXZlbD86IG51bWJlcjtcbiAgc3RvY2tMZXZlbFN0YXR1cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uIHtcbiAgY29kZT86IHN0cmluZztcbiAgcHJpY2VEYXRhPzogUHJpY2U7XG4gIHN0b2NrPzogU3RvY2s7XG4gIHVybD86IHN0cmluZztcbiAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM/OiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uIHtcbiAgY29kZT86IHN0cmluZztcbiAgY291bGRGaXJlTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICBlbmREYXRlPzogRGF0ZTtcbiAgZmlyZWRNZXNzYWdlcz86IHN0cmluZ1tdO1xuICBwcmlvcml0eT86IG51bWJlcjtcbiAgcHJvZHVjdEJhbm5lcj86IEltYWdlO1xuICBwcm9tb3Rpb25Hcm91cD86IHN0cmluZztcbiAgcHJvbW90aW9uVHlwZT86IHN0cmluZztcbiAgcmVzdHJpY3Rpb25zPzogUHJvbW90aW9uUmVzdHJpY3Rpb25bXTtcbiAgc3RhcnREYXRlPzogRGF0ZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICBjb2RlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBpbWFnZT86IEltYWdlO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZmljYXRpb24ge1xuICBjb2RlPzogc3RyaW5nO1xuICBmZWF0dXJlcz86IEZlYXR1cmVbXTtcbiAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGdXR1cmVTdG9jayB7XG4gIGRhdGU/OiBEYXRlO1xuICBmb3JtYXR0ZWREYXRlPzogc3RyaW5nO1xuICBzdG9jaz86IFN0b2NrO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaWNlUmFuZ2Uge1xuICBtYXhQcmljZT86IFByaWNlO1xuICBtaW5QcmljZT86IFByaWNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSZWZlcmVuY2Uge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHJlc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgcmVmZXJlbmNlVHlwZT86IHN0cmluZztcbiAgdGFyZ2V0PzogUHJvZHVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXZpZXcge1xuICBhbGlhcz86IHN0cmluZztcbiAgY29tbWVudD86IHN0cmluZztcbiAgZGF0ZT86IERhdGU7XG4gIGhlYWRsaW5lPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgcHJpbmNpcGFsPzogVXNlcjtcbiAgcmF0aW5nPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRNYXRyaXhFbGVtZW50IHtcbiAgZWxlbWVudHM/OiBWYXJpYW50TWF0cml4RWxlbWVudFtdO1xuICBpc0xlYWY/OiBib29sZWFuO1xuICBwYXJlbnRWYXJpYW50Q2F0ZWdvcnk/OiBWYXJpYW50Q2F0ZWdvcnk7XG4gIHZhcmlhbnRPcHRpb24/OiBWYXJpYW50T3B0aW9uO1xuICB2YXJpYW50VmFsdWVDYXRlZ29yeT86IFZhcmlhbnRWYWx1ZUNhdGVnb3J5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSZWZlcmVuY2VzIHtcbiAgW3JlZmVyZW5jZVR5cGU6IHN0cmluZ106IFByb2R1Y3RSZWZlcmVuY2VbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlT3B0aW9uIHtcbiAgb3B0aW9ucz86IFZhcmlhbnRPcHRpb25bXTtcbiAgc2VsZWN0ZWQ/OiBWYXJpYW50T3B0aW9uO1xuICB2YXJpYW50VHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgYXZhaWxhYmxlRm9yUGlja3VwPzogYm9vbGVhbjtcbiAgYXZlcmFnZVJhdGluZz86IG51bWJlcjtcbiAgYmFzZU9wdGlvbnM/OiBCYXNlT3B0aW9uW107XG4gIGJhc2VQcm9kdWN0Pzogc3RyaW5nO1xuICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlbXTtcbiAgY2xhc3NpZmljYXRpb25zPzogQ2xhc3NpZmljYXRpb25bXTtcbiAgY29kZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGZ1dHVyZVN0b2Nrcz86IEZ1dHVyZVN0b2NrW107XG4gIGltYWdlcz86IEltYWdlcztcbiAgbWFudWZhY3R1cmVyPzogc3RyaW5nO1xuICBtdWx0aWRpbWVuc2lvbmFsPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgbnVtYmVyT2ZSZXZpZXdzPzogbnVtYmVyO1xuICBwb3RlbnRpYWxQcm9tb3Rpb25zPzogUHJvbW90aW9uW107XG4gIHByaWNlPzogUHJpY2U7XG4gIHByaWNlUmFuZ2U/OiBQcmljZVJhbmdlO1xuICBwcm9kdWN0UmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VzO1xuICBwdXJjaGFzYWJsZT86IGJvb2xlYW47XG4gIHJldmlld3M/OiBSZXZpZXdbXTtcbiAgc3RvY2s/OiBTdG9jaztcbiAgc3VtbWFyeT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICB2YXJpYW50TWF0cml4PzogVmFyaWFudE1hdHJpeEVsZW1lbnRbXTtcbiAgdmFyaWFudE9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xuICB2b2x1bWVQcmljZXM/OiBQcmljZVtdO1xuICB2b2x1bWVQcmljZXNGbGFnPzogYm9vbGVhbjtcbn1cbiJdfQ==