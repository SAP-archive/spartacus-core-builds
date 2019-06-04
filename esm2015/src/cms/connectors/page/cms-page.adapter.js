/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 * @abstract
 */
export class CmsPageAdapter {
}
if (false) {
    /**
     * Abstract method must be used to load the page structure for a given `PageContext`.
     * The page can be loaded from alternative sources, as long as the structure
     * converts to the `CmsStructureModel`.
     *
     * @abstract
     * @param {?} pageContext The `PageContext` holding the page Id.
     * @return {?}
     */
    CmsPageAdapter.prototype.load = function (pageContext) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBUUEsTUFBTSxPQUFnQixjQUFjO0NBU25DOzs7Ozs7Ozs7OztJQURDLDJEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgY3VzdG9tIGxvYWRlciBsb2dpY1xuICogaW4gb3JkZXIgdG8gbG9hZCBDTVMgc3RydWN0dXJlIGZyb20gdGhpcmQtcGFydHkgQ01TIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1BhZ2VBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCBtdXN0IGJlIHVzZWQgdG8gbG9hZCB0aGUgcGFnZSBzdHJ1Y3R1cmUgZm9yIGEgZ2l2ZW4gYFBhZ2VDb250ZXh0YC5cbiAgICogVGhlIHBhZ2UgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIHNvdXJjZXMsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IFRoZSBgUGFnZUNvbnRleHRgIGhvbGRpbmcgdGhlIHBhZ2UgSWQuXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+O1xufVxuIl19