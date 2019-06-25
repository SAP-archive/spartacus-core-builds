/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper function for safely getting context parameter config
 *
 * @param {?} config
 * @param {?} parameter
 * @return {?}
 */
export function getContextParameter(config, parameter) {
    return ((config.context &&
        config.context.parameters &&
        config.context.parameters[parameter]) ||
        {});
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
    const param = getContextParameter(config, parameter);
    if (param.default !== undefined) {
        return param.default;
    }
    return param.values && param.values.length ? param.values[0] : undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1jb25maWctdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsTUFBeUIsRUFDekIsU0FBaUI7SUFFakIsT0FBTyxDQUNMLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7UUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUNILENBQUM7QUFDSixDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsTUFBeUIsRUFDekIsU0FBaUI7O1VBRVgsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7SUFDcEQsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUMzRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dFBhcmFtZXRlciwgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb25maWcnO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc2FmZWx5IGdldHRpbmcgY29udGV4dCBwYXJhbWV0ZXIgY29uZmlnXG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHBhcmFtIHBhcmFtZXRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dFBhcmFtZXRlcihcbiAgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZyxcbiAgcGFyYW1ldGVyOiBzdHJpbmdcbik6IENvbnRleHRQYXJhbWV0ZXIge1xuICByZXR1cm4gKFxuICAgIChjb25maWcuY29udGV4dCAmJlxuICAgICAgY29uZmlnLmNvbnRleHQucGFyYW1ldGVycyAmJlxuICAgICAgY29uZmlnLmNvbnRleHQucGFyYW1ldGVyc1twYXJhbWV0ZXJdKSB8fFxuICAgIHt9XG4gICk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjYWxjdWxhdGluZyBkZWZhdWx0IHZhbHVlIGZvciBjb250ZXh0IHBhcmFtZXRlciBmcm9tIGNvbmZpZ1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBwYXJhbSBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KFxuICBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnLFxuICBwYXJhbWV0ZXI6IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgY29uc3QgcGFyYW0gPSBnZXRDb250ZXh0UGFyYW1ldGVyKGNvbmZpZywgcGFyYW1ldGVyKTtcbiAgaWYgKHBhcmFtLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBwYXJhbS5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBwYXJhbS52YWx1ZXMgJiYgcGFyYW0udmFsdWVzLmxlbmd0aCA/IHBhcmFtLnZhbHVlc1swXSA6IHVuZGVmaW5lZDtcbn1cbiJdfQ==