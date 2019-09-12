/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { effects } from './effects/index';
import { KYMA_FEATURE } from './kyma-state';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function kymaStoreConfigFactory() {
    // if we want to reuse KYMA_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: {
                    'kyma.openIdToken.value': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
export class KymaStoreModule {
}
KymaStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(KYMA_FEATURE, reducerToken, { metaReducers }),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(kymaStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9reW1hLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRS9FLE1BQU0sVUFBVSxzQkFBc0I7OztVQUU5QixNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsZUFBZSxDQUFDLGFBQWE7aUJBQ3hEO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWFELE1BQU0sT0FBTyxlQUFlOzs7WUFYM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQztvQkFDcEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDdkQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IEtZTUFfRkVBVFVSRSB9IGZyb20gJy4va3ltYS1zdGF0ZSc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBreW1hU3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgLy8gaWYgd2Ugd2FudCB0byByZXVzZSBLWU1BX0ZFQVRVUkUgY29uc3QgaW4gY29uZmlnLCB3ZSBoYXZlIHRvIHVzZSBmYWN0b3J5IGluc3RlYWQgb2YgcGxhaW4gb2JqZWN0XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAna3ltYS5vcGVuSWRUb2tlbi52YWx1ZSc6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShLWU1BX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiwgeyBtZXRhUmVkdWNlcnMgfSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShreW1hU3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgS3ltYVN0b3JlTW9kdWxlIHt9XG4iXX0=