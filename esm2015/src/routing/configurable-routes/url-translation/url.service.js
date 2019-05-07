/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
import { RoutingConfigService } from '../routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../routing-config.service";
import * as i2 from "./url-parsing.service";
import * as i3 from "../../../config/server-config/server-config";
export class UrlService {
    /**
     * @param {?} routingConfigService
     * @param {?} urlParser
     * @param {?} config
     */
    constructor(routingConfigService, urlParser, config) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    generateUrl(commands) {
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        /** @type {?} */
        const result = [];
        for (const command of commands) {
            if (!this.isRouteCommand(command)) {
                // don't modify segment that is not route command:
                result.push(command);
            }
            else {
                // generate array with url segments for given route command:
                /** @type {?} */
                const partialResult = this.generateUrlPart(command);
                if (partialResult === null) {
                    return this.ROOT_URL;
                }
                result.push(...partialResult);
            }
        }
        if (this.shouldOutputAbsolute(commands)) {
            result.unshift('/');
        }
        return result;
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    isRouteCommand(command) {
        return command && Boolean(command.route);
    }
    /**
     * @private
     * @param {?} commands
     * @return {?}
     */
    shouldOutputAbsolute(commands) {
        return this.isRouteCommand(commands[0]);
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    generateUrlPart(command) {
        this.standarizeRouteCommand(command);
        if (!command.route) {
            return null;
        }
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(command.route);
        // if no route translation was configured, return null:
        if (!routeConfig || !routeConfig.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        /** @type {?} */
        const path = this.findPathWithFillableParams(routeConfig, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        /** @type {?} */
        const result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
        return result;
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    standarizeRouteCommand(command) {
        command.params = command.params || {};
    }
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    provideParamsValues(path, params, paramsMapping) {
        return this.urlParser.getPrimarySegments(path).map(segment => {
            if (isParam(segment)) {
                /** @type {?} */
                const paramName = getParamName(segment);
                /** @type {?} */
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    }
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    findPathWithFillableParams(routeConfig, params) {
        /** @type {?} */
        const foundPath = routeConfig.paths.find(path => this.getParams(path).every(paramName => {
            /** @type {?} */
            const mappedParamName = this.getMappedParamName(paramName, routeConfig.paramsMapping);
            return params[mappedParamName] !== undefined;
        }));
        if (foundPath === undefined || foundPath === null) {
            this.warn(`No configured path matches all its params to given object. `, `Route config: `, routeConfig, `Params object: `, params);
            return null;
        }
        return foundPath;
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    getParams(path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    }
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    getMappedParamName(paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
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
UrlService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UrlService.ctorParameters = () => [
    { type: RoutingConfigService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
/** @nocollapse */ UrlService.ngInjectableDef = i0.defineInjectable({ factory: function UrlService_Factory() { return new UrlService(i0.inject(i1.RoutingConfigService), i0.inject(i2.UrlParsingService), i0.inject(i3.ServerConfig)); }, token: UrlService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UrlService.prototype.ROOT_URL;
    /**
     * @type {?}
     * @private
     */
    UrlService.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    UrlService.prototype.urlParser;
    /**
     * @type {?}
     * @private
     */
    UrlService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBR2pFLE1BQU0sT0FBTyxVQUFVOzs7Ozs7SUFHckIsWUFDVSxvQkFBMEMsRUFDMUMsU0FBNEIsRUFDNUIsTUFBb0I7UUFGcEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBTHJCLGFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBTXZCLENBQUM7Ozs7O0lBRUosV0FBVyxDQUFDLFFBQXFCO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVCLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCOztjQUVLLE1BQU0sR0FBYSxFQUFFO1FBQzNCLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxrREFBa0Q7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7aUJBQU07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QUVELElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQ1AsNkRBQTZELEVBQzdELGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLE1BQU0sQ0FDUCxDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVM7YUFDbEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFNBQWlCLEVBQUUsYUFBcUI7UUFDakUsSUFBSSxhQUFhLEVBQUU7WUFDakIsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBbEpGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFGekIsb0JBQW9CO1lBTHBCLGlCQUFpQjtZQUNqQixZQUFZOzs7OztJQVFuQiw4QkFBMEI7Ozs7O0lBR3hCLDBDQUFrRDs7Ozs7SUFDbEQsK0JBQW9DOzs7OztJQUNwQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBQYXJhbXNNYXBwaW5nIH0gZnJvbSAnLi4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRQYXJhbU5hbWUsIGlzUGFyYW0gfSBmcm9tICcuL3BhdGgtdXRpbHMnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZFJvdXRlLCBVcmxDb21tYW5kcywgVXJsQ29tbWFuZCB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVcmxTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgUk9PVF9VUkwgPSBbJy8nXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgZ2VuZXJhdGVVcmwoY29tbWFuZHM6IFVybENvbW1hbmRzKTogYW55W10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tYW5kcykpIHtcbiAgICAgIGNvbW1hbmRzID0gW2NvbW1hbmRzXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNvbW1hbmRzKSB7XG4gICAgICBpZiAoIXRoaXMuaXNSb3V0ZUNvbW1hbmQoY29tbWFuZCkpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW9kaWZ5IHNlZ21lbnQgdGhhdCBpcyBub3Qgcm91dGUgY29tbWFuZDpcbiAgICAgICAgcmVzdWx0LnB1c2goY29tbWFuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZW5lcmF0ZSBhcnJheSB3aXRoIHVybCBzZWdtZW50cyBmb3IgZ2l2ZW4gcm91dGUgY29tbWFuZDpcbiAgICAgICAgY29uc3QgcGFydGlhbFJlc3VsdCA9IHRoaXMuZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQpO1xuXG4gICAgICAgIGlmIChwYXJ0aWFsUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCguLi5wYXJ0aWFsUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRPdXRwdXRBYnNvbHV0ZShjb21tYW5kcykpIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KCcvJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSb3V0ZUNvbW1hbmQoY29tbWFuZDogVXJsQ29tbWFuZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb21tYW5kICYmIEJvb2xlYW4oY29tbWFuZC5yb3V0ZSk7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZE91dHB1dEFic29sdXRlKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzUm91dGVDb21tYW5kKGNvbW1hbmRzWzBdKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQ6IFVybENvbW1hbmRSb3V0ZSk6IHN0cmluZ1tdIHwgbnVsbCB7XG4gICAgdGhpcy5zdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKCFjb21tYW5kLnJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoY29tbWFuZC5yb3V0ZSk7XG5cbiAgICAvLyBpZiBubyByb3V0ZSB0cmFuc2xhdGlvbiB3YXMgY29uZmlndXJlZCwgcmV0dXJuIG51bGw6XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCAhcm91dGVDb25maWcucGF0aHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGZpbmQgZmlyc3QgcGF0aCB0aGF0IGNhbiBzYXRpc2Z5IGl0J3MgcGFyYW1ldGVycyB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcbiAgICBjb25zdCBwYXRoID0gdGhpcy5maW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhyb3V0ZUNvbmZpZywgY29tbWFuZC5wYXJhbXMpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZCBwYXRoIHRoYXQgY2FuIGJlIHNhdGlzZmllZCB3aXRoIGdpdmVuIHBhcmFtcywgcmV0dXJuIG51bGxcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICAgIHBhdGgsXG4gICAgICBjb21tYW5kLnBhcmFtcyxcbiAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kOiBVcmxDb21tYW5kUm91dGUpOiB2b2lkIHtcbiAgICBjb21tYW5kLnBhcmFtcyA9IGNvbW1hbmQucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpLm1hcChzZWdtZW50ID0+IHtcbiAgICAgIGlmIChpc1BhcmFtKHNlZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGdldFBhcmFtTmFtZShzZWdtZW50KTtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyxcbiAgICBwYXJhbXM6IG9iamVjdFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvdW5kUGF0aCA9IHJvdXRlQ29uZmlnLnBhdGhzLmZpbmQocGF0aCA9PlxuICAgICAgdGhpcy5nZXRQYXJhbXMocGF0aCkuZXZlcnkocGFyYW1OYW1lID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChmb3VuZFBhdGggPT09IHVuZGVmaW5lZCB8fCBmb3VuZFBhdGggPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIGNvbmZpZ3VyZWQgcGF0aCBtYXRjaGVzIGFsbCBpdHMgcGFyYW1zIHRvIGdpdmVuIG9iamVjdC4gYCxcbiAgICAgICAgYFJvdXRlIGNvbmZpZzogYCxcbiAgICAgICAgcm91dGVDb25maWcsXG4gICAgICAgIGBQYXJhbXMgb2JqZWN0OiBgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kUGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlclxuICAgICAgLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKVxuICAgICAgLmZpbHRlcihpc1BhcmFtKVxuICAgICAgLm1hcChnZXRQYXJhbU5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBwZWRQYXJhbU5hbWUocGFyYW1OYW1lOiBzdHJpbmcsIHBhcmFtc01hcHBpbmc6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKHBhcmFtc01hcHBpbmcpIHtcbiAgICAgIHJldHVybiBwYXJhbXNNYXBwaW5nW3BhcmFtTmFtZV0gfHwgcGFyYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1OYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==