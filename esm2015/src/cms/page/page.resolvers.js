/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves the page heading which is used in the UI.
 * @record
 */
export function PageHeadingResolver() { }
if (false) {
    /**
     * @param {...?} args
     * @return {?}
     */
    PageHeadingResolver.prototype.resolveHeading = function (args) { };
}
/**
 * Resolves the page title which is first and foremost
 * used for the page title tag, but could also be used for the
 * page heading in the UI.
 * @record
 */
export function PageTitleResolver() { }
if (false) {
    /**
     * @param {...?} args
     * @return {?}
     */
    PageTitleResolver.prototype.resolveTitle = function (args) { };
}
/**
 * Resolves the page description. The page description is used
 * in the Search Engine Result Page (SERP).
 * @record
 */
export function PageDescriptionResolver() { }
if (false) {
    /**
     * @param {...?} args
     * @return {?}
     */
    PageDescriptionResolver.prototype.resolveDescription = function (args) { };
}
/**
 * Resolves breadcrumbs for the page, which is used in the `BreadcrumbComponent`/
 * @record
 */
export function PageBreadcrumbResolver() { }
if (false) {
    /**
     * @param {...?} args
     * @return {?}
     */
    PageBreadcrumbResolver.prototype.resolveBreadcrumbs = function (args) { };
}
/**
 * Resolves the main image for the page. This is typically used
 * for social sharing (using `og:image` metatag)
 * @record
 */
export function PageImageResolver() { }
if (false) {
    /**
     * @param {...?} args
     * @return {?}
     */
    PageImageResolver.prototype.resolveImage = function (args) { };
}
/**
 * Resolves the robot information for the page. This is used by
 * search engines to understand whether the page and subsequential links
 * should be indexed.
 *
 * @record
 */
export function PageRobotsResolver() { }
if (false) {
    /**
     * @param {...?} args
     * @return {?}
     */
    PageRobotsResolver.prototype.resolveRobots = function (args) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yZXNvbHZlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSx5Q0FFQzs7Ozs7O0lBREMsbUVBQTRDOzs7Ozs7OztBQVE5Qyx1Q0FFQzs7Ozs7O0lBREMsK0RBQTBDOzs7Ozs7O0FBTzVDLDZDQUVDOzs7Ozs7SUFEQywyRUFBZ0Q7Ozs7OztBQU1sRCw0Q0FFQzs7Ozs7O0lBREMsMEVBQStDOzs7Ozs7O0FBT2pELHVDQUVDOzs7Ozs7SUFEQywrREFBMEM7Ozs7Ozs7OztBQVM1Qyx3Q0FFQzs7Ozs7O0lBREMsaUVBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBoZWFkaW5nIHdoaWNoIGlzIHVzZWQgaW4gdGhlIFVJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VIZWFkaW5nUmVzb2x2ZXIge1xuICByZXNvbHZlSGVhZGluZyguLi5hcmdzKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlIHdoaWNoIGlzIGZpcnN0IGFuZCBmb3JlbW9zdFxuICogdXNlZCBmb3IgdGhlIHBhZ2UgdGl0bGUgdGFnLCBidXQgY291bGQgYWxzbyBiZSB1c2VkIGZvciB0aGVcbiAqIHBhZ2UgaGVhZGluZyBpbiB0aGUgVUkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVRpdGxlUmVzb2x2ZXIge1xuICByZXNvbHZlVGl0bGUoLi4uYXJncyk6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkZXNjcmlwdGlvbi4gVGhlIHBhZ2UgZGVzY3JpcHRpb24gaXMgdXNlZFxuICogaW4gdGhlIFNlYXJjaCBFbmdpbmUgUmVzdWx0IFBhZ2UgKFNFUlApLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VEZXNjcmlwdGlvblJlc29sdmVyIHtcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKC4uLmFyZ3MpOiBPYnNlcnZhYmxlPHN0cmluZz47XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYnJlYWRjcnVtYnMgZm9yIHRoZSBwYWdlLCB3aGljaCBpcyB1c2VkIGluIHRoZSBgQnJlYWRjcnVtYkNvbXBvbmVudGAvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIHJlc29sdmVCcmVhZGNydW1icyguLi5hcmdzKTogT2JzZXJ2YWJsZTxhbnlbXT47XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIG1haW4gaW1hZ2UgZm9yIHRoZSBwYWdlLiBUaGlzIGlzIHR5cGljYWxseSB1c2VkXG4gKiBmb3Igc29jaWFsIHNoYXJpbmcgKHVzaW5nIGBvZzppbWFnZWAgbWV0YXRhZylcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlSW1hZ2VSZXNvbHZlciB7XG4gIHJlc29sdmVJbWFnZSguLi5hcmdzKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSByb2JvdCBpbmZvcm1hdGlvbiBmb3IgdGhlIHBhZ2UuIFRoaXMgaXMgdXNlZCBieVxuICogc2VhcmNoIGVuZ2luZXMgdG8gdW5kZXJzdGFuZCB3aGV0aGVyIHRoZSBwYWdlIGFuZCBzdWJzZXF1ZW50aWFsIGxpbmtzXG4gKiBzaG91bGQgYmUgaW5kZXhlZC5cbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgcmVzb2x2ZVJvYm90cyguLi5hcmdzKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPjtcbn1cbiJdfQ==