/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const isParam = (segment) => segment.startsWith(':');
/** @type {?} */
export const getParamName = (segment) => segment.slice(1);
// it just removes leading ':'
/** @type {?} */
export const ensureLeadingSlash = (path) => path.startsWith('/') ? path : '/' + path;
/** @type {?} */
export const removeLeadingSlash = (path) => path.startsWith('/') ? path.slice(1) : path;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3BhdGgtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sT0FBTyxHQUFHLENBQUMsT0FBZSxFQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7QUFFNUUsTUFBTSxPQUFPLFlBQVksR0FBRyxDQUFDLE9BQWUsRUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztBQUV6RSxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRSxDQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJOztBQUUxQyxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRSxDQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzUGFyYW0gPSAoc2VnbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhcmFtTmFtZSA9IChzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcgPT4gc2VnbWVudC5zbGljZSgxKTsgLy8gaXQganVzdCByZW1vdmVzIGxlYWRpbmcgJzonXG5cbmV4cG9ydCBjb25zdCBlbnN1cmVMZWFkaW5nU2xhc2ggPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+XG4gIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA6ICcvJyArIHBhdGg7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMZWFkaW5nU2xhc2ggPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+XG4gIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aC5zbGljZSgxKSA6IHBhdGg7XG4iXX0=