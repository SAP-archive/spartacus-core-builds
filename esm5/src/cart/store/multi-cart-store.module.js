import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { MULTI_CART_FEATURE } from './multi-cart-state';
import { multiCartReducerProvider, multiCartReducerToken, multiCartMetaReducers, } from './reducers/index';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { MultiCartEffects } from './effects/multi-cart.effect';
import { EffectsModule } from '@ngrx/effects';
export function multiCartStoreConfigFactory() {
    var _a;
    var config = {
        state: {
            storageSync: {
                keys: (_a = {},
                    _a[MULTI_CART_FEATURE + ".active"] = StorageSyncType.LOCAL_STORAGE,
                    _a),
            },
        },
    };
    return config;
}
var MultiCartStoreModule = /** @class */ (function () {
    function MultiCartStoreModule() {
    }
    MultiCartStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                StateModule,
                StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
                    metaReducers: multiCartMetaReducers,
                }),
                EffectsModule.forFeature([MultiCartEffects]),
                ConfigModule.withConfigFactory(multiCartStoreConfigFactory),
            ],
            providers: [multiCartReducerProvider],
        })
    ], MultiCartStoreModule);
    return MultiCartStoreModule;
}());
export { MultiCartStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9tdWx0aS1jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDckIscUJBQXFCLEdBQ3RCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQWUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE1BQU0sVUFBVSwyQkFBMkI7O0lBQ3pDLElBQU0sTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSTtvQkFDRixHQUFJLGtCQUFrQixZQUFTLElBQUcsZUFBZSxDQUFDLGFBQWE7dUJBQ2hFO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBY0Q7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQVpoQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUU7b0JBQ2hFLFlBQVksRUFBRSxxQkFBcUI7aUJBQ3BDLENBQUM7Z0JBQ0YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzVDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQzthQUM1RDtZQUNELFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBtdWx0aUNhcnRSZWR1Y2VyUHJvdmlkZXIsXG4gIG11bHRpQ2FydFJlZHVjZXJUb2tlbixcbiAgbXVsdGlDYXJ0TWV0YVJlZHVjZXJzLFxufSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0b3JhZ2VTeW5jVHlwZSwgU3RhdGVDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IE11bHRpQ2FydEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvbXVsdGktY2FydC5lZmZlY3QnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlDYXJ0U3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBTdGF0ZUNvbmZpZyA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgc3RvcmFnZVN5bmM6IHtcbiAgICAgICAga2V5czoge1xuICAgICAgICAgIFtgJHtNVUxUSV9DQVJUX0ZFQVRVUkV9LmFjdGl2ZWBdOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKE1VTFRJX0NBUlRfRkVBVFVSRSwgbXVsdGlDYXJ0UmVkdWNlclRva2VuLCB7XG4gICAgICBtZXRhUmVkdWNlcnM6IG11bHRpQ2FydE1ldGFSZWR1Y2VycyxcbiAgICB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW011bHRpQ2FydEVmZmVjdHNdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkobXVsdGlDYXJ0U3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0U3RvcmVNb2R1bGUge31cbiJdfQ==