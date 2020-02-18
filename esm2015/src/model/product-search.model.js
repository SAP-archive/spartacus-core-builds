/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SearchQuery() { }
if (false) {
    /** @type {?|undefined} */
    SearchQuery.prototype.value;
}
/**
 * @record
 */
export function SearchState() { }
if (false) {
    /** @type {?|undefined} */
    SearchState.prototype.query;
    /** @type {?|undefined} */
    SearchState.prototype.url;
}
/**
 * @record
 */
export function FacetValue() { }
if (false) {
    /** @type {?|undefined} */
    FacetValue.prototype.count;
    /** @type {?|undefined} */
    FacetValue.prototype.name;
    /** @type {?|undefined} */
    FacetValue.prototype.query;
    /** @type {?|undefined} */
    FacetValue.prototype.selected;
}
/**
 * @record
 */
export function Breadcrumb() { }
if (false) {
    /** @type {?|undefined} */
    Breadcrumb.prototype.facetCode;
    /** @type {?|undefined} */
    Breadcrumb.prototype.facetName;
    /** @type {?|undefined} */
    Breadcrumb.prototype.facetValueCode;
    /** @type {?|undefined} */
    Breadcrumb.prototype.facetValueName;
    /** @type {?|undefined} */
    Breadcrumb.prototype.removeQuery;
    /** @type {?|undefined} */
    Breadcrumb.prototype.truncateQuery;
}
/**
 * @record
 */
export function Facet() { }
if (false) {
    /** @type {?|undefined} */
    Facet.prototype.category;
    /** @type {?|undefined} */
    Facet.prototype.multiSelect;
    /** @type {?|undefined} */
    Facet.prototype.name;
    /** @type {?|undefined} */
    Facet.prototype.priority;
    /** @type {?|undefined} */
    Facet.prototype.values;
    /** @type {?|undefined} */
    Facet.prototype.visible;
    /**
     * Indicates the top values that will be shown instantly. The top values can be
     * controlled by business users per facet.
     * @type {?|undefined}
     */
    Facet.prototype.topValueCount;
    /**
     * The OCC backend has topValues with duplicated facet data.
     * This is not used in the UI, but normalized in the `topValueCount` property.
     *
     * TODO: once we implement a dedicated UI model, we should remove the `topValues`.
     * @type {?|undefined}
     */
    Facet.prototype.topValues;
}
/**
 * @record
 */
export function SpellingSuggestion() { }
if (false) {
    /** @type {?|undefined} */
    SpellingSuggestion.prototype.query;
    /** @type {?|undefined} */
    SpellingSuggestion.prototype.suggestion;
}
/**
 * @record
 */
export function ProductSearchPage() { }
if (false) {
    /** @type {?|undefined} */
    ProductSearchPage.prototype.breadcrumbs;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.categoryCode;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.currentQuery;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.facets;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.freeTextSearch;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.keywordRedirectUrl;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.pagination;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.products;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.sorts;
    /** @type {?|undefined} */
    ProductSearchPage.prototype.spellingSuggestion;
}
/**
 * @record
 */
export function Suggestion() { }
if (false) {
    /** @type {?|undefined} */
    Suggestion.prototype.value;
}
/**
 * @record
 */
export function ClearSearch() { }
if (false) {
    /** @type {?|undefined} */
    ClearSearch.prototype.clearPageResults;
    /** @type {?|undefined} */
    ClearSearch.prototype.clearSearchboxResults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLGlDQUVDOzs7SUFEQyw0QkFBZTs7Ozs7QUFHakIsaUNBR0M7OztJQUZDLDRCQUFvQjs7SUFDcEIsMEJBQWE7Ozs7O0FBR2YsZ0NBS0M7OztJQUpDLDJCQUFlOztJQUNmLDBCQUFjOztJQUNkLDJCQUFvQjs7SUFDcEIsOEJBQW1COzs7OztBQUdyQixnQ0FPQzs7O0lBTkMsK0JBQW1COztJQUNuQiwrQkFBbUI7O0lBQ25CLG9DQUF3Qjs7SUFDeEIsb0NBQXdCOztJQUN4QixpQ0FBMEI7O0lBQzFCLG1DQUE0Qjs7Ozs7QUFHOUIsMkJBcUJDOzs7SUFwQkMseUJBQW1COztJQUNuQiw0QkFBc0I7O0lBQ3RCLHFCQUFjOztJQUNkLHlCQUFrQjs7SUFDbEIsdUJBQXNCOztJQUN0Qix3QkFBa0I7Ozs7OztJQU1sQiw4QkFBdUI7Ozs7Ozs7O0lBUXZCLDBCQUF5Qjs7Ozs7QUFHM0Isd0NBR0M7OztJQUZDLG1DQUFlOztJQUNmLHdDQUFvQjs7Ozs7QUFHdEIsdUNBV0M7OztJQVZDLHdDQUEyQjs7SUFDM0IseUNBQXNCOztJQUN0Qix5Q0FBMkI7O0lBQzNCLG1DQUFpQjs7SUFDakIsMkNBQXdCOztJQUN4QiwrQ0FBNEI7O0lBQzVCLHVDQUE2Qjs7SUFDN0IscUNBQXFCOztJQUNyQixrQ0FBb0I7O0lBQ3BCLCtDQUF3Qzs7Ozs7QUFHMUMsZ0NBRUM7OztJQURDLDJCQUFlOzs7OztBQUdqQixpQ0FHQzs7O0lBRkMsdUNBQTJCOztJQUMzQiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwsIFNvcnRNb2RlbCB9IGZyb20gJy4vbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0Lm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hRdWVyeSB7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXRlIHtcbiAgcXVlcnk/OiBTZWFyY2hRdWVyeTtcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0VmFsdWUge1xuICBjb3VudD86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgcXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWIge1xuICBmYWNldENvZGU/OiBzdHJpbmc7XG4gIGZhY2V0TmFtZT86IHN0cmluZztcbiAgZmFjZXRWYWx1ZUNvZGU/OiBzdHJpbmc7XG4gIGZhY2V0VmFsdWVOYW1lPzogc3RyaW5nO1xuICByZW1vdmVRdWVyeT86IFNlYXJjaFN0YXRlO1xuICB0cnVuY2F0ZVF1ZXJ5PzogU2VhcmNoU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXQge1xuICBjYXRlZ29yeT86IGJvb2xlYW47XG4gIG11bHRpU2VsZWN0PzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgcHJpb3JpdHk/OiBudW1iZXI7XG4gIHZhbHVlcz86IEZhY2V0VmFsdWVbXTtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgdG9wIHZhbHVlcyB0aGF0IHdpbGwgYmUgc2hvd24gaW5zdGFudGx5LiBUaGUgdG9wIHZhbHVlcyBjYW4gYmVcbiAgICogY29udHJvbGxlZCBieSBidXNpbmVzcyB1c2VycyBwZXIgZmFjZXQuXG4gICAqL1xuICB0b3BWYWx1ZUNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgT0NDIGJhY2tlbmQgaGFzIHRvcFZhbHVlcyB3aXRoIGR1cGxpY2F0ZWQgZmFjZXQgZGF0YS5cbiAgICogVGhpcyBpcyBub3QgdXNlZCBpbiB0aGUgVUksIGJ1dCBub3JtYWxpemVkIGluIHRoZSBgdG9wVmFsdWVDb3VudGAgcHJvcGVydHkuXG4gICAqXG4gICAqIFRPRE86IG9uY2Ugd2UgaW1wbGVtZW50IGEgZGVkaWNhdGVkIFVJIG1vZGVsLCB3ZSBzaG91bGQgcmVtb3ZlIHRoZSBgdG9wVmFsdWVzYC5cbiAgICovXG4gIHRvcFZhbHVlcz86IEZhY2V0VmFsdWVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcGVsbGluZ1N1Z2dlc3Rpb24ge1xuICBxdWVyeT86IHN0cmluZztcbiAgc3VnZ2VzdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gIGJyZWFkY3J1bWJzPzogQnJlYWRjcnVtYltdO1xuICBjYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gIGN1cnJlbnRRdWVyeT86IFNlYXJjaFN0YXRlO1xuICBmYWNldHM/OiBGYWNldFtdO1xuICBmcmVlVGV4dFNlYXJjaD86IHN0cmluZztcbiAga2V5d29yZFJlZGlyZWN0VXJsPzogc3RyaW5nO1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICBwcm9kdWN0cz86IFByb2R1Y3RbXTtcbiAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgc3BlbGxpbmdTdWdnZXN0aW9uPzogU3BlbGxpbmdTdWdnZXN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhclNlYXJjaCB7XG4gIGNsZWFyUGFnZVJlc3VsdHM/OiBib29sZWFuO1xuICBjbGVhclNlYXJjaGJveFJlc3VsdHM/OiBib29sZWFuO1xufVxuIl19