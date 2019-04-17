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
import { SITE_CONTEXT_FEATURE } from './state';
import { ConfigModule } from '../../config/config.module';
/**
 * @return {?}
 */
export function siteContextStoreConfigFactory() {
    var _a;
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: { ssrTransfer: { keys: (_a = {}, _a[SITE_CONTEXT_FEATURE] = true, _a) } },
    };
    return config;
}
var SiteContextStoreModule = /** @class */ (function () {
    function SiteContextStoreModule() {
    }
    SiteContextStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(siteContextStoreConfigFactory),
                    ],
                    providers: [reducerProvider],
                },] }
    ];
    return SiteContextStoreModule;
}());
export { SiteContextStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHMUQsTUFBTSxVQUFVLDZCQUE2Qjs7OztRQUVyQyxNQUFNLEdBQUc7UUFDYixLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLFlBQUksR0FBQyxvQkFBb0IsSUFBRyxJQUFJLEtBQUUsRUFBRSxFQUFFO0tBQ25FO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUFVcUMsQ0FBQzs7Z0JBVnJDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVcsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDO3dCQUMxRCxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzt3QkFDakMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDO3FCQUM5RDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzdCOztJQUNvQyw2QkFBQztDQUFBLEFBVnRDLElBVXNDO1NBQXpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IHJlZHVjZXJUb2tlbiwgcmVkdWNlclByb3ZpZGVyIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IFNJVEVfQ09OVEVYVF9GRUFUVVJFIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2l0ZUNvbnRleHRTdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICAvLyBpZiB3ZSB3YW50IHRvIHJldXNlIFNJVEVfQ09OVEVYVF9GRUFUVVJFIGNvbnN0IGluIGNvbmZpZywgd2UgaGF2ZSB0byB1c2UgZmFjdG9yeSBpbnN0ZWFkIG9mIHBsYWluIG9iamVjdFxuICBjb25zdCBjb25maWcgPSB7XG4gICAgc3RhdGU6IHsgc3NyVHJhbnNmZXI6IHsga2V5czogeyBbU0lURV9DT05URVhUX0ZFQVRVUkVdOiB0cnVlIH0gfSB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShTSVRFX0NPTlRFWFRfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KHNpdGVDb250ZXh0U3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB7fVxuIl19