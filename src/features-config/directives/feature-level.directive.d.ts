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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureLevelDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FeatureLevelDirective, "[cxFeatureLevel]", never, { "cxFeatureLevel": "cxFeatureLevel"; }, {}, never>;
}

//# sourceMappingURL=feature-level.directive.d.ts.map