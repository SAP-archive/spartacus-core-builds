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
    /**
     * @abstract
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    CmsComponentAdapter.prototype.findComponentsByIdsLegacy = function (ids, pageContext) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsbUJBQW1CO0NBdUJ4Qzs7Ozs7Ozs7Ozs7Ozs7SUFmQyw0RUFJaUI7Ozs7Ozs7SUFFakIsb0ZBRzhCOzs7Ozs7O0lBRTlCLDBGQUc4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbXNDb21wb25lbnRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCBtdXN0IGJlIHVzZWQgdG8gbG9hZCB0aGUgY29tcG9uZW50IGZvciBhIGdpdmVuIGBpZGAgYW5kIGBQYWdlQ29udGV4dGAuXG4gICAqIFRoZSBjb21wb25lbnQgY2FuIGJlIGxvYWRlZCBmcm9tIGFsdGVybmF0aXZlIGJhY2tlbmQsIGFzIGxvbmcgYXMgdGhlIHN0cnVjdHVyZVxuICAgKiBjb252ZXJ0cyB0byB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IFRoZSBgUGFnZUNvbnRleHRgIGhvbGRpbmcgdGhlIHBhZ2UgSWQuXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIGFic3RyYWN0IGZpbmRDb21wb25lbnRzQnlJZHMoXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT47XG5cbiAgYWJzdHJhY3QgZmluZENvbXBvbmVudHNCeUlkc0xlZ2FjeShcbiAgICBpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPjtcbn1cbiJdfQ==