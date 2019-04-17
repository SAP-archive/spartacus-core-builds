/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CmsConfig } from './cms-config';
/**
 * The `CmsPageConfig` is used to build pages by configuration.
 * The interfaces are designed to have a clean configuration for
 * static CMS structure. Ordinary attributes that are not
 * required for configurable pages have been left out and
 * will not be serialized in the adapter logic.
 * @record
 */
export function CmsPageConfig() { }
if (false) {
    /**
     * When the `ignoreBackend` is set to true, the CMS backend
     * will not be consumed. This saves network latency and is
     * useful for commodity commerce pages.
     *
     * @type {?|undefined}
     */
    CmsPageConfig.prototype.ignoreBackend;
    /** @type {?|undefined} */
    CmsPageConfig.prototype.pageId;
    /** @type {?|undefined} */
    CmsPageConfig.prototype.type;
    /**
     * The page title is typically used to display the page heading
     * as well as for the page title tag. The latter is used for browser
     * navigation as well as SEO and social share platforms.
     * @type {?|undefined}
     */
    CmsPageConfig.prototype.title;
    /**
     * the template is used to bind to the layout
     * configuration and css layout class
     * @type {?|undefined}
     */
    CmsPageConfig.prototype.template;
    /**
     * The page slots represent various sections on the page that
     * can contain components.
     * @type {?}
     */
    CmsPageConfig.prototype.slots;
}
/**
 * The `CmsPageSlotsConfig` (plural) holds `CmsPageSlotConfig` objects.
 * @record
 */
export function CmsPageSlotsConfig() { }
/**
 * The `CmsPageSlotConfig` is a simplified configuration model
 * that can be used to configure slots in static configuration,
 * rather than loading from a backend.
 * @record
 */
export function CmsPageSlotConfig() { }
if (false) {
    /** @type {?|undefined} */
    CmsPageSlotConfig.prototype.componentIds;
    /** @type {?|undefined} */
    CmsPageSlotConfig.prototype.properties;
}
/**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 * @abstract
 */
export class CmsStructureConfig extends CmsConfig {
}
if (false) {
    /** @type {?} */
    CmsStructureConfig.prototype.cmsStructure;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7O0FBU3pDLG1DQThCQzs7Ozs7Ozs7O0lBeEJDLHNDQUF3Qjs7SUFFeEIsK0JBQWdCOztJQUVoQiw2QkFBYzs7Ozs7OztJQU9kLDhCQUFlOzs7Ozs7SUFNZixpQ0FBa0I7Ozs7OztJQU1sQiw4QkFBNEM7Ozs7OztBQU05Qyx3Q0FFQzs7Ozs7OztBQU9ELHVDQUdDOzs7SUFGQyx5Q0FBd0I7O0lBQ3hCLHVDQUFpQjs7Ozs7Ozs7OztBQVVuQixNQUFNLE9BQWdCLGtCQUFtQixTQUFRLFNBQVM7Q0FNekQ7OztJQUxDLDBDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJy4vY21zLWNvbmZpZyc7XG5cbi8qKlxuICogVGhlIGBDbXNQYWdlQ29uZmlnYCBpcyB1c2VkIHRvIGJ1aWxkIHBhZ2VzIGJ5IGNvbmZpZ3VyYXRpb24uXG4gKiBUaGUgaW50ZXJmYWNlcyBhcmUgZGVzaWduZWQgdG8gaGF2ZSBhIGNsZWFuIGNvbmZpZ3VyYXRpb24gZm9yXG4gKiBzdGF0aWMgQ01TIHN0cnVjdHVyZS4gT3JkaW5hcnkgYXR0cmlidXRlcyB0aGF0IGFyZSBub3RcbiAqIHJlcXVpcmVkIGZvciBjb25maWd1cmFibGUgcGFnZXMgaGF2ZSBiZWVuIGxlZnQgb3V0IGFuZFxuICogd2lsbCBub3QgYmUgc2VyaWFsaXplZCBpbiB0aGUgYWRhcHRlciBsb2dpYy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbXNQYWdlQ29uZmlnIHtcbiAgLyoqXG4gICAqIFdoZW4gdGhlIGBpZ25vcmVCYWNrZW5kYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIENNUyBiYWNrZW5kXG4gICAqIHdpbGwgbm90IGJlIGNvbnN1bWVkLiBUaGlzIHNhdmVzIG5ldHdvcmsgbGF0ZW5jeSBhbmQgaXNcbiAgICogdXNlZnVsIGZvciBjb21tb2RpdHkgY29tbWVyY2UgcGFnZXMuXG4gICAqICovXG4gIGlnbm9yZUJhY2tlbmQ/OiBib29sZWFuO1xuXG4gIHBhZ2VJZD86IHN0cmluZztcblxuICB0eXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGFnZSB0aXRsZSBpcyB0eXBpY2FsbHkgdXNlZCB0byBkaXNwbGF5IHRoZSBwYWdlIGhlYWRpbmdcbiAgICogYXMgd2VsbCBhcyBmb3IgdGhlIHBhZ2UgdGl0bGUgdGFnLiBUaGUgbGF0dGVyIGlzIHVzZWQgZm9yIGJyb3dzZXJcbiAgICogbmF2aWdhdGlvbiBhcyB3ZWxsIGFzIFNFTyBhbmQgc29jaWFsIHNoYXJlIHBsYXRmb3Jtcy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgdGVtcGxhdGUgaXMgdXNlZCB0byBiaW5kIHRvIHRoZSBsYXlvdXRcbiAgICogY29uZmlndXJhdGlvbiBhbmQgY3NzIGxheW91dCBjbGFzc1xuICAgKi9cbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYWdlIHNsb3RzIHJlcHJlc2VudCB2YXJpb3VzIHNlY3Rpb25zIG9uIHRoZSBwYWdlIHRoYXRcbiAgICogY2FuIGNvbnRhaW4gY29tcG9uZW50cy5cbiAgICovXG4gIHNsb3RzOiB7IFtrZXk6IHN0cmluZ106IENtc1BhZ2VTbG90Q29uZmlnIH07XG59XG5cbi8qKlxuICogVGhlIGBDbXNQYWdlU2xvdHNDb25maWdgIChwbHVyYWwpIGhvbGRzIGBDbXNQYWdlU2xvdENvbmZpZ2Agb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbXNQYWdlU2xvdHNDb25maWcge1xuICBba2V5OiBzdHJpbmddOiBDbXNQYWdlU2xvdENvbmZpZztcbn1cblxuLyoqXG4gKiBUaGUgYENtc1BhZ2VTbG90Q29uZmlnYCBpcyBhIHNpbXBsaWZpZWQgY29uZmlndXJhdGlvbiBtb2RlbFxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgc2xvdHMgaW4gc3RhdGljIGNvbmZpZ3VyYXRpb24sXG4gKiByYXRoZXIgdGhhbiBsb2FkaW5nIGZyb20gYSBiYWNrZW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhZ2VTbG90Q29uZmlnIHtcbiAgY29tcG9uZW50SWRzPzogc3RyaW5nW107XG4gIHByb3BlcnRpZXM/OiBhbnk7XG59XG5cbi8qKlxuICogVGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdgIGlzIHVzZWQgdG8gYnVpbGQgcGFnZXMgaW4gU3BhcnRhY3VzIGJ5IGNvbmZpZ3VyYXRpb25cbiAqIGluc3RlYWQgb2YgdXNpbmcgYSBiYWNrZW5kIENNUyBzeXN0ZW0uIFRoZSBjb25maWd1cmF0aW9uIGNhbiBiZSB1c2VkIHRvIGJ1aWxkXG4gKiBjb21wbGV0ZSBwYWdlcyBvciBwYXJ0cyBvZiBhIHBhZ2UuIFRoZSBgQ21zU3RydWN0dXJlQ29uZmlnYCBpcyBvcHRpbWl6ZWQgdG9cbiAqIG9ubHkgcmVxdWlyZSB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMuIEFkYXB0ZXIgbG9naWMgaXMgYXBwbGllZCB0byBzZXJpYWxpemVcbiAqIHRoZSBgQ21zU3RydWN0dXJlQ29uZmlnYCBpbnRvIHRoZSByZXF1aXJlZCBVSSBtb2RlbC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1N0cnVjdHVyZUNvbmZpZyBleHRlbmRzIENtc0NvbmZpZyB7XG4gIGNtc1N0cnVjdHVyZToge1xuICAgIGNvbXBvbmVudHM/OiB7IFtrZXk6IHN0cmluZ106IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB8IGFueSB9O1xuICAgIHBhZ2VzPzogQ21zUGFnZUNvbmZpZ1tdO1xuICAgIHNsb3RzPzogQ21zUGFnZVNsb3RzQ29uZmlnO1xuICB9O1xufVxuIl19