/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CmsComponent() { }
if (false) {
    /** @type {?|undefined} */
    CmsComponent.prototype.modifiedtime;
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
var PageType = {
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
    CmsParagraphComponent.prototype.modifiedTime;
    /** @type {?|undefined} */
    CmsParagraphComponent.prototype.title;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Ntcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsa0NBTUM7OztJQUxDLG9DQUFvQjs7SUFDcEIsNEJBQWM7O0lBQ2QsdUNBQXNCOztJQUN0QixnQ0FBa0I7O0lBQ2xCLDJCQUFhOzs7O0lBSWIsY0FBZSxhQUFhO0lBQzVCLGNBQWUsYUFBYTtJQUM1QixlQUFnQixjQUFjO0lBQzlCLGNBQWUsYUFBYTs7Ozs7O0FBRzlCLHNDQVFDOzs7SUFQQywrQkFBYTs7SUFDYixxQ0FBb0I7O0lBQ3BCLG9DQUFtQjs7SUFDbkIsdUNBQXFCOztJQUNyQixnREFBOEI7O0lBQzlCLG9DQUFrQjs7SUFDbEIsa0NBQWlCOzs7OztBQUduQixxREFFQzs7O0lBREMsa0RBQWlCOzs7OztBQUduQiwyQ0FTQzs7O0lBUkMsMENBQW9COztJQUNwQiwrQ0FBd0I7O0lBQ3hCLDRDQUFxQjs7SUFDckIsbURBQTZCOztJQUM3QixnREFBMEI7O0lBQzFCLHFEQUErQjs7SUFDL0Isc0RBQStCOztJQUMvQiwyREFBb0M7Ozs7O0FBR3RDLDJDQUtDOzs7SUFKQyx3Q0FBaUI7O0lBQ2pCLDBDQUFtQjs7SUFDbkIsNkNBQXNCOztJQUN0QixzQ0FBZTs7Ozs7QUFHakIsNkNBS0M7OztJQUpDLDBDQUFpQjs7SUFDakIsdUNBQWM7O0lBQ2QsdUNBQWM7O0lBQ2Qsc0NBQWE7Ozs7O0FBR2YsdURBS0M7OztJQUpDLG9EQUFrQzs7SUFDbEMsbURBQWlDOztJQUNqQyxtREFBaUM7O0lBQ2pDLHVEQUFxQzs7Ozs7QUFHdkMsd0NBT0M7OztJQU5DLHNDQUFrQjs7SUFDbEIscUNBQWlCOztJQUNqQix1Q0FBbUI7O0lBQ25CLG1DQUFvRTs7SUFDcEUscUNBQWlCOztJQUNqQixzQ0FBa0I7Ozs7O0FBR3BCLGlEQU1DOzs7SUFMQyw0Q0FBZTs7SUFDZixtREFBc0I7O0lBQ3RCLGdEQUFtQjs7SUFDbkIsNENBQWU7O0lBQ2YsNkNBQWdCOzs7OztBQUdsQixtREFPQzs7O0lBTkMsOENBQWU7O0lBQ2YsNkRBQThCOztJQUM5Qiw2REFBOEI7O0lBQzlCLDhEQUErQjs7SUFDL0IsOERBQStCOztJQUMvQixrREFBbUI7Ozs7O0FBR3JCLDBDQU1DOzs7SUFMQyx5Q0FBbUI7O0lBQ25CLGlEQUEyQjs7SUFDM0IscUNBQWU7O0lBQ2YsNENBQXNCOztJQUN0Qix1REFBNkM7Ozs7O0FBSS9DLDZDQUVDOzs7SUFEQyw0Q0FBbUI7Ozs7O0FBR3JCLHVDQUtDOzs7SUFKQyxnQ0FBYTs7SUFDYixrQ0FBZTs7SUFDZixxQ0FBb0M7O0lBQ3BDLG9DQUFvQzs7Ozs7QUFHdEMsd0NBSUM7OztJQUhDLG9DQUFnQjs7SUFDaEIsMkNBQXVCOztJQUN2QixzQ0FBa0I7Ozs7O0FBR3BCLDRDQU9DOzs7SUFOQywyQ0FBbUI7O0lBQ25CLDRDQUFvQjs7SUFDcEIsMkNBQW1COztJQUNuQix3Q0FBZ0I7O0lBQ2hCLHNEQUE4Qjs7SUFDOUIsZ0RBQW1DOzs7OztBQUdyQyx3REFLQzs7O0lBSkMsdURBQW1COztJQUNuQixrRUFBOEI7O0lBQzlCLDBEQUFzQjs7SUFDdEIseURBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDbXNDb21wb25lbnQge1xuICBtb2RpZmllZHRpbWU/OiBEYXRlO1xuICBuYW1lPzogc3RyaW5nO1xuICBvdGhlclByb3BlcnRpZXM/OiBhbnk7XG4gIHR5cGVDb2RlPzogc3RyaW5nO1xuICB1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgQ09OVEVOVF9QQUdFID0gJ0NvbnRlbnRQYWdlJyxcbiAgUFJPRFVDVF9QQUdFID0gJ1Byb2R1Y3RQYWdlJyxcbiAgQ0FURUdPUllfUEFHRSA9ICdDYXRlZ29yeVBhZ2UnLFxuICBDQVRBTE9HX1BBR0UgPSAnQ2F0YWxvZ1BhZ2UnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc0xpbmtDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICB1cmw/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IGJvb2xlYW47XG4gIGV4dGVybmFsPzogYm9vbGVhbjtcbiAgY29udGVudFBhZ2U/OiBzdHJpbmc7XG4gIGNvbnRlbnRQYWdlTGFiZWxPcklkPzogc3RyaW5nO1xuICBsaW5rTmFtZT86IHN0cmluZztcbiAgdGFyZ2V0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNTZWFyY2hCb3hDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBib29sZWFuO1xuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcbiAgbWF4UHJvZHVjdHM/OiBudW1iZXI7XG4gIGRpc3BsYXlTdWdnZXN0aW9ucz86IGJvb2xlYW47XG4gIGRpc3BsYXlQcm9kdWN0cz86IGJvb2xlYW47XG4gIGRpc3BsYXlQcm9kdWN0SW1hZ2VzPzogYm9vbGVhbjtcbiAgd2FpdFRpbWVCZWZvcmVSZXF1ZXN0PzogbnVtYmVyO1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNQYXJhZ3JhcGhDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250ZW50Pzogc3RyaW5nO1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIG1vZGlmaWVkVGltZT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQmFubmVyQ29tcG9uZW50TWVkaWEge1xuICBhbHRUZXh0Pzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBtaW1lPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhIHtcbiAgZGVza3RvcD86IENtc0Jhbm5lckNvbXBvbmVudE1lZGlhO1xuICBtb2JpbGU/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgdGFibGV0PzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIHdpZGVzY3JlZW4/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNCYW5uZXJDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBoZWFkbGluZT86IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBtZWRpYT86IENtc0Jhbm5lckNvbXBvbmVudE1lZGlhIHwgQ21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhO1xuICB1cmxMaW5rPzogc3RyaW5nO1xuICBleHRlcm5hbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICB0aXRsZT86IHN0cmluZztcbiAgcHJvZHVjdENvZGVzPzogc3RyaW5nO1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIHBvcHVwPzogc3RyaW5nO1xuICBzY3JvbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGlzcGxheVByb2R1Y3RUaXRsZXM/OiBzdHJpbmc7XG4gIGRpc3BsYXlQcm9kdWN0UHJpY2VzPzogc3RyaW5nO1xuICBtYXhpbXVtTnVtYmVyUHJvZHVjdHM/OiBudW1iZXI7XG4gIHByb2R1Y3RSZWZlcmVuY2VUeXBlcz86IHN0cmluZztcbiAgY29udGFpbmVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc01pbmlDYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBzaG93blByb2R1Y3RDb3VudD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRvdGFsRGlzcGxheT86IHN0cmluZztcbiAgbGlnaHRib3hCYW5uZXJDb21wb25lbnQ/OiBDbXNCYW5uZXJDb21wb25lbnQ7XG59XG5cbi8vIFRPRE86IFVwZ3JhZGUgbW9kZWwgd2hlbiBCcmVhZGNydW1icyB3aWxsIGJlIGZpbmFsbHkgdXNlZCBpbiBwcm9qZWN0XG5leHBvcnQgaW50ZXJmYWNlIENtc0JyZWFkY3J1bWJzQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc05hdmlnYXRpb25Ob2RlIHtcbiAgdWlkPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBBcnJheTxDbXNOYXZpZ2F0aW9uTm9kZT47XG4gIGVudHJpZXM/OiBBcnJheTxDbXNOYXZpZ2F0aW9uRW50cnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc05hdmlnYXRpb25FbnRyeSB7XG4gIGl0ZW1JZD86IHN0cmluZztcbiAgaXRlbVN1cGVyVHlwZT86IHN0cmluZztcbiAgaXRlbVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgc3R5bGVDbGFzcz86IHN0cmluZztcbiAgd3JhcEFmdGVyPzogc3RyaW5nO1xuICBub3RpY2U/OiBzdHJpbmc7XG4gIHNob3dMYW5ndWFnZUN1cnJlbmN5Pzogc3RyaW5nO1xuICBuYXZpZ2F0aW9uTm9kZT86IENtc05hdmlnYXRpb25Ob2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Byb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIGFjdGl2ZUZhY2V0VmFsdWVDb2RlPzogc3RyaW5nO1xuICBzZWFyY2hSZXN1bHQ/OiBzdHJpbmc7XG4gIG1pblBlckZhY2V0Pzogc3RyaW5nO1xufVxuIl19