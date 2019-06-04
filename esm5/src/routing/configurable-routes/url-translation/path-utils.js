/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var isParam = (/**
 * @param {?} segment
 * @return {?}
 */
function (segment) { return segment.startsWith(':'); });
/** @type {?} */
export var getParamName = (/**
 * @param {?} segment
 * @return {?}
 */
function (segment) { return segment.slice(1); });
// it just removes leading ':'
/** @type {?} */
export var ensureLeadingSlash = (/**
 * @param {?} path
 * @return {?}
 */
function (path) {
    return path.startsWith('/') ? path : '/' + path;
});
/** @type {?} */
export var removeLeadingSlash = (/**
 * @param {?} path
 * @return {?}
 */
function (path) {
    return path.startsWith('/') ? path.slice(1) : path;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3BhdGgtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEtBQU8sT0FBTzs7OztBQUFHLFVBQUMsT0FBZSxJQUFjLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQTs7QUFFNUUsTUFBTSxLQUFPLFlBQVk7Ozs7QUFBRyxVQUFDLE9BQWUsSUFBYSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUE7OztBQUV6RSxNQUFNLEtBQU8sa0JBQWtCOzs7O0FBQUcsVUFBQyxJQUFZO0lBQzdDLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSTtBQUF4QyxDQUF3QyxDQUFBOztBQUUxQyxNQUFNLEtBQU8sa0JBQWtCOzs7O0FBQUcsVUFBQyxJQUFZO0lBQzdDLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUEzQyxDQUEyQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzUGFyYW0gPSAoc2VnbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhcmFtTmFtZSA9IChzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcgPT4gc2VnbWVudC5zbGljZSgxKTsgLy8gaXQganVzdCByZW1vdmVzIGxlYWRpbmcgJzonXG5cbmV4cG9ydCBjb25zdCBlbnN1cmVMZWFkaW5nU2xhc2ggPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+XG4gIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA6ICcvJyArIHBhdGg7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMZWFkaW5nU2xhc2ggPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+XG4gIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aC5zbGljZSgxKSA6IHBhdGg7XG4iXX0=