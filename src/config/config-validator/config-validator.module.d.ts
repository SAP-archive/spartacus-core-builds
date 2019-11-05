import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../config-initializer/config-initializer.service';
import { ConfigValidator } from './config-validator';
export declare function configValidatorFactory(configInitializer: ConfigInitializerService, validators: ConfigValidator[]): () => void;
export declare class ConfigValidatorModule {
    static forRoot(): ModuleWithProviders<ConfigValidatorModule>;
}
