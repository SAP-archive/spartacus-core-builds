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
const ENDPOINT_ROUTES_CONFIG = 'routes-config';
export class RoutesConfigLoader {
    /**
     * @param {?} http
     * @param {?} serverConfig
     * @param {?} configurableRoutesConfig
     */
    constructor(http, serverConfig, configurableRoutesConfig) {
        this.http = http;
        this.serverConfig = serverConfig;
        this.configurableRoutesConfig = configurableRoutesConfig;
    }
    /**
     * @return {?}
     */
    get routesConfig() {
        return this._routesConfig;
    }
    /**
     * @return {?}
     */
    get endpoint() {
        return ((this.serverConfig.backend.occ.baseUrl || '') +
            '/' +
            ENDPOINT_ROUTES_CONFIG);
    }
    /**
     * @return {?}
     */
    load() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const shouldFetch = this.configurableRoutesConfig.routesConfig.fetch;
            /** @type {?} */
            const fetchedRoutesConfig = shouldFetch
                ? yield this.fetch(this.endpoint)
                : null;
            this._routesConfig = this.extendStaticWith(fetchedRoutesConfig);
        });
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    fetch(url) {
        return this.http
            .get(url)
            .pipe(retry(2))
            .toPromise()
            .catch(() => {
            throw new Error(`Could not get routes configuration from url ${url}!`);
        });
    }
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    extendStaticWith(routesConfig) {
        /** @type {?} */
        const mergedRoutesConfig = deepMerge({}, this.configurableRoutesConfig.routesConfig, routesConfig);
        return this.extendLanguagesTranslationsWithDefault(mergedRoutesConfig);
    }
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    extendLanguagesTranslationsWithDefault(routesConfig) {
        /** @type {?} */
        const defaultTranslations = routesConfig.translations.default;
        Object.keys(routesConfig.translations).forEach(languageCode => {
            /** @type {?} */
            const languageTranslations = routesConfig.translations[languageCode];
            routesConfig.translations[languageCode] = deepMerge({}, defaultTranslations, languageTranslations);
        });
        return routesConfig;
    }
}
RoutesConfigLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RoutesConfigLoader.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig },
    { type: ConfigurableRoutesConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLWNvbmZpZy1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3JvdXRlcy1jb25maWctbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O01BRWxELHNCQUFzQixHQUFHLGVBQWU7QUFHOUMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBZTdCLFlBQ21CLElBQWdCLEVBQ2hCLFlBQXVCLEVBQ3ZCLHdCQUFrRDtRQUZsRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFXO1FBQ3ZCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDbEUsQ0FBQzs7OztJQWhCSixJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQzdDLEdBQUc7WUFDSCxzQkFBc0IsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFRSyxJQUFJOzs7a0JBQ0YsV0FBVyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSzs7a0JBQzlELG1CQUFtQixHQUFHLFdBQVc7Z0JBQ3JDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLElBQUk7WUFDUixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7S0FBQTs7Ozs7O0lBRU8sS0FBSyxDQUFDLEdBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2QsU0FBUyxFQUFFO2FBQ1gsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxZQUEwQjs7Y0FDM0Msa0JBQWtCLEdBQUcsU0FBUyxDQUNsQyxFQUFFLEVBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFDMUMsWUFBWSxDQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsc0NBQXNDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxzQ0FBc0MsQ0FDNUMsWUFBMEI7O2NBRXBCLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTztRQUU3RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7O2tCQUN0RCxvQkFBb0IsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNwRSxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FDakQsRUFBRSxFQUNGLG1CQUFtQixFQUNuQixvQkFBb0IsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7O1lBaEVGLFVBQVU7Ozs7WUFWRixVQUFVO1lBTVYsU0FBUztZQUZULHdCQUF3Qjs7Ozs7OztJQVEvQiwyQ0FBb0M7Ozs7O0lBZWxDLGtDQUFpQzs7Ozs7SUFDakMsMENBQXdDOzs7OztJQUN4QyxzREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NvbmZpZ3VyYWJsZS1yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcblxuY29uc3QgRU5EUE9JTlRfUk9VVEVTX0NPTkZJRyA9ICdyb3V0ZXMtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlc0NvbmZpZ0xvYWRlciB7XG4gIHByaXZhdGUgX3JvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnO1xuXG4gIGdldCByb3V0ZXNDb25maWcoKTogUm91dGVzQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGVzQ29uZmlnO1xuICB9XG5cbiAgZ2V0IGVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnNlcnZlckNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICAnLycgK1xuICAgICAgRU5EUE9JTlRfUk9VVEVTX0NPTkZJR1xuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2ZXJDb25maWc6IE9jY0NvbmZpZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3VyYWJsZVJvdXRlc0NvbmZpZzogQ29uZmlndXJhYmxlUm91dGVzQ29uZmlnXG4gICkge31cblxuICBhc3luYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNob3VsZEZldGNoID0gdGhpcy5jb25maWd1cmFibGVSb3V0ZXNDb25maWcucm91dGVzQ29uZmlnLmZldGNoO1xuICAgIGNvbnN0IGZldGNoZWRSb3V0ZXNDb25maWcgPSBzaG91bGRGZXRjaFxuICAgICAgPyBhd2FpdCB0aGlzLmZldGNoKHRoaXMuZW5kcG9pbnQpXG4gICAgICA6IG51bGw7XG4gICAgdGhpcy5fcm91dGVzQ29uZmlnID0gdGhpcy5leHRlbmRTdGF0aWNXaXRoKGZldGNoZWRSb3V0ZXNDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh1cmwpXG4gICAgICAucGlwZShyZXRyeSgyKSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZ2V0IHJvdXRlcyBjb25maWd1cmF0aW9uIGZyb20gdXJsICR7dXJsfSFgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRlbmRTdGF0aWNXaXRoKHJvdXRlc0NvbmZpZzogUm91dGVzQ29uZmlnKTogUm91dGVzQ29uZmlnIHtcbiAgICBjb25zdCBtZXJnZWRSb3V0ZXNDb25maWcgPSBkZWVwTWVyZ2UoXG4gICAgICB7fSxcbiAgICAgIHRoaXMuY29uZmlndXJhYmxlUm91dGVzQ29uZmlnLnJvdXRlc0NvbmZpZyxcbiAgICAgIHJvdXRlc0NvbmZpZ1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kTGFuZ3VhZ2VzVHJhbnNsYXRpb25zV2l0aERlZmF1bHQobWVyZ2VkUm91dGVzQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0ZW5kTGFuZ3VhZ2VzVHJhbnNsYXRpb25zV2l0aERlZmF1bHQoXG4gICAgcm91dGVzQ29uZmlnOiBSb3V0ZXNDb25maWdcbiAgKTogUm91dGVzQ29uZmlnIHtcbiAgICBjb25zdCBkZWZhdWx0VHJhbnNsYXRpb25zID0gcm91dGVzQ29uZmlnLnRyYW5zbGF0aW9ucy5kZWZhdWx0O1xuXG4gICAgT2JqZWN0LmtleXMocm91dGVzQ29uZmlnLnRyYW5zbGF0aW9ucykuZm9yRWFjaChsYW5ndWFnZUNvZGUgPT4ge1xuICAgICAgY29uc3QgbGFuZ3VhZ2VUcmFuc2xhdGlvbnMgPSByb3V0ZXNDb25maWcudHJhbnNsYXRpb25zW2xhbmd1YWdlQ29kZV07XG4gICAgICByb3V0ZXNDb25maWcudHJhbnNsYXRpb25zW2xhbmd1YWdlQ29kZV0gPSBkZWVwTWVyZ2UoXG4gICAgICAgIHt9LFxuICAgICAgICBkZWZhdWx0VHJhbnNsYXRpb25zLFxuICAgICAgICBsYW5ndWFnZVRyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByb3V0ZXNDb25maWc7XG4gIH1cbn1cbiJdfQ==