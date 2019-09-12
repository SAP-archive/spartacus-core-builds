/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const isParam = (/**
 * @param {?} segment
 * @return {?}
 */
(segment) => segment.startsWith(':'));
/** @type {?} */
export const getParamName = (/**
 * @param {?} segment
 * @return {?}
 */
(segment) => segment.slice(1));
// it just removes leading ':'
/** @type {?} */
export const ensureLeadingSlash = (/**
 * @param {?} path
 * @return {?}
 */
(path) => path.startsWith('/') ? path : '/' + path);
/** @type {?} */
export const removeLeadingSlash = (/**
 * @param {?} path
 * @return {?}
 */
(path) => path.startsWith('/') ? path.slice(1) : path);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3BhdGgtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sT0FBTzs7OztBQUFHLENBQUMsT0FBZSxFQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUU1RSxNQUFNLE9BQU8sWUFBWTs7OztBQUFHLENBQUMsT0FBZSxFQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBOzs7QUFFekUsTUFBTSxPQUFPLGtCQUFrQjs7OztBQUFHLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBOztBQUUxQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0FBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRSxDQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNQYXJhbSA9IChzZWdtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFyYW1OYW1lID0gKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBzZWdtZW50LnNsaWNlKDEpOyAvLyBpdCBqdXN0IHJlbW92ZXMgbGVhZGluZyAnOidcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxlYWRpbmdTbGFzaCA9IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoIDogJy8nICsgcGF0aDtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxlYWRpbmdTbGFzaCA9IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoLnNsaWNlKDEpIDogcGF0aDtcbiJdfQ==