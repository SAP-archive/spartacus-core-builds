import { InjectionToken } from '@angular/core';
import { UrlMatcher } from '@angular/router';
import { UrlMatcherFactory } from '../url-matcher';
export interface RoutesConfig {
    [routeName: string]: RouteConfig;
}
export interface RouteConfig {
    /**
     * List of path aliases used to build the semantic links.
     * It's used also to match the URLs, unless the config property `matchers` is given for the same route.
     *
     * See https://angular.io/api/router/Route#path
     */
    paths?: string[];
    /**
     * Array of Angular `UrlMatcher`s and injection tokens of Spartacus `UrlMatcherFactory`.
     * All the url matchers (static and resolved from factories) will be used to match the route.
     * When not given (undefined or null), the configured `paths` will be used to match the the route.
     *
     * See https://angular.io/api/router/Route#matcher
     */
    matchers?: (UrlMatcher | InjectionToken<UrlMatcherFactory>)[];
    /**
     * Maps names of route params with params used to build the semantic link.
     */
    paramsMapping?: ParamsMapping;
    /**
     * Disables the url matcher for the route. But still allows for generation of semantic links.
     */
    disabled?: boolean;
    /**
     * When false, the route is public for unauthorized users even when the global flag `routing.protected` is true.
     * Other values (true, undefined) are ignored.
     */
    protected?: boolean;
}
export interface ParamsMapping {
    [paramName: string]: string;
}
