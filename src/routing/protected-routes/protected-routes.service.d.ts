import { RoutingConfig } from '../configurable-routes/config/routing-config';
import * as ɵngcc0 from '@angular/core';
export declare class ProtectedRoutesService {
    protected config: RoutingConfig;
    private nonProtectedPaths;
    protected get routingConfig(): RoutingConfig['routing'];
    /**
     * Returns 'protected' property (boolean) from routing config
     *
     * @returns boolean
     */
    get shouldProtect(): boolean;
    constructor(config: RoutingConfig);
    /**
     * Tells if the url is protected
     */
    isUrlProtected(urlSegments: string[]): boolean;
    /**
     * Tells whether the url matches at least one of the paths
     */
    protected matchAnyPath(urlSegments: string[], pathsSegments: string[][]): boolean;
    /**
     * Tells whether the url matches the path
     */
    protected matchPath(urlSegments: string[], pathSegments: string[]): boolean;
    /**
     * Returns a list of paths that are not protected
     */
    protected getNonProtectedPaths(): string[];
    /**
     * Splits the url by slashes
     */
    protected getSegments(url: string): string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProtectedRoutesService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb3RlY3RlZC1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnO1xuICAgIHByaXZhdGUgbm9uUHJvdGVjdGVkUGF0aHM7XG4gICAgcHJvdGVjdGVkIGdldCByb3V0aW5nQ29uZmlnKCk6IFJvdXRpbmdDb25maWdbJ3JvdXRpbmcnXTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zICdwcm90ZWN0ZWQnIHByb3BlcnR5IChib29sZWFuKSBmcm9tIHJvdXRpbmcgY29uZmlnXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgZ2V0IHNob3VsZFByb3RlY3QoKTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFJvdXRpbmdDb25maWcpO1xuICAgIC8qKlxuICAgICAqIFRlbGxzIGlmIHRoZSB1cmwgaXMgcHJvdGVjdGVkXG4gICAgICovXG4gICAgaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyBhdCBsZWFzdCBvbmUgb2YgdGhlIHBhdGhzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hdGNoQW55UGF0aCh1cmxTZWdtZW50czogc3RyaW5nW10sIHBhdGhzU2VnbWVudHM6IHN0cmluZ1tdW10pOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIHRoZSBwYXRoXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hdGNoUGF0aCh1cmxTZWdtZW50czogc3RyaW5nW10sIHBhdGhTZWdtZW50czogc3RyaW5nW10pOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIHBhdGhzIHRoYXQgYXJlIG5vdCBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKTogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogU3BsaXRzIHRoZSB1cmwgYnkgc2xhc2hlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdO1xufVxuIl19