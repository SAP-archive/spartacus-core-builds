import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideDefaultConfigFactory } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { effects } from './effects/index';
import { KYMA_FEATURE } from './kyma-state';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
export function kymaStoreConfigFactory() {
    // if we want to reuse KYMA_FEATURE const in config, we have to use factory instead of plain object
    var config = {
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
var KymaStoreModule = /** @class */ (function () {
    function KymaStoreModule() {
    }
    KymaStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                StateModule,
                StoreModule.forFeature(KYMA_FEATURE, reducerToken, { metaReducers: metaReducers }),
                EffectsModule.forFeature(effects),
            ],
            providers: [
                provideDefaultConfigFactory(kymaStoreConfigFactory),
                reducerProvider,
            ],
        })
    ], KymaStoreModule);
    return KymaStoreModule;
}());
export { KymaStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9reW1hLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0UsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQyxtR0FBbUc7SUFDbkcsSUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsZUFBZSxDQUFDLGFBQWE7aUJBQ3hEO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBZUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUFiM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUM7Z0JBQ3BFLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ2xDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJCQUEyQixDQUFDLHNCQUFzQixDQUFDO2dCQUNuRCxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBLWU1BX0ZFQVRVUkUgfSBmcm9tICcuL2t5bWEtc3RhdGUnO1xuaW1wb3J0IHsgbWV0YVJlZHVjZXJzLCByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24ga3ltYVN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIC8vIGlmIHdlIHdhbnQgdG8gcmV1c2UgS1lNQV9GRUFUVVJFIGNvbnN0IGluIGNvbmZpZywgd2UgaGF2ZSB0byB1c2UgZmFjdG9yeSBpbnN0ZWFkIG9mIHBsYWluIG9iamVjdFxuICBjb25zdCBjb25maWc6IFN0YXRlQ29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzdG9yYWdlU3luYzoge1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgJ2t5bWEub3BlbklkVG9rZW4udmFsdWUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoS1lNQV9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGt5bWFTdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICAgIHJlZHVjZXJQcm92aWRlcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgS3ltYVN0b3JlTW9kdWxlIHt9XG4iXX0=