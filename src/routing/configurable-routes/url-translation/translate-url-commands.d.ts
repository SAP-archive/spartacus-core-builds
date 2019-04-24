export interface TranslateUrlCommandRoute {
    route?: string;
    params?: object;
}
export declare type TranslateUrlCommand = TranslateUrlCommandRoute | any;
export declare type TranslateUrlCommands = TranslateUrlCommand | TranslateUrlCommand[];
export interface TranslateUrlOptions {
    relative?: boolean;
}
