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
export interface FeatureModuleConfig {
    /**
     * Lazy resolved feature module
     */
    module?: () => Promise<any>;
    /**
     * Lazy resolved dependency modules
     */
    dependencies?: (() => Promise<any>)[];
    /**
     * Cms components covered by this feature
     */
    cmsComponents?: string[];
}
export declare abstract class CmsConfig extends OccConfig implements AuthConfig, KymaConfig {
    authentication?: {
        client_id?: string;
        client_secret?: string;
        kyma_client_id?: string;
        kyma_client_secret?: string;
    };
    featureModules?: {
        [featureName: string]: FeatureModuleConfig;
    };
    cmsComponents?: CMSComponentConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJjbXMtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2t5bWEvY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgICBDTVNTaXRlQ29udGV4dENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgQ01TTGlua0NvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgU2ltcGxlQmFubmVyQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBCYW5uZXJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIENNU1BhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBQcm9kdWN0QWRkVG9DYXJ0Q29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBNaW5pQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBTZWFyY2hCb3hDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBDTVNUYWJQYXJhZ3JhcGhDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIExvZ2luQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gICAgQWNjb3VudEFkZHJlc3NCb29rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgUHJvZHVjdERldGFpbHNUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICAgIFByb2R1Y3RTcGVjc1RhYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gICAgUHJvZHVjdFJldmlld3NUYWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFID0gXCJKc3BJbmNsdWRlQ29tcG9uZW50XCI7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSA9IFwiQ01TRmxleENvbXBvbmVudFwiO1xuZXhwb3J0IGludGVyZmFjZSBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgICBjb21wb25lbnQ/OiBhbnk7XG4gICAgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXTtcbiAgICBjaGlsZFJvdXRlcz86IFJvdXRlcztcbiAgICBkaXNhYmxlU1NSPzogYm9vbGVhbjtcbiAgICBpMThuS2V5cz86IHN0cmluZ1tdO1xuICAgIGd1YXJkcz86IGFueVtdO1xuICAgIC8qKlxuICAgICAqIERlZmVyTG9hZGluZyBjYW4gYmUgc3BlY2lmaWVkIGdsb2JhbGx5LCBidXQgYWxzbyBwZXIgY29tcG9uZW50LlxuICAgICAqIFNvbWUgY29tcG9uZW50cyByZXF1aXJlIGRpcmVjdCBsb2FkaW5nIHdoaWxlIGl0J3Mgbm90IGluaXRpYWxseVxuICAgICAqIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgKi9cbiAgICBkZWZlckxvYWRpbmc/OiBEZWZlckxvYWRpbmdTdHJhdGVneTtcbn1cbi8qKiBTdHJhdGVneSB0byBjb250cm9sIHRoZSBsb2FkaW5nIHN0cmF0ZWd5IG9mIERPTSBlbGVtZW50cy4gKi9cbmV4cG9ydCBkZWNsYXJlIGVudW0gRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIC8qKiBEZWZlcnMgbG9hZGluZyBvZiBET00gZWxlbWVudHMgdW50aWwgZWxlbWVudCBpcyBuZWFyL2luIHRoZSB1c2VycyB2aWV3IHBvcnQgKi9cbiAgICBERUZFUiA9IFwiREVGRVJSRUQtTE9BRElOR1wiLFxuICAgIC8qKiBSZW5kZXJzIHRoZSBET00gaW5zdGFudGx5IHdpdGhvdXQgYmVpbmcgY29uY2VybmVkIHdpdGggdGhlIHZpZXcgcG9ydCAqL1xuICAgIElOU1RBTlQgPSBcIklOU1RBTlQtTE9BRElOR1wiXG59XG5leHBvcnQgaW50ZXJmYWNlIENNU0NvbXBvbmVudENvbmZpZyBleHRlbmRzIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnLCBKc3BJbmNsdWRlQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgICBbY29tcG9uZW50VHlwZTogc3RyaW5nXTogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZU1vZHVsZUNvbmZpZyB7XG4gICAgLyoqXG4gICAgICogTGF6eSByZXNvbHZlZCBmZWF0dXJlIG1vZHVsZVxuICAgICAqL1xuICAgIG1vZHVsZT86ICgpID0+IFByb21pc2U8YW55PjtcbiAgICAvKipcbiAgICAgKiBMYXp5IHJlc29sdmVkIGRlcGVuZGVuY3kgbW9kdWxlc1xuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcz86ICgoKSA9PiBQcm9taXNlPGFueT4pW107XG4gICAgLyoqXG4gICAgICogQ21zIGNvbXBvbmVudHMgY292ZXJlZCBieSB0aGlzIGZlYXR1cmVcbiAgICAgKi9cbiAgICBjbXNDb21wb25lbnRzPzogc3RyaW5nW107XG59XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBDbXNDb25maWcgZXh0ZW5kcyBPY2NDb25maWcgaW1wbGVtZW50cyBBdXRoQ29uZmlnLCBLeW1hQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICAgICAgY2xpZW50X2lkPzogc3RyaW5nO1xuICAgICAgICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICAgICAgICBreW1hX2NsaWVudF9pZD86IHN0cmluZztcbiAgICAgICAga3ltYV9jbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICAgIH07XG4gICAgZmVhdHVyZU1vZHVsZXM/OiB7XG4gICAgICAgIFtmZWF0dXJlTmFtZTogc3RyaW5nXTogRmVhdHVyZU1vZHVsZUNvbmZpZztcbiAgICB9O1xuICAgIGNtc0NvbXBvbmVudHM/OiBDTVNDb21wb25lbnRDb25maWc7XG59XG4iXX0=