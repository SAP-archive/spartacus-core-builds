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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiZmVhdHVyZS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGZWF0dXJlRGlyZWN0aXZlIHtcbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgcHJpdmF0ZSBoYXNWaWV3O1xuICAgIHNldCBjeEZlYXR1cmUoZmVhdHVyZTogc3RyaW5nKTtcbn1cbiJdfQ==