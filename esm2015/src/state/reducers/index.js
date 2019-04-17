/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional, PLATFORM_ID } from '@angular/core';
import { getStorageSyncReducer } from './store-sync.reducer';
import { Config } from '../../config/config.module';
import { WindowRef } from '../../window/window-ref';
import { META_REDUCER } from '../meta-reducer';
import { getTransferStateReducer } from './transfer-state.reducer';
import { TransferState } from '@angular/platform-browser';
export { getStorageSyncReducer } from './store-sync.reducer';
export { getTransferStateReducer, getServerTransferStateReducer, getBrowserTransferStateReducer, INIT_ACTION, CX_KEY } from './transfer-state.reducer';
/** @type {?} */
export const stateMetaReducers = [
    {
        provide: META_REDUCER,
        useFactory: getStorageSyncReducer,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true,
    },
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
];
export { getStateSlice } from '../utils/get-state-slice';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxzQ0FBYyxzQkFBc0IsQ0FBQztBQUNyQyw0SEFBYywwQkFBMEIsQ0FBQzs7QUFFekMsTUFBTSxPQUFPLGlCQUFpQixHQUFlO0lBQzNDO1FBQ0UsT0FBTyxFQUFFLFlBQVk7UUFDckIsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsSUFBSSxFQUFFO1lBQ0osV0FBVztZQUNYLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUM7WUFDL0IsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQztTQUN6QjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRjtBQUNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBQTEFURk9STV9JRCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldFN0b3JhZ2VTeW5jUmVkdWNlciB9IGZyb20gJy4vc3RvcmUtc3luYy5yZWR1Y2VyJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUiB9IGZyb20gJy4uL21ldGEtcmVkdWNlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlciB9IGZyb20gJy4vdHJhbnNmZXItc3RhdGUucmVkdWNlcic7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3RvcmUtc3luYy5yZWR1Y2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNmZXItc3RhdGUucmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZU1ldGFSZWR1Y2VyczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IE1FVEFfUkVEVUNFUixcbiAgICB1c2VGYWN0b3J5OiBnZXRTdG9yYWdlU3luY1JlZHVjZXIsXG4gICAgZGVwczogW1dpbmRvd1JlZiwgW25ldyBPcHRpb25hbCgpLCBDb25maWddXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IE1FVEFfUkVEVUNFUixcbiAgICB1c2VGYWN0b3J5OiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcixcbiAgICBkZXBzOiBbXG4gICAgICBQTEFURk9STV9JRCxcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgVHJhbnNmZXJTdGF0ZV0sXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ10sXG4gICAgXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG5leHBvcnQgeyBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcbiJdfQ==