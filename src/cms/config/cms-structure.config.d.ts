import { ContentSlotComponentData } from '../model/content-slot-component-data.model';
import { CmsConfig } from './cms-config';
/**
 * The `CmsPageConfig` is used to build pages by configuration.
 * The interfaces are designed to have a clean configuration for
 * static CMS structure. Ordinary attributes that are not
 * required for configurable pages have been left out and
 * will not be serialized in the adapter logic.
 */
import * as ɵngcc0 from '@angular/core';
export interface CmsPageConfig {
    /**
     * When the `ignoreBackend` is set to true, the CMS backend
     * will not be consumed. This saves network latency and is
     * useful for commodity commerce pages.
     * */
    ignoreBackend?: boolean;
    pageId?: string;
    type?: string;
    /**
     * The page title is typically used to display the page heading
     * as well as for the page title tag. The latter is used for browser
     * navigation as well as SEO and social share platforms.
     */
    title?: string;
    /**
     * the template is used to bind to the layout
     * configuration and css layout class
     */
    template?: string;
    /**
     * The page slots represent various sections on the page that
     * can contain components.
     */
    slots: {
        [key: string]: CmsPageSlotConfig;
    };
}
/**
 * The `CmsPageSlotsConfig` (plural) holds `CmsPageSlotConfig` objects.
 */
export interface CmsPageSlotsConfig {
    [key: string]: CmsPageSlotConfig;
}
/**
 * The `CmsPageSlotConfig` is a simplified configuration model
 * that can be used to configure slots in static configuration,
 * rather than loading from a backend.
 */
export interface CmsPageSlotConfig {
    componentIds?: string[];
    properties?: any;
}
/**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 */
export declare abstract class CmsStructureConfig extends CmsConfig {
    cmsStructure: {
        components?: {
            [key: string]: ContentSlotComponentData | any;
        };
        pages?: CmsPageConfig[];
        slots?: CmsPageSlotsConfig;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsStructureConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS5jb25maWcuZC50cyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS5jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuL2Ntcy1jb25maWcnO1xuLyoqXG4gKiBUaGUgYENtc1BhZ2VDb25maWdgIGlzIHVzZWQgdG8gYnVpbGQgcGFnZXMgYnkgY29uZmlndXJhdGlvbi5cbiAqIFRoZSBpbnRlcmZhY2VzIGFyZSBkZXNpZ25lZCB0byBoYXZlIGEgY2xlYW4gY29uZmlndXJhdGlvbiBmb3JcbiAqIHN0YXRpYyBDTVMgc3RydWN0dXJlLiBPcmRpbmFyeSBhdHRyaWJ1dGVzIHRoYXQgYXJlIG5vdFxuICogcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYWJsZSBwYWdlcyBoYXZlIGJlZW4gbGVmdCBvdXQgYW5kXG4gKiB3aWxsIG5vdCBiZSBzZXJpYWxpemVkIGluIHRoZSBhZGFwdGVyIGxvZ2ljLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhZ2VDb25maWcge1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGBpZ25vcmVCYWNrZW5kYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIENNUyBiYWNrZW5kXG4gICAgICogd2lsbCBub3QgYmUgY29uc3VtZWQuIFRoaXMgc2F2ZXMgbmV0d29yayBsYXRlbmN5IGFuZCBpc1xuICAgICAqIHVzZWZ1bCBmb3IgY29tbW9kaXR5IGNvbW1lcmNlIHBhZ2VzLlxuICAgICAqICovXG4gICAgaWdub3JlQmFja2VuZD86IGJvb2xlYW47XG4gICAgcGFnZUlkPzogc3RyaW5nO1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHBhZ2UgdGl0bGUgaXMgdHlwaWNhbGx5IHVzZWQgdG8gZGlzcGxheSB0aGUgcGFnZSBoZWFkaW5nXG4gICAgICogYXMgd2VsbCBhcyBmb3IgdGhlIHBhZ2UgdGl0bGUgdGFnLiBUaGUgbGF0dGVyIGlzIHVzZWQgZm9yIGJyb3dzZXJcbiAgICAgKiBuYXZpZ2F0aW9uIGFzIHdlbGwgYXMgU0VPIGFuZCBzb2NpYWwgc2hhcmUgcGxhdGZvcm1zLlxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHRoZSB0ZW1wbGF0ZSBpcyB1c2VkIHRvIGJpbmQgdG8gdGhlIGxheW91dFxuICAgICAqIGNvbmZpZ3VyYXRpb24gYW5kIGNzcyBsYXlvdXQgY2xhc3NcbiAgICAgKi9cbiAgICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgcGFnZSBzbG90cyByZXByZXNlbnQgdmFyaW91cyBzZWN0aW9ucyBvbiB0aGUgcGFnZSB0aGF0XG4gICAgICogY2FuIGNvbnRhaW4gY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBzbG90czoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBDbXNQYWdlU2xvdENvbmZpZztcbiAgICB9O1xufVxuLyoqXG4gKiBUaGUgYENtc1BhZ2VTbG90c0NvbmZpZ2AgKHBsdXJhbCkgaG9sZHMgYENtc1BhZ2VTbG90Q29uZmlnYCBvYmplY3RzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhZ2VTbG90c0NvbmZpZyB7XG4gICAgW2tleTogc3RyaW5nXTogQ21zUGFnZVNsb3RDb25maWc7XG59XG4vKipcbiAqIFRoZSBgQ21zUGFnZVNsb3RDb25maWdgIGlzIGEgc2ltcGxpZmllZCBjb25maWd1cmF0aW9uIG1vZGVsXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBzbG90cyBpbiBzdGF0aWMgY29uZmlndXJhdGlvbixcbiAqIHJhdGhlciB0aGFuIGxvYWRpbmcgZnJvbSBhIGJhY2tlbmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUGFnZVNsb3RDb25maWcge1xuICAgIGNvbXBvbmVudElkcz86IHN0cmluZ1tdO1xuICAgIHByb3BlcnRpZXM/OiBhbnk7XG59XG4vKipcbiAqIFRoZSBgQ21zU3RydWN0dXJlQ29uZmlnYCBpcyB1c2VkIHRvIGJ1aWxkIHBhZ2VzIGluIFNwYXJ0YWN1cyBieSBjb25maWd1cmF0aW9uXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIGEgYmFja2VuZCBDTVMgc3lzdGVtLiBUaGUgY29uZmlndXJhdGlvbiBjYW4gYmUgdXNlZCB0byBidWlsZFxuICogY29tcGxldGUgcGFnZXMgb3IgcGFydHMgb2YgYSBwYWdlLiBUaGUgYENtc1N0cnVjdHVyZUNvbmZpZ2AgaXMgb3B0aW1pemVkIHRvXG4gKiBvbmx5IHJlcXVpcmUgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzLiBBZGFwdGVyIGxvZ2ljIGlzIGFwcGxpZWQgdG8gc2VyaWFsaXplXG4gKiB0aGUgYENtc1N0cnVjdHVyZUNvbmZpZ2AgaW50byB0aGUgcmVxdWlyZWQgVUkgbW9kZWwuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIENtc1N0cnVjdHVyZUNvbmZpZyBleHRlbmRzIENtc0NvbmZpZyB7XG4gICAgY21zU3RydWN0dXJlOiB7XG4gICAgICAgIGNvbXBvbmVudHM/OiB7XG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfCBhbnk7XG4gICAgICAgIH07XG4gICAgICAgIHBhZ2VzPzogQ21zUGFnZUNvbmZpZ1tdO1xuICAgICAgICBzbG90cz86IENtc1BhZ2VTbG90c0NvbmZpZztcbiAgICB9O1xufVxuIl19