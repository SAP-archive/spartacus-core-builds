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
     * Returns 'protected' property (boolean) from routing config
     *
     * @return {?} boolean
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFHN0UsTUFBTSxPQUFPLHNCQUFzQjs7OztJQWdCakMsWUFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWZuQyxzQkFBaUIsR0FBZSxFQUFFLENBQUMsQ0FBQyxpQ0FBaUM7UUFnQjNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixzQ0FBc0M7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUN2QixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFwQkQsSUFBYyxhQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFPRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFjRCxjQUFjLENBQUMsV0FBcUI7UUFDbEMsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUtTLFlBQVksQ0FDcEIsV0FBcUIsRUFDckIsYUFBeUI7UUFFekIsT0FBTyxhQUFhLENBQUMsSUFBSTs7OztRQUFDLFlBQVksQ0FBQyxFQUFFLENBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxFQUMxQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFLUyxTQUFTLENBQUMsV0FBcUIsRUFBRSxZQUFzQjtRQUMvRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUN0QyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzs7a0JBQ3pCLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRTdCLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO2dCQUNsRCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUtTLG9CQUFvQjtRQUM1QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7OztRQUNwRCxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUNuQixXQUFXLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSw2Q0FBNkM7WUFDaEYsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3RCLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsQ0FBQyxDQUFDLEdBQUcsR0FDVCxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFLUyxXQUFXLENBQUMsR0FBVztRQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUF4RkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUZ6QixhQUFhOzs7Ozs7OztJQUlwQixtREFBMkM7Ozs7O0lBZS9CLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkUm91dGVzU2VydmljZSB7XG4gIHByaXZhdGUgbm9uUHJvdGVjdGVkUGF0aHM6IHN0cmluZ1tdW10gPSBbXTsgLy8gYXJyYXlzIG9mIHBhdGhzJyBzZWdtZW50cyBsaXN0XG5cbiAgcHJvdGVjdGVkIGdldCByb3V0aW5nQ29uZmlnKCk6IFJvdXRpbmdDb25maWdbJ3JvdXRpbmcnXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAncHJvdGVjdGVkJyBwcm9wZXJ0eSAoYm9vbGVhbikgZnJvbSByb3V0aW5nIGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNob3VsZFByb3RlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5wcm90ZWN0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvdGVjdCkge1xuICAgICAgLy8gcHJlLXByb2Nlc3MgY29uZmlnIGZvciBwZXJmb3JtYW5jZTpcbiAgICAgIHRoaXMubm9uUHJvdGVjdGVkUGF0aHMgPSB0aGlzLmdldE5vblByb3RlY3RlZFBhdGhzKCkubWFwKHBhdGggPT5cbiAgICAgICAgdGhpcy5nZXRTZWdtZW50cyhwYXRoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgaWYgdGhlIHVybCBpcyBwcm90ZWN0ZWRcbiAgICovXG4gIGlzVXJsUHJvdGVjdGVkKHVybFNlZ21lbnRzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3VsZFByb3RlY3QgJiZcbiAgICAgICF0aGlzLm1hdGNoQW55UGF0aCh1cmxTZWdtZW50cywgdGhpcy5ub25Qcm90ZWN0ZWRQYXRocylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlIHVybCBtYXRjaGVzIGF0IGxlYXN0IG9uZSBvZiB0aGUgcGF0aHNcbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaEFueVBhdGgoXG4gICAgdXJsU2VnbWVudHM6IHN0cmluZ1tdLFxuICAgIHBhdGhzU2VnbWVudHM6IHN0cmluZ1tdW11cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBhdGhzU2VnbWVudHMuc29tZShwYXRoU2VnbWVudHMgPT5cbiAgICAgIHRoaXMubWF0Y2hQYXRoKHVybFNlZ21lbnRzLCBwYXRoU2VnbWVudHMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIHRoZSB1cmwgbWF0Y2hlcyB0aGUgcGF0aFxuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoUGF0aCh1cmxTZWdtZW50czogc3RyaW5nW10sIHBhdGhTZWdtZW50czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAodXJsU2VnbWVudHMubGVuZ3RoICE9PSBwYXRoU2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGhTZWcgPSBwYXRoU2VnbWVudHNbaV07XG4gICAgICBjb25zdCB1cmxTZWcgPSB1cmxTZWdtZW50c1tpXTtcblxuICAgICAgLy8gY29tcGFyZSBvbmx5IHN0YXRpYyBzZWdtZW50czpcbiAgICAgIGlmICghcGF0aFNlZy5zdGFydHNXaXRoKCc6JykgJiYgcGF0aFNlZyAhPT0gdXJsU2VnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGF0aHMgdGhhdCBhcmUgbm90IHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE5vblByb3RlY3RlZFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJvdXRpbmdDb25maWcucm91dGVzKS5yZWR1Y2UoXG4gICAgICAoYWNjLCByb3V0ZUNvbmZpZykgPT5cbiAgICAgICAgcm91dGVDb25maWcucHJvdGVjdGVkID09PSBmYWxzZSAmJiAvLyBtdXN0IGJlIGV4cGxpY2l0bHkgZmFsc2UsIGlnbm9yZSB1bmRlZmluZWRcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMgJiZcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMubGVuZ3RoXG4gICAgICAgICAgPyBhY2MuY29uY2F0KHJvdXRlQ29uZmlnLnBhdGhzKVxuICAgICAgICAgIDogYWNjLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyB0aGUgdXJsIGJ5IHNsYXNoZXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKHVybCB8fCAnJykuc3BsaXQoJy8nKTtcbiAgfVxufVxuIl19