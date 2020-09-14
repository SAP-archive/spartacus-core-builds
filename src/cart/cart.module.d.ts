import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
export declare function cartStatePersistenceFactory(cartStatePersistenceService: MultiCartStatePersistenceService, configInit: ConfigInitializerService): () => Promise<void>;
export declare class CartModule {
    static forRoot(): ModuleWithProviders<CartModule>;
}
