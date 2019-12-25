/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function PromotionResult() { }
if (false) {
    /** @type {?|undefined} */
    PromotionResult.prototype.consumedEntries;
    /** @type {?|undefined} */
    PromotionResult.prototype.description;
    /** @type {?|undefined} */
    PromotionResult.prototype.promotion;
}
/** @enum {string} */
var PromotionLocation = {
    ActiveCart: 'CART',
    Checkout: 'CHECKOUT',
    Order: 'ORDER',
};
export { PromotionLocation };
/**
 * @record
 */
export function Voucher() { }
if (false) {
    /** @type {?|undefined} */
    Voucher.prototype.appliedValue;
    /** @type {?|undefined} */
    Voucher.prototype.code;
    /** @type {?|undefined} */
    Voucher.prototype.currency;
    /** @type {?|undefined} */
    Voucher.prototype.description;
    /** @type {?|undefined} */
    Voucher.prototype.freeShipping;
    /** @type {?|undefined} */
    Voucher.prototype.name;
    /** @type {?|undefined} */
    Voucher.prototype.value;
    /** @type {?|undefined} */
    Voucher.prototype.valueFormatted;
    /** @type {?|undefined} */
    Voucher.prototype.valueString;
    /** @type {?|undefined} */
    Voucher.prototype.voucherCode;
}
/**
 * @record
 */
export function DeliveryOrderEntryGroup() { }
if (false) {
    /** @type {?|undefined} */
    DeliveryOrderEntryGroup.prototype.deliveryAddress;
    /** @type {?|undefined} */
    DeliveryOrderEntryGroup.prototype.entries;
    /** @type {?|undefined} */
    DeliveryOrderEntryGroup.prototype.quantity;
    /** @type {?|undefined} */
    DeliveryOrderEntryGroup.prototype.totalPriceWithTax;
}
/**
 * @record
 */
export function Principal() { }
if (false) {
    /** @type {?|undefined} */
    Principal.prototype.name;
    /** @type {?|undefined} */
    Principal.prototype.uid;
}
/**
 * @record
 */
export function CardType() { }
if (false) {
    /** @type {?|undefined} */
    CardType.prototype.code;
    /** @type {?|undefined} */
    CardType.prototype.name;
}
/**
 * @record
 */
export function PaymentDetails() { }
if (false) {
    /** @type {?|undefined} */
    PaymentDetails.prototype.accountHolderName;
    /** @type {?|undefined} */
    PaymentDetails.prototype.billingAddress;
    /** @type {?|undefined} */
    PaymentDetails.prototype.cardNumber;
    /** @type {?|undefined} */
    PaymentDetails.prototype.cardType;
    /** @type {?|undefined} */
    PaymentDetails.prototype.cvn;
    /** @type {?|undefined} */
    PaymentDetails.prototype.defaultPayment;
    /** @type {?|undefined} */
    PaymentDetails.prototype.expiryMonth;
    /** @type {?|undefined} */
    PaymentDetails.prototype.expiryYear;
    /** @type {?|undefined} */
    PaymentDetails.prototype.id;
    /** @type {?|undefined} */
    PaymentDetails.prototype.issueNumber;
    /** @type {?|undefined} */
    PaymentDetails.prototype.saved;
    /** @type {?|undefined} */
    PaymentDetails.prototype.startMonth;
    /** @type {?|undefined} */
    PaymentDetails.prototype.startYear;
    /** @type {?|undefined} */
    PaymentDetails.prototype.subscriptionId;
}
/**
 * @record
 */
export function SaveCartResult() { }
if (false) {
    /** @type {?|undefined} */
    SaveCartResult.prototype.savedCartData;
}
/**
 * @record
 */
export function Cart() { }
if (false) {
    /** @type {?|undefined} */
    Cart.prototype.appliedOrderPromotions;
    /** @type {?|undefined} */
    Cart.prototype.appliedProductPromotions;
    /** @type {?|undefined} */
    Cart.prototype.appliedVouchers;
    /** @type {?|undefined} */
    Cart.prototype.calculated;
    /** @type {?|undefined} */
    Cart.prototype.code;
    /** @type {?|undefined} */
    Cart.prototype.deliveryAddress;
    /** @type {?|undefined} */
    Cart.prototype.deliveryCost;
    /** @type {?|undefined} */
    Cart.prototype.deliveryItemsQuantity;
    /** @type {?|undefined} */
    Cart.prototype.deliveryMode;
    /** @type {?|undefined} */
    Cart.prototype.deliveryOrderGroups;
    /** @type {?|undefined} */
    Cart.prototype.description;
    /** @type {?|undefined} */
    Cart.prototype.entries;
    /** @type {?|undefined} */
    Cart.prototype.expirationTime;
    /** @type {?|undefined} */
    Cart.prototype.guid;
    /** @type {?|undefined} */
    Cart.prototype.name;
    /** @type {?|undefined} */
    Cart.prototype.net;
    /** @type {?|undefined} */
    Cart.prototype.orderDiscounts;
    /** @type {?|undefined} */
    Cart.prototype.paymentInfo;
    /** @type {?|undefined} */
    Cart.prototype.pickupItemsQuantity;
    /** @type {?|undefined} */
    Cart.prototype.pickupOrderGroups;
    /** @type {?|undefined} */
    Cart.prototype.potentialOrderPromotions;
    /** @type {?|undefined} */
    Cart.prototype.potentialProductPromotions;
    /** @type {?|undefined} */
    Cart.prototype.productDiscounts;
    /** @type {?|undefined} */
    Cart.prototype.saveTime;
    /** @type {?|undefined} */
    Cart.prototype.savedBy;
    /** @type {?|undefined} */
    Cart.prototype.site;
    /** @type {?|undefined} */
    Cart.prototype.store;
    /** @type {?|undefined} */
    Cart.prototype.subTotal;
    /** @type {?|undefined} */
    Cart.prototype.totalDiscounts;
    /** @type {?|undefined} */
    Cart.prototype.totalItems;
    /** @type {?|undefined} */
    Cart.prototype.totalPrice;
    /** @type {?|undefined} */
    Cart.prototype.totalPriceWithTax;
    /** @type {?|undefined} */
    Cart.prototype.totalTax;
    /** @type {?|undefined} */
    Cart.prototype.totalUnitCount;
    /** @type {?|undefined} */
    Cart.prototype.user;
}
/**
 * @record
 */
export function CartModification() { }
if (false) {
    /** @type {?|undefined} */
    CartModification.prototype.deliveryModeChanged;
    /** @type {?|undefined} */
    CartModification.prototype.entry;
    /** @type {?|undefined} */
    CartModification.prototype.quantity;
    /** @type {?|undefined} */
    CartModification.prototype.quantityAdded;
    /** @type {?|undefined} */
    CartModification.prototype.statusCode;
    /** @type {?|undefined} */
    CartModification.prototype.statusMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9jYXJ0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVQSxxQ0FJQzs7O0lBSEMsMENBQWdEOztJQUNoRCxzQ0FBcUI7O0lBQ3JCLG9DQUFzQjs7OztJQUl0QixZQUFhLE1BQU07SUFDbkIsVUFBVyxVQUFVO0lBQ3JCLE9BQVEsT0FBTzs7Ozs7O0FBR2pCLDZCQVdDOzs7SUFWQywrQkFBcUI7O0lBQ3JCLHVCQUFjOztJQUNkLDJCQUFvQjs7SUFDcEIsOEJBQXFCOztJQUNyQiwrQkFBdUI7O0lBQ3ZCLHVCQUFjOztJQUNkLHdCQUFlOztJQUNmLGlDQUF3Qjs7SUFDeEIsOEJBQXFCOztJQUNyQiw4QkFBcUI7Ozs7O0FBR3ZCLDZDQUtDOzs7SUFKQyxrREFBMEI7O0lBQzFCLDBDQUF1Qjs7SUFDdkIsMkNBQWtCOztJQUNsQixvREFBMEI7Ozs7O0FBRzVCLCtCQUdDOzs7SUFGQyx5QkFBYzs7SUFDZCx3QkFBYTs7Ozs7QUFHZiw4QkFHQzs7O0lBRkMsd0JBQWM7O0lBQ2Qsd0JBQWM7Ozs7O0FBR2hCLG9DQWVDOzs7SUFkQywyQ0FBMkI7O0lBQzNCLHdDQUF5Qjs7SUFDekIsb0NBQW9COztJQUNwQixrQ0FBb0I7O0lBQ3BCLDZCQUFhOztJQUNiLHdDQUF5Qjs7SUFDekIscUNBQXFCOztJQUNyQixvQ0FBb0I7O0lBQ3BCLDRCQUFZOztJQUNaLHFDQUFxQjs7SUFDckIsK0JBQWdCOztJQUNoQixvQ0FBb0I7O0lBQ3BCLG1DQUFtQjs7SUFDbkIsd0NBQXdCOzs7OztBQUcxQixvQ0FFQzs7O0lBREMsdUNBQXFCOzs7OztBQUd2QiwwQkFvQ0M7OztJQW5DQyxzQ0FBMkM7O0lBQzNDLHdDQUE2Qzs7SUFDN0MsK0JBQTRCOztJQUM1QiwwQkFBcUI7O0lBQ3JCLG9CQUFjOztJQUNkLCtCQUEwQjs7SUFDMUIsNEJBQXFCOztJQUNyQixxQ0FBK0I7O0lBQy9CLDRCQUE0Qjs7SUFDNUIsbUNBQWdEOztJQUNoRCwyQkFBcUI7O0lBQ3JCLHVCQUF1Qjs7SUFDdkIsOEJBQXNCOztJQUN0QixvQkFBYzs7SUFDZCxvQkFBYzs7SUFDZCxtQkFBYzs7SUFDZCw4QkFBdUI7O0lBQ3ZCLDJCQUE2Qjs7SUFDN0IsbUNBQTZCOztJQUM3QixpQ0FBNEM7O0lBQzVDLHdDQUE2Qzs7SUFDN0MsMENBQStDOztJQUMvQyxnQ0FBeUI7O0lBQ3pCLHdCQUFnQjs7SUFDaEIsdUJBQW9COztJQUNwQixvQkFBYzs7SUFDZCxxQkFBZTs7SUFDZix3QkFBaUI7O0lBQ2pCLDhCQUF1Qjs7SUFDdkIsMEJBQW9COztJQUNwQiwwQkFBbUI7O0lBQ25CLGlDQUEwQjs7SUFDMUIsd0JBQWlCOztJQUNqQiw4QkFBd0I7O0lBQ3hCLG9CQUFpQjs7Ozs7QUFHbkIsc0NBT0M7OztJQU5DLCtDQUE4Qjs7SUFDOUIsaUNBQW1COztJQUNuQixvQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsc0NBQW9COztJQUNwQix5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIERlbGl2ZXJ5TW9kZSxcbiAgT3JkZXJFbnRyeSxcbiAgUGlja3VwT3JkZXJFbnRyeUdyb3VwLFxuICBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWQsXG59IGZyb20gJy4vb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUHJpY2UsIFByb21vdGlvbiB9IGZyb20gJy4vcHJvZHVjdC5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdWx0IHtcbiAgY29uc3VtZWRFbnRyaWVzPzogUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkW107XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcm9tb3Rpb24/OiBQcm9tb3Rpb247XG59XG5cbmV4cG9ydCBlbnVtIFByb21vdGlvbkxvY2F0aW9uIHtcbiAgQWN0aXZlQ2FydCA9ICdDQVJUJyxcbiAgQ2hlY2tvdXQgPSAnQ0hFQ0tPVVQnLFxuICBPcmRlciA9ICdPUkRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlciB7XG4gIGFwcGxpZWRWYWx1ZT86IFByaWNlO1xuICBjb2RlPzogc3RyaW5nO1xuICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZnJlZVNoaXBwaW5nPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG4gIHZhbHVlRm9ybWF0dGVkPzogc3RyaW5nO1xuICB2YWx1ZVN0cmluZz86IHN0cmluZztcbiAgdm91Y2hlckNvZGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlPcmRlckVudHJ5R3JvdXAge1xuICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmluY2lwYWwge1xuICBuYW1lPzogc3RyaW5nO1xuICB1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFR5cGUge1xuICBjb2RlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnREZXRhaWxzIHtcbiAgYWNjb3VudEhvbGRlck5hbWU/OiBzdHJpbmc7XG4gIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgY2FyZE51bWJlcj86IHN0cmluZztcbiAgY2FyZFR5cGU/OiBDYXJkVHlwZTtcbiAgY3ZuPzogc3RyaW5nO1xuICBkZWZhdWx0UGF5bWVudD86IGJvb2xlYW47XG4gIGV4cGlyeU1vbnRoPzogc3RyaW5nO1xuICBleHBpcnlZZWFyPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgaXNzdWVOdW1iZXI/OiBzdHJpbmc7XG4gIHNhdmVkPzogYm9vbGVhbjtcbiAgc3RhcnRNb250aD86IHN0cmluZztcbiAgc3RhcnRZZWFyPzogc3RyaW5nO1xuICBzdWJzY3JpcHRpb25JZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYXZlQ2FydFJlc3VsdCB7XG4gIHNhdmVkQ2FydERhdGE/OiBDYXJ0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcnQge1xuICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICBhcHBsaWVkVm91Y2hlcnM/OiBWb3VjaGVyW107XG4gIGNhbGN1bGF0ZWQ/OiBib29sZWFuO1xuICBjb2RlPzogc3RyaW5nO1xuICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgZGVsaXZlcnlJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gIGRlbGl2ZXJ5T3JkZXJHcm91cHM/OiBEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgZXhwaXJhdGlvblRpbWU/OiBEYXRlO1xuICBndWlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBuZXQ/OiBib29sZWFuO1xuICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICBwaWNrdXBPcmRlckdyb3Vwcz86IFBpY2t1cE9yZGVyRW50cnlHcm91cFtdO1xuICBwb3RlbnRpYWxPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgcHJvZHVjdERpc2NvdW50cz86IFByaWNlO1xuICBzYXZlVGltZT86IERhdGU7XG4gIHNhdmVkQnk/OiBQcmluY2lwYWw7XG4gIHNpdGU/OiBzdHJpbmc7XG4gIHN0b3JlPzogc3RyaW5nO1xuICBzdWJUb3RhbD86IFByaWNlO1xuICB0b3RhbERpc2NvdW50cz86IFByaWNlO1xuICB0b3RhbEl0ZW1zPzogbnVtYmVyO1xuICB0b3RhbFByaWNlPzogUHJpY2U7XG4gIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gIHRvdGFsVGF4PzogUHJpY2U7XG4gIHRvdGFsVW5pdENvdW50PzogbnVtYmVyO1xuICB1c2VyPzogUHJpbmNpcGFsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRNb2RpZmljYXRpb24ge1xuICBkZWxpdmVyeU1vZGVDaGFuZ2VkPzogYm9vbGVhbjtcbiAgZW50cnk/OiBPcmRlckVudHJ5O1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgcXVhbnRpdHlBZGRlZD86IG51bWJlcjtcbiAgc3RhdHVzQ29kZT86IHN0cmluZztcbiAgc3RhdHVzTWVzc2FnZT86IHN0cmluZztcbn1cbiJdfQ==