/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { META_REDUCERS } from '@ngrx/store';
import { Config } from '../../config/config.module';
import { WindowRef } from '../../window/window-ref';
import { getStorageSyncReducer } from './storage-sync.reducer';
import { getTransferStateReducer } from './transfer-state.reducer';
export { getStateSlice } from '../utils/get-state-slice';
export { getStorageSyncReducer } from './storage-sync.reducer';
export { getTransferStateReducer, getServerTransferStateReducer, getBrowserTransferStateReducer, CX_KEY } from './transfer-state.reducer';
var ɵ0 = getTransferStateReducer, ɵ1 = getStorageSyncReducer;
/** @type {?} */
export var stateMetaReducers = [
    {
        provide: META_REDUCERS,
        useFactory: ɵ0,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
        multi: true,
    },
    {
        provide: META_REDUCERS,
        useFactory: ɵ1,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true,
    },
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELCtHQUFjLDBCQUEwQixDQUFDO1NBS3pCLHVCQUF1QixPQVV2QixxQkFBcUI7O0FBYnJDLE1BQU0sS0FBTyxpQkFBaUIsR0FBZTtJQUMzQztRQUNFLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFVBQVUsSUFBeUI7UUFDbkMsSUFBSSxFQUFFO1lBQ0osV0FBVztZQUNYLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUM7WUFDL0IsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQztTQUN6QjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFVBQVUsSUFBdUI7UUFDakMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgUExBVEZPUk1fSUQsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNRVRBX1JFRFVDRVJTIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlciB9IGZyb20gJy4vdHJhbnNmZXItc3RhdGUucmVkdWNlcic7XG5cbmV4cG9ydCB7IGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuZXhwb3J0IHsgZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zZmVyLXN0YXRlLnJlZHVjZXInO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVNZXRhUmVkdWNlcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBNRVRBX1JFRFVDRVJTLFxuICAgIHVzZUZhY3Rvcnk6IGdldFRyYW5zZmVyU3RhdGVSZWR1Y2VyLFxuICAgIGRlcHM6IFtcbiAgICAgIFBMQVRGT1JNX0lELFxuICAgICAgW25ldyBPcHRpb25hbCgpLCBUcmFuc2ZlclN0YXRlXSxcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnXSxcbiAgICBdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogTUVUQV9SRURVQ0VSUyxcbiAgICB1c2VGYWN0b3J5OiBnZXRTdG9yYWdlU3luY1JlZHVjZXIsXG4gICAgZGVwczogW1dpbmRvd1JlZiwgW25ldyBPcHRpb25hbCgpLCBDb25maWddXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=