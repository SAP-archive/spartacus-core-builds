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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SemanticPathService, never>;
}

//# sourceMappingURL=semantic-path.service.d.ts.map