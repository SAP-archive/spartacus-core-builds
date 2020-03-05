import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { StorageSyncType } from '../../state/config/state-config';
import { getStorage, persistToStorage, readFromStorage, } from '../../state/reducers/storage-sync.reducer';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
var StatePersistenceService = /** @class */ (function () {
    function StatePersistenceService(winRef) {
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
    StatePersistenceService.prototype.syncWithStorage = function (_a) {
        var _this = this;
        var key = _a.key, state$ = _a.state$, _b = _a.context$, context$ = _b === void 0 ? of('') : _b, _c = _a.storageType, storageType = _c === void 0 ? StorageSyncType.LOCAL_STORAGE : _c, _d = _a.onRead, onRead = _d === void 0 ? function () { } : _d;
        var storage = getStorage(storageType, this.winRef);
        var subscriptions = new Subscription();
        // Do not change order of subscription! Read should happen before write on context change.
        subscriptions.add(context$
            .pipe(map(function (context) {
            return readFromStorage(storage, _this.generateKeyWithContext(context, key));
        }), tap(function (state) { return onRead(state); }))
            .subscribe());
        subscriptions.add(state$.pipe(withLatestFrom(context$)).subscribe(function (_a) {
            var _b = __read(_a, 2), state = _b[0], context = _b[1];
            persistToStorage(_this.generateKeyWithContext(context, key), state, storage);
        }));
        return subscriptions;
    };
    StatePersistenceService.prototype.generateKeyWithContext = function (context, key) {
        return "spartacus\u26BF" + [].concat(context).join('⚿') + "\u26BF" + key;
    };
    StatePersistenceService.ctorParameters = function () { return [
        { type: WindowRef }
    ]; };
    StatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StatePersistenceService_Factory() { return new StatePersistenceService(i0.ɵɵinject(i1.WindowRef)); }, token: StatePersistenceService, providedIn: "root" });
    StatePersistenceService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], StatePersistenceService);
    return StatePersistenceService;
}());
export { StatePersistenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9zZXJ2aWNlcy9zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLcEQ7SUFDRSxpQ0FBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDSCxpREFBZSxHQUFmLFVBQW1CLEVBWWxCO1FBWkQsaUJBMkNDO1lBMUNDLFlBQUcsRUFDSCxrQkFBTSxFQUNOLGdCQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsbUJBQTJDLEVBQTNDLGdFQUEyQyxFQUMzQyxjQUFpQixFQUFqQiw2Q0FBaUI7UUFRakIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBTSxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6QywwRkFBMEY7UUFDMUYsYUFBYSxDQUFDLEdBQUcsQ0FDZixRQUFRO2FBQ0wsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDVCxPQUFPLGVBQWUsQ0FDcEIsT0FBTyxFQUNQLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQ3JDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQzVCO2FBQ0EsU0FBUyxFQUFFLENBQ2YsQ0FBQztRQUVGLGFBQWEsQ0FBQyxHQUFHLENBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFnQjtnQkFBaEIsa0JBQWdCLEVBQWYsYUFBSyxFQUFFLGVBQU87WUFDOUQsZ0JBQWdCLENBQ2QsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFDekMsS0FBSyxFQUNMLE9BQU8sQ0FDUixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyx3REFBc0IsR0FBaEMsVUFDRSxPQUErQixFQUMvQixHQUFXO1FBRVgsT0FBTyxvQkFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBSSxHQUFLLENBQUM7SUFDNUQsQ0FBQzs7Z0JBeEU2QixTQUFTOzs7SUFENUIsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx1QkFBdUIsQ0EwRW5DO2tDQXhGRDtDQXdGQyxBQTFFRCxJQTBFQztTQTFFWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7XG4gIGdldFN0b3JhZ2UsXG4gIHBlcnNpc3RUb1N0b3JhZ2UsXG4gIHJlYWRGcm9tU3RvcmFnZSxcbn0gZnJvbSAnLi4vLi4vc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYpIHt9XG5cbiAgLyoqXG4gICAqIEhlbHBlciB0byBzeW5jaHJvbml6ZSBzdGF0ZSB0byBtb3JlIHBlcnNpc3RlbnQgc3RvcmFnZSAobG9jYWxTdG9yYWdlLCBzZXNzaW9uU3RvcmFnZSkuXG4gICAqIEl0IGlzIGNvbnRleHQgYXdhcmUsIHNvIHlvdSBjYW4ga2VlcCBkaWZmZXJlbnQgc3RhdGUgZm9yIHRlIHNhbWUgZmVhdHVyZSBiYXNlZCBvbiBzcGVjaWZpZWQgY29udGV4dC5cbiAgICpcbiAgICogRWcuIGNhcnQgaXMgdmFsaWQgb25seSB1bmRlciB0aGUgc2FtZSBiYXNlIHNpdGUuIFNvIHlvdSB3YW50IHRvIHN5bmNocm9uaXplIGNhcnQgb25seSB3aXRoIHRoZSBzYW1lIGJhc2Ugc2l0ZS5cbiAgICogVXNhZ2UgZm9yIHRoYXQgY2FzZTogYHN5bmNXaXRoU3RvcmFnZSh7IGtleTogJ2NhcnQnLCBzdGF0ZSQ6IGFjdGl2ZUNhcnRTZWxlY3RvciQsIGNvbnRleHQkOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zU2VydmljZS5nZXRWYWx1ZXMoW0JBU0VfU0lURV9DT05URVhUX0lEXSksIG9uUmVhZDogKHN0YXRlKSA9PiBzZXRDb3JyZWN0U3RhdGVJblN0b3JlKHN0YXRlKSB9KWAuXG4gICAqIEFjdGl2ZSBjYXJ0IGZvciB0aGUgYGVsZWN0cm9uaWNzYCBiYXNlIHNpdGUgd2lsbCBiZSBzdG9yZWQgdW5kZXIgYHNwYXJ0YWN1c+Kav2VsZWN0cm9uaWNz4pq/Y2FydGAgYW5kIGZvciBhcHBhcmVsIHVuZGVyIGBzcGFydGFjdXPimr9hcHBhcmVs4pq/Y2FydGAuXG4gICAqXG4gICAqIE9uIGVhY2ggY29udGV4dCBjaGFuZ2Ugb25SZWFkIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2l0aCBzdGF0ZSBmcm9tIHN0b3JhZ2UgcHJvdmlkZWQgYXMgYSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIE9taXR0aW5nIGNvbnRleHQkIHdpbGwgdHJpZ2dlciBvblJlYWQgb25seSBvbmNlIGF0IGluaXRpYWxpemF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byB1c2UgaW4gc3RvcmFnZSBmb3IgdGhlIHN5bmNocm9uaXplZCBzdGF0ZS4gU2hvdWxkIGJlIHVuaXF1ZSBmb3IgZWFjaCBmZWF0dXJlLlxuICAgKiBAcGFyYW0gc3RhdGUkIFN0YXRlIHRvIGJlIHNhdmVkIGFuZCBsYXRlciByZXN0b3JlZC5cbiAgICogQHBhcmFtIGNvbnRleHQkIENvbnRleHQgZm9yIHN0YXRlXG4gICAqIEBwYXJhbSBzdG9yYWdlVHlwZSBTdG9yYWdlIHR5cGUgdG8gYmUgdXNlZCB0byBwZXJzaXN0IHN0YXRlXG4gICAqIEBwYXJhbSBvblJlYWQgRnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgb24gZWFjaCBzdG9yYWdlIHJlYWQgYWZ0ZXIgY29udGV4dCBjaGFuZ2VcbiAgICpcbiAgICogQHJldHVybnMgU3Vic2NyaXB0aW9ucyBmb3IgcmVhZGluZy93cml0aW5nIGluIHN0b3JhZ2Ugb24gY29udGV4dC9zdGF0ZSBjaGFuZ2VcbiAgICovXG4gIHN5bmNXaXRoU3RvcmFnZTxUPih7XG4gICAga2V5LFxuICAgIHN0YXRlJCxcbiAgICBjb250ZXh0JCA9IG9mKCcnKSxcbiAgICBzdG9yYWdlVHlwZSA9IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgIG9uUmVhZCA9ICgpID0+IHt9LFxuICB9OiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGNvbnRleHQkPzogT2JzZXJ2YWJsZTxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcbiAgICBzdG9yYWdlVHlwZT86IFN0b3JhZ2VTeW5jVHlwZTtcbiAgICBvblJlYWQ/OiAoc3RhdGVGcm9tU3RvcmFnZTogVCkgPT4gdm9pZDtcbiAgfSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2Uoc3RvcmFnZVR5cGUsIHRoaXMud2luUmVmKTtcblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgICAvLyBEbyBub3QgY2hhbmdlIG9yZGVyIG9mIHN1YnNjcmlwdGlvbiEgUmVhZCBzaG91bGQgaGFwcGVuIGJlZm9yZSB3cml0ZSBvbiBjb250ZXh0IGNoYW5nZS5cbiAgICBzdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbnRleHQkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRnJvbVN0b3JhZ2UoXG4gICAgICAgICAgICAgIHN0b3JhZ2UsXG4gICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChjb250ZXh0LCBrZXkpXG4gICAgICAgICAgICApIGFzIFQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGFwKHN0YXRlID0+IG9uUmVhZChzdGF0ZSkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpXG4gICAgKTtcblxuICAgIHN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgc3RhdGUkLnBpcGUod2l0aExhdGVzdEZyb20oY29udGV4dCQpKS5zdWJzY3JpYmUoKFtzdGF0ZSwgY29udGV4dF0pID0+IHtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlS2V5V2l0aENvbnRleHQoY29udGV4dCwga2V5KSxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBzdG9yYWdlXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9ucztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUtleVdpdGhDb250ZXh0KFxuICAgIGNvbnRleHQ6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4gICAga2V5OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHNwYXJ0YWN1c+KavyR7W10uY29uY2F0KGNvbnRleHQpLmpvaW4oJ+KavycpfeKavyR7a2V5fWA7XG4gIH1cbn1cbiJdfQ==