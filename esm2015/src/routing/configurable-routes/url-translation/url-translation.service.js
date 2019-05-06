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
export class UrlTranslationService {
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
     * @param {?=} options
     * @return {?}
     */
    translate(commands, options = {}) {
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        /** @type {?} */
        const result = [];
        for (const command of commands) {
            if (!command || !command.route) {
                // don't modify segment that is not route command:
                result.push(command);
            }
            else {
                // generate array with url segments for given options object:
                /** @type {?} */
                const partialResult = this.generateUrl(command);
                if (partialResult === null) {
                    return this.ROOT_URL;
                }
                result.push(...partialResult);
            }
        }
        if (!options.relative) {
            result.unshift(''); // ensure absolute path ( leading '' in path array is equivalent to leading '/' in string)
        }
        return result;
    }
    /**
     * @private
     * @param {?} command
     * @return {?}
     */
    generateUrl(command) {
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
UrlTranslationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UrlTranslationService.ctorParameters = () => [
    { type: RoutingConfigService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
/** @nocollapse */ UrlTranslationService.ngInjectableDef = i0.defineInjectable({ factory: function UrlTranslationService_Factory() { return new UrlTranslationService(i0.inject(i1.RoutingConfigService), i0.inject(i2.UrlParsingService), i0.inject(i3.ServerConfig)); }, token: UrlTranslationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UrlTranslationService.prototype.ROOT_URL;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.routingConfigService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFNckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBR2pFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUdoQyxZQUNVLG9CQUEwQyxFQUMxQyxTQUE0QixFQUM1QixNQUFvQjtRQUZwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFMckIsYUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFNdkIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLFFBQThCLEVBQzlCLFVBQStCLEVBQUU7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUIsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7O2NBRUssTUFBTSxHQUFhLEVBQUU7UUFDM0IsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLGtEQUFrRDtnQkFDbEQsTUFB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SUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTO2FBQ2xCLGtCQUFrQixDQUFDLElBQUksQ0FBQzthQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxTQUFpQixFQUFFLGFBQXFCO1FBQ2pFLElBQUksYUFBYSxFQUFFO1lBQ2pCLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztTQUM5QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQTdJRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBRnpCLG9CQUFvQjtZQVRwQixpQkFBaUI7WUFDakIsWUFBWTs7Ozs7SUFZbkIseUNBQTBCOzs7OztJQUd4QixxREFBa0Q7Ozs7O0lBQ2xELDBDQUFvQzs7Ozs7SUFDcEMsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUGFyYW1zTWFwcGluZyB9IGZyb20gJy4uL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgZ2V0UGFyYW1OYW1lLCBpc1BhcmFtIH0gZnJvbSAnLi9wYXRoLXV0aWxzJztcbmltcG9ydCB7XG4gIFRyYW5zbGF0ZVVybENvbW1hbmRSb3V0ZSxcbiAgVHJhbnNsYXRlVXJsQ29tbWFuZHMsXG4gIFRyYW5zbGF0ZVVybE9wdGlvbnMsXG59IGZyb20gJy4vdHJhbnNsYXRlLXVybC1jb21tYW5kcyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHJlYWRvbmx5IFJPT1RfVVJMID0gWycvJ107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWdcbiAgKSB7fVxuXG4gIHRyYW5zbGF0ZShcbiAgICBjb21tYW5kczogVHJhbnNsYXRlVXJsQ29tbWFuZHMsXG4gICAgb3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyA9IHt9XG4gICk6IGFueVtdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWFuZHMpKSB7XG4gICAgICBjb21tYW5kcyA9IFtjb21tYW5kc107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBjb21tYW5kcykge1xuICAgICAgaWYgKCFjb21tYW5kIHx8ICFjb21tYW5kLnJvdXRlKSB7XG4gICAgICAgIC8vIGRvbid0IG1vZGlmeSBzZWdtZW50IHRoYXQgaXMgbm90IHJvdXRlIGNvbW1hbmQ6XG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbW1hbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYXJyYXkgd2l0aCB1cmwgc2VnbWVudHMgZm9yIGdpdmVuIG9wdGlvbnMgb2JqZWN0OlxuICAgICAgICBjb25zdCBwYXJ0aWFsUmVzdWx0ID0gdGhpcy5nZW5lcmF0ZVVybChjb21tYW5kKTtcblxuICAgICAgICBpZiAocGFydGlhbFJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goLi4ucGFydGlhbFJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLnJlbGF0aXZlKSB7XG4gICAgICByZXN1bHQudW5zaGlmdCgnJyk7IC8vIGVuc3VyZSBhYnNvbHV0ZSBwYXRoICggbGVhZGluZyAnJyBpbiBwYXRoIGFycmF5IGlzIGVxdWl2YWxlbnQgdG8gbGVhZGluZyAnLycgaW4gc3RyaW5nKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVXJsKGNvbW1hbmQ6IFRyYW5zbGF0ZVVybENvbW1hbmRSb3V0ZSk6IHN0cmluZ1tdIHwgbnVsbCB7XG4gICAgdGhpcy5zdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKCFjb21tYW5kLnJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoY29tbWFuZC5yb3V0ZSk7XG5cbiAgICAvLyBpZiBubyByb3V0ZSB0cmFuc2xhdGlvbiB3YXMgY29uZmlndXJlZCwgcmV0dXJuIG51bGw6XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCAhcm91dGVDb25maWcucGF0aHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGZpbmQgZmlyc3QgcGF0aCB0aGF0IGNhbiBzYXRpc2Z5IGl0J3MgcGFyYW1ldGVycyB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcbiAgICBjb25zdCBwYXRoID0gdGhpcy5maW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhyb3V0ZUNvbmZpZywgY29tbWFuZC5wYXJhbXMpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZCBwYXRoIHRoYXQgY2FuIGJlIHNhdGlzZmllZCB3aXRoIGdpdmVuIHBhcmFtcywgcmV0dXJuIG51bGxcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICAgIHBhdGgsXG4gICAgICBjb21tYW5kLnBhcmFtcyxcbiAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kOiBUcmFuc2xhdGVVcmxDb21tYW5kUm91dGUpOiB2b2lkIHtcbiAgICBjb21tYW5kLnBhcmFtcyA9IGNvbW1hbmQucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpLm1hcChzZWdtZW50ID0+IHtcbiAgICAgIGlmIChpc1BhcmFtKHNlZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGdldFBhcmFtTmFtZShzZWdtZW50KTtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyxcbiAgICBwYXJhbXM6IG9iamVjdFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvdW5kUGF0aCA9IHJvdXRlQ29uZmlnLnBhdGhzLmZpbmQocGF0aCA9PlxuICAgICAgdGhpcy5nZXRQYXJhbXMocGF0aCkuZXZlcnkocGFyYW1OYW1lID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChmb3VuZFBhdGggPT09IHVuZGVmaW5lZCB8fCBmb3VuZFBhdGggPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIGNvbmZpZ3VyZWQgcGF0aCBtYXRjaGVzIGFsbCBpdHMgcGFyYW1zIHRvIGdpdmVuIG9iamVjdC4gYCxcbiAgICAgICAgYFJvdXRlIGNvbmZpZzogYCxcbiAgICAgICAgcm91dGVDb25maWcsXG4gICAgICAgIGBQYXJhbXMgb2JqZWN0OiBgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kUGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlclxuICAgICAgLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKVxuICAgICAgLmZpbHRlcihpc1BhcmFtKVxuICAgICAgLm1hcChnZXRQYXJhbU5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBwZWRQYXJhbU5hbWUocGFyYW1OYW1lOiBzdHJpbmcsIHBhcmFtc01hcHBpbmc6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKHBhcmFtc01hcHBpbmcpIHtcbiAgICAgIHJldHVybiBwYXJhbXNNYXBwaW5nW3BhcmFtTmFtZV0gfHwgcGFyYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1OYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==