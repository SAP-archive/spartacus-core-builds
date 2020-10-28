import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthToken } from '../../auth/user-auth/models/auth-token.model';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { AsmUi } from '../models/asm.models';
import { StateWithAsm } from '../store';
import { AsmAuthStorageService, TokenTarget } from './asm-auth-storage.service';
/**
 * ASM state synced to browser storage.
 */
import * as ɵngcc0 from '@angular/core';
export interface SyncedAsmState {
    ui?: AsmUi;
    emulatedUserToken?: AuthToken;
    tokenTarget?: TokenTarget;
}
/**
 * Responsible for storing ASM state in the browser storage.
 * Uses `StatePersistenceService` mechanism.
 */
export declare class AsmStatePersistenceService implements OnDestroy {
    protected statePersistenceService: StatePersistenceService;
    protected store: Store<StateWithAsm>;
    protected authStorageService: AsmAuthStorageService;
    protected subscription: Subscription;
    constructor(statePersistenceService: StatePersistenceService, store: Store<StateWithAsm>, authStorageService: AsmAuthStorageService);
    /**
     * Identifier used for storage key.
     */
    protected key: string;
    /**
     * Initializes the synchronization between state and browser storage.
     */
    initSync(): void;
    /**
     * Gets and transforms state from different sources into the form that should
     * be saved in storage.
     */
    protected getAsmState(): Observable<SyncedAsmState>;
    /**
     * Function called on each browser storage read.
     * Used to update state from browser -> state.
     */
    protected onRead(state: SyncedAsmState): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmStatePersistenceService, never>;
}

//# sourceMappingURL=asm-state-persistence.service.d.ts.map