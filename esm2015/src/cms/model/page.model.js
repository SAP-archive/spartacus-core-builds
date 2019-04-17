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
}
/** @enum {string} */
const PageRobotsMeta = {
    INDEX: 'INDEX',
    NOINDEX: 'NOINDEX',
    FOLLOW: 'FOLLOW',
    NOFOLLOW: 'NOFOLLOW',
};
export { PageRobotsMeta };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvbW9kZWwvcGFnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsMEJBU0M7OztJQVJDLHNCQUFnQjs7SUFDaEIsb0JBQWM7O0lBQ2Qsb0JBQWM7O0lBQ2QscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQix3QkFBa0I7O0lBQ2xCLHFCQUEwQzs7SUFDMUMsMEJBQWlCOzs7Ozs7QUFNbkIsdUNBR0M7OztJQUZDLGlDQUFZOztJQUNaLHVDQUE0Qjs7Ozs7OztBQU85Qiw4QkE0QkM7Ozs7Ozs7O0lBdEJDLHlCQUFlOzs7OztJQUtmLDJCQUFpQjs7Ozs7SUFLakIsK0JBQXFCOzs7Ozs7SUFNckIsMEJBQTBCOzs7OztJQUsxQix5QkFBZTs7OztJQUlmLE9BQVEsT0FBTztJQUNmLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7SUFDakIsVUFBVyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5cbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlIHtcbiAgcGFnZUlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGxvYWRUaW1lPzogbnVtYmVyO1xuICBzbG90czogeyBba2V5OiBzdHJpbmddOiBDb250ZW50U2xvdERhdGEgfTtcbiAgcHJvcGVydGllcz86IGFueTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjbXMgc3RydWN0dXJlIGZvciBwYWdlcywgc2xvdHMgYW5kIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ21zU3RydWN0dXJlTW9kZWwge1xuICBwYWdlPzogUGFnZTtcbiAgY29tcG9uZW50cz86IENtc0NvbXBvbmVudFtdO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHBhZ2UgbWV0YSBkYXRhIHRoYXQgY2FuIGJlIHVzZWRcbiAqIHRvIHJlc29sdmUgcGFnZSBkYXRhIGFuZCBzZW8gcmVsYXRlZCBkYXRhLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VNZXRhIHtcbiAgLyoqXG4gICAqIHRoZSBwYWdlIHRpdGxlIGlzIHVzZWQgZm9yIHRoZSBwYWdlIHRpdGxlIHRhZyB3aGljaFxuICAgKiBpcyB2aXNpYmxlIGluIHRoZSBicm93c2VyIG5hdmlnYXRpb24gYXMgd2VsbCBhcyBpbiB0aGVcbiAgICogU2VhcmNoIEVuZ2luZSBSZXN1bHQgUGFnZVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRoZSBwYWdlIGhlYWRpbmcgaXMgdHlwaWNhbGx5IHVzZWQgaW4gdGhlIFVJXG4gICAqL1xuICBoZWFkaW5nPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgcGFnZSBkZXNjcmlwdGlvbiBpcyB1c2VkIGluIHRoZSBTZWFyY2ggRW5naW5lIFJlc3VsdCBQYWdlXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIHJvYm90cyBpbmZvcm1hdGlvbiBkcml2ZXMgc2VhcmNoIGVuZ2luZXMgdG8gaW5kZXggdGhlIHBhZ2UgYW5kXG4gICAqIGZvbGxvdyBsaW5rcyBpbiB0aGUgcGFnZVxuICAgKi9cbiAgcm9ib3RzPzogUGFnZVJvYm90c01ldGFbXTtcblxuICAvKipcbiAgICogaW1hZ2UgdGhhdCBjYW4gYmUgYWRkZWQgdG8gdGhlIG9nOmltYWdlIG1ldGF0YWdcbiAgICovXG4gIGltYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBQYWdlUm9ib3RzTWV0YSB7XG4gIElOREVYID0gJ0lOREVYJyxcbiAgTk9JTkRFWCA9ICdOT0lOREVYJyxcbiAgRk9MTE9XID0gJ0ZPTExPVycsXG4gIE5PRk9MTE9XID0gJ05PRk9MTE9XJyxcbn1cbiJdfQ==