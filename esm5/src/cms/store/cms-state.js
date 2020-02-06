/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var CMS_FEATURE = 'cms';
/** @type {?} */
export var NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
/** @type {?} */
export var COMPONENT_ENTITY = '[Cms] Component Entity';
/**
 * @record
 */
export function StateWithCms() { }
if (false) {
    /* Skipping unnamed member:
    [CMS_FEATURE]: CmsState;*/
}
/**
 * @record
 */
export function ComponentsContext() { }
if (false) {
    /** @type {?} */
    ComponentsContext.prototype.component;
    /**
     * Page context stores an information for which context does the component exist.
     * For example, if `SiteLogoComponent` was successfully loaded for a product page with an ID of 1776948, then this object will contain:
     *
     * ```ts
     * ProductPage-1776948: {
     *  success: true,
     *  loading: false,
     *  error: false,
     *  // The `value` property indicates that the component exists for the given page context.
     *  value: true
     * }
     * ```
     *
     * If the same `SiteLogoComponent` component was tried to be loaded on homepage (page context id is `homepage`),
     * and it doesn't exist for some reason (maybe it has a restriction), then this object will contain:
     *
     * ```ts
     * ProductPage-1776948: {
     *  success: true,
     *  loading: false,
     *  error: false,
     *  // The `value` property indicates that the component exists for the given page context.
     *  value: true
     * },
     * ContentPage-homepage: {
     *  success: true,
     *  loading: false,
     *  error: false,
     *  // The `value` in this case is `false` indicating that the component was tried to be loaded, but it doesn't exist or has a restriction.
     *  value: false
     * }
     * ```
     *
     * @type {?}
     */
    ComponentsContext.prototype.pageContext;
}
/**
 * @record
 */
export function NavigationNodes() { }
/**
 * @record
 */
export function PageState() { }
if (false) {
    /** @type {?} */
    PageState.prototype.pageData;
    /** @type {?} */
    PageState.prototype.index;
}
/**
 * @record
 */
export function CmsState() { }
if (false) {
    /** @type {?} */
    CmsState.prototype.page;
    /** @type {?} */
    CmsState.prototype.components;
    /** @type {?} */
    CmsState.prototype.navigation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9jbXMtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLEtBQU8sV0FBVyxHQUFHLEtBQUs7O0FBQ2hDLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyx5QkFBeUI7O0FBQ2pFLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyx3QkFBd0I7Ozs7QUFFeEQsa0NBRUM7Ozs7Ozs7O0FBSUQsdUNBd0NDOzs7SUF2Q0Msc0NBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0N4Qix3Q0FFRTs7Ozs7QUFVSixxQ0FFQzs7OztBQUVELCtCQUdDOzs7SUFGQyw2QkFBNEI7O0lBQzVCLDBCQUFpQjs7Ozs7QUFHbkIsOEJBSUM7OztJQUhDLHdCQUFnQjs7SUFDaEIsOEJBQTRCOztJQUM1Qiw4QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSwgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBDTVNfRkVBVFVSRSA9ICdjbXMnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSA9ICdbQ21zXSBOYXZpZ2F0aW9uIEVudGl0eSc7XG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0VOVElUWSA9ICdbQ21zXSBDb21wb25lbnQgRW50aXR5JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVdpdGhDbXMge1xuICBbQ01TX0ZFQVRVUkVdOiBDbXNTdGF0ZTtcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c1N0YXRlID0gRW50aXR5U3RhdGU8Q29tcG9uZW50c0NvbnRleHQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudHNDb250ZXh0IHtcbiAgY29tcG9uZW50OiBDbXNDb21wb25lbnQ7XG4gIC8qKlxuICAgKiBQYWdlIGNvbnRleHQgc3RvcmVzIGFuIGluZm9ybWF0aW9uIGZvciB3aGljaCBjb250ZXh0IGRvZXMgdGhlIGNvbXBvbmVudCBleGlzdC5cbiAgICogRm9yIGV4YW1wbGUsIGlmIGBTaXRlTG9nb0NvbXBvbmVudGAgd2FzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgZm9yIGEgcHJvZHVjdCBwYWdlIHdpdGggYW4gSUQgb2YgMTc3Njk0OCwgdGhlbiB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIFByb2R1Y3RQYWdlLTE3NzY5NDg6IHtcbiAgICogIHN1Y2Nlc3M6IHRydWUsXG4gICAqICBsb2FkaW5nOiBmYWxzZSxcbiAgICogIGVycm9yOiBmYWxzZSxcbiAgICogIC8vIFRoZSBgdmFsdWVgIHByb3BlcnR5IGluZGljYXRlcyB0aGF0IHRoZSBjb21wb25lbnQgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gcGFnZSBjb250ZXh0LlxuICAgKiAgdmFsdWU6IHRydWVcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgdGhlIHNhbWUgYFNpdGVMb2dvQ29tcG9uZW50YCBjb21wb25lbnQgd2FzIHRyaWVkIHRvIGJlIGxvYWRlZCBvbiBob21lcGFnZSAocGFnZSBjb250ZXh0IGlkIGlzIGBob21lcGFnZWApLFxuICAgKiBhbmQgaXQgZG9lc24ndCBleGlzdCBmb3Igc29tZSByZWFzb24gKG1heWJlIGl0IGhhcyBhIHJlc3RyaWN0aW9uKSwgdGhlbiB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIFByb2R1Y3RQYWdlLTE3NzY5NDg6IHtcbiAgICogIHN1Y2Nlc3M6IHRydWUsXG4gICAqICBsb2FkaW5nOiBmYWxzZSxcbiAgICogIGVycm9yOiBmYWxzZSxcbiAgICogIC8vIFRoZSBgdmFsdWVgIHByb3BlcnR5IGluZGljYXRlcyB0aGF0IHRoZSBjb21wb25lbnQgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gcGFnZSBjb250ZXh0LlxuICAgKiAgdmFsdWU6IHRydWVcbiAgICogfSxcbiAgICogQ29udGVudFBhZ2UtaG9tZXBhZ2U6IHtcbiAgICogIHN1Y2Nlc3M6IHRydWUsXG4gICAqICBsb2FkaW5nOiBmYWxzZSxcbiAgICogIGVycm9yOiBmYWxzZSxcbiAgICogIC8vIFRoZSBgdmFsdWVgIGluIHRoaXMgY2FzZSBpcyBgZmFsc2VgIGluZGljYXRpbmcgdGhhdCB0aGUgY29tcG9uZW50IHdhcyB0cmllZCB0byBiZSBsb2FkZWQsIGJ1dCBpdCBkb2Vzbid0IGV4aXN0IG9yIGhhcyBhIHJlc3RyaWN0aW9uLlxuICAgKiAgdmFsdWU6IGZhbHNlXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqL1xuICBwYWdlQ29udGV4dDoge1xuICAgIFtjb250ZXh0OiBzdHJpbmddOiBMb2FkZXJTdGF0ZTxib29sZWFuPjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgSW5kZXhUeXBlID0ge1xuICBjb250ZW50OiBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+O1xuICBwcm9kdWN0OiBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+O1xuICBjYXRlZ29yeTogRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPjtcbiAgY2F0YWxvZzogRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbk5vZGVzIHtcbiAgW25vZGVJZDogc3RyaW5nXTogTm9kZUl0ZW07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVN0YXRlIHtcbiAgcGFnZURhdGE6IEVudGl0eVN0YXRlPFBhZ2U+O1xuICBpbmRleDogSW5kZXhUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1N0YXRlIHtcbiAgcGFnZTogUGFnZVN0YXRlO1xuICBjb21wb25lbnRzOiBDb21wb25lbnRzU3RhdGU7XG4gIG5hdmlnYXRpb246IEVudGl0eUxvYWRlclN0YXRlPE5vZGVJdGVtPjtcbn1cbiJdfQ==