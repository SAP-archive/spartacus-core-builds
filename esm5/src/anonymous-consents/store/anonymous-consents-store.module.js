/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/index';
import { StorageSyncType } from '../../state/index';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_STORE_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function anonymousConsentsStoreConfigFactory() {
    var _a;
    /** @type {?} */
    var config = {
        state: {
            storageSync: {
                keys: (_a = {},
                    _a[ANONYMOUS_CONSENTS_STORE_FEATURE] = StorageSyncType.LOCAL_STORAGE,
                    _a),
            },
        },
    };
    return config;
}
var AnonymousConsentsStoreModule = /** @class */ (function () {
    function AnonymousConsentsStoreModule() {
    }
    AnonymousConsentsStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        StateModule,
                        StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken, {
                            metaReducers: metaReducers,
                        }),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(anonymousConsentsStoreConfigFactory),
                    ],
                    providers: [reducerProvider],
                },] }
    ];
    return AnonymousConsentsStoreModule;
}());
export { AnonymousConsentsStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUUvRSxNQUFNLFVBQVUsbUNBQW1DOzs7UUFDM0MsTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSTtvQkFDRixHQUFDLGdDQUFnQyxJQUFHLGVBQWUsQ0FBQyxhQUFhO3VCQUNsRTthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDtJQUFBO0lBYTJDLENBQUM7O2dCQWIzQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFOzRCQUNyRSxZQUFZLGNBQUE7eUJBQ2IsQ0FBQzt3QkFDRixhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzt3QkFDakMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLG1DQUFtQyxDQUFDO3FCQUNwRTtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzdCOztJQUMwQyxtQ0FBQztDQUFBLEFBYjVDLElBYTRDO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBBTk9OWU1PVVNfQ09OU0VOVFNfU1RPUkVfRkVBVFVSRSB9IGZyb20gJy4vYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgbWV0YVJlZHVjZXJzLCByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzQ29uc2VudHNTdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICBjb25zdCBjb25maWc6IFN0YXRlQ29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzdG9yYWdlU3luYzoge1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgW0FOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFXTogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHtcbiAgICAgIG1ldGFSZWR1Y2VycyxcbiAgICB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGFub255bW91c0NvbnNlbnRzU3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNTdG9yZU1vZHVsZSB7fVxuIl19