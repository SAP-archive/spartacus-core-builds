/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConfigurableRoutesService } from '../configurable-routes.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
var UrlTranslationService = /** @class */ (function () {
    function UrlTranslationService(configurableRoutesService, urlParser, config) {
        this.configurableRoutesService = configurableRoutesService;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    UrlTranslationService.prototype.translate = /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    function (commands, options) {
        if (options === void 0) { options = {}; }
        var e_1, _a;
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        /** @type {?} */
        var result = [];
        try {
            for (var commands_1 = tslib_1.__values(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
                var command = commands_1_1.value;
                if (!command || !command.route) {
                    // don't modify segment that is not route command:
                    result.push(command);
                }
                else {
                    // generate array with url segments for given options object:
                    /** @type {?} */
                    var partialResult = this.generateUrl(command);
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
        if (!options.relative) {
            result.unshift(''); // ensure absolute path ( leading '' in path array is equivalent to leading '/' in string)
        }
        return result;
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlTranslationService.prototype.generateUrl = /**
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
        var routeTranslation = this.configurableRoutesService.getRouteTranslation(command.route);
        // if no route translation was configured, return null:
        if (!routeTranslation || !routeTranslation.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        /** @type {?} */
        var path = this.findPathWithFillableParams(routeTranslation, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        /** @type {?} */
        var result = this.provideParamsValues(path, command.params, routeTranslation.paramsMapping);
        return result;
    };
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    UrlTranslationService.prototype.standarizeRouteCommand = /**
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
    UrlTranslationService.prototype.provideParamsValues = /**
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
     * @param {?} routeTranslation
     * @param {?} params
     * @return {?}
     */
    UrlTranslationService.prototype.findPathWithFillableParams = /**
     * @private
     * @param {?} routeTranslation
     * @param {?} params
     * @return {?}
     */
    function (routeTranslation, params) {
        var _this = this;
        /** @type {?} */
        var foundPath = routeTranslation.paths.find(function (path) {
            return _this.getParams(path).every(function (paramName) {
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, routeTranslation.paramsMapping);
                return params[mappedParamName] !== undefined;
            });
        });
        if (foundPath === undefined || foundPath === null) {
            this.warn("No configured path matches all its params to given object. ", "Route translation: ", routeTranslation, "Params object: ", params);
            return null;
        }
        return foundPath;
    };
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    UrlTranslationService.prototype.getParams = /**
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
    UrlTranslationService.prototype.getMappedParamName = /**
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
    UrlTranslationService.prototype.warn = /**
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
    UrlTranslationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UrlTranslationService.ctorParameters = function () { return [
        { type: ConfigurableRoutesService },
        { type: UrlParsingService },
        { type: ServerConfig }
    ]; };
    return UrlTranslationService;
}());
export { UrlTranslationService };
if (false) {
    /** @type {?} */
    UrlTranslationService.prototype.ROOT_URL;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.configurableRoutesService;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.urlParser;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBT3JEO0lBSUUsK0JBQ1UseUJBQW9ELEVBQ3BELFNBQTRCLEVBQzVCLE1BQW9CO1FBRnBCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUxyQixhQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQU12QixDQUFDOzs7Ozs7SUFFSix5Q0FBUzs7Ozs7SUFBVCxVQUNFLFFBQThCLEVBQzlCLE9BQWlDO1FBQWpDLHdCQUFBLEVBQUEsWUFBaUM7O1FBRWpDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVCLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCOztZQUVLLE1BQU0sR0FBYSxFQUFFOztZQUMzQixLQUFzQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUEzQixJQUFNLE9BQU8scUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxP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ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVUcmFuc2xhdGlvbiwgUGFyYW1zTWFwcGluZyB9IGZyb20gJy4uL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgZ2V0UGFyYW1OYW1lLCBpc1BhcmFtIH0gZnJvbSAnLi9wYXRoLXV0aWxzJztcbmltcG9ydCB7XG4gIFRyYW5zbGF0ZVVybENvbW1hbmRSb3V0ZSxcbiAgVHJhbnNsYXRlVXJsQ29tbWFuZHMsXG4gIFRyYW5zbGF0ZVVybE9wdGlvbnMsXG59IGZyb20gJy4vdHJhbnNsYXRlLXVybC1jb21tYW5kcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcmxUcmFuc2xhdGlvblNlcnZpY2Uge1xuICByZWFkb25seSBST09UX1VSTCA9IFsnLyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhYmxlUm91dGVzU2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgdHJhbnNsYXRlKFxuICAgIGNvbW1hbmRzOiBUcmFuc2xhdGVVcmxDb21tYW5kcyxcbiAgICBvcHRpb25zOiBUcmFuc2xhdGVVcmxPcHRpb25zID0ge31cbiAgKTogYW55W10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tYW5kcykpIHtcbiAgICAgIGNvbW1hbmRzID0gW2NvbW1hbmRzXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNvbW1hbmRzKSB7XG4gICAgICBpZiAoIWNvbW1hbmQgfHwgIWNvbW1hbmQucm91dGUpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW9kaWZ5IHNlZ21lbnQgdGhhdCBpcyBub3Qgcm91dGUgY29tbWFuZDpcbiAgICAgICAgcmVzdWx0LnB1c2goY29tbWFuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZW5lcmF0ZSBhcnJheSB3aXRoIHVybCBzZWdtZW50cyBmb3IgZ2l2ZW4gb3B0aW9ucyBvYmplY3Q6XG4gICAgICAgIGNvbnN0IHBhcnRpYWxSZXN1bHQgPSB0aGlzLmdlbmVyYXRlVXJsKGNvbW1hbmQpO1xuXG4gICAgICAgIGlmIChwYXJ0aWFsUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCguLi5wYXJ0aWFsUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMucmVsYXRpdmUpIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KCcnKTsgLy8gZW5zdXJlIGFic29sdXRlIHBhdGggKCBsZWFkaW5nICcnIGluIHBhdGggYXJyYXkgaXMgZXF1aXZhbGVudCB0byBsZWFkaW5nICcvJyBpbiBzdHJpbmcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVcmwoY29tbWFuZDogVHJhbnNsYXRlVXJsQ29tbWFuZFJvdXRlKTogc3RyaW5nW10gfCBudWxsIHtcbiAgICB0aGlzLnN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZCk7XG5cbiAgICBpZiAoIWNvbW1hbmQucm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlVHJhbnNsYXRpb24gPSB0aGlzLmNvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UuZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICAgIGNvbW1hbmQucm91dGVcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQsIHJldHVybiBudWxsOlxuICAgIGlmICghcm91dGVUcmFuc2xhdGlvbiB8fCAhcm91dGVUcmFuc2xhdGlvbi5wYXRocykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gZmluZCBmaXJzdCBwYXRoIHRoYXQgY2FuIHNhdGlzZnkgaXQncyBwYXJhbWV0ZXJzIHdpdGggZ2l2ZW4gcGFyYW1ldGVyc1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgICAgcm91dGVUcmFuc2xhdGlvbixcbiAgICAgIGNvbW1hbmQucGFyYW1zXG4gICAgKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWQgcGF0aCB0aGF0IGNhbiBiZSBzYXRpc2ZpZWQgd2l0aCBnaXZlbiBwYXJhbXMsIHJldHVybiBudWxsXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgICBwYXRoLFxuICAgICAgY29tbWFuZC5wYXJhbXMsXG4gICAgICByb3V0ZVRyYW5zbGF0aW9uLnBhcmFtc01hcHBpbmdcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kOiBUcmFuc2xhdGVVcmxDb21tYW5kUm91dGUpOiB2b2lkIHtcbiAgICBjb21tYW5kLnBhcmFtcyA9IGNvbW1hbmQucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpLm1hcChzZWdtZW50ID0+IHtcbiAgICAgIGlmIChpc1BhcmFtKHNlZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGdldFBhcmFtTmFtZShzZWdtZW50KTtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIHJvdXRlVHJhbnNsYXRpb246IFJvdXRlVHJhbnNsYXRpb24sXG4gICAgcGFyYW1zOiBvYmplY3RcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3VuZFBhdGggPSByb3V0ZVRyYW5zbGF0aW9uLnBhdGhzLmZpbmQocGF0aCA9PlxuICAgICAgdGhpcy5nZXRQYXJhbXMocGF0aCkuZXZlcnkocGFyYW1OYW1lID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHJvdXRlVHJhbnNsYXRpb24ucGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kUGF0aCA9PT0gdW5kZWZpbmVkIHx8IGZvdW5kUGF0aCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gY29uZmlndXJlZCBwYXRoIG1hdGNoZXMgYWxsIGl0cyBwYXJhbXMgdG8gZ2l2ZW4gb2JqZWN0LiBgLFxuICAgICAgICBgUm91dGUgdHJhbnNsYXRpb246IGAsXG4gICAgICAgIHJvdXRlVHJhbnNsYXRpb24sXG4gICAgICAgIGBQYXJhbXMgb2JqZWN0OiBgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kUGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlclxuICAgICAgLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKVxuICAgICAgLmZpbHRlcihpc1BhcmFtKVxuICAgICAgLm1hcChnZXRQYXJhbU5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBwZWRQYXJhbU5hbWUocGFyYW1OYW1lOiBzdHJpbmcsIHBhcmFtc01hcHBpbmc6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKHBhcmFtc01hcHBpbmcpIHtcbiAgICAgIHJldHVybiBwYXJhbXNNYXBwaW5nW3BhcmFtTmFtZV0gfHwgcGFyYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1OYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==