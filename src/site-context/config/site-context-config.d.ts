export declare type ContextParamPersistence = 'session' | 'cookie' | 'route' | 'domain';
export interface ContextParams {
    persistence?: ContextParamPersistence;
    defaultValue?: string;
    values?: string[];
}
export declare abstract class SiteContextConfig {
    siteContext?: {
        parameters?: {
            [contextName: string]: ContextParams;
        };
        urlEncodingParameters?: string[];
    };
}
