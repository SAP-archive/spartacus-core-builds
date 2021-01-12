import { ModuleWithProviders } from '@angular/core';
import { ConfigurableRoutesService } from './configurable-routes/configurable-routes.service';
export declare function initConfigurableRoutes(service: ConfigurableRoutesService): () => void;
export declare class RoutingModule {
    static forRoot(): ModuleWithProviders<RoutingModule>;
}
