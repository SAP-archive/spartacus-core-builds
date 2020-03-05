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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgY29uc3RydWN0b3Iod2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIC8qKlxuICAgICAqIEhlbHBlciB0byBzeW5jaHJvbml6ZSBzdGF0ZSB0byBtb3JlIHBlcnNpc3RlbnQgc3RvcmFnZSAobG9jYWxTdG9yYWdlLCBzZXNzaW9uU3RvcmFnZSkuXG4gICAgICogSXQgaXMgY29udGV4dCBhd2FyZSwgc28geW91IGNhbiBrZWVwIGRpZmZlcmVudCBzdGF0ZSBmb3IgdGUgc2FtZSBmZWF0dXJlIGJhc2VkIG9uIHNwZWNpZmllZCBjb250ZXh0LlxuICAgICAqXG4gICAgICogRWcuIGNhcnQgaXMgdmFsaWQgb25seSB1bmRlciB0aGUgc2FtZSBiYXNlIHNpdGUuIFNvIHlvdSB3YW50IHRvIHN5bmNocm9uaXplIGNhcnQgb25seSB3aXRoIHRoZSBzYW1lIGJhc2Ugc2l0ZS5cbiAgICAgKiBVc2FnZSBmb3IgdGhhdCBjYXNlOiBgc3luY1dpdGhTdG9yYWdlKHsga2V5OiAnY2FydCcsIHN0YXRlJDogYWN0aXZlQ2FydFNlbGVjdG9yJCwgY29udGV4dCQ6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLmdldFZhbHVlcyhbQkFTRV9TSVRFX0NPTlRFWFRfSURdKSwgb25SZWFkOiAoc3RhdGUpID0+IHNldENvcnJlY3RTdGF0ZUluU3RvcmUoc3RhdGUpIH0pYC5cbiAgICAgKiBBY3RpdmUgY2FydCBmb3IgdGhlIGBlbGVjdHJvbmljc2AgYmFzZSBzaXRlIHdpbGwgYmUgc3RvcmVkIHVuZGVyIGBzcGFydGFjdXPimr9lbGVjdHJvbmljc+Kav2NhcnRgIGFuZCBmb3IgYXBwYXJlbCB1bmRlciBgc3BhcnRhY3Vz4pq/YXBwYXJlbOKav2NhcnRgLlxuICAgICAqXG4gICAgICogT24gZWFjaCBjb250ZXh0IGNoYW5nZSBvblJlYWQgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aXRoIHN0YXRlIGZyb20gc3RvcmFnZSBwcm92aWRlZCBhcyBhIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIE9taXR0aW5nIGNvbnRleHQkIHdpbGwgdHJpZ2dlciBvblJlYWQgb25seSBvbmNlIGF0IGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBLZXkgdG8gdXNlIGluIHN0b3JhZ2UgZm9yIHRoZSBzeW5jaHJvbml6ZWQgc3RhdGUuIFNob3VsZCBiZSB1bmlxdWUgZm9yIGVhY2ggZmVhdHVyZS5cbiAgICAgKiBAcGFyYW0gc3RhdGUkIFN0YXRlIHRvIGJlIHNhdmVkIGFuZCBsYXRlciByZXN0b3JlZC5cbiAgICAgKiBAcGFyYW0gY29udGV4dCQgQ29udGV4dCBmb3Igc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZVR5cGUgU3RvcmFnZSB0eXBlIHRvIGJlIHVzZWQgdG8gcGVyc2lzdCBzdGF0ZVxuICAgICAqIEBwYXJhbSBvblJlYWQgRnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgb24gZWFjaCBzdG9yYWdlIHJlYWQgYWZ0ZXIgY29udGV4dCBjaGFuZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFN1YnNjcmlwdGlvbnMgZm9yIHJlYWRpbmcvd3JpdGluZyBpbiBzdG9yYWdlIG9uIGNvbnRleHQvc3RhdGUgY2hhbmdlXG4gICAgICovXG4gICAgc3luY1dpdGhTdG9yYWdlPFQ+KHsga2V5LCBzdGF0ZSQsIGNvbnRleHQkLCBzdG9yYWdlVHlwZSwgb25SZWFkLCB9OiB7XG4gICAgICAgIGtleTogc3RyaW5nO1xuICAgICAgICBzdGF0ZSQ6IE9ic2VydmFibGU8VD47XG4gICAgICAgIGNvbnRleHQkPzogT2JzZXJ2YWJsZTxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcbiAgICAgICAgc3RvcmFnZVR5cGU/OiBTdG9yYWdlU3luY1R5cGU7XG4gICAgICAgIG9uUmVhZD86IChzdGF0ZUZyb21TdG9yYWdlOiBUKSA9PiB2b2lkO1xuICAgIH0pOiBTdWJzY3JpcHRpb247XG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlS2V5V2l0aENvbnRleHQoY29udGV4dDogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwga2V5OiBzdHJpbmcpOiBzdHJpbmc7XG59XG4iXX0=