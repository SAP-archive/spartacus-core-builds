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
