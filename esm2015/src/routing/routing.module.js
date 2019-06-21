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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1CaEQsTUFBTSxPQUFPLGFBQWE7OztZQWpCekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQztvQkFDckQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQzt3QkFDbEMsUUFBUSxFQUFFLGVBQWU7cUJBQzFCLENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Y7d0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsXG4gIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZSxcbn0gZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzTW9kdWxlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL3N0b3JlL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tU2VyaWFsaXplcixcbiAgcmVkdWNlclByb3ZpZGVyLFxuICByZWR1Y2VyVG9rZW4sXG59IGZyb20gJy4vc3RvcmUvcmVkdWNlcnMvcm91dGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi9zdG9yZS9zdGF0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShST1VUSU5HX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIHN0YXRlS2V5OiBST1VUSU5HX0ZFQVRVUkUsIC8vIG5hbWUgb2YgcmVkdWNlciBrZXlcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcmVkdWNlclByb3ZpZGVyLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJvdXRlclN0YXRlU2VyaWFsaXplcixcbiAgICAgIHVzZUNsYXNzOiBDdXN0b21TZXJpYWxpemVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge31cbiJdfQ==