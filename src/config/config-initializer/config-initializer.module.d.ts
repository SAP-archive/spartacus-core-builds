import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { ConfigInitializer } from './config-initializer';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../config-validator/config-validator.module';
export declare function configInitializerFactory(configInitializer: ConfigInitializerService, initializers: ConfigInitializer[]): () => Promise<void>;
export declare class ConfigInitializerModule {
    static forRoot(): ModuleWithProviders<ConfigInitializerModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfigInitializerModule, never, [typeof ɵngcc1.ConfigValidatorModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfigInitializerModule>;
}

//# sourceMappingURL=config-initializer.module.d.ts.map