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
export class SemanticPathService {
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
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     * @param {?} routeName
     * @return {?}
     */
    get(routeName) {
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(routeName);
        return routeConfig && Array.isArray(routeConfig.paths)
            ? '/' + routeConfig.paths[0]
            : undefined;
    }
    /**
     * Transforms the array of url commands. Each command can be:
     * a) string - will be left untouched
     * b) object { cxRoute: <route name> } - will be replaced with semantic path
     * c) object { cxRoute: <route name>, params: { ... } } - same as above, but with passed params
     *
     * If the first command is the object with the `cxRoute` property, returns an absolute url (with the first element of the array `'/'`)
     * @param {?} commands
     * @return {?}
     */
    transform(commands) {
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
        return command && Boolean(command.cxRoute);
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
        if (!command.cxRoute) {
            return null;
        }
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
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
SemanticPathService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SemanticPathService.ctorParameters = () => [
    { type: RoutingConfigService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
/** @nocollapse */ SemanticPathService.ngInjectableDef = i0.defineInjectable({ factory: function SemanticPathService_Factory() { return new SemanticPathService(i0.inject(i1.RoutingConfigService), i0.inject(i2.UrlParsingService), i0.inject(i3.ServerConfig)); }, token: SemanticPathService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SemanticPathService.prototype.ROOT_URL;
    /**
     * @type {?}
     * @protected
     */
    SemanticPathService.prototype.routingConfigService;
    /**
     * @type {?}
     * @protected
     */
    SemanticPathService.prototype.urlParser;
    /**
     * @type {?}
     * @protected
     */
    SemanticPathService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMtcGF0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vc2VtYW50aWMtcGF0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFHakUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRzlCLFlBQ1ksb0JBQTBDLEVBQzFDLFNBQTRCLEVBQzVCLE1BQW9CO1FBRnBCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUx2QixhQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQU12QixDQUFDOzs7Ozs7SUFLSixHQUFHLENBQUMsU0FBaUI7O2NBQ2IsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLE9BQU8sV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwRCxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFVRCxTQUFTLENBQUMsUUFBcUI7UUFD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QVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFGekIsb0JBQW9CO1lBTHBCLGlCQUFpQjtZQUNqQixZQUFZOzs7OztJQVFuQix1Q0FBMEI7Ozs7O0lBR3hCLG1EQUFvRDs7Ozs7SUFDcEQsd0NBQXNDOzs7OztJQUN0QyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBQYXJhbXNNYXBwaW5nIH0gZnJvbSAnLi4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRQYXJhbU5hbWUsIGlzUGFyYW0gfSBmcm9tICcuL3BhdGgtdXRpbHMnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZFJvdXRlLCBVcmxDb21tYW5kcywgVXJsQ29tbWFuZCB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1BhdGhTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgUk9PVF9VUkwgPSBbJy8nXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IHBhdGggYWxpYXMgY29uZmlndXJlZCBmb3IgYSBnaXZlbiByb3V0ZSBuYW1lLiBJdCBhZGRzIGAvYCBhdCB0aGUgYmVnaW5uaW5nLlxuICAgKi9cbiAgZ2V0KHJvdXRlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcocm91dGVOYW1lKTtcbiAgICByZXR1cm4gcm91dGVDb25maWcgJiYgQXJyYXkuaXNBcnJheShyb3V0ZUNvbmZpZy5wYXRocylcbiAgICAgID8gJy8nICsgcm91dGVDb25maWcucGF0aHNbMF1cbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGFycmF5IG9mIHVybCBjb21tYW5kcy4gRWFjaCBjb21tYW5kIGNhbiBiZTpcbiAgICogYSkgc3RyaW5nIC0gd2lsbCBiZSBsZWZ0IHVudG91Y2hlZFxuICAgKiBiKSBvYmplY3QgeyBjeFJvdXRlOiA8cm91dGUgbmFtZT4gfSAtIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBzZW1hbnRpYyBwYXRoXG4gICAqIGMpIG9iamVjdCB7IGN4Um91dGU6IDxyb3V0ZSBuYW1lPiwgcGFyYW1zOiB7IC4uLiB9IH0gLSBzYW1lIGFzIGFib3ZlLCBidXQgd2l0aCBwYXNzZWQgcGFyYW1zXG4gICAqXG4gICAqIElmIHRoZSBmaXJzdCBjb21tYW5kIGlzIHRoZSBvYmplY3Qgd2l0aCB0aGUgYGN4Um91dGVgIHByb3BlcnR5LCByZXR1cm5zIGFuIGFic29sdXRlIHVybCAod2l0aCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkgYCcvJ2ApXG4gICAqL1xuICB0cmFuc2Zvcm0oY29tbWFuZHM6IFVybENvbW1hbmRzKTogYW55W10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tYW5kcykpIHtcbiAgICAgIGNvbW1hbmRzID0gW2NvbW1hbmRzXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNvbW1hbmRzKSB7XG4gICAgICBpZiAoIXRoaXMuaXNSb3V0ZUNvbW1hbmQoY29tbWFuZCkpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW9kaWZ5IHNlZ21lbnQgdGhhdCBpcyBub3Qgcm91dGUgY29tbWFuZDpcbiAgICAgICAgcmVzdWx0LnB1c2goY29tbWFuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZW5lcmF0ZSBhcnJheSB3aXRoIHVybCBzZWdtZW50cyBmb3IgZ2l2ZW4gcm91dGUgY29tbWFuZDpcbiAgICAgICAgY29uc3QgcGFydGlhbFJlc3VsdCA9IHRoaXMuZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQpO1xuXG4gICAgICAgIGlmIChwYXJ0aWFsUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCguLi5wYXJ0aWFsUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRPdXRwdXRBYnNvbHV0ZShjb21tYW5kcykpIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KCcvJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSb3V0ZUNvbW1hbmQoY29tbWFuZDogVXJsQ29tbWFuZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb21tYW5kICYmIEJvb2xlYW4oY29tbWFuZC5jeFJvdXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkT3V0cHV0QWJzb2x1dGUoY29tbWFuZHM6IFVybENvbW1hbmRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNSb3V0ZUNvbW1hbmQoY29tbWFuZHNbMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVVybFBhcnQoY29tbWFuZDogVXJsQ29tbWFuZFJvdXRlKTogc3RyaW5nW10gfCBudWxsIHtcbiAgICB0aGlzLnN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZCk7XG5cbiAgICBpZiAoIWNvbW1hbmQuY3hSb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgY29tbWFuZC5jeFJvdXRlXG4gICAgKTtcblxuICAgIC8vIGlmIG5vIHJvdXRlIHRyYW5zbGF0aW9uIHdhcyBjb25maWd1cmVkLCByZXR1cm4gbnVsbDpcbiAgICBpZiAoIXJvdXRlQ29uZmlnIHx8ICFyb3V0ZUNvbmZpZy5wYXRocykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gZmluZCBmaXJzdCBwYXRoIHRoYXQgY2FuIHNhdGlzZnkgaXQncyBwYXJhbWV0ZXJzIHdpdGggZ2l2ZW4gcGFyYW1ldGVyc1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKHJvdXRlQ29uZmlnLCBjb21tYW5kLnBhcmFtcyk7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkIHBhdGggdGhhdCBjYW4gYmUgc2F0aXNmaWVkIHdpdGggZ2l2ZW4gcGFyYW1zLCByZXR1cm4gbnVsbFxuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgICAgcGF0aCxcbiAgICAgIGNvbW1hbmQucGFyYW1zLFxuICAgICAgcm91dGVDb25maWcucGFyYW1zTWFwcGluZ1xuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQ6IFVybENvbW1hbmRSb3V0ZSk6IHZvaWQge1xuICAgIGNvbW1hbmQucGFyYW1zID0gY29tbWFuZC5wYXJhbXMgfHwge307XG4gIH1cblxuICBwcml2YXRlIHByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHBhcmFtczogb2JqZWN0LFxuICAgIHBhcmFtc01hcHBpbmc6IFBhcmFtc01hcHBpbmdcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlci5nZXRQcmltYXJ5U2VnbWVudHMocGF0aCkubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgaWYgKGlzUGFyYW0oc2VnbWVudCkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gZ2V0UGFyYW1OYW1lKHNlZ21lbnQpO1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhdGhXaXRoRmlsbGFibGVQYXJhbXMoXG4gICAgcm91dGVDb25maWc6IFJvdXRlQ29uZmlnLFxuICAgIHBhcmFtczogb2JqZWN0XG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgZm91bmRQYXRoID0gcm91dGVDb25maWcucGF0aHMuZmluZChwYXRoID0+XG4gICAgICB0aGlzLmdldFBhcmFtcyhwYXRoKS5ldmVyeShwYXJhbU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcm91dGVDb25maWcucGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kUGF0aCA9PT0gdW5kZWZpbmVkIHx8IGZvdW5kUGF0aCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gY29uZmlndXJlZCBwYXRoIG1hdGNoZXMgYWxsIGl0cyBwYXJhbXMgdG8gZ2l2ZW4gb2JqZWN0LiBgLFxuICAgICAgICBgUm91dGUgY29uZmlnOiBgLFxuICAgICAgICByb3V0ZUNvbmZpZyxcbiAgICAgICAgYFBhcmFtcyBvYmplY3Q6IGAsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmRQYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhbXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyXG4gICAgICAuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpXG4gICAgICAuZmlsdGVyKGlzUGFyYW0pXG4gICAgICAubWFwKGdldFBhcmFtTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcHBlZFBhcmFtTmFtZShwYXJhbU5hbWU6IHN0cmluZywgcGFyYW1zTWFwcGluZzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAocGFyYW1zTWFwcGluZykge1xuICAgICAgcmV0dXJuIHBhcmFtc01hcHBpbmdbcGFyYW1OYW1lXSB8fCBwYXJhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbU5hbWU7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19