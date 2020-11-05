import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializer } from '../../config/config-initializer/config-initializer';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { OccConfigLoaderService } from './occ-config-loader.service';
/**
 * Initializes the Spartacus config asynchronously basing on the external config
 */
export declare function initConfig(configLoader: OccConfigLoaderService, config: SiteContextConfig): ConfigInitializer;
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
export declare class OccConfigLoaderModule {
    static forRoot(): ModuleWithProviders<OccConfigLoaderModule>;
}
