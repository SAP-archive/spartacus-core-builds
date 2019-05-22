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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFHeEQsZ0RBa0JDOzs7SUFqQkMsNkRBQThDOztJQUM5QyxzREFBdUM7O0lBQ3ZDLHFFQUFzRDs7SUFDdEQsMkRBQTRDOztJQUM1QyxxREFBc0M7O0lBQ3RDLDJEQUE0Qzs7SUFDNUMseURBQTBDOztJQUMxQyx5REFBMEM7O0lBQzFDLCtEQUFnRDs7SUFDaEQsaUVBQWtEOztJQUNsRCwrREFBZ0Q7O0lBQ2hELHVEQUF3Qzs7SUFDeEMsOERBQStDOztJQUMvQyx3REFBeUM7O0lBQ3pDLGdFQUFpRDs7SUFDakQsOERBQStDOztJQUMvQyxvREFBcUM7Ozs7O0FBR3ZDLGtEQUlDOzs7SUFIQyxtRUFBa0Q7O0lBQ2xELCtEQUE4Qzs7SUFDOUMsOERBQTZDOzs7QUFHL0MsTUFBTSxLQUFPLDhCQUE4QixHQUFHLHFCQUFxQjs7QUFDbkUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGtCQUFrQjs7OztBQUV6RCx5Q0FPQzs7O0lBTkMsdUNBQWtCOztJQUNsQix3Q0FBNkI7O0lBQzdCLDBDQUFxQjs7SUFDckIseUNBQXFCOztJQUNyQix1Q0FBb0I7O0lBQ3BCLHFDQUFlOzs7OztBQUdqQix3Q0FJQzs7OztBQUVEOzs7O0lBQXdDLHFDQUFTO0lBQWpEOztJQU9BLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFQRCxDQUF3QyxTQUFTLEdBT2hEOzs7Ozs7O0lBTkMsbUNBR0U7O0lBRUYsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGgvY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNMaW5rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNpbXBsZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU1BhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJyZWFkY3J1bWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBNaW5pQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNlYXJjaEJveENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTG9naW5Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICBBY2NvdW50QWRkcmVzc0Jvb2tDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFJlc2V0UGFzc3dvcmRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgY29uc3QgSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFID0gJ0pzcEluY2x1ZGVDb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IENNU19GTEVYX0NPTVBPTkVOVF9UWVBFID0gJ0NNU0ZsZXhDb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENtc0NvbXBvbmVudE1hcHBpbmcge1xuICBzZWxlY3Rvcj86IHN0cmluZztcbiAgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXTtcbiAgY2hpbGRSb3V0ZXM/OiBSb3V0ZXM7XG4gIGRpc2FibGVTU1I/OiBib29sZWFuO1xuICBpMThuS2V5cz86IHN0cmluZ1tdO1xuICBndWFyZHM/OiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDTVNDb21wb25lbnRDb25maWdcbiAgZXh0ZW5kcyBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZyxcbiAgICBKc3BJbmNsdWRlQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgW186IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbXNDb25maWcgZXh0ZW5kcyBPY2NDb25maWcgaW1wbGVtZW50cyBBdXRoQ29uZmlnIHtcbiAgYXV0aGVudGljYXRpb24/OiB7XG4gICAgY2xpZW50X2lkPzogc3RyaW5nO1xuICAgIGNsaWVudF9zZWNyZXQ/OiBzdHJpbmc7XG4gIH07XG5cbiAgY21zQ29tcG9uZW50cz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cbiJdfQ==