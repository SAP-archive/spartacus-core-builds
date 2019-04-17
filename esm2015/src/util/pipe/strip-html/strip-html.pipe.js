/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class StripHtmlPipe {
    /**
     * @param {?} product
     * @return {?}
     */
    transform(product) {
        /** @type {?} */
        const productClone = Object.assign({}, product);
        productClone.name = product.name.replace(/<[^>]*>/g, '');
        return productClone;
    }
}
StripHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'stripHtml' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXAtaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvcGlwZS9zdHJpcC1odG1sL3N0cmlwLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFNBQVMsQ0FBQyxPQUFnQjs7Y0FDbEIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQztRQUMvQyxZQUFZLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBQaXBlKHsgbmFtZTogJ3N0cmlwSHRtbCcgfSlcbmV4cG9ydCBjbGFzcyBTdHJpcEh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShwcm9kdWN0OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgY29uc3QgcHJvZHVjdENsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvZHVjdCk7XG4gICAgcHJvZHVjdENsb25lLm5hbWUgPSBwcm9kdWN0Lm5hbWUucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdENsb25lO1xuICB9XG59XG4iXX0=