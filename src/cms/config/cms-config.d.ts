import { StaticProvider } from '@angular/core';
import { AuthConfig } from '../../auth/config/auth-config';
import { OccConfig } from '../../occ/config/occ-config';
import { Routes } from '@angular/router';
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
}
export declare const JSP_INCLUDE_CMS_COMPONENT_TYPE = "JspIncludeComponent";
export declare const CMS_FLEX_COMPONENT_TYPE = "CMSFlexComponent";
export interface CmsComponentMapping {
    selector?: string;
    providers?: StaticProvider[];
    childRoutes?: Routes;
    disableSSR?: boolean;
    i18nKeys?: string[];
    guards?: any[];
}
export interface CMSComponentConfig extends StandardCmsComponentConfig, JspIncludeCmsComponentConfig {
    [_: string]: CmsComponentMapping;
}
export declare abstract class CmsConfig extends OccConfig implements AuthConfig {
    authentication?: {
        client_id?: string;
        client_secret?: string;
    };
    cmsComponents?: CMSComponentConfig;
}
