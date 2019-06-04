/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var DynamicTemplate = /** @class */ (function () {
    function DynamicTemplate() {
    }
    /**
     * @param {?} templateString
     * @param {?} templateVariables
     * @return {?}
     */
    DynamicTemplate.resolve = /**
     * @param {?} templateString
     * @param {?} templateVariables
     * @return {?}
     */
    function (templateString, templateVariables) {
        /** @type {?} */
        var keys = Object.keys(templateVariables);
        // Can't use Object.values as the compilation settings are to es2015 not es2017
        /** @type {?} */
        var values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return templateVariables[key]; }));
        /** @type {?} */
        var templateFunction = new (Function.bind.apply(Function, tslib_1.__spread([void 0], keys, ["return `" + templateString + "`;"])))();
        return templateFunction.apply(void 0, tslib_1.__spread(values));
    };
    return DynamicTemplate;
}());
export { DynamicTemplate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFZQSxDQUFDOzs7Ozs7SUFYUSx1QkFBTzs7Ozs7SUFBZCxVQUFlLGNBQXNCLEVBQUUsaUJBQXlCOztZQUN4RCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7O1lBRXJDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLEVBQUM7O1lBRWhELGdCQUFnQixRQUFPLFFBQVEsWUFBUixRQUFRLDZCQUNoQyxJQUFJLEdBQ1AsYUFBWSxjQUFjLE9BQUssTUFDaEM7UUFDRCxPQUFPLGdCQUFnQixnQ0FBSSxNQUFNLEdBQUU7SUFDckMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHluYW1pY1RlbXBsYXRlIHtcbiAgc3RhdGljIHJlc29sdmUodGVtcGxhdGVTdHJpbmc6IHN0cmluZywgdGVtcGxhdGVWYXJpYWJsZXM6IE9iamVjdCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZVZhcmlhYmxlcyk7XG4gICAgLy8gQ2FuJ3QgdXNlIE9iamVjdC52YWx1ZXMgYXMgdGhlIGNvbXBpbGF0aW9uIHNldHRpbmdzIGFyZSB0byBlczIwMTUgbm90IGVzMjAxN1xuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGtleSA9PiB0ZW1wbGF0ZVZhcmlhYmxlc1trZXldKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAuLi5rZXlzLFxuICAgICAgYHJldHVybiBcXGAke3RlbXBsYXRlU3RyaW5nfVxcYDtgXG4gICAgKTtcbiAgICByZXR1cm4gdGVtcGxhdGVGdW5jdGlvbiguLi52YWx1ZXMpO1xuICB9XG59XG4iXX0=