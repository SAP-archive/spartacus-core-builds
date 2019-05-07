/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
import { RoutingConfigService } from '../routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../routing-config.service";
import * as i2 from "./url-parsing.service";
import * as i3 from "../../../config/server-config/server-config";
var UrlService = /** @class */ (function () {
    function UrlService(routingConfigService, urlParser, config) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    UrlService.prototype.generateUrl = /**
     * @param {?} commands
     * @return {?}
     */
    function (commands) {
        var e_1, _a;
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        /** @type {?} */
        var result = [];
        try {
            for (var commands_1 = tslib_1.__values(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
                var command = commands_1_1.value;
                if (!this.isRouteCommand(command)) {
                    // don't modify segment that is not route command:
                    result.push(command);
                }
                else {
                    // generate array with url segments for given route command:
                    /** @type {?} */
                    var partialResult = this.generateUrlPart(command);
                    if (partialResult === null) {
                        return this.ROOT_URL;
                    }
                    result.push.apply(result, tslib_1.__spread(partialResult));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (commands_1_1 && !commands_1_1.done && (_a = commands_1.return)) _a.call(commands_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.shouldOutputAbsolute(commands)) {
            result.unshift('/');
        }
        return result;
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlService.prototype.isRouteCommand = /**
     * @private
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return command && Boolean(command.route);
    };
    /**
     * @private
     * @param {?} commands
     * @return {?}
     */
    UrlService.prototype.shouldOutputAbsolute = /**
     * @private
     * @param {?} commands
     * @return {?}
     */
    function (commands) {
        return this.isRouteCommand(commands[0]);
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlService.prototype.generateUrlPart = /**
     * @private
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.standarizeRouteCommand(command);
        if (!command.route) {
            return null;
        }
        /** @type {?} */
        var routeConfig = this.routingConfigService.getRouteConfig(command.route);
        // if no route translation was configured, return null:
        if (!routeConfig || !routeConfig.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        /** @type {?} */
        var path = this.findPathWithFillableParams(routeConfig, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        /** @type {?} */
        var result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
        return result;
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlService.prototype.standarizeRouteCommand = /**
     * @private
     * @param {?} command
     * @return {?}
     */
    function (command) {
        command.params = command.params || {};
    };
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlService.prototype.provideParamsValues = /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    function (path, params, paramsMapping) {
        var _this = this;
        return this.urlParser.getPrimarySegments(path).map(function (segment) {
            if (isParam(segment)) {
                /** @type {?} */
                var paramName = getParamName(segment);
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    };
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    UrlService.prototype.findPathWithFillableParams = /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    function (routeConfig, params) {
        var _this = this;
        /** @type {?} */
        var foundPath = routeConfig.paths.find(function (path) {
            return _this.getParams(path).every(function (paramName) {
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, routeConfig.paramsMapping);
                return params[mappedParamName] !== undefined;
            });
        });
        if (foundPath === undefined || foundPath === null) {
            this.warn("No configured path matches all its params to given object. ", "Route config: ", routeConfig, "Params object: ", params);
            return null;
        }
        return foundPath;
    };
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    UrlService.prototype.getParams = /**
     * @private
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    };
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlService.prototype.getMappedParamName = /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    function (paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    UrlService.prototype.warn = /**
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
    UrlService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UrlService.ctorParameters = function () { return [
        { type: RoutingConfigService },
        { type: UrlParsingService },
        { type: ServerConfig }
    ]; };
    /** @nocollapse */ UrlService.ngInjectableDef = i0.defineInjectable({ factory: function UrlService_Factory() { return new UrlService(i0.inject(i1.RoutingConfigService), i0.inject(i2.UrlParsingService), i0.inject(i3.ServerConfig)); }, token: UrlService, providedIn: "root" });
    return UrlService;
}());
export { UrlService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXJELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQUVqRTtJQUlFLG9CQUNVLG9CQUEwQyxFQUMxQyxTQUE0QixFQUM1QixNQUFvQjtRQUZwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFMckIsYUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFNdkIsQ0FBQzs7Ozs7SUFFSixnQ0FBVzs7OztJQUFYLFVBQVksUUFBcUI7O1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVCLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCOztZQUVLLE1BQU0sR0FBYSxFQUFFOztZQUMzQixLQUFzQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUEzQixJQUFNLE9BQU8scUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNqQyxrREFBa0Q7b0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENB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QUFpQjtnQkFDakIsWUFBWTs7O3FCQUZyQjtDQTJKQyxBQW5KRCxJQW1KQztTQWxKWSxVQUFVOzs7SUFDckIsOEJBQTBCOzs7OztJQUd4QiwwQ0FBa0Q7Ozs7O0lBQ2xELCtCQUFvQzs7Ozs7SUFDcEMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUGFyYW1zTWFwcGluZyB9IGZyb20gJy4uL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgZ2V0UGFyYW1OYW1lLCBpc1BhcmFtIH0gZnJvbSAnLi9wYXRoLXV0aWxzJztcbmltcG9ydCB7IFVybENvbW1hbmRSb3V0ZSwgVXJsQ29tbWFuZHMsIFVybENvbW1hbmQgfSBmcm9tICcuL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVXJsU2VydmljZSB7XG4gIHJlYWRvbmx5IFJPT1RfVVJMID0gWycvJ107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWdcbiAgKSB7fVxuXG4gIGdlbmVyYXRlVXJsKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGFueVtdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWFuZHMpKSB7XG4gICAgICBjb21tYW5kcyA9IFtjb21tYW5kc107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBjb21tYW5kcykge1xuICAgICAgaWYgKCF0aGlzLmlzUm91dGVDb21tYW5kKGNvbW1hbmQpKSB7XG4gICAgICAgIC8vIGRvbid0IG1vZGlmeSBzZWdtZW50IHRoYXQgaXMgbm90IHJvdXRlIGNvbW1hbmQ6XG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbW1hbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYXJyYXkgd2l0aCB1cmwgc2VnbWVudHMgZm9yIGdpdmVuIHJvdXRlIGNvbW1hbmQ6XG4gICAgICAgIGNvbnN0IHBhcnRpYWxSZXN1bHQgPSB0aGlzLmdlbmVyYXRlVXJsUGFydChjb21tYW5kKTtcblxuICAgICAgICBpZiAocGFydGlhbFJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goLi4ucGFydGlhbFJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkT3V0cHV0QWJzb2x1dGUoY29tbWFuZHMpKSB7XG4gICAgICByZXN1bHQudW5zaGlmdCgnLycpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGlzUm91dGVDb21tYW5kKGNvbW1hbmQ6IFVybENvbW1hbmQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29tbWFuZCAmJiBCb29sZWFuKGNvbW1hbmQucm91dGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRPdXRwdXRBYnNvbHV0ZShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1JvdXRlQ29tbWFuZChjb21tYW5kc1swXSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVXJsUGFydChjb21tYW5kOiBVcmxDb21tYW5kUm91dGUpOiBzdHJpbmdbXSB8IG51bGwge1xuICAgIHRoaXMuc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kKTtcblxuICAgIGlmICghY29tbWFuZC5yb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKGNvbW1hbmQucm91dGUpO1xuXG4gICAgLy8gaWYgbm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQsIHJldHVybiBudWxsOlxuICAgIGlmICghcm91dGVDb25maWcgfHwgIXJvdXRlQ29uZmlnLnBhdGhzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGZpcnN0IHBhdGggdGhhdCBjYW4gc2F0aXNmeSBpdCdzIHBhcmFtZXRlcnMgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzXG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZmluZFBhdGhXaXRoRmlsbGFibGVQYXJhbXMocm91dGVDb25maWcsIGNvbW1hbmQucGFyYW1zKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWQgcGF0aCB0aGF0IGNhbiBiZSBzYXRpc2ZpZWQgd2l0aCBnaXZlbiBwYXJhbXMsIHJldHVybiBudWxsXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgICBwYXRoLFxuICAgICAgY29tbWFuZC5wYXJhbXMsXG4gICAgICByb3V0ZUNvbmZpZy5wYXJhbXNNYXBwaW5nXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZDogVXJsQ29tbWFuZFJvdXRlKTogdm9pZCB7XG4gICAgY29tbWFuZC5wYXJhbXMgPSBjb21tYW5kLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBvYmplY3QsXG4gICAgcGFyYW1zTWFwcGluZzogUGFyYW1zTWFwcGluZ1xuICApOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKS5tYXAoc2VnbWVudCA9PiB7XG4gICAgICBpZiAoaXNQYXJhbShzZWdtZW50KSkge1xuICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBnZXRQYXJhbU5hbWUoc2VnbWVudCk7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICBwYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsXG4gICAgcGFyYW1zOiBvYmplY3RcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3VuZFBhdGggPSByb3V0ZUNvbmZpZy5wYXRocy5maW5kKHBhdGggPT5cbiAgICAgIHRoaXMuZ2V0UGFyYW1zKHBhdGgpLmV2ZXJ5KHBhcmFtTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICByb3V0ZUNvbmZpZy5wYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoZm91bmRQYXRoID09PSB1bmRlZmluZWQgfHwgZm91bmRQYXRoID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBObyBjb25maWd1cmVkIHBhdGggbWF0Y2hlcyBhbGwgaXRzIHBhcmFtcyB0byBnaXZlbiBvYmplY3QuIGAsXG4gICAgICAgIGBSb3V0ZSBjb25maWc6IGAsXG4gICAgICAgIHJvdXRlQ29uZmlnLFxuICAgICAgICBgUGFyYW1zIG9iamVjdDogYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZFBhdGg7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXJcbiAgICAgIC5nZXRQcmltYXJ5U2VnbWVudHMocGF0aClcbiAgICAgIC5maWx0ZXIoaXNQYXJhbSlcbiAgICAgIC5tYXAoZ2V0UGFyYW1OYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwcGVkUGFyYW1OYW1lKHBhcmFtTmFtZTogc3RyaW5nLCBwYXJhbXNNYXBwaW5nOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGlmIChwYXJhbXNNYXBwaW5nKSB7XG4gICAgICByZXR1cm4gcGFyYW1zTWFwcGluZ1twYXJhbU5hbWVdIHx8IHBhcmFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=