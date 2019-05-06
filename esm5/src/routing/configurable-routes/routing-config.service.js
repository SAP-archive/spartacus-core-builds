/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingConfig } from './config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/routing-config";
var RoutingConfigService = /** @class */ (function () {
    function RoutingConfigService(config) {
        this.config = config;
    }
    /**
     * @param {?} routeName
     * @return {?}
     */
    RoutingConfigService.prototype.getRouteConfig = /**
     * @param {?} routeName
     * @return {?}
     */
    function (routeName) {
        /** @type {?} */
        var routesConfig = this.config.routing.routes;
        /** @type {?} */
        var result = routesConfig && routesConfig[routeName];
        if (!routesConfig || result === undefined) {
            this.warn("No path was configured for the named route '" + routeName + "'!");
        }
        return result;
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    RoutingConfigService.prototype.warn = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.production) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    RoutingConfigService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    RoutingConfigService.ctorParameters = function () { return [
        { type: RoutingConfig }
    ]; };
    /** @nocollapse */ RoutingConfigService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(i0.inject(i1.RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
    return RoutingConfigService;
}());
export { RoutingConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoutingConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFFeEQ7SUFFRSw4QkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7O0lBRTdDLDZDQUFjOzs7O0lBQWQsVUFBZSxTQUFpQjs7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBRXpDLE1BQU0sR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxpREFBK0MsU0FBUyxPQUFJLENBQUMsQ0FBQztTQUN6RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLG1DQUFJOzs7OztJQUFaO1FBQWEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLEdBQUU7U0FDdkI7SUFDSCxDQUFDOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsYUFBYTs7OytCQUZ0QjtDQXVCQyxBQW5CRCxJQW1CQztTQWxCWSxvQkFBb0I7Ozs7OztJQUNuQixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcm91dGluZy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFJvdXRpbmdDb25maWcpIHt9XG5cbiAgZ2V0Um91dGVDb25maWcocm91dGVOYW1lOiBzdHJpbmcpOiBSb3V0ZUNvbmZpZyB7XG4gICAgY29uc3Qgcm91dGVzQ29uZmlnID0gdGhpcy5jb25maWcucm91dGluZy5yb3V0ZXM7XG5cbiAgICBjb25zdCByZXN1bHQgPSByb3V0ZXNDb25maWcgJiYgcm91dGVzQ29uZmlnW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZXNDb25maWcgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihgTm8gcGF0aCB3YXMgY29uZmlndXJlZCBmb3IgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nIWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==