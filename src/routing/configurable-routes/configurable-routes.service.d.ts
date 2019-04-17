import { Injector } from '@angular/core';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesTranslations, RouteTranslation } from './routes-config';
import { RoutesConfigLoader } from './routes-config-loader';
export declare class ConfigurableRoutesService {
    private config;
    private injector;
    private routesConfigLoader;
    constructor(config: ServerConfig, injector: Injector, routesConfigLoader: RoutesConfigLoader);
    private readonly currentLanguageCode;
    private allRoutesTranslations;
    private readonly currentRoutesTranslations;
    private initCalled;
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     */
    init(): Promise<void>;
    private translateRouterConfig;
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     */
    private moveWildcardRouteToEnd;
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     */
    getNestedRoutesTranslations(nestedRouteNames: string[], routesTranslations?: RoutesTranslations): RouteTranslation[];
    private getNestedRoutesTranslationsRecursive;
    private getChildrenRoutesTranslations;
    private translateRoutes;
    private translateChildrenRoutes;
    private translateRoute;
    private isConfigurable;
    private getConfigurable;
    private translateRoutePath;
    private translateRouteRedirectTo;
    private getRouteTranslation;
    private getTranslatedPaths;
    private warn;
}
