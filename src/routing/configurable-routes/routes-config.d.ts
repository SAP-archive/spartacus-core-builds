export interface RoutesConfig {
    [routeName: string]: RouteConfig;
}
export interface RouteConfig {
    paths?: string[];
    paramsMapping?: ParamsMapping;
}
export interface ParamsMapping {
    [paramName: string]: string;
}
