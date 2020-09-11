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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJyb3V0aW5nLWNvbmZpZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZUxvYWRTdHJhdGVneSwgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3JvdXRpbmctY29uZmlnJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRpbmdDb25maWdTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFJldmVyc2VkIHJvdXRpbmcgY29uZmlnIGZvciBxdWljayBsb29rdXAgb2YgdGhlIHJvdXRlIG5hbWUgYnkgdGhlIGNvbmZpZ3VyZWQgcGF0aC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcm91dGVOYW1lc0J5UGF0aDoge1xuICAgICAgICBbcGF0aDogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBSb3V0aW5nQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByb3V0ZSBjb25maWcgZm9yIHRoZSBnaXZlbiByb3V0ZSBuYW1lLlxuICAgICAqL1xuICAgIGdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZTogc3RyaW5nKTogUm91dGVDb25maWc7XG4gICAgcHJpdmF0ZSB3YXJuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbmZpZ3VyZWQgcm91dGUgbG9hZGluZyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICBnZXRMb2FkU3RyYXRlZ3koKTogUm91dGVMb2FkU3RyYXRlZ3k7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcm91dGUgbmFtZSBvZiB0aGUgY29uZmlndXJlZCBwYXRoLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIHdoZW4gdGhlIGNvbmZpZyBpczpcbiAgICAgKiBgYGBcbiAgICAgKiByb3V0aW5nOiB7XG4gICAgICogICByb3V0ZXM6IHtcbiAgICAgKiAgICAgIGFkZHJlc3NCb29rOiB7IHBhdGhzOiBbJ215LWFjY291bnQvYWRkcmVzcy1ib29rJ10gfVxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIHRoZSBgZ2V0Um91dGVOYW1lKCdteS1hY2NvdW50L2FkZHJlc3MtYm9vaycpYCByZXR1cm5zIGAnYWRkcmVzc0Jvb2snYC5cbiAgICAgKi9cbiAgICBnZXRSb3V0ZU5hbWUocGF0aDogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0eSBgcm91dGVOYW1lc0J5UGF0aGAuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgY29uZmlnIGFsbG93cyBmb3IgcmVhZGluZyBjb25maWd1cmVkIHBhdGggYnkgdGhlIHJvdXRlIG5hbWUuXG4gICAgICogQnV0IHRoaXMgbWV0aG9kIGJ1aWxkcyB1cCBhIHN0cnVjdHVyZSB3aXRoIGEgJ3JldmVyc2VkIGNvbmZpZydcbiAgICAgKiB0byByZWFkIHF1aWNrbHkgdGhlIHJvdXRlIG5hbWUgYnkgdGhlIHBhdGguXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRSb3V0ZU5hbWVzQnlQYXRoKCk6IHZvaWQ7XG59XG4iXX0=