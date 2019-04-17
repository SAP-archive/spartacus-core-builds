/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deepMerge } from '../../config/utils/deep-merge';
import { ConfigurableRoutesConfig } from './config/configurable-routes-config';
import { retry } from 'rxjs/operators';
import { OccConfig } from '../../occ/config/occ-config';
/** @type {?} */
var ENDPOINT_ROUTES_CONFIG = 'routes-config';
var RoutesConfigLoader = /** @class */ (function () {
    function RoutesConfigLoader(http, serverConfig, configurableRoutesConfig) {
        this.http = http;
        this.serverConfig = serverConfig;
        this.configurableRoutesConfig = configurableRoutesConfig;
    }
    Object.defineProperty(RoutesConfigLoader.prototype, "routesConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._routesConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoutesConfigLoader.prototype, "endpoint", {
        get: /**
         * @return {?}
         */
        function () {
            return ((this.serverConfig.backend.occ.baseUrl || '') +
                '/' +
                ENDPOINT_ROUTES_CONFIG);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RoutesConfigLoader.prototype.load = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var shouldFetch, fetchedRoutesConfig, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldFetch = this.configurableRoutesConfig.routesConfig.fetch;
                        if (!shouldFetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetch(this.endpoint)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        fetchedRoutesConfig = _a;
                        this._routesConfig = this.extendStaticWith(fetchedRoutesConfig);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    RoutesConfigLoader.prototype.fetch = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http
            .get(url)
            .pipe(retry(2))
            .toPromise()
            .catch(function () {
            throw new Error("Could not get routes configuration from url " + url + "!");
        });
    };
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    RoutesConfigLoader.prototype.extendStaticWith = /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    function (routesConfig) {
        /** @type {?} */
        var mergedRoutesConfig = deepMerge({}, this.configurableRoutesConfig.routesConfig, routesConfig);
        return this.extendLanguagesTranslationsWithDefault(mergedRoutesConfig);
    };
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    RoutesConfigLoader.prototype.extendLanguagesTranslationsWithDefault = /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    function (routesConfig) {
        /** @type {?} */
        var defaultTranslations = routesConfig.translations.default;
        Object.keys(routesConfig.translations).forEach(function (languageCode) {
            /** @type {?} */
            var languageTranslations = routesConfig.translations[languageCode];
            routesConfig.translations[languageCode] = deepMerge({}, defaultTranslations, languageTranslations);
        });
        return routesConfig;
    };
    RoutesConfigLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RoutesConfigLoader.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig },
        { type: ConfigurableRoutesConfig }
    ]; };
    return RoutesConfigLoader;
}());
export { RoutesConfigLoader };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoutesConfigLoader.prototype._routesConfig;
    /**
     * @type {?}
     * @private
     */
    RoutesConfigLoader.prototype.http;
    /**
     * @type {?}
     * @private
     */
    RoutesConfigLoader.prototype.serverConfig;
    /**
     * @type {?}
     * @private
     */
    RoutesConfigLoader.prototype.configurableRoutesConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLWNvbmZpZy1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3JvdXRlcy1jb25maWctbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBRWxELHNCQUFzQixHQUFHLGVBQWU7QUFFOUM7SUFnQkUsNEJBQ21CLElBQWdCLEVBQ2hCLFlBQXVCLEVBQ3ZCLHdCQUFrRDtRQUZsRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFXO1FBQ3ZCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDbEUsQ0FBQztJQWhCSixzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFROzs7O1FBQVo7WUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDN0MsR0FBRztnQkFDSCxzQkFBc0IsQ0FDdkIsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBUUssaUNBQUk7OztJQUFWOzs7Ozs7d0JBQ1EsV0FBVyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSzs2QkFDeEMsV0FBVyxFQUFYLHdCQUFXO3dCQUNuQyxxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQS9CLEtBQUEsU0FBK0IsQ0FBQTs7O3dCQUMvQixLQUFBLElBQUksQ0FBQTs7O3dCQUZGLG1CQUFtQixLQUVqQjt3QkFDUixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzs7OztLQUNqRTs7Ozs7O0lBRU8sa0NBQUs7Ozs7O0lBQWIsVUFBYyxHQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNkLFNBQVMsRUFBRTthQUNYLEtBQUssQ0FBQztZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQStDLEdBQUcsTUFBRyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTyw2Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLFlBQTBCOztZQUMzQyxrQkFBa0IsR0FBRyxTQUFTLENBQ2xDLEVBQUUsRUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUMxQyxZQUFZLENBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVPLG1FQUFzQzs7Ozs7SUFBOUMsVUFDRSxZQUEwQjs7WUFFcEIsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBRTdELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFlBQVk7O2dCQUNuRCxvQkFBb0IsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNwRSxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FDakQsRUFBRSxFQUNGLG1CQUFtQixFQUNuQixvQkFBb0IsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Z0JBaEVGLFVBQVU7Ozs7Z0JBVkYsVUFBVTtnQkFNVixTQUFTO2dCQUZULHdCQUF3Qjs7SUF1RWpDLHlCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FoRVksa0JBQWtCOzs7Ozs7SUFDN0IsMkNBQW9DOzs7OztJQWVsQyxrQ0FBaUM7Ozs7O0lBQ2pDLDBDQUF3Qzs7Ozs7SUFDeEMsc0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWd1cmFibGUtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5cbmNvbnN0IEVORFBPSU5UX1JPVVRFU19DT05GSUcgPSAncm91dGVzLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXNDb25maWdMb2FkZXIge1xuICBwcml2YXRlIF9yb3V0ZXNDb25maWc6IFJvdXRlc0NvbmZpZztcblxuICBnZXQgcm91dGVzQ29uZmlnKCk6IFJvdXRlc0NvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlc0NvbmZpZztcbiAgfVxuXG4gIGdldCBlbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5zZXJ2ZXJDb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgK1xuICAgICAgJy8nICtcbiAgICAgIEVORFBPSU5UX1JPVVRFU19DT05GSUdcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyQ29uZmlnOiBPY2NDb25maWcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWd1cmFibGVSb3V0ZXNDb25maWc6IENvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZ1xuICApIHt9XG5cbiAgYXN5bmMgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzaG91bGRGZXRjaCA9IHRoaXMuY29uZmlndXJhYmxlUm91dGVzQ29uZmlnLnJvdXRlc0NvbmZpZy5mZXRjaDtcbiAgICBjb25zdCBmZXRjaGVkUm91dGVzQ29uZmlnID0gc2hvdWxkRmV0Y2hcbiAgICAgID8gYXdhaXQgdGhpcy5mZXRjaCh0aGlzLmVuZHBvaW50KVxuICAgICAgOiBudWxsO1xuICAgIHRoaXMuX3JvdXRlc0NvbmZpZyA9IHRoaXMuZXh0ZW5kU3RhdGljV2l0aChmZXRjaGVkUm91dGVzQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2godXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodXJsKVxuICAgICAgLnBpcGUocmV0cnkoMikpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGdldCByb3V0ZXMgY29uZmlndXJhdGlvbiBmcm9tIHVybCAke3VybH0hYCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0ZW5kU3RhdGljV2l0aChyb3V0ZXNDb25maWc6IFJvdXRlc0NvbmZpZyk6IFJvdXRlc0NvbmZpZyB7XG4gICAgY29uc3QgbWVyZ2VkUm91dGVzQ29uZmlnID0gZGVlcE1lcmdlKFxuICAgICAge30sXG4gICAgICB0aGlzLmNvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZy5yb3V0ZXNDb25maWcsXG4gICAgICByb3V0ZXNDb25maWdcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmV4dGVuZExhbmd1YWdlc1RyYW5zbGF0aW9uc1dpdGhEZWZhdWx0KG1lcmdlZFJvdXRlc0NvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGV4dGVuZExhbmd1YWdlc1RyYW5zbGF0aW9uc1dpdGhEZWZhdWx0KFxuICAgIHJvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnXG4gICk6IFJvdXRlc0NvbmZpZyB7XG4gICAgY29uc3QgZGVmYXVsdFRyYW5zbGF0aW9ucyA9IHJvdXRlc0NvbmZpZy50cmFuc2xhdGlvbnMuZGVmYXVsdDtcblxuICAgIE9iamVjdC5rZXlzKHJvdXRlc0NvbmZpZy50cmFuc2xhdGlvbnMpLmZvckVhY2gobGFuZ3VhZ2VDb2RlID0+IHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlVHJhbnNsYXRpb25zID0gcm91dGVzQ29uZmlnLnRyYW5zbGF0aW9uc1tsYW5ndWFnZUNvZGVdO1xuICAgICAgcm91dGVzQ29uZmlnLnRyYW5zbGF0aW9uc1tsYW5ndWFnZUNvZGVdID0gZGVlcE1lcmdlKFxuICAgICAgICB7fSxcbiAgICAgICAgZGVmYXVsdFRyYW5zbGF0aW9ucyxcbiAgICAgICAgbGFuZ3VhZ2VUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm91dGVzQ29uZmlnO1xuICB9XG59XG4iXX0=