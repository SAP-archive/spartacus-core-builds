import { Injector } from '@angular/core';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { RoutingConfigService } from './routing-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class ConfigurableRoutesService {
    private injector;
    private routingConfigService;
    private urlMatcherFactory;
    constructor(injector: Injector, routingConfigService: RoutingConfigService, urlMatcherFactory: UrlMatcherFactoryService);
    private initCalled;
    /**
     * Configures all existing Routes in the Router
     */
    init(): void;
    private configureRouter;
    private configureRoutes;
    private configureRoute;
    private getRouteName;
    private getConfiguredPaths;
    private warn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigurableRoutesService>;
}

//# sourceMappingURL=configurable-routes.service.d.ts.map