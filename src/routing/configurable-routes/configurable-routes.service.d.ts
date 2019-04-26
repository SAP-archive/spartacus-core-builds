import { Injector } from '@angular/core';
import { ServerConfig } from '../../config/server-config/server-config';
import { RouteTranslation } from './routes-config';
import { RoutesConfigLoader } from './routes-config-loader';
import { UrlMatcherFactoryService } from './url-matcher-factory.service';
export declare class ConfigurableRoutesService {
    private config;
    private injector;
    private routesConfigLoader;
    private urlMatcherFactory;
    constructor(config: ServerConfig, injector: Injector, routesConfigLoader: RoutesConfigLoader, urlMatcherFactory: UrlMatcherFactoryService);
    private readonly currentLanguageCode;
    private allRoutesTranslations;
    private readonly currentRoutesTranslations;
    private initCalled;
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     */
    init(): Promise<void>;
    private translateRouterConfig;
    getRouteTranslation(routeName: string): RouteTranslation;
    private translateRoutes;
    private translateRoute;
    private isConfigurable;
    private getConfigurable;
    private translateRoutePath;
    private translateRouteRedirectTo;
    private getTranslatedPaths;
    private warn;
}
