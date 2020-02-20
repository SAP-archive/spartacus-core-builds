import { __decorate, __read, __spread } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { RoutingConfig } from './config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/routing-config";
var RoutingConfigService = /** @class */ (function () {
    function RoutingConfigService(config) {
        this.config = config;
    }
    RoutingConfigService.prototype.getRouteConfig = function (routeName) {
        var routeConfig = this.config && this.config.routing && this.config.routing.routes;
        var result = routeConfig && routeConfig[routeName];
        if (!routeConfig || result === undefined) {
            this.warn("No path was configured for the named route '" + routeName + "'!");
        }
        return result;
    };
    RoutingConfigService.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isDevMode()) {
            console.warn.apply(console, __spread(args));
        }
    };
    RoutingConfigService.ctorParameters = function () { return [
        { type: RoutingConfig }
    ]; };
    RoutingConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(i0.ɵɵinject(i1.RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
    RoutingConfigService = __decorate([
        Injectable({ providedIn: 'root' })
    ], RoutingConfigService);
    return RoutingConfigService;
}());
export { RoutingConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFHeEQ7SUFDRSw4QkFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFL0MsNkNBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzlCLElBQU0sV0FBVyxHQUNmLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRW5FLElBQU0sTUFBTSxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsaURBQStDLFNBQVMsT0FBSSxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sbUNBQUksR0FBWjtRQUFhLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ2xCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sV0FBUyxJQUFJLEdBQUU7U0FDdkI7SUFDSCxDQUFDOztnQkFqQjZCLGFBQWE7OztJQURoQyxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQW1CaEM7K0JBeEJEO0NBd0JDLEFBbkJELElBbUJDO1NBbkJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHt9XG5cbiAgZ2V0Um91dGVDb25maWcocm91dGVOYW1lOiBzdHJpbmcpOiBSb3V0ZUNvbmZpZyB7XG4gICAgY29uc3Qgcm91dGVDb25maWcgPVxuICAgICAgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZyAmJiB0aGlzLmNvbmZpZy5yb3V0aW5nLnJvdXRlcztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKGBObyBwYXRoIHdhcyBjb25maWd1cmVkIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSchYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19