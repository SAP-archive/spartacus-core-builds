/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CategoryHierarchy() { }
if (false) {
    /** @type {?|undefined} */
    CategoryHierarchy.prototype.id;
    /** @type {?|undefined} */
    CategoryHierarchy.prototype.lastModified;
    /** @type {?|undefined} */
    CategoryHierarchy.prototype.name;
    /** @type {?|undefined} */
    CategoryHierarchy.prototype.subcategories;
    /** @type {?|undefined} */
    CategoryHierarchy.prototype.url;
}
/**
 * @record
 */
export function CatalogVersion() { }
if (false) {
    /** @type {?|undefined} */
    CatalogVersion.prototype.categories;
    /** @type {?|undefined} */
    CatalogVersion.prototype.id;
    /** @type {?|undefined} */
    CatalogVersion.prototype.lastModified;
    /** @type {?|undefined} */
    CatalogVersion.prototype.name;
    /** @type {?|undefined} */
    CatalogVersion.prototype.url;
}
/**
 * @record
 */
export function Catalog() { }
if (false) {
    /** @type {?|undefined} */
    Catalog.prototype.catalogVersions;
    /** @type {?|undefined} */
    Catalog.prototype.id;
    /** @type {?|undefined} */
    Catalog.prototype.lastModified;
    /** @type {?|undefined} */
    Catalog.prototype.name;
    /** @type {?|undefined} */
    Catalog.prototype.url;
}
/**
 * @record
 */
export function Pagination() { }
if (false) {
    /** @type {?|undefined} */
    Pagination.prototype.count;
    /** @type {?|undefined} */
    Pagination.prototype.page;
    /** @type {?|undefined} */
    Pagination.prototype.totalCount;
    /** @type {?|undefined} */
    Pagination.prototype.totalPages;
}
/**
 * @record
 */
export function Sort() { }
if (false) {
    /** @type {?|undefined} */
    Sort.prototype.asc;
    /** @type {?|undefined} */
    Sort.prototype.code;
}
/**
 * @record
 */
export function ListAdaptedComponents() { }
if (false) {
    /** @type {?|undefined} */
    ListAdaptedComponents.prototype.components;
    /** @type {?|undefined} */
    ListAdaptedComponents.prototype.pagination;
    /** @type {?|undefined} */
    ListAdaptedComponents.prototype.sorts;
}
/**
 * @record
 */
export function OrderStatusUpdateElement() { }
if (false) {
    /** @type {?|undefined} */
    OrderStatusUpdateElement.prototype.baseSiteId;
    /** @type {?|undefined} */
    OrderStatusUpdateElement.prototype.code;
    /** @type {?|undefined} */
    OrderStatusUpdateElement.prototype.status;
}
/**
 * @record
 */
export function PointOfServiceStock() { }
if (false) {
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.address;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.description;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.displayName;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.distanceKm;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.features;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.formattedDistance;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.geoPoint;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.mapIcon;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.name;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.openingHours;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.stockInfo;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.storeContent;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.storeImages;
    /** @type {?|undefined} */
    PointOfServiceStock.prototype.url;
}
/**
 * @record
 */
export function ProductExpressUpdateElement() { }
if (false) {
    /** @type {?|undefined} */
    ProductExpressUpdateElement.prototype.catalogId;
    /** @type {?|undefined} */
    ProductExpressUpdateElement.prototype.catalogVersion;
    /** @type {?|undefined} */
    ProductExpressUpdateElement.prototype.code;
}
/**
 * @record
 */
export function ProductList() { }
if (false) {
    /** @type {?|undefined} */
    ProductList.prototype.catalog;
    /** @type {?|undefined} */
    ProductList.prototype.currentPage;
    /** @type {?|undefined} */
    ProductList.prototype.products;
    /** @type {?|undefined} */
    ProductList.prototype.totalPageCount;
    /** @type {?|undefined} */
    ProductList.prototype.totalProductCount;
    /** @type {?|undefined} */
    ProductList.prototype.version;
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
export function StoreFinderStockSearchPage() { }
if (false) {
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.boundEastLongitude;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.boundSouthLatitude;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.boundWestLongitude;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.locationText;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.pagination;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.product;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.sorts;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.sourceLatitude;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.sourceLongitude;
    /** @type {?|undefined} */
    StoreFinderStockSearchPage.prototype.stores;
}
/**
 * @record
 */
export function UserGroup() { }
if (false) {
    /** @type {?|undefined} */
    UserGroup.prototype.members;
    /** @type {?|undefined} */
    UserGroup.prototype.membersCount;
    /** @type {?|undefined} */
    UserGroup.prototype.name;
    /** @type {?|undefined} */
    UserGroup.prototype.subGroups;
    /** @type {?|undefined} */
    UserGroup.prototype.uid;
}
/**
 * @record
 */
export function UserGroupList() { }
if (false) {
    /** @type {?|undefined} */
    UserGroupList.prototype.currentPage;
    /** @type {?|undefined} */
    UserGroupList.prototype.numberOfPages;
    /** @type {?|undefined} */
    UserGroupList.prototype.pageSize;
    /** @type {?|undefined} */
    UserGroupList.prototype.totalNumber;
    /** @type {?|undefined} */
    UserGroupList.prototype.userGroups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW51c2VkLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL3VudXNlZC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsdUNBTUM7OztJQUxDLCtCQUFZOztJQUNaLHlDQUFvQjs7SUFDcEIsaUNBQWM7O0lBQ2QsMENBQW9DOztJQUNwQyxnQ0FBYTs7Ozs7QUFHZixvQ0FNQzs7O0lBTEMsb0NBQWlDOztJQUNqQyw0QkFBWTs7SUFDWixzQ0FBb0I7O0lBQ3BCLDhCQUFjOztJQUNkLDZCQUFhOzs7OztBQUdmLDZCQU1DOzs7SUFMQyxrQ0FBbUM7O0lBQ25DLHFCQUFZOztJQUNaLCtCQUFvQjs7SUFDcEIsdUJBQWM7O0lBQ2Qsc0JBQWE7Ozs7O0FBR2YsZ0NBS0M7OztJQUpDLDJCQUFlOztJQUNmLDBCQUFjOztJQUNkLGdDQUFvQjs7SUFDcEIsZ0NBQW9COzs7OztBQUd0QiwwQkFHQzs7O0lBRkMsbUJBQWM7O0lBQ2Qsb0JBQWM7Ozs7O0FBR2hCLDJDQUlDOzs7SUFIQywyQ0FBbUI7O0lBQ25CLDJDQUF3Qjs7SUFDeEIsc0NBQWU7Ozs7O0FBR2pCLDhDQUlDOzs7SUFIQyw4Q0FBb0I7O0lBQ3BCLHdDQUFjOztJQUNkLDBDQUFnQjs7Ozs7QUFHbEIseUNBZUM7OztJQWRDLHNDQUFrQjs7SUFDbEIsMENBQXFCOztJQUNyQiwwQ0FBcUI7O0lBQ3JCLHlDQUFvQjs7SUFDcEIsdUNBQThDOztJQUM5QyxnREFBMkI7O0lBQzNCLHVDQUFvQjs7SUFDcEIsc0NBQWdCOztJQUNoQixtQ0FBYzs7SUFDZCwyQ0FBK0I7O0lBQy9CLHdDQUFrQjs7SUFDbEIsMkNBQXNCOztJQUN0QiwwQ0FBc0I7O0lBQ3RCLGtDQUFhOzs7OztBQUdmLGlEQUlDOzs7SUFIQyxnREFBbUI7O0lBQ25CLHFEQUF3Qjs7SUFDeEIsMkNBQWM7Ozs7O0FBR2hCLGlDQU9DOzs7SUFOQyw4QkFBaUI7O0lBQ2pCLGtDQUFxQjs7SUFDckIsK0JBQXFCOztJQUNyQixxQ0FBd0I7O0lBQ3hCLHdDQUEyQjs7SUFDM0IsOEJBQWlCOzs7OztBQUduQixvQ0FFQzs7O0lBREMsdUNBQXFCOzs7OztBQUd2QixnREFXQzs7O0lBVkMsd0RBQTRCOztJQUM1Qix3REFBNEI7O0lBQzVCLHdEQUE0Qjs7SUFDNUIsa0RBQXNCOztJQUN0QixnREFBNkI7O0lBQzdCLDZDQUFrQjs7SUFDbEIsMkNBQW9COztJQUNwQixvREFBd0I7O0lBQ3hCLHFEQUF5Qjs7SUFDekIsNENBQStCOzs7OztBQUdqQywrQkFNQzs7O0lBTEMsNEJBQXNCOztJQUN0QixpQ0FBc0I7O0lBQ3RCLHlCQUFjOztJQUNkLDhCQUF3Qjs7SUFDeEIsd0JBQWE7Ozs7O0FBR2YsbUNBTUM7OztJQUxDLG9DQUFxQjs7SUFDckIsc0NBQXVCOztJQUN2QixpQ0FBa0I7O0lBQ2xCLG9DQUFxQjs7SUFDckIsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4vYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4vaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdCwgU3RvY2sgfSBmcm9tICcuL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgR2VvUG9pbnQsIFBhZ2luYXRpb25Nb2RlbCwgU29ydE1vZGVsIH0gZnJvbSAnLi9taXNjLm1vZGVsJztcbmltcG9ydCB7IENhcnQsIFByaW5jaXBhbCB9IGZyb20gJy4vY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcGVuaW5nU2NoZWR1bGUgfSBmcm9tICcuL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5SGllcmFyY2h5IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZD86IERhdGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN1YmNhdGVnb3JpZXM/OiBDYXRlZ29yeUhpZXJhcmNoeVtdO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZ1ZlcnNpb24ge1xuICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgaWQ/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZD86IERhdGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nIHtcbiAgY2F0YWxvZ1ZlcnNpb25zPzogQ2F0YWxvZ1ZlcnNpb25bXTtcbiAgaWQ/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZD86IERhdGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uIHtcbiAgY291bnQ/OiBudW1iZXI7XG4gIHBhZ2U/OiBudW1iZXI7XG4gIHRvdGFsQ291bnQ/OiBudW1iZXI7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGFzYz86IGJvb2xlYW47XG4gIGNvZGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEFkYXB0ZWRDb21wb25lbnRzIHtcbiAgY29tcG9uZW50cz86IGFueVtdO1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgc29ydHM/OiBTb3J0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50IHtcbiAgYmFzZVNpdGVJZD86IHN0cmluZztcbiAgY29kZT86IHN0cmluZztcbiAgc3RhdHVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZTZXJ2aWNlU3RvY2sge1xuICBhZGRyZXNzPzogQWRkcmVzcztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICBkaXN0YW5jZUttPzogbnVtYmVyO1xuICBmZWF0dXJlcz86IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGZvcm1hdHRlZERpc3RhbmNlPzogc3RyaW5nO1xuICBnZW9Qb2ludD86IEdlb1BvaW50O1xuICBtYXBJY29uPzogSW1hZ2U7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdTY2hlZHVsZTtcbiAgc3RvY2tJbmZvPzogU3RvY2s7XG4gIHN0b3JlQ29udGVudD86IHN0cmluZztcbiAgc3RvcmVJbWFnZXM/OiBJbWFnZVtdO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50IHtcbiAgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICBjYXRhbG9nVmVyc2lvbj86IHN0cmluZztcbiAgY29kZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0TGlzdCB7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICBwcm9kdWN0cz86IFByb2R1Y3RbXTtcbiAgdG90YWxQYWdlQ291bnQ/OiBudW1iZXI7XG4gIHRvdGFsUHJvZHVjdENvdW50PzogbnVtYmVyO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNhdmVDYXJ0UmVzdWx0IHtcbiAgc2F2ZWRDYXJ0RGF0YT86IENhcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVGaW5kZXJTdG9ja1NlYXJjaFBhZ2Uge1xuICBib3VuZEVhc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gIGJvdW5kU291dGhMYXRpdHVkZT86IG51bWJlcjtcbiAgYm91bmRXZXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICBsb2NhdGlvblRleHQ/OiBzdHJpbmc7XG4gIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICBzb3VyY2VMYXRpdHVkZT86IG51bWJlcjtcbiAgc291cmNlTG9uZ2l0dWRlPzogbnVtYmVyO1xuICBzdG9yZXM/OiBQb2ludE9mU2VydmljZVN0b2NrW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwIHtcbiAgbWVtYmVycz86IFByaW5jaXBhbFtdO1xuICBtZW1iZXJzQ291bnQ/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN1Ykdyb3Vwcz86IFVzZXJHcm91cFtdO1xuICB1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwTGlzdCB7XG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICBudW1iZXJPZlBhZ2VzPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgdG90YWxOdW1iZXI/OiBudW1iZXI7XG4gIHVzZXJHcm91cHM/OiBVc2VyR3JvdXBbXTtcbn1cbiJdfQ==