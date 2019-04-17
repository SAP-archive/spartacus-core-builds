/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerToken, reducerProvider } from './reducers/index';
import { effects } from './effects/index';
import { CMS_FEATURE } from './cms-state';
import { metaReducers } from './reducers/index';
import { StateModule } from '../../state/state.module';
import { ConfigModule } from '../../config/config.module';
/**
 * @return {?}
 */
export function cmsStoreConfigFactory() {
    var _a;
    // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: { ssrTransfer: { keys: (_a = {}, _a[CMS_FEATURE] = true, _a) } },
    };
    return config;
}
var CmsStoreModule = /** @class */ (function () {
    function CmsStoreModule() {
    }
    CmsStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StateModule,
                        StoreModule.forFeature(CMS_FEATURE, reducerToken, { metaReducers: metaReducers }),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(cmsStoreConfigFactory),
                    ],
                    providers: [reducerProvider],
                },] }
    ];
    return CmsStoreModule;
}());
export { CmsStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvY21zLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFMUQsTUFBTSxVQUFVLHFCQUFxQjs7OztRQUU3QixNQUFNLEdBQUc7UUFDYixLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLFlBQUksR0FBQyxXQUFXLElBQUcsSUFBSSxLQUFFLEVBQUUsRUFBRTtLQUMxRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDtJQUFBO0lBVzZCLENBQUM7O2dCQVg3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUM7d0JBQ25FLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO3dCQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUM7cUJBQ3REO29CQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0I7O0lBQzRCLHFCQUFDO0NBQUEsQUFYOUIsSUFXOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IHJlZHVjZXJUb2tlbiwgcmVkdWNlclByb3ZpZGVyIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IENNU19GRUFUVVJFIH0gZnJvbSAnLi9jbXMtc3RhdGUnO1xuXG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbXNTdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICAvLyBpZiB3ZSB3YW50IHRvIHJldXNlIENNU19GRUFUVVJFIGNvbnN0IGluIGNvbmZpZywgd2UgaGF2ZSB0byB1c2UgZmFjdG9yeSBpbnN0ZWFkIG9mIHBsYWluIG9iamVjdFxuICBjb25zdCBjb25maWcgPSB7XG4gICAgc3RhdGU6IHsgc3NyVHJhbnNmZXI6IHsga2V5czogeyBbQ01TX0ZFQVRVUkVdOiB0cnVlIH0gfSB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShDTVNfRkVBVFVSRSwgcmVkdWNlclRva2VuLCB7IG1ldGFSZWR1Y2VycyB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGNtc1N0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIENtc1N0b3JlTW9kdWxlIHt9XG4iXX0=