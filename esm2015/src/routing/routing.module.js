/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule, } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ConfigurableRoutesModule } from './configurable-routes/configurable-routes.module';
import { effects } from './store/effects/index';
import { CustomSerializer, reducerProvider, reducerToken, } from './store/reducers/router.reducer';
import { ROUTING_FEATURE } from './store/state';
export class RoutingModule {
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigurableRoutesModule,
                    StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    StoreRouterConnectingModule.forRoot({
                        routerState: 1 /* Minimal */,
                        stateKey: ROUTING_FEATURE,
                    }),
                ],
                providers: [
                    reducerProvider,
                    {
                        provide: RouterStateSerializer,
                        useClass: CustomSerializer,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW9CaEQsTUFBTSxPQUFPLGFBQWE7OztZQWxCekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQztvQkFDckQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQzt3QkFDbEMsV0FBVyxpQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRSxlQUFlO3FCQUMxQixDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxlQUFlO29CQUNmO3dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgUm91dGVyU3RhdGUsXG4gIFJvdXRlclN0YXRlU2VyaWFsaXplcixcbiAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLFxufSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vc3RvcmUvZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQge1xuICBDdXN0b21TZXJpYWxpemVyLFxuICByZWR1Y2VyUHJvdmlkZXIsXG4gIHJlZHVjZXJUb2tlbixcbn0gZnJvbSAnLi9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlcic7XG5pbXBvcnQgeyBST1VUSU5HX0ZFQVRVUkUgfSBmcm9tICcuL3N0b3JlL3N0YXRlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFJPVVRJTkdfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcm91dGVyU3RhdGU6IFJvdXRlclN0YXRlLk1pbmltYWwsXG4gICAgICBzdGF0ZUtleTogUk9VVElOR19GRUFUVVJFLCAvLyBuYW1lIG9mIHJlZHVjZXIga2V5XG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHJlZHVjZXJQcm92aWRlcixcbiAgICB7XG4gICAgICBwcm92aWRlOiBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsXG4gICAgICB1c2VDbGFzczogQ3VzdG9tU2VyaWFsaXplcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=