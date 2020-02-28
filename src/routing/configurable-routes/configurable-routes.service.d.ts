import { InjectionToken, Injector } from '@angular/core';
import { Route, Routes, UrlMatcher } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { UrlMatcherFactory } from '../url-matcher/url-matcher-factory';
import { RouteConfig } from './routes-config';
import { RoutingConfigService } from './routing-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class ConfigurableRoutesService {
    protected injector: Injector;
    protected routingConfigService: RoutingConfigService;
    protected urlMatcherService: UrlMatcherService;
    constructor(injector: Injector, routingConfigService: RoutingConfigService, urlMatcherService: UrlMatcherService);
    protected initCalled: boolean;
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     * Can be called only once.
     */
    init(): void;
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     */
    protected configure(): void;
    /**
     * Sets the property `path` or `matcher` for the given routes, based on the Spartacus' routing configuration.
     *
     * @param routes list of Angular `Route` objects
     */
    protected configureRoutes(routes: Routes): Routes;
    /**
     * Sets the property `path` or `matcher` of the `Route`, based on the Spartacus' routing configuration.
     * Uses the property `data.cxRoute` to determine the name of the route.
     * It's the same name used as a key in the routing configuration: `routing.routes[ROUTE NAME]`.
     *
     * @param route Angular `Route` object
     */
    protected configureRoute(route: Route): Route;
    /**
     * Creates a single `UrlMatcher` based on given matchers and factories of matchers.
     *
     * @param route Route object
     * @param matchersOrFactories `UrlMatcher`s or injection tokens with a factory functions
     *  that create UrlMatchers based on the given route.
     */
    protected resolveUrlMatchers(route: Route, matchersOrFactories: RouteConfig['matchers']): UrlMatcher;
    /**
     * Creates an `UrlMatcher` based on the given route, using the factory function coming from the given injection token.
     *
     * @param route Route object
     * @param factoryToken injection token with a factory function that will create an UrlMatcher using given route
     */
    protected resolveUrlMatcherFactory(route: Route, factoryToken: InjectionToken<UrlMatcherFactory>): UrlMatcher;
    /**
     * Returns the name of the Route stored in its property `data.cxRoute`
     * @param route
     */
    protected getRouteName(route: Route): string;
    protected validateRouteConfig(routeConfig: RouteConfig, routeName: string, route: Route): void;
    private warn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigurableRoutesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCBVcmxNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1hdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXJsLW1hdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeSB9IGZyb20gJy4uL3VybC1tYXRjaGVyL3VybC1tYXRjaGVyLWZhY3RvcnknO1xuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcjtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1cmxNYXRjaGVyU2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsIHVybE1hdGNoZXJTZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZSk7XG4gICAgcHJvdGVjdGVkIGluaXRDYWxsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW5oYW5jZXMgZXhpc3RpbmcgQW5ndWxhciByb3V0ZXMgdXNpbmcgdGhlIHJvdXRpbmcgY29uZmlnIG9mIFNwYXJ0YWN1cy5cbiAgICAgKiBDYW4gYmUgY2FsbGVkIG9ubHkgb25jZS5cbiAgICAgKi9cbiAgICBpbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRW5oYW5jZXMgZXhpc3RpbmcgQW5ndWxhciByb3V0ZXMgdXNpbmcgdGhlIHJvdXRpbmcgY29uZmlnIG9mIFNwYXJ0YWN1cy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uZmlndXJlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYHBhdGhgIG9yIGBtYXRjaGVyYCBmb3IgdGhlIGdpdmVuIHJvdXRlcywgYmFzZWQgb24gdGhlIFNwYXJ0YWN1cycgcm91dGluZyBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlcyBsaXN0IG9mIEFuZ3VsYXIgYFJvdXRlYCBvYmplY3RzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyk6IFJvdXRlcztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgcGF0aGAgb3IgYG1hdGNoZXJgIG9mIHRoZSBgUm91dGVgLCBiYXNlZCBvbiB0aGUgU3BhcnRhY3VzJyByb3V0aW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICogVXNlcyB0aGUgcHJvcGVydHkgYGRhdGEuY3hSb3V0ZWAgdG8gZGV0ZXJtaW5lIHRoZSBuYW1lIG9mIHRoZSByb3V0ZS5cbiAgICAgKiBJdCdzIHRoZSBzYW1lIG5hbWUgdXNlZCBhcyBhIGtleSBpbiB0aGUgcm91dGluZyBjb25maWd1cmF0aW9uOiBgcm91dGluZy5yb3V0ZXNbUk9VVEUgTkFNRV1gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlIEFuZ3VsYXIgYFJvdXRlYCBvYmplY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uZmlndXJlUm91dGUocm91dGU6IFJvdXRlKTogUm91dGU7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNpbmdsZSBgVXJsTWF0Y2hlcmAgYmFzZWQgb24gZ2l2ZW4gbWF0Y2hlcnMgYW5kIGZhY3RvcmllcyBvZiBtYXRjaGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3V0ZSBSb3V0ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gbWF0Y2hlcnNPckZhY3RvcmllcyBgVXJsTWF0Y2hlcmBzIG9yIGluamVjdGlvbiB0b2tlbnMgd2l0aCBhIGZhY3RvcnkgZnVuY3Rpb25zXG4gICAgICogIHRoYXQgY3JlYXRlIFVybE1hdGNoZXJzIGJhc2VkIG9uIHRoZSBnaXZlbiByb3V0ZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZVVybE1hdGNoZXJzKHJvdXRlOiBSb3V0ZSwgbWF0Y2hlcnNPckZhY3RvcmllczogUm91dGVDb25maWdbJ21hdGNoZXJzJ10pOiBVcmxNYXRjaGVyO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gYFVybE1hdGNoZXJgIGJhc2VkIG9uIHRoZSBnaXZlbiByb3V0ZSwgdXNpbmcgdGhlIGZhY3RvcnkgZnVuY3Rpb24gY29taW5nIGZyb20gdGhlIGdpdmVuIGluamVjdGlvbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3V0ZSBSb3V0ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gZmFjdG9yeVRva2VuIGluamVjdGlvbiB0b2tlbiB3aXRoIGEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgY3JlYXRlIGFuIFVybE1hdGNoZXIgdXNpbmcgZ2l2ZW4gcm91dGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZVVybE1hdGNoZXJGYWN0b3J5KHJvdXRlOiBSb3V0ZSwgZmFjdG9yeVRva2VuOiBJbmplY3Rpb25Ub2tlbjxVcmxNYXRjaGVyRmFjdG9yeT4pOiBVcmxNYXRjaGVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIFJvdXRlIHN0b3JlZCBpbiBpdHMgcHJvcGVydHkgYGRhdGEuY3hSb3V0ZWBcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Um91dGVOYW1lKHJvdXRlOiBSb3V0ZSk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgdmFsaWRhdGVSb3V0ZUNvbmZpZyhyb3V0ZUNvbmZpZzogUm91dGVDb25maWcsIHJvdXRlTmFtZTogc3RyaW5nLCByb3V0ZTogUm91dGUpOiB2b2lkO1xuICAgIHByaXZhdGUgd2Fybjtcbn1cbiJdfQ==