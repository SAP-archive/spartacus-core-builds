import { Injector } from '@angular/core';
import { Routes, UrlMatcher } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { ExternalRoutesConfig } from './external-routes-config';
/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalRoutesService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ExternalRoutesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBVcmxNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1hdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXJsLW1hdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0NvbmZpZyB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLWNvbmZpZyc7XG4vKipcbiAqIFNlcnZpY2UgdGhhdCBoZWxwcyByZWRpcmVjdGluZyB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zIGZvciBjb25maWd1cmVkIFVSTHNcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBFeHRlcm5hbFJvdXRlc0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgdXJsTWF0Y2hlclNlcnZpY2U6IFVybE1hdGNoZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3I7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBFeHRlcm5hbFJvdXRlc0NvbmZpZywgdXJsTWF0Y2hlclNlcnZpY2U6IFVybE1hdGNoZXJTZXJ2aWNlLCBpbmplY3RvcjogSW5qZWN0b3IpO1xuICAgIHByb3RlY3RlZCBnZXQgaW50ZXJuYWxVcmxQYXR0ZXJucygpOiBFeHRlcm5hbFJvdXRlc0NvbmZpZ1sncm91dGluZyddWydpbnRlcm5hbCddO1xuICAgIC8qKlxuICAgICAqIFByZXBlbmRzIHJvdXRlcyAodG8gdGhlIFJvdXRlci5jb25maWcpIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGluZyB0byBhIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbVxuICAgICAqL1xuICAgIGFkZFJvdXRlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgcm91dGVzIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGlvbiB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJvdXRlcygpOiBSb3V0ZXM7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgVVJMIG1hdGNoZXIgZm9yIHRoZSBleHRlcm5hbCByb3V0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXI7XG59XG4iXX0=