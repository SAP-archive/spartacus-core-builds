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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXAtaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvcGlwZS9zdHJpcC1odG1sL3N0cmlwLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJcEQ7SUFBQTtJQVFBLENBQUM7Ozs7O0lBTkMsaUNBQVM7Ozs7SUFBVCxVQUFVLE9BQWdCOztZQUNsQixZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO1FBQy9DLFlBQVksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBUTNCLG9CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5AUGlwZSh7IG5hbWU6ICdzdHJpcEh0bWwnIH0pXG5leHBvcnQgY2xhc3MgU3RyaXBIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ocHJvZHVjdDogUHJvZHVjdCk6IFByb2R1Y3Qge1xuICAgIGNvbnN0IHByb2R1Y3RDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpO1xuICAgIHByb2R1Y3RDbG9uZS5uYW1lID0gcHJvZHVjdC5uYW1lLnJlcGxhY2UoLzxbXj5dKj4vZywgJycpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RDbG9uZTtcbiAgfVxufVxuIl19