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
            this.nonProtectedPaths = this.getNonProtectedPaths().map(path => this.getSegments(path));
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
        return pathsSegments.some(pathSegments => this.matchPath(urlSegments, pathSegments));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFHN0UsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFnQmpDLFlBQXNCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFmbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBZ0IzRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FDdkIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQXBCRCxJQUFjLGFBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQVdEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLFdBQXFCO1FBQ2xDLE9BQU8sQ0FDTCxJQUFJLENBQUMsYUFBYTtZQUNsQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWSxDQUNwQixXQUFxQixFQUNyQixhQUF5QjtRQUV6QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxTQUFTLENBQUMsV0FBcUIsRUFBRSxZQUFzQjtRQUMvRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDbEQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxvQkFBb0I7UUFDNUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUNwRCxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUNuQixXQUFXLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSw2Q0FBNkM7WUFDaEYsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3RCLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsQ0FBQyxDQUFDLEdBQUcsRUFDVCxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNPLFdBQVcsQ0FBQyxHQUFXO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBOztZQXhFK0IsYUFBYTs7O0FBaEJoQyxzQkFBc0I7SUFEbEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLHNCQUFzQixDQXdGbEM7U0F4Rlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub25Qcm90ZWN0ZWRQYXRoczogc3RyaW5nW11bXSA9IFtdOyAvLyBhcnJheXMgb2YgcGF0aHMnIHNlZ21lbnRzIGxpc3RcblxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRpbmdDb25maWcoKTogUm91dGluZ0NvbmZpZ1sncm91dGluZyddIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICdwcm90ZWN0ZWQnIHByb3BlcnR5IChib29sZWFuKSBmcm9tIHJvdXRpbmcgY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2hvdWxkUHJvdGVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnLnByb3RlY3RlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHtcbiAgICBpZiAodGhpcy5zaG91bGRQcm90ZWN0KSB7XG4gICAgICAvLyBwcmUtcHJvY2VzcyBjb25maWcgZm9yIHBlcmZvcm1hbmNlOlxuICAgICAgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocyA9IHRoaXMuZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKS5tYXAocGF0aCA9PlxuICAgICAgICB0aGlzLmdldFNlZ21lbnRzKHBhdGgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBpZiB0aGUgdXJsIGlzIHByb3RlY3RlZFxuICAgKi9cbiAgaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvdWxkUHJvdGVjdCAmJlxuICAgICAgIXRoaXMubWF0Y2hBbnlQYXRoKHVybFNlZ21lbnRzLCB0aGlzLm5vblByb3RlY3RlZFBhdGhzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXRoc1xuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoQW55UGF0aChcbiAgICB1cmxTZWdtZW50czogc3RyaW5nW10sXG4gICAgcGF0aHNTZWdtZW50czogc3RyaW5nW11bXVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGF0aHNTZWdtZW50cy5zb21lKHBhdGhTZWdtZW50cyA9PlxuICAgICAgdGhpcy5tYXRjaFBhdGgodXJsU2VnbWVudHMsIHBhdGhTZWdtZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIHRoZSBwYXRoXG4gICAqL1xuICBwcm90ZWN0ZWQgbWF0Y2hQYXRoKHVybFNlZ21lbnRzOiBzdHJpbmdbXSwgcGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmICh1cmxTZWdtZW50cy5sZW5ndGggIT09IHBhdGhTZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFNlZyA9IHBhdGhTZWdtZW50c1tpXTtcbiAgICAgIGNvbnN0IHVybFNlZyA9IHVybFNlZ21lbnRzW2ldO1xuXG4gICAgICAvLyBjb21wYXJlIG9ubHkgc3RhdGljIHNlZ21lbnRzOlxuICAgICAgaWYgKCFwYXRoU2VnLnN0YXJ0c1dpdGgoJzonKSAmJiBwYXRoU2VnICE9PSB1cmxTZWcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBwYXRocyB0aGF0IGFyZSBub3QgcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMucm91dGluZ0NvbmZpZy5yb3V0ZXMpLnJlZHVjZShcbiAgICAgIChhY2MsIHJvdXRlQ29uZmlnKSA9PlxuICAgICAgICByb3V0ZUNvbmZpZy5wcm90ZWN0ZWQgPT09IGZhbHNlICYmIC8vIG11c3QgYmUgZXhwbGljaXRseSBmYWxzZSwgaWdub3JlIHVuZGVmaW5lZFxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocyAmJlxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocy5sZW5ndGhcbiAgICAgICAgICA/IGFjYy5jb25jYXQocm91dGVDb25maWcucGF0aHMpXG4gICAgICAgICAgOiBhY2MsXG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXRzIHRoZSB1cmwgYnkgc2xhc2hlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRzKHVybDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodXJsIHx8ICcnKS5zcGxpdCgnLycpO1xuICB9XG59XG4iXX0=