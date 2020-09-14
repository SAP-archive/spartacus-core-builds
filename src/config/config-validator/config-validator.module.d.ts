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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnLXZhbGlkYXRvcic7XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBjb25maWdWYWxpZGF0b3JGYWN0b3J5KGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsIHZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdKTogKCkgPT4gdm9pZDtcbi8qKlxuICogU2hvdWxkIHN0YXkgcHJpdmF0ZSBpbiAxLnhcbiAqIGFzIGZvclJvb3QoKSBpcyB1c2VkIGludGVybmFsbHkgYnkgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGVcbiAqXG4gKiBpc3N1ZTogIzUyNzlcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlnVmFsaWRhdG9yTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ1ZhbGlkYXRvck1vZHVsZT47XG59XG4iXX0=