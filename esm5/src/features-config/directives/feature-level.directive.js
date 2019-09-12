/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
var FeatureLevelDirective = /** @class */ (function () {
    function FeatureLevelDirective(templateRef, viewContainer, featureConfig) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureConfig = featureConfig;
        this.hasView = false;
    }
    Object.defineProperty(FeatureLevelDirective.prototype, "cxFeatureLevel", {
        set: /**
         * @param {?} level
         * @return {?}
         */
        function (level) {
            if (this.featureConfig.isLevel(level.toString()) && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (!this.featureConfig.isLevel(level.toString()) && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    FeatureLevelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxFeatureLevel]',
                },] }
    ];
    /** @nocollapse */
    FeatureLevelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: FeatureConfigService }
    ]; };
    FeatureLevelDirective.propDecorators = {
        cxFeatureLevel: [{ type: Input }]
    };
    return FeatureLevelDirective;
}());
export { FeatureLevelDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureLevelDirective.prototype.hasView;
    /**
     * @type {?}
     * @protected
     */
    FeatureLevelDirective.prototype.templateRef;
    /**
     * @type {?}
     * @protected
     */
    FeatureLevelDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @protected
     */
    FeatureLevelDirective.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRTtJQUlFLCtCQUNZLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGFBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBR3ZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFGckIsQ0FBQztJQUlKLHNCQUFhLGlEQUFjOzs7OztRQUEzQixVQUE0QixLQUFzQjtZQUNoRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQUFBOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUwwQixXQUFXO2dCQUFFLGdCQUFnQjtnQkFDL0Msb0JBQW9COzs7aUNBYzFCLEtBQUs7O0lBU1IsNEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWxCWSxxQkFBcUI7Ozs7OztJQU9oQyx3Q0FBd0I7Ozs7O0lBTHRCLDRDQUF1Qzs7Ozs7SUFDdkMsOENBQXlDOzs7OztJQUN6Qyw4Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4RmVhdHVyZUxldmVsXScsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVMZXZlbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaGFzVmlldyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNldCBjeEZlYXR1cmVMZXZlbChsZXZlbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKGxldmVsLnRvU3RyaW5nKCkpICYmICF0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKGxldmVsLnRvU3RyaW5nKCkpICYmIHRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==