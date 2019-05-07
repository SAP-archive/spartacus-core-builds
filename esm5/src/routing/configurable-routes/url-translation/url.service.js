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
     * @param {?=} options
     * @return {?}
     */
    UrlService.prototype.generateUrl = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTXJELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQUVqRTtJQUlFLG9CQUNVLG9CQUEwQyxFQUMxQyxTQUE0QixFQUM1QixNQUFvQjtRQUZwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFMckIsYUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFNdkIsQ0FBQzs7Ozs7O0lBRUosZ0NBQVc7Ozs7O0lBQVgsVUFDRSxRQUFxQixFQUNyQixPQUFrQztRQUFsQyx3QkFBQSxFQUFBLFlBQWtDOztRQUVsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2Qjs7WUFFSyxNQUFNLEdBQWEsRUFBRTs7WUFDM0IsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0IsSUFBTSxPQUFPLHFCQUFBO2dCQUNoQixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtvQkFDOUIsa0RBQWtEO29CQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTs7O3dCQUVDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFFbkQsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO3dCQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ3RCO29CQUVELE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxtQkFBUyxhQUFhLEdBQUU7aUJBQy9CO2FBQ0Y7Ozs7Ozs7OztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywwRkFBMEY7U0FDL0c7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyxvQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsT0FBd0I7UUFDOUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUssV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUUzRSx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjs7O1lBR0ssSUFBSSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUV6RSxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FDckMsSUFBSSxFQUNKLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsV0FBVyxDQUFDLGFBQWEsQ0FDMUI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTywyQ0FBc0I7Ozs7O0lBQTlCLFVBQStCLE9BQXdCO1FBQ3JELE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7Ozs7SUFFTyx3Q0FBbUI7Ozs7Ozs7SUFBM0IsVUFDRSxJQUFZLEVBQ1osTUFBYyxFQUNkLGFBQTRCO1FBSDlCLGlCQWdCQztRQVhDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ3hELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFOztvQkFDZCxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7b0JBQ2pDLGVBQWUsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQzdDLFNBQVMsRUFDVCxhQUFhLENBQ2Q7Z0JBQ0QsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTywrQ0FBMEI7Ozs7OztJQUFsQyxVQUNFLFdBQXdCLEVBQ3hCLE1BQWM7UUFGaEIsaUJBMEJDOztZQXRCTyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQzNDLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxTQUFTOztvQkFDNUIsZUFBZSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FDN0MsU0FBUyxFQUNULFdBQVcsQ0FBQyxhQUFhLENBQzFCO2dCQUVELE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLFNBQVMsQ0FBQztZQUMvQyxDQUFDLENBQUM7UUFQRixDQU9FLENBQ0g7UUFFRCxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUNQLDZEQUE2RCxFQUM3RCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixNQUFNLENBQ1AsQ0FBQztZQUNGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyw4QkFBUzs7Ozs7SUFBakIsVUFBa0IsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTO2FBQ2xCLGtCQUFrQixDQUFDLElBQUksQ0FBQzthQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFTyx1Q0FBa0I7Ozs7OztJQUExQixVQUEyQixTQUFpQixFQUFFLGFBQXFCO1FBQ2pFLElBQUksYUFBYSxFQUFFO1lBQ2pCLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztTQUM5QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLHlCQUFJOzs7OztJQUFaO1FBQWEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLEdBQUU7U0FDdkI7SUFDSCxDQUFDOztnQkE3SUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsb0JBQW9CO2dCQVRwQixpQkFBaUI7Z0JBQ2pCLFlBQVk7OztxQkFGckI7Q0EwSkMsQUE5SUQsSUE4SUM7U0E3SVksVUFBVTs7O0lBQ3JCLDhCQUEwQjs7Ozs7SUFHeEIsMENBQWtEOzs7OztJQUNsRCwrQkFBb0M7Ozs7O0lBQ3BDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFBhcmFtc01hcHBpbmcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IGdldFBhcmFtTmFtZSwgaXNQYXJhbSB9IGZyb20gJy4vcGF0aC11dGlscyc7XG5pbXBvcnQge1xuICBVcmxDb21tYW5kUm91dGUsXG4gIFVybENvbW1hbmRzLFxuICBVcmxHZW5lcmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnLi91cmwtY29tbWFuZCc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybFNlcnZpY2Uge1xuICByZWFkb25seSBST09UX1VSTCA9IFsnLyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsUGFyc2VyOiBVcmxQYXJzaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogU2VydmVyQ29uZmlnXG4gICkge31cblxuICBnZW5lcmF0ZVVybChcbiAgICBjb21tYW5kczogVXJsQ29tbWFuZHMsXG4gICAgb3B0aW9uczogVXJsR2VuZXJhdGlvbk9wdGlvbnMgPSB7fVxuICApOiBhbnlbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbW1hbmRzKSkge1xuICAgICAgY29tbWFuZHMgPSBbY29tbWFuZHNdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgY29tbWFuZHMpIHtcbiAgICAgIGlmICghY29tbWFuZCB8fCAhY29tbWFuZC5yb3V0ZSkge1xuICAgICAgICAvLyBkb24ndCBtb2RpZnkgc2VnbWVudCB0aGF0IGlzIG5vdCByb3V0ZSBjb21tYW5kOlxuICAgICAgICByZXN1bHQucHVzaChjb21tYW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGFycmF5IHdpdGggdXJsIHNlZ21lbnRzIGZvciBnaXZlbiBvcHRpb25zIG9iamVjdDpcbiAgICAgICAgY29uc3QgcGFydGlhbFJlc3VsdCA9IHRoaXMuZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQpO1xuXG4gICAgICAgIGlmIChwYXJ0aWFsUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCguLi5wYXJ0aWFsUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMucmVsYXRpdmUpIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KCcnKTsgLy8gZW5zdXJlIGFic29sdXRlIHBhdGggKCBsZWFkaW5nICcnIGluIHBhdGggYXJyYXkgaXMgZXF1aXZhbGVudCB0byBsZWFkaW5nICcvJyBpbiBzdHJpbmcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQ6IFVybENvbW1hbmRSb3V0ZSk6IHN0cmluZ1tdIHwgbnVsbCB7XG4gICAgdGhpcy5zdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKCFjb21tYW5kLnJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoY29tbWFuZC5yb3V0ZSk7XG5cbiAgICAvLyBpZiBubyByb3V0ZSB0cmFuc2xhdGlvbiB3YXMgY29uZmlndXJlZCwgcmV0dXJuIG51bGw6XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCAhcm91dGVDb25maWcucGF0aHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGZpbmQgZmlyc3QgcGF0aCB0aGF0IGNhbiBzYXRpc2Z5IGl0J3MgcGFyYW1ldGVycyB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcbiAgICBjb25zdCBwYXRoID0gdGhpcy5maW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhyb3V0ZUNvbmZpZywgY29tbWFuZC5wYXJhbXMpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZCBwYXRoIHRoYXQgY2FuIGJlIHNhdGlzZmllZCB3aXRoIGdpdmVuIHBhcmFtcywgcmV0dXJuIG51bGxcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICAgIHBhdGgsXG4gICAgICBjb21tYW5kLnBhcmFtcyxcbiAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kOiBVcmxDb21tYW5kUm91dGUpOiB2b2lkIHtcbiAgICBjb21tYW5kLnBhcmFtcyA9IGNvbW1hbmQucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpLm1hcChzZWdtZW50ID0+IHtcbiAgICAgIGlmIChpc1BhcmFtKHNlZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGdldFBhcmFtTmFtZShzZWdtZW50KTtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyxcbiAgICBwYXJhbXM6IG9iamVjdFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvdW5kUGF0aCA9IHJvdXRlQ29uZmlnLnBhdGhzLmZpbmQocGF0aCA9PlxuICAgICAgdGhpcy5nZXRQYXJhbXMocGF0aCkuZXZlcnkocGFyYW1OYW1lID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChmb3VuZFBhdGggPT09IHVuZGVmaW5lZCB8fCBmb3VuZFBhdGggPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIGNvbmZpZ3VyZWQgcGF0aCBtYXRjaGVzIGFsbCBpdHMgcGFyYW1zIHRvIGdpdmVuIG9iamVjdC4gYCxcbiAgICAgICAgYFJvdXRlIGNvbmZpZzogYCxcbiAgICAgICAgcm91dGVDb25maWcsXG4gICAgICAgIGBQYXJhbXMgb2JqZWN0OiBgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kUGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlclxuICAgICAgLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKVxuICAgICAgLmZpbHRlcihpc1BhcmFtKVxuICAgICAgLm1hcChnZXRQYXJhbU5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBwZWRQYXJhbU5hbWUocGFyYW1OYW1lOiBzdHJpbmcsIHBhcmFtc01hcHBpbmc6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKHBhcmFtc01hcHBpbmcpIHtcbiAgICAgIHJldHVybiBwYXJhbXNNYXBwaW5nW3BhcmFtTmFtZV0gfHwgcGFyYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1OYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==