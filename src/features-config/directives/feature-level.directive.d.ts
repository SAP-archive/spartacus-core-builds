import { TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class FeatureLevelDirective {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected featureConfig: FeatureConfigService;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, featureConfig: FeatureConfigService);
    private hasView;
    set cxFeatureLevel(level: string | number);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureLevelDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FeatureLevelDirective, "[cxFeatureLevel]", never, {
    "cxFeatureLevel": "cxFeatureLevel";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZlYXR1cmVMZXZlbERpcmVjdGl2ZSB7XG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIHByaXZhdGUgaGFzVmlldztcbiAgICBzZXQgY3hGZWF0dXJlTGV2ZWwobGV2ZWw6IHN0cmluZyB8IG51bWJlcik7XG59XG4iXX0=