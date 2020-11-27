import { Injectable } from '@angular/core';
import { RoutingConfigService } from '../routing-config.service';
import { getParamName, isParam } from './path-utils';
import { UrlParsingService } from './url-parsing.service';
import * as i0 from "@angular/core";
import * as i1 from "../routing-config.service";
import * as i2 from "./url-parsing.service";
export class SemanticPathService {
    constructor(routingConfigService, urlParser) {
        this.routingConfigService = routingConfigService;
        this.urlParser = urlParser;
        this.ROOT_URL = ['/'];
    }
    /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     */
    get(routeName) {
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
     */
    transform(commands) {
        if (!Array.isArray(commands)) {
            commands = [commands];
        }
        const result = [];
        for (const command of commands) {
            if (!this.isRouteCommand(command)) {
                // don't modify segment that is not route command:
                result.push(command);
            }
            else {
                // generate array with url segments for given route command:
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
    isRouteCommand(command) {
        return command && Boolean(command.cxRoute);
    }
    shouldOutputAbsolute(commands) {
        return this.isRouteCommand(commands[0]);
    }
    generateUrlPart(command) {
        this.standarizeRouteCommand(command);
        if (!command.cxRoute) {
            return null;
        }
        const routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
        // if no route translation was configured, return null:
        if (!routeConfig || !routeConfig.paths) {
            return null;
        }
        // find first path that can satisfy it's parameters with given parameters
        const path = this.findPathWithFillableParams(routeConfig, command.params);
        // if there is no configured path that can be satisfied with given params, return null
        if (!path) {
            return null;
        }
        const result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
        return result;
    }
    standarizeRouteCommand(command) {
        command.params = command.params || {};
    }
    provideParamsValues(path, params, paramsMapping) {
        return this.urlParser.getPrimarySegments(path).map((segment) => {
            if (isParam(segment)) {
                const paramName = getParamName(segment);
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    }
    findPathWithFillableParams(routeConfig, params) {
        const foundPath = routeConfig.paths.find((path) => this.getParams(path).every((paramName) => {
            const mappedParamName = this.getMappedParamName(paramName, routeConfig.paramsMapping);
            return params[mappedParamName] !== undefined;
        }));
        if (foundPath === undefined || foundPath === null) {
            return null;
        }
        return foundPath;
    }
    getParams(path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    }
    getMappedParamName(paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    }
}
SemanticPathService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SemanticPathService_Factory() { return new SemanticPathService(i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlParsingService)); }, token: SemanticPathService, providedIn: "root" });
SemanticPathService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
SemanticPathService.ctorParameters = () => [
    { type: RoutingConfigService },
    { type: UrlParsingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMtcGF0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcxRCxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQ1ksb0JBQTBDLEVBQzFDLFNBQTRCO1FBRDVCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFKL0IsYUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFLdkIsQ0FBQztJQUVKOztPQUVHO0lBQ0gsR0FBRyxDQUFDLFNBQWlCO1FBQ25CLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEUsT0FBTyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFNBQVMsQ0FBQyxRQUFxQjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QixR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QixNQUFjO1FBRWQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FDN0MsU0FBUyxFQUNULFdBQVcsQ0FBQyxhQUFhLENBQzFCLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUyxDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUzthQUNsQixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7YUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sa0JBQWtCLENBQUMsU0FBaUIsRUFBRSxhQUFxQjtRQUNqRSxJQUFJLGFBQWEsRUFBRTtZQUNqQixPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7U0FDOUM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O1lBeEpGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUx6QixvQkFBb0I7WUFHcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1zTWFwcGluZywgUm91dGVDb25maWcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBnZXRQYXJhbU5hbWUsIGlzUGFyYW0gfSBmcm9tICcuL3BhdGgtdXRpbHMnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZCwgVXJsQ29tbWFuZFJvdXRlLCBVcmxDb21tYW5kcyB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljUGF0aFNlcnZpY2Uge1xuICByZWFkb25seSBST09UX1VSTCA9IFsnLyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBwYXRoIGFsaWFzIGNvbmZpZ3VyZWQgZm9yIGEgZ2l2ZW4gcm91dGUgbmFtZS4gSXQgYWRkcyBgL2AgYXQgdGhlIGJlZ2lubmluZy5cbiAgICovXG4gIGdldChyb3V0ZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgcmV0dXJuIHJvdXRlQ29uZmlnICYmIEFycmF5LmlzQXJyYXkocm91dGVDb25maWcucGF0aHMpXG4gICAgICA/ICcvJyArIHJvdXRlQ29uZmlnLnBhdGhzWzBdXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBhcnJheSBvZiB1cmwgY29tbWFuZHMuIEVhY2ggY29tbWFuZCBjYW4gYmU6XG4gICAqIGEpIHN0cmluZyAtIHdpbGwgYmUgbGVmdCB1bnRvdWNoZWRcbiAgICogYikgb2JqZWN0IHsgY3hSb3V0ZTogPHJvdXRlIG5hbWU+IH0gLSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggc2VtYW50aWMgcGF0aFxuICAgKiBjKSBvYmplY3QgeyBjeFJvdXRlOiA8cm91dGUgbmFtZT4sIHBhcmFtczogeyAuLi4gfSB9IC0gc2FtZSBhcyBhYm92ZSwgYnV0IHdpdGggcGFzc2VkIHBhcmFtc1xuICAgKlxuICAgKiBJZiB0aGUgZmlyc3QgY29tbWFuZCBpcyB0aGUgb2JqZWN0IHdpdGggdGhlIGBjeFJvdXRlYCBwcm9wZXJ0eSwgcmV0dXJucyBhbiBhYnNvbHV0ZSB1cmwgKHdpdGggdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGAnLydgKVxuICAgKi9cbiAgdHJhbnNmb3JtKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGFueVtdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWFuZHMpKSB7XG4gICAgICBjb21tYW5kcyA9IFtjb21tYW5kc107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBjb21tYW5kcykge1xuICAgICAgaWYgKCF0aGlzLmlzUm91dGVDb21tYW5kKGNvbW1hbmQpKSB7XG4gICAgICAgIC8vIGRvbid0IG1vZGlmeSBzZWdtZW50IHRoYXQgaXMgbm90IHJvdXRlIGNvbW1hbmQ6XG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbW1hbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYXJyYXkgd2l0aCB1cmwgc2VnbWVudHMgZm9yIGdpdmVuIHJvdXRlIGNvbW1hbmQ6XG4gICAgICAgIGNvbnN0IHBhcnRpYWxSZXN1bHQgPSB0aGlzLmdlbmVyYXRlVXJsUGFydChjb21tYW5kKTtcblxuICAgICAgICBpZiAocGFydGlhbFJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goLi4ucGFydGlhbFJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkT3V0cHV0QWJzb2x1dGUoY29tbWFuZHMpKSB7XG4gICAgICByZXN1bHQudW5zaGlmdCgnLycpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGlzUm91dGVDb21tYW5kKGNvbW1hbmQ6IFVybENvbW1hbmQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29tbWFuZCAmJiBCb29sZWFuKGNvbW1hbmQuY3hSb3V0ZSk7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZE91dHB1dEFic29sdXRlKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzUm91dGVDb21tYW5kKGNvbW1hbmRzWzBdKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVcmxQYXJ0KGNvbW1hbmQ6IFVybENvbW1hbmRSb3V0ZSk6IHN0cmluZ1tdIHwgbnVsbCB7XG4gICAgdGhpcy5zdGFuZGFyaXplUm91dGVDb21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKCFjb21tYW5kLmN4Um91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgIGNvbW1hbmQuY3hSb3V0ZVxuICAgICk7XG5cbiAgICAvLyBpZiBubyByb3V0ZSB0cmFuc2xhdGlvbiB3YXMgY29uZmlndXJlZCwgcmV0dXJuIG51bGw6XG4gICAgaWYgKCFyb3V0ZUNvbmZpZyB8fCAhcm91dGVDb25maWcucGF0aHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGZpbmQgZmlyc3QgcGF0aCB0aGF0IGNhbiBzYXRpc2Z5IGl0J3MgcGFyYW1ldGVycyB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcbiAgICBjb25zdCBwYXRoID0gdGhpcy5maW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhyb3V0ZUNvbmZpZywgY29tbWFuZC5wYXJhbXMpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZCBwYXRoIHRoYXQgY2FuIGJlIHNhdGlzZmllZCB3aXRoIGdpdmVuIHBhcmFtcywgcmV0dXJuIG51bGxcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICAgIHBhdGgsXG4gICAgICBjb21tYW5kLnBhcmFtcyxcbiAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhbmRhcml6ZVJvdXRlQ29tbWFuZChjb21tYW5kOiBVcmxDb21tYW5kUm91dGUpOiB2b2lkIHtcbiAgICBjb21tYW5kLnBhcmFtcyA9IGNvbW1hbmQucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKGlzUGFyYW0oc2VnbWVudCkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gZ2V0UGFyYW1OYW1lKHNlZ21lbnQpO1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhdGhXaXRoRmlsbGFibGVQYXJhbXMoXG4gICAgcm91dGVDb25maWc6IFJvdXRlQ29uZmlnLFxuICAgIHBhcmFtczogb2JqZWN0XG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgZm91bmRQYXRoID0gcm91dGVDb25maWcucGF0aHMuZmluZCgocGF0aCkgPT5cbiAgICAgIHRoaXMuZ2V0UGFyYW1zKHBhdGgpLmV2ZXJ5KChwYXJhbU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHJvdXRlQ29uZmlnLnBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChmb3VuZFBhdGggPT09IHVuZGVmaW5lZCB8fCBmb3VuZFBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmRQYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhbXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyXG4gICAgICAuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpXG4gICAgICAuZmlsdGVyKGlzUGFyYW0pXG4gICAgICAubWFwKGdldFBhcmFtTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcHBlZFBhcmFtTmFtZShwYXJhbU5hbWU6IHN0cmluZywgcGFyYW1zTWFwcGluZzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAocGFyYW1zTWFwcGluZykge1xuICAgICAgcmV0dXJuIHBhcmFtc01hcHBpbmdbcGFyYW1OYW1lXSB8fCBwYXJhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbU5hbWU7XG4gIH1cbn1cbiJdfQ==