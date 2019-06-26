/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { CART_FEATURE } from './cart-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function cartStoreConfigFactory() {
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: {
                    [`${CART_FEATURE}.active.value.content.guid`]: StorageSyncType.LOCAL_STORAGE,
                    [`${CART_FEATURE}.active.value.content.code`]: StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
export class CartStoreModule {
}
CartStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(CART_FEATURE, reducerToken, { metaReducers }),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(cartStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRS9FLE1BQU0sVUFBVSxzQkFBc0I7O1VBQzlCLE1BQU0sR0FBZ0I7UUFDMUIsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRTtvQkFDSixDQUFDLEdBQUcsWUFBWSw0QkFBNEIsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUM1RSxDQUFDLEdBQUcsWUFBWSw0QkFBNEIsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO2lCQUM3RTthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFhRCxNQUFNLE9BQU8sZUFBZTs7O1lBWDNCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUM7b0JBQ3BFLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUM7aUJBQ3ZEO2dCQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgbWV0YVJlZHVjZXJzLCByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydFN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICBbYCR7Q0FSVF9GRUFUVVJFfS5hY3RpdmUudmFsdWUuY29udGVudC5ndWlkYF06IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgIFtgJHtDQVJUX0ZFQVRVUkV9LmFjdGl2ZS52YWx1ZS5jb250ZW50LmNvZGVgXTogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKENBUlRfRkVBVFVSRSwgcmVkdWNlclRva2VuLCB7IG1ldGFSZWR1Y2VycyB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGNhcnRTdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICBdLFxuICBwcm92aWRlcnM6IFtyZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0U3RvcmVNb2R1bGUge31cbiJdfQ==