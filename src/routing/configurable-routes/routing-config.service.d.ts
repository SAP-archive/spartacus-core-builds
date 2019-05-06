import { RouteConfig } from './routes-config';
import { RoutingConfig } from './config/routing-config';
export declare class RoutingConfigService {
    private config;
    constructor(config: RoutingConfig);
    getRouteConfig(routeName: string): RouteConfig;
    private warn;
}
