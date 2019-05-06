import { Injector } from '@angular/core';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutingConfigService } from './routing-config.service';
import { UrlMatcherFactoryService } from './url-matcher-factory.service';
export declare class ConfigurableRoutesService {
    private config;
    private injector;
    private routingConfigService;
    private urlMatcherFactory;
    constructor(config: ServerConfig, injector: Injector, routingConfigService: RoutingConfigService, urlMatcherFactory: UrlMatcherFactoryService);
    private initCalled;
    /**
     * Configures all existing Routes in the Router
     */
    init(): void;
    private configureRouter;
    private configureRoutes;
    private configureRoute;
    private isConfigurable;
    private getConfigurable;
    private configureRoutePath;
    private configureRouteRedirectTo;
    private getConfiguredPaths;
    private warn;
}
