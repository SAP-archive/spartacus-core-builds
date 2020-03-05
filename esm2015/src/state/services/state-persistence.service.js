import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { StorageSyncType } from '../../state/config/state-config';
import { getStorage, persistToStorage, readFromStorage, } from '../../state/reducers/storage-sync.reducer';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
let StatePersistenceService = class StatePersistenceService {
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
            .pipe(map(context => {
            return readFromStorage(storage, this.generateKeyWithContext(context, key));
        }), tap(state => onRead(state)))
            .subscribe());
        subscriptions.add(state$.pipe(withLatestFrom(context$)).subscribe(([state, context]) => {
            persistToStorage(this.generateKeyWithContext(context, key), state, storage);
        }));
        return subscriptions;
    }
    generateKeyWithContext(context, key) {
        return `spartacus⚿${[].concat(context).join('⚿')}⚿${key}`;
    }
};
StatePersistenceService.ctorParameters = () => [
    { type: WindowRef }
];
StatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StatePersistenceService_Factory() { return new StatePersistenceService(i0.ɵɵinject(i1.WindowRef)); }, token: StatePersistenceService, providedIn: "root" });
StatePersistenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], StatePersistenceService);
export { StatePersistenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9zZXJ2aWNlcy9zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLcEQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDSCxlQUFlLENBQUksRUFDakIsR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNqQixXQUFXLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFDM0MsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FPbEI7UUFDQyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLDBGQUEwRjtRQUMxRixhQUFhLENBQUMsR0FBRyxDQUNmLFFBQVE7YUFDTCxJQUFJLENBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osT0FBTyxlQUFlLENBQ3BCLE9BQU8sRUFDUCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUNyQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzVCO2FBQ0EsU0FBUyxFQUFFLENBQ2YsQ0FBQztRQUVGLGFBQWEsQ0FBQyxHQUFHLENBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ25FLGdCQUFnQixDQUNkLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQ3pDLEtBQUssRUFDTCxPQUFPLENBQ1IsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRVMsc0JBQXNCLENBQzlCLE9BQStCLEVBQy9CLEdBQVc7UUFFWCxPQUFPLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDNUQsQ0FBQztDQUNGLENBQUE7O1lBekUrQixTQUFTOzs7QUFENUIsdUJBQXVCO0lBSG5DLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx1QkFBdUIsQ0EwRW5DO1NBMUVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHtcbiAgZ2V0U3RvcmFnZSxcbiAgcGVyc2lzdFRvU3RvcmFnZSxcbiAgcmVhZEZyb21TdG9yYWdlLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9yZWR1Y2Vycy9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZikge31cblxuICAvKipcbiAgICogSGVscGVyIHRvIHN5bmNocm9uaXplIHN0YXRlIHRvIG1vcmUgcGVyc2lzdGVudCBzdG9yYWdlIChsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKS5cbiAgICogSXQgaXMgY29udGV4dCBhd2FyZSwgc28geW91IGNhbiBrZWVwIGRpZmZlcmVudCBzdGF0ZSBmb3IgdGUgc2FtZSBmZWF0dXJlIGJhc2VkIG9uIHNwZWNpZmllZCBjb250ZXh0LlxuICAgKlxuICAgKiBFZy4gY2FydCBpcyB2YWxpZCBvbmx5IHVuZGVyIHRoZSBzYW1lIGJhc2Ugc2l0ZS4gU28geW91IHdhbnQgdG8gc3luY2hyb25pemUgY2FydCBvbmx5IHdpdGggdGhlIHNhbWUgYmFzZSBzaXRlLlxuICAgKiBVc2FnZSBmb3IgdGhhdCBjYXNlOiBgc3luY1dpdGhTdG9yYWdlKHsga2V5OiAnY2FydCcsIHN0YXRlJDogYWN0aXZlQ2FydFNlbGVjdG9yJCwgY29udGV4dCQ6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLmdldFZhbHVlcyhbQkFTRV9TSVRFX0NPTlRFWFRfSURdKSwgb25SZWFkOiAoc3RhdGUpID0+IHNldENvcnJlY3RTdGF0ZUluU3RvcmUoc3RhdGUpIH0pYC5cbiAgICogQWN0aXZlIGNhcnQgZm9yIHRoZSBgZWxlY3Ryb25pY3NgIGJhc2Ugc2l0ZSB3aWxsIGJlIHN0b3JlZCB1bmRlciBgc3BhcnRhY3Vz4pq/ZWxlY3Ryb25pY3Pimr9jYXJ0YCBhbmQgZm9yIGFwcGFyZWwgdW5kZXIgYHNwYXJ0YWN1c+Kav2FwcGFyZWzimr9jYXJ0YC5cbiAgICpcbiAgICogT24gZWFjaCBjb250ZXh0IGNoYW5nZSBvblJlYWQgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aXRoIHN0YXRlIGZyb20gc3RvcmFnZSBwcm92aWRlZCBhcyBhIHBhcmFtZXRlci5cbiAgICpcbiAgICogT21pdHRpbmcgY29udGV4dCQgd2lsbCB0cmlnZ2VyIG9uUmVhZCBvbmx5IG9uY2UgYXQgaW5pdGlhbGl6YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgS2V5IHRvIHVzZSBpbiBzdG9yYWdlIGZvciB0aGUgc3luY2hyb25pemVkIHN0YXRlLiBTaG91bGQgYmUgdW5pcXVlIGZvciBlYWNoIGZlYXR1cmUuXG4gICAqIEBwYXJhbSBzdGF0ZSQgU3RhdGUgdG8gYmUgc2F2ZWQgYW5kIGxhdGVyIHJlc3RvcmVkLlxuICAgKiBAcGFyYW0gY29udGV4dCQgQ29udGV4dCBmb3Igc3RhdGVcbiAgICogQHBhcmFtIHN0b3JhZ2VUeXBlIFN0b3JhZ2UgdHlwZSB0byBiZSB1c2VkIHRvIHBlcnNpc3Qgc3RhdGVcbiAgICogQHBhcmFtIG9uUmVhZCBGdW5jdGlvbiB0byBiZSBleGVjdXRlZCBvbiBlYWNoIHN0b3JhZ2UgcmVhZCBhZnRlciBjb250ZXh0IGNoYW5nZVxuICAgKlxuICAgKiBAcmV0dXJucyBTdWJzY3JpcHRpb25zIGZvciByZWFkaW5nL3dyaXRpbmcgaW4gc3RvcmFnZSBvbiBjb250ZXh0L3N0YXRlIGNoYW5nZVxuICAgKi9cbiAgc3luY1dpdGhTdG9yYWdlPFQ+KHtcbiAgICBrZXksXG4gICAgc3RhdGUkLFxuICAgIGNvbnRleHQkID0gb2YoJycpLFxuICAgIHN0b3JhZ2VUeXBlID0gU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgb25SZWFkID0gKCkgPT4ge30sXG4gIH06IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8VD47XG4gICAgY29udGV4dCQ/OiBPYnNlcnZhYmxlPHN0cmluZyB8IEFycmF5PHN0cmluZz4+O1xuICAgIHN0b3JhZ2VUeXBlPzogU3RvcmFnZVN5bmNUeXBlO1xuICAgIG9uUmVhZD86IChzdGF0ZUZyb21TdG9yYWdlOiBUKSA9PiB2b2lkO1xuICB9KTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShzdG9yYWdlVHlwZSwgdGhpcy53aW5SZWYpO1xuXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIC8vIERvIG5vdCBjaGFuZ2Ugb3JkZXIgb2Ygc3Vic2NyaXB0aW9uISBSZWFkIHNob3VsZCBoYXBwZW4gYmVmb3JlIHdyaXRlIG9uIGNvbnRleHQgY2hhbmdlLlxuICAgIHN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgY29udGV4dCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRGcm9tU3RvcmFnZShcbiAgICAgICAgICAgICAgc3RvcmFnZSxcbiAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUtleVdpdGhDb250ZXh0KGNvbnRleHQsIGtleSlcbiAgICAgICAgICAgICkgYXMgVDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0YXAoc3RhdGUgPT4gb25SZWFkKHN0YXRlKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBzdGF0ZSQucGlwZSh3aXRoTGF0ZXN0RnJvbShjb250ZXh0JCkpLnN1YnNjcmliZSgoW3N0YXRlLCBjb250ZXh0XSkgPT4ge1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChjb250ZXh0LCBrZXkpLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHN0b3JhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBzdWJzY3JpcHRpb25zO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdlbmVyYXRlS2V5V2l0aENvbnRleHQoXG4gICAgY29udGV4dDogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPixcbiAgICBrZXk6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBgc3BhcnRhY3Vz4pq/JHtbXS5jb25jYXQoY29udGV4dCkuam9pbign4pq/Jyl94pq/JHtrZXl9YDtcbiAgfVxufVxuIl19