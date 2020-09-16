import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { ASM_FEATURE } from './asm-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
import { provideDefaultConfigFactory } from '../../config/config-providers';
export function asmStoreConfigFactory() {
    const config = {
        state: {
            storageSync: {
                keys: {
                    'asm.asmUi': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.access_token': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.token_type': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.expires_in': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.expiration_time': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.scope': StorageSyncType.LOCAL_STORAGE,
                    'asm.csagentToken.value.userId': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
export class AsmStoreModule {
}
AsmStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(ASM_FEATURE, reducerToken, { metaReducers }),
                    EffectsModule.forFeature(effects),
                ],
                providers: [
                    provideDefaultConfigFactory(asmStoreConfigFactory),
                    reducerProvider,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9zdG9yZS9hc20tc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVFLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsTUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUMxQyxxQ0FBcUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDcEUsbUNBQW1DLEVBQUUsZUFBZSxDQUFDLGFBQWE7b0JBQ2xFLG1DQUFtQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUNsRSx3Q0FBd0MsRUFDdEMsZUFBZSxDQUFDLGFBQWE7b0JBQy9CLDhCQUE4QixFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUM3RCwrQkFBK0IsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDL0Q7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFjRCxNQUFNLE9BQU8sY0FBYzs7O1lBYjFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUM7b0JBQ25FLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNsQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsMkJBQTJCLENBQUMscUJBQXFCLENBQUM7b0JBQ2xELGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IEFTTV9GRUFUVVJFIH0gZnJvbSAnLi9hc20tc3RhdGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc21TdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICBjb25zdCBjb25maWc6IFN0YXRlQ29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzdG9yYWdlU3luYzoge1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgJ2FzbS5hc21VaSc6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLmFjY2Vzc190b2tlbic6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLnRva2VuX3R5cGUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXNtLmNzYWdlbnRUb2tlbi52YWx1ZS5leHBpcmVzX2luJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUuZXhwaXJhdGlvbl90aW1lJzpcbiAgICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLnNjb3BlJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUudXNlcklkJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShBU01fRkVBVFVSRSwgcmVkdWNlclRva2VuLCB7IG1ldGFSZWR1Y2VycyB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShhc21TdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICAgIHJlZHVjZXJQcm92aWRlcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU3RvcmVNb2R1bGUge31cbiJdfQ==