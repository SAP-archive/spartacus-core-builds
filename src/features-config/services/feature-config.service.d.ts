import { FeaturesConfig } from '../config/features-config';
import * as ɵngcc0 from '@angular/core';
export declare class FeatureConfigService {
    protected config: FeaturesConfig;
    constructor(config: FeaturesConfig);
    isLevel(version: string): boolean;
    isEnabled(feature: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureConfigService>;
}

//# sourceMappingURL=feature-config.service.d.ts.map