/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class CmsComponentAdapter {
}
if (false) {
    /**
     * Abstract method must be used to load the component for a given `id` and `PageContext`.
     * The component can be loaded from alternative backend, as long as the structure
     * converts to the `CmsStructureModel`.
     *
     * @abstract
     * @template T
     * @param {?} id
     * @param {?} pageContext The `PageContext` holding the page Id.
     * @param {?=} fields
     * @return {?}
     */
    CmsComponentAdapter.prototype.load = function (id, pageContext, fields) { };
    /**
     * @abstract
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    CmsComponentAdapter.prototype.findComponentsByIds = function (ids, pageContext) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsbUJBQW1CO0NBa0J4Qzs7Ozs7Ozs7Ozs7Ozs7SUFWQyw0RUFJaUI7Ozs7Ozs7SUFFakIsb0ZBRzhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIG11c3QgYmUgdXNlZCB0byBsb2FkIHRoZSBjb21wb25lbnQgZm9yIGEgZ2l2ZW4gYGlkYCBhbmQgYFBhZ2VDb250ZXh0YC5cbiAgICogVGhlIGNvbXBvbmVudCBjYW4gYmUgbG9hZGVkIGZyb20gYWx0ZXJuYXRpdmUgYmFja2VuZCwgYXMgbG9uZyBhcyB0aGUgc3RydWN0dXJlXG4gICAqIGNvbnZlcnRzIHRvIHRoZSBgQ21zU3RydWN0dXJlTW9kZWxgLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgVGhlIGBQYWdlQ29udGV4dGAgaG9sZGluZyB0aGUgcGFnZSBJZC5cbiAgICovXG4gIGFic3RyYWN0IGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgYWJzdHJhY3QgZmluZENvbXBvbmVudHNCeUlkcyhcbiAgICBpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPjtcbn1cbiJdfQ==