/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
CmsComponentAdapter = /** @class */ (function () {
    function CmsComponentAdapter() {
    }
    return CmsComponentAdapter;
}());
/**
 * @abstract
 */
export { CmsComponentAdapter };
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
    /**
     * @abstract
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    CmsComponentAdapter.prototype.findComponentsByIdsLegacy = function (ids, pageContext) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUF1QkEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZkMsNEVBSWlCOzs7Ozs7O0lBRWpCLG9GQUc4Qjs7Ozs7OztJQUU5QiwwRkFHOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zQ29tcG9uZW50QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgbXVzdCBiZSB1c2VkIHRvIGxvYWQgdGhlIGNvbXBvbmVudCBmb3IgYSBnaXZlbiBgaWRgIGFuZCBgUGFnZUNvbnRleHRgLlxuICAgKiBUaGUgY29tcG9uZW50IGNhbiBiZSBsb2FkZWQgZnJvbSBhbHRlcm5hdGl2ZSBiYWNrZW5kLCBhcyBsb25nIGFzIHRoZSBzdHJ1Y3R1cmVcbiAgICogY29udmVydHMgdG8gdGhlIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBUaGUgYFBhZ2VDb250ZXh0YCBob2xkaW5nIHRoZSBwYWdlIElkLlxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICBhYnN0cmFjdCBmaW5kQ29tcG9uZW50c0J5SWRzKFxuICAgIGlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+O1xuXG4gIGFic3RyYWN0IGZpbmRDb21wb25lbnRzQnlJZHNMZWdhY3koXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT47XG59XG4iXX0=