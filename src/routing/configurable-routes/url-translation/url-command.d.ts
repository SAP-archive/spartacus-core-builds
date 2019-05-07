export interface UrlCommandRoute {
    route?: string;
    params?: {
        [param: string]: any;
    };
}
export declare type UrlCommand = UrlCommandRoute | any;
export declare type UrlCommands = UrlCommand | UrlCommand[];
export interface UrlGenerationOptions {
    relative?: boolean;
}
