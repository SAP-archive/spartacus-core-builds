import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SiteContextParamsService } from '../../site-context/services/site-context-params.service';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { StateWithMultiCart } from '../store/multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartStatePersistenceService {
    protected statePersistenceService: StatePersistenceService;
    protected store: Store<StateWithMultiCart>;
    protected siteContextParamsService: SiteContextParamsService;
    constructor(statePersistenceService: StatePersistenceService, store: Store<StateWithMultiCart>, siteContextParamsService: SiteContextParamsService);
    sync(): void;
    protected getCartState(): Observable<{
        active: string;
    }>;
    protected onRead(state: {
        active: string;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartStatePersistenceService, never>;
}

//# sourceMappingURL=multi-cart-state-persistence.service.d.ts.map