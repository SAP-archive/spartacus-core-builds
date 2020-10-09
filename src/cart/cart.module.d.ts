import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './store/multi-cart-store.module';
import * as ɵngcc2 from './event/cart-event.module';
export declare function cartStatePersistenceFactory(cartStatePersistenceService: MultiCartStatePersistenceService, configInit: ConfigInitializerService): () => Promise<void>;
export declare class CartModule {
    static forRoot(): ModuleWithProviders<CartModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CartModule, never, [typeof ɵngcc1.MultiCartStoreModule, typeof ɵngcc2.CartEventModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CartModule>;
}

//# sourceMappingURL=cart.module.d.ts.map