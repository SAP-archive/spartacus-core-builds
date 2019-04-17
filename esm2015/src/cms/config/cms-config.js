/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
}
/** @type {?} */
export const JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/** @type {?} */
export const CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
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
export class CmsConfig extends OccConfig {
}
if (false) {
    /** @type {?} */
    CmsConfig.prototype.authentication;
    /** @type {?} */
    CmsConfig.prototype.cmsComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUd4RCxnREFpQkM7OztJQWhCQyw2REFBOEM7O0lBQzlDLHNEQUF1Qzs7SUFDdkMscUVBQXNEOztJQUN0RCwyREFBNEM7O0lBQzVDLHFEQUFzQzs7SUFDdEMsMkRBQTRDOztJQUM1Qyx5REFBMEM7O0lBQzFDLHlEQUEwQzs7SUFDMUMsK0RBQWdEOztJQUNoRCxpRUFBa0Q7O0lBQ2xELCtEQUFnRDs7SUFDaEQsdURBQXdDOztJQUN4Qyw4REFBK0M7O0lBQy9DLHdEQUF5Qzs7SUFDekMsZ0VBQWlEOztJQUNqRCw4REFBK0M7Ozs7O0FBR2pELGtEQUlDOzs7SUFIQyxtRUFBa0Q7O0lBQ2xELCtEQUE4Qzs7SUFDOUMsOERBQTZDOzs7QUFHL0MsTUFBTSxPQUFPLDhCQUE4QixHQUFHLHFCQUFxQjs7QUFDbkUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLGtCQUFrQjs7OztBQUV6RCx5Q0FPQzs7O0lBTkMsdUNBQWtCOztJQUNsQix3Q0FBNkI7O0lBQzdCLDBDQUFxQjs7SUFDckIseUNBQXFCOztJQUNyQix1Q0FBb0I7O0lBQ3BCLHFDQUFlOzs7OztBQUdqQix3Q0FJQzs7OztBQUVELE1BQU0sT0FBZ0IsU0FBVSxTQUFRLFNBQVM7Q0FPaEQ7OztJQU5DLG1DQUdFOztJQUVGLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZyB7XG4gIENNU1NpdGVDb250ZXh0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TTGlua0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBTaW1wbGVCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNQYXJhZ3JhcGhDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBCcmVhZGNydW1iQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0QWRkVG9DYXJ0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTWluaUNhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBTZWFyY2hCb3hDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU1RhYlBhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gIEFjY291bnRBZGRyZXNzQm9va0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUmVzZXRQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBKU1BfSU5DTFVERV9DTVNfQ09NUE9ORU5UX1RZUEUgPSAnSnNwSW5jbHVkZUNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUgPSAnQ01TRmxleENvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQ29tcG9uZW50TWFwcGluZyB7XG4gIHNlbGVjdG9yPzogc3RyaW5nO1xuICBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdO1xuICBjaGlsZFJvdXRlcz86IFJvdXRlcztcbiAgZGlzYWJsZVNTUj86IGJvb2xlYW47XG4gIGkxOG5LZXlzPzogc3RyaW5nW107XG4gIGd1YXJkcz86IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENNU0NvbXBvbmVudENvbmZpZ1xuICBleHRlbmRzIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnLFxuICAgIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICBbXzogc3RyaW5nXTogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc0NvbmZpZyBleHRlbmRzIE9jY0NvbmZpZyBpbXBsZW1lbnRzIEF1dGhDb25maWcge1xuICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICBjbGllbnRfaWQ/OiBzdHJpbmc7XG4gICAgY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgfTtcblxuICBjbXNDb21wb25lbnRzPzogQ01TQ29tcG9uZW50Q29uZmlnO1xufVxuIl19