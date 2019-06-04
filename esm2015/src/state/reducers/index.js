/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Config } from '../../config/config.module';
import { WindowRef } from '../../window/window-ref';
import { META_REDUCER } from '../meta-reducer';
import { getStorageSyncReducer } from './storage-sync.reducer';
import { getTransferStateReducer } from './transfer-state.reducer';
export { getStateSlice } from '../utils/get-state-slice';
export { getStorageSyncReducer } from './storage-sync.reducer';
export { getTransferStateReducer, getServerTransferStateReducer, getBrowserTransferStateReducer, CX_KEY } from './transfer-state.reducer';
const ɵ0 = getTransferStateReducer, ɵ1 = getStorageSyncReducer;
/** @type {?} */
export const stateMetaReducers = [
    {
        provide: META_REDUCER,
        useFactory: ɵ0,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
        multi: true,
    },
    {
        provide: META_REDUCER,
        useFactory: ɵ1,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true,
    },
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsK0dBQWMsMEJBQTBCLENBQUM7V0FLekIsdUJBQXVCLE9BVXZCLHFCQUFxQjs7QUFickMsTUFBTSxPQUFPLGlCQUFpQixHQUFlO0lBQzNDO1FBQ0UsT0FBTyxFQUFFLFlBQVk7UUFDckIsVUFBVSxJQUF5QjtRQUNuQyxJQUFJLEVBQUU7WUFDSixXQUFXO1lBQ1gsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQztZQUMvQixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDO1NBQ3pCO1FBQ0QsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLFlBQVk7UUFDckIsVUFBVSxJQUF1QjtRQUNqQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBQTEFURk9STV9JRCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUiB9IGZyb20gJy4uL21ldGEtcmVkdWNlcic7XG5pbXBvcnQgeyBnZXRTdG9yYWdlU3luY1JlZHVjZXIgfSBmcm9tICcuL3N0b3JhZ2Utc3luYy5yZWR1Y2VyJztcbmltcG9ydCB7IGdldFRyYW5zZmVyU3RhdGVSZWR1Y2VyIH0gZnJvbSAnLi90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyJztcblxuZXhwb3J0IHsgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5leHBvcnQgeyBnZXRTdG9yYWdlU3luY1JlZHVjZXIgfSBmcm9tICcuL3N0b3JhZ2Utc3luYy5yZWR1Y2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNmZXItc3RhdGUucmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZU1ldGFSZWR1Y2VyczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IE1FVEFfUkVEVUNFUixcbiAgICB1c2VGYWN0b3J5OiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcixcbiAgICBkZXBzOiBbXG4gICAgICBQTEFURk9STV9JRCxcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgVHJhbnNmZXJTdGF0ZV0sXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ10sXG4gICAgXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IE1FVEFfUkVEVUNFUixcbiAgICB1c2VGYWN0b3J5OiBnZXRTdG9yYWdlU3luY1JlZHVjZXIsXG4gICAgZGVwczogW1dpbmRvd1JlZiwgW25ldyBPcHRpb25hbCgpLCBDb25maWddXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=