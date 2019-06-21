export interface UrlCommandRoute {
    cxRoute?: string;
    params?: {
        [param: string]: any;
    };
}
export declare type UrlCommand = UrlCommandRoute | any;
export declare type UrlCommands = UrlCommand | UrlCommand[];
