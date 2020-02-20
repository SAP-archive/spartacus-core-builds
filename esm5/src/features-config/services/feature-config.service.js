import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FeaturesConfig } from '../config/features-config';
import { isFeatureEnabled, isFeatureLevel, } from '../utils/feature-config-utils';
import * as i0 from "@angular/core";
import * as i1 from "../config/features-config";
var FeatureConfigService = /** @class */ (function () {
    function FeatureConfigService(config) {
        this.config = config;
    }
    FeatureConfigService.prototype.isLevel = function (version) {
        return isFeatureLevel(this.config, version);
    };
    FeatureConfigService.prototype.isEnabled = function (feature) {
        return isFeatureEnabled(this.config, feature);
    };
    FeatureConfigService.ctorParameters = function () { return [
        { type: FeaturesConfig }
    ]; };
    FeatureConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureConfigService_Factory() { return new FeatureConfigService(i0.ɵɵinject(i1.FeaturesConfig)); }, token: FeatureConfigService, providedIn: "root" });
    FeatureConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FeatureConfigService);
    return FeatureConfigService;
}());
export { FeatureConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixjQUFjLEdBQ2YsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBS3ZDO0lBQ0UsOEJBQXNCLE1BQXNCO1FBQXRCLFdBQU0sR0FBTixNQUFNLENBQWdCO0lBQUcsQ0FBQztJQUVoRCxzQ0FBTyxHQUFQLFVBQVEsT0FBZTtRQUNyQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsT0FBZTtRQUN2QixPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBUjZCLGNBQWM7OztJQURqQyxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQVVoQzsrQkFwQkQ7Q0FvQkMsQUFWRCxJQVVDO1NBVlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7XG4gIGlzRmVhdHVyZUVuYWJsZWQsXG4gIGlzRmVhdHVyZUxldmVsLFxufSBmcm9tICcuLi91dGlscy9mZWF0dXJlLWNvbmZpZy11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEZlYXR1cmVzQ29uZmlnKSB7fVxuXG4gIGlzTGV2ZWwodmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRmVhdHVyZUxldmVsKHRoaXMuY29uZmlnLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlzRW5hYmxlZChmZWF0dXJlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgZmVhdHVyZSk7XG4gIH1cbn1cbiJdfQ==