import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccSitesConfigLoader {
    protected config: OccConfig;
    protected http: HttpClient;
    constructor(config: OccConfig, http: HttpClient);
    protected readonly endpoint = "basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))";
    private get baseEndpoint();
    private get url();
    load(): Observable<BaseSite[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSitesConfigLoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnO1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnLCBodHRwOiBIdHRwQ2xpZW50KTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZW5kcG9pbnQgPSBcImJhc2VzaXRlcz9maWVsZHM9YmFzZVNpdGVzKHVpZCxkZWZhdWx0TGFuZ3VhZ2UoaXNvY29kZSksdXJsRW5jb2RpbmdBdHRyaWJ1dGVzLHVybFBhdHRlcm5zLHN0b3JlcyhjdXJyZW5jaWVzKGlzb2NvZGUpLGRlZmF1bHRDdXJyZW5jeShpc29jb2RlKSxsYW5ndWFnZXMoaXNvY29kZSksZGVmYXVsdExhbmd1YWdlKGlzb2NvZGUpKSlcIjtcbiAgICBwcml2YXRlIGdldCBiYXNlRW5kcG9pbnQoKTtcbiAgICBwcml2YXRlIGdldCB1cmwoKTtcbiAgICBsb2FkKCk6IE9ic2VydmFibGU8QmFzZVNpdGVbXT47XG59XG4iXX0=