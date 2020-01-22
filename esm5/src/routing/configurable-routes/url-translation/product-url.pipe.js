/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
var ProductURLPipe = /** @class */ (function () {
    function ProductURLPipe(semanticPath) {
        this.semanticPath = semanticPath;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    ProductURLPipe.prototype.transform = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return this.semanticPath.transform({ cxRoute: 'product', params: product });
    };
    ProductURLPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cxProductUrl',
                },] }
    ];
    /** @nocollapse */
    ProductURLPipe.ctorParameters = function () { return [
        { type: SemanticPathService }
    ]; };
    return ProductURLPipe;
}());
export { ProductURLPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductURLPipe.prototype.semanticPath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC11cmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3Byb2R1Y3QtdXJsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBSUUsd0JBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUFHLENBQUM7Ozs7O0lBQ3pELGtDQUFTOzs7O0lBQVQsVUFBVSxPQUFnQjtRQUN4QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGNBQWM7aUJBQ3JCOzs7O2dCQUpRLG1CQUFtQjs7SUFVNUIscUJBQUM7Q0FBQSxBQVJELElBUUM7U0FMWSxjQUFjOzs7Ozs7SUFDYixzQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuQFBpcGUoe1xuICBuYW1lOiAnY3hQcm9kdWN0VXJsJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFVSTFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZW1hbnRpY1BhdGg6IFNlbWFudGljUGF0aFNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybShwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoLnRyYW5zZm9ybSh7IGN4Um91dGU6ICdwcm9kdWN0JywgcGFyYW1zOiBwcm9kdWN0IH0pO1xuICB9XG59XG4iXX0=