/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingConfig } from './config/routing-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/routing-config";
export class RoutingConfigService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} routeName
     * @return {?}
     */
    getRouteConfig(routeName) {
        /** @type {?} */
        const routesConfig = this.config.routing.routes;
        /** @type {?} */
        const result = routesConfig && routesConfig[routeName];
        if (!routesConfig || result === undefined) {
            this.warn(`No path was configured for the named route '${routeName}'!`);
        }
        return result;
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
RoutingConfigService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
RoutingConfigService.ctorParameters = () => [
    { type: RoutingConfig }
];
/** @nocollapse */ RoutingConfigService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingConfigService_Factory() { return new RoutingConfigService(i0.inject(i1.RoutingConfig)); }, token: RoutingConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoutingConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUd4RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQW9CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDOzs7OztJQUU3QyxjQUFjLENBQUMsU0FBaUI7O2NBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztjQUV6QyxNQUFNLEdBQUcsWUFBWSxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsK0NBQStDLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUZ6QixhQUFhOzs7Ozs7OztJQUlSLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUm91dGluZ0NvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogUm91dGluZ0NvbmZpZykge31cblxuICBnZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWU6IHN0cmluZyk6IFJvdXRlQ29uZmlnIHtcbiAgICBjb25zdCByb3V0ZXNDb25maWcgPSB0aGlzLmNvbmZpZy5yb3V0aW5nLnJvdXRlcztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlc0NvbmZpZyAmJiByb3V0ZXNDb25maWdbcm91dGVOYW1lXTtcbiAgICBpZiAoIXJvdXRlc0NvbmZpZyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKGBObyBwYXRoIHdhcyBjb25maWd1cmVkIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSchYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19