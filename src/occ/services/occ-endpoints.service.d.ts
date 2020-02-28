import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccEndpointsService {
    private config;
    private baseSiteService;
    private activeBaseSite;
    private readonly SCOPE_SUFFIX;
    constructor(config: OccConfig, baseSiteService: BaseSiteService);
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    getRawEndpoint(endpoint: string): string;
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     */
    getBaseEndpoint(): string;
    /**
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param endpoint Endpoint suffix
     */
    getEndpoint(endpoint: string): string;
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param endpoint Name of the OCC endpoint key config
     * @param urlParams  URL parameters
     * @param queryParams Query parameters
     * @param scope
     */
    getUrl(endpoint: string, urlParams?: object, queryParams?: object, scope?: string): string;
    private getEndpointForScope;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccEndpointsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1lbmRwb2ludHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjRW5kcG9pbnRzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBiYXNlU2l0ZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNDT1BFX1NVRkZJWDtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE9jY0NvbmZpZywgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW5kIGVuZHBvaW50IHN0YXJ0aW5nIGZyb20gdGhlIE9DQyBiYXNlVXJsIChubyBiYXNlU2l0ZSlcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAgICovXG4gICAgZ2V0UmF3RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJhc2UgT0NDIGVuZHBvaW50IChiYXNlVXJsICsgcHJlZml4ICsgYmFzZVNpdGUpXG4gICAgICovXG4gICAgZ2V0QmFzZUVuZHBvaW50KCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIE9DQyBlbmRwb2ludCBpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGVcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAgICovXG4gICAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVsbHkgcXVhbGlmaWVkIE9DQyBVcmwgKGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZSlcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgTmFtZSBvZiB0aGUgT0NDIGVuZHBvaW50IGtleSBjb25maWdcbiAgICAgKiBAcGFyYW0gdXJsUGFyYW1zICBVUkwgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSBxdWVyeVBhcmFtcyBRdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICovXG4gICAgZ2V0VXJsKGVuZHBvaW50OiBzdHJpbmcsIHVybFBhcmFtcz86IG9iamVjdCwgcXVlcnlQYXJhbXM/OiBvYmplY3QsIHNjb3BlPzogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByaXZhdGUgZ2V0RW5kcG9pbnRGb3JTY29wZTtcbn1cbiJdfQ==