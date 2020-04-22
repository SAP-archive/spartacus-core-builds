import { StaticProvider } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthConfig } from '../../auth/config/auth-config';
import { KymaConfig } from '../../kyma/config/kyma-config';
import { OccConfig } from '../../occ/config/occ-config';
import * as ɵngcc0 from '@angular/core';
export interface StandardCmsComponentConfig {
    CMSSiteContextComponent?: CmsComponentMapping;
    CMSLinkComponent?: CmsComponentMapping;
    SimpleResponsiveBannerComponent?: CmsComponentMapping;
    SimpleBannerComponent?: CmsComponentMapping;
    BannerComponent?: CmsComponentMapping;
    CMSParagraphComponent?: CmsComponentMapping;
    BreadcrumbComponent?: CmsComponentMapping;
    NavigationComponent?: CmsComponentMapping;
    FooterNavigationComponent?: CmsComponentMapping;
    CategoryNavigationComponent?: CmsComponentMapping;
    ProductAddToCartComponent?: CmsComponentMapping;
    MiniCartComponent?: CmsComponentMapping;
    ProductCarouselComponent?: CmsComponentMapping;
    SearchBoxComponent?: CmsComponentMapping;
    ProductReferencesComponent?: CmsComponentMapping;
    CMSTabParagraphComponent?: CmsComponentMapping;
    LoginComponent?: CmsComponentMapping;
}
export interface JspIncludeCmsComponentConfig {
    AccountAddressBookComponent?: CmsComponentMapping;
    ForgotPasswordComponent?: CmsComponentMapping;
    ResetPasswordComponent?: CmsComponentMapping;
    ProductDetailsTabComponent?: CmsComponentMapping;
    ProductSpecsTabComponent?: CmsComponentMapping;
    ProductReviewsTabComponent?: CmsComponentMapping;
}
export declare const JSP_INCLUDE_CMS_COMPONENT_TYPE = "JspIncludeComponent";
export declare const CMS_FLEX_COMPONENT_TYPE = "CMSFlexComponent";
export interface CmsComponentMapping {
    component?: any;
    providers?: StaticProvider[];
    childRoutes?: Routes;
    disableSSR?: boolean;
    i18nKeys?: string[];
    guards?: any[];
    /**
     * DeferLoading can be specified globally, but also per component.
     * Some components require direct loading while it's not initially
     * in the viewport.
     */
    deferLoading?: DeferLoadingStrategy;
}
/** Strategy to control the loading strategy of DOM elements. */
export declare enum DeferLoadingStrategy {
    /** Defers loading of DOM elements until element is near/in the users view port */
    DEFER = "DEFERRED-LOADING",
    /** Renders the DOM instantly without being concerned with the view port */
    INSTANT = "INSTANT-LOADING"
}
export interface CMSComponentConfig extends StandardCmsComponentConfig, JspIncludeCmsComponentConfig {
    [componentType: string]: CmsComponentMapping;
}
export declare abstract class CmsConfig extends OccConfig implements AuthConfig, KymaConfig {
    authentication?: {
        client_id?: string;
        client_secret?: string;
        kyma_client_id?: string;
        kyma_client_secret?: string;
    };
    cmsComponents?: CMSComponentConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJjbXMtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGgvY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuLi8uLi9reW1hL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuZXhwb3J0IGludGVyZmFjZSBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZyB7XG4gICAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIENNU0xpbmtDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFNpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFNpbXBsZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBDTVNQYXJhZ3JhcGhDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIEJyZWFkY3J1bWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIE5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgUHJvZHVjdEFkZFRvQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgTWluaUNhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgU2VhcmNoQm94Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBMb2dpbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICAgIEFjY291bnRBZGRyZXNzQm9va0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBQcm9kdWN0U3BlY3NUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSA9IFwiSnNwSW5jbHVkZUNvbXBvbmVudFwiO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUgPSBcIkNNU0ZsZXhDb21wb25lbnRcIjtcbmV4cG9ydCBpbnRlcmZhY2UgQ21zQ29tcG9uZW50TWFwcGluZyB7XG4gICAgY29tcG9uZW50PzogYW55O1xuICAgIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW107XG4gICAgY2hpbGRSb3V0ZXM/OiBSb3V0ZXM7XG4gICAgZGlzYWJsZVNTUj86IGJvb2xlYW47XG4gICAgaTE4bktleXM/OiBzdHJpbmdbXTtcbiAgICBndWFyZHM/OiBhbnlbXTtcbiAgICAvKipcbiAgICAgKiBEZWZlckxvYWRpbmcgY2FuIGJlIHNwZWNpZmllZCBnbG9iYWxseSwgYnV0IGFsc28gcGVyIGNvbXBvbmVudC5cbiAgICAgKiBTb21lIGNvbXBvbmVudHMgcmVxdWlyZSBkaXJlY3QgbG9hZGluZyB3aGlsZSBpdCdzIG5vdCBpbml0aWFsbHlcbiAgICAgKiBpbiB0aGUgdmlld3BvcnQuXG4gICAgICovXG4gICAgZGVmZXJMb2FkaW5nPzogRGVmZXJMb2FkaW5nU3RyYXRlZ3k7XG59XG4vKiogU3RyYXRlZ3kgdG8gY29udHJvbCB0aGUgbG9hZGluZyBzdHJhdGVneSBvZiBET00gZWxlbWVudHMuICovXG5leHBvcnQgZGVjbGFyZSBlbnVtIERlZmVyTG9hZGluZ1N0cmF0ZWd5IHtcbiAgICAvKiogRGVmZXJzIGxvYWRpbmcgb2YgRE9NIGVsZW1lbnRzIHVudGlsIGVsZW1lbnQgaXMgbmVhci9pbiB0aGUgdXNlcnMgdmlldyBwb3J0ICovXG4gICAgREVGRVIgPSBcIkRFRkVSUkVELUxPQURJTkdcIixcbiAgICAvKiogUmVuZGVycyB0aGUgRE9NIGluc3RhbnRseSB3aXRob3V0IGJlaW5nIGNvbmNlcm5lZCB3aXRoIHRoZSB2aWV3IHBvcnQgKi9cbiAgICBJTlNUQU5UID0gXCJJTlNUQU5ULUxPQURJTkdcIlxufVxuZXhwb3J0IGludGVyZmFjZSBDTVNDb21wb25lbnRDb25maWcgZXh0ZW5kcyBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZywgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gICAgW2NvbXBvbmVudFR5cGU6IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBDbXNDb25maWcgZXh0ZW5kcyBPY2NDb25maWcgaW1wbGVtZW50cyBBdXRoQ29uZmlnLCBLeW1hQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICAgICAgY2xpZW50X2lkPzogc3RyaW5nO1xuICAgICAgICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICAgICAgICBreW1hX2NsaWVudF9pZD86IHN0cmluZztcbiAgICAgICAga3ltYV9jbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICAgIH07XG4gICAgY21zQ29tcG9uZW50cz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cbiJdfQ==