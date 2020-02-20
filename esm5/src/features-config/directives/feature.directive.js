import { __decorate } from "tslib";
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
        set: function (feature) {
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
    FeatureDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], FeatureDirective.prototype, "cxFeature", null);
    FeatureDirective = __decorate([
        Directive({
            selector: '[cxFeature]',
        })
    ], FeatureDirective);
    return FeatureDirective;
}());
export { FeatureDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUsxRTtJQUNFLDBCQUNZLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGFBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBR3ZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFGckIsQ0FBQztJQUlLLHNCQUFJLHVDQUFTO2FBQWIsVUFBYyxPQUFlO1lBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQWZ3QixXQUFXO2dCQUNULGdCQUFnQjtnQkFDaEIsb0JBQW9COztJQUt0QztRQUFSLEtBQUssRUFBRTtxREFRUDtJQWpCVSxnQkFBZ0I7UUFINUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztPQUNXLGdCQUFnQixDQWtCNUI7SUFBRCx1QkFBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hGZWF0dXJlXScsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGhhc1ZpZXcgPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgY3hGZWF0dXJlKGZlYXR1cmU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKGZlYXR1cmUpICYmICF0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoZmVhdHVyZSkgJiYgdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19