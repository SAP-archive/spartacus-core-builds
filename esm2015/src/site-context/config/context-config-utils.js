/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper function for safely getting context parameter config
 *
 * @param {?} config
 * @param {?} parameter
 * @return {?}
 */
export function getContextParameterValues(config, parameter) {
    return (config.context && config.context[parameter]) || [];
}
/**
 * Helper function for calculating default value for context parameter from config
 *
 * @param {?} config
 * @param {?} parameter
 * @return {?}
 */
export function getContextParameterDefault(config, parameter) {
    /** @type {?} */
    const param = getContextParameterValues(config, parameter);
    return param && param.length ? param[0] : undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1jb25maWctdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSx5QkFBeUIsQ0FDdkMsTUFBeUIsRUFDekIsU0FBaUI7SUFFakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3RCxDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsTUFBeUIsRUFDekIsU0FBaUI7O1VBRVgsS0FBSyxHQUFHLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7SUFDMUQsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDdEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29uZmlnJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHNhZmVseSBnZXR0aW5nIGNvbnRleHQgcGFyYW1ldGVyIGNvbmZpZ1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBwYXJhbSBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMoXG4gIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gIHBhcmFtZXRlcjogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIHJldHVybiAoY29uZmlnLmNvbnRleHQgJiYgY29uZmlnLmNvbnRleHRbcGFyYW1ldGVyXSkgfHwgW107XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjYWxjdWxhdGluZyBkZWZhdWx0IHZhbHVlIGZvciBjb250ZXh0IHBhcmFtZXRlciBmcm9tIGNvbmZpZ1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBwYXJhbSBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KFxuICBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnLFxuICBwYXJhbWV0ZXI6IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgY29uc3QgcGFyYW0gPSBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzKGNvbmZpZywgcGFyYW1ldGVyKTtcbiAgcmV0dXJuIHBhcmFtICYmIHBhcmFtLmxlbmd0aCA/IHBhcmFtWzBdIDogdW5kZWZpbmVkO1xufVxuIl19