/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule, RouterStateSerializer, } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerToken, CustomSerializer, reducerProvider, } from './store/reducers/router.reducer';
import { effects } from './store/effects/index';
import { RouterModule } from '@angular/router';
import { RoutingService } from './facade/routing.service';
import { ROUTING_FEATURE } from './store/state';
import { ConfigurableRoutesModule } from './configurable-routes/configurable-routes.module';
export class RoutingModule {
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigurableRoutesModule,
                    RouterModule.forRoot([], {
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled',
                    }),
                    StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    StoreRouterConnectingModule.forRoot({
                        stateKey: ROUTING_FEATURE,
                    }),
                ],
                providers: [
                    RoutingService,
                    reducerProvider,
                    {
                        provide: RouterStateSerializer,
                        useClass: CustomSerializer,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLHFCQUFxQixHQUN0QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQXdCNUYsTUFBTSxPQUFPLGFBQWE7OztZQXRCekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO3dCQUN2Qix5QkFBeUIsRUFBRSxTQUFTO3dCQUNwQyxlQUFlLEVBQUUsU0FBUztxQkFDM0IsQ0FBQztvQkFDRixXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7b0JBQ3JELGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUNqQywyQkFBMkIsQ0FBQyxPQUFPLENBQUM7d0JBQ2xDLFFBQVEsRUFBRSxlQUFlO3FCQUMxQixDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxjQUFjO29CQUNkLGVBQWU7b0JBQ2Y7d0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZSxcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyLFxufSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICByZWR1Y2VyVG9rZW4sXG4gIEN1c3RvbVNlcmlhbGl6ZXIsXG4gIHJlZHVjZXJQcm92aWRlcixcbn0gZnJvbSAnLi9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlcic7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9zdG9yZS9lZmZlY3RzL2luZGV4JztcblxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNNb2R1bGUgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlndXJhYmxlLXJvdXRlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlndXJhYmxlUm91dGVzTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdLCB7XG4gICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAnZW5hYmxlZCcsXG4gICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICB9KSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFJPVVRJTkdfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgc3RhdGVLZXk6IFJPVVRJTkdfRkVBVFVSRSwgLy8gbmFtZSBvZiByZWR1Y2VyIGtleVxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSb3V0aW5nU2VydmljZSxcbiAgICByZWR1Y2VyUHJvdmlkZXIsXG4gICAge1xuICAgICAgcHJvdmlkZTogUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICAgICAgdXNlQ2xhc3M6IEN1c3RvbVNlcmlhbGl6ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7fVxuIl19