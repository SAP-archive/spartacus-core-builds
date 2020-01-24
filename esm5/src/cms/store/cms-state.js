/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var CMS_FEATURE = 'cms';
/** @type {?} */
export var NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
// TODO(issue:6027) - fix the const value to `[Cms] Component Entity`
/** @type {?} */
export var COMPONENT_ENTITY = '[Cms[ Component Entity';
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
    CmsState.prototype.component;
    /** @type {?} */
    CmsState.prototype.components;
    /** @type {?} */
    CmsState.prototype.navigation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9jbXMtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLEtBQU8sV0FBVyxHQUFHLEtBQUs7O0FBQ2hDLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyx5QkFBeUI7OztBQUVqRSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsd0JBQXdCOzs7O0FBRXhELGtDQUVDOzs7Ozs7OztBQUtELHVDQXdDQzs7O0lBdkNDLHNDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9DeEIsd0NBRUU7Ozs7O0FBVUoscUNBRUM7Ozs7QUFFRCwrQkFHQzs7O0lBRkMsNkJBQTRCOztJQUM1QiwwQkFBaUI7Ozs7O0FBR25CLDhCQUtDOzs7SUFKQyx3QkFBZ0I7O0lBQ2hCLDZCQUEwQjs7SUFDMUIsOEJBQTRCOztJQUM1Qiw4QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSwgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBDTVNfRkVBVFVSRSA9ICdjbXMnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSA9ICdbQ21zXSBOYXZpZ2F0aW9uIEVudGl0eSc7XG4vLyBUT0RPKGlzc3VlOjYwMjcpIC0gZml4IHRoZSBjb25zdCB2YWx1ZSB0byBgW0Ntc10gQ29tcG9uZW50IEVudGl0eWBcbmV4cG9ydCBjb25zdCBDT01QT05FTlRfRU5USVRZID0gJ1tDbXNbIENvbXBvbmVudCBFbnRpdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlV2l0aENtcyB7XG4gIFtDTVNfRkVBVFVSRV06IENtc1N0YXRlO1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnRTdGF0ZSA9IEVudGl0eUxvYWRlclN0YXRlPGFueT47XG5leHBvcnQgdHlwZSBDb21wb25lbnRzU3RhdGUgPSBFbnRpdHlTdGF0ZTxDb21wb25lbnRzQ29udGV4dD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50c0NvbnRleHQge1xuICBjb21wb25lbnQ6IENtc0NvbXBvbmVudDtcbiAgLyoqXG4gICAqIFBhZ2UgY29udGV4dCBzdG9yZXMgYW4gaW5mb3JtYXRpb24gZm9yIHdoaWNoIGNvbnRleHQgZG9lcyB0aGUgY29tcG9uZW50IGV4aXN0LlxuICAgKiBGb3IgZXhhbXBsZSwgaWYgYFNpdGVMb2dvQ29tcG9uZW50YCB3YXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBmb3IgYSBwcm9kdWN0IHBhZ2Ugd2l0aCBhbiBJRCBvZiAxNzc2OTQ4LCB0aGVuIHRoaXMgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAgICpcbiAgICogYGBgdHNcbiAgICogUHJvZHVjdFBhZ2UtMTc3Njk0ODoge1xuICAgKiAgc3VjY2VzczogdHJ1ZSxcbiAgICogIGxvYWRpbmc6IGZhbHNlLFxuICAgKiAgZXJyb3I6IGZhbHNlLFxuICAgKiAgLy8gVGhlIGB2YWx1ZWAgcHJvcGVydHkgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudCBleGlzdHMgZm9yIHRoZSBnaXZlbiBwYWdlIGNvbnRleHQuXG4gICAqICB2YWx1ZTogdHJ1ZVxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB0aGUgc2FtZSBgU2l0ZUxvZ29Db21wb25lbnRgIGNvbXBvbmVudCB3YXMgdHJpZWQgdG8gYmUgbG9hZGVkIG9uIGhvbWVwYWdlIChwYWdlIGNvbnRleHQgaWQgaXMgYGhvbWVwYWdlYCksXG4gICAqIGFuZCBpdCBkb2Vzbid0IGV4aXN0IGZvciBzb21lIHJlYXNvbiAobWF5YmUgaXQgaGFzIGEgcmVzdHJpY3Rpb24pLCB0aGVuIHRoaXMgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAgICpcbiAgICogYGBgdHNcbiAgICogUHJvZHVjdFBhZ2UtMTc3Njk0ODoge1xuICAgKiAgc3VjY2VzczogdHJ1ZSxcbiAgICogIGxvYWRpbmc6IGZhbHNlLFxuICAgKiAgZXJyb3I6IGZhbHNlLFxuICAgKiAgLy8gVGhlIGB2YWx1ZWAgcHJvcGVydHkgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudCBleGlzdHMgZm9yIHRoZSBnaXZlbiBwYWdlIGNvbnRleHQuXG4gICAqICB2YWx1ZTogdHJ1ZVxuICAgKiB9LFxuICAgKiBDb250ZW50UGFnZS1ob21lcGFnZToge1xuICAgKiAgc3VjY2VzczogdHJ1ZSxcbiAgICogIGxvYWRpbmc6IGZhbHNlLFxuICAgKiAgZXJyb3I6IGZhbHNlLFxuICAgKiAgLy8gVGhlIGB2YWx1ZWAgaW4gdGhpcyBjYXNlIGlzIGBmYWxzZWAgaW5kaWNhdGluZyB0aGF0IHRoZSBjb21wb25lbnQgd2FzIHRyaWVkIHRvIGJlIGxvYWRlZCwgYnV0IGl0IGRvZXNuJ3QgZXhpc3Qgb3IgaGFzIGEgcmVzdHJpY3Rpb24uXG4gICAqICB2YWx1ZTogZmFsc2VcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICovXG4gIHBhZ2VDb250ZXh0OiB7XG4gICAgW2NvbnRleHQ6IHN0cmluZ106IExvYWRlclN0YXRlPGJvb2xlYW4+O1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBJbmRleFR5cGUgPSB7XG4gIGNvbnRlbnQ6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz47XG4gIHByb2R1Y3Q6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz47XG4gIGNhdGVnb3J5OiBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+O1xuICBjYXRhbG9nOiBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uTm9kZXMge1xuICBbbm9kZUlkOiBzdHJpbmddOiBOb2RlSXRlbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlU3RhdGUge1xuICBwYWdlRGF0YTogRW50aXR5U3RhdGU8UGFnZT47XG4gIGluZGV4OiBJbmRleFR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zU3RhdGUge1xuICBwYWdlOiBQYWdlU3RhdGU7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50U3RhdGU7XG4gIGNvbXBvbmVudHM6IENvbXBvbmVudHNTdGF0ZTtcbiAgbmF2aWdhdGlvbjogRW50aXR5TG9hZGVyU3RhdGU8Tm9kZUl0ZW0+O1xufVxuIl19