import { FeaturesConfig } from '../config/features-config';
export declare class FeatureConfigService {
    protected config: FeaturesConfig;
    constructor(config: FeaturesConfig);
    isLevel(version: string): boolean;
    isEnabled(feature: string): boolean;
}
