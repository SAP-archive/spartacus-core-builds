/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DynamicTemplate {
    /**
     * @param {?} templateString
     * @param {?} templateVariables
     * @return {?}
     */
    static resolve(templateString, templateVariables) {
        /** @type {?} */
        const keys = Object.keys(templateVariables);
        // Can't use Object.values as the compilation settings are to es2015 not es2017
        /** @type {?} */
        const values = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        key => templateVariables[key]));
        /** @type {?} */
        const templateFunction = new Function(...keys, `return \`${templateString}\`;`);
        return templateFunction(...values);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQXNCLEVBQUUsaUJBQXlCOztjQUN4RCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7O2NBRXJDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUM7O2NBRWhELGdCQUFnQixHQUFHLElBQUksUUFBUSxDQUNuQyxHQUFHLElBQUksRUFDUCxZQUFZLGNBQWMsS0FBSyxDQUNoQztRQUNELE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHluYW1pY1RlbXBsYXRlIHtcbiAgc3RhdGljIHJlc29sdmUodGVtcGxhdGVTdHJpbmc6IHN0cmluZywgdGVtcGxhdGVWYXJpYWJsZXM6IE9iamVjdCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZVZhcmlhYmxlcyk7XG4gICAgLy8gQ2FuJ3QgdXNlIE9iamVjdC52YWx1ZXMgYXMgdGhlIGNvbXBpbGF0aW9uIHNldHRpbmdzIGFyZSB0byBlczIwMTUgbm90IGVzMjAxN1xuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGtleSA9PiB0ZW1wbGF0ZVZhcmlhYmxlc1trZXldKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAuLi5rZXlzLFxuICAgICAgYHJldHVybiBcXGAke3RlbXBsYXRlU3RyaW5nfVxcYDtgXG4gICAgKTtcbiAgICByZXR1cm4gdGVtcGxhdGVGdW5jdGlvbiguLi52YWx1ZXMpO1xuICB9XG59XG4iXX0=