/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
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
        try {
            return templateFunction(...values);
        }
        catch (e) {
            if (isDevMode() && e instanceof ReferenceError) {
                console.warn(`Key "${e.message.split(' ')[0]}" not found`);
            }
            return templateString;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBc0IsRUFBRSxpQkFBeUI7O2NBQ3hELElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzs7Y0FFckMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBQzs7Y0FFaEQsZ0JBQWdCLEdBQUcsSUFBSSxRQUFRLENBQ25DLEdBQUcsSUFBSSxFQUNQLFlBQVksY0FBYyxLQUFLLENBQ2hDO1FBRUQsSUFBSTtZQUNGLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksY0FBYyxFQUFFO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzVEO1lBRUQsT0FBTyxjQUFjLENBQUM7U0FDdkI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER5bmFtaWNUZW1wbGF0ZSB7XG4gIHN0YXRpYyByZXNvbHZlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcsIHRlbXBsYXRlVmFyaWFibGVzOiBPYmplY3QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGVtcGxhdGVWYXJpYWJsZXMpO1xuICAgIC8vIENhbid0IHVzZSBPYmplY3QudmFsdWVzIGFzIHRoZSBjb21waWxhdGlvbiBzZXR0aW5ncyBhcmUgdG8gZXMyMDE1IG5vdCBlczIwMTdcbiAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChrZXkgPT4gdGVtcGxhdGVWYXJpYWJsZXNba2V5XSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZUZ1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgLi4ua2V5cyxcbiAgICAgIGByZXR1cm4gXFxgJHt0ZW1wbGF0ZVN0cmluZ31cXGA7YFxuICAgICk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlRnVuY3Rpb24oLi4udmFsdWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgS2V5IFwiJHtlLm1lc3NhZ2Uuc3BsaXQoJyAnKVswXX1cIiBub3QgZm91bmRgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nO1xuICAgIH1cbiAgfVxufVxuIl19