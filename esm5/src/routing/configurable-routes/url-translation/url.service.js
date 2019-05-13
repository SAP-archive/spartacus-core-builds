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
        return command && Boolean(command.cxRoute);
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
        if (!command.cxRoute) {
            return null;
        }
        /** @type {?} */
        var routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXJELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQUVqRTtJQUlFLG9CQUNVLG9CQUEwQyxFQUMxQyxTQUE0QixFQUM1QixNQUFvQjtRQUZwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFMckIsYUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFNdkIsQ0FBQzs7Ozs7SUFFSixnQ0FBVzs7OztJQUFYLFVBQVksUUFBcUI7O1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVCLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCOztZQUVLLE1BQU0sR0FBYSxFQUFFOztZQUMzQixLQUFzQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUEzQixJQUFNLE9BQU8scUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNqQyxrREFBa0Q7b0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENB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QkFBaUI7Z0JBQ2pCLFlBQVk7OztxQkFGckI7Q0E2SkMsQUFySkQsSUFxSkM7U0FwSlksVUFBVTs7O0lBQ3JCLDhCQUEwQjs7Ozs7SUFHeEIsMENBQWtEOzs7OztJQUNsRCwrQkFBb0M7Ozs7O0lBQ3BDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFBhcmFtc01hcHBpbmcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IGdldFBhcmFtTmFtZSwgaXNQYXJhbSB9IGZyb20gJy4vcGF0aC11dGlscyc7XG5pbXBvcnQgeyBVcmxDb21tYW5kUm91dGUsIFVybENvbW1hbmRzLCBVcmxDb21tYW5kIH0gZnJvbSAnLi91cmwtY29tbWFuZCc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybFNlcnZpY2Uge1xuICByZWFkb25seSBST09UX1VSTCA9IFsnLyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsUGFyc2VyOiBVcmxQYXJzaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogU2VydmVyQ29uZmlnXG4gICkge31cblxuICBnZW5lcmF0ZVVybChjb21tYW5kczogVXJsQ29tbWFuZHMpOiBhbnlbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbW1hbmRzKSkge1xuICAgICAgY29tbWFuZHMgPSBbY29tbWFuZHNdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgY29tbWFuZHMpIHtcbiAgICAgIGlmICghdGhpcy5pc1JvdXRlQ29tbWFuZChjb21tYW5kKSkge1xuICAgICAgICAvLyBkb24ndCBtb2RpZnkgc2VnbWVudCB0aGF0IGlzIG5vdCByb3V0ZSBjb21tYW5kOlxuICAgICAgICByZXN1bHQucHVzaChjb21tYW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGFycmF5IHdpdGggdXJsIHNlZ21lbnRzIGZvciBnaXZlbiByb3V0ZSBjb21tYW5kOlxuICAgICAgICBjb25zdCBwYXJ0aWFsUmVzdWx0ID0gdGhpcy5nZW5lcmF0ZVVybFBhcnQoY29tbWFuZCk7XG5cbiAgICAgICAgaWYgKHBhcnRpYWxSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLnBhcnRpYWxSZXN1bHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZE91dHB1dEFic29sdXRlKGNvbW1hbmRzKSkge1xuICAgICAgcmVzdWx0LnVuc2hpZnQoJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JvdXRlQ29tbWFuZChjb21tYW5kOiBVcmxDb21tYW5kKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbW1hbmQgJiYgQm9vbGVhbihjb21tYW5kLmN4Um91dGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRPdXRwdXRBYnNvbHV0ZShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1JvdXRlQ29tbWFuZChjb21tYW5kc1swXSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVXJsUGFydChjb21tYW5kOiBVcmxDb21tYW5kUm91dGUpOiBzdHJpbmdbXSB8IG51bGwge1xuICAgIHRoaXMuc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kKTtcblxuICAgIGlmICghY29tbWFuZC5jeFJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICBjb21tYW5kLmN4Um91dGVcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQsIHJldHVybiBudWxsOlxuICAgIGlmICghcm91dGVDb25maWcgfHwgIXJvdXRlQ29uZmlnLnBhdGhzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGZpcnN0IHBhdGggdGhhdCBjYW4gc2F0aXNmeSBpdCdzIHBhcmFtZXRlcnMgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzXG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZmluZFBhdGhXaXRoRmlsbGFibGVQYXJhbXMocm91dGVDb25maWcsIGNvbW1hbmQucGFyYW1zKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWQgcGF0aCB0aGF0IGNhbiBiZSBzYXRpc2ZpZWQgd2l0aCBnaXZlbiBwYXJhbXMsIHJldHVybiBudWxsXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgICBwYXRoLFxuICAgICAgY29tbWFuZC5wYXJhbXMsXG4gICAgICByb3V0ZUNvbmZpZy5wYXJhbXNNYXBwaW5nXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZDogVXJsQ29tbWFuZFJvdXRlKTogdm9pZCB7XG4gICAgY29tbWFuZC5wYXJhbXMgPSBjb21tYW5kLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBvYmplY3QsXG4gICAgcGFyYW1zTWFwcGluZzogUGFyYW1zTWFwcGluZ1xuICApOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKS5tYXAoc2VnbWVudCA9PiB7XG4gICAgICBpZiAoaXNQYXJhbShzZWdtZW50KSkge1xuICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBnZXRQYXJhbU5hbWUoc2VnbWVudCk7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICBwYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsXG4gICAgcGFyYW1zOiBvYmplY3RcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3VuZFBhdGggPSByb3V0ZUNvbmZpZy5wYXRocy5maW5kKHBhdGggPT5cbiAgICAgIHRoaXMuZ2V0UGFyYW1zKHBhdGgpLmV2ZXJ5KHBhcmFtTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICByb3V0ZUNvbmZpZy5wYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoZm91bmRQYXRoID09PSB1bmRlZmluZWQgfHwgZm91bmRQYXRoID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBObyBjb25maWd1cmVkIHBhdGggbWF0Y2hlcyBhbGwgaXRzIHBhcmFtcyB0byBnaXZlbiBvYmplY3QuIGAsXG4gICAgICAgIGBSb3V0ZSBjb25maWc6IGAsXG4gICAgICAgIHJvdXRlQ29uZmlnLFxuICAgICAgICBgUGFyYW1zIG9iamVjdDogYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZFBhdGg7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXJcbiAgICAgIC5nZXRQcmltYXJ5U2VnbWVudHMocGF0aClcbiAgICAgIC5maWx0ZXIoaXNQYXJhbSlcbiAgICAgIC5tYXAoZ2V0UGFyYW1OYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwcGVkUGFyYW1OYW1lKHBhcmFtTmFtZTogc3RyaW5nLCBwYXJhbXNNYXBwaW5nOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGlmIChwYXJhbXNNYXBwaW5nKSB7XG4gICAgICByZXR1cm4gcGFyYW1zTWFwcGluZ1twYXJhbU5hbWVdIHx8IHBhcmFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=