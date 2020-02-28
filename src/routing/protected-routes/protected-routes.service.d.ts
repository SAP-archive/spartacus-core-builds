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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProtectedRoutesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb3RlY3RlZC1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWcvcm91dGluZy1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvdGVjdGVkUm91dGVzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUm91dGluZ0NvbmZpZztcbiAgICBwcml2YXRlIG5vblByb3RlY3RlZFBhdGhzO1xuICAgIHByb3RlY3RlZCBnZXQgcm91dGluZ0NvbmZpZygpOiBSb3V0aW5nQ29uZmlnWydyb3V0aW5nJ107XG4gICAgLyoqXG4gICAgICogUmV0dXJucyAncHJvdGVjdGVkJyBwcm9wZXJ0eSAoYm9vbGVhbikgZnJvbSByb3V0aW5nIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGdldCBzaG91bGRQcm90ZWN0KCk6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBSb3V0aW5nQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBUZWxscyBpZiB0aGUgdXJsIGlzIHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzVXJsUHJvdGVjdGVkKHVybFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXRoc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBtYXRjaEFueVBhdGgodXJsU2VnbWVudHM6IHN0cmluZ1tdLCBwYXRoc1NlZ21lbnRzOiBzdHJpbmdbXVtdKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyB0aGUgcGF0aFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtYXRjaFBhdGgodXJsU2VnbWVudHM6IHN0cmluZ1tdLCBwYXRoU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBwYXRocyB0aGF0IGFyZSBub3QgcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE5vblByb3RlY3RlZFBhdGhzKCk6IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFNwbGl0cyB0aGUgdXJsIGJ5IHNsYXNoZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2VnbWVudHModXJsOiBzdHJpbmcpOiBzdHJpbmdbXTtcbn1cbiJdfQ==