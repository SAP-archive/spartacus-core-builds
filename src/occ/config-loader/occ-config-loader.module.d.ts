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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1jb25maWctbG9hZGVyLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgT2NjQ29uZmlnTG9hZGVyU2VydmljZSB9IGZyb20gJy4vb2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZSc7XG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBTcGFydGFjdXMgY29uZmlnIGFzeW5jaHJvbm91c2x5IGJhc2luZyBvbiB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGluaXRDb25maWcoY29uZmlnTG9hZGVyOiBPY2NDb25maWdMb2FkZXJTZXJ2aWNlLCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnKTogQ29uZmlnSW5pdGlhbGl6ZXI7XG4vKipcbiAqIFJlLXByb3ZpZGVzIHRoZSBleHRlcm5hbCBjb25maWcgY2h1bmsgZ2l2ZW4gYmVmb3JlIEFuZ3VsYXIgYm9vdHN0cmFwXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0NvbmZpZ0xvYWRlck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPY2NDb25maWdMb2FkZXJNb2R1bGU+O1xufVxuIl19