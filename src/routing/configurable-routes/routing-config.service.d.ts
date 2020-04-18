import { RouteConfig } from './routes-config';
import { RouteLoadStrategy, RoutingConfig } from './config/routing-config';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingConfigService {
    protected config: RoutingConfig;
    constructor(config: RoutingConfig);
    getRouteConfig(routeName: string): RouteConfig;
    private warn;
    getLoadStrategy(): RouteLoadStrategy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingConfigService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJyb3V0aW5nLWNvbmZpZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZUxvYWRTdHJhdGVneSwgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3JvdXRpbmctY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRpbmdDb25maWdTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUm91dGluZ0NvbmZpZyk7XG4gICAgZ2V0Um91dGVDb25maWcocm91dGVOYW1lOiBzdHJpbmcpOiBSb3V0ZUNvbmZpZztcbiAgICBwcml2YXRlIHdhcm47XG4gICAgZ2V0TG9hZFN0cmF0ZWd5KCk6IFJvdXRlTG9hZFN0cmF0ZWd5O1xufVxuIl19