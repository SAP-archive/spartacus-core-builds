import { RoutingConfig } from '../configurable-routes/config/routing-config';
export declare class ProtectedRoutesService {
    protected config: RoutingConfig;
    private nonProtectedPaths;
    protected get routingConfig(): RoutingConfig['routing'];
    /**
     * Returns 'protected' property (boolean) from routing config
     *
     * @returns boolean
     */
    get shouldProtect(): boolean;
    constructor(config: RoutingConfig);
    /**
     * Tells if the url is protected
     */
    isUrlProtected(urlSegments: string[]): boolean;
    /**
     * Tells whether the url matches at least one of the paths
     */
    protected matchAnyPath(urlSegments: string[], pathsSegments: string[][]): boolean;
    /**
     * Tells whether the url matches the path
     */
    protected matchPath(urlSegments: string[], pathSegments: string[]): boolean;
    /**
     * Returns a list of paths that are not protected
     */
    protected getNonProtectedPaths(): string[];
    /**
     * Splits the url by slashes
     */
    protected getSegments(url: string): string[];
}
