import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SiteContextParamsService } from '../../site-context/services/site-context-params.service';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { StateWithMultiCart } from '../store/multi-cart-state';
export declare class MultiCartStatePersistenceService implements OnDestroy {
    protected statePersistenceService: StatePersistenceService;
    protected store: Store<StateWithMultiCart>;
    protected siteContextParamsService: SiteContextParamsService;
    protected subscription: Subscription;
    constructor(statePersistenceService: StatePersistenceService, store: Store<StateWithMultiCart>, siteContextParamsService: SiteContextParamsService);
    initSync(): void;
    protected getCartState(): Observable<{
        active: string;
    }>;
    protected onRead(state: {
        active: string;
    }): void;
    ngOnDestroy(): void;
}
