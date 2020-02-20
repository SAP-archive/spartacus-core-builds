import { __decorate } from "tslib";
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
        set: function (level) {
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
    FeatureLevelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], FeatureLevelDirective.prototype, "cxFeatureLevel", null);
    FeatureLevelDirective = __decorate([
        Directive({
            selector: '[cxFeatureLevel]',
        })
    ], FeatureLevelDirective);
    return FeatureLevelDirective;
}());
export { FeatureLevelDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUsxRTtJQUNFLCtCQUNZLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGFBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBR3ZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFGckIsQ0FBQztJQUlLLHNCQUFJLGlEQUFjO2FBQWxCLFVBQW1CLEtBQXNCO1lBQ2hELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQWZ3QixXQUFXO2dCQUNULGdCQUFnQjtnQkFDaEIsb0JBQW9COztJQUt0QztRQUFSLEtBQUssRUFBRTsrREFRUDtJQWpCVSxxQkFBcUI7UUFIakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO09BQ1cscUJBQXFCLENBa0JqQztJQUFELDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeEZlYXR1cmVMZXZlbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTGV2ZWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGhhc1ZpZXcgPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgY3hGZWF0dXJlTGV2ZWwobGV2ZWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbChsZXZlbC50b1N0cmluZygpKSAmJiAhdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbChsZXZlbC50b1N0cmluZygpKSAmJiB0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=