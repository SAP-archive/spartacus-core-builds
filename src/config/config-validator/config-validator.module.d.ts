import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../config-initializer/config-initializer.service';
import { ConfigValidator } from './config-validator';
import * as ɵngcc0 from '@angular/core';
export declare function configValidatorFactory(configInitializer: ConfigInitializerService, validators: ConfigValidator[]): () => void;
/**
 * Should stay private in 1.x
 * as forRoot() is used internally by ConfigInitializerModule
 *
 * issue: #5279
 */
export declare class ConfigValidatorModule {
    static forRoot(): ModuleWithProviders<ConfigValidatorModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfigValidatorModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfigValidatorModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7OztBQVNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy12YWxpZGF0b3InO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gY29uZmlnVmFsaWRhdG9yRmFjdG9yeShjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLCB2YWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXSk6ICgpID0+IHZvaWQ7XG4vKipcbiAqIFNob3VsZCBzdGF5IHByaXZhdGUgaW4gMS54XG4gKiBhcyBmb3JSb290KCkgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IENvbmZpZ0luaXRpYWxpemVyTW9kdWxlXG4gKlxuICogaXNzdWU6ICM1Mjc5XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbmZpZ1ZhbGlkYXRvck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdWYWxpZGF0b3JNb2R1bGU+O1xufVxuIl19