import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StatePersistenceService } from '../../../state/services/state-persistence.service';
import { UserIdService } from '../facade/user-id.service';
import { AuthToken } from '../models/auth-token.model';
import { AuthRedirectStorageService } from './auth-redirect-storage.service';
import { AuthStorageService } from './auth-storage.service';
/**
 * Auth state synced to browser storage.
 */
import * as ɵngcc0 from '@angular/core';
export interface SyncedAuthState {
    userId?: string;
    token?: AuthToken;
    redirectUrl?: string;
}
/**
 * Responsible for saving the authorization data (userId, token, redirectUrl) in browser storage.
 */
export declare class AuthStatePersistenceService implements OnDestroy {
    protected statePersistenceService: StatePersistenceService;
    protected userIdService: UserIdService;
    protected authStorageService: AuthStorageService;
    protected authRedirectStorageService: AuthRedirectStorageService;
    protected subscription: Subscription;
    constructor(statePersistenceService: StatePersistenceService, userIdService: UserIdService, authStorageService: AuthStorageService, authRedirectStorageService: AuthRedirectStorageService);
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
    protected getAuthState(): Observable<SyncedAuthState>;
    /**
     * Function called on each browser storage read.
     * Used to update state from browser -> state.
     */
    protected onRead(state: SyncedAuthState): void;
    /**
     * Reads synchronously state from storage and returns it.
     */
    protected readStateFromStorage(): SyncedAuthState;
    /**
     * Check synchronously in browser storage if user is logged in (required by transfer state reducer).
     * For most cases `isUserLoggedIn` from the `AuthService` should be used instead of this.
     */
    isUserLoggedIn(): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthStatePersistenceService, never>;
}

//# sourceMappingURL=auth-state-persistence.service.d.ts.map