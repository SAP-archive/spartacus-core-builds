import { StaticProvider } from '@angular/core';
import { Route } from '@angular/router';
import { OccConfig } from '../../occ/config/occ-config';
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
/**
 * Configuration of the CMS component's child routes
 */
export interface CmsComponentChildRoutesConfig {
    /**
     * Route `data` property to apply on the parent (host) route of the CMS child routes.
     */
    parent?: Pick<Route, 'data'>;
    /**
     * Child routes defined by the existence of the CMS component on the page.
     */
    children?: Route[];
}
export interface CmsComponentMapping {
    component?: any;
    providers?: StaticProvider[];
    childRoutes?: Route[] | CmsComponentChildRoutesConfig;
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
export declare abstract class CmsConfig extends OccConfig {
    featureModules?: {
        [featureName: string]: FeatureModuleConfig;
    };
    cmsComponents?: CMSComponentConfig;
}
