import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StorageSyncType } from '../../state/index';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_STORE_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
import { provideDefaultConfigFactory } from '../../config/config-providers';
export function anonymousConsentsStoreConfigFactory() {
    const config = {
        state: {
            storageSync: {
                keys: {
                    [ANONYMOUS_CONSENTS_STORE_FEATURE]: StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
export class AnonymousConsentsStoreModule {
}
AnonymousConsentsStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    StateModule,
                    StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken, {
                        metaReducers,
                    }),
                    EffectsModule.forFeature(effects),
                ],
                providers: [
                    provideDefaultConfigFactory(anonymousConsentsStoreConfigFactory),
                    reducerProvider,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Fub255bW91cy1jb25zZW50cy9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxNQUFNLFVBQVUsbUNBQW1DO0lBQ2pELE1BQU0sTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFO29CQUNKLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDbEU7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFnQkQsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBZHhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFO3dCQUNyRSxZQUFZO3FCQUNiLENBQUM7b0JBQ0YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ2xDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCwyQkFBMkIsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDaEUsZUFBZTtpQkFDaEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IG1ldGFSZWR1Y2VycywgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c0NvbnNlbnRzU3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBTdGF0ZUNvbmZpZyA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgc3RvcmFnZVN5bmM6IHtcbiAgICAgICAga2V5czoge1xuICAgICAgICAgIFtBTk9OWU1PVVNfQ09OU0VOVFNfU1RPUkVfRkVBVFVSRV06IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiwge1xuICAgICAgbWV0YVJlZHVjZXJzLFxuICAgIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGFub255bW91c0NvbnNlbnRzU3RvcmVDb25maWdGYWN0b3J5KSxcbiAgICByZWR1Y2VyUHJvdmlkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU3RvcmVNb2R1bGUge31cbiJdfQ==