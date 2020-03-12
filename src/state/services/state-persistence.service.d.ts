import { Observable, Subscription } from 'rxjs';
import { StorageSyncType } from '../../state/config/state-config';
import { WindowRef } from '../../window/window-ref';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StatePersistenceService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBjb25zdHJ1Y3Rvcih3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgLyoqXG4gICAgICogSGVscGVyIHRvIHN5bmNocm9uaXplIHN0YXRlIHRvIG1vcmUgcGVyc2lzdGVudCBzdG9yYWdlIChsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKS5cbiAgICAgKiBJdCBpcyBjb250ZXh0IGF3YXJlLCBzbyB5b3UgY2FuIGtlZXAgZGlmZmVyZW50IHN0YXRlIGZvciB0ZSBzYW1lIGZlYXR1cmUgYmFzZWQgb24gc3BlY2lmaWVkIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBFZy4gY2FydCBpcyB2YWxpZCBvbmx5IHVuZGVyIHRoZSBzYW1lIGJhc2Ugc2l0ZS4gU28geW91IHdhbnQgdG8gc3luY2hyb25pemUgY2FydCBvbmx5IHdpdGggdGhlIHNhbWUgYmFzZSBzaXRlLlxuICAgICAqIFVzYWdlIGZvciB0aGF0IGNhc2U6IGBzeW5jV2l0aFN0b3JhZ2UoeyBrZXk6ICdjYXJ0Jywgc3RhdGUkOiBhY3RpdmVDYXJ0U2VsZWN0b3IkLCBjb250ZXh0JDogdGhpcy5zaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UuZ2V0VmFsdWVzKFtCQVNFX1NJVEVfQ09OVEVYVF9JRF0pLCBvblJlYWQ6IChzdGF0ZSkgPT4gc2V0Q29ycmVjdFN0YXRlSW5TdG9yZShzdGF0ZSkgfSlgLlxuICAgICAqIEFjdGl2ZSBjYXJ0IGZvciB0aGUgYGVsZWN0cm9uaWNzYCBiYXNlIHNpdGUgd2lsbCBiZSBzdG9yZWQgdW5kZXIgYHNwYXJ0YWN1c+Kav2VsZWN0cm9uaWNz4pq/Y2FydGAgYW5kIGZvciBhcHBhcmVsIHVuZGVyIGBzcGFydGFjdXPimr9hcHBhcmVs4pq/Y2FydGAuXG4gICAgICpcbiAgICAgKiBPbiBlYWNoIGNvbnRleHQgY2hhbmdlIG9uUmVhZCBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdpdGggc3RhdGUgZnJvbSBzdG9yYWdlIHByb3ZpZGVkIGFzIGEgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogT21pdHRpbmcgY29udGV4dCQgd2lsbCB0cmlnZ2VyIG9uUmVhZCBvbmx5IG9uY2UgYXQgaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IEtleSB0byB1c2UgaW4gc3RvcmFnZSBmb3IgdGhlIHN5bmNocm9uaXplZCBzdGF0ZS4gU2hvdWxkIGJlIHVuaXF1ZSBmb3IgZWFjaCBmZWF0dXJlLlxuICAgICAqIEBwYXJhbSBzdGF0ZSQgU3RhdGUgdG8gYmUgc2F2ZWQgYW5kIGxhdGVyIHJlc3RvcmVkLlxuICAgICAqIEBwYXJhbSBjb250ZXh0JCBDb250ZXh0IGZvciBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlVHlwZSBTdG9yYWdlIHR5cGUgdG8gYmUgdXNlZCB0byBwZXJzaXN0IHN0YXRlXG4gICAgICogQHBhcmFtIG9uUmVhZCBGdW5jdGlvbiB0byBiZSBleGVjdXRlZCBvbiBlYWNoIHN0b3JhZ2UgcmVhZCBhZnRlciBjb250ZXh0IGNoYW5nZVxuICAgICAqXG4gICAgICogQHJldHVybnMgU3Vic2NyaXB0aW9ucyBmb3IgcmVhZGluZy93cml0aW5nIGluIHN0b3JhZ2Ugb24gY29udGV4dC9zdGF0ZSBjaGFuZ2VcbiAgICAgKi9cbiAgICBzeW5jV2l0aFN0b3JhZ2U8VD4oeyBrZXksIHN0YXRlJCwgY29udGV4dCQsIHN0b3JhZ2VUeXBlLCBvblJlYWQsIH06IHtcbiAgICAgICAga2V5OiBzdHJpbmc7XG4gICAgICAgIHN0YXRlJDogT2JzZXJ2YWJsZTxUPjtcbiAgICAgICAgY29udGV4dCQ/OiBPYnNlcnZhYmxlPHN0cmluZyB8IEFycmF5PHN0cmluZz4+O1xuICAgICAgICBzdG9yYWdlVHlwZT86IFN0b3JhZ2VTeW5jVHlwZTtcbiAgICAgICAgb25SZWFkPzogKHN0YXRlRnJvbVN0b3JhZ2U6IFQpID0+IHZvaWQ7XG4gICAgfSk6IFN1YnNjcmlwdGlvbjtcbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChjb250ZXh0OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBrZXk6IHN0cmluZyk6IHN0cmluZztcbn1cbiJdfQ==