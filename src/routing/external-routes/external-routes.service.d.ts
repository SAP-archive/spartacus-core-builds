import { Injector } from '@angular/core';
import { Routes, UrlMatcher } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { ExternalRoutesConfig } from './external-routes-config';
/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
export declare class ExternalRoutesService {
    protected config: ExternalRoutesConfig;
    protected urlMatcherService: UrlMatcherService;
    protected injector: Injector;
    constructor(config: ExternalRoutesConfig, urlMatcherService: UrlMatcherService, injector: Injector);
    protected get internalUrlPatterns(): ExternalRoutesConfig['routing']['internal'];
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     */
    addRoutes(): void;
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     */
    protected getRoutes(): Routes;
    /**
     * Returns the URL matcher for the external route
     */
    protected getUrlMatcher(): UrlMatcher;
}
