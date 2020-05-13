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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalRoutesService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFVybE1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTWF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV4dGVybmFsUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMtY29uZmlnJztcbi8qKlxuICogU2VydmljZSB0aGF0IGhlbHBzIHJlZGlyZWN0aW5nIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbXMgZm9yIGNvbmZpZ3VyZWQgVVJMc1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBFeHRlcm5hbFJvdXRlc1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IEV4dGVybmFsUm91dGVzQ29uZmlnO1xuICAgIHByb3RlY3RlZCB1cmxNYXRjaGVyU2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEV4dGVybmFsUm91dGVzQ29uZmlnLCB1cmxNYXRjaGVyU2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2UsIGluamVjdG9yOiBJbmplY3Rvcik7XG4gICAgcHJvdGVjdGVkIGdldCBpbnRlcm5hbFVybFBhdHRlcm5zKCk6IEV4dGVybmFsUm91dGVzQ29uZmlnWydyb3V0aW5nJ11bJ2ludGVybmFsJ107XG4gICAgLyoqXG4gICAgICogUHJlcGVuZHMgcm91dGVzICh0byB0aGUgUm91dGVyLmNvbmZpZykgdGhhdCBhcmUgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIGEgZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtXG4gICAgICovXG4gICAgYWRkUm91dGVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByb3V0ZXMgdGhhdCBhcmUgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW9uIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Um91dGVzKCk6IFJvdXRlcztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkwgbWF0Y2hlciBmb3IgdGhlIGV4dGVybmFsIHJvdXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFVybE1hdGNoZXIoKTogVXJsTWF0Y2hlcjtcbn1cbiJdfQ==