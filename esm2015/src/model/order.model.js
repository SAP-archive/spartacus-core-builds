/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function DeliveryMode() { }
if (false) {
    /** @type {?|undefined} */
    DeliveryMode.prototype.code;
    /** @type {?|undefined} */
    DeliveryMode.prototype.deliveryCost;
    /** @type {?|undefined} */
    DeliveryMode.prototype.description;
    /** @type {?|undefined} */
    DeliveryMode.prototype.name;
}
/**
 * @record
 */
export function OrderEntry() { }
if (false) {
    /** @type {?|undefined} */
    OrderEntry.prototype.basePrice;
    /** @type {?|undefined} */
    OrderEntry.prototype.deliveryMode;
    /** @type {?|undefined} */
    OrderEntry.prototype.deliveryPointOfService;
    /** @type {?|undefined} */
    OrderEntry.prototype.entryNumber;
    /** @type {?|undefined} */
    OrderEntry.prototype.product;
    /** @type {?|undefined} */
    OrderEntry.prototype.quantity;
    /** @type {?|undefined} */
    OrderEntry.prototype.totalPrice;
    /** @type {?|undefined} */
    OrderEntry.prototype.updateable;
}
/**
 * @record
 */
export function PickupOrderEntryGroup() { }
if (false) {
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.deliveryPointOfService;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.distance;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.entries;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.quantity;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.totalPriceWithTax;
}
/**
 * @record
 */
export function PromotionOrderEntryConsumed() { }
if (false) {
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.adjustedUnitPrice;
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.code;
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.orderEntryNumber;
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.quantity;
}
/**
 * @record
 */
export function ConsignmentEntry() { }
if (false) {
    /** @type {?|undefined} */
    ConsignmentEntry.prototype.orderEntry;
    /** @type {?|undefined} */
    ConsignmentEntry.prototype.quantity;
    /** @type {?|undefined} */
    ConsignmentEntry.prototype.shippedQuantity;
}
/**
 * @record
 */
export function Consignment() { }
if (false) {
    /** @type {?|undefined} */
    Consignment.prototype.code;
    /** @type {?|undefined} */
    Consignment.prototype.deliveryPointOfService;
    /** @type {?|undefined} */
    Consignment.prototype.entries;
    /** @type {?|undefined} */
    Consignment.prototype.shippingAddress;
    /** @type {?|undefined} */
    Consignment.prototype.status;
    /** @type {?|undefined} */
    Consignment.prototype.statusDate;
    /** @type {?|undefined} */
    Consignment.prototype.trackingID;
}
/**
 * @record
 */
export function OrderHistory() { }
if (false) {
    /** @type {?|undefined} */
    OrderHistory.prototype.code;
    /** @type {?|undefined} */
    OrderHistory.prototype.guid;
    /** @type {?|undefined} */
    OrderHistory.prototype.placed;
    /** @type {?|undefined} */
    OrderHistory.prototype.status;
    /** @type {?|undefined} */
    OrderHistory.prototype.statusDisplay;
    /** @type {?|undefined} */
    OrderHistory.prototype.total;
}
/**
 * @record
 */
export function OrderHistoryList() { }
if (false) {
    /** @type {?|undefined} */
    OrderHistoryList.prototype.orders;
    /** @type {?|undefined} */
    OrderHistoryList.prototype.pagination;
    /** @type {?|undefined} */
    OrderHistoryList.prototype.sorts;
}
/**
 * @record
 */
export function Order() { }
if (false) {
    /** @type {?|undefined} */
    Order.prototype.appliedOrderPromotions;
    /** @type {?|undefined} */
    Order.prototype.appliedProductPromotions;
    /** @type {?|undefined} */
    Order.prototype.appliedVouchers;
    /** @type {?|undefined} */
    Order.prototype.calculated;
    /** @type {?|undefined} */
    Order.prototype.code;
    /** @type {?|undefined} */
    Order.prototype.consignments;
    /** @type {?|undefined} */
    Order.prototype.created;
    /** @type {?|undefined} */
    Order.prototype.deliveryAddress;
    /** @type {?|undefined} */
    Order.prototype.deliveryCost;
    /** @type {?|undefined} */
    Order.prototype.deliveryItemsQuantity;
    /** @type {?|undefined} */
    Order.prototype.deliveryMode;
    /** @type {?|undefined} */
    Order.prototype.deliveryOrderGroups;
    /** @type {?|undefined} */
    Order.prototype.deliveryStatus;
    /** @type {?|undefined} */
    Order.prototype.deliveryStatusDisplay;
    /** @type {?|undefined} */
    Order.prototype.entries;
    /** @type {?|undefined} */
    Order.prototype.guestCustomer;
    /** @type {?|undefined} */
    Order.prototype.guid;
    /** @type {?|undefined} */
    Order.prototype.net;
    /** @type {?|undefined} */
    Order.prototype.orderDiscounts;
    /** @type {?|undefined} */
    Order.prototype.paymentInfo;
    /** @type {?|undefined} */
    Order.prototype.pickupItemsQuantity;
    /** @type {?|undefined} */
    Order.prototype.pickupOrderGroups;
    /** @type {?|undefined} */
    Order.prototype.productDiscounts;
    /** @type {?|undefined} */
    Order.prototype.site;
    /** @type {?|undefined} */
    Order.prototype.status;
    /** @type {?|undefined} */
    Order.prototype.statusDisplay;
    /** @type {?|undefined} */
    Order.prototype.store;
    /** @type {?|undefined} */
    Order.prototype.subTotal;
    /** @type {?|undefined} */
    Order.prototype.totalDiscounts;
    /** @type {?|undefined} */
    Order.prototype.totalItems;
    /** @type {?|undefined} */
    Order.prototype.totalPrice;
    /** @type {?|undefined} */
    Order.prototype.totalPriceWithTax;
    /** @type {?|undefined} */
    Order.prototype.totalTax;
    /** @type {?|undefined} */
    Order.prototype.unconsignedEntries;
    /** @type {?|undefined} */
    Order.prototype.user;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvbW9kZWwvb3JkZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBLGtDQUtDOzs7SUFKQyw0QkFBYzs7SUFDZCxvQ0FBcUI7O0lBQ3JCLG1DQUFxQjs7SUFDckIsNEJBQWM7Ozs7O0FBR2hCLGdDQVNDOzs7SUFSQywrQkFBa0I7O0lBQ2xCLGtDQUE0Qjs7SUFDNUIsNENBQXdDOztJQUN4QyxpQ0FBcUI7O0lBQ3JCLDZCQUFrQjs7SUFDbEIsOEJBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGdDQUFxQjs7Ozs7QUFHdkIsMkNBTUM7OztJQUxDLHVEQUF3Qzs7SUFDeEMseUNBQWtCOztJQUNsQix3Q0FBdUI7O0lBQ3ZCLHlDQUFrQjs7SUFDbEIsa0RBQTBCOzs7OztBQUc1QixpREFLQzs7O0lBSkMsd0RBQTJCOztJQUMzQiwyQ0FBYzs7SUFDZCx1REFBMEI7O0lBQzFCLCtDQUFrQjs7Ozs7QUFHcEIsc0NBSUM7OztJQUhDLHNDQUF3Qjs7SUFDeEIsb0NBQWtCOztJQUNsQiwyQ0FBeUI7Ozs7O0FBRzNCLGlDQVFDOzs7SUFQQywyQkFBYzs7SUFDZCw2Q0FBd0M7O0lBQ3hDLDhCQUE2Qjs7SUFDN0Isc0NBQTBCOztJQUMxQiw2QkFBZ0I7O0lBQ2hCLGlDQUFrQjs7SUFDbEIsaUNBQW9COzs7OztBQUd0QixrQ0FPQzs7O0lBTkMsNEJBQWM7O0lBQ2QsNEJBQWM7O0lBQ2QsOEJBQWM7O0lBQ2QsOEJBQWdCOztJQUNoQixxQ0FBdUI7O0lBQ3ZCLDZCQUFjOzs7OztBQUdoQixzQ0FJQzs7O0lBSEMsa0NBQXdCOztJQUN4QixzQ0FBNkI7O0lBQzdCLGlDQUFvQjs7Ozs7QUFHdEIsMkJBb0NDOzs7SUFuQ0MsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLGdDQUE0Qjs7SUFDNUIsMkJBQXFCOztJQUNyQixxQkFBYzs7SUFDZCw2QkFBNkI7O0lBQzdCLHdCQUFlOztJQUNmLGdDQUEwQjs7SUFDMUIsNkJBQXFCOztJQUNyQixzQ0FBK0I7O0lBQy9CLDZCQUE0Qjs7SUFDNUIsb0NBQWdEOztJQUNoRCwrQkFBd0I7O0lBQ3hCLHNDQUErQjs7SUFDL0Isd0JBQXVCOztJQUN2Qiw4QkFBd0I7O0lBQ3hCLHFCQUFjOztJQUNkLG9CQUFjOztJQUNkLCtCQUF1Qjs7SUFDdkIsNEJBQTZCOztJQUM3QixvQ0FBNkI7O0lBQzdCLGtDQUE0Qzs7SUFDNUMsaUNBQXlCOztJQUN6QixxQkFBYzs7SUFDZCx1QkFBZ0I7O0lBQ2hCLDhCQUF1Qjs7SUFDdkIsc0JBQWU7O0lBQ2YseUJBQWlCOztJQUNqQiwrQkFBdUI7O0lBQ3ZCLDJCQUFvQjs7SUFDcEIsMkJBQW1COztJQUNuQixrQ0FBMEI7O0lBQzFCLHlCQUFpQjs7SUFDakIsbUNBQWtDOztJQUNsQyxxQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmljZSwgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwsIFNvcnRNb2RlbCB9IGZyb20gJy4vbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7XG4gIERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwLFxuICBQYXltZW50RGV0YWlscyxcbiAgUHJpbmNpcGFsLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFZvdWNoZXIsXG59IGZyb20gJy4vY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4vcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlIHtcbiAgY29kZT86IHN0cmluZztcbiAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyRW50cnkge1xuICBiYXNlUHJpY2U/OiBQcmljZTtcbiAgZGVsaXZlcnlNb2RlPzogRGVsaXZlcnlNb2RlO1xuICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gIGVudHJ5TnVtYmVyPzogbnVtYmVyO1xuICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlja3VwT3JkZXJFbnRyeUdyb3VwIHtcbiAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICBkaXN0YW5jZT86IG51bWJlcjtcbiAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkIHtcbiAgYWRqdXN0ZWRVbml0UHJpY2U/OiBudW1iZXI7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIG9yZGVyRW50cnlOdW1iZXI/OiBudW1iZXI7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50RW50cnkge1xuICBvcmRlckVudHJ5PzogT3JkZXJFbnRyeTtcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIHNoaXBwZWRRdWFudGl0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudCB7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgZW50cmllcz86IENvbnNpZ25tZW50RW50cnlbXTtcbiAgc2hpcHBpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgc3RhdHVzPzogc3RyaW5nO1xuICBzdGF0dXNEYXRlPzogRGF0ZTtcbiAgdHJhY2tpbmdJRD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckhpc3Rvcnkge1xuICBjb2RlPzogc3RyaW5nO1xuICBndWlkPzogc3RyaW5nO1xuICBwbGFjZWQ/OiBEYXRlO1xuICBzdGF0dXM/OiBzdHJpbmc7XG4gIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gIHRvdGFsPzogUHJpY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIaXN0b3J5TGlzdCB7XG4gIG9yZGVycz86IE9yZGVySGlzdG9yeVtdO1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICBzb3J0cz86IFNvcnRNb2RlbFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyIHtcbiAgYXBwbGllZE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgYXBwbGllZFZvdWNoZXJzPzogVm91Y2hlcltdO1xuICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgY29kZT86IHN0cmluZztcbiAgY29uc2lnbm1lbnRzPzogQ29uc2lnbm1lbnRbXTtcbiAgY3JlYXRlZD86IERhdGU7XG4gIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gIGRlbGl2ZXJ5U3RhdHVzPzogc3RyaW5nO1xuICBkZWxpdmVyeVN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gIGd1ZXN0Q3VzdG9tZXI/OiBib29sZWFuO1xuICBndWlkPzogc3RyaW5nO1xuICBuZXQ/OiBib29sZWFuO1xuICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICBwaWNrdXBPcmRlckdyb3Vwcz86IFBpY2t1cE9yZGVyRW50cnlHcm91cFtdO1xuICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gIHNpdGU/OiBzdHJpbmc7XG4gIHN0YXR1cz86IHN0cmluZztcbiAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgc3RvcmU/OiBzdHJpbmc7XG4gIHN1YlRvdGFsPzogUHJpY2U7XG4gIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gIHRvdGFsSXRlbXM/OiBudW1iZXI7XG4gIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgdG90YWxUYXg/OiBQcmljZTtcbiAgdW5jb25zaWduZWRFbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICB1c2VyPzogUHJpbmNpcGFsO1xufVxuIl19