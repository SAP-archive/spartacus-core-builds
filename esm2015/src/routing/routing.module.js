import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule, } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ConfigurableRoutesService } from './configurable-routes/configurable-routes.service';
import { effects } from './store/effects/index';
import { CustomSerializer, reducerProvider, reducerToken, } from './store/reducers/router.reducer';
import { ROUTING_FEATURE } from './store/routing-state';
export function initConfigurableRoutes(service) {
    const result = () => service.init(); // workaround for AOT compilation (see https://stackoverflow.com/a/51977115)
    return result;
}
export class RoutingModule {
    static forRoot() {
        return {
            ngModule: RoutingModule,
            providers: [
                reducerProvider,
                {
                    provide: RouterStateSerializer,
                    useClass: CustomSerializer,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: initConfigurableRoutes,
                    deps: [ConfigurableRoutesService],
                    multi: true,
                },
            ],
        };
    }
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    StoreRouterConnectingModule.forRoot({
                        routerState: 1 /* Minimal */,
                        stateKey: ROUTING_FEATURE,
                    }),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9yb3V0aW5nL3JvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsT0FBa0M7SUFFbEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsNEVBQTRFO0lBQ2pILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFZRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLHNCQUFzQjtvQkFDbEMsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBNUJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUNyRCxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDakMsMkJBQTJCLENBQUMsT0FBTyxDQUFDO3dCQUNsQyxXQUFXLGlCQUFxQjt3QkFDaEMsUUFBUSxFQUFFLGVBQWU7cUJBQzFCLENBQUM7aUJBQ0g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7XG4gIFJvdXRlclN0YXRlLFxuICBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsXG4gIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZSxcbn0gZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vc3RvcmUvZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQge1xuICBDdXN0b21TZXJpYWxpemVyLFxuICByZWR1Y2VyUHJvdmlkZXIsXG4gIHJlZHVjZXJUb2tlbixcbn0gZnJvbSAnLi9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlcic7XG5pbXBvcnQgeyBST1VUSU5HX0ZFQVRVUkUgfSBmcm9tICcuL3N0b3JlL3JvdXRpbmctc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyhcbiAgc2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZVxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHNlcnZpY2UuaW5pdCgpOyAvLyB3b3JrYXJvdW5kIGZvciBBT1QgY29tcGlsYXRpb24gKHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTE5NzcxMTUpXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFJPVVRJTkdfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcm91dGVyU3RhdGU6IFJvdXRlclN0YXRlLk1pbmltYWwsXG4gICAgICBzdGF0ZUtleTogUk9VVElOR19GRUFUVVJFLCAvLyBuYW1lIG9mIHJlZHVjZXIga2V5XG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRpbmdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJvdXRpbmdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcmVkdWNlclByb3ZpZGVyLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICAgICAgICAgIHVzZUNsYXNzOiBDdXN0b21TZXJpYWxpemVyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWd1cmFibGVSb3V0ZXMsXG4gICAgICAgICAgZGVwczogW0NvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=