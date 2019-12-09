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
import { ASM_FEATURE } from './asm-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function asmStoreConfigFactory() {
    /** @type {?} */
    var config = {
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
var AsmStoreModule = /** @class */ (function () {
    function AsmStoreModule() {
    }
    AsmStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StateModule,
                        StoreModule.forFeature(ASM_FEATURE, reducerToken, { metaReducers: metaReducers }),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(asmStoreConfigFactory),
                    ],
                    providers: [reducerProvider],
                },] }
    ];
    return AsmStoreModule;
}());
export { AsmStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vc3RvcmUvYXNtLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRS9FLE1BQU0sVUFBVSxxQkFBcUI7O1FBQzdCLE1BQU0sR0FBZ0I7UUFDMUIsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsZUFBZSxDQUFDLGFBQWE7b0JBQzFDLHFDQUFxQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUNwRSxtQ0FBbUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDbEUsbUNBQW1DLEVBQUUsZUFBZSxDQUFDLGFBQWE7b0JBQ2xFLHdDQUF3QyxFQUN0QyxlQUFlLENBQUMsYUFBYTtvQkFDL0IsOEJBQThCLEVBQUUsZUFBZSxDQUFDLGFBQWE7b0JBQzdELCtCQUErQixFQUFFLGVBQWUsQ0FBQyxhQUFhO2lCQUMvRDthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFDRDtJQUFBO0lBVzZCLENBQUM7O2dCQVg3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUM7d0JBQ25FLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO3dCQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUM7cUJBQ3REO29CQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0I7O0lBQzRCLHFCQUFDO0NBQUEsQUFYOUIsSUFXOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQVNNX0ZFQVRVUkUgfSBmcm9tICcuL2FzbS1zdGF0ZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IG1ldGFSZWR1Y2VycywgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGFzbVN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAnYXNtLmFzbVVpJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUuYWNjZXNzX3Rva2VuJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUudG9rZW5fdHlwZSc6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhc20uY3NhZ2VudFRva2VuLnZhbHVlLmV4cGlyZXNfaW4nOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXNtLmNzYWdlbnRUb2tlbi52YWx1ZS5leHBpcmF0aW9uX3RpbWUnOlxuICAgICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2FzbS5jc2FnZW50VG9rZW4udmFsdWUuc2NvcGUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXNtLmNzYWdlbnRUb2tlbi52YWx1ZS51c2VySWQnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEFTTV9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoYXNtU3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU3RvcmVNb2R1bGUge31cbiJdfQ==