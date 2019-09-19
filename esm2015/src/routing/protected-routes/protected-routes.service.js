/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingConfig } from '../configurable-routes/config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "../configurable-routes/config/routing-config";
export class ProtectedRoutesService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.nonProtectedPaths = []; // arrays of paths' segments list
        if (this.shouldProtect) {
            // pre-process config for performance:
            this.nonProtectedPaths = this.getNonProtectedPaths().map((/**
             * @param {?} path
             * @return {?}
             */
            path => this.getSegments(path)));
        }
    }
    // arrays of paths' segments list
    /**
     * @protected
     * @return {?}
     */
    get routingConfig() {
        return this.config && this.config.routing;
    }
    /**
     * @protected
     * @return {?}
     */
    get shouldProtect() {
        return this.routingConfig.protected;
    }
    /**
     * Tells if the url is protected
     * @param {?} urlSegments
     * @return {?}
     */
    isUrlProtected(urlSegments) {
        return (this.shouldProtect &&
            !this.matchAnyPath(urlSegments, this.nonProtectedPaths));
    }
    /**
     * Tells whether the url matches at least one of the paths
     * @protected
     * @param {?} urlSegments
     * @param {?} pathsSegments
     * @return {?}
     */
    matchAnyPath(urlSegments, pathsSegments) {
        return pathsSegments.some((/**
         * @param {?} pathSegments
         * @return {?}
         */
        pathSegments => this.matchPath(urlSegments, pathSegments)));
    }
    /**
     * Tells whether the url matches the path
     * @protected
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    matchPath(urlSegments, pathSegments) {
        if (urlSegments.length !== pathSegments.length) {
            return false;
        }
        for (let i = 0; i < pathSegments.length; i++) {
            /** @type {?} */
            const pathSeg = pathSegments[i];
            /** @type {?} */
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
     * @protected
     * @return {?}
     */
    getNonProtectedPaths() {
        return Object.values(this.routingConfig.routes).reduce((/**
         * @param {?} acc
         * @param {?} routeConfig
         * @return {?}
         */
        (acc, routeConfig) => routeConfig.protected === false && // must be explicitly false, ignore undefined
            routeConfig.paths &&
            routeConfig.paths.length
            ? acc.concat(routeConfig.paths)
            : acc), []);
    }
    /**
     * Splits the url by slashes
     * @protected
     * @param {?} url
     * @return {?}
     */
    getSegments(url) {
        return (url || '').split('/');
    }
}
ProtectedRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProtectedRoutesService.ctorParameters = () => [
    { type: RoutingConfig }
];
/** @nocollapse */ ProtectedRoutesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesService_Factory() { return new ProtectedRoutesService(i0.ɵɵinject(i1.RoutingConfig)); }, token: ProtectedRoutesService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProtectedRoutesService.prototype.nonProtectedPaths;
    /**
     * @type {?}
     * @protected
     */
    ProtectedRoutesService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFHN0UsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVdqQyxZQUFzQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBVm5DLHNCQUFpQixHQUFlLEVBQUUsQ0FBQyxDQUFDLGlDQUFpQztRQVczRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFDdkIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7O0lBZkQsSUFBYyxhQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELElBQWMsYUFBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQWNELGNBQWMsQ0FBQyxXQUFxQjtRQUNsQyxPQUFPLENBQ0wsSUFBSSxDQUFDLGFBQWE7WUFDbEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBS1MsWUFBWSxDQUNwQixXQUFxQixFQUNyQixhQUF5QjtRQUV6QixPQUFPLGFBQWEsQ0FBQyxJQUFJOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUUsQ0FDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLEVBQzFDLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUtTLFNBQVMsQ0FBQyxXQUFxQixFQUFFLFlBQXNCO1FBQy9ELElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzlDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ3RDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDOztrQkFDekIsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFN0IsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ2xELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBS1Msb0JBQW9CO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQ3BELENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQ25CLFdBQVcsQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLDZDQUE2QztZQUNoRixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDdEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixDQUFDLENBQUMsR0FBRyxHQUNULEVBQUUsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUtTLFdBQVcsQ0FBQyxHQUFXO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQW5GRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBRnpCLGFBQWE7Ozs7Ozs7O0lBSXBCLG1EQUEyQzs7Ozs7SUFVL0Isd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub25Qcm90ZWN0ZWRQYXRoczogc3RyaW5nW11bXSA9IFtdOyAvLyBhcnJheXMgb2YgcGF0aHMnIHNlZ21lbnRzIGxpc3RcblxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRpbmdDb25maWcoKTogUm91dGluZ0NvbmZpZ1sncm91dGluZyddIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgc2hvdWxkUHJvdGVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnLnByb3RlY3RlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHtcbiAgICBpZiAodGhpcy5zaG91bGRQcm90ZWN0KSB7XG4gICAgICAvLyBwcmUtcHJvY2VzcyBjb25maWcgZm9yIHBlcmZvcm1hbmNlOlxuICAgICAgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocyA9IHRoaXMuZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKS5tYXAocGF0aCA9PlxuICAgICAgICB0aGlzLmdldFNlZ21lbnRzKHBhdGgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBpZiB0aGUgdXJsIGlzIHByb3RlY3RlZFxuICAgKi9cbiAgaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvdWxkUHJvdGVjdCAmJlxuICAgICAgIXRoaXMubWF0Y2hBbnlQYXRoKHVybFNlZ21lbnRzLCB0aGlzLm5vblByb3RlY3RlZFBhdGhzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXRoc1xuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoQW55UGF0aChcbiAgICB1cmxTZWdtZW50czogc3RyaW5nW10sXG4gICAgcGF0aHNTZWdtZW50czogc3RyaW5nW11bXVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGF0aHNTZWdtZW50cy5zb21lKHBhdGhTZWdtZW50cyA9PlxuICAgICAgdGhpcy5tYXRjaFBhdGgodXJsU2VnbWVudHMsIHBhdGhTZWdtZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIHRoZSBwYXRoXG4gICAqL1xuICBwcm90ZWN0ZWQgbWF0Y2hQYXRoKHVybFNlZ21lbnRzOiBzdHJpbmdbXSwgcGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmICh1cmxTZWdtZW50cy5sZW5ndGggIT09IHBhdGhTZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFNlZyA9IHBhdGhTZWdtZW50c1tpXTtcbiAgICAgIGNvbnN0IHVybFNlZyA9IHVybFNlZ21lbnRzW2ldO1xuXG4gICAgICAvLyBjb21wYXJlIG9ubHkgc3RhdGljIHNlZ21lbnRzOlxuICAgICAgaWYgKCFwYXRoU2VnLnN0YXJ0c1dpdGgoJzonKSAmJiBwYXRoU2VnICE9PSB1cmxTZWcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBwYXRocyB0aGF0IGFyZSBub3QgcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMucm91dGluZ0NvbmZpZy5yb3V0ZXMpLnJlZHVjZShcbiAgICAgIChhY2MsIHJvdXRlQ29uZmlnKSA9PlxuICAgICAgICByb3V0ZUNvbmZpZy5wcm90ZWN0ZWQgPT09IGZhbHNlICYmIC8vIG11c3QgYmUgZXhwbGljaXRseSBmYWxzZSwgaWdub3JlIHVuZGVmaW5lZFxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocyAmJlxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocy5sZW5ndGhcbiAgICAgICAgICA/IGFjYy5jb25jYXQocm91dGVDb25maWcucGF0aHMpXG4gICAgICAgICAgOiBhY2MsXG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXRzIHRoZSB1cmwgYnkgc2xhc2hlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRzKHVybDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodXJsIHx8ICcnKS5zcGxpdCgnLycpO1xuICB9XG59XG4iXX0=