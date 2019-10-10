/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Page() { }
if (false) {
    /** @type {?|undefined} */
    Page.prototype.pageId;
    /** @type {?|undefined} */
    Page.prototype.name;
    /** @type {?|undefined} */
    Page.prototype.type;
    /** @type {?|undefined} */
    Page.prototype.title;
    /** @type {?|undefined} */
    Page.prototype.template;
    /** @type {?|undefined} */
    Page.prototype.loadTime;
    /** @type {?} */
    Page.prototype.slots;
    /** @type {?|undefined} */
    Page.prototype.properties;
    /** @type {?|undefined} */
    Page.prototype.label;
}
/**
 * Represents the cms structure for pages, slots and components.
 * @record
 */
export function CmsStructureModel() { }
if (false) {
    /** @type {?|undefined} */
    CmsStructureModel.prototype.page;
    /** @type {?|undefined} */
    CmsStructureModel.prototype.components;
}
/**
 * Represents the page meta data that can be used
 * to resolve page data and seo related data.
 * @record
 */
export function PageMeta() { }
if (false) {
    /**
     * the page title is used for the page title tag which
     * is visible in the browser navigation as well as in the
     * Search Engine Result Page
     * @type {?|undefined}
     */
    PageMeta.prototype.title;
    /**
     * the page heading is typically used in the UI
     * @type {?|undefined}
     */
    PageMeta.prototype.heading;
    /**
     * the page description is used in the Search Engine Result Page
     * @type {?|undefined}
     */
    PageMeta.prototype.description;
    /**
     * the robots information drives search engines to index the page and
     * follow links in the page
     * @type {?|undefined}
     */
    PageMeta.prototype.robots;
    /**
     * image that can be added to the og:image metatag
     * @type {?|undefined}
     */
    PageMeta.prototype.image;
    /**
     * the list of breadcrumbs that can be rendered in the page UI.
     * @type {?|undefined}
     */
    PageMeta.prototype.breadcrumbs;
}
/**
 * @record
 */
export function BreadcrumbMeta() { }
if (false) {
    /** @type {?} */
    BreadcrumbMeta.prototype.label;
    /** @type {?} */
    BreadcrumbMeta.prototype.link;
}
/** @enum {string} */
var PageRobotsMeta = {
    INDEX: 'INDEX',
    NOINDEX: 'NOINDEX',
    FOLLOW: 'FOLLOW',
    NOFOLLOW: 'NOFOLLOW',
};
export { PageRobotsMeta };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvbW9kZWwvcGFnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsMEJBVUM7OztJQVRDLHNCQUFnQjs7SUFDaEIsb0JBQWM7O0lBQ2Qsb0JBQWM7O0lBQ2QscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQix3QkFBa0I7O0lBQ2xCLHFCQUEwQzs7SUFDMUMsMEJBQWlCOztJQUNqQixxQkFBZTs7Ozs7O0FBTWpCLHVDQUdDOzs7SUFGQyxpQ0FBWTs7SUFDWix1Q0FBNEI7Ozs7Ozs7QUFPOUIsOEJBaUNDOzs7Ozs7OztJQTNCQyx5QkFBZTs7Ozs7SUFLZiwyQkFBaUI7Ozs7O0lBS2pCLCtCQUFxQjs7Ozs7O0lBTXJCLDBCQUEwQjs7Ozs7SUFLMUIseUJBQWU7Ozs7O0lBS2YsK0JBQStCOzs7OztBQUdqQyxvQ0FHQzs7O0lBRkMsK0JBQWM7O0lBQ2QsOEJBQWE7Ozs7SUFJYixPQUFRLE9BQU87SUFDZixTQUFVLFNBQVM7SUFDbkIsUUFBUyxRQUFRO0lBQ2pCLFVBQVcsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlIHtcbiAgcGFnZUlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGxvYWRUaW1lPzogbnVtYmVyO1xuICBzbG90czogeyBba2V5OiBzdHJpbmddOiBDb250ZW50U2xvdERhdGEgfTtcbiAgcHJvcGVydGllcz86IGFueTtcbiAgbGFiZWw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY21zIHN0cnVjdHVyZSBmb3IgcGFnZXMsIHNsb3RzIGFuZCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1N0cnVjdHVyZU1vZGVsIHtcbiAgcGFnZT86IFBhZ2U7XG4gIGNvbXBvbmVudHM/OiBDbXNDb21wb25lbnRbXTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwYWdlIG1ldGEgZGF0YSB0aGF0IGNhbiBiZSB1c2VkXG4gKiB0byByZXNvbHZlIHBhZ2UgZGF0YSBhbmQgc2VvIHJlbGF0ZWQgZGF0YS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlTWV0YSB7XG4gIC8qKlxuICAgKiB0aGUgcGFnZSB0aXRsZSBpcyB1c2VkIGZvciB0aGUgcGFnZSB0aXRsZSB0YWcgd2hpY2hcbiAgICogaXMgdmlzaWJsZSBpbiB0aGUgYnJvd3NlciBuYXZpZ2F0aW9uIGFzIHdlbGwgYXMgaW4gdGhlXG4gICAqIFNlYXJjaCBFbmdpbmUgUmVzdWx0IFBhZ2VcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgcGFnZSBoZWFkaW5nIGlzIHR5cGljYWxseSB1c2VkIGluIHRoZSBVSVxuICAgKi9cbiAgaGVhZGluZz86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIHBhZ2UgZGVzY3JpcHRpb24gaXMgdXNlZCBpbiB0aGUgU2VhcmNoIEVuZ2luZSBSZXN1bHQgUGFnZVxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRoZSByb2JvdHMgaW5mb3JtYXRpb24gZHJpdmVzIHNlYXJjaCBlbmdpbmVzIHRvIGluZGV4IHRoZSBwYWdlIGFuZFxuICAgKiBmb2xsb3cgbGlua3MgaW4gdGhlIHBhZ2VcbiAgICovXG4gIHJvYm90cz86IFBhZ2VSb2JvdHNNZXRhW107XG5cbiAgLyoqXG4gICAqIGltYWdlIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBvZzppbWFnZSBtZXRhdGFnXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIGxpc3Qgb2YgYnJlYWRjcnVtYnMgdGhhdCBjYW4gYmUgcmVuZGVyZWQgaW4gdGhlIHBhZ2UgVUkuXG4gICAqL1xuICBicmVhZGNydW1icz86IEJyZWFkY3J1bWJNZXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk1ldGEge1xuICBsYWJlbDogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFBhZ2VSb2JvdHNNZXRhIHtcbiAgSU5ERVggPSAnSU5ERVgnLFxuICBOT0lOREVYID0gJ05PSU5ERVgnLFxuICBGT0xMT1cgPSAnRk9MTE9XJyxcbiAgTk9GT0xMT1cgPSAnTk9GT0xMT1cnLFxufVxuIl19