import { ConfigurableRoutesService } from '../configurable-routes.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { TranslateUrlCommands, TranslateUrlOptions } from './translate-url-commands';
export declare class UrlTranslationService {
    private configurableRoutesService;
    private urlParser;
    private config;
    readonly ROOT_URL: string[];
    constructor(configurableRoutesService: ConfigurableRoutesService, urlParser: UrlParsingService, config: ServerConfig);
    translate(commands: TranslateUrlCommands, options?: TranslateUrlOptions): any[];
    private generateUrl;
    private standarizeRouteCommand;
    private provideParamsValues;
    private findPathWithFillableParams;
    private getParams;
    private getMappedParamName;
    private warn;
}
