/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export function PointOfService() { }
if (false) {
    /** @type {?|undefined} */
    PointOfService.prototype.address;
    /** @type {?|undefined} */
    PointOfService.prototype.description;
    /** @type {?|undefined} */
    PointOfService.prototype.displayName;
    /** @type {?|undefined} */
    PointOfService.prototype.distanceKm;
    /** @type {?|undefined} */
    PointOfService.prototype.features;
    /** @type {?|undefined} */
    PointOfService.prototype.formattedDistance;
    /** @type {?|undefined} */
    PointOfService.prototype.geoPoint;
    /** @type {?|undefined} */
    PointOfService.prototype.mapIcon;
    /** @type {?|undefined} */
    PointOfService.prototype.name;
    /** @type {?|undefined} */
    PointOfService.prototype.openingHours;
    /** @type {?|undefined} */
    PointOfService.prototype.storeContent;
    /** @type {?|undefined} */
    PointOfService.prototype.storeImages;
    /** @type {?|undefined} */
    PointOfService.prototype.url;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvbW9kZWwvb3JkZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWlCQSxrQ0FLQzs7O0lBSkMsNEJBQWM7O0lBQ2Qsb0NBQXFCOztJQUNyQixtQ0FBcUI7O0lBQ3JCLDRCQUFjOzs7OztBQUdoQixvQ0FjQzs7O0lBYkMsaUNBQWtCOztJQUNsQixxQ0FBcUI7O0lBQ3JCLHFDQUFxQjs7SUFDckIsb0NBQW9COztJQUNwQixrQ0FBOEM7O0lBQzlDLDJDQUEyQjs7SUFDM0Isa0NBQW9COztJQUNwQixpQ0FBZ0I7O0lBQ2hCLDhCQUFjOztJQUNkLHNDQUErQjs7SUFDL0Isc0NBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLDZCQUFhOzs7OztBQUdmLGdDQVNDOzs7SUFSQywrQkFBa0I7O0lBQ2xCLGtDQUE0Qjs7SUFDNUIsNENBQXdDOztJQUN4QyxpQ0FBcUI7O0lBQ3JCLDZCQUFrQjs7SUFDbEIsOEJBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGdDQUFxQjs7Ozs7QUFHdkIsMkNBTUM7OztJQUxDLHVEQUF3Qzs7SUFDeEMseUNBQWtCOztJQUNsQix3Q0FBdUI7O0lBQ3ZCLHlDQUFrQjs7SUFDbEIsa0RBQTBCOzs7OztBQUc1QixpREFLQzs7O0lBSkMsd0RBQTJCOztJQUMzQiwyQ0FBYzs7SUFDZCx1REFBMEI7O0lBQzFCLCtDQUFrQjs7Ozs7QUFHcEIsc0NBSUM7OztJQUhDLHNDQUF3Qjs7SUFDeEIsb0NBQWtCOztJQUNsQiwyQ0FBeUI7Ozs7O0FBRzNCLGlDQVFDOzs7SUFQQywyQkFBYzs7SUFDZCw2Q0FBd0M7O0lBQ3hDLDhCQUE2Qjs7SUFDN0Isc0NBQTBCOztJQUMxQiw2QkFBZ0I7O0lBQ2hCLGlDQUFrQjs7SUFDbEIsaUNBQW9COzs7OztBQUd0QixrQ0FPQzs7O0lBTkMsNEJBQWM7O0lBQ2QsNEJBQWM7O0lBQ2QsOEJBQWM7O0lBQ2QsOEJBQWdCOztJQUNoQixxQ0FBdUI7O0lBQ3ZCLDZCQUFjOzs7OztBQUdoQixzQ0FJQzs7O0lBSEMsa0NBQXdCOztJQUN4QixzQ0FBNkI7O0lBQzdCLGlDQUFvQjs7Ozs7QUFHdEIsMkJBb0NDOzs7SUFuQ0MsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLGdDQUE0Qjs7SUFDNUIsMkJBQXFCOztJQUNyQixxQkFBYzs7SUFDZCw2QkFBNkI7O0lBQzdCLHdCQUFlOztJQUNmLGdDQUEwQjs7SUFDMUIsNkJBQXFCOztJQUNyQixzQ0FBK0I7O0lBQy9CLDZCQUE0Qjs7SUFDNUIsb0NBQWdEOztJQUNoRCwrQkFBd0I7O0lBQ3hCLHNDQUErQjs7SUFDL0Isd0JBQXVCOztJQUN2Qiw4QkFBd0I7O0lBQ3hCLHFCQUFjOztJQUNkLG9CQUFjOztJQUNkLCtCQUF1Qjs7SUFDdkIsNEJBQTZCOztJQUM3QixvQ0FBNkI7O0lBQzdCLGtDQUE0Qzs7SUFDNUMsaUNBQXlCOztJQUN6QixxQkFBYzs7SUFDZCx1QkFBZ0I7O0lBQ2hCLDhCQUF1Qjs7SUFDdkIsc0JBQWU7O0lBQ2YseUJBQWlCOztJQUNqQiwrQkFBdUI7O0lBQ3ZCLDJCQUFvQjs7SUFDcEIsMkJBQW1COztJQUNuQixrQ0FBMEI7O0lBQzFCLHlCQUFpQjs7SUFDakIsbUNBQWtDOztJQUNsQyxxQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmljZSwgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQge1xuICBHZW9Qb2ludCxcbiAgT3BlbmluZ1NjaGVkdWxlLFxuICBQYWdpbmF0aW9uTW9kZWwsXG4gIFNvcnRNb2RlbCxcbn0gZnJvbSAnLi9taXNjLm1vZGVsJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi9pbWFnZS5tb2RlbCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7XG4gIERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwLFxuICBQYXltZW50RGV0YWlscyxcbiAgUHJpbmNpcGFsLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFZvdWNoZXIsXG59IGZyb20gJy4vY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlIHtcbiAgY29kZT86IHN0cmluZztcbiAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZTZXJ2aWNlIHtcbiAgYWRkcmVzcz86IEFkZHJlc3M7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgZGlzdGFuY2VLbT86IG51bWJlcjtcbiAgZmVhdHVyZXM/OiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9O1xuICBmb3JtYXR0ZWREaXN0YW5jZT86IHN0cmluZztcbiAgZ2VvUG9pbnQ/OiBHZW9Qb2ludDtcbiAgbWFwSWNvbj86IEltYWdlO1xuICBuYW1lPzogc3RyaW5nO1xuICBvcGVuaW5nSG91cnM/OiBPcGVuaW5nU2NoZWR1bGU7XG4gIHN0b3JlQ29udGVudD86IHN0cmluZztcbiAgc3RvcmVJbWFnZXM/OiBJbWFnZVtdO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJFbnRyeSB7XG4gIGJhc2VQcmljZT86IFByaWNlO1xuICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgZW50cnlOdW1iZXI/OiBudW1iZXI7XG4gIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgdG90YWxQcmljZT86IFByaWNlO1xuICB1cGRhdGVhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaWNrdXBPcmRlckVudHJ5R3JvdXAge1xuICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gIGRpc3RhbmNlPzogbnVtYmVyO1xuICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWQge1xuICBhZGp1c3RlZFVuaXRQcmljZT86IG51bWJlcjtcbiAgY29kZT86IHN0cmluZztcbiAgb3JkZXJFbnRyeU51bWJlcj86IG51bWJlcjtcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc2lnbm1lbnRFbnRyeSB7XG4gIG9yZGVyRW50cnk/OiBPcmRlckVudHJ5O1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgc2hpcHBlZFF1YW50aXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50IHtcbiAgY29kZT86IHN0cmluZztcbiAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICBlbnRyaWVzPzogQ29uc2lnbm1lbnRFbnRyeVtdO1xuICBzaGlwcGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICBzdGF0dXM/OiBzdHJpbmc7XG4gIHN0YXR1c0RhdGU/OiBEYXRlO1xuICB0cmFja2luZ0lEPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVySGlzdG9yeSB7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIGd1aWQ/OiBzdHJpbmc7XG4gIHBsYWNlZD86IERhdGU7XG4gIHN0YXR1cz86IHN0cmluZztcbiAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgdG90YWw/OiBQcmljZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckhpc3RvcnlMaXN0IHtcbiAgb3JkZXJzPzogT3JkZXJIaXN0b3J5W107XG4gIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gIHNvcnRzPzogU29ydE1vZGVsW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXIge1xuICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICBhcHBsaWVkVm91Y2hlcnM/OiBWb3VjaGVyW107XG4gIGNhbGN1bGF0ZWQ/OiBib29sZWFuO1xuICBjb2RlPzogc3RyaW5nO1xuICBjb25zaWdubWVudHM/OiBDb25zaWdubWVudFtdO1xuICBjcmVhdGVkPzogRGF0ZTtcbiAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gIGRlbGl2ZXJ5SXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgZGVsaXZlcnlNb2RlPzogRGVsaXZlcnlNb2RlO1xuICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgZGVsaXZlcnlTdGF0dXM/OiBzdHJpbmc7XG4gIGRlbGl2ZXJ5U3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgZ3Vlc3RDdXN0b21lcj86IGJvb2xlYW47XG4gIGd1aWQ/OiBzdHJpbmc7XG4gIG5ldD86IGJvb2xlYW47XG4gIG9yZGVyRGlzY291bnRzPzogUHJpY2U7XG4gIHBheW1lbnRJbmZvPzogUGF5bWVudERldGFpbHM7XG4gIHBpY2t1cEl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gIHByb2R1Y3REaXNjb3VudHM/OiBQcmljZTtcbiAgc2l0ZT86IHN0cmluZztcbiAgc3RhdHVzPzogc3RyaW5nO1xuICBzdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICBzdG9yZT86IHN0cmluZztcbiAgc3ViVG90YWw/OiBQcmljZTtcbiAgdG90YWxEaXNjb3VudHM/OiBQcmljZTtcbiAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgdG90YWxQcmljZT86IFByaWNlO1xuICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICB0b3RhbFRheD86IFByaWNlO1xuICB1bmNvbnNpZ25lZEVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gIHVzZXI/OiBQcmluY2lwYWw7XG59XG4iXX0=