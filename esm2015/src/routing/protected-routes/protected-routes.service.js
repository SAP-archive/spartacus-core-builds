import { Injectable } from '@angular/core';
import { RoutingConfig } from '../configurable-routes/config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "../configurable-routes/config/routing-config";
export class ProtectedRoutesService {
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
}
ProtectedRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesService_Factory() { return new ProtectedRoutesService(i0.ɵɵinject(i1.RoutingConfig)); }, token: ProtectedRoutesService, providedIn: "root" });
ProtectedRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ProtectedRoutesService.ctorParameters = () => [
    { type: RoutingConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9wcm90ZWN0ZWQtcm91dGVzL3Byb3RlY3RlZC1yb3V0ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7O0FBRzdFLE1BQU0sT0FBTyxzQkFBc0I7SUFnQmpDLFlBQXNCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFmbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBZ0IzRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUN2QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBcEJELElBQWMsYUFBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBV0Q7O09BRUc7SUFDSCxjQUFjLENBQUMsV0FBcUI7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZLENBQ3BCLFdBQXFCLEVBQ3JCLGFBQXlCO1FBRXpCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sU0FBUyxDQUFDLFdBQXFCLEVBQUUsWUFBc0I7UUFDL0QsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUIsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ2xELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ08sb0JBQW9CO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FDcEQsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FDbkIsV0FBVyxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksNkNBQTZDO1lBQ2hGLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUN0QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxHQUFHLEVBQ1QsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxXQUFXLENBQUMsR0FBVztRQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O1lBeEZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUZ6QixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub25Qcm90ZWN0ZWRQYXRoczogc3RyaW5nW11bXSA9IFtdOyAvLyBhcnJheXMgb2YgcGF0aHMnIHNlZ21lbnRzIGxpc3RcblxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRpbmdDb25maWcoKTogUm91dGluZ0NvbmZpZ1sncm91dGluZyddIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICdwcm90ZWN0ZWQnIHByb3BlcnR5IChib29sZWFuKSBmcm9tIHJvdXRpbmcgY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2hvdWxkUHJvdGVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnLnByb3RlY3RlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHtcbiAgICBpZiAodGhpcy5zaG91bGRQcm90ZWN0KSB7XG4gICAgICAvLyBwcmUtcHJvY2VzcyBjb25maWcgZm9yIHBlcmZvcm1hbmNlOlxuICAgICAgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocyA9IHRoaXMuZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKS5tYXAoKHBhdGgpID0+XG4gICAgICAgIHRoaXMuZ2V0U2VnbWVudHMocGF0aClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIGlmIHRoZSB1cmwgaXMgcHJvdGVjdGVkXG4gICAqL1xuICBpc1VybFByb3RlY3RlZCh1cmxTZWdtZW50czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zaG91bGRQcm90ZWN0ICYmXG4gICAgICAhdGhpcy5tYXRjaEFueVBhdGgodXJsU2VnbWVudHMsIHRoaXMubm9uUHJvdGVjdGVkUGF0aHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyBhdCBsZWFzdCBvbmUgb2YgdGhlIHBhdGhzXG4gICAqL1xuICBwcm90ZWN0ZWQgbWF0Y2hBbnlQYXRoKFxuICAgIHVybFNlZ21lbnRzOiBzdHJpbmdbXSxcbiAgICBwYXRoc1NlZ21lbnRzOiBzdHJpbmdbXVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwYXRoc1NlZ21lbnRzLnNvbWUoKHBhdGhTZWdtZW50cykgPT5cbiAgICAgIHRoaXMubWF0Y2hQYXRoKHVybFNlZ21lbnRzLCBwYXRoU2VnbWVudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyB0aGUgcGF0aFxuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoUGF0aCh1cmxTZWdtZW50czogc3RyaW5nW10sIHBhdGhTZWdtZW50czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAodXJsU2VnbWVudHMubGVuZ3RoICE9PSBwYXRoU2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGhTZWcgPSBwYXRoU2VnbWVudHNbaV07XG4gICAgICBjb25zdCB1cmxTZWcgPSB1cmxTZWdtZW50c1tpXTtcblxuICAgICAgLy8gY29tcGFyZSBvbmx5IHN0YXRpYyBzZWdtZW50czpcbiAgICAgIGlmICghcGF0aFNlZy5zdGFydHNXaXRoKCc6JykgJiYgcGF0aFNlZyAhPT0gdXJsU2VnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGF0aHMgdGhhdCBhcmUgbm90IHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE5vblByb3RlY3RlZFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJvdXRpbmdDb25maWcucm91dGVzKS5yZWR1Y2UoXG4gICAgICAoYWNjLCByb3V0ZUNvbmZpZykgPT5cbiAgICAgICAgcm91dGVDb25maWcucHJvdGVjdGVkID09PSBmYWxzZSAmJiAvLyBtdXN0IGJlIGV4cGxpY2l0bHkgZmFsc2UsIGlnbm9yZSB1bmRlZmluZWRcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMgJiZcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMubGVuZ3RoXG4gICAgICAgICAgPyBhY2MuY29uY2F0KHJvdXRlQ29uZmlnLnBhdGhzKVxuICAgICAgICAgIDogYWNjLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyB0aGUgdXJsIGJ5IHNsYXNoZXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKHVybCB8fCAnJykuc3BsaXQoJy8nKTtcbiAgfVxufVxuIl19