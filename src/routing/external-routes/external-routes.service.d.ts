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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VybC1tYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNDb25maWcgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy1jb25maWcnO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgaGVscHMgcmVkaXJlY3RpbmcgdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtcyBmb3IgY29uZmlndXJlZCBVUkxzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dGVybmFsUm91dGVzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRXh0ZXJuYWxSb3V0ZXNDb25maWc7XG4gICAgcHJvdGVjdGVkIHVybE1hdGNoZXJTZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogRXh0ZXJuYWxSb3V0ZXNDb25maWcsIHVybE1hdGNoZXJTZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZSwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBwcm90ZWN0ZWQgZ2V0IGludGVybmFsVXJsUGF0dGVybnMoKTogRXh0ZXJuYWxSb3V0ZXNDb25maWdbJ3JvdXRpbmcnXVsnaW50ZXJuYWwnXTtcbiAgICAvKipcbiAgICAgKiBQcmVwZW5kcyByb3V0ZXMgKHRvIHRoZSBSb3V0ZXIuY29uZmlnKSB0aGF0IGFyZSByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3RpbmcgdG8gYSBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1cbiAgICAgKi9cbiAgICBhZGRSb3V0ZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJvdXRlcyB0aGF0IGFyZSByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3Rpb24gdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSb3V0ZXMoKTogUm91dGVzO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVSTCBtYXRjaGVyIGZvciB0aGUgZXh0ZXJuYWwgcm91dGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0VXJsTWF0Y2hlcigpOiBVcmxNYXRjaGVyO1xufVxuIl19