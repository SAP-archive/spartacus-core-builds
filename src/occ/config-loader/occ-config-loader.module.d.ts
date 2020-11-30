import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializer } from '../../config/config-initializer/config-initializer';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { OccConfigLoaderService } from './occ-config-loader.service';
/**
 * Initializes the Spartacus config asynchronously basing on the external config
 */
import * as ɵngcc0 from '@angular/core';
export declare function initConfig(configLoader: OccConfigLoaderService, config: SiteContextConfig): ConfigInitializer;
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
export declare class OccConfigLoaderModule {
    static forRoot(): ModuleWithProviders<OccConfigLoaderModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<OccConfigLoaderModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<OccConfigLoaderModule>;
}

//# sourceMappingURL=occ-config-loader.module.d.ts.map