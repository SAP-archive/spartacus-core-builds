/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { UrlParsingService } from './url-parsing.service';
import { getParamName, isParam } from './path-utils';
import { RoutingConfigService } from '../routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../routing-config.service";
import * as i2 from "./url-parsing.service";
var SemanticPathService = /** @class */ (function () {
    function SemanticPathService(routingConfigService, urlParser) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.ROOT_URL = ['/'];
    }
    /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     */
    /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     * @param {?} routeName
     * @return {?}
     */
    SemanticPathService.prototype.get = /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     * @param {?} routeName
     * @return {?}
     */
    function (routeName) {
        /** @type {?} */
        var routeConfig = this.routingConfigService.getRouteConfig(routeName);
        return routeConfig && Array.isArray(routeConfig.paths)
            ? '/' + routeConfig.paths[0]
            : undefined;
    };
    /**
     * Transforms the array of url commands. Each command can be:
     * a) string - will be left untouched
     * b) object { cxRoute: <route name> } - will be replaced with semantic path
     * c) object { cxRoute: <route name>, params: { ... } } - same as above, but with passed params
     *
     * If the first command is the object with the `cxRoute` property, returns an absolute url (with the first element of the array `'/'`)
     */
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
    SemanticPathService.prototype.transform = /**
     * Transforms the array of url commands. Each command can be:
     * a) string - will be left untouched
     * b) object { cxRoute: <route name> } - will be replaced with semantic path
     * c) object { cxRoute: <route name>, params: { ... } } - same as above, but with passed params
     *
     * If the first command is the object with the `cxRoute` property, returns an absolute url (with the first element of the array `'/'`)
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
    SemanticPathService.prototype.isRouteCommand = /**
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
    SemanticPathService.prototype.shouldOutputAbsolute = /**
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
    SemanticPathService.prototype.generateUrlPart = /**
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
    SemanticPathService.prototype.standarizeRouteCommand = /**
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
    SemanticPathService.prototype.provideParamsValues = /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    function (path, params, paramsMapping) {
        var _this = this;
        return this.urlParser.getPrimarySegments(path).map((/**
         * @param {?} segment
         * @return {?}
         */
        function (segment) {
            if (isParam(segment)) {
                /** @type {?} */
                var paramName = getParamName(segment);
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        }));
    };
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    SemanticPathService.prototype.findPathWithFillableParams = /**
     * @private
     * @param {?} routeConfig
     * @param {?} params
     * @return {?}
     */
    function (routeConfig, params) {
        var _this = this;
        /** @type {?} */
        var foundPath = routeConfig.paths.find((/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return _this.getParams(path).every((/**
             * @param {?} paramName
             * @return {?}
             */
            function (paramName) {
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, routeConfig.paramsMapping);
                return params[mappedParamName] !== undefined;
            }));
        }));
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
    SemanticPathService.prototype.getParams = /**
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
    SemanticPathService.prototype.getMappedParamName = /**
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
    SemanticPathService.prototype.warn = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isDevMode()) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    SemanticPathService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SemanticPathService.ctorParameters = function () { return [
        { type: RoutingConfigService },
        { type: UrlParsingService }
    ]; };
    /** @nocollapse */ SemanticPathService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SemanticPathService_Factory() { return new SemanticPathService(i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlParsingService)); }, token: SemanticPathService, providedIn: "root" });
    return SemanticPathService;
}());
export { SemanticPathService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMtcGF0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vc2VtYW50aWMtcGF0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFakU7SUFJRSw2QkFDWSxvQkFBMEMsRUFDMUMsU0FBNEI7UUFENUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUovQixhQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUt2QixDQUFDO0lBRUo7O09BRUc7Ozs7OztJQUNILGlDQUFHOzs7OztJQUFILFVBQUksU0FBaUI7O1lBQ2IsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLE9BQU8sV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwRCxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7O0lBQ0gsdUNBQVM7Ozs7Ozs7Ozs7SUFBVCxVQUFVLFFBQXFCOztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2Qjs7WUFFSyxNQUFNLEdBQWEsRUFBRTs7WUFDM0IsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0IsSUFBTSxPQUFPLHFCQUFBO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDakMsa0RBQWtEO29CQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTs7O3dCQUVDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFFbkQsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO3dCQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ3RCO29CQUVELE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxtQkFBUyxhQUFhLEdBQUU7aUJBQy9CO2FBQ0Y7Ozs7Ozs7OztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyw0Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsT0FBbUI7UUFDeEMsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFTyxrREFBb0I7Ozs7O0lBQTVCLFVBQTZCLFFBQXFCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFTyw2Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsT0FBd0I7UUFDOUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUssV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQzFELE9BQU8sQ0FBQyxPQUFPLENBQ2hCO1FBRUQsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7OztZQUdLLElBQUksR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFekUsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiOztZQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQ3JDLElBQUksRUFDSixPQUFPLENBQUMsTUFBTSxFQUNkLFdBQVcsQ0FBQyxhQUFhLENBQzFCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sb0RBQXNCOzs7OztJQUE5QixVQUErQixPQUF3QjtRQUNyRCxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7O0lBRU8saURBQW1COzs7Ozs7O0lBQTNCLFVBQ0UsSUFBWSxFQUNaLE1BQWMsRUFDZCxhQUE0QjtRQUg5QixpQkFnQkM7UUFYQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUN4RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTs7b0JBQ2QsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7O29CQUNqQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUM3QyxTQUFTLEVBQ1QsYUFBYSxDQUNkO2dCQUNELE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sd0RBQTBCOzs7Ozs7SUFBbEMsVUFDRSxXQUF3QixFQUN4QixNQUFjO1FBRmhCLGlCQTBCQzs7WUF0Qk8sU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSTtZQUMzQyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSzs7OztZQUFDLFVBQUEsU0FBUzs7b0JBQzVCLGVBQWUsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQzdDLFNBQVMsRUFDVCxXQUFXLENBQUMsYUFBYSxDQUMxQjtnQkFFRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxTQUFTLENBQUM7WUFDL0MsQ0FBQyxFQUFDO1FBUEYsQ0FPRSxFQUNIO1FBRUQsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FDUCw2REFBNkQsRUFDN0QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsTUFBTSxDQUNQLENBQUM7WUFDRixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sdUNBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUzthQUNsQixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7YUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7O0lBRU8sZ0RBQWtCOzs7Ozs7SUFBMUIsVUFBMkIsU0FBaUIsRUFBRSxhQUFxQjtRQUNqRSxJQUFJLGFBQWEsRUFBRTtZQUNqQixPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7U0FDOUM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyxrQ0FBSTs7Ozs7SUFBWjtRQUFhLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ2xCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sbUJBQVMsSUFBSSxHQUFFO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0JBcktGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBRnpCLG9CQUFvQjtnQkFKcEIsaUJBQWlCOzs7OEJBRDFCO0NBNktDLEFBdEtELElBc0tDO1NBcktZLG1CQUFtQjs7O0lBQzlCLHVDQUEwQjs7Ozs7SUFHeEIsbURBQW9EOzs7OztJQUNwRCx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBQYXJhbXNNYXBwaW5nIH0gZnJvbSAnLi4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRQYXJhbU5hbWUsIGlzUGFyYW0gfSBmcm9tICcuL3BhdGgtdXRpbHMnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZFJvdXRlLCBVcmxDb21tYW5kcywgVXJsQ29tbWFuZCB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1BhdGhTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgUk9PVF9VUkwgPSBbJy8nXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3QgcGF0aCBhbGlhcyBjb25maWd1cmVkIGZvciBhIGdpdmVuIHJvdXRlIG5hbWUuIEl0IGFkZHMgYC9gIGF0IHRoZSBiZWdpbm5pbmcuXG4gICAqL1xuICBnZXQocm91dGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWUpO1xuICAgIHJldHVybiByb3V0ZUNvbmZpZyAmJiBBcnJheS5pc0FycmF5KHJvdXRlQ29uZmlnLnBhdGhzKVxuICAgICAgPyAnLycgKyByb3V0ZUNvbmZpZy5wYXRoc1swXVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgYXJyYXkgb2YgdXJsIGNvbW1hbmRzLiBFYWNoIGNvbW1hbmQgY2FuIGJlOlxuICAgKiBhKSBzdHJpbmcgLSB3aWxsIGJlIGxlZnQgdW50b3VjaGVkXG4gICAqIGIpIG9iamVjdCB7IGN4Um91dGU6IDxyb3V0ZSBuYW1lPiB9IC0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHNlbWFudGljIHBhdGhcbiAgICogYykgb2JqZWN0IHsgY3hSb3V0ZTogPHJvdXRlIG5hbWU+LCBwYXJhbXM6IHsgLi4uIH0gfSAtIHNhbWUgYXMgYWJvdmUsIGJ1dCB3aXRoIHBhc3NlZCBwYXJhbXNcbiAgICpcbiAgICogSWYgdGhlIGZpcnN0IGNvbW1hbmQgaXMgdGhlIG9iamVjdCB3aXRoIHRoZSBgY3hSb3V0ZWAgcHJvcGVydHksIHJldHVybnMgYW4gYWJzb2x1dGUgdXJsICh3aXRoIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBgJy8nYClcbiAgICovXG4gIHRyYW5zZm9ybShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBhbnlbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbW1hbmRzKSkge1xuICAgICAgY29tbWFuZHMgPSBbY29tbWFuZHNdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgY29tbWFuZHMpIHtcbiAgICAgIGlmICghdGhpcy5pc1JvdXRlQ29tbWFuZChjb21tYW5kKSkge1xuICAgICAgICAvLyBkb24ndCBtb2RpZnkgc2VnbWVudCB0aGF0IGlzIG5vdCByb3V0ZSBjb21tYW5kOlxuICAgICAgICByZXN1bHQucHVzaChjb21tYW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGFycmF5IHdpdGggdXJsIHNlZ21lbnRzIGZvciBnaXZlbiByb3V0ZSBjb21tYW5kOlxuICAgICAgICBjb25zdCBwYXJ0aWFsUmVzdWx0ID0gdGhpcy5nZW5lcmF0ZVVybFBhcnQoY29tbWFuZCk7XG5cbiAgICAgICAgaWYgKHBhcnRpYWxSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLnBhcnRpYWxSZXN1bHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZE91dHB1dEFic29sdXRlKGNvbW1hbmRzKSkge1xuICAgICAgcmVzdWx0LnVuc2hpZnQoJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JvdXRlQ29tbWFuZChjb21tYW5kOiBVcmxDb21tYW5kKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbW1hbmQgJiYgQm9vbGVhbihjb21tYW5kLmN4Um91dGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRPdXRwdXRBYnNvbHV0ZShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1JvdXRlQ29tbWFuZChjb21tYW5kc1swXSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVXJsUGFydChjb21tYW5kOiBVcmxDb21tYW5kUm91dGUpOiBzdHJpbmdbXSB8IG51bGwge1xuICAgIHRoaXMuc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kKTtcblxuICAgIGlmICghY29tbWFuZC5jeFJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICBjb21tYW5kLmN4Um91dGVcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQsIHJldHVybiBudWxsOlxuICAgIGlmICghcm91dGVDb25maWcgfHwgIXJvdXRlQ29uZmlnLnBhdGhzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGZpcnN0IHBhdGggdGhhdCBjYW4gc2F0aXNmeSBpdCdzIHBhcmFtZXRlcnMgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzXG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZmluZFBhdGhXaXRoRmlsbGFibGVQYXJhbXMocm91dGVDb25maWcsIGNvbW1hbmQucGFyYW1zKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWQgcGF0aCB0aGF0IGNhbiBiZSBzYXRpc2ZpZWQgd2l0aCBnaXZlbiBwYXJhbXMsIHJldHVybiBudWxsXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgICBwYXRoLFxuICAgICAgY29tbWFuZC5wYXJhbXMsXG4gICAgICByb3V0ZUNvbmZpZy5wYXJhbXNNYXBwaW5nXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZDogVXJsQ29tbWFuZFJvdXRlKTogdm9pZCB7XG4gICAgY29tbWFuZC5wYXJhbXMgPSBjb21tYW5kLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBvYmplY3QsXG4gICAgcGFyYW1zTWFwcGluZzogUGFyYW1zTWFwcGluZ1xuICApOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKS5tYXAoc2VnbWVudCA9PiB7XG4gICAgICBpZiAoaXNQYXJhbShzZWdtZW50KSkge1xuICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBnZXRQYXJhbU5hbWUoc2VnbWVudCk7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICBwYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsXG4gICAgcGFyYW1zOiBvYmplY3RcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3VuZFBhdGggPSByb3V0ZUNvbmZpZy5wYXRocy5maW5kKHBhdGggPT5cbiAgICAgIHRoaXMuZ2V0UGFyYW1zKHBhdGgpLmV2ZXJ5KHBhcmFtTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICByb3V0ZUNvbmZpZy5wYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoZm91bmRQYXRoID09PSB1bmRlZmluZWQgfHwgZm91bmRQYXRoID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBObyBjb25maWd1cmVkIHBhdGggbWF0Y2hlcyBhbGwgaXRzIHBhcmFtcyB0byBnaXZlbiBvYmplY3QuIGAsXG4gICAgICAgIGBSb3V0ZSBjb25maWc6IGAsXG4gICAgICAgIHJvdXRlQ29uZmlnLFxuICAgICAgICBgUGFyYW1zIG9iamVjdDogYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZFBhdGg7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXJcbiAgICAgIC5nZXRQcmltYXJ5U2VnbWVudHMocGF0aClcbiAgICAgIC5maWx0ZXIoaXNQYXJhbSlcbiAgICAgIC5tYXAoZ2V0UGFyYW1OYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwcGVkUGFyYW1OYW1lKHBhcmFtTmFtZTogc3RyaW5nLCBwYXJhbXNNYXBwaW5nOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGlmIChwYXJhbXNNYXBwaW5nKSB7XG4gICAgICByZXR1cm4gcGFyYW1zTWFwcGluZ1twYXJhbU5hbWVdIHx8IHBhcmFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=