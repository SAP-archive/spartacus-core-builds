import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { RoutingConfig } from './config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/routing-config";
let RoutingConfigService = class RoutingConfigService {
    constructor(config) {
        this.config = config;
    }
    getRouteConfig(routeName) {
        const routeConfig = this.config && this.config.routing && this.config.routing.routes;
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
};
RoutingConfigService.ctorParameters = () => [
    { type: RoutingConfig }
];
RoutingConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(i0.ɵɵinject(i1.RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
RoutingConfigService = __decorate([
    Injectable({ providedIn: 'root' })
], RoutingConfigService);
export { RoutingConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFHeEQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFL0MsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE1BQU0sV0FBVyxHQUNmLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLE1BQU0sTUFBTSxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsK0NBQStDLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbEIrQixhQUFhOzs7QUFEaEMsb0JBQW9CO0lBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixvQkFBb0IsQ0FtQmhDO1NBbkJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHt9XG5cbiAgZ2V0Um91dGVDb25maWcocm91dGVOYW1lOiBzdHJpbmcpOiBSb3V0ZUNvbmZpZyB7XG4gICAgY29uc3Qgcm91dGVDb25maWcgPVxuICAgICAgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZyAmJiB0aGlzLmNvbmZpZy5yb3V0aW5nLnJvdXRlcztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKGBObyBwYXRoIHdhcyBjb25maWd1cmVkIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSchYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19