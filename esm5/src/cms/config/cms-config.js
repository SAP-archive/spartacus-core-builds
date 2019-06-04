/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { OccConfig } from '../../occ/config/occ-config';
/**
 * @record
 */
export function StandardCmsComponentConfig() { }
if (false) {
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSSiteContextComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSLinkComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SimpleResponsiveBannerComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SimpleBannerComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.BannerComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSParagraphComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.BreadcrumbComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.NavigationComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.FooterNavigationComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CategoryNavigationComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.ProductAddToCartComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.MiniCartComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.ProductCarouselComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SearchBoxComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.ProductReferencesComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSTabParagraphComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.LoginComponent;
}
/**
 * @record
 */
export function JspIncludeCmsComponentConfig() { }
if (false) {
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.AccountAddressBookComponent;
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.ForgotPasswordComponent;
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.ResetPasswordComponent;
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.ProductDetailsTabComponent;
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.ProductSpecsTabComponent;
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.ProductReviewsTabComponent;
}
/** @type {?} */
export var JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/** @type {?} */
export var CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
/**
 * @record
 */
export function CmsComponentMapping() { }
if (false) {
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.selector;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.providers;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.childRoutes;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.disableSSR;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.i18nKeys;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.guards;
}
/**
 * @record
 */
export function CMSComponentConfig() { }
/**
 * @abstract
 */
var /**
 * @abstract
 */
CmsConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CmsConfig, _super);
    function CmsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CmsConfig;
}(OccConfig));
/**
 * @abstract
 */
export { CmsConfig };
if (false) {
    /** @type {?} */
    CmsConfig.prototype.authentication;
    /** @type {?} */
    CmsConfig.prototype.cmsComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFeEQsZ0RBa0JDOzs7SUFqQkMsNkRBQThDOztJQUM5QyxzREFBdUM7O0lBQ3ZDLHFFQUFzRDs7SUFDdEQsMkRBQTRDOztJQUM1QyxxREFBc0M7O0lBQ3RDLDJEQUE0Qzs7SUFDNUMseURBQTBDOztJQUMxQyx5REFBMEM7O0lBQzFDLCtEQUFnRDs7SUFDaEQsaUVBQWtEOztJQUNsRCwrREFBZ0Q7O0lBQ2hELHVEQUF3Qzs7SUFDeEMsOERBQStDOztJQUMvQyx3REFBeUM7O0lBQ3pDLGdFQUFpRDs7SUFDakQsOERBQStDOztJQUMvQyxvREFBcUM7Ozs7O0FBR3ZDLGtEQU9DOzs7SUFOQyxtRUFBa0Q7O0lBQ2xELCtEQUE4Qzs7SUFDOUMsOERBQTZDOztJQUM3QyxrRUFBaUQ7O0lBQ2pELGdFQUErQzs7SUFDL0Msa0VBQWlEOzs7QUFHbkQsTUFBTSxLQUFPLDhCQUE4QixHQUFHLHFCQUFxQjs7QUFDbkUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGtCQUFrQjs7OztBQUV6RCx5Q0FPQzs7O0lBTkMsdUNBQWtCOztJQUNsQix3Q0FBNkI7O0lBQzdCLDBDQUFxQjs7SUFDckIseUNBQXFCOztJQUNyQix1Q0FBb0I7O0lBQ3BCLHFDQUFlOzs7OztBQUdqQix3Q0FJQzs7OztBQUVEOzs7O0lBQXdDLHFDQUFTO0lBQWpEOztJQVlBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFaRCxDQUF3QyxTQUFTLEdBWWhEOzs7Ozs7O0lBVkMsbUNBT0U7O0lBRUYsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2t5bWEvY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRDbXNDb21wb25lbnRDb25maWcge1xuICBDTVNTaXRlQ29udGV4dENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU0xpbmtDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2ltcGxlQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQnJlYWRjcnVtYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIE5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdEFkZFRvQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIE1pbmlDYXJ0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2VhcmNoQm94Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNUYWJQYXJhZ3JhcGhDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBMb2dpbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gIEFjY291bnRBZGRyZXNzQm9va0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUmVzZXRQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdFNwZWNzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdFJldmlld3NUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgY29uc3QgSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFID0gJ0pzcEluY2x1ZGVDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IENNU19GTEVYX0NPTVBPTkVOVF9UWVBFID0gJ0NNU0ZsZXhDb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENtc0NvbXBvbmVudE1hcHBpbmcge1xuICBzZWxlY3Rvcj86IHN0cmluZztcbiAgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXTtcbiAgY2hpbGRSb3V0ZXM/OiBSb3V0ZXM7XG4gIGRpc2FibGVTU1I/OiBib29sZWFuO1xuICBpMThuS2V5cz86IHN0cmluZ1tdO1xuICBndWFyZHM/OiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDTVNDb21wb25lbnRDb25maWdcbiAgZXh0ZW5kcyBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZyxcbiAgICBKc3BJbmNsdWRlQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgW186IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbXNDb25maWcgZXh0ZW5kcyBPY2NDb25maWdcbiAgaW1wbGVtZW50cyBBdXRoQ29uZmlnLCBLeW1hQ29uZmlnIHtcbiAgYXV0aGVudGljYXRpb24/OiB7XG4gICAgY2xpZW50X2lkPzogc3RyaW5nO1xuICAgIGNsaWVudF9zZWNyZXQ/OiBzdHJpbmc7XG5cbiAgICBreW1hX2VuYWJsZWQ/OiBib29sZWFuO1xuICAgIGt5bWFfY2xpZW50X2lkPzogc3RyaW5nO1xuICAgIGt5bWFfY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgfTtcblxuICBjbXNDb21wb25lbnRzPzogQ01TQ29tcG9uZW50Q29uZmlnO1xufVxuIl19