/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var isParam = function (segment) { return segment.startsWith(':'); };
/** @type {?} */
export var getParamName = function (segment) { return segment.slice(1); };
// it just removes leading ':'
/** @type {?} */
export var ensureLeadingSlash = function (path) {
    return path.startsWith('/') ? path : '/' + path;
};
/** @type {?} */
export var removeLeadingSlash = function (path) {
    return path.startsWith('/') ? path.slice(1) : path;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3BhdGgtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEtBQU8sT0FBTyxHQUFHLFVBQUMsT0FBZSxJQUFjLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUI7O0FBRTVFLE1BQU0sS0FBTyxZQUFZLEdBQUcsVUFBQyxPQUFlLElBQWEsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQjs7O0FBRXpFLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxVQUFDLElBQVk7SUFDN0MsT0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJO0FBQXhDLENBQXdDOztBQUUxQyxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsVUFBQyxJQUFZO0lBQzdDLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUEzQyxDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc1BhcmFtID0gKHNlZ21lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6Jyk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXJhbU5hbWUgPSAoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nID0+IHNlZ21lbnQuc2xpY2UoMSk7IC8vIGl0IGp1c3QgcmVtb3ZlcyBsZWFkaW5nICc6J1xuXG5leHBvcnQgY29uc3QgZW5zdXJlTGVhZGluZ1NsYXNoID0gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PlxuICBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggOiAnLycgKyBwYXRoO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGVhZGluZ1NsYXNoID0gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PlxuICBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGguc2xpY2UoMSkgOiBwYXRoO1xuIl19