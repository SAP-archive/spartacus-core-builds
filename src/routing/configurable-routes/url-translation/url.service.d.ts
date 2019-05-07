import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { UrlCommands, UrlGenerationOptions } from './url-command';
import { RoutingConfigService } from '../routing-config.service';
export declare class UrlService {
    private routingConfigService;
    private urlParser;
    private config;
    readonly ROOT_URL: string[];
    constructor(routingConfigService: RoutingConfigService, urlParser: UrlParsingService, config: ServerConfig);
    generateUrl(commands: UrlCommands, options?: UrlGenerationOptions): any[];
    private generateUrlPart;
    private standarizeRouteCommand;
    private provideParamsValues;
    private findPathWithFillableParams;
    private getParams;
    private getMappedParamName;
    private warn;
}
