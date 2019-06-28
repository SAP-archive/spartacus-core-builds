/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CmsComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsComponent.prototype.modifiedTime;
    /** @type {?|undefined} */
    CmsComponent.prototype.name;
    /** @type {?|undefined} */
    CmsComponent.prototype.otherProperties;
    /** @type {?|undefined} */
    CmsComponent.prototype.typeCode;
    /** @type {?|undefined} */
    CmsComponent.prototype.uid;
}
/** @enum {string} */
const PageType = {
    CONTENT_PAGE: 'ContentPage',
    PRODUCT_PAGE: 'ProductPage',
    CATEGORY_PAGE: 'CategoryPage',
    CATALOG_PAGE: 'CatalogPage',
};
export { PageType };
/**
 * @record
 */
export function CmsLinkComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.url;
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.container;
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.external;
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.contentPage;
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.contentPageLabelOrId;
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.linkName;
    /** @type {?|undefined} */
    CmsLinkComponent.prototype.target;
}
/**
 * @record
 */
export function CmsSiteContextSelectorComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsSiteContextSelectorComponent.prototype.context;
}
/**
 * @record
 */
export function CmsSearchBoxComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.container;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.maxSuggestions;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.maxProducts;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.displaySuggestions;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.displayProducts;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.displayProductImages;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.waitTimeBeforeRequest;
    /** @type {?|undefined} */
    CmsSearchBoxComponent.prototype.minCharactersBeforeRequest;
}
/**
 * @record
 */
export function CmsParagraphComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsParagraphComponent.prototype.content;
    /** @type {?|undefined} */
    CmsParagraphComponent.prototype.container;
    /** @type {?|undefined} */
    CmsParagraphComponent.prototype.title;
}
/**
 * @record
 */
export function CMSTabParagraphContainer() { }
if (false) {
    /** @type {?|undefined} */
    CMSTabParagraphContainer.prototype.container;
    /** @type {?|undefined} */
    CMSTabParagraphContainer.prototype.components;
}
/**
 * @record
 */
export function CmsBannerComponentMedia() { }
if (false) {
    /** @type {?|undefined} */
    CmsBannerComponentMedia.prototype.altText;
    /** @type {?|undefined} */
    CmsBannerComponentMedia.prototype.code;
    /** @type {?|undefined} */
    CmsBannerComponentMedia.prototype.mime;
    /** @type {?|undefined} */
    CmsBannerComponentMedia.prototype.url;
}
/**
 * @record
 */
export function CmsResponsiveBannerComponentMedia() { }
if (false) {
    /** @type {?|undefined} */
    CmsResponsiveBannerComponentMedia.prototype.desktop;
    /** @type {?|undefined} */
    CmsResponsiveBannerComponentMedia.prototype.mobile;
    /** @type {?|undefined} */
    CmsResponsiveBannerComponentMedia.prototype.tablet;
    /** @type {?|undefined} */
    CmsResponsiveBannerComponentMedia.prototype.widescreen;
}
/**
 * @record
 */
export function CmsBannerComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsBannerComponent.prototype.headline;
    /** @type {?|undefined} */
    CmsBannerComponent.prototype.content;
    /** @type {?|undefined} */
    CmsBannerComponent.prototype.container;
    /** @type {?|undefined} */
    CmsBannerComponent.prototype.media;
    /** @type {?|undefined} */
    CmsBannerComponent.prototype.urlLink;
    /** @type {?|undefined} */
    CmsBannerComponent.prototype.external;
}
/** @enum {string} */
const CmsBannerCarouselEffect = {
    FADE: 'FADE',
    ZOOM: 'ZOOM',
    CURTAIN: 'CURTAINX',
    TURNDOWN: 'TURNDOWN',
};
export { CmsBannerCarouselEffect };
/**
 * @record
 */
export function CmsBannerCarouselComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsBannerCarouselComponent.prototype.banners;
    /** @type {?|undefined} */
    CmsBannerCarouselComponent.prototype.effect;
}
/**
 * @record
 */
export function CmsProductCarouselComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsProductCarouselComponent.prototype.title;
    /** @type {?|undefined} */
    CmsProductCarouselComponent.prototype.productCodes;
    /** @type {?|undefined} */
    CmsProductCarouselComponent.prototype.container;
    /** @type {?|undefined} */
    CmsProductCarouselComponent.prototype.popup;
    /** @type {?|undefined} */
    CmsProductCarouselComponent.prototype.scroll;
}
/**
 * @record
 */
export function CmsProductReferencesComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsProductReferencesComponent.prototype.title;
    /** @type {?|undefined} */
    CmsProductReferencesComponent.prototype.displayProductTitles;
    /** @type {?|undefined} */
    CmsProductReferencesComponent.prototype.displayProductPrices;
    /** @type {?|undefined} */
    CmsProductReferencesComponent.prototype.maximumNumberProducts;
    /** @type {?|undefined} */
    CmsProductReferencesComponent.prototype.productReferenceTypes;
    /** @type {?|undefined} */
    CmsProductReferencesComponent.prototype.container;
}
/**
 * @record
 */
export function CmsMiniCartComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsMiniCartComponent.prototype.container;
    /** @type {?|undefined} */
    CmsMiniCartComponent.prototype.shownProductCount;
    /** @type {?|undefined} */
    CmsMiniCartComponent.prototype.title;
    /** @type {?|undefined} */
    CmsMiniCartComponent.prototype.totalDisplay;
    /** @type {?|undefined} */
    CmsMiniCartComponent.prototype.lightboxBannerComponent;
}
/**
 * @record
 */
export function CmsBreadcrumbsComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsBreadcrumbsComponent.prototype.container;
}
/**
 * @record
 */
export function CmsNavigationNode() { }
if (false) {
    /** @type {?|undefined} */
    CmsNavigationNode.prototype.uid;
    /** @type {?|undefined} */
    CmsNavigationNode.prototype.title;
    /** @type {?|undefined} */
    CmsNavigationNode.prototype.children;
    /** @type {?|undefined} */
    CmsNavigationNode.prototype.entries;
}
/**
 * @record
 */
export function CmsNavigationEntry() { }
if (false) {
    /** @type {?|undefined} */
    CmsNavigationEntry.prototype.itemId;
    /** @type {?|undefined} */
    CmsNavigationEntry.prototype.itemSuperType;
    /** @type {?|undefined} */
    CmsNavigationEntry.prototype.itemType;
}
/**
 * @record
 */
export function CmsNavigationComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsNavigationComponent.prototype.container;
    /** @type {?|undefined} */
    CmsNavigationComponent.prototype.styleClass;
    /** @type {?|undefined} */
    CmsNavigationComponent.prototype.wrapAfter;
    /** @type {?|undefined} */
    CmsNavigationComponent.prototype.notice;
    /** @type {?|undefined} */
    CmsNavigationComponent.prototype.showLanguageCurrency;
    /** @type {?|undefined} */
    CmsNavigationComponent.prototype.navigationNode;
}
/**
 * @record
 */
export function CmsProductFacetNavigationComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsProductFacetNavigationComponent.prototype.container;
    /** @type {?|undefined} */
    CmsProductFacetNavigationComponent.prototype.activeFacetValueCode;
    /** @type {?|undefined} */
    CmsProductFacetNavigationComponent.prototype.searchResult;
    /** @type {?|undefined} */
    CmsProductFacetNavigationComponent.prototype.minPerFacet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Ntcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsa0NBTUM7OztJQUxDLG9DQUFvQjs7SUFDcEIsNEJBQWM7O0lBQ2QsdUNBQXNCOztJQUN0QixnQ0FBa0I7O0lBQ2xCLDJCQUFhOzs7O0lBSWIsY0FBZSxhQUFhO0lBQzVCLGNBQWUsYUFBYTtJQUM1QixlQUFnQixjQUFjO0lBQzlCLGNBQWUsYUFBYTs7Ozs7O0FBRzlCLHNDQVFDOzs7SUFQQywrQkFBYTs7SUFDYixxQ0FBb0I7O0lBQ3BCLG9DQUFtQjs7SUFDbkIsdUNBQXFCOztJQUNyQixnREFBOEI7O0lBQzlCLG9DQUFrQjs7SUFDbEIsa0NBQWlCOzs7OztBQUduQixxREFFQzs7O0lBREMsa0RBQWlCOzs7OztBQUduQiwyQ0FTQzs7O0lBUkMsMENBQW9COztJQUNwQiwrQ0FBd0I7O0lBQ3hCLDRDQUFxQjs7SUFDckIsbURBQTZCOztJQUM3QixnREFBMEI7O0lBQzFCLHFEQUErQjs7SUFDL0Isc0RBQStCOztJQUMvQiwyREFBb0M7Ozs7O0FBR3RDLDJDQUlDOzs7SUFIQyx3Q0FBaUI7O0lBQ2pCLDBDQUFtQjs7SUFDbkIsc0NBQWU7Ozs7O0FBR2pCLDhDQUdDOzs7SUFGQyw2Q0FBbUI7O0lBQ25CLDhDQUFvQjs7Ozs7QUFHdEIsNkNBS0M7OztJQUpDLDBDQUFpQjs7SUFDakIsdUNBQWM7O0lBQ2QsdUNBQWM7O0lBQ2Qsc0NBQWE7Ozs7O0FBR2YsdURBS0M7OztJQUpDLG9EQUFrQzs7SUFDbEMsbURBQWlDOztJQUNqQyxtREFBaUM7O0lBQ2pDLHVEQUFxQzs7Ozs7QUFHdkMsd0NBT0M7OztJQU5DLHNDQUFrQjs7SUFDbEIscUNBQWlCOztJQUNqQix1Q0FBbUI7O0lBQ25CLG1DQUFvRTs7SUFDcEUscUNBQWlCOztJQUNqQixzQ0FBa0I7Ozs7SUFJbEIsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNO0lBQ2IsU0FBVSxVQUFVO0lBQ3BCLFVBQVcsVUFBVTs7Ozs7O0FBR3ZCLGdEQUdDOzs7SUFGQyw2Q0FBaUI7O0lBQ2pCLDRDQUFpQzs7Ozs7QUFHbkMsaURBTUM7OztJQUxDLDRDQUFlOztJQUNmLG1EQUFzQjs7SUFDdEIsZ0RBQW1COztJQUNuQiw0Q0FBZTs7SUFDZiw2Q0FBZ0I7Ozs7O0FBR2xCLG1EQU9DOzs7SUFOQyw4Q0FBZTs7SUFDZiw2REFBOEI7O0lBQzlCLDZEQUE4Qjs7SUFDOUIsOERBQStCOztJQUMvQiw4REFBK0I7O0lBQy9CLGtEQUFtQjs7Ozs7QUFHckIsMENBTUM7OztJQUxDLHlDQUFtQjs7SUFDbkIsaURBQTJCOztJQUMzQixxQ0FBZTs7SUFDZiw0Q0FBc0I7O0lBQ3RCLHVEQUE2Qzs7Ozs7QUFJL0MsNkNBRUM7OztJQURDLDRDQUFtQjs7Ozs7QUFHckIsdUNBS0M7OztJQUpDLGdDQUFhOztJQUNiLGtDQUFlOztJQUNmLHFDQUFvQzs7SUFDcEMsb0NBQW9DOzs7OztBQUd0Qyx3Q0FJQzs7O0lBSEMsb0NBQWdCOztJQUNoQiwyQ0FBdUI7O0lBQ3ZCLHNDQUFrQjs7Ozs7QUFHcEIsNENBT0M7OztJQU5DLDJDQUFtQjs7SUFDbkIsNENBQW9COztJQUNwQiwyQ0FBbUI7O0lBQ25CLHdDQUFnQjs7SUFDaEIsc0RBQThCOztJQUM5QixnREFBbUM7Ozs7O0FBR3JDLHdEQUtDOzs7SUFKQyx1REFBbUI7O0lBQ25CLGtFQUE4Qjs7SUFDOUIsMERBQXNCOztJQUN0Qix5REFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENtc0NvbXBvbmVudCB7XG4gIG1vZGlmaWVkVGltZT86IERhdGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG90aGVyUHJvcGVydGllcz86IGFueTtcbiAgdHlwZUNvZGU/OiBzdHJpbmc7XG4gIHVpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gUGFnZVR5cGUge1xuICBDT05URU5UX1BBR0UgPSAnQ29udGVudFBhZ2UnLFxuICBQUk9EVUNUX1BBR0UgPSAnUHJvZHVjdFBhZ2UnLFxuICBDQVRFR09SWV9QQUdFID0gJ0NhdGVnb3J5UGFnZScsXG4gIENBVEFMT0dfUEFHRSA9ICdDYXRhbG9nUGFnZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTGlua0NvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIHVybD86IHN0cmluZztcbiAgY29udGFpbmVyPzogYm9vbGVhbjtcbiAgZXh0ZXJuYWw/OiBib29sZWFuO1xuICBjb250ZW50UGFnZT86IHN0cmluZztcbiAgY29udGVudFBhZ2VMYWJlbE9ySWQ/OiBzdHJpbmc7XG4gIGxpbmtOYW1lPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1NlYXJjaEJveENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRhaW5lcj86IGJvb2xlYW47XG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xuICBtYXhQcm9kdWN0cz86IG51bWJlcjtcbiAgZGlzcGxheVN1Z2dlc3Rpb25zPzogYm9vbGVhbjtcbiAgZGlzcGxheVByb2R1Y3RzPzogYm9vbGVhbjtcbiAgZGlzcGxheVByb2R1Y3RJbWFnZXM/OiBib29sZWFuO1xuICB3YWl0VGltZUJlZm9yZVJlcXVlc3Q/OiBudW1iZXI7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhcmFncmFwaENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyIGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBjb21wb25lbnRzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc0Jhbm5lckNvbXBvbmVudE1lZGlhIHtcbiAgYWx0VGV4dD86IHN0cmluZztcbiAgY29kZT86IHN0cmluZztcbiAgbWltZT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYSB7XG4gIGRlc2t0b3A/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgbW9iaWxlPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIHRhYmxldD86IENtc0Jhbm5lckNvbXBvbmVudE1lZGlhO1xuICB3aWRlc2NyZWVuPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgaGVhZGxpbmU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgbWVkaWE/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYSB8IENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgdXJsTGluaz86IHN0cmluZztcbiAgZXh0ZXJuYWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIENtc0Jhbm5lckNhcm91c2VsRWZmZWN0IHtcbiAgRkFERSA9ICdGQURFJyxcbiAgWk9PTSA9ICdaT09NJyxcbiAgQ1VSVEFJTiA9ICdDVVJUQUlOWCcsXG4gIFRVUk5ET1dOID0gJ1RVUk5ET1dOJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNCYW5uZXJDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGJhbm5lcnM/OiBzdHJpbmc7XG4gIGVmZmVjdD86IENtc0Jhbm5lckNhcm91c2VsRWZmZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBwcm9kdWN0Q29kZXM/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgcG9wdXA/OiBzdHJpbmc7XG4gIHNjcm9sbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkaXNwbGF5UHJvZHVjdFRpdGxlcz86IHN0cmluZztcbiAgZGlzcGxheVByb2R1Y3RQcmljZXM/OiBzdHJpbmc7XG4gIG1heGltdW1OdW1iZXJQcm9kdWN0cz86IG51bWJlcjtcbiAgcHJvZHVjdFJlZmVyZW5jZVR5cGVzPzogc3RyaW5nO1xuICBjb250YWluZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTWluaUNhcnRDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIHNob3duUHJvZHVjdENvdW50Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdG90YWxEaXNwbGF5Pzogc3RyaW5nO1xuICBsaWdodGJveEJhbm5lckNvbXBvbmVudD86IENtc0Jhbm5lckNvbXBvbmVudDtcbn1cblxuLy8gVE9ETzogVXBncmFkZSBtb2RlbCB3aGVuIEJyZWFkY3J1bWJzIHdpbGwgYmUgZmluYWxseSB1c2VkIGluIHByb2plY3RcbmV4cG9ydCBpbnRlcmZhY2UgQ21zQnJlYWRjcnVtYnNDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTmF2aWdhdGlvbk5vZGUge1xuICB1aWQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IEFycmF5PENtc05hdmlnYXRpb25Ob2RlPjtcbiAgZW50cmllcz86IEFycmF5PENtc05hdmlnYXRpb25FbnRyeT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTmF2aWdhdGlvbkVudHJ5IHtcbiAgaXRlbUlkPzogc3RyaW5nO1xuICBpdGVtU3VwZXJUeXBlPzogc3RyaW5nO1xuICBpdGVtVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBzdHlsZUNsYXNzPzogc3RyaW5nO1xuICB3cmFwQWZ0ZXI/OiBzdHJpbmc7XG4gIG5vdGljZT86IHN0cmluZztcbiAgc2hvd0xhbmd1YWdlQ3VycmVuY3k/OiBzdHJpbmc7XG4gIG5hdmlnYXRpb25Ob2RlPzogQ21zTmF2aWdhdGlvbk5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgYWN0aXZlRmFjZXRWYWx1ZUNvZGU/OiBzdHJpbmc7XG4gIHNlYXJjaFJlc3VsdD86IHN0cmluZztcbiAgbWluUGVyRmFjZXQ/OiBzdHJpbmc7XG59XG4iXX0=