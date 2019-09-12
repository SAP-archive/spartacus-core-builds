/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { UrlParsingService } from './url-parsing.service';
import { getParamName, isParam } from './path-utils';
import { RoutingConfigService } from '../routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../routing-config.service";
import * as i2 from "./url-parsing.service";
export class SemanticPathService {
    /**
     * @param {?} routingConfigService
     * @param {?} urlParser
     */
    constructor(routingConfigService, urlParser) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
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
        return this.urlParser.getPrimarySegments(path).map((/**
         * @param {?} segment
         * @return {?}
         */
        segment => {
            if (isParam(segment)) {
                /** @type {?} */
                const paramName = getParamName(segment);
                /** @type {?} */
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        }));
    }
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    findPathWithFillableParams(routeConfig, params) {
        /** @type {?} */
        const foundPath = routeConfig.paths.find((/**
         * @param {?} path
         * @return {?}
         */
        path => this.getParams(path).every((/**
         * @param {?} paramName
         * @return {?}
         */
        paramName => {
            /** @type {?} */
            const mappedParamName = this.getMappedParamName(paramName, routeConfig.paramsMapping);
            return params[mappedParamName] !== undefined;
        }))));
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
        if (isDevMode()) {
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
    { type: UrlParsingService }
];
/** @nocollapse */ SemanticPathService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SemanticPathService_Factory() { return new SemanticPathService(i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlParsingService)); }, token: SemanticPathService, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMtcGF0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vc2VtYW50aWMtcGF0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUdqRSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUc5QixZQUNZLG9CQUEwQyxFQUMxQyxTQUE0QjtRQUQ1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBSi9CLGFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBS3ZCLENBQUM7Ozs7OztJQUtKLEdBQUcsQ0FBQyxTQUFpQjs7Y0FDYixXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsT0FBTyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDOzs7Ozs7Ozs7OztJQVVELFNBQVMsQ0FBQyxRQUFxQjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QixRQUFRLEdBQUcsQ0FBQyxRQUFR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R3hCLG1EQUFvRDs7Ozs7SUFDcEQsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUGFyYW1zTWFwcGluZyB9IGZyb20gJy4uL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgZ2V0UGFyYW1OYW1lLCBpc1BhcmFtIH0gZnJvbSAnLi9wYXRoLXV0aWxzJztcbmltcG9ydCB7IFVybENvbW1hbmRSb3V0ZSwgVXJsQ29tbWFuZHMsIFVybENvbW1hbmQgfSBmcm9tICcuL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNQYXRoU2VydmljZSB7XG4gIHJlYWRvbmx5IFJPT1RfVVJMID0gWycvJ107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXJsUGFyc2VyOiBVcmxQYXJzaW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IHBhdGggYWxpYXMgY29uZmlndXJlZCBmb3IgYSBnaXZlbiByb3V0ZSBuYW1lLiBJdCBhZGRzIGAvYCBhdCB0aGUgYmVnaW5uaW5nLlxuICAgKi9cbiAgZ2V0KHJvdXRlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcocm91dGVOYW1lKTtcbiAgICByZXR1cm4gcm91dGVDb25maWcgJiYgQXJyYXkuaXNBcnJheShyb3V0ZUNvbmZpZy5wYXRocylcbiAgICAgID8gJy8nICsgcm91dGVDb25maWcucGF0aHNbMF1cbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGFycmF5IG9mIHVybCBjb21tYW5kcy4gRWFjaCBjb21tYW5kIGNhbiBiZTpcbiAgICogYSkgc3RyaW5nIC0gd2lsbCBiZSBsZWZ0IHVudG91Y2hlZFxuICAgKiBiKSBvYmplY3QgeyBjeFJvdXRlOiA8cm91dGUgbmFtZT4gfSAtIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBzZW1hbnRpYyBwYXRoXG4gICAqIGMpIG9iamVjdCB7IGN4Um91dGU6IDxyb3V0ZSBuYW1lPiwgcGFyYW1zOiB7IC4uLiB9IH0gLSBzYW1lIGFzIGFib3ZlLCBidXQgd2l0aCBwYXNzZWQgcGFyYW1zXG4gICAqXG4gICAqIElmIHRoZSBmaXJzdCBjb21tYW5kIGlzIHRoZSBvYmplY3Qgd2l0aCB0aGUgYGN4Um91dGVgIHByb3BlcnR5LCByZXR1cm5zIGFuIGFic29sdXRlIHVybCAod2l0aCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkgYCcvJ2ApXG4gICAqL1xuICB0cmFuc2Zvcm0oY29tbWFuZHM6IFVybENvbW1hbmRzKTogYW55W10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tYW5kcykpIHtcbiAgICAgIGNvbW1hbmRzID0gW2NvbW1hbmRzXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNvbW1hbmRzKSB7XG4gICAgICBpZiAoIXRoaXMuaXNSb3V0ZUNvbW1hbmQoY29tbWFuZCkpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW9kaWZ5IHNlZ21lbnQgdGhhdCBpcyBub3Qgcm91dGUgY29tbWFuZDpcbiAgICAgICAgcmVzdWx0LnB1c2goY29tbWFuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZW5lcmF0ZSBhcnJheSB3aXRoIHVybCBzZWdtZW50cyBmb3IgZ2l2ZW4gcm91dGUgY29tbWFuZDpcbiAgICAgICAgY29uc3QgcGFydGlhbFJlc3VsdCA9IHRoaXMuZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQpO1xuXG4gICAgICAgIGlmIChwYXJ0aWFsUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCguLi5wYXJ0aWFsUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRPdXRwdXRBYnNvbHV0ZShjb21tYW5kcykpIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KCcvJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSb3V0ZUNvbW1hbmQoY29tbWFuZDogVXJsQ29tbWFuZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb21tYW5kICYmIEJvb2xlYW4oY29tbWFuZC5jeFJvdXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkT3V0cHV0QWJzb2x1dGUoY29tbWFuZHM6IFVybENvbW1hbmRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNSb3V0ZUNvbW1hbmQoY29tbWFuZHNbMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVVybFBhcnQoY29tbWFuZDogVXJsQ29tbWFuZFJvdXRlKTogc3RyaW5nW10gfCBudWxsIHtcbiAgICB0aGlzLnN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZCk7XG5cbiAgICBpZiAoIWNvbW1hbmQuY3hSb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgY29tbWFuZC5jeFJvdXRlXG4gICAgKTtcblxuICAgIC8vIGlmIG5vIHJvdXRlIHRyYW5zbGF0aW9uIHdhcyBjb25maWd1cmVkLCByZXR1cm4gbnVsbDpcbiAgICBpZiAoIXJvdXRlQ29uZmlnIHx8ICFyb3V0ZUNvbmZpZy5wYXRocykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gZmluZCBmaXJzdCBwYXRoIHRoYXQgY2FuIHNhdGlzZnkgaXQncyBwYXJhbWV0ZXJzIHdpdGggZ2l2ZW4gcGFyYW1ldGVyc1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKHJvdXRlQ29uZmlnLCBjb21tYW5kLnBhcmFtcyk7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkIHBhdGggdGhhdCBjYW4gYmUgc2F0aXNmaWVkIHdpdGggZ2l2ZW4gcGFyYW1zLCByZXR1cm4gbnVsbFxuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgICAgcGF0aCxcbiAgICAgIGNvbW1hbmQucGFyYW1zLFxuICAgICAgcm91dGVDb25maWcucGFyYW1zTWFwcGluZ1xuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQ6IFVybENvbW1hbmRSb3V0ZSk6IHZvaWQge1xuICAgIGNvbW1hbmQucGFyYW1zID0gY29tbWFuZC5wYXJhbXMgfHwge307XG4gIH1cblxuICBwcml2YXRlIHByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHBhcmFtczogb2JqZWN0LFxuICAgIHBhcmFtc01hcHBpbmc6IFBhcmFtc01hcHBpbmdcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlci5nZXRQcmltYXJ5U2VnbWVudHMocGF0aCkubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgaWYgKGlzUGFyYW0oc2VnbWVudCkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gZ2V0UGFyYW1OYW1lKHNlZ21lbnQpO1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhdGhXaXRoRmlsbGFibGVQYXJhbXMoXG4gICAgcm91dGVDb25maWc6IFJvdXRlQ29uZmlnLFxuICAgIHBhcmFtczogb2JqZWN0XG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgZm91bmRQYXRoID0gcm91dGVDb25maWcucGF0aHMuZmluZChwYXRoID0+XG4gICAgICB0aGlzLmdldFBhcmFtcyhwYXRoKS5ldmVyeShwYXJhbU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcm91dGVDb25maWcucGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kUGF0aCA9PT0gdW5kZWZpbmVkIHx8IGZvdW5kUGF0aCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gY29uZmlndXJlZCBwYXRoIG1hdGNoZXMgYWxsIGl0cyBwYXJhbXMgdG8gZ2l2ZW4gb2JqZWN0LiBgLFxuICAgICAgICBgUm91dGUgY29uZmlnOiBgLFxuICAgICAgICByb3V0ZUNvbmZpZyxcbiAgICAgICAgYFBhcmFtcyBvYmplY3Q6IGAsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmRQYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhbXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyXG4gICAgICAuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpXG4gICAgICAuZmlsdGVyKGlzUGFyYW0pXG4gICAgICAubWFwKGdldFBhcmFtTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcHBlZFBhcmFtTmFtZShwYXJhbU5hbWU6IHN0cmluZywgcGFyYW1zTWFwcGluZzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAocGFyYW1zTWFwcGluZykge1xuICAgICAgcmV0dXJuIHBhcmFtc01hcHBpbmdbcGFyYW1OYW1lXSB8fCBwYXJhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbU5hbWU7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19