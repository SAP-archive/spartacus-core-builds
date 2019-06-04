/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 * @abstract
 */
CmsStructureConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CmsStructureConfig, _super);
    function CmsStructureConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CmsStructureConfig;
}(CmsConfig));
/**
 * The `CmsStructureConfig` is used to build pages in Spartacus by configuration
 * instead of using a backend CMS system. The configuration can be used to build
 * complete pages or parts of a page. The `CmsStructureConfig` is optimized to
 * only require the necessary properties. Adapter logic is applied to serialize
 * the `CmsStructureConfig` into the required UI model.
 * @abstract
 */
export { CmsStructureConfig };
if (false) {
    /** @type {?} */
    CmsStructureConfig.prototype.cmsStructure;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7OztBQVN6QyxtQ0E4QkM7Ozs7Ozs7OztJQXhCQyxzQ0FBd0I7O0lBRXhCLCtCQUFnQjs7SUFFaEIsNkJBQWM7Ozs7Ozs7SUFPZCw4QkFBZTs7Ozs7O0lBTWYsaUNBQWtCOzs7Ozs7SUFNbEIsOEJBQTRDOzs7Ozs7QUFNOUMsd0NBRUM7Ozs7Ozs7QUFPRCx1Q0FHQzs7O0lBRkMseUNBQXdCOztJQUN4Qix1Q0FBaUI7Ozs7Ozs7Ozs7QUFVbkI7Ozs7Ozs7OztJQUFpRCw4Q0FBUztJQUExRDs7SUFNQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBaUQsU0FBUyxHQU16RDs7Ozs7Ozs7Ozs7O0lBTEMsMENBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnLi9jbXMtY29uZmlnJztcblxuLyoqXG4gKiBUaGUgYENtc1BhZ2VDb25maWdgIGlzIHVzZWQgdG8gYnVpbGQgcGFnZXMgYnkgY29uZmlndXJhdGlvbi5cbiAqIFRoZSBpbnRlcmZhY2VzIGFyZSBkZXNpZ25lZCB0byBoYXZlIGEgY2xlYW4gY29uZmlndXJhdGlvbiBmb3JcbiAqIHN0YXRpYyBDTVMgc3RydWN0dXJlLiBPcmRpbmFyeSBhdHRyaWJ1dGVzIHRoYXQgYXJlIG5vdFxuICogcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYWJsZSBwYWdlcyBoYXZlIGJlZW4gbGVmdCBvdXQgYW5kXG4gKiB3aWxsIG5vdCBiZSBzZXJpYWxpemVkIGluIHRoZSBhZGFwdGVyIGxvZ2ljLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhZ2VDb25maWcge1xuICAvKipcbiAgICogV2hlbiB0aGUgYGlnbm9yZUJhY2tlbmRgIGlzIHNldCB0byB0cnVlLCB0aGUgQ01TIGJhY2tlbmRcbiAgICogd2lsbCBub3QgYmUgY29uc3VtZWQuIFRoaXMgc2F2ZXMgbmV0d29yayBsYXRlbmN5IGFuZCBpc1xuICAgKiB1c2VmdWwgZm9yIGNvbW1vZGl0eSBjb21tZXJjZSBwYWdlcy5cbiAgICogKi9cbiAgaWdub3JlQmFja2VuZD86IGJvb2xlYW47XG5cbiAgcGFnZUlkPzogc3RyaW5nO1xuXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYWdlIHRpdGxlIGlzIHR5cGljYWxseSB1c2VkIHRvIGRpc3BsYXkgdGhlIHBhZ2UgaGVhZGluZ1xuICAgKiBhcyB3ZWxsIGFzIGZvciB0aGUgcGFnZSB0aXRsZSB0YWcuIFRoZSBsYXR0ZXIgaXMgdXNlZCBmb3IgYnJvd3NlclxuICAgKiBuYXZpZ2F0aW9uIGFzIHdlbGwgYXMgU0VPIGFuZCBzb2NpYWwgc2hhcmUgcGxhdGZvcm1zLlxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRoZSB0ZW1wbGF0ZSBpcyB1c2VkIHRvIGJpbmQgdG8gdGhlIGxheW91dFxuICAgKiBjb25maWd1cmF0aW9uIGFuZCBjc3MgbGF5b3V0IGNsYXNzXG4gICAqL1xuICB0ZW1wbGF0ZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBhZ2Ugc2xvdHMgcmVwcmVzZW50IHZhcmlvdXMgc2VjdGlvbnMgb24gdGhlIHBhZ2UgdGhhdFxuICAgKiBjYW4gY29udGFpbiBjb21wb25lbnRzLlxuICAgKi9cbiAgc2xvdHM6IHsgW2tleTogc3RyaW5nXTogQ21zUGFnZVNsb3RDb25maWcgfTtcbn1cblxuLyoqXG4gKiBUaGUgYENtc1BhZ2VTbG90c0NvbmZpZ2AgKHBsdXJhbCkgaG9sZHMgYENtc1BhZ2VTbG90Q29uZmlnYCBvYmplY3RzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhZ2VTbG90c0NvbmZpZyB7XG4gIFtrZXk6IHN0cmluZ106IENtc1BhZ2VTbG90Q29uZmlnO1xufVxuXG4vKipcbiAqIFRoZSBgQ21zUGFnZVNsb3RDb25maWdgIGlzIGEgc2ltcGxpZmllZCBjb25maWd1cmF0aW9uIG1vZGVsXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBzbG90cyBpbiBzdGF0aWMgY29uZmlndXJhdGlvbixcbiAqIHJhdGhlciB0aGFuIGxvYWRpbmcgZnJvbSBhIGJhY2tlbmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUGFnZVNsb3RDb25maWcge1xuICBjb21wb25lbnRJZHM/OiBzdHJpbmdbXTtcbiAgcHJvcGVydGllcz86IGFueTtcbn1cblxuLyoqXG4gKiBUaGUgYENtc1N0cnVjdHVyZUNvbmZpZ2AgaXMgdXNlZCB0byBidWlsZCBwYWdlcyBpbiBTcGFydGFjdXMgYnkgY29uZmlndXJhdGlvblxuICogaW5zdGVhZCBvZiB1c2luZyBhIGJhY2tlbmQgQ01TIHN5c3RlbS4gVGhlIGNvbmZpZ3VyYXRpb24gY2FuIGJlIHVzZWQgdG8gYnVpbGRcbiAqIGNvbXBsZXRlIHBhZ2VzIG9yIHBhcnRzIG9mIGEgcGFnZS4gVGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdgIGlzIG9wdGltaXplZCB0b1xuICogb25seSByZXF1aXJlIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllcy4gQWRhcHRlciBsb2dpYyBpcyBhcHBsaWVkIHRvIHNlcmlhbGl6ZVxuICogdGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdgIGludG8gdGhlIHJlcXVpcmVkIFVJIG1vZGVsLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zU3RydWN0dXJlQ29uZmlnIGV4dGVuZHMgQ21zQ29uZmlnIHtcbiAgY21zU3RydWN0dXJlOiB7XG4gICAgY29tcG9uZW50cz86IHsgW2tleTogc3RyaW5nXTogQ29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55IH07XG4gICAgcGFnZXM/OiBDbXNQYWdlQ29uZmlnW107XG4gICAgc2xvdHM/OiBDbXNQYWdlU2xvdHNDb25maWc7XG4gIH07XG59XG4iXX0=