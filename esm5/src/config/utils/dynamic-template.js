import { __values } from "tslib";
var DynamicTemplate = /** @class */ (function () {
    function DynamicTemplate() {
    }
    DynamicTemplate.resolve = function (templateString, templateVariables) {
        var e_1, _a;
        try {
            for (var _b = __values(Object.keys(templateVariables)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var variableLabel = _c.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQVdBLENBQUM7SUFWUSx1QkFBTyxHQUFkLFVBQWUsY0FBc0IsRUFBRSxpQkFBeUI7OztZQUM5RCxLQUE0QixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXZELElBQU0sYUFBYSxXQUFBO2dCQUN0QixJQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEUsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQ3JDLFdBQVcsRUFDWCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FDakMsQ0FBQzthQUNIOzs7Ozs7Ozs7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEeW5hbWljVGVtcGxhdGUge1xuICBzdGF0aWMgcmVzb2x2ZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nLCB0ZW1wbGF0ZVZhcmlhYmxlczogT2JqZWN0KSB7XG4gICAgZm9yIChjb25zdCB2YXJpYWJsZUxhYmVsIG9mIE9iamVjdC5rZXlzKHRlbXBsYXRlVmFyaWFibGVzKSkge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBuZXcgUmVnRXhwKCdcXFxcJHsnICsgdmFyaWFibGVMYWJlbCArICd9JywgJ2cnKTtcbiAgICAgIHRlbXBsYXRlU3RyaW5nID0gdGVtcGxhdGVTdHJpbmcucmVwbGFjZShcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVzW3ZhcmlhYmxlTGFiZWxdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVTdHJpbmc7XG4gIH1cbn1cbiJdfQ==