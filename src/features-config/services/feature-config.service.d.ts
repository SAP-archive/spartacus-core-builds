import { FeaturesConfig } from '../config/features-config';
import * as ɵngcc0 from '@angular/core';
export declare class FeatureConfigService {
    protected config: FeaturesConfig;
    constructor(config: FeaturesConfig);
    isLevel(version: string): boolean;
    isEnabled(feature: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureConfigService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJmZWF0dXJlLWNvbmZpZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7OztBQUtBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2ZlYXR1cmVzLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGZWF0dXJlQ29uZmlnU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRmVhdHVyZXNDb25maWc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBGZWF0dXJlc0NvbmZpZyk7XG4gICAgaXNMZXZlbCh2ZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGlzRW5hYmxlZChmZWF0dXJlOiBzdHJpbmcpOiBib29sZWFuO1xufVxuIl19