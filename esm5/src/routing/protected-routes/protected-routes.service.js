/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            this.nonProtectedPaths = this.getNonProtectedPaths().map((/**
             * @param {?} path
             * @return {?}
             */
            function (path) {
                return _this.getSegments(path);
            }));
        }
    }
    Object.defineProperty(ProtectedRoutesService.prototype, "routingConfig", {
        get: 
        // arrays of paths' segments list
        /**
         * @protected
         * @return {?}
         */
        function () {
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
        get: /**
         * Returns 'protected' property (boolean) from routing config
         *
         * @return {?} boolean
         */
        function () {
            return this.routingConfig.protected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tells if the url is protected
     */
    /**
     * Tells if the url is protected
     * @param {?} urlSegments
     * @return {?}
     */
    ProtectedRoutesService.prototype.isUrlProtected = /**
     * Tells if the url is protected
     * @param {?} urlSegments
     * @return {?}
     */
    function (urlSegments) {
        return (this.shouldProtect &&
            !this.matchAnyPath(urlSegments, this.nonProtectedPaths));
    };
    /**
     * Tells whether the url matches at least one of the paths
     */
    /**
     * Tells whether the url matches at least one of the paths
     * @protected
     * @param {?} urlSegments
     * @param {?} pathsSegments
     * @return {?}
     */
    ProtectedRoutesService.prototype.matchAnyPath = /**
     * Tells whether the url matches at least one of the paths
     * @protected
     * @param {?} urlSegments
     * @param {?} pathsSegments
     * @return {?}
     */
    function (urlSegments, pathsSegments) {
        var _this = this;
        return pathsSegments.some((/**
         * @param {?} pathSegments
         * @return {?}
         */
        function (pathSegments) {
            return _this.matchPath(urlSegments, pathSegments);
        }));
    };
    /**
     * Tells whether the url matches the path
     */
    /**
     * Tells whether the url matches the path
     * @protected
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    ProtectedRoutesService.prototype.matchPath = /**
     * Tells whether the url matches the path
     * @protected
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    function (urlSegments, pathSegments) {
        if (urlSegments.length !== pathSegments.length) {
            return false;
        }
        for (var i = 0; i < pathSegments.length; i++) {
            /** @type {?} */
            var pathSeg = pathSegments[i];
            /** @type {?} */
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
    /**
     * Returns a list of paths that are not protected
     * @protected
     * @return {?}
     */
    ProtectedRoutesService.prototype.getNonProtectedPaths = /**
     * Returns a list of paths that are not protected
     * @protected
     * @return {?}
     */
    function () {
        return Object.values(this.routingConfig.routes).reduce((/**
         * @param {?} acc
         * @param {?} routeConfig
         * @return {?}
         */
        function (acc, routeConfig) {
            return routeConfig.protected === false && // must be explicitly false, ignore undefined
                routeConfig.paths &&
                routeConfig.paths.length
                ? acc.concat(routeConfig.paths)
                : acc;
        }), []);
    };
    /**
     * Splits the url by slashes
     */
    /**
     * Splits the url by slashes
     * @protected
     * @param {?} url
     * @return {?}
     */
    ProtectedRoutesService.prototype.getSegments = /**
     * Splits the url by slashes
     * @protected
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return (url || '').split('/');
    };
    ProtectedRoutesService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ProtectedRoutesService.ctorParameters = function () { return [
        { type: RoutingConfig }
    ]; };
    /** @nocollapse */ ProtectedRoutesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesService_Factory() { return new ProtectedRoutesService(i0.ɵɵinject(i1.RoutingConfig)); }, token: ProtectedRoutesService, providedIn: "root" });
    return ProtectedRoutesService;
}());
export { ProtectedRoutesService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFFN0U7SUFpQkUsZ0NBQXNCLE1BQXFCO1FBQTNDLGlCQU9DO1FBUHFCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFmbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBZ0IzRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUMzRCxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQXRCLENBQXNCLEVBQ3ZCLENBQUM7U0FDSDtJQUNILENBQUM7SUFwQkQsc0JBQWMsaURBQWE7Ozs7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFPRCxzQkFBVyxpREFBYTtRQUx4Qjs7OztXQUlHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFXRDs7T0FFRzs7Ozs7O0lBQ0gsK0NBQWM7Ozs7O0lBQWQsVUFBZSxXQUFxQjtRQUNsQyxPQUFPLENBQ0wsSUFBSSxDQUFDLGFBQWE7WUFDbEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7SUFDTyw2Q0FBWTs7Ozs7OztJQUF0QixVQUNFLFdBQXFCLEVBQ3JCLGFBQXlCO1FBRjNCLGlCQU9DO1FBSEMsT0FBTyxhQUFhLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsWUFBWTtZQUNwQyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztRQUF6QyxDQUF5QyxFQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7OztJQUNPLDBDQUFTOzs7Ozs7O0lBQW5CLFVBQW9CLFdBQXFCLEVBQUUsWUFBc0I7UUFDL0QsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDdEMsT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7O2dCQUN6QixNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUU3QixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDbEQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNPLHFEQUFvQjs7Ozs7SUFBOUI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7OztRQUNwRCxVQUFDLEdBQUcsRUFBRSxXQUFXO1lBQ2YsT0FBQSxXQUFXLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSw2Q0FBNkM7Z0JBQ2hGLFdBQVcsQ0FBQyxLQUFLO2dCQUNqQixXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ3RCLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxHQUFHO1FBSlAsQ0FJTyxHQUNULEVBQUUsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ08sNENBQVc7Ozs7OztJQUFyQixVQUFzQixHQUFXO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXhGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUZ6QixhQUFhOzs7aUNBRHRCO0NBNEZDLEFBekZELElBeUZDO1NBeEZZLHNCQUFzQjs7Ozs7O0lBQ2pDLG1EQUEyQzs7Ozs7SUFlL0Isd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlnL3JvdXRpbmctY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub25Qcm90ZWN0ZWRQYXRoczogc3RyaW5nW11bXSA9IFtdOyAvLyBhcnJheXMgb2YgcGF0aHMnIHNlZ21lbnRzIGxpc3RcblxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRpbmdDb25maWcoKTogUm91dGluZ0NvbmZpZ1sncm91dGluZyddIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICdwcm90ZWN0ZWQnIHByb3BlcnR5IChib29sZWFuKSBmcm9tIHJvdXRpbmcgY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2hvdWxkUHJvdGVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnLnByb3RlY3RlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFJvdXRpbmdDb25maWcpIHtcbiAgICBpZiAodGhpcy5zaG91bGRQcm90ZWN0KSB7XG4gICAgICAvLyBwcmUtcHJvY2VzcyBjb25maWcgZm9yIHBlcmZvcm1hbmNlOlxuICAgICAgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocyA9IHRoaXMuZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKS5tYXAocGF0aCA9PlxuICAgICAgICB0aGlzLmdldFNlZ21lbnRzKHBhdGgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBpZiB0aGUgdXJsIGlzIHByb3RlY3RlZFxuICAgKi9cbiAgaXNVcmxQcm90ZWN0ZWQodXJsU2VnbWVudHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvdWxkUHJvdGVjdCAmJlxuICAgICAgIXRoaXMubWF0Y2hBbnlQYXRoKHVybFNlZ21lbnRzLCB0aGlzLm5vblByb3RlY3RlZFBhdGhzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGUgdXJsIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXRoc1xuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoQW55UGF0aChcbiAgICB1cmxTZWdtZW50czogc3RyaW5nW10sXG4gICAgcGF0aHNTZWdtZW50czogc3RyaW5nW11bXVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGF0aHNTZWdtZW50cy5zb21lKHBhdGhTZWdtZW50cyA9PlxuICAgICAgdGhpcy5tYXRjaFBhdGgodXJsU2VnbWVudHMsIHBhdGhTZWdtZW50cylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIHRoZSBwYXRoXG4gICAqL1xuICBwcm90ZWN0ZWQgbWF0Y2hQYXRoKHVybFNlZ21lbnRzOiBzdHJpbmdbXSwgcGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmICh1cmxTZWdtZW50cy5sZW5ndGggIT09IHBhdGhTZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFNlZyA9IHBhdGhTZWdtZW50c1tpXTtcbiAgICAgIGNvbnN0IHVybFNlZyA9IHVybFNlZ21lbnRzW2ldO1xuXG4gICAgICAvLyBjb21wYXJlIG9ubHkgc3RhdGljIHNlZ21lbnRzOlxuICAgICAgaWYgKCFwYXRoU2VnLnN0YXJ0c1dpdGgoJzonKSAmJiBwYXRoU2VnICE9PSB1cmxTZWcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBwYXRocyB0aGF0IGFyZSBub3QgcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Tm9uUHJvdGVjdGVkUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMucm91dGluZ0NvbmZpZy5yb3V0ZXMpLnJlZHVjZShcbiAgICAgIChhY2MsIHJvdXRlQ29uZmlnKSA9PlxuICAgICAgICByb3V0ZUNvbmZpZy5wcm90ZWN0ZWQgPT09IGZhbHNlICYmIC8vIG11c3QgYmUgZXhwbGljaXRseSBmYWxzZSwgaWdub3JlIHVuZGVmaW5lZFxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocyAmJlxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocy5sZW5ndGhcbiAgICAgICAgICA/IGFjYy5jb25jYXQocm91dGVDb25maWcucGF0aHMpXG4gICAgICAgICAgOiBhY2MsXG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXRzIHRoZSB1cmwgYnkgc2xhc2hlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRzKHVybDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodXJsIHx8ICcnKS5zcGxpdCgnLycpO1xuICB9XG59XG4iXX0=