import { __decorate } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
let FeatureLevelDirective = class FeatureLevelDirective {
    constructor(templateRef, viewContainer, featureConfig) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.featureConfig = featureConfig;
        this.hasView = false;
    }
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
};
FeatureLevelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], FeatureLevelDirective.prototype, "cxFeatureLevel", null);
FeatureLevelDirective = __decorate([
    Directive({
        selector: '[cxFeatureLevel]',
    })
], FeatureLevelDirective);
export { FeatureLevelDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL2RpcmVjdGl2ZXMvZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUsxRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxZQUNZLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGFBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBR3ZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFGckIsQ0FBQztJQUlLLElBQUksY0FBYyxDQUFDLEtBQXNCO1FBQ2hELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNILENBQUM7Q0FDRixDQUFBOztZQWhCMEIsV0FBVztZQUNULGdCQUFnQjtZQUNoQixvQkFBb0I7O0FBS3RDO0lBQVIsS0FBSyxFQUFFOzJEQVFQO0FBakJVLHFCQUFxQjtJQUhqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7R0FDVyxxQkFBcUIsQ0FrQmpDO1NBbEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hGZWF0dXJlTGV2ZWxdJyxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUxldmVsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBoYXNWaWV3ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IGN4RmVhdHVyZUxldmVsKGxldmVsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnLmlzTGV2ZWwobGV2ZWwudG9TdHJpbmcoKSkgJiYgIXRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnLmlzTGV2ZWwobGV2ZWwudG9TdHJpbmcoKSkgJiYgdGhpcy5oYXNWaWV3KSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuaGFzVmlldyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19