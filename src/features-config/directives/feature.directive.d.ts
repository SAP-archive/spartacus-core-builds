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

//# sourceMappingURL=feature.directive.d.ts.map