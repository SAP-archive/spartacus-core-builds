import { Injector } from '@angular/core';
import { Routes, UrlMatcher } from '@angular/router';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { ExternalRoutesConfig } from './external-routes-config';
/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
import * as ɵngcc0 from '@angular/core';
export declare class ExternalRoutesService {
    protected config: ExternalRoutesConfig;
    protected matcherFactory: UrlMatcherFactoryService;
    protected injector: Injector;
    constructor(config: ExternalRoutesConfig, matcherFactory: UrlMatcherFactoryService, injector: Injector);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalRoutesService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ExternalRoutesService>;
}

//# sourceMappingURL=external-routes.service.d.ts.map