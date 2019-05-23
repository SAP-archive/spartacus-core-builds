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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUd4RCxnREFrQkM7OztJQWpCQyw2REFBOEM7O0lBQzlDLHNEQUF1Qzs7SUFDdkMscUVBQXNEOztJQUN0RCwyREFBNEM7O0lBQzVDLHFEQUFzQzs7SUFDdEMsMkRBQTRDOztJQUM1Qyx5REFBMEM7O0lBQzFDLHlEQUEwQzs7SUFDMUMsK0RBQWdEOztJQUNoRCxpRUFBa0Q7O0lBQ2xELCtEQUFnRDs7SUFDaEQsdURBQXdDOztJQUN4Qyw4REFBK0M7O0lBQy9DLHdEQUF5Qzs7SUFDekMsZ0VBQWlEOztJQUNqRCw4REFBK0M7O0lBQy9DLG9EQUFxQzs7Ozs7QUFHdkMsa0RBT0M7OztJQU5DLG1FQUFrRDs7SUFDbEQsK0RBQThDOztJQUM5Qyw4REFBNkM7O0lBQzdDLGtFQUFpRDs7SUFDakQsZ0VBQStDOztJQUMvQyxrRUFBaUQ7OztBQUduRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcscUJBQXFCOztBQUNuRSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsa0JBQWtCOzs7O0FBRXpELHlDQU9DOzs7SUFOQyx1Q0FBa0I7O0lBQ2xCLHdDQUE2Qjs7SUFDN0IsMENBQXFCOztJQUNyQix5Q0FBcUI7O0lBQ3JCLHVDQUFvQjs7SUFDcEIscUNBQWU7Ozs7O0FBR2pCLHdDQUlDOzs7O0FBRUQsTUFBTSxPQUFnQixTQUFVLFNBQVEsU0FBUztDQU9oRDs7O0lBTkMsbUNBR0U7O0lBRUYsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGgvY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNMaW5rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNpbXBsZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU1BhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJyZWFkY3J1bWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBNaW5pQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNlYXJjaEJveENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTG9naW5Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICBBY2NvdW50QWRkcmVzc0Jvb2tDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFJlc2V0UGFzc3dvcmRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RTcGVjc1RhYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGNvbnN0IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSA9ICdKc3BJbmNsdWRlQ29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSA9ICdDTVNGbGV4Q29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW107XG4gIGNoaWxkUm91dGVzPzogUm91dGVzO1xuICBkaXNhYmxlU1NSPzogYm9vbGVhbjtcbiAgaTE4bktleXM/OiBzdHJpbmdbXTtcbiAgZ3VhcmRzPzogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ01TQ29tcG9uZW50Q29uZmlnXG4gIGV4dGVuZHMgU3RhbmRhcmRDbXNDb21wb25lbnRDb25maWcsXG4gICAgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gIFtfOiBzdHJpbmddOiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zQ29uZmlnIGV4dGVuZHMgT2NjQ29uZmlnIGltcGxlbWVudHMgQXV0aENvbmZpZyB7XG4gIGF1dGhlbnRpY2F0aW9uPzoge1xuICAgIGNsaWVudF9pZD86IHN0cmluZztcbiAgICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICB9O1xuXG4gIGNtc0NvbXBvbmVudHM/OiBDTVNDb21wb25lbnRDb25maWc7XG59XG4iXX0=