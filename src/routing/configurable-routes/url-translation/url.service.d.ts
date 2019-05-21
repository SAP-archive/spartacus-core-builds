import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { UrlCommands } from './url-command';
import { RoutingConfigService } from '../routing-config.service';
export declare class UrlService {
    protected routingConfigService: RoutingConfigService;
    protected urlParser: UrlParsingService;
    protected config: ServerConfig;
    readonly ROOT_URL: string[];
    constructor(routingConfigService: RoutingConfigService, urlParser: UrlParsingService, config: ServerConfig);
    generateUrl(commands: UrlCommands): any[];
    private isRouteCommand;
    private shouldOutputAbsolute;
    private generateUrlPart;
    private standarizeRouteCommand;
    private provideParamsValues;
    private findPathWithFillableParams;
    private getParams;
    private getMappedParamName;
    private warn;
}
