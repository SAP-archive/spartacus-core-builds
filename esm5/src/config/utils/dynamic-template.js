/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(templateVariables)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var variableLabel = _c.value;
                /** @type {?} */
                var placeholder = new RegExp('\\${' + variableLabel + '}', 'g');
                templateString = templateString.replace(placeholder, templateVariables[variableLabel]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return templateString;
    };
    return DynamicTemplate;
}());
export { DynamicTemplate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFXQSxDQUFDOzs7Ozs7SUFWUSx1QkFBTzs7Ozs7SUFBZCxVQUFlLGNBQXNCLEVBQUUsaUJBQXlCOzs7WUFDOUQsS0FBNEIsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdkQsSUFBTSxhQUFhLFdBQUE7O29CQUNoQixXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNqRSxjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FDckMsV0FBVyxFQUNYLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUNqQyxDQUFDO2FBQ0g7Ozs7Ozs7OztRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFYRCxJQVdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNUZW1wbGF0ZSB7XG4gIHN0YXRpYyByZXNvbHZlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcsIHRlbXBsYXRlVmFyaWFibGVzOiBPYmplY3QpIHtcbiAgICBmb3IgKGNvbnN0IHZhcmlhYmxlTGFiZWwgb2YgT2JqZWN0LmtleXModGVtcGxhdGVWYXJpYWJsZXMpKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IG5ldyBSZWdFeHAoJ1xcXFwkeycgKyB2YXJpYWJsZUxhYmVsICsgJ30nLCAnZycpO1xuICAgICAgdGVtcGxhdGVTdHJpbmcgPSB0ZW1wbGF0ZVN0cmluZy5yZXBsYWNlKFxuICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZXNbdmFyaWFibGVMYWJlbF1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVN0cmluZztcbiAgfVxufVxuIl19