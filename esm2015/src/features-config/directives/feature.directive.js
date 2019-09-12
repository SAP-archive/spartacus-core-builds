/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
export class FeatureDirective {
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
     * @param {?} feature
     * @return {?}
     */
    set cxFeature(feature) {
        if (this.featureConfig.isEnabled(feature) && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!this.featureConfig.isEnabled(feature) && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
FeatureDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxFeature]',
            },] }
];
/** @nocollapse */
FeatureDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureConfigService }
];
FeatureDirective.propDecorators = {
    cxFeature: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureDirective.prototype.hasView;
    /**
     * @type {?}
     * @protected
     */
    FeatureDirective.prototype.templateRef;
    /**
     * @type {?}
     * @protected
     */
    FeatureDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @protected
     */
    FeatureDirective.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUsxRSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDM0IsWUFDWSxXQUE2QixFQUM3QixhQUErQixFQUMvQixhQUFtQztRQUZuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUd2QyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRnJCLENBQUM7Ozs7O0lBSUosSUFBYSxTQUFTLENBQUMsT0FBZTtRQUNwQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBTDBCLFdBQVc7WUFBRSxnQkFBZ0I7WUFDL0Msb0JBQW9COzs7d0JBYzFCLEtBQUs7Ozs7Ozs7SUFGTixtQ0FBd0I7Ozs7O0lBTHRCLHVDQUF1Qzs7Ozs7SUFDdkMseUNBQXlDOzs7OztJQUN6Qyx5Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4RmVhdHVyZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBoYXNWaWV3ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IGN4RmVhdHVyZShmZWF0dXJlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZChmZWF0dXJlKSAmJiAhdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKGZlYXR1cmUpICYmIHRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==