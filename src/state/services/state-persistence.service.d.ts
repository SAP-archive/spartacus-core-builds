import { Observable, Subscription } from 'rxjs';
import { StorageSyncType } from '../../state/config/state-config';
import { WindowRef } from '../../window/window-ref';
export declare class StatePersistenceService {
    protected winRef: WindowRef;
    constructor(winRef: WindowRef);
    /**
     * Helper to synchronize state to more persistent storage (localStorage, sessionStorage).
     * It is context aware, so you can keep different state for te same feature based on specified context.
     *
     * Eg. cart is valid only under the same base site. So you want to synchronize cart only with the same base site.
     * Usage for that case: `syncWithStorage({ key: 'cart', state$: activeCartSelector$, context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]), onRead: (state) => setCorrectStateInStore(state) })`.
     * Active cart for the `electronics` base site will be stored under `spartacus⚿electronics⚿cart` and for apparel under `spartacus⚿apparel⚿cart`.
     *
     * On each context change onRead function will be executed with state from storage provided as a parameter.
     *
     * Omitting context$ will trigger onRead only once at initialization.
     *
     * @param key Key to use in storage for the synchronized state. Should be unique for each feature.
     * @param state$ State to be saved and later restored.
     * @param context$ Context for state
     * @param storageType Storage type to be used to persist state
     * @param onRead Function to be executed on each storage read after context change
     *
     * @returns Subscriptions for reading/writing in storage on context/state change
     */
    syncWithStorage<T>({ key, state$, context$, storageType, onRead, }: {
        key: string;
        state$: Observable<T>;
        context$?: Observable<string | Array<string>>;
        storageType?: StorageSyncType;
        onRead?: (stateFromStorage: T) => void;
    }): Subscription;
    protected generateKeyWithContext(context: string | Array<string>, key: string): string;
}
