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
import { reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function asmStoreConfigFactory() {
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: {
                    'asm.asmUi': StorageSyncType.LOCAL_STORAGE,
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
                    StoreModule.forFeature(ASM_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(asmStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vc3RvcmUvYXNtLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFakUsTUFBTSxVQUFVLHFCQUFxQjs7VUFDN0IsTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFO29CQUNKLFdBQVcsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDM0M7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBWUQsTUFBTSxPQUFPLGNBQWM7OztZQVgxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztvQkFDakQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDdEQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBBU01fRkVBVFVSRSB9IGZyb20gJy4vYXNtLXN0YXRlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGFzbVN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAnYXNtLmFzbVVpJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShBU01fRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGFzbVN0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbVN0b3JlTW9kdWxlIHt9XG4iXX0=