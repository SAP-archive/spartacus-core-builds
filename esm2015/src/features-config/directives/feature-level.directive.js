/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
export class FeatureLevelDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} featureConfig
     */
    constructor(templateRef, viewContainer, featureConfig) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureConfig = featureConfig;
        this.hasView = false;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    set cxFeatureLevel(level) {
        if (this.featureConfig.isLevel(level.toString()) && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!this.featureConfig.isLevel(level.toString()) && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
FeatureLevelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxFeatureLevel]',
            },] }
];
/** @nocollapse */
FeatureLevelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureConfigService }
];
FeatureLevelDirective.propDecorators = {
    cxFeatureLevel: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUsxRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDaEMsWUFDWSxXQUE2QixFQUM3QixhQUErQixFQUMvQixhQUFtQztRQUZuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUd2QyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRnJCLENBQUM7Ozs7O0lBSUosSUFBYSxjQUFjLENBQUMsS0FBc0I7UUFDaEQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBTDBCLFdBQVc7WUFBRSxnQkFBZ0I7WUFDL0Msb0JBQW9COzs7NkJBYzFCLEtBQUs7Ozs7Ozs7SUFGTix3Q0FBd0I7Ozs7O0lBTHRCLDRDQUF1Qzs7Ozs7SUFDdkMsOENBQXlDOzs7OztJQUN6Qyw4Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4RmVhdHVyZUxldmVsXScsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVMZXZlbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaGFzVmlldyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNldCBjeEZlYXR1cmVMZXZlbChsZXZlbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKGxldmVsLnRvU3RyaW5nKCkpICYmICF0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKGxldmVsLnRvU3RyaW5nKCkpICYmIHRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==