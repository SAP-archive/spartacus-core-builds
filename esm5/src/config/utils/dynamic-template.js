/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                console.warn("Key \"" + e.message.split(' ')[0] + "\" not found.");
            }
            if (templateString.indexOf('?') > -1) {
                templateFunction = new (Function.bind.apply(Function, tslib_1.__spread([void 0], keys, ["return `" + templateString.split('?')[0] + "`;"])))();
                try {
                    return templateFunction.apply(void 0, tslib_1.__spread(values));
                }
                catch (e) {
                    if (isDevMode()) {
                        console.warn('Could not resolve endpoint.');
                    }
                    return templateString;
                }
            }
            return templateString;
        }
    };
    return DynamicTemplate;
}());
export { DynamicTemplate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQW1DQSxDQUFDOzs7Ozs7SUFsQ1EsdUJBQU87Ozs7O0lBQWQsVUFBZSxjQUFzQixFQUFFLGlCQUF5Qjs7WUFDeEQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7OztZQUVyQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDOztZQUVsRCxnQkFBZ0IsUUFBTyxRQUFRLFlBQVIsUUFBUSw2QkFDOUIsSUFBSSxHQUNQLGFBQVksY0FBYyxPQUFLLE1BQ2hDO1FBRUQsSUFBSTtZQUNGLE9BQU8sZ0JBQWdCLGdDQUFJLE1BQU0sR0FBRTtTQUNwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksY0FBYyxFQUFFO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFjLENBQUMsQ0FBQzthQUM3RDtZQUVELElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDcEMsZ0JBQWdCLFFBQU8sUUFBUSxZQUFSLFFBQVEsNkJBQzFCLElBQUksR0FDUCxhQUFZLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUssTUFDOUMsQ0FBQztnQkFDRixJQUFJO29CQUNGLE9BQU8sZ0JBQWdCLGdDQUFJLE1BQU0sR0FBRTtpQkFDcEM7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsSUFBSSxTQUFTLEVBQUUsRUFBRTt3QkFDZixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7cUJBQzdDO29CQUNELE9BQU8sY0FBYyxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsT0FBTyxjQUFjLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljVGVtcGxhdGUge1xuICBzdGF0aWMgcmVzb2x2ZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nLCB0ZW1wbGF0ZVZhcmlhYmxlczogT2JqZWN0KSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBsYXRlVmFyaWFibGVzKTtcbiAgICAvLyBDYW4ndCB1c2UgT2JqZWN0LnZhbHVlcyBhcyB0aGUgY29tcGlsYXRpb24gc2V0dGluZ3MgYXJlIHRvIGVzMjAxNSBub3QgZXMyMDE3XG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoa2V5ID0+IHRlbXBsYXRlVmFyaWFibGVzW2tleV0pO1xuXG4gICAgbGV0IHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAuLi5rZXlzLFxuICAgICAgYHJldHVybiBcXGAke3RlbXBsYXRlU3RyaW5nfVxcYDtgXG4gICAgKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVGdW5jdGlvbiguLi52YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSAmJiBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBLZXkgXCIke2UubWVzc2FnZS5zcGxpdCgnICcpWzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlbXBsYXRlU3RyaW5nLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICAgIHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgLi4ua2V5cyxcbiAgICAgICAgICBgcmV0dXJuIFxcYCR7dGVtcGxhdGVTdHJpbmcuc3BsaXQoJz8nKVswXX1cXGA7YFxuICAgICAgICApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUZ1bmN0aW9uKC4uLnZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IHJlc29sdmUgZW5kcG9pbnQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZVN0cmluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nO1xuICAgIH1cbiAgfVxufVxuIl19