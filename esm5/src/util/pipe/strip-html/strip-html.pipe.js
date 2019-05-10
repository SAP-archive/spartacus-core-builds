/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var StripHtmlPipe = /** @class */ (function () {
    function StripHtmlPipe() {
    }
    /**
     * @param {?} product
     * @return {?}
     */
    StripHtmlPipe.prototype.transform = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var productClone = Object.assign({}, product);
        productClone.name = product.name.replace(/<[^>]*>/g, '');
        return productClone;
    };
    StripHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'stripHtml' },] }
    ];
    return StripHtmlPipe;
}());
export { StripHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXAtaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvcGlwZS9zdHJpcC1odG1sL3N0cmlwLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQVFBLENBQUM7Ozs7O0lBTkMsaUNBQVM7Ozs7SUFBVCxVQUFVLE9BQWdCOztZQUNsQixZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO1FBQy9DLFlBQVksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBUTNCLG9CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQFBpcGUoeyBuYW1lOiAnc3RyaXBIdG1sJyB9KVxuZXhwb3J0IGNsYXNzIFN0cmlwSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9kdWN0IHtcbiAgICBjb25zdCBwcm9kdWN0Q2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9kdWN0KTtcbiAgICBwcm9kdWN0Q2xvbmUubmFtZSA9IHByb2R1Y3QubmFtZS5yZXBsYWNlKC88W14+XSo+L2csICcnKTtcblxuICAgIHJldHVybiBwcm9kdWN0Q2xvbmU7XG4gIH1cbn1cbiJdfQ==