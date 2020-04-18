import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { RouteLoadStrategy, RoutingConfig } from './config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/routing-config";
let RoutingConfigService = class RoutingConfigService {
    constructor(config) {
        this.config = config;
    }
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
    getLoadStrategy() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.routing) === null || _b === void 0 ? void 0 : _b.loadStrategy) !== null && _c !== void 0 ? _c : "always" /* ALWAYS */;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFHM0UsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFL0MsY0FBYyxDQUFDLFNBQWlCOztRQUM5QixNQUFNLFdBQVcsZUFBRyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLDBDQUFFLE1BQU0sQ0FBQztRQUVqRCxNQUFNLE1BQU0sR0FBRyxXQUFXLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLCtDQUErQyxTQUFTLElBQUksQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDbEIsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxlQUFlOztRQUNiLHlCQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sMENBQUUsWUFBWSx5REFBNkI7SUFDeEUsQ0FBQztDQUNGLENBQUE7O1lBckIrQixhQUFhOzs7QUFEaEMsb0JBQW9CO0lBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixvQkFBb0IsQ0FzQmhDO1NBdEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVMb2FkU3RyYXRlZ3ksIFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUm91dGluZ0NvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7fVxuXG4gIGdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZTogc3RyaW5nKTogUm91dGVDb25maWcge1xuICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5jb25maWc/LnJvdXRpbmc/LnJvdXRlcztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKGBObyBwYXRoIHdhcyBjb25maWd1cmVkIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSchYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGdldExvYWRTdHJhdGVneSgpOiBSb3V0ZUxvYWRTdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnPy5yb3V0aW5nPy5sb2FkU3RyYXRlZ3kgPz8gUm91dGVMb2FkU3RyYXRlZ3kuQUxXQVlTO1xuICB9XG59XG4iXX0=