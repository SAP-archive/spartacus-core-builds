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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMtcGF0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNlbWFudGljLXBhdGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZW1hbnRpY1BhdGhTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlO1xuICAgIHJlYWRvbmx5IFJPT1RfVVJMOiBzdHJpbmdbXTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHBhdGggYWxpYXMgY29uZmlndXJlZCBmb3IgYSBnaXZlbiByb3V0ZSBuYW1lLiBJdCBhZGRzIGAvYCBhdCB0aGUgYmVnaW5uaW5nLlxuICAgICAqL1xuICAgIGdldChyb3V0ZU5hbWU6IHN0cmluZyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIHRoZSBhcnJheSBvZiB1cmwgY29tbWFuZHMuIEVhY2ggY29tbWFuZCBjYW4gYmU6XG4gICAgICogYSkgc3RyaW5nIC0gd2lsbCBiZSBsZWZ0IHVudG91Y2hlZFxuICAgICAqIGIpIG9iamVjdCB7IGN4Um91dGU6IDxyb3V0ZSBuYW1lPiB9IC0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHNlbWFudGljIHBhdGhcbiAgICAgKiBjKSBvYmplY3QgeyBjeFJvdXRlOiA8cm91dGUgbmFtZT4sIHBhcmFtczogeyAuLi4gfSB9IC0gc2FtZSBhcyBhYm92ZSwgYnV0IHdpdGggcGFzc2VkIHBhcmFtc1xuICAgICAqXG4gICAgICogSWYgdGhlIGZpcnN0IGNvbW1hbmQgaXMgdGhlIG9iamVjdCB3aXRoIHRoZSBgY3hSb3V0ZWAgcHJvcGVydHksIHJldHVybnMgYW4gYWJzb2x1dGUgdXJsICh3aXRoIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBgJy8nYClcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm0oY29tbWFuZHM6IFVybENvbW1hbmRzKTogYW55W107XG4gICAgcHJpdmF0ZSBpc1JvdXRlQ29tbWFuZDtcbiAgICBwcml2YXRlIHNob3VsZE91dHB1dEFic29sdXRlO1xuICAgIHByaXZhdGUgZ2VuZXJhdGVVcmxQYXJ0O1xuICAgIHByaXZhdGUgc3RhbmRhcml6ZVJvdXRlQ29tbWFuZDtcbiAgICBwcml2YXRlIHByb3ZpZGVQYXJhbXNWYWx1ZXM7XG4gICAgcHJpdmF0ZSBmaW5kUGF0aFdpdGhGaWxsYWJsZVBhcmFtcztcbiAgICBwcml2YXRlIGdldFBhcmFtcztcbiAgICBwcml2YXRlIGdldE1hcHBlZFBhcmFtTmFtZTtcbiAgICBwcml2YXRlIHdhcm47XG59XG4iXX0=