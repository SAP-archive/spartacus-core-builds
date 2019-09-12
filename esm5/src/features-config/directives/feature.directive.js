/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
var FeatureDirective = /** @class */ (function () {
    function FeatureDirective(templateRef, viewContainer, featureConfig) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureConfig = featureConfig;
        this.hasView = false;
    }
    Object.defineProperty(FeatureDirective.prototype, "cxFeature", {
        set: /**
         * @param {?} feature
         * @return {?}
         */
        function (feature) {
            if (this.featureConfig.isEnabled(feature) && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (!this.featureConfig.isEnabled(feature) && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    FeatureDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxFeature]',
                },] }
    ];
    /** @nocollapse */
    FeatureDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: FeatureConfigService }
    ]; };
    FeatureDirective.propDecorators = {
        cxFeature: [{ type: Input }]
    };
    return FeatureDirective;
}());
export { FeatureDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRTtJQUlFLDBCQUNZLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGFBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBR3ZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFGckIsQ0FBQztJQUlKLHNCQUFhLHVDQUFTOzs7OztRQUF0QixVQUF1QixPQUFlO1lBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQUwwQixXQUFXO2dCQUFFLGdCQUFnQjtnQkFDL0Msb0JBQW9COzs7NEJBYzFCLEtBQUs7O0lBU1IsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWxCWSxnQkFBZ0I7Ozs7OztJQU8zQixtQ0FBd0I7Ozs7O0lBTHRCLHVDQUF1Qzs7Ozs7SUFDdkMseUNBQXlDOzs7OztJQUN6Qyx5Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4RmVhdHVyZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBoYXNWaWV3ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IGN4RmVhdHVyZShmZWF0dXJlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZChmZWF0dXJlKSAmJiAhdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKGZlYXR1cmUpICYmIHRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==