import { ModuleWithProviders } from '@angular/core';
import { MetaReducer } from '@ngrx/store';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
export declare function cartStatePersistenceFactory(cartStatePersistenceService: MultiCartStatePersistenceService, configInit: ConfigInitializerService): () => Promise<void>;
/**
 * Before `MultiCartStatePersistenceService` restores the active cart id `ActiveCartService`
 * will use `current` cart instead of the one saved in browser. This meta reducer
 * sets the value on store initialization to undefined cart which holds active cart loading
 * until the data from storage is restored.
 */
export declare function uninitializeActiveCartMetaReducerFactory(): MetaReducer<any>;
/**
 * Complimentary module for cart to store cart id in browser storage.
 * This makes it possible to work on the same anonymous cart even after page refresh.
 */
export declare class CartPersistenceModule {
    static forRoot(): ModuleWithProviders<CartPersistenceModule>;
}
