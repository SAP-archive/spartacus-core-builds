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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIFVybE1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTWF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXJsLW1hdGNoZXIvdXJsLW1hdGNoZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVybE1hdGNoZXJTZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSwgdXJsTWF0Y2hlclNlcnZpY2U6IFVybE1hdGNoZXJTZXJ2aWNlKTtcbiAgICBwcm90ZWN0ZWQgaW5pdENhbGxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBFbmhhbmNlcyBleGlzdGluZyBBbmd1bGFyIHJvdXRlcyB1c2luZyB0aGUgcm91dGluZyBjb25maWcgb2YgU3BhcnRhY3VzLlxuICAgICAqIENhbiBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgICAqL1xuICAgIGluaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBFbmhhbmNlcyBleGlzdGluZyBBbmd1bGFyIHJvdXRlcyB1c2luZyB0aGUgcm91dGluZyBjb25maWcgb2YgU3BhcnRhY3VzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25maWd1cmUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgcGF0aGAgb3IgYG1hdGNoZXJgIGZvciB0aGUgZ2l2ZW4gcm91dGVzLCBiYXNlZCBvbiB0aGUgU3BhcnRhY3VzJyByb3V0aW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcm91dGVzIGxpc3Qgb2YgQW5ndWxhciBgUm91dGVgIG9iamVjdHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uZmlndXJlUm91dGVzKHJvdXRlczogUm91dGVzKTogUm91dGVzO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBwYXRoYCBvciBgbWF0Y2hlcmAgb2YgdGhlIGBSb3V0ZWAsIGJhc2VkIG9uIHRoZSBTcGFydGFjdXMnIHJvdXRpbmcgY29uZmlndXJhdGlvbi5cbiAgICAgKiBVc2VzIHRoZSBwcm9wZXJ0eSBgZGF0YS5jeFJvdXRlYCB0byBkZXRlcm1pbmUgdGhlIG5hbWUgb2YgdGhlIHJvdXRlLlxuICAgICAqIEl0J3MgdGhlIHNhbWUgbmFtZSB1c2VkIGFzIGEga2V5IGluIHRoZSByb3V0aW5nIGNvbmZpZ3VyYXRpb246IGByb3V0aW5nLnJvdXRlc1tST1VURSBOQU1FXWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcm91dGUgQW5ndWxhciBgUm91dGVgIG9iamVjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25maWd1cmVSb3V0ZShyb3V0ZTogUm91dGUpOiBSb3V0ZTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIGBVcmxNYXRjaGVyYCBiYXNlZCBvbiBnaXZlbiBtYXRjaGVycyBhbmQgZmFjdG9yaWVzIG9mIG1hdGNoZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlIFJvdXRlIG9iamVjdFxuICAgICAqIEBwYXJhbSBtYXRjaGVyc09yRmFjdG9yaWVzIGBVcmxNYXRjaGVyYHMgb3IgaW5qZWN0aW9uIHRva2VucyB3aXRoIGEgZmFjdG9yeSBmdW5jdGlvbnNcbiAgICAgKiAgdGhhdCBjcmVhdGUgVXJsTWF0Y2hlcnMgYmFzZWQgb24gdGhlIGdpdmVuIHJvdXRlLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXNvbHZlVXJsTWF0Y2hlcnMocm91dGU6IFJvdXRlLCBtYXRjaGVyc09yRmFjdG9yaWVzOiBSb3V0ZUNvbmZpZ1snbWF0Y2hlcnMnXSk6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBgVXJsTWF0Y2hlcmAgYmFzZWQgb24gdGhlIGdpdmVuIHJvdXRlLCB1c2luZyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBjb21pbmcgZnJvbSB0aGUgZ2l2ZW4gaW5qZWN0aW9uIHRva2VuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlIFJvdXRlIG9iamVjdFxuICAgICAqIEBwYXJhbSBmYWN0b3J5VG9rZW4gaW5qZWN0aW9uIHRva2VuIHdpdGggYSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBjcmVhdGUgYW4gVXJsTWF0Y2hlciB1c2luZyBnaXZlbiByb3V0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXNvbHZlVXJsTWF0Y2hlckZhY3Rvcnkocm91dGU6IFJvdXRlLCBmYWN0b3J5VG9rZW46IEluamVjdGlvblRva2VuPFVybE1hdGNoZXJGYWN0b3J5Pik6IFVybE1hdGNoZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgUm91dGUgc3RvcmVkIGluIGl0cyBwcm9wZXJ0eSBgZGF0YS5jeFJvdXRlYFxuICAgICAqIEBwYXJhbSByb3V0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSb3V0ZU5hbWUocm91dGU6IFJvdXRlKTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCB2YWxpZGF0ZVJvdXRlQ29uZmlnKHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZywgcm91dGVOYW1lOiBzdHJpbmcsIHJvdXRlOiBSb3V0ZSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSB3YXJuO1xufVxuIl19