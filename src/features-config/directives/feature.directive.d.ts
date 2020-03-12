import { TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureConfigService } from '../services/feature-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class FeatureDirective {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected featureConfig: FeatureConfigService;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, featureConfig: FeatureConfigService);
    private hasView;
    set cxFeature(feature: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FeatureDirective, "[cxFeature]", never, {
    "cxFeature": "cxFeature";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiZmVhdHVyZS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZlYXR1cmVEaXJlY3RpdmUge1xuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGhhc1ZpZXc7XG4gICAgc2V0IGN4RmVhdHVyZShmZWF0dXJlOiBzdHJpbmcpO1xufVxuIl19