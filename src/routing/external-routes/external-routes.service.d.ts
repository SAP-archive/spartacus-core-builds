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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNDb25maWcgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy1jb25maWcnO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgaGVscHMgcmVkaXJlY3RpbmcgdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtcyBmb3IgY29uZmlndXJlZCBVUkxzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dGVybmFsUm91dGVzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRXh0ZXJuYWxSb3V0ZXNDb25maWc7XG4gICAgcHJvdGVjdGVkIG1hdGNoZXJGYWN0b3J5OiBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEV4dGVybmFsUm91dGVzQ29uZmlnLCBtYXRjaGVyRmFjdG9yeTogVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlLCBpbmplY3RvcjogSW5qZWN0b3IpO1xuICAgIHByb3RlY3RlZCBnZXQgaW50ZXJuYWxVcmxQYXR0ZXJucygpOiBFeHRlcm5hbFJvdXRlc0NvbmZpZ1sncm91dGluZyddWydpbnRlcm5hbCddO1xuICAgIC8qKlxuICAgICAqIFByZXBlbmRzIHJvdXRlcyAodG8gdGhlIFJvdXRlci5jb25maWcpIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGluZyB0byBhIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbVxuICAgICAqL1xuICAgIGFkZFJvdXRlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgcm91dGVzIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGlvbiB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJvdXRlcygpOiBSb3V0ZXM7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgVVJMIG1hdGNoZXIgZm9yIHRoZSBleHRlcm5hbCByb3V0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXI7XG59XG4iXX0=