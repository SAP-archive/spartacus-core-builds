import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccConfig } from '../config/occ-config';
/**
 * Http interceptor to add cookies to all cross-site requests.
 */
import * as ɵngcc0 from '@angular/core';
export declare class WithCredentialsInterceptor implements HttpInterceptor {
    protected config: OccConfig;
    constructor(config: OccConfig);
    /**
     * Intercepts each request and adds the `withCredential` flag to it
     * if it hasn't been added already.
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    /**
     * indicates whether the request should use the WithCredentials flag.
     */
    protected requiresWithCredentials(request: HttpRequest<any>): boolean;
    private get occConfig();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WithCredentialsInterceptor, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jcmVkZW50aWFscy5pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJ3aXRoLWNyZWRlbnRpYWxzLmludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG4vKipcbiAqIEh0dHAgaW50ZXJjZXB0b3IgdG8gYWRkIGNvb2tpZXMgdG8gYWxsIGNyb3NzLXNpdGUgcmVxdWVzdHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFdpdGhDcmVkZW50aWFsc0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcpO1xuICAgIC8qKlxuICAgICAqIEludGVyY2VwdHMgZWFjaCByZXF1ZXN0IGFuZCBhZGRzIHRoZSBgd2l0aENyZWRlbnRpYWxgIGZsYWcgdG8gaXRcbiAgICAgKiBpZiBpdCBoYXNuJ3QgYmVlbiBhZGRlZCBhbHJlYWR5LlxuICAgICAqL1xuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyB3aGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCB1c2UgdGhlIFdpdGhDcmVkZW50aWFscyBmbGFnLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXF1aXJlc1dpdGhDcmVkZW50aWFscyhyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGdldCBvY2NDb25maWcoKTtcbn1cbiJdfQ==