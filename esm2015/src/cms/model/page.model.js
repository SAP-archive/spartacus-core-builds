/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @enum {string} */
const PageRobotsMeta = {
    INDEX: 'INDEX',
    NOINDEX: 'NOINDEX',
    FOLLOW: 'FOLLOW',
    NOFOLLOW: 'NOFOLLOW',
};
export { PageRobotsMeta };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvbW9kZWwvcGFnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsMEJBU0M7OztJQVJDLHNCQUFnQjs7SUFDaEIsb0JBQWM7O0lBQ2Qsb0JBQWM7O0lBQ2QscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQix3QkFBa0I7O0lBQ2xCLHFCQUEwQzs7SUFDMUMsMEJBQWlCOzs7Ozs7QUFNbkIsdUNBR0M7OztJQUZDLGlDQUFZOztJQUNaLHVDQUE0Qjs7Ozs7OztBQU85Qiw4QkFpQ0M7Ozs7Ozs7O0lBM0JDLHlCQUFlOzs7OztJQUtmLDJCQUFpQjs7Ozs7SUFLakIsK0JBQXFCOzs7Ozs7SUFNckIsMEJBQTBCOzs7OztJQUsxQix5QkFBZTs7Ozs7SUFLZiwrQkFBb0I7Ozs7SUFJcEIsT0FBUSxPQUFPO0lBQ2YsU0FBVSxTQUFTO0lBQ25CLFFBQVMsUUFBUTtJQUNqQixVQUFXLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gIHBhZ2VJZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlPzogc3RyaW5nO1xuICBsb2FkVGltZT86IG51bWJlcjtcbiAgc2xvdHM6IHsgW2tleTogc3RyaW5nXTogQ29udGVudFNsb3REYXRhIH07XG4gIHByb3BlcnRpZXM/OiBhbnk7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY21zIHN0cnVjdHVyZSBmb3IgcGFnZXMsIHNsb3RzIGFuZCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENtc1N0cnVjdHVyZU1vZGVsIHtcbiAgcGFnZT86IFBhZ2U7XG4gIGNvbXBvbmVudHM/OiBDbXNDb21wb25lbnRbXTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwYWdlIG1ldGEgZGF0YSB0aGF0IGNhbiBiZSB1c2VkXG4gKiB0byByZXNvbHZlIHBhZ2UgZGF0YSBhbmQgc2VvIHJlbGF0ZWQgZGF0YS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlTWV0YSB7XG4gIC8qKlxuICAgKiB0aGUgcGFnZSB0aXRsZSBpcyB1c2VkIGZvciB0aGUgcGFnZSB0aXRsZSB0YWcgd2hpY2hcbiAgICogaXMgdmlzaWJsZSBpbiB0aGUgYnJvd3NlciBuYXZpZ2F0aW9uIGFzIHdlbGwgYXMgaW4gdGhlXG4gICAqIFNlYXJjaCBFbmdpbmUgUmVzdWx0IFBhZ2VcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgcGFnZSBoZWFkaW5nIGlzIHR5cGljYWxseSB1c2VkIGluIHRoZSBVSVxuICAgKi9cbiAgaGVhZGluZz86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIHBhZ2UgZGVzY3JpcHRpb24gaXMgdXNlZCBpbiB0aGUgU2VhcmNoIEVuZ2luZSBSZXN1bHQgUGFnZVxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRoZSByb2JvdHMgaW5mb3JtYXRpb24gZHJpdmVzIHNlYXJjaCBlbmdpbmVzIHRvIGluZGV4IHRoZSBwYWdlIGFuZFxuICAgKiBmb2xsb3cgbGlua3MgaW4gdGhlIHBhZ2VcbiAgICovXG4gIHJvYm90cz86IFBhZ2VSb2JvdHNNZXRhW107XG5cbiAgLyoqXG4gICAqIGltYWdlIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBvZzppbWFnZSBtZXRhdGFnXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIGxpc3Qgb2YgYnJlYWRjcnVtYnMgdGhhdCBjYW4gYmUgcmVuZGVyZWQgaW4gdGhlIHBhZ2UgVUkuXG4gICAqL1xuICBicmVhZGNydW1icz86IGFueVtdO1xufVxuXG5leHBvcnQgZW51bSBQYWdlUm9ib3RzTWV0YSB7XG4gIElOREVYID0gJ0lOREVYJyxcbiAgTk9JTkRFWCA9ICdOT0lOREVYJyxcbiAgRk9MTE9XID0gJ0ZPTExPVycsXG4gIE5PRk9MTE9XID0gJ05PRk9MTE9XJyxcbn1cbiJdfQ==