/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves the page heading which is used in the UI. The page
 * heading might differ from the page title, which is used to address
 * the page in the browser (history, tabs) and outside the storefront
 * (Goolge, bots, etc).
 * @record
 */
export function PageHeadingResolver() { }
if (false) {
    /**
     * Resolves the page heading.
     *
     * @deprecated since version 1.3
     * Use `resolveHeading()` instead.
     * @param {...?} args
     * @return {?}
     */
    PageHeadingResolver.prototype.resolveHeading = function (args) { };
    /**
     * Resolves the page heading.
     * @return {?}
     */
    PageHeadingResolver.prototype.resolveHeading = function () { };
}
/**
 * Resolves the page title which is first and foremost used
 * for the page title tag, but could also be used for the
 * page heading in the UI.
 * @record
 */
export function PageTitleResolver() { }
if (false) {
    /**
     * Resolves the page title.
     *
     * @deprecated since version 1.3
     * Use `resolveTitle()` instead.
     * @param {...?} args
     * @return {?}
     */
    PageTitleResolver.prototype.resolveTitle = function (args) { };
    /**
     * Resolves the page title.
     * @return {?}
     */
    PageTitleResolver.prototype.resolveTitle = function () { };
}
/**
 * Resolves the page description. The page description is typically used
 * in the Search Engine Result Page (SERP).
 * @record
 */
export function PageDescriptionResolver() { }
if (false) {
    /**
     * Resolves the page description.
     *
     * @deprecated since version 1.3
     * Use `resolveHeading()` instead.
     * @param {...?} args
     * @return {?}
     */
    PageDescriptionResolver.prototype.resolveDescription = function (args) { };
    /**
     * Resolves the page description.
     * @return {?}
     */
    PageDescriptionResolver.prototype.resolveDescription = function () { };
}
/**
 * Resolves breadcrumbs for the page, which is used in the `BreadcrumbComponent`
 * @record
 */
export function PageBreadcrumbResolver() { }
if (false) {
    /**
     * Resolves the breadcrumbs for the page.
     *
     * @deprecated since version 1.3
     * Use `resolveBreadcrumbs()` instead.
     * @param {...?} args
     * @return {?}
     */
    PageBreadcrumbResolver.prototype.resolveBreadcrumbs = function (args) { };
    /**
     * Resolves the breadcrumbs for the page.
     * @return {?}
     */
    PageBreadcrumbResolver.prototype.resolveBreadcrumbs = function () { };
}
/**
 * Provides a method to resolve the the main image for the page.
 * This is typically used for social sharing (for example by using
 * the `og:image` metatag).
 * @record
 */
export function PageImageResolver() { }
if (false) {
    /**
     * Resolves the main image for the page.
     *
     * @deprecated since version 1.3
     * Use `resolveImage()` instead.
     * @param {...?} args
     * @return {?}
     */
    PageImageResolver.prototype.resolveImage = function (args) { };
    /**
     * Resolves the main image for the page.
     * @return {?}
     */
    PageImageResolver.prototype.resolveImage = function () { };
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
     * Resolves the robots for the page.
     *
     * @deprecated since version 1.3
     * Use `resolveRobots()` instead.
     * @param {...?} args
     * @return {?}
     */
    PageRobotsResolver.prototype.resolveRobots = function (args) { };
    /**
     * Resolves the robots for the page.
     * @return {?}
     */
    PageRobotsResolver.prototype.resolveRobots = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yZXNvbHZlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQSx5Q0FjQzs7Ozs7Ozs7OztJQU5DLG1FQUE0Qzs7Ozs7SUFLNUMsK0RBQXFDOzs7Ozs7OztBQVF2Qyx1Q0FjQzs7Ozs7Ozs7OztJQU5DLCtEQUEwQzs7Ozs7SUFLMUMsMkRBQW1DOzs7Ozs7O0FBT3JDLDZDQWNDOzs7Ozs7Ozs7O0lBTkMsMkVBQWdEOzs7OztJQUtoRCx1RUFBeUM7Ozs7OztBQU0zQyw0Q0FjQzs7Ozs7Ozs7OztJQU5DLDBFQUErQzs7Ozs7SUFLL0Msc0VBQXdDOzs7Ozs7OztBQVExQyx1Q0FjQzs7Ozs7Ozs7OztJQU5DLCtEQUEwQzs7Ozs7SUFLMUMsMkRBQW1DOzs7Ozs7Ozs7QUFTckMsd0NBY0M7Ozs7Ozs7Ozs7SUFOQyxpRUFBcUQ7Ozs7O0lBS3JELDZEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgaGVhZGluZyB3aGljaCBpcyB1c2VkIGluIHRoZSBVSS4gVGhlIHBhZ2VcbiAqIGhlYWRpbmcgbWlnaHQgZGlmZmVyIGZyb20gdGhlIHBhZ2UgdGl0bGUsIHdoaWNoIGlzIHVzZWQgdG8gYWRkcmVzc1xuICogdGhlIHBhZ2UgaW4gdGhlIGJyb3dzZXIgKGhpc3RvcnksIHRhYnMpIGFuZCBvdXRzaWRlIHRoZSBzdG9yZWZyb250XG4gKiAoR29vbGdlLCBib3RzLCBldGMpLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VIZWFkaW5nUmVzb2x2ZXIge1xuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgaGVhZGluZy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVXNlIGByZXNvbHZlSGVhZGluZygpYCBpbnN0ZWFkLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZUhlYWRpbmcoLi4uYXJncyk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgaGVhZGluZy5cbiAgICovXG4gIHJlc29sdmVIZWFkaW5nKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSB0aXRsZSB3aGljaCBpcyBmaXJzdCBhbmQgZm9yZW1vc3QgdXNlZFxuICogZm9yIHRoZSBwYWdlIHRpdGxlIHRhZywgYnV0IGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgdGhlXG4gKiBwYWdlIGhlYWRpbmcgaW4gdGhlIFVJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VUaXRsZVJlc29sdmVyIHtcbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKC4uLmFyZ3MpOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlLlxuICAgKi9cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkZXNjcmlwdGlvbi4gVGhlIHBhZ2UgZGVzY3JpcHRpb24gaXMgdHlwaWNhbGx5IHVzZWRcbiAqIGluIHRoZSBTZWFyY2ggRW5naW5lIFJlc3VsdCBQYWdlIChTRVJQKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlRGVzY3JpcHRpb25SZXNvbHZlciB7XG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcGFnZSBkZXNjcmlwdGlvbi5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVXNlIGByZXNvbHZlSGVhZGluZygpYCBpbnN0ZWFkLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKC4uLmFyZ3MpOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIGRlc2NyaXB0aW9uLlxuICAgKi9cbiAgcmVzb2x2ZURlc2NyaXB0aW9uKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBicmVhZGNydW1icyBmb3IgdGhlIHBhZ2UsIHdoaWNoIGlzIHVzZWQgaW4gdGhlIGBCcmVhZGNydW1iQ29tcG9uZW50YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIGJyZWFkY3J1bWJzIGZvciB0aGUgcGFnZS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVXNlIGByZXNvbHZlQnJlYWRjcnVtYnMoKWAgaW5zdGVhZC5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyguLi5hcmdzKTogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBicmVhZGNydW1icyBmb3IgdGhlIHBhZ2UuXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBtZXRob2QgdG8gcmVzb2x2ZSB0aGUgdGhlIG1haW4gaW1hZ2UgZm9yIHRoZSBwYWdlLlxuICogVGhpcyBpcyB0eXBpY2FsbHkgdXNlZCBmb3Igc29jaWFsIHNoYXJpbmcgKGZvciBleGFtcGxlIGJ5IHVzaW5nXG4gKiB0aGUgYG9nOmltYWdlYCBtZXRhdGFnKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlSW1hZ2VSZXNvbHZlciB7XG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgbWFpbiBpbWFnZSBmb3IgdGhlIHBhZ2UuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFVzZSBgcmVzb2x2ZUltYWdlKClgIGluc3RlYWQuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlSW1hZ2UoLi4uYXJncyk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIG1haW4gaW1hZ2UgZm9yIHRoZSBwYWdlLlxuICAgKi9cbiAgcmVzb2x2ZUltYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcm9ib3QgaW5mb3JtYXRpb24gZm9yIHRoZSBwYWdlLiBUaGlzIGlzIHVzZWQgYnlcbiAqIHNlYXJjaCBlbmdpbmVzIHRvIHVuZGVyc3RhbmQgd2hldGhlciB0aGUgcGFnZSBhbmQgc3Vic2VxdWVudGlhbCBsaW5rc1xuICogc2hvdWxkIGJlIGluZGV4ZWQuXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcm9ib3RzIGZvciB0aGUgcGFnZS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVXNlIGByZXNvbHZlUm9ib3RzKClgIGluc3RlYWQuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlUm9ib3RzKC4uLmFyZ3MpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+O1xuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcm9ib3RzIGZvciB0aGUgcGFnZS5cbiAgICovXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPjtcbn1cbiJdfQ==