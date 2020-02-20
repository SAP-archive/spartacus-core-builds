import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FeaturesConfig } from '../config/features-config';
import { isFeatureEnabled, isFeatureLevel, } from '../utils/feature-config-utils';
import * as i0 from "@angular/core";
import * as i1 from "../config/features-config";
let FeatureConfigService = class FeatureConfigService {
    constructor(config) {
        this.config = config;
    }
    isLevel(version) {
        return isFeatureLevel(this.config, version);
    }
    isEnabled(feature) {
        return isFeatureEnabled(this.config, feature);
    }
};
FeatureConfigService.ctorParameters = () => [
    { type: FeaturesConfig }
];
FeatureConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureConfigService_Factory() { return new FeatureConfigService(i0.ɵɵinject(i1.FeaturesConfig)); }, token: FeatureConfigService, providedIn: "root" });
FeatureConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FeatureConfigService);
export { FeatureConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixjQUFjLEdBQ2YsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBS3ZDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQXNCLE1BQXNCO1FBQXRCLFdBQU0sR0FBTixNQUFNLENBQWdCO0lBQUcsQ0FBQztJQUVoRCxPQUFPLENBQUMsT0FBZTtRQUNyQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBZTtRQUN2QixPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGLENBQUE7O1lBVCtCLGNBQWM7OztBQURqQyxvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQVVoQztTQVZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2ZlYXR1cmVzLWNvbmZpZyc7XG5pbXBvcnQge1xuICBpc0ZlYXR1cmVFbmFibGVkLFxuICBpc0ZlYXR1cmVMZXZlbCxcbn0gZnJvbSAnLi4vdXRpbHMvZmVhdHVyZS1jb25maWctdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBGZWF0dXJlc0NvbmZpZykge31cblxuICBpc0xldmVsKHZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0ZlYXR1cmVMZXZlbCh0aGlzLmNvbmZpZywgdmVyc2lvbik7XG4gIH1cblxuICBpc0VuYWJsZWQoZmVhdHVyZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzRmVhdHVyZUVuYWJsZWQodGhpcy5jb25maWcsIGZlYXR1cmUpO1xuICB9XG59XG4iXX0=