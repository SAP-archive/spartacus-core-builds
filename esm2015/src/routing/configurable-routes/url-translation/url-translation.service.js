/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConfigurableRoutesService } from '../configurable-routes.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
export class UrlTranslationService {
    /**
     * @param {?} configurableRoutesService
     * @param {?} urlParser
     * @param {?} config
     */
    constructor(configurableRoutesService, urlParser, config) {
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
        const routeTranslation = this.configurableRoutesService.getRouteTranslation(command.route);
        // if no route translation was configured, return null:
        if (!routeTranslation || !routeTranslation.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        /** @type {?} */
        const path = this.findPathWithFillableParams(routeTranslation, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        /** @type {?} */
        const result = this.provideParamsValues(path, command.params, routeTranslation.paramsMapping);
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
     * @param {?} routeTranslation
     * @param {?} params
     * @return {?}
     */
    findPathWithFillableParams(routeTranslation, params) {
        /** @type {?} */
        const foundPath = routeTranslation.paths.find(path => this.getParams(path).every(paramName => {
            /** @type {?} */
            const mappedParamName = this.getMappedParamName(paramName, routeTranslation.paramsMapping);
            return params[mappedParamName] !== undefined;
        }));
        if (foundPath === undefined || foundPath === null) {
            this.warn(`No configured path matches all its params to given object. `, `Route translation: `, routeTranslation, `Params object: `, params);
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
    { type: Injectable }
];
/** @nocollapse */
UrlTranslationService.ctorParameters = () => [
    { type: ConfigurableRoutesService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFRckQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBR2hDLFlBQ1UseUJBQW9ELEVBQ3BELFNBQTRCLEVBQzVCLE1BQW9CO1FBRnBCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUxyQixhQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQU12QixDQUFDOzs7Ozs7SUFFSixTQUFTLENBQ1AsUUFBOEIsRUFDOUIsVUFBK0IsRUFBRTtRQUVqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2Qjs7Y0FFSyxNQUFNLEdBQWEsRUFBRTtRQUMzQixLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDOUIsa0RBQWtEO2dCQUNsRCxNQUFNLENB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UCxDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVM7YUFDbEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFNBQWlCLEVBQUUsYUFBcUI7UUFDakUsSUFBSSxhQUFhLEVBQUU7WUFDakIsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBbEpGLFVBQVU7Ozs7WUFYRix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLFlBQVk7Ozs7SUFXbkIseUNBQTBCOzs7OztJQUd4QiwwREFBNEQ7Ozs7O0lBQzVELDBDQUFvQzs7Ozs7SUFDcEMsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IFJvdXRlVHJhbnNsYXRpb24sIFBhcmFtc01hcHBpbmcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IGdldFBhcmFtTmFtZSwgaXNQYXJhbSB9IGZyb20gJy4vcGF0aC11dGlscyc7XG5pbXBvcnQge1xuICBUcmFuc2xhdGVVcmxDb21tYW5kUm91dGUsXG4gIFRyYW5zbGF0ZVVybENvbW1hbmRzLFxuICBUcmFuc2xhdGVVcmxPcHRpb25zLFxufSBmcm9tICcuL3RyYW5zbGF0ZS11cmwtY29tbWFuZHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXJsVHJhbnNsYXRpb25TZXJ2aWNlIHtcbiAgcmVhZG9ubHkgUk9PVF9VUkwgPSBbJy8nXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWdcbiAgKSB7fVxuXG4gIHRyYW5zbGF0ZShcbiAgICBjb21tYW5kczogVHJhbnNsYXRlVXJsQ29tbWFuZHMsXG4gICAgb3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyA9IHt9XG4gICk6IGFueVtdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWFuZHMpKSB7XG4gICAgICBjb21tYW5kcyA9IFtjb21tYW5kc107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBjb21tYW5kcykge1xuICAgICAgaWYgKCFjb21tYW5kIHx8ICFjb21tYW5kLnJvdXRlKSB7XG4gICAgICAgIC8vIGRvbid0IG1vZGlmeSBzZWdtZW50IHRoYXQgaXMgbm90IHJvdXRlIGNvbW1hbmQ6XG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbW1hbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYXJyYXkgd2l0aCB1cmwgc2VnbWVudHMgZm9yIGdpdmVuIG9wdGlvbnMgb2JqZWN0OlxuICAgICAgICBjb25zdCBwYXJ0aWFsUmVzdWx0ID0gdGhpcy5nZW5lcmF0ZVVybChjb21tYW5kKTtcblxuICAgICAgICBpZiAocGFydGlhbFJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goLi4ucGFydGlhbFJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLnJlbGF0aXZlKSB7XG4gICAgICByZXN1bHQudW5zaGlmdCgnJyk7IC8vIGVuc3VyZSBhYnNvbHV0ZSBwYXRoICggbGVhZGluZyAnJyBpbiBwYXRoIGFycmF5IGlzIGVxdWl2YWxlbnQgdG8gbGVhZGluZyAnLycgaW4gc3RyaW5nKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVXJsKGNvbW1hbmQ6IFRyYW5zbGF0ZVVybENvbW1hbmRSb3V0ZSk6IHN0cmluZ1tdIHwgbnVsbCB7XG4gICAgdGhpcy5zdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKCFjb21tYW5kLnJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZVRyYW5zbGF0aW9uID0gdGhpcy5jb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlLmdldFJvdXRlVHJhbnNsYXRpb24oXG4gICAgICBjb21tYW5kLnJvdXRlXG4gICAgKTtcblxuICAgIC8vIGlmIG5vIHJvdXRlIHRyYW5zbGF0aW9uIHdhcyBjb25maWd1cmVkLCByZXR1cm4gbnVsbDpcbiAgICBpZiAoIXJvdXRlVHJhbnNsYXRpb24gfHwgIXJvdXRlVHJhbnNsYXRpb24ucGF0aHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGZpbmQgZmlyc3QgcGF0aCB0aGF0IGNhbiBzYXRpc2Z5IGl0J3MgcGFyYW1ldGVycyB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcbiAgICBjb25zdCBwYXRoID0gdGhpcy5maW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICAgIHJvdXRlVHJhbnNsYXRpb24sXG4gICAgICBjb21tYW5kLnBhcmFtc1xuICAgICk7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkIHBhdGggdGhhdCBjYW4gYmUgc2F0aXNmaWVkIHdpdGggZ2l2ZW4gcGFyYW1zLCByZXR1cm4gbnVsbFxuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgICAgcGF0aCxcbiAgICAgIGNvbW1hbmQucGFyYW1zLFxuICAgICAgcm91dGVUcmFuc2xhdGlvbi5wYXJhbXNNYXBwaW5nXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHN0YW5kYXJpemVSb3V0ZUNvbW1hbmQoY29tbWFuZDogVHJhbnNsYXRlVXJsQ29tbWFuZFJvdXRlKTogdm9pZCB7XG4gICAgY29tbWFuZC5wYXJhbXMgPSBjb21tYW5kLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBvYmplY3QsXG4gICAgcGFyYW1zTWFwcGluZzogUGFyYW1zTWFwcGluZ1xuICApOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKS5tYXAoc2VnbWVudCA9PiB7XG4gICAgICBpZiAoaXNQYXJhbShzZWdtZW50KSkge1xuICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBnZXRQYXJhbU5hbWUoc2VnbWVudCk7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICBwYXJhbXNNYXBwaW5nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICByb3V0ZVRyYW5zbGF0aW9uOiBSb3V0ZVRyYW5zbGF0aW9uLFxuICAgIHBhcmFtczogb2JqZWN0XG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgZm91bmRQYXRoID0gcm91dGVUcmFuc2xhdGlvbi5wYXRocy5maW5kKHBhdGggPT5cbiAgICAgIHRoaXMuZ2V0UGFyYW1zKHBhdGgpLmV2ZXJ5KHBhcmFtTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZFBhcmFtTmFtZSA9IHRoaXMuZ2V0TWFwcGVkUGFyYW1OYW1lKFxuICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICByb3V0ZVRyYW5zbGF0aW9uLnBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChmb3VuZFBhdGggPT09IHVuZGVmaW5lZCB8fCBmb3VuZFBhdGggPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIGNvbmZpZ3VyZWQgcGF0aCBtYXRjaGVzIGFsbCBpdHMgcGFyYW1zIHRvIGdpdmVuIG9iamVjdC4gYCxcbiAgICAgICAgYFJvdXRlIHRyYW5zbGF0aW9uOiBgLFxuICAgICAgICByb3V0ZVRyYW5zbGF0aW9uLFxuICAgICAgICBgUGFyYW1zIG9iamVjdDogYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZFBhdGg7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXJcbiAgICAgIC5nZXRQcmltYXJ5U2VnbWVudHMocGF0aClcbiAgICAgIC5maWx0ZXIoaXNQYXJhbSlcbiAgICAgIC5tYXAoZ2V0UGFyYW1OYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwcGVkUGFyYW1OYW1lKHBhcmFtTmFtZTogc3RyaW5nLCBwYXJhbXNNYXBwaW5nOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGlmIChwYXJhbXNNYXBwaW5nKSB7XG4gICAgICByZXR1cm4gcGFyYW1zTWFwcGluZ1twYXJhbU5hbWVdIHx8IHBhcmFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=