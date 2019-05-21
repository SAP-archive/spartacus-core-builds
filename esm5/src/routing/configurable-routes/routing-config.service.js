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
     * @protected
     */
    RoutingConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFFeEQ7SUFFRSw4QkFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7O0lBRS9DLDZDQUFjOzs7O0lBQWQsVUFBZSxTQUFpQjs7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBRXpDLE1BQU0sR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxpREFBK0MsU0FBUyxPQUFJLENBQUMsQ0FBQztTQUN6RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLG1DQUFJOzs7OztJQUFaO1FBQWEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLEdBQUU7U0FDdkI7SUFDSCxDQUFDOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsYUFBYTs7OytCQUZ0QjtDQXVCQyxBQW5CRCxJQW1CQztTQWxCWSxvQkFBb0I7Ozs7OztJQUNuQixzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcm91dGluZy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogUm91dGluZ0NvbmZpZykge31cblxuICBnZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWU6IHN0cmluZyk6IFJvdXRlQ29uZmlnIHtcbiAgICBjb25zdCByb3V0ZXNDb25maWcgPSB0aGlzLmNvbmZpZy5yb3V0aW5nLnJvdXRlcztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlc0NvbmZpZyAmJiByb3V0ZXNDb25maWdbcm91dGVOYW1lXTtcbiAgICBpZiAoIXJvdXRlc0NvbmZpZyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKGBObyBwYXRoIHdhcyBjb25maWd1cmVkIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSchYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19