import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { StorageSyncType } from '../../state/config/state-config';
import { getStorage, persistToStorage, readFromStorage, } from '../../state/reducers/storage-sync.reducer';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
export class StatePersistenceService {
    constructor(winRef) {
        this.winRef = winRef;
    }
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
    syncWithStorage({ key, state$, context$ = of(''), storageType = StorageSyncType.LOCAL_STORAGE, onRead = () => { }, }) {
        const storage = getStorage(storageType, this.winRef);
        const subscriptions = new Subscription();
        // Do not change order of subscription! Read should happen before write on context change.
        subscriptions.add(context$
            .pipe(map((context) => {
            return readFromStorage(storage, this.generateKeyWithContext(context, key));
        }), tap((state) => onRead(state)))
            .subscribe());
        subscriptions.add(state$.pipe(withLatestFrom(context$)).subscribe(([state, context]) => {
            persistToStorage(this.generateKeyWithContext(context, key), state, storage);
        }));
        return subscriptions;
    }
    generateKeyWithContext(context, key) {
        return `spartacus⚿${[].concat(context).join('⚿')}⚿${key}`;
    }
}
StatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StatePersistenceService_Factory() { return new StatePersistenceService(i0.ɵɵinject(i1.WindowRef)); }, token: StatePersistenceService, providedIn: "root" });
StatePersistenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
StatePersistenceService.ctorParameters = () => [
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3N0YXRlL3NlcnZpY2VzL3N0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBS3BELE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDSCxlQUFlLENBQUksRUFDakIsR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNqQixXQUFXLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFDM0MsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FPbEI7UUFDQyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLDBGQUEwRjtRQUMxRixhQUFhLENBQUMsR0FBRyxDQUNmLFFBQVE7YUFDTCxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDZCxPQUFPLGVBQWUsQ0FDcEIsT0FBTyxFQUNQLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQ3JDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM5QjthQUNBLFNBQVMsRUFBRSxDQUNmLENBQUM7UUFFRixhQUFhLENBQUMsR0FBRyxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNuRSxnQkFBZ0IsQ0FDZCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUN6QyxLQUFLLEVBQ0wsT0FBTyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVTLHNCQUFzQixDQUM5QixPQUErQixFQUMvQixHQUFXO1FBRVgsT0FBTyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQge1xuICBnZXRTdG9yYWdlLFxuICBwZXJzaXN0VG9TdG9yYWdlLFxuICByZWFkRnJvbVN0b3JhZ2UsXG59IGZyb20gJy4uLy4uL3N0YXRlL3JlZHVjZXJzL3N0b3JhZ2Utc3luYy5yZWR1Y2VyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gc3luY2hyb25pemUgc3RhdGUgdG8gbW9yZSBwZXJzaXN0ZW50IHN0b3JhZ2UgKGxvY2FsU3RvcmFnZSwgc2Vzc2lvblN0b3JhZ2UpLlxuICAgKiBJdCBpcyBjb250ZXh0IGF3YXJlLCBzbyB5b3UgY2FuIGtlZXAgZGlmZmVyZW50IHN0YXRlIGZvciB0ZSBzYW1lIGZlYXR1cmUgYmFzZWQgb24gc3BlY2lmaWVkIGNvbnRleHQuXG4gICAqXG4gICAqIEVnLiBjYXJ0IGlzIHZhbGlkIG9ubHkgdW5kZXIgdGhlIHNhbWUgYmFzZSBzaXRlLiBTbyB5b3Ugd2FudCB0byBzeW5jaHJvbml6ZSBjYXJ0IG9ubHkgd2l0aCB0aGUgc2FtZSBiYXNlIHNpdGUuXG4gICAqIFVzYWdlIGZvciB0aGF0IGNhc2U6IGBzeW5jV2l0aFN0b3JhZ2UoeyBrZXk6ICdjYXJ0Jywgc3RhdGUkOiBhY3RpdmVDYXJ0U2VsZWN0b3IkLCBjb250ZXh0JDogdGhpcy5zaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UuZ2V0VmFsdWVzKFtCQVNFX1NJVEVfQ09OVEVYVF9JRF0pLCBvblJlYWQ6IChzdGF0ZSkgPT4gc2V0Q29ycmVjdFN0YXRlSW5TdG9yZShzdGF0ZSkgfSlgLlxuICAgKiBBY3RpdmUgY2FydCBmb3IgdGhlIGBlbGVjdHJvbmljc2AgYmFzZSBzaXRlIHdpbGwgYmUgc3RvcmVkIHVuZGVyIGBzcGFydGFjdXPimr9lbGVjdHJvbmljc+Kav2NhcnRgIGFuZCBmb3IgYXBwYXJlbCB1bmRlciBgc3BhcnRhY3Vz4pq/YXBwYXJlbOKav2NhcnRgLlxuICAgKlxuICAgKiBPbiBlYWNoIGNvbnRleHQgY2hhbmdlIG9uUmVhZCBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdpdGggc3RhdGUgZnJvbSBzdG9yYWdlIHByb3ZpZGVkIGFzIGEgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBPbWl0dGluZyBjb250ZXh0JCB3aWxsIHRyaWdnZXIgb25SZWFkIG9ubHkgb25jZSBhdCBpbml0aWFsaXphdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGtleSBLZXkgdG8gdXNlIGluIHN0b3JhZ2UgZm9yIHRoZSBzeW5jaHJvbml6ZWQgc3RhdGUuIFNob3VsZCBiZSB1bmlxdWUgZm9yIGVhY2ggZmVhdHVyZS5cbiAgICogQHBhcmFtIHN0YXRlJCBTdGF0ZSB0byBiZSBzYXZlZCBhbmQgbGF0ZXIgcmVzdG9yZWQuXG4gICAqIEBwYXJhbSBjb250ZXh0JCBDb250ZXh0IGZvciBzdGF0ZVxuICAgKiBAcGFyYW0gc3RvcmFnZVR5cGUgU3RvcmFnZSB0eXBlIHRvIGJlIHVzZWQgdG8gcGVyc2lzdCBzdGF0ZVxuICAgKiBAcGFyYW0gb25SZWFkIEZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uIGVhY2ggc3RvcmFnZSByZWFkIGFmdGVyIGNvbnRleHQgY2hhbmdlXG4gICAqXG4gICAqIEByZXR1cm5zIFN1YnNjcmlwdGlvbnMgZm9yIHJlYWRpbmcvd3JpdGluZyBpbiBzdG9yYWdlIG9uIGNvbnRleHQvc3RhdGUgY2hhbmdlXG4gICAqL1xuICBzeW5jV2l0aFN0b3JhZ2U8VD4oe1xuICAgIGtleSxcbiAgICBzdGF0ZSQsXG4gICAgY29udGV4dCQgPSBvZignJyksXG4gICAgc3RvcmFnZVR5cGUgPSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICBvblJlYWQgPSAoKSA9PiB7fSxcbiAgfToge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHN0YXRlJDogT2JzZXJ2YWJsZTxUPjtcbiAgICBjb250ZXh0JD86IE9ic2VydmFibGU8c3RyaW5nIHwgQXJyYXk8c3RyaW5nPj47XG4gICAgc3RvcmFnZVR5cGU/OiBTdG9yYWdlU3luY1R5cGU7XG4gICAgb25SZWFkPzogKHN0YXRlRnJvbVN0b3JhZ2U6IFQpID0+IHZvaWQ7XG4gIH0pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKHN0b3JhZ2VUeXBlLCB0aGlzLndpblJlZik7XG5cbiAgICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gICAgLy8gRG8gbm90IGNoYW5nZSBvcmRlciBvZiBzdWJzY3JpcHRpb24hIFJlYWQgc2hvdWxkIGhhcHBlbiBiZWZvcmUgd3JpdGUgb24gY29udGV4dCBjaGFuZ2UuXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBjb250ZXh0JFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRnJvbVN0b3JhZ2UoXG4gICAgICAgICAgICAgIHN0b3JhZ2UsXG4gICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChjb250ZXh0LCBrZXkpXG4gICAgICAgICAgICApIGFzIFQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGFwKChzdGF0ZSkgPT4gb25SZWFkKHN0YXRlKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBzdGF0ZSQucGlwZSh3aXRoTGF0ZXN0RnJvbShjb250ZXh0JCkpLnN1YnNjcmliZSgoW3N0YXRlLCBjb250ZXh0XSkgPT4ge1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChjb250ZXh0LCBrZXkpLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHN0b3JhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBzdWJzY3JpcHRpb25zO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdlbmVyYXRlS2V5V2l0aENvbnRleHQoXG4gICAgY29udGV4dDogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPixcbiAgICBrZXk6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBgc3BhcnRhY3Vz4pq/JHtbXS5jb25jYXQoY29udGV4dCkuam9pbign4pq/Jyl94pq/JHtrZXl9YDtcbiAgfVxufVxuIl19