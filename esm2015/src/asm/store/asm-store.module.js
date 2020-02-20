import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { ASM_FEATURE } from './asm-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
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
let AsmStoreModule = class AsmStoreModule {
};
AsmStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(ASM_FEATURE, reducerToken, { metaReducers }),
            EffectsModule.forFeature(effects),
            ConfigModule.withConfigFactory(asmStoreConfigFactory),
        ],
        providers: [reducerProvider],
    })
], AsmStoreModule);
export { AsmStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vc3RvcmUvYXNtLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9FLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsTUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUMxQyxxQ0FBcUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDcEUsbUNBQW1DLEVBQUUsZUFBZSxDQUFDLGFBQWE7b0JBQ2xFLG1DQUFtQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUNsRSx3Q0FBd0MsRUFDdEMsZUFBZSxDQUFDLGFBQWE7b0JBQy9CLDhCQUE4QixFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUM3RCwrQkFBK0IsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDL0Q7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFZRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUcsQ0FBQTtBQUFqQixjQUFjO0lBWDFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDO1lBQ25FLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztTQUN0RDtRQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUM3QixDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IEFTTV9GRUFUVVJFIH0gZnJvbSAnLi9hc20tc3RhdGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc21TdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICBjb25zdCBjb25maWc6IFN0YXRlQ29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzdG9yYWdlU3luYzoge1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgJ2FzbS5hc21VaSc6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLmFjY2Vzc190b2tlbic6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLnRva2VuX3R5cGUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXNtLmNzYWdlbnRUb2tlbi52YWx1ZS5leHBpcmVzX2luJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUuZXhwaXJhdGlvbl90aW1lJzpcbiAgICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLnNjb3BlJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUudXNlcklkJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShBU01fRkVBVFVSRSwgcmVkdWNlclRva2VuLCB7IG1ldGFSZWR1Y2VycyB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGFzbVN0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbVN0b3JlTW9kdWxlIHt9XG4iXX0=