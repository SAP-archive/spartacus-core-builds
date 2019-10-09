/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DynamicTemplate {
    /**
     * @param {?} templateString
     * @param {?} templateVariables
     * @return {?}
     */
    static resolve(templateString, templateVariables) {
        for (const variableLabel of Object.keys(templateVariables)) {
            /** @type {?} */
            const placeholder = new RegExp('\\${' + variableLabel + '}', 'g');
            templateString = templateString.replace(placeholder, templateVariables[variableLabel]);
        }
        return templateString;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQXNCLEVBQUUsaUJBQXlCO1FBQzlELEtBQUssTUFBTSxhQUFhLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFOztrQkFDcEQsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNqRSxjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FDckMsV0FBVyxFQUNYLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUNqQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHluYW1pY1RlbXBsYXRlIHtcbiAgc3RhdGljIHJlc29sdmUodGVtcGxhdGVTdHJpbmc6IHN0cmluZywgdGVtcGxhdGVWYXJpYWJsZXM6IE9iamVjdCkge1xuICAgIGZvciAoY29uc3QgdmFyaWFibGVMYWJlbCBvZiBPYmplY3Qua2V5cyh0ZW1wbGF0ZVZhcmlhYmxlcykpIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gbmV3IFJlZ0V4cCgnXFxcXCR7JyArIHZhcmlhYmxlTGFiZWwgKyAnfScsICdnJyk7XG4gICAgICB0ZW1wbGF0ZVN0cmluZyA9IHRlbXBsYXRlU3RyaW5nLnJlcGxhY2UoXG4gICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlc1t2YXJpYWJsZUxhYmVsXVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nO1xuICB9XG59XG4iXX0=