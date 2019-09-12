/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    CmsComponentMapping.prototype.component;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUV4RCxnREFrQkM7OztJQWpCQyw2REFBOEM7O0lBQzlDLHNEQUF1Qzs7SUFDdkMscUVBQXNEOztJQUN0RCwyREFBNEM7O0lBQzVDLHFEQUFzQzs7SUFDdEMsMkRBQTRDOztJQUM1Qyx5REFBMEM7O0lBQzFDLHlEQUEwQzs7SUFDMUMsK0RBQWdEOztJQUNoRCxpRUFBa0Q7O0lBQ2xELCtEQUFnRDs7SUFDaEQsdURBQXdDOztJQUN4Qyw4REFBK0M7O0lBQy9DLHdEQUF5Qzs7SUFDekMsZ0VBQWlEOztJQUNqRCw4REFBK0M7O0lBQy9DLG9EQUFxQzs7Ozs7QUFHdkMsa0RBT0M7OztJQU5DLG1FQUFrRDs7SUFDbEQsK0RBQThDOztJQUM5Qyw4REFBNkM7O0lBQzdDLGtFQUFpRDs7SUFDakQsZ0VBQStDOztJQUMvQyxrRUFBaUQ7OztBQUduRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcscUJBQXFCOztBQUNuRSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsa0JBQWtCOzs7O0FBRXpELHlDQU9DOzs7SUFOQyx3Q0FBZ0I7O0lBQ2hCLHdDQUE2Qjs7SUFDN0IsMENBQXFCOztJQUNyQix5Q0FBcUI7O0lBQ3JCLHVDQUFvQjs7SUFDcEIscUNBQWU7Ozs7O0FBR2pCLHdDQUlDOzs7O0FBRUQsTUFBTSxPQUFnQixTQUFVLFNBQVEsU0FBUztDQVloRDs7O0lBVkMsbUNBT0U7O0lBRUYsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2t5bWEvY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRDbXNDb21wb25lbnRDb25maWcge1xuICBDTVNTaXRlQ29udGV4dENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU0xpbmtDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2ltcGxlQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQnJlYWRjcnVtYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIE5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdEFkZFRvQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIE1pbmlDYXJ0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2VhcmNoQm94Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNUYWJQYXJhZ3JhcGhDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBMb2dpbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gIEFjY291bnRBZGRyZXNzQm9va0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUmVzZXRQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdFNwZWNzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgUHJvZHVjdFJldmlld3NUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgY29uc3QgSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFID0gJ0pzcEluY2x1ZGVDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IENNU19GTEVYX0NPTVBPTkVOVF9UWVBFID0gJ0NNU0ZsZXhDb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENtc0NvbXBvbmVudE1hcHBpbmcge1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW107XG4gIGNoaWxkUm91dGVzPzogUm91dGVzO1xuICBkaXNhYmxlU1NSPzogYm9vbGVhbjtcbiAgaTE4bktleXM/OiBzdHJpbmdbXTtcbiAgZ3VhcmRzPzogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ01TQ29tcG9uZW50Q29uZmlnXG4gIGV4dGVuZHMgU3RhbmRhcmRDbXNDb21wb25lbnRDb25maWcsXG4gICAgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gIFtfOiBzdHJpbmddOiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zQ29uZmlnIGV4dGVuZHMgT2NjQ29uZmlnXG4gIGltcGxlbWVudHMgQXV0aENvbmZpZywgS3ltYUNvbmZpZyB7XG4gIGF1dGhlbnRpY2F0aW9uPzoge1xuICAgIGNsaWVudF9pZD86IHN0cmluZztcbiAgICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuXG4gICAga3ltYV9lbmFibGVkPzogYm9vbGVhbjtcbiAgICBreW1hX2NsaWVudF9pZD86IHN0cmluZztcbiAgICBreW1hX2NsaWVudF9zZWNyZXQ/OiBzdHJpbmc7XG4gIH07XG5cbiAgY21zQ29tcG9uZW50cz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cbiJdfQ==