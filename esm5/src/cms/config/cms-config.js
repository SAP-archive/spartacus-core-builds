/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFeEQsZ0RBa0JDOzs7SUFqQkMsNkRBQThDOztJQUM5QyxzREFBdUM7O0lBQ3ZDLHFFQUFzRDs7SUFDdEQsMkRBQTRDOztJQUM1QyxxREFBc0M7O0lBQ3RDLDJEQUE0Qzs7SUFDNUMseURBQTBDOztJQUMxQyx5REFBMEM7O0lBQzFDLCtEQUFnRDs7SUFDaEQsaUVBQWtEOztJQUNsRCwrREFBZ0Q7O0lBQ2hELHVEQUF3Qzs7SUFDeEMsOERBQStDOztJQUMvQyx3REFBeUM7O0lBQ3pDLGdFQUFpRDs7SUFDakQsOERBQStDOztJQUMvQyxvREFBcUM7Ozs7O0FBR3ZDLGtEQU9DOzs7SUFOQyxtRUFBa0Q7O0lBQ2xELCtEQUE4Qzs7SUFDOUMsOERBQTZDOztJQUM3QyxrRUFBaUQ7O0lBQ2pELGdFQUErQzs7SUFDL0Msa0VBQWlEOzs7QUFHbkQsTUFBTSxLQUFPLDhCQUE4QixHQUFHLHFCQUFxQjs7QUFDbkUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGtCQUFrQjs7OztBQUV6RCx5Q0FPQzs7O0lBTkMsdUNBQWtCOztJQUNsQix3Q0FBNkI7O0lBQzdCLDBDQUFxQjs7SUFDckIseUNBQXFCOztJQUNyQix1Q0FBb0I7O0lBQ3BCLHFDQUFlOzs7OztBQUdqQix3Q0FJQzs7OztBQUVEOzs7O0lBQXdDLHFDQUFTO0lBQWpEOztJQVNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFURCxDQUF3QyxTQUFTLEdBU2hEOzs7Ozs7O0lBUkMsbUNBS0U7O0lBRUYsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZyB7XG4gIENNU1NpdGVDb250ZXh0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TTGlua0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBTaW1wbGVCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNQYXJhZ3JhcGhDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBCcmVhZGNydW1iQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0QWRkVG9DYXJ0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTWluaUNhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBTZWFyY2hCb3hDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU1RhYlBhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIExvZ2luQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBKc3BJbmNsdWRlQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgQWNjb3VudEFkZHJlc3NCb29rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBSZXNldFBhc3N3b3JkQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0U3BlY3NUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0UmV2aWV3c1RhYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBKU1BfSU5DTFVERV9DTVNfQ09NUE9ORU5UX1RZUEUgPSAnSnNwSW5jbHVkZUNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUgPSAnQ01TRmxleENvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQ29tcG9uZW50TWFwcGluZyB7XG4gIHNlbGVjdG9yPzogc3RyaW5nO1xuICBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdO1xuICBjaGlsZFJvdXRlcz86IFJvdXRlcztcbiAgZGlzYWJsZVNTUj86IGJvb2xlYW47XG4gIGkxOG5LZXlzPzogc3RyaW5nW107XG4gIGd1YXJkcz86IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENNU0NvbXBvbmVudENvbmZpZ1xuICBleHRlbmRzIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnLFxuICAgIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICBbXzogc3RyaW5nXTogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc0NvbmZpZyBleHRlbmRzIE9jY0NvbmZpZyBpbXBsZW1lbnRzIEF1dGhDb25maWcge1xuICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICBjbGllbnRfaWQ/OiBzdHJpbmc7XG4gICAgY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgICBreW1hX2NsaWVudF9pZD86IHN0cmluZztcbiAgICBreW1hX2NsaWVudF9zZWNyZXQ/OiBzdHJpbmc7XG4gIH07XG5cbiAgY21zQ29tcG9uZW50cz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cbiJdfQ==