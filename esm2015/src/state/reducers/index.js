/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @type {?} */
export const stateMetaReducers = [
    {
        provide: META_REDUCER,
        useFactory: getTransferStateReducer,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
        multi: true,
    },
    {
        provide: META_REDUCER,
        useFactory: getStorageSyncReducer,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsK0dBQWMsMEJBQTBCLENBQUM7O0FBRXpDLE1BQU0sT0FBTyxpQkFBaUIsR0FBZTtJQUMzQztRQUNFLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsSUFBSSxFQUFFO1lBQ0osV0FBVztZQUNYLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUM7WUFDL0IsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQztTQUN6QjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgUExBVEZPUk1fSUQsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBNRVRBX1JFRFVDRVIgfSBmcm9tICcuLi9tZXRhLXJlZHVjZXInO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlciB9IGZyb20gJy4vdHJhbnNmZXItc3RhdGUucmVkdWNlcic7XG5cbmV4cG9ydCB7IGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuZXhwb3J0IHsgZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zZmVyLXN0YXRlLnJlZHVjZXInO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVNZXRhUmVkdWNlcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBNRVRBX1JFRFVDRVIsXG4gICAgdXNlRmFjdG9yeTogZ2V0VHJhbnNmZXJTdGF0ZVJlZHVjZXIsXG4gICAgZGVwczogW1xuICAgICAgUExBVEZPUk1fSUQsXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIFRyYW5zZmVyU3RhdGVdLFxuICAgICAgW25ldyBPcHRpb25hbCgpLCBDb25maWddLFxuICAgIF0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBNRVRBX1JFRFVDRVIsXG4gICAgdXNlRmFjdG9yeTogZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyLFxuICAgIGRlcHM6IFtXaW5kb3dSZWYsIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnXV0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19