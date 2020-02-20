import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { RoutingConfig } from '../configurable-routes/config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "../configurable-routes/config/routing-config";
var ProtectedRoutesService = /** @class */ (function () {
    function ProtectedRoutesService(config) {
        var _this = this;
        this.config = config;
        this.nonProtectedPaths = []; // arrays of paths' segments list
        if (this.shouldProtect) {
            // pre-process config for performance:
            this.nonProtectedPaths = this.getNonProtectedPaths().map(function (path) {
                return _this.getSegments(path);
            });
        }
    }
    Object.defineProperty(ProtectedRoutesService.prototype, "routingConfig", {
        get: function () {
            return this.config && this.config.routing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProtectedRoutesService.prototype, "shouldProtect", {
        /**
         * Returns 'protected' property (boolean) from routing config
         *
         * @returns boolean
         */
        get: function () {
            return this.routingConfig.protected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tells if the url is protected
     */
    ProtectedRoutesService.prototype.isUrlProtected = function (urlSegments) {
        return (this.shouldProtect &&
            !this.matchAnyPath(urlSegments, this.nonProtectedPaths));
    };
    /**
     * Tells whether the url matches at least one of the paths
     */
    ProtectedRoutesService.prototype.matchAnyPath = function (urlSegments, pathsSegments) {
        var _this = this;
        return pathsSegments.some(function (pathSegments) {
            return _this.matchPath(urlSegments, pathSegments);
        });
    };
    /**
     * Tells whether the url matches the path
     */
    ProtectedRoutesService.prototype.matchPath = function (urlSegments, pathSegments) {
        if (urlSegments.length !== pathSegments.length) {
            return false;
        }
        for (var i = 0; i < pathSegments.length; i++) {
            var pathSeg = pathSegments[i];
            var urlSeg = urlSegments[i];
            // compare only static segments:
            if (!pathSeg.startsWith(':') && pathSeg !== urlSeg) {
                return false;
            }
        }
        return true;
    };
    /**
     * Returns a list of paths that are not protected
     */
    ProtectedRoutesService.prototype.getNonProtectedPaths = function () {
        return Object.values(this.routingConfig.routes).reduce(function (acc, routeConfig) {
            return routeConfig.protected === false && // must be explicitly false, ignore undefined
                routeConfig.paths &&
                routeConfig.paths.length
                ? acc.concat(routeConfig.paths)
                : acc;
        }, []);
    };
    /**
     * Splits the url by slashes
     */
    ProtectedRoutesService.prototype.getSegments = function (url) {
        return (url || '').split('/');
    };
    ProtectedRoutesService.ctorParameters = function () { return [
        { type: RoutingConfig }
    ]; };
    ProtectedRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesService_Factory() { return new ProtectedRoutesService(i0.ɵɵinject(i1.RoutingConfig)); }, token: ProtectedRoutesService, providedIn: "root" });
    ProtectedRoutesService = __decorate([
        Injectable({ providedIn: 'root' })
    ], ProtectedRoutesService);
    return ProtectedRoutesService;
}());
export { ProtectedRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFHN0U7SUFnQkUsZ0NBQXNCLE1BQXFCO1FBQTNDLGlCQU9DO1FBUHFCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFmbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBZ0IzRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUMzRCxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQXRCLENBQXNCLENBQ3ZCLENBQUM7U0FDSDtJQUNILENBQUM7SUFwQkQsc0JBQWMsaURBQWE7YUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFPRCxzQkFBVyxpREFBYTtRQUx4Qjs7OztXQUlHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBV0Q7O09BRUc7SUFDSCwrQ0FBYyxHQUFkLFVBQWUsV0FBcUI7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyw2Q0FBWSxHQUF0QixVQUNFLFdBQXFCLEVBQ3JCLGFBQXlCO1FBRjNCLGlCQU9DO1FBSEMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsWUFBWTtZQUNwQyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztRQUF6QyxDQUF5QyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sMENBQVMsR0FBbkIsVUFBb0IsV0FBcUIsRUFBRSxZQUFzQjtRQUMvRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDbEQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxxREFBb0IsR0FBOUI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQ3BELFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDZixPQUFBLFdBQVcsQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLDZDQUE2QztnQkFDaEYsV0FBVyxDQUFDLEtBQUs7Z0JBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTTtnQkFDdEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLEdBQUc7UUFKUCxDQUlPLEVBQ1QsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyw0Q0FBVyxHQUFyQixVQUFzQixHQUFXO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXZFNkIsYUFBYTs7O0lBaEJoQyxzQkFBc0I7UUFEbEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHNCQUFzQixDQXdGbEM7aUNBNUZEO0NBNEZDLEFBeEZELElBd0ZDO1NBeEZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkUm91dGVzU2VydmljZSB7XG4gIHByaXZhdGUgbm9uUHJvdGVjdGVkUGF0aHM6IHN0cmluZ1tdW10gPSBbXTsgLy8gYXJyYXlzIG9mIHBhdGhzJyBzZWdtZW50cyBsaXN0XG5cbiAgcHJvdGVjdGVkIGdldCByb3V0aW5nQ29uZmlnKCk6IFJvdXRpbmdDb25maWdbJ3JvdXRpbmcnXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAncHJvdGVjdGVkJyBwcm9wZXJ0eSAoYm9vbGVhbikgZnJvbSByb3V0aW5nIGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3VsZFByb3RlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5wcm90ZWN0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvdGVjdCkge1xuICAgICAgLy8gcHJlLXByb2Nlc3MgY29uZmlnIGZvciBwZXJmb3JtYW5jZTpcbiAgICAgIHRoaXMubm9uUHJvdGVjdGVkUGF0aHMgPSB0aGlzLmdldE5vblByb3RlY3RlZFBhdGhzKCkubWFwKHBhdGggPT5cbiAgICAgICAgdGhpcy5nZXRTZWdtZW50cyhwYXRoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgaWYgdGhlIHVybCBpcyBwcm90ZWN0ZWRcbiAgICovXG4gIGlzVXJsUHJvdGVjdGVkKHVybFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3VsZFByb3RlY3QgJiZcbiAgICAgICF0aGlzLm1hdGNoQW55UGF0aCh1cmxTZWdtZW50cywgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIGF0IGxlYXN0IG9uZSBvZiB0aGUgcGF0aHNcbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaEFueVBhdGgoXG4gICAgdXJsU2VnbWVudHM6IHN0cmluZ1tdLFxuICAgIHBhdGhzU2VnbWVudHM6IHN0cmluZ1tdW11cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBhdGhzU2VnbWVudHMuc29tZShwYXRoU2VnbWVudHMgPT5cbiAgICAgIHRoaXMubWF0Y2hQYXRoKHVybFNlZ21lbnRzLCBwYXRoU2VnbWVudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyB0aGUgcGF0aFxuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoUGF0aCh1cmxTZWdtZW50czogc3RyaW5nW10sIHBhdGhTZWdtZW50czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAodXJsU2VnbWVudHMubGVuZ3RoICE9PSBwYXRoU2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGhTZWcgPSBwYXRoU2VnbWVudHNbaV07XG4gICAgICBjb25zdCB1cmxTZWcgPSB1cmxTZWdtZW50c1tpXTtcblxuICAgICAgLy8gY29tcGFyZSBvbmx5IHN0YXRpYyBzZWdtZW50czpcbiAgICAgIGlmICghcGF0aFNlZy5zdGFydHNXaXRoKCc6JykgJiYgcGF0aFNlZyAhPT0gdXJsU2VnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGF0aHMgdGhhdCBhcmUgbm90IHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE5vblByb3RlY3RlZFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJvdXRpbmdDb25maWcucm91dGVzKS5yZWR1Y2UoXG4gICAgICAoYWNjLCByb3V0ZUNvbmZpZykgPT5cbiAgICAgICAgcm91dGVDb25maWcucHJvdGVjdGVkID09PSBmYWxzZSAmJiAvLyBtdXN0IGJlIGV4cGxpY2l0bHkgZmFsc2UsIGlnbm9yZSB1bmRlZmluZWRcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMgJiZcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMubGVuZ3RoXG4gICAgICAgICAgPyBhY2MuY29uY2F0KHJvdXRlQ29uZmlnLnBhdGhzKVxuICAgICAgICAgIDogYWNjLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyB0aGUgdXJsIGJ5IHNsYXNoZXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKHVybCB8fCAnJykuc3BsaXQoJy8nKTtcbiAgfVxufVxuIl19