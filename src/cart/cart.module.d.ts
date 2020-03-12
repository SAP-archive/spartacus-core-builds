import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './store/cart-store.module';
import * as ɵngcc2 from './store/multi-cart-store.module';
export declare function cartStatePersistenceFactory(cartStatePersistenceService: MultiCartStatePersistenceService, configInit: ConfigInitializerService): () => Promise<void>;
export declare class CartModule {
    static forRoot(): ModuleWithProviders<CartModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CartModule, never, [typeof ɵngcc1.CartStoreModule, typeof ɵngcc2.MultiCartStoreModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CartModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiY2FydC5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBR0E7Ozs7O0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tdWx0aS1jYXJ0LXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gY2FydFN0YXRlUGVyc2lzdGVuY2VGYWN0b3J5KGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSk6ICgpID0+IFByb21pc2U8dm9pZD47XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhcnRNb2R1bGU+O1xufVxuIl19