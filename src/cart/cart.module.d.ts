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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiY2FydC5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBR0E7Ozs7O0FBR0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGNhcnRTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeShjYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLCBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UpOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPjtcbn1cbiJdfQ==