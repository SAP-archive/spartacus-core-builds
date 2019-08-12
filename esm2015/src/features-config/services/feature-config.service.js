/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FeaturesConfig } from '../config/features-config';
import { isFeatureEnabled, isFeatureLevel, } from '../utils/feature-config-utils';
import * as i0 from "@angular/core";
import * as i1 from "../config/features-config";
export class FeatureConfigService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} version
     * @return {?}
     */
    isLevel(version) {
        return isFeatureLevel(this.config, version);
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    isEnabled(feature) {
        return isFeatureEnabled(this.config, feature);
    }
}
FeatureConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FeatureConfigService.ctorParameters = () => [
    { type: FeaturesConfig }
];
/** @nocollapse */ FeatureConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureConfigService_Factory() { return new FeatureConfigService(i0.ɵɵinject(i1.FeaturesConfig)); }, token: FeatureConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FeatureConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixjQUFjLEdBQ2YsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBc0IsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7SUFBRyxDQUFDOzs7OztJQUVoRCxPQUFPLENBQUMsT0FBZTtRQUNyQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWU7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLGNBQWM7Ozs7Ozs7O0lBVVQsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7XG4gIGlzRmVhdHVyZUVuYWJsZWQsXG4gIGlzRmVhdHVyZUxldmVsLFxufSBmcm9tICcuLi91dGlscy9mZWF0dXJlLWNvbmZpZy11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEZlYXR1cmVzQ29uZmlnKSB7fVxuXG4gIGlzTGV2ZWwodmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRmVhdHVyZUxldmVsKHRoaXMuY29uZmlnLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlzRW5hYmxlZChmZWF0dXJlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgZmVhdHVyZSk7XG4gIH1cbn1cbiJdfQ==