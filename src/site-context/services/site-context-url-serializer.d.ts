import { DefaultUrlSerializer, UrlTree } from '@angular/router';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextConfig } from '../config/site-context-config';
export interface ParamValuesMap {
    [name: string]: string;
}
export interface UrlTreeWithSiteContext extends UrlTree {
    siteContext?: ParamValuesMap;
}
export declare class SiteContextUrlSerializer extends DefaultUrlSerializer {
    private siteContextParams;
    private config;
    private readonly urlEncodingParameters;
    readonly hasContextInRoutes: boolean;
    constructor(siteContextParams: SiteContextParamsService, config: SiteContextConfig);
    parse(url: string): UrlTreeWithSiteContext;
    urlExtractContextParameters(url: string): {
        url: string;
        params: ParamValuesMap;
    };
    private urlTreeIncludeContextParameters;
    serialize(tree: UrlTreeWithSiteContext): string;
    urlTreeExtractContextParameters(urlTree: UrlTreeWithSiteContext): ParamValuesMap;
    private urlIncludeContextParameters;
}
