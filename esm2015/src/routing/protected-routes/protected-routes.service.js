import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { RoutingConfig } from '../configurable-routes/config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "../configurable-routes/config/routing-config";
let ProtectedRoutesService = class ProtectedRoutesService {
    constructor(config) {
        this.config = config;
        this.nonProtectedPaths = []; // arrays of paths' segments list
        if (this.shouldProtect) {
            // pre-process config for performance:
            this.nonProtectedPaths = this.getNonProtectedPaths().map((path) => this.getSegments(path));
        }
    }
    get routingConfig() {
        return this.config && this.config.routing;
    }
    /**
     * Returns 'protected' property (boolean) from routing config
     *
     * @returns boolean
     */
    get shouldProtect() {
        return this.routingConfig.protected;
    }
    /**
     * Tells if the url is protected
     */
    isUrlProtected(urlSegments) {
        return (this.shouldProtect &&
            !this.matchAnyPath(urlSegments, this.nonProtectedPaths));
    }
    /**
     * Tells whether the url matches at least one of the paths
     */
    matchAnyPath(urlSegments, pathsSegments) {
        return pathsSegments.some((pathSegments) => this.matchPath(urlSegments, pathSegments));
    }
    /**
     * Tells whether the url matches the path
     */
    matchPath(urlSegments, pathSegments) {
        if (urlSegments.length !== pathSegments.length) {
            return false;
        }
        for (let i = 0; i < pathSegments.length; i++) {
            const pathSeg = pathSegments[i];
            const urlSeg = urlSegments[i];
            // compare only static segments:
            if (!pathSeg.startsWith(':') && pathSeg !== urlSeg) {
                return false;
            }
        }
        return true;
    }
    /**
     * Returns a list of paths that are not protected
     */
    getNonProtectedPaths() {
        return Object.values(this.routingConfig.routes).reduce((acc, routeConfig) => routeConfig.protected === false && // must be explicitly false, ignore undefined
            routeConfig.paths &&
            routeConfig.paths.length
            ? acc.concat(routeConfig.paths)
            : acc, []);
    }
    /**
     * Splits the url by slashes
     */
    getSegments(url) {
        return (url || '').split('/');
    }
};
ProtectedRoutesService.ctorParameters = () => [
    { type: RoutingConfig }
];
ProtectedRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesService_Factory() { return new ProtectedRoutesService(i0.ɵɵinject(i1.RoutingConfig)); }, token: ProtectedRoutesService, providedIn: "root" });
ProtectedRoutesService = __decorate([
    Injectable({ providedIn: 'root' })
], ProtectedRoutesService);
export { ProtectedRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFHN0UsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFnQmpDLFlBQXNCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFmbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBZ0IzRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUN2QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBcEJELElBQWMsYUFBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBV0Q7O09BRUc7SUFDSCxjQUFjLENBQUMsV0FBcUI7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZLENBQ3BCLFdBQXFCLEVBQ3JCLGFBQXlCO1FBRXpCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sU0FBUyxDQUFDLFdBQXFCLEVBQUUsWUFBc0I7UUFDL0QsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUIsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ2xELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ08sb0JBQW9CO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FDcEQsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FDbkIsV0FBVyxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksNkNBQTZDO1lBQ2hGLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUN0QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxHQUFHLEVBQ1QsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxXQUFXLENBQUMsR0FBVztRQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTs7WUF4RStCLGFBQWE7OztBQWhCaEMsc0JBQXNCO0lBRGxDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixzQkFBc0IsQ0F3RmxDO1NBeEZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkUm91dGVzU2VydmljZSB7XG4gIHByaXZhdGUgbm9uUHJvdGVjdGVkUGF0aHM6IHN0cmluZ1tdW10gPSBbXTsgLy8gYXJyYXlzIG9mIHBhdGhzJyBzZWdtZW50cyBsaXN0XG5cbiAgcHJvdGVjdGVkIGdldCByb3V0aW5nQ29uZmlnKCk6IFJvdXRpbmdDb25maWdbJ3JvdXRpbmcnXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAncHJvdGVjdGVkJyBwcm9wZXJ0eSAoYm9vbGVhbikgZnJvbSByb3V0aW5nIGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3VsZFByb3RlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5wcm90ZWN0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvdGVjdCkge1xuICAgICAgLy8gcHJlLXByb2Nlc3MgY29uZmlnIGZvciBwZXJmb3JtYW5jZTpcbiAgICAgIHRoaXMubm9uUHJvdGVjdGVkUGF0aHMgPSB0aGlzLmdldE5vblByb3RlY3RlZFBhdGhzKCkubWFwKChwYXRoKSA9PlxuICAgICAgICB0aGlzLmdldFNlZ21lbnRzKHBhdGgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBpZiB0aGUgdXJsIGlzIHByb3RlY3RlZFxuICAgKi9cbiAgaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvdWxkUHJvdGVjdCAmJlxuICAgICAgIXRoaXMubWF0Y2hBbnlQYXRoKHVybFNlZ21lbnRzLCB0aGlzLm5vblByb3RlY3RlZFBhdGhzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXRoc1xuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoQW55UGF0aChcbiAgICB1cmxTZWdtZW50czogc3RyaW5nW10sXG4gICAgcGF0aHNTZWdtZW50czogc3RyaW5nW11bXVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGF0aHNTZWdtZW50cy5zb21lKChwYXRoU2VnbWVudHMpID0+XG4gICAgICB0aGlzLm1hdGNoUGF0aCh1cmxTZWdtZW50cywgcGF0aFNlZ21lbnRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgdGhlIHBhdGhcbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaFBhdGgodXJsU2VnbWVudHM6IHN0cmluZ1tdLCBwYXRoU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKHVybFNlZ21lbnRzLmxlbmd0aCAhPT0gcGF0aFNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoU2VnID0gcGF0aFNlZ21lbnRzW2ldO1xuICAgICAgY29uc3QgdXJsU2VnID0gdXJsU2VnbWVudHNbaV07XG5cbiAgICAgIC8vIGNvbXBhcmUgb25seSBzdGF0aWMgc2VnbWVudHM6XG4gICAgICBpZiAoIXBhdGhTZWcuc3RhcnRzV2l0aCgnOicpICYmIHBhdGhTZWcgIT09IHVybFNlZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHBhdGhzIHRoYXQgYXJlIG5vdCBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXROb25Qcm90ZWN0ZWRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5yb3V0aW5nQ29uZmlnLnJvdXRlcykucmVkdWNlKFxuICAgICAgKGFjYywgcm91dGVDb25maWcpID0+XG4gICAgICAgIHJvdXRlQ29uZmlnLnByb3RlY3RlZCA9PT0gZmFsc2UgJiYgLy8gbXVzdCBiZSBleHBsaWNpdGx5IGZhbHNlLCBpZ25vcmUgdW5kZWZpbmVkXG4gICAgICAgIHJvdXRlQ29uZmlnLnBhdGhzICYmXG4gICAgICAgIHJvdXRlQ29uZmlnLnBhdGhzLmxlbmd0aFxuICAgICAgICAgID8gYWNjLmNvbmNhdChyb3V0ZUNvbmZpZy5wYXRocylcbiAgICAgICAgICA6IGFjYyxcbiAgICAgIFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdHMgdGhlIHVybCBieSBzbGFzaGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2VnbWVudHModXJsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuICh1cmwgfHwgJycpLnNwbGl0KCcvJyk7XG4gIH1cbn1cbiJdfQ==