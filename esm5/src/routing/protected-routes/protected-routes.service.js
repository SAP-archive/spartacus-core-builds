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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFHN0U7SUFnQkUsZ0NBQXNCLE1BQXFCO1FBQTNDLGlCQU9DO1FBUHFCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFmbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBZ0IzRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUM1RCxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQXRCLENBQXNCLENBQ3ZCLENBQUM7U0FDSDtJQUNILENBQUM7SUFwQkQsc0JBQWMsaURBQWE7YUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFPRCxzQkFBVyxpREFBYTtRQUx4Qjs7OztXQUlHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBV0Q7O09BRUc7SUFDSCwrQ0FBYyxHQUFkLFVBQWUsV0FBcUI7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyw2Q0FBWSxHQUF0QixVQUNFLFdBQXFCLEVBQ3JCLGFBQXlCO1FBRjNCLGlCQU9DO1FBSEMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWTtZQUNyQyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztRQUF6QyxDQUF5QyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sMENBQVMsR0FBbkIsVUFBb0IsV0FBcUIsRUFBRSxZQUFzQjtRQUMvRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDbEQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxxREFBb0IsR0FBOUI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQ3BELFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDZixPQUFBLFdBQVcsQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLDZDQUE2QztnQkFDaEYsV0FBVyxDQUFDLEtBQUs7Z0JBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTTtnQkFDdEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLEdBQUc7UUFKUCxDQUlPLEVBQ1QsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyw0Q0FBVyxHQUFyQixVQUFzQixHQUFXO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXZFNkIsYUFBYTs7O0lBaEJoQyxzQkFBc0I7UUFEbEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHNCQUFzQixDQXdGbEM7aUNBNUZEO0NBNEZDLEFBeEZELElBd0ZDO1NBeEZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkUm91dGVzU2VydmljZSB7XG4gIHByaXZhdGUgbm9uUHJvdGVjdGVkUGF0aHM6IHN0cmluZ1tdW10gPSBbXTsgLy8gYXJyYXlzIG9mIHBhdGhzJyBzZWdtZW50cyBsaXN0XG5cbiAgcHJvdGVjdGVkIGdldCByb3V0aW5nQ29uZmlnKCk6IFJvdXRpbmdDb25maWdbJ3JvdXRpbmcnXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAncHJvdGVjdGVkJyBwcm9wZXJ0eSAoYm9vbGVhbikgZnJvbSByb3V0aW5nIGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3VsZFByb3RlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5wcm90ZWN0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvdGVjdCkge1xuICAgICAgLy8gcHJlLXByb2Nlc3MgY29uZmlnIGZvciBwZXJmb3JtYW5jZTpcbiAgICAgIHRoaXMubm9uUHJvdGVjdGVkUGF0aHMgPSB0aGlzLmdldE5vblByb3RlY3RlZFBhdGhzKCkubWFwKChwYXRoKSA9PlxuICAgICAgICB0aGlzLmdldFNlZ21lbnRzKHBhdGgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBpZiB0aGUgdXJsIGlzIHByb3RlY3RlZFxuICAgKi9cbiAgaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvdWxkUHJvdGVjdCAmJlxuICAgICAgIXRoaXMubWF0Y2hBbnlQYXRoKHVybFNlZ21lbnRzLCB0aGlzLm5vblByb3RlY3RlZFBhdGhzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXRoc1xuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoQW55UGF0aChcbiAgICB1cmxTZWdtZW50czogc3RyaW5nW10sXG4gICAgcGF0aHNTZWdtZW50czogc3RyaW5nW11bXVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGF0aHNTZWdtZW50cy5zb21lKChwYXRoU2VnbWVudHMpID0+XG4gICAgICB0aGlzLm1hdGNoUGF0aCh1cmxTZWdtZW50cywgcGF0aFNlZ21lbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgdGhlIHBhdGhcbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaFBhdGgodXJsU2VnbWVudHM6IHN0cmluZ1tdLCBwYXRoU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKHVybFNlZ21lbnRzLmxlbmd0aCAhPT0gcGF0aFNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoU2VnID0gcGF0aFNlZ21lbnRzW2ldO1xuICAgICAgY29uc3QgdXJsU2VnID0gdXJsU2VnbWVudHNbaV07XG5cbiAgICAgIC8vIGNvbXBhcmUgb25seSBzdGF0aWMgc2VnbWVudHM6XG4gICAgICBpZiAoIXBhdGhTZWcuc3RhcnRzV2l0aCgnOicpICYmIHBhdGhTZWcgIT09IHVybFNlZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHBhdGhzIHRoYXQgYXJlIG5vdCBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXROb25Qcm90ZWN0ZWRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5yb3V0aW5nQ29uZmlnLnJvdXRlcykucmVkdWNlKFxuICAgICAgKGFjYywgcm91dGVDb25maWcpID0+XG4gICAgICAgIHJvdXRlQ29uZmlnLnByb3RlY3RlZCA9PT0gZmFsc2UgJiYgLy8gbXVzdCBiZSBleHBsaWNpdGx5IGZhbHNlLCBpZ25vcmUgdW5kZWZpbmVkXG4gICAgICAgIHJvdXRlQ29uZmlnLnBhdGhzICYmXG4gICAgICAgIHJvdXRlQ29uZmlnLnBhdGhzLmxlbmd0aFxuICAgICAgICAgID8gYWNjLmNvbmNhdChyb3V0ZUNvbmZpZy5wYXRocylcbiAgICAgICAgICA6IGFjYyxcbiAgICAgIFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdHMgdGhlIHVybCBieSBzbGFzaGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2VnbWVudHModXJsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuICh1cmwgfHwgJycpLnNwbGl0KCcvJyk7XG4gIH1cbn1cbiJdfQ==