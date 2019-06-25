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
import { ROUTING_FEATURE } from './store/routing-state';
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
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
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhEO0lBQUE7SUFrQjRCLENBQUM7O2dCQWxCNUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7d0JBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQzt3QkFDckQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7d0JBQ2pDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQzs0QkFDbEMsV0FBVyxpQkFBcUI7NEJBQ2hDLFFBQVEsRUFBRSxlQUFlO3lCQUMxQixDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRTt3QkFDVCxlQUFlO3dCQUNmOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7eUJBQzNCO3FCQUNGO2lCQUNGOztJQUMyQixvQkFBQztDQUFBLEFBbEI3QixJQWtCNkI7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBSb3V0ZXJTdGF0ZSxcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICBTdG9yZVJvdXRlckNvbm5lY3RpbmdNb2R1bGUsXG59IGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSB9IGZyb20gJy4vY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9zdG9yZS9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7XG4gIEN1c3RvbVNlcmlhbGl6ZXIsXG4gIHJlZHVjZXJQcm92aWRlcixcbiAgcmVkdWNlclRva2VuLFxufSBmcm9tICcuL3N0b3JlL3JlZHVjZXJzL3JvdXRlci5yZWR1Y2VyJztcbmltcG9ydCB7IFJPVVRJTkdfRkVBVFVSRSB9IGZyb20gJy4vc3RvcmUvcm91dGluZy1zdGF0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShST1VUSU5HX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZS5NaW5pbWFsLFxuICAgICAgc3RhdGVLZXk6IFJPVVRJTkdfRkVBVFVSRSwgLy8gbmFtZSBvZiByZWR1Y2VyIGtleVxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICByZWR1Y2VyUHJvdmlkZXIsXG4gICAge1xuICAgICAgcHJvdmlkZTogUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICAgICAgdXNlQ2xhc3M6IEN1c3RvbVNlcmlhbGl6ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7fVxuIl19