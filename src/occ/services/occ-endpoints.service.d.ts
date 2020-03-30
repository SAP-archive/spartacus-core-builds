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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccEndpointsService, [null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1lbmRwb2ludHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NFbmRwb2ludHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGJhc2VTaXRlU2VydmljZTtcbiAgICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU0NPUEVfU1VGRklYO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnLCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbmQgZW5kcG9pbnQgc3RhcnRpbmcgZnJvbSB0aGUgT0NDIGJhc2VVcmwgKG5vIGJhc2VTaXRlKVxuICAgICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICAgKi9cbiAgICBnZXRSYXdFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYmFzZSBPQ0MgZW5kcG9pbnQgKGJhc2VVcmwgKyBwcmVmaXggKyBiYXNlU2l0ZSlcbiAgICAgKi9cbiAgICBnZXRCYXNlRW5kcG9pbnQoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gT0NDIGVuZHBvaW50IGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZVxuICAgICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICAgKi9cbiAgICBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdWxseSBxdWFsaWZpZWQgT0NDIFVybCAoaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlKVxuICAgICAqIEBwYXJhbSBlbmRwb2ludCBOYW1lIG9mIHRoZSBPQ0MgZW5kcG9pbnQga2V5IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB1cmxQYXJhbXMgIFVSTCBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKi9cbiAgICBnZXRVcmwoZW5kcG9pbnQ6IHN0cmluZywgdXJsUGFyYW1zPzogb2JqZWN0LCBxdWVyeVBhcmFtcz86IG9iamVjdCwgc2NvcGU/OiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBnZXRFbmRwb2ludEZvclNjb3BlO1xufVxuIl19