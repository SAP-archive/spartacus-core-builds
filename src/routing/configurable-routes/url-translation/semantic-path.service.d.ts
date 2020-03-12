import { UrlParsingService } from './url-parsing.service';
import { UrlCommands } from './url-command';
import { RoutingConfigService } from '../routing-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class SemanticPathService {
    protected routingConfigService: RoutingConfigService;
    protected urlParser: UrlParsingService;
    readonly ROOT_URL: string[];
    constructor(routingConfigService: RoutingConfigService, urlParser: UrlParsingService);
    /**
     * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
     */
    get(routeName: string): string;
    /**
     * Transforms the array of url commands. Each command can be:
     * a) string - will be left untouched
     * b) object { cxRoute: <route name> } - will be replaced with semantic path
     * c) object { cxRoute: <route name>, params: { ... } } - same as above, but with passed params
     *
     * If the first command is the object with the `cxRoute` property, returns an absolute url (with the first element of the array `'/'`)
     */
    transform(commands: UrlCommands): any[];
    private isRouteCommand;
    private shouldOutputAbsolute;
    private generateUrlPart;
    private standarizeRouteCommand;
    private provideParamsValues;
    private findPathWithFillableParams;
    private getParams;
    private getMappedParamName;
    private warn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SemanticPathService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMtcGF0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNlbWFudGljLXBhdGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNlbWFudGljUGF0aFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2U7XG4gICAgcmVhZG9ubHkgUk9PVF9VUkw6IHN0cmluZ1tdO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSwgdXJsUGFyc2VyOiBVcmxQYXJzaW5nU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgcGF0aCBhbGlhcyBjb25maWd1cmVkIGZvciBhIGdpdmVuIHJvdXRlIG5hbWUuIEl0IGFkZHMgYC9gIGF0IHRoZSBiZWdpbm5pbmcuXG4gICAgICovXG4gICAgZ2V0KHJvdXRlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgdGhlIGFycmF5IG9mIHVybCBjb21tYW5kcy4gRWFjaCBjb21tYW5kIGNhbiBiZTpcbiAgICAgKiBhKSBzdHJpbmcgLSB3aWxsIGJlIGxlZnQgdW50b3VjaGVkXG4gICAgICogYikgb2JqZWN0IHsgY3hSb3V0ZTogPHJvdXRlIG5hbWU+IH0gLSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggc2VtYW50aWMgcGF0aFxuICAgICAqIGMpIG9iamVjdCB7IGN4Um91dGU6IDxyb3V0ZSBuYW1lPiwgcGFyYW1zOiB7IC4uLiB9IH0gLSBzYW1lIGFzIGFib3ZlLCBidXQgd2l0aCBwYXNzZWQgcGFyYW1zXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZmlyc3QgY29tbWFuZCBpcyB0aGUgb2JqZWN0IHdpdGggdGhlIGBjeFJvdXRlYCBwcm9wZXJ0eSwgcmV0dXJucyBhbiBhYnNvbHV0ZSB1cmwgKHdpdGggdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGAnLydgKVxuICAgICAqL1xuICAgIHRyYW5zZm9ybShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBhbnlbXTtcbiAgICBwcml2YXRlIGlzUm91dGVDb21tYW5kO1xuICAgIHByaXZhdGUgc2hvdWxkT3V0cHV0QWJzb2x1dGU7XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVybFBhcnQ7XG4gICAgcHJpdmF0ZSBzdGFuZGFyaXplUm91dGVDb21tYW5kO1xuICAgIHByaXZhdGUgcHJvdmlkZVBhcmFtc1ZhbHVlcztcbiAgICBwcml2YXRlIGZpbmRQYXRoV2l0aEZpbGxhYmxlUGFyYW1zO1xuICAgIHByaXZhdGUgZ2V0UGFyYW1zO1xuICAgIHByaXZhdGUgZ2V0TWFwcGVkUGFyYW1OYW1lO1xuICAgIHByaXZhdGUgd2Fybjtcbn1cbiJdfQ==