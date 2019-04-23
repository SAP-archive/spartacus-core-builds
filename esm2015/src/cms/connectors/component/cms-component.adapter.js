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
    CmsComponentAdapter.prototype.loadList = function (ids, pageContext) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsbUJBQW1CO0NBa0J4Qzs7Ozs7Ozs7Ozs7Ozs7SUFWQyw0RUFJaUI7Ozs7Ozs7SUFFakIseUVBRzhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zQ29tcG9uZW50QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgbXVzdCBiZSB1c2VkIHRvIGxvYWQgdGhlIGNvbXBvbmVudCBmb3IgYSBnaXZlbiBgaWRgIGFuZCBgUGFnZUNvbnRleHRgLlxuICAgKiBUaGUgY29tcG9uZW50IGNhbiBiZSBsb2FkZWQgZnJvbSBhbHRlcm5hdGl2ZSBiYWNrZW5kLCBhcyBsb25nIGFzIHRoZSBzdHJ1Y3R1cmVcbiAgICogY29udmVydHMgdG8gdGhlIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBUaGUgYFBhZ2VDb250ZXh0YCBob2xkaW5nIHRoZSBwYWdlIElkLlxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICBhYnN0cmFjdCBsb2FkTGlzdChcbiAgICBpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPjtcbn1cbiJdfQ==