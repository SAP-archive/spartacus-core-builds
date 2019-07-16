export interface RoutesConfig {
    [routeName: string]: RouteConfig;
}
export interface RouteConfig {
    paths?: string[];
    paramsMapping?: ParamsMapping;
    disabled?: boolean;
}
export interface ParamsMapping {
    [paramName: string]: string;
}
