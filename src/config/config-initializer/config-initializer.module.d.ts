import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { ConfigInitializer } from './config-initializer';
import * as ɵngcc0 from '@angular/core';
export declare function configInitializerFactory(configInitializer: ConfigInitializerService, initializers: ConfigInitializer[]): () => Promise<void>;
export declare function locationInitializedFactory(configInitializer: ConfigInitializerService): Promise<any>;
export declare class ConfigInitializerModule {
    static forRoot(): ModuleWithProviders<ConfigInitializerModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfigInitializerModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfigInitializerModule>;
}

//# sourceMappingURL=config-initializer.module.d.ts.map