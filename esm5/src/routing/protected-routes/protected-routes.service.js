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
        get: /**
         * @protected
         * @return {?}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFFN0U7SUFZRSxnQ0FBc0IsTUFBcUI7UUFBM0MsaUJBT0M7UUFQcUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQVZuQyxzQkFBaUIsR0FBZSxFQUFFLENBQUMsQ0FBQyxpQ0FBaUM7UUFXM0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLHNDQUFzQztZQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDM0QsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUF0QixDQUFzQixFQUN2QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBZkQsc0JBQWMsaURBQWE7Ozs7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxpREFBYTs7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBV0Q7O09BRUc7Ozs7OztJQUNILCtDQUFjOzs7OztJQUFkLFVBQWUsV0FBcUI7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBQ08sNkNBQVk7Ozs7Ozs7SUFBdEIsVUFDRSxXQUFxQixFQUNyQixhQUF5QjtRQUYzQixpQkFPQztRQUhDLE9BQU8sYUFBYSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLFlBQVk7WUFDcEMsT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFBekMsQ0FBeUMsRUFDMUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7SUFDTywwQ0FBUzs7Ozs7OztJQUFuQixVQUFvQixXQUFxQixFQUFFLFlBQXNCO1FBQy9ELElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzlDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3RDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDOztnQkFDekIsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFN0IsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ2xELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDTyxxREFBb0I7Ozs7O0lBQTlCO1FBQ0UsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTs7Ozs7UUFDcEQsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNmLE9BQUEsV0FBVyxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksNkNBQTZDO2dCQUNoRixXQUFXLENBQUMsS0FBSztnQkFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNO2dCQUN0QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUMvQixDQUFDLENBQUMsR0FBRztRQUpQLENBSU8sR0FDVCxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNPLDRDQUFXOzs7Ozs7SUFBckIsVUFBc0IsR0FBVztRQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFuRkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsYUFBYTs7O2lDQUR0QjtDQXVGQyxBQXBGRCxJQW9GQztTQW5GWSxzQkFBc0I7Ozs7OztJQUNqQyxtREFBMkM7Ozs7O0lBVS9CLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkUm91dGVzU2VydmljZSB7XG4gIHByaXZhdGUgbm9uUHJvdGVjdGVkUGF0aHM6IHN0cmluZ1tdW10gPSBbXTsgLy8gYXJyYXlzIG9mIHBhdGhzJyBzZWdtZW50cyBsaXN0XG5cbiAgcHJvdGVjdGVkIGdldCByb3V0aW5nQ29uZmlnKCk6IFJvdXRpbmdDb25maWdbJ3JvdXRpbmcnXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHNob3VsZFByb3RlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5wcm90ZWN0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvdGVjdCkge1xuICAgICAgLy8gcHJlLXByb2Nlc3MgY29uZmlnIGZvciBwZXJmb3JtYW5jZTpcbiAgICAgIHRoaXMubm9uUHJvdGVjdGVkUGF0aHMgPSB0aGlzLmdldE5vblByb3RlY3RlZFBhdGhzKCkubWFwKHBhdGggPT5cbiAgICAgICAgdGhpcy5nZXRTZWdtZW50cyhwYXRoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgaWYgdGhlIHVybCBpcyBwcm90ZWN0ZWRcbiAgICovXG4gIGlzVXJsUHJvdGVjdGVkKHVybFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3VsZFByb3RlY3QgJiZcbiAgICAgICF0aGlzLm1hdGNoQW55UGF0aCh1cmxTZWdtZW50cywgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIGF0IGxlYXN0IG9uZSBvZiB0aGUgcGF0aHNcbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaEFueVBhdGgoXG4gICAgdXJsU2VnbWVudHM6IHN0cmluZ1tdLFxuICAgIHBhdGhzU2VnbWVudHM6IHN0cmluZ1tdW11cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBhdGhzU2VnbWVudHMuc29tZShwYXRoU2VnbWVudHMgPT5cbiAgICAgIHRoaXMubWF0Y2hQYXRoKHVybFNlZ21lbnRzLCBwYXRoU2VnbWVudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyB0aGUgcGF0aFxuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoUGF0aCh1cmxTZWdtZW50czogc3RyaW5nW10sIHBhdGhTZWdtZW50czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAodXJsU2VnbWVudHMubGVuZ3RoICE9PSBwYXRoU2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGhTZWcgPSBwYXRoU2VnbWVudHNbaV07XG4gICAgICBjb25zdCB1cmxTZWcgPSB1cmxTZWdtZW50c1tpXTtcblxuICAgICAgLy8gY29tcGFyZSBvbmx5IHN0YXRpYyBzZWdtZW50czpcbiAgICAgIGlmICghcGF0aFNlZy5zdGFydHNXaXRoKCc6JykgJiYgcGF0aFNlZyAhPT0gdXJsU2VnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGF0aHMgdGhhdCBhcmUgbm90IHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE5vblByb3RlY3RlZFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJvdXRpbmdDb25maWcucm91dGVzKS5yZWR1Y2UoXG4gICAgICAoYWNjLCByb3V0ZUNvbmZpZykgPT5cbiAgICAgICAgcm91dGVDb25maWcucHJvdGVjdGVkID09PSBmYWxzZSAmJiAvLyBtdXN0IGJlIGV4cGxpY2l0bHkgZmFsc2UsIGlnbm9yZSB1bmRlZmluZWRcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMgJiZcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMubGVuZ3RoXG4gICAgICAgICAgPyBhY2MuY29uY2F0KHJvdXRlQ29uZmlnLnBhdGhzKVxuICAgICAgICAgIDogYWNjLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyB0aGUgdXJsIGJ5IHNsYXNoZXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKHVybCB8fCAnJykuc3BsaXQoJy8nKTtcbiAgfVxufVxuIl19