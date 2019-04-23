export interface TranslateUrlOptionsRouteObject {
    name?: string;
    params?: object;
}
export declare type TranslateUrlOptionsRoute = string | TranslateUrlOptionsRouteObject;
export interface TranslateUrlOptions {
    route?: TranslateUrlOptionsRoute[];
}
