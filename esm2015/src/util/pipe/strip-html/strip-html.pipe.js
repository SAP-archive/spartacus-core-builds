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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXAtaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvcGlwZS9zdHJpcC1odG1sL3N0cmlwLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJcEQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFNBQVMsQ0FBQyxPQUFnQjs7Y0FDbEIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQztRQUMvQyxZQUFZLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5AUGlwZSh7IG5hbWU6ICdzdHJpcEh0bWwnIH0pXG5leHBvcnQgY2xhc3MgU3RyaXBIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ocHJvZHVjdDogUHJvZHVjdCk6IFByb2R1Y3Qge1xuICAgIGNvbnN0IHByb2R1Y3RDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpO1xuICAgIHByb2R1Y3RDbG9uZS5uYW1lID0gcHJvZHVjdC5uYW1lLnJlcGxhY2UoLzxbXj5dKj4vZywgJycpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RDbG9uZTtcbiAgfVxufVxuIl19