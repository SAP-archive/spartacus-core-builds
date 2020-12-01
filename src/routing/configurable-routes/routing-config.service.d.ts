import { RouteLoadStrategy, RoutingConfig } from './config/routing-config';
import { RouteConfig } from './routes-config';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingConfigService {
    protected config: RoutingConfig;
    /**
     * Reversed routing config for quick lookup of the route name by the configured path.
     */
    protected routeNamesByPath: {
        [path: string]: string;
    };
    constructor(config: RoutingConfig);
    /**
     * Returns the route config for the given route name.
     */
    getRouteConfig(routeName: string): RouteConfig;
    private warn;
    /**
     * Returns the configured route loading strategy.
     */
    getLoadStrategy(): RouteLoadStrategy;
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
    getRouteName(path: string): string;
    /**
     * Initializes the property `routeNamesByPath`.
     *
     * The original config allows for reading configured path by the route name.
     * But this method builds up a structure with a 'reversed config'
     * to read quickly the route name by the path.
     */
    protected initRouteNamesByPath(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingConfigService, never>;
}

//# sourceMappingURL=routing-config.service.d.ts.map