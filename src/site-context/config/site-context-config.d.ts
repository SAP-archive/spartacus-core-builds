export declare enum ContextPersistence {
    NONE = "none",
    ROUTE = "route"
}
export interface ContextParameter {
    persistence?: ContextPersistence | string;
    default?: string;
    values?: string[];
}
export declare abstract class SiteContextConfig {
    context?: {
        parameters?: {
            [contextName: string]: ContextParameter;
        };
        urlEncodingParameters?: string[];
    };
}
