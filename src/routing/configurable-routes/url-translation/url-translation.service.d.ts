import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { TranslateUrlCommands, TranslateUrlOptions } from './translate-url-commands';
import { RoutingConfigService } from '../routing-config.service';
export declare class UrlTranslationService {
    private routingConfigService;
    private urlParser;
    private config;
    readonly ROOT_URL: string[];
    constructor(routingConfigService: RoutingConfigService, urlParser: UrlParsingService, config: ServerConfig);
    translate(commands: TranslateUrlCommands, options?: TranslateUrlOptions): any[];
    private generateUrl;
    private standarizeRouteCommand;
    private provideParamsValues;
    private findPathWithFillableParams;
    private getParams;
    private getMappedParamName;
    private warn;
}
