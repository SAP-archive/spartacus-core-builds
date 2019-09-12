/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        let templateFunction = new Function(...keys, `return \`${templateString}\`;`);
        try {
            return templateFunction(...values);
        }
        catch (e) {
            if (isDevMode() && e instanceof ReferenceError) {
                console.warn(`Key "${e.message.split(' ')[0]}" not found.`);
            }
            if (templateString.indexOf('?') > -1) {
                templateFunction = new Function(...keys, `return \`${templateString.split('?')[0]}\`;`);
                try {
                    return templateFunction(...values);
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBc0IsRUFBRSxpQkFBeUI7O2NBQ3hELElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzs7Y0FFckMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBQzs7WUFFbEQsZ0JBQWdCLEdBQUcsSUFBSSxRQUFRLENBQ2pDLEdBQUcsSUFBSSxFQUNQLFlBQVksY0FBYyxLQUFLLENBQ2hDO1FBRUQsSUFBSTtZQUNGLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksY0FBYyxFQUFFO2dCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzdEO1lBRUQsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxnQkFBZ0IsR0FBRyxJQUFJLFFBQVEsQ0FDN0IsR0FBRyxJQUFJLEVBQ1AsWUFBWSxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQzlDLENBQUM7Z0JBQ0YsSUFBSTtvQkFDRixPQUFPLGdCQUFnQixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7aUJBQ3BDO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLElBQUksU0FBUyxFQUFFLEVBQUU7d0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3FCQUM3QztvQkFDRCxPQUFPLGNBQWMsQ0FBQztpQkFDdkI7YUFDRjtZQUNELE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljVGVtcGxhdGUge1xuICBzdGF0aWMgcmVzb2x2ZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nLCB0ZW1wbGF0ZVZhcmlhYmxlczogT2JqZWN0KSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBsYXRlVmFyaWFibGVzKTtcbiAgICAvLyBDYW4ndCB1c2UgT2JqZWN0LnZhbHVlcyBhcyB0aGUgY29tcGlsYXRpb24gc2V0dGluZ3MgYXJlIHRvIGVzMjAxNSBub3QgZXMyMDE3XG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoa2V5ID0+IHRlbXBsYXRlVmFyaWFibGVzW2tleV0pO1xuXG4gICAgbGV0IHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAuLi5rZXlzLFxuICAgICAgYHJldHVybiBcXGAke3RlbXBsYXRlU3RyaW5nfVxcYDtgXG4gICAgKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVGdW5jdGlvbiguLi52YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSAmJiBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBLZXkgXCIke2UubWVzc2FnZS5zcGxpdCgnICcpWzBdfVwiIG5vdCBmb3VuZC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlbXBsYXRlU3RyaW5nLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICAgIHRlbXBsYXRlRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgLi4ua2V5cyxcbiAgICAgICAgICBgcmV0dXJuIFxcYCR7dGVtcGxhdGVTdHJpbmcuc3BsaXQoJz8nKVswXX1cXGA7YFxuICAgICAgICApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUZ1bmN0aW9uKC4uLnZhbHVlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IHJlc29sdmUgZW5kcG9pbnQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZVN0cmluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nO1xuICAgIH1cbiAgfVxufVxuIl19