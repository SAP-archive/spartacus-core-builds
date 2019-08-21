/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isDevMode } from '@angular/core';
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
        try {
            return templateFunction.apply(void 0, tslib_1.__spread(values));
        }
        catch (e) {
            if (isDevMode() && e instanceof ReferenceError) {
                console.warn("Key \"" + e.message.split(' ')[0] + "\" not found");
            }
            return templateString;
        }
    };
    return DynamicTemplate;
}());
export { DynamicTemplate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQXFCQSxDQUFDOzs7Ozs7SUFwQlEsdUJBQU87Ozs7O0lBQWQsVUFBZSxjQUFzQixFQUFFLGlCQUF5Qjs7WUFDeEQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7OztZQUVyQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDOztZQUVoRCxnQkFBZ0IsUUFBTyxRQUFRLFlBQVIsUUFBUSw2QkFDaEMsSUFBSSxHQUNQLGFBQVksY0FBYyxPQUFLLE1BQ2hDO1FBRUQsSUFBSTtZQUNGLE9BQU8sZ0JBQWdCLGdDQUFJLE1BQU0sR0FBRTtTQUNwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksY0FBYyxFQUFFO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFhLENBQUMsQ0FBQzthQUM1RDtZQUVELE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHluYW1pY1RlbXBsYXRlIHtcbiAgc3RhdGljIHJlc29sdmUodGVtcGxhdGVTdHJpbmc6IHN0cmluZywgdGVtcGxhdGVWYXJpYWJsZXM6IE9iamVjdCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZVZhcmlhYmxlcyk7XG4gICAgLy8gQ2FuJ3QgdXNlIE9iamVjdC52YWx1ZXMgYXMgdGhlIGNvbXBpbGF0aW9uIHNldHRpbmdzIGFyZSB0byBlczIwMTUgbm90IGVzMjAxN1xuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGtleSA9PiB0ZW1wbGF0ZVZhcmlhYmxlc1trZXldKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAuLi5rZXlzLFxuICAgICAgYHJldHVybiBcXGAke3RlbXBsYXRlU3RyaW5nfVxcYDtgXG4gICAgKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVGdW5jdGlvbiguLi52YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSAmJiBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBLZXkgXCIke2UubWVzc2FnZS5zcGxpdCgnICcpWzBdfVwiIG5vdCBmb3VuZGApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGVtcGxhdGVTdHJpbmc7XG4gICAgfVxuICB9XG59XG4iXX0=