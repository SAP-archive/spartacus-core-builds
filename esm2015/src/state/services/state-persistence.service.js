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
    /**
     * Helper to read state from persistent storage (localStorage, sessionStorage).
     * It is useful if you need synchronously access state saved with `syncWithStorage`.
     *
     * @param key Key to use in storage for state. Should be unique for each feature.
     * @param context Context value for state
     * @param storageType Storage type from to read state
     *
     * @returns State from the storage
     */
    readStateFromStorage({ key, context = '', storageType = StorageSyncType.LOCAL_STORAGE, }) {
        const storage = getStorage(storageType, this.winRef);
        return readFromStorage(storage, this.generateKeyWithContext(context, key));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3N0YXRlL3NlcnZpY2VzL3N0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBS3BELE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDSCxlQUFlLENBQUksRUFDakIsR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNqQixXQUFXLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFDM0MsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FPbEI7UUFDQyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLDBGQUEwRjtRQUMxRixhQUFhLENBQUMsR0FBRyxDQUNmLFFBQVE7YUFDTCxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDZCxPQUFPLGVBQWUsQ0FDcEIsT0FBTyxFQUNQLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQ3JDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM5QjthQUNBLFNBQVMsRUFBRSxDQUNmLENBQUM7UUFFRixhQUFhLENBQUMsR0FBRyxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNuRSxnQkFBZ0IsQ0FDZCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUN6QyxLQUFLLEVBQ0wsT0FBTyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILG9CQUFvQixDQUFJLEVBQ3RCLEdBQUcsRUFDSCxPQUFPLEdBQUcsRUFBRSxFQUNaLFdBQVcsR0FBRyxlQUFlLENBQUMsYUFBYSxHQUs1QztRQUNDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJELE9BQU8sZUFBZSxDQUNwQixPQUFPLEVBQ1AsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FDckMsQ0FBQztJQUNULENBQUM7SUFFUyxzQkFBc0IsQ0FDOUIsT0FBK0IsRUFDL0IsR0FBVztRQUVYLE9BQU8sYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs7O1lBdkdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHtcbiAgZ2V0U3RvcmFnZSxcbiAgcGVyc2lzdFRvU3RvcmFnZSxcbiAgcmVhZEZyb21TdG9yYWdlLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9yZWR1Y2Vycy9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZikge31cblxuICAvKipcbiAgICogSGVscGVyIHRvIHN5bmNocm9uaXplIHN0YXRlIHRvIG1vcmUgcGVyc2lzdGVudCBzdG9yYWdlIChsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKS5cbiAgICogSXQgaXMgY29udGV4dCBhd2FyZSwgc28geW91IGNhbiBrZWVwIGRpZmZlcmVudCBzdGF0ZSBmb3IgdGUgc2FtZSBmZWF0dXJlIGJhc2VkIG9uIHNwZWNpZmllZCBjb250ZXh0LlxuICAgKlxuICAgKiBFZy4gY2FydCBpcyB2YWxpZCBvbmx5IHVuZGVyIHRoZSBzYW1lIGJhc2Ugc2l0ZS4gU28geW91IHdhbnQgdG8gc3luY2hyb25pemUgY2FydCBvbmx5IHdpdGggdGhlIHNhbWUgYmFzZSBzaXRlLlxuICAgKiBVc2FnZSBmb3IgdGhhdCBjYXNlOiBgc3luY1dpdGhTdG9yYWdlKHsga2V5OiAnY2FydCcsIHN0YXRlJDogYWN0aXZlQ2FydFNlbGVjdG9yJCwgY29udGV4dCQ6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLmdldFZhbHVlcyhbQkFTRV9TSVRFX0NPTlRFWFRfSURdKSwgb25SZWFkOiAoc3RhdGUpID0+IHNldENvcnJlY3RTdGF0ZUluU3RvcmUoc3RhdGUpIH0pYC5cbiAgICogQWN0aXZlIGNhcnQgZm9yIHRoZSBgZWxlY3Ryb25pY3NgIGJhc2Ugc2l0ZSB3aWxsIGJlIHN0b3JlZCB1bmRlciBgc3BhcnRhY3Vz4pq/ZWxlY3Ryb25pY3Pimr9jYXJ0YCBhbmQgZm9yIGFwcGFyZWwgdW5kZXIgYHNwYXJ0YWN1c+Kav2FwcGFyZWzimr9jYXJ0YC5cbiAgICpcbiAgICogT24gZWFjaCBjb250ZXh0IGNoYW5nZSBvblJlYWQgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aXRoIHN0YXRlIGZyb20gc3RvcmFnZSBwcm92aWRlZCBhcyBhIHBhcmFtZXRlci5cbiAgICpcbiAgICogT21pdHRpbmcgY29udGV4dCQgd2lsbCB0cmlnZ2VyIG9uUmVhZCBvbmx5IG9uY2UgYXQgaW5pdGlhbGl6YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgS2V5IHRvIHVzZSBpbiBzdG9yYWdlIGZvciB0aGUgc3luY2hyb25pemVkIHN0YXRlLiBTaG91bGQgYmUgdW5pcXVlIGZvciBlYWNoIGZlYXR1cmUuXG4gICAqIEBwYXJhbSBzdGF0ZSQgU3RhdGUgdG8gYmUgc2F2ZWQgYW5kIGxhdGVyIHJlc3RvcmVkLlxuICAgKiBAcGFyYW0gY29udGV4dCQgQ29udGV4dCBmb3Igc3RhdGVcbiAgICogQHBhcmFtIHN0b3JhZ2VUeXBlIFN0b3JhZ2UgdHlwZSB0byBiZSB1c2VkIHRvIHBlcnNpc3Qgc3RhdGVcbiAgICogQHBhcmFtIG9uUmVhZCBGdW5jdGlvbiB0byBiZSBleGVjdXRlZCBvbiBlYWNoIHN0b3JhZ2UgcmVhZCBhZnRlciBjb250ZXh0IGNoYW5nZVxuICAgKlxuICAgKiBAcmV0dXJucyBTdWJzY3JpcHRpb25zIGZvciByZWFkaW5nL3dyaXRpbmcgaW4gc3RvcmFnZSBvbiBjb250ZXh0L3N0YXRlIGNoYW5nZVxuICAgKi9cbiAgc3luY1dpdGhTdG9yYWdlPFQ+KHtcbiAgICBrZXksXG4gICAgc3RhdGUkLFxuICAgIGNvbnRleHQkID0gb2YoJycpLFxuICAgIHN0b3JhZ2VUeXBlID0gU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgb25SZWFkID0gKCkgPT4ge30sXG4gIH06IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8VD47XG4gICAgY29udGV4dCQ/OiBPYnNlcnZhYmxlPHN0cmluZyB8IEFycmF5PHN0cmluZz4+O1xuICAgIHN0b3JhZ2VUeXBlPzogU3RvcmFnZVN5bmNUeXBlO1xuICAgIG9uUmVhZD86IChzdGF0ZUZyb21TdG9yYWdlOiBUKSA9PiB2b2lkO1xuICB9KTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShzdG9yYWdlVHlwZSwgdGhpcy53aW5SZWYpO1xuXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIC8vIERvIG5vdCBjaGFuZ2Ugb3JkZXIgb2Ygc3Vic2NyaXB0aW9uISBSZWFkIHNob3VsZCBoYXBwZW4gYmVmb3JlIHdyaXRlIG9uIGNvbnRleHQgY2hhbmdlLlxuICAgIHN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgY29udGV4dCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEZyb21TdG9yYWdlKFxuICAgICAgICAgICAgICBzdG9yYWdlLFxuICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlS2V5V2l0aENvbnRleHQoY29udGV4dCwga2V5KVxuICAgICAgICAgICAgKSBhcyBUO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRhcCgoc3RhdGUpID0+IG9uUmVhZChzdGF0ZSkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcblxuICAgIHN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgc3RhdGUkLnBpcGUod2l0aExhdGVzdEZyb20oY29udGV4dCQpKS5zdWJzY3JpYmUoKFtzdGF0ZSwgY29udGV4dF0pID0+IHtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlS2V5V2l0aENvbnRleHQoY29udGV4dCwga2V5KSxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBzdG9yYWdlXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gcmVhZCBzdGF0ZSBmcm9tIHBlcnNpc3RlbnQgc3RvcmFnZSAobG9jYWxTdG9yYWdlLCBzZXNzaW9uU3RvcmFnZSkuXG4gICAqIEl0IGlzIHVzZWZ1bCBpZiB5b3UgbmVlZCBzeW5jaHJvbm91c2x5IGFjY2VzcyBzdGF0ZSBzYXZlZCB3aXRoIGBzeW5jV2l0aFN0b3JhZ2VgLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byB1c2UgaW4gc3RvcmFnZSBmb3Igc3RhdGUuIFNob3VsZCBiZSB1bmlxdWUgZm9yIGVhY2ggZmVhdHVyZS5cbiAgICogQHBhcmFtIGNvbnRleHQgQ29udGV4dCB2YWx1ZSBmb3Igc3RhdGVcbiAgICogQHBhcmFtIHN0b3JhZ2VUeXBlIFN0b3JhZ2UgdHlwZSBmcm9tIHRvIHJlYWQgc3RhdGVcbiAgICpcbiAgICogQHJldHVybnMgU3RhdGUgZnJvbSB0aGUgc3RvcmFnZVxuICAgKi9cbiAgcmVhZFN0YXRlRnJvbVN0b3JhZ2U8VD4oe1xuICAgIGtleSxcbiAgICBjb250ZXh0ID0gJycsXG4gICAgc3RvcmFnZVR5cGUgPSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgfToge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGNvbnRleHQ/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xuICAgIHN0b3JhZ2VUeXBlPzogU3RvcmFnZVN5bmNUeXBlO1xuICB9KTogVCB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2Uoc3RvcmFnZVR5cGUsIHRoaXMud2luUmVmKTtcblxuICAgIHJldHVybiByZWFkRnJvbVN0b3JhZ2UoXG4gICAgICBzdG9yYWdlLFxuICAgICAgdGhpcy5nZW5lcmF0ZUtleVdpdGhDb250ZXh0KGNvbnRleHQsIGtleSlcbiAgICApIGFzIFQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChcbiAgICBjb250ZXh0OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICAgIGtleTogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBzcGFydGFjdXPimr8ke1tdLmNvbmNhdChjb250ZXh0KS5qb2luKCfimr8nKX3imr8ke2tleX1gO1xuICB9XG59XG4iXX0=