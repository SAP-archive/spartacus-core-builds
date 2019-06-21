/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    Product.prototype.nameHtml;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9wcm9kdWN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSw0Q0FLQzs7O0lBSkMsdUNBQWM7O0lBQ2Qsc0NBQWM7O0lBQ2QsMkNBQW1COztJQUNuQix1Q0FBZTs7Ozs7QUFHakIsMENBR0M7OztJQUZDLDJDQUFxQjs7SUFDckIsK0NBQXlCOzs7OztBQUczQixpQ0FJQzs7O0lBSEMsMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiwrQkFBa0I7Ozs7O0FBR3BCLGtDQUVDOzs7SUFEQyw2QkFBZTs7Ozs7QUFHakIsNkJBU0M7OztJQVJDLHVCQUFjOztJQUNkLDZCQUFxQjs7SUFDckIsOEJBQXFCOztJQUNyQiw4QkFBMEI7O0lBQzFCLGdDQUErQjs7SUFDL0IsdUJBQWM7O0lBQ2Qsd0JBQWdCOztJQUNoQix1QkFBYzs7Ozs7QUFHaEIscUNBSUM7OztJQUhDLG1DQUFtQjs7SUFDbkIsK0JBQWM7O0lBQ2QsbUNBQWtCOzs7OztBQUdwQiwwQ0FJQzs7O0lBSEMsb0NBQWM7O0lBQ2Qsd0NBQWtCOztJQUNsQiwrQ0FBb0M7Ozs7SUFJcEMsS0FBTSxLQUFLO0lBQ1gsTUFBTyxNQUFNOzs7Ozs7QUFHZiwyQkFPQzs7O0lBTkMsNEJBQXFCOztJQUNyQiwrQkFBd0I7O0lBQ3hCLDRCQUFxQjs7SUFDckIsNEJBQXFCOztJQUNyQiwwQkFBc0I7O0lBQ3RCLHNCQUFlOzs7OztBQUdqQiwyQkFHQzs7O0lBRkMsMkJBQW9COztJQUNwQixpQ0FBMEI7Ozs7O0FBRzVCLG1DQU1DOzs7SUFMQyw2QkFBYzs7SUFDZCxrQ0FBa0I7O0lBQ2xCLDhCQUFjOztJQUNkLDRCQUFhOztJQUNiLGdEQUFtRDs7Ozs7QUFHckQsK0JBY0M7OztJQWJDLHlCQUFjOztJQUNkLHNDQUE2Qjs7SUFDN0IsZ0NBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDRCQUFlOztJQUNmLGtDQUF5Qjs7SUFDekIsNkJBQWtCOztJQUNsQixrQ0FBc0I7O0lBQ3RCLG1DQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2QixpQ0FBc0M7O0lBQ3RDLDhCQUFpQjs7SUFDakIsMEJBQWU7Ozs7O0FBR2pCLDhCQUtDOzs7SUFKQyx3QkFBYzs7SUFDZCx3QkFBYzs7SUFDZCx5QkFBYzs7SUFDZCx1QkFBYTs7Ozs7QUFHZixvQ0FJQzs7O0lBSEMsOEJBQWM7O0lBQ2Qsa0NBQXFCOztJQUNyQiw4QkFBYzs7Ozs7QUFHaEIsaUNBSUM7OztJQUhDLDJCQUFZOztJQUNaLG9DQUF1Qjs7SUFDdkIsNEJBQWM7Ozs7O0FBR2hCLGdDQUdDOzs7SUFGQyw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7QUFHbkIsc0NBTUM7OztJQUxDLHVDQUFxQjs7SUFDckIsdUNBQXNCOztJQUN0QixvQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsa0NBQWlCOzs7OztBQUduQiw0QkFRQzs7O0lBUEMsdUJBQWU7O0lBQ2YseUJBQWlCOztJQUNqQixzQkFBWTs7SUFDWiwwQkFBa0I7O0lBQ2xCLG9CQUFZOztJQUNaLDJCQUFpQjs7SUFDakIsd0JBQWdCOzs7OztBQUdsQiwwQ0FNQzs7O0lBTEMsd0NBQWtDOztJQUNsQyxzQ0FBaUI7O0lBQ2pCLHFEQUF3Qzs7SUFDeEMsNkNBQThCOztJQUM5QixvREFBNEM7Ozs7O0FBRzlDLHVDQUVDOzs7O0FBRUQsZ0NBSUM7OztJQUhDLDZCQUEwQjs7SUFDMUIsOEJBQXlCOztJQUN6QixpQ0FBcUI7Ozs7O0FBR3ZCLDZCQThCQzs7O0lBN0JDLHFDQUE2Qjs7SUFDN0IsZ0NBQXVCOztJQUN2Qiw4QkFBMkI7O0lBQzNCLDhCQUFxQjs7SUFDckIsNkJBQXdCOztJQUN4QixrQ0FBbUM7O0lBQ25DLHVCQUFjOztJQUNkLDhCQUFxQjs7SUFDckIsK0JBQTZCOztJQUM3Qix5QkFBZ0I7O0lBQ2hCLCtCQUFzQjs7SUFDdEIsbUNBQTJCOztJQUMzQix1QkFBYzs7SUFDZCwyQkFBa0I7O0lBQ2xCLGtDQUF5Qjs7SUFDekIsc0NBQWtDOztJQUNsQyx3QkFBYzs7SUFDZCw2QkFBd0I7O0lBQ3hCLG9DQUFzQzs7SUFDdEMsOEJBQXNCOztJQUN0QiwwQkFBbUI7O0lBQ25CLHdCQUFjOztJQUNkLDBCQUFpQjs7SUFDakIsc0JBQWE7O0lBQ2IsZ0NBQXVDOztJQUN2QyxpQ0FBaUM7O0lBQ2pDLDhCQUFxQjs7SUFDckIsK0JBQXVCOztJQUN2QixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZSwgSW1hZ2VzIH0gZnJvbSAnLi9pbWFnZS5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9taXNjLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uUXVhbGlmaWVyIHtcbiAgaW1hZ2U/OiBJbWFnZTtcbiAgbmFtZT86IHN0cmluZztcbiAgcXVhbGlmaWVyPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25SZXN0cmljdGlvbiB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICByZXN0cmljdGlvblR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVVuaXQge1xuICBuYW1lPzogc3RyaW5nO1xuICBzeW1ib2w/OiBzdHJpbmc7XG4gIHVuaXRUeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVWYWx1ZSB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmUge1xuICBjb2RlPzogc3RyaW5nO1xuICBjb21wYXJhYmxlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGZlYXR1cmVVbml0PzogRmVhdHVyZVVuaXQ7XG4gIGZlYXR1cmVWYWx1ZXM/OiBGZWF0dXJlVmFsdWVbXTtcbiAgbmFtZT86IHN0cmluZztcbiAgcmFuZ2U/OiBib29sZWFuO1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRDYXRlZ29yeSB7XG4gIGhhc0ltYWdlPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgcHJpb3JpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudFZhbHVlQ2F0ZWdvcnkge1xuICBuYW1lPzogc3RyaW5nO1xuICBzZXF1ZW5jZT86IG51bWJlcjtcbiAgc3VwZXJDYXRlZ29yaWVzPzogVmFyaWFudENhdGVnb3J5W107XG59XG5cbmV4cG9ydCBlbnVtIFByaWNlVHlwZSB7XG4gIEJVWSA9ICdCVVknLFxuICBGUk9NID0gJ0ZST00nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaWNlIHtcbiAgY3VycmVuY3lJc28/OiBzdHJpbmc7XG4gIGZvcm1hdHRlZFZhbHVlPzogc3RyaW5nO1xuICBtYXhRdWFudGl0eT86IG51bWJlcjtcbiAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG4gIHByaWNlVHlwZT86IFByaWNlVHlwZTtcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvY2sge1xuICBzdG9ja0xldmVsPzogbnVtYmVyO1xuICBzdG9ja0xldmVsU3RhdHVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRPcHRpb24ge1xuICBjb2RlPzogc3RyaW5nO1xuICBwcmljZURhdGE/OiBQcmljZTtcbiAgc3RvY2s/OiBTdG9jaztcbiAgdXJsPzogc3RyaW5nO1xuICB2YXJpYW50T3B0aW9uUXVhbGlmaWVycz86IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb24ge1xuICBjb2RlPzogc3RyaW5nO1xuICBjb3VsZEZpcmVNZXNzYWdlcz86IHN0cmluZ1tdO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIGVuZERhdGU/OiBEYXRlO1xuICBmaXJlZE1lc3NhZ2VzPzogc3RyaW5nW107XG4gIHByaW9yaXR5PzogbnVtYmVyO1xuICBwcm9kdWN0QmFubmVyPzogSW1hZ2U7XG4gIHByb21vdGlvbkdyb3VwPzogc3RyaW5nO1xuICBwcm9tb3Rpb25UeXBlPzogc3RyaW5nO1xuICByZXN0cmljdGlvbnM/OiBQcm9tb3Rpb25SZXN0cmljdGlvbltdO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeSB7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogSW1hZ2U7XG4gIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGFzc2lmaWNhdGlvbiB7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIGZlYXR1cmVzPzogRmVhdHVyZVtdO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZ1dHVyZVN0b2NrIHtcbiAgZGF0ZT86IERhdGU7XG4gIGZvcm1hdHRlZERhdGU/OiBzdHJpbmc7XG4gIHN0b2NrPzogU3RvY2s7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2VSYW5nZSB7XG4gIG1heFByaWNlPzogUHJpY2U7XG4gIG1pblByaWNlPzogUHJpY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZSB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmVzZWxlY3RlZD86IGJvb2xlYW47XG4gIHF1YW50aXR5PzogbnVtYmVyO1xuICByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBQcm9kdWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldmlldyB7XG4gIGFsaWFzPzogc3RyaW5nO1xuICBjb21tZW50Pzogc3RyaW5nO1xuICBkYXRlPzogRGF0ZTtcbiAgaGVhZGxpbmU/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBwcmluY2lwYWw/OiBVc2VyO1xuICByYXRpbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudE1hdHJpeEVsZW1lbnQge1xuICBlbGVtZW50cz86IFZhcmlhbnRNYXRyaXhFbGVtZW50W107XG4gIGlzTGVhZj86IGJvb2xlYW47XG4gIHBhcmVudFZhcmlhbnRDYXRlZ29yeT86IFZhcmlhbnRDYXRlZ29yeTtcbiAgdmFyaWFudE9wdGlvbj86IFZhcmlhbnRPcHRpb247XG4gIHZhcmlhbnRWYWx1ZUNhdGVnb3J5PzogVmFyaWFudFZhbHVlQ2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZXMge1xuICBbcmVmZXJlbmNlVHlwZTogc3RyaW5nXTogUHJvZHVjdFJlZmVyZW5jZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VPcHRpb24ge1xuICBvcHRpb25zPzogVmFyaWFudE9wdGlvbltdO1xuICBzZWxlY3RlZD86IFZhcmlhbnRPcHRpb247XG4gIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBhdmFpbGFibGVGb3JQaWNrdXA/OiBib29sZWFuO1xuICBhdmVyYWdlUmF0aW5nPzogbnVtYmVyO1xuICBiYXNlT3B0aW9ucz86IEJhc2VPcHRpb25bXTtcbiAgYmFzZVByb2R1Y3Q/OiBzdHJpbmc7XG4gIGNhdGVnb3JpZXM/OiBDYXRlZ29yeVtdO1xuICBjbGFzc2lmaWNhdGlvbnM/OiBDbGFzc2lmaWNhdGlvbltdO1xuICBjb2RlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZnV0dXJlU3RvY2tzPzogRnV0dXJlU3RvY2tbXTtcbiAgaW1hZ2VzPzogSW1hZ2VzO1xuICBtYW51ZmFjdHVyZXI/OiBzdHJpbmc7XG4gIG11bHRpZGltZW5zaW9uYWw/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xuICBuYW1lSHRtbD86IHN0cmluZztcbiAgbnVtYmVyT2ZSZXZpZXdzPzogbnVtYmVyO1xuICBwb3RlbnRpYWxQcm9tb3Rpb25zPzogUHJvbW90aW9uW107XG4gIHByaWNlPzogUHJpY2U7XG4gIHByaWNlUmFuZ2U/OiBQcmljZVJhbmdlO1xuICBwcm9kdWN0UmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VzO1xuICBwdXJjaGFzYWJsZT86IGJvb2xlYW47XG4gIHJldmlld3M/OiBSZXZpZXdbXTtcbiAgc3RvY2s/OiBTdG9jaztcbiAgc3VtbWFyeT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICB2YXJpYW50TWF0cml4PzogVmFyaWFudE1hdHJpeEVsZW1lbnRbXTtcbiAgdmFyaWFudE9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xuICB2b2x1bWVQcmljZXM/OiBQcmljZVtdO1xuICB2b2x1bWVQcmljZXNGbGFnPzogYm9vbGVhbjtcbn1cbiJdfQ==