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
        var routeConfig = this.config && this.config.routing && this.config.routing.routes;
        /** @type {?} */
        var result = routeConfig && routeConfig[routeName];
        if (!routeConfig || result === undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFFeEQ7SUFFRSw4QkFBc0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7O0lBRS9DLDZDQUFjOzs7O0lBQWQsVUFBZSxTQUFpQjs7WUFDeEIsV0FBVyxHQUNmLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFFNUQsTUFBTSxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlEQUErQyxTQUFTLE9BQUksQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sbUNBQUk7Ozs7O0lBQVo7UUFBYSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtTQUN2QjtJQUNILENBQUM7O2dCQW5CRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUZ6QixhQUFhOzs7K0JBRnRCO0NBd0JDLEFBcEJELElBb0JDO1NBbkJZLG9CQUFvQjs7Ozs7O0lBQ25CLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUm91dGluZ0NvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBSb3V0aW5nQ29uZmlnKSB7fVxuXG4gIGdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZTogc3RyaW5nKTogUm91dGVDb25maWcge1xuICAgIGNvbnN0IHJvdXRlQ29uZmlnID1cbiAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmcgJiYgdGhpcy5jb25maWcucm91dGluZy5yb3V0ZXM7XG5cbiAgICBjb25zdCByZXN1bHQgPSByb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdO1xuICAgIGlmICghcm91dGVDb25maWcgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihgTm8gcGF0aCB3YXMgY29uZmlndXJlZCBmb3IgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nIWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==