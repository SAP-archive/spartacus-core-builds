import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { RouteLoadStrategy, RoutingConfig } from './config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/routing-config";
let RoutingConfigService = class RoutingConfigService {
    constructor(config) {
        this.config = config;
    }
    /**
     * Returns the route config for the given route name.
     */
    getRouteConfig(routeName) {
        var _a, _b;
        const routeConfig = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.routing) === null || _b === void 0 ? void 0 : _b.routes;
        const result = routeConfig && routeConfig[routeName];
        if (!routeConfig || result === undefined) {
            this.warn(`No path was configured for the named route '${routeName}'!`);
        }
        return result;
    }
    warn(...args) {
        if (isDevMode()) {
            console.warn(...args);
        }
    }
    /**
     * Returns the configured route loading strategy.
     */
    getLoadStrategy() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.routing) === null || _b === void 0 ? void 0 : _b.loadStrategy) !== null && _c !== void 0 ? _c : "always" /* ALWAYS */;
    }
    /**
     * Returns the route name of the configured path.
     *
     * For example, when the config is:
     * ```
     * routing: {
     *   routes: {
     *      addressBook: { paths: ['my-account/address-book'] }
     *   }
     * }
     * ```
     *
     * the `getRouteName('my-account/address-book')` returns `'addressBook'`.
     */
    getRouteName(path) {
        if (!this.routeNamesByPath) {
            this.initRouteNamesByPath();
        }
        return this.routeNamesByPath[path];
    }
    /**
     * Initializes the property `routeNamesByPath`.
     *
     * The original config allows for reading configured path by the route name.
     * But this method builds up a structure with a 'reversed config'
     * to read quickly the route name by the path.
     */
    initRouteNamesByPath() {
        var _a, _b, _c;
        this.routeNamesByPath = {};
        for (const [routeName, routeConfig] of Object.entries((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.routing) === null || _b === void 0 ? void 0 : _b.routes)) {
            (_c = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) === null || _c === void 0 ? void 0 : _c.forEach((path) => {
                if (isDevMode() && this.routeNamesByPath[path]) {
                    console.error(`The same path '${path}' is configured for two different route names: '${this.routeNamesByPath[path]}' and '${routeName}`);
                }
                this.routeNamesByPath[path] = routeName;
            });
        }
    }
};
RoutingConfigService.ctorParameters = () => [
    { type: RoutingConfig }
];
RoutingConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(i0.ɵɵinject(i1.RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
RoutingConfigService = __decorate([
    Injectable({ providedIn: 'root' })
], RoutingConfigService);
export { RoutingConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFJM0UsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFNL0IsWUFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFL0M7O09BRUc7SUFDSCxjQUFjLENBQUMsU0FBaUI7O1FBQzlCLE1BQU0sV0FBVyxlQUFHLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsTUFBTSxDQUFDO1FBRWpELE1BQU0sTUFBTSxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsK0NBQStDLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTs7UUFDYix5QkFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLDBDQUFFLFlBQVkseURBQTZCO0lBQ3hFLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxvQkFBb0I7O1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFM0IsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLGFBQ25ELElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsTUFBTSxDQUM3QixFQUFFO1lBQ0QsTUFBQSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsS0FBSywwQ0FBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQ1gsa0JBQWtCLElBQUksbURBQW1ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxTQUFTLEVBQUUsQ0FDMUgsQ0FBQztpQkFDSDtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzFDLENBQUMsRUFBRTtTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBeEUrQixhQUFhOzs7QUFOaEMsb0JBQW9CO0lBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixvQkFBb0IsQ0E4RWhDO1NBOUVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVMb2FkU3RyYXRlZ3ksIFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUm91dGluZ0NvbmZpZ1NlcnZpY2Uge1xuICAvKipcbiAgICogUmV2ZXJzZWQgcm91dGluZyBjb25maWcgZm9yIHF1aWNrIGxvb2t1cCBvZiB0aGUgcm91dGUgbmFtZSBieSB0aGUgY29uZmlndXJlZCBwYXRoLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJvdXRlTmFtZXNCeVBhdGg6IHsgW3BhdGg6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvdXRlIGNvbmZpZyBmb3IgdGhlIGdpdmVuIHJvdXRlIG5hbWUuXG4gICAqL1xuICBnZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWU6IHN0cmluZyk6IFJvdXRlQ29uZmlnIHtcbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMuY29uZmlnPy5yb3V0aW5nPy5yb3V0ZXM7XG5cbiAgICBjb25zdCByZXN1bHQgPSByb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdO1xuICAgIGlmICghcm91dGVDb25maWcgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihgTm8gcGF0aCB3YXMgY29uZmlndXJlZCBmb3IgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nIWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uZmlndXJlZCByb3V0ZSBsb2FkaW5nIHN0cmF0ZWd5LlxuICAgKi9cbiAgZ2V0TG9hZFN0cmF0ZWd5KCk6IFJvdXRlTG9hZFN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc/LnJvdXRpbmc/LmxvYWRTdHJhdGVneSA/PyBSb3V0ZUxvYWRTdHJhdGVneS5BTFdBWVM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm91dGUgbmFtZSBvZiB0aGUgY29uZmlndXJlZCBwYXRoLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgd2hlbiB0aGUgY29uZmlnIGlzOlxuICAgKiBgYGBcbiAgICogcm91dGluZzoge1xuICAgKiAgIHJvdXRlczoge1xuICAgKiAgICAgIGFkZHJlc3NCb29rOiB7IHBhdGhzOiBbJ215LWFjY291bnQvYWRkcmVzcy1ib29rJ10gfVxuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGBnZXRSb3V0ZU5hbWUoJ215LWFjY291bnQvYWRkcmVzcy1ib29rJylgIHJldHVybnMgYCdhZGRyZXNzQm9vaydgLlxuICAgKi9cbiAgZ2V0Um91dGVOYW1lKHBhdGg6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5yb3V0ZU5hbWVzQnlQYXRoKSB7XG4gICAgICB0aGlzLmluaXRSb3V0ZU5hbWVzQnlQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJvdXRlTmFtZXNCeVBhdGhbcGF0aF07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnR5IGByb3V0ZU5hbWVzQnlQYXRoYC5cbiAgICpcbiAgICogVGhlIG9yaWdpbmFsIGNvbmZpZyBhbGxvd3MgZm9yIHJlYWRpbmcgY29uZmlndXJlZCBwYXRoIGJ5IHRoZSByb3V0ZSBuYW1lLlxuICAgKiBCdXQgdGhpcyBtZXRob2QgYnVpbGRzIHVwIGEgc3RydWN0dXJlIHdpdGggYSAncmV2ZXJzZWQgY29uZmlnJ1xuICAgKiB0byByZWFkIHF1aWNrbHkgdGhlIHJvdXRlIG5hbWUgYnkgdGhlIHBhdGguXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFJvdXRlTmFtZXNCeVBhdGgoKSB7XG4gICAgdGhpcy5yb3V0ZU5hbWVzQnlQYXRoID0ge307XG5cbiAgICBmb3IgKGNvbnN0IFtyb3V0ZU5hbWUsIHJvdXRlQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIHRoaXMuY29uZmlnPy5yb3V0aW5nPy5yb3V0ZXNcbiAgICApKSB7XG4gICAgICByb3V0ZUNvbmZpZz8ucGF0aHM/LmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKGlzRGV2TW9kZSgpICYmIHRoaXMucm91dGVOYW1lc0J5UGF0aFtwYXRoXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVGhlIHNhbWUgcGF0aCAnJHtwYXRofScgaXMgY29uZmlndXJlZCBmb3IgdHdvIGRpZmZlcmVudCByb3V0ZSBuYW1lczogJyR7dGhpcy5yb3V0ZU5hbWVzQnlQYXRoW3BhdGhdfScgYW5kICcke3JvdXRlTmFtZX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlTmFtZXNCeVBhdGhbcGF0aF0gPSByb3V0ZU5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==