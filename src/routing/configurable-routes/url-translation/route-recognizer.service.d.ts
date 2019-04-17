import { RoutesConfigLoader } from '../routes-config-loader';
import { UrlParsingService } from './url-parsing.service';
export declare class RouteRecognizerService {
    private routesConfigLoader;
    private urlParser;
    constructor(routesConfigLoader: RoutesConfigLoader, urlParser: UrlParsingService);
    recognizeByDefaultUrl(url: string): {
        name: string;
        params: object;
    }[];
    private getNestedRoutesRecursive;
    private extractParamsIfPathMatchesUrlPrefix;
    private readonly defaultRoutesTranslations;
}
