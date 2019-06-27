/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule, } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { Config } from '../config/config.module';
import { RoutingConfig } from './configurable-routes/config/routing-config';
import { ConfigurableRoutesService } from './configurable-routes/configurable-routes.service';
import { effects } from './store/effects/index';
import { CustomSerializer, reducerProvider, reducerToken, } from './store/reducers/router.reducer';
import { ROUTING_FEATURE } from './store/routing-state';
/**
 * @param {?} service
 * @return {?}
 */
export function initConfigurableRoutes(service) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => service.init());
    return result;
}
export class RoutingModule {
    /**
     * @return {?}
     */
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
                { provide: RoutingConfig, useExisting: Config },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUVMLHFCQUFxQixFQUNyQiwyQkFBMkIsR0FDNUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFlBQVksR0FDYixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFeEQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7VUFFNUIsTUFBTTs7O0lBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFZRCxNQUFNLE9BQU8sYUFBYTs7OztJQUN4QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLHNCQUFzQjtvQkFDbEMsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTdCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQztvQkFDckQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQzt3QkFDbEMsV0FBVyxpQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRSxlQUFlO3FCQUMxQixDQUFDO2lCQUNIO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBSb3V0ZXJTdGF0ZSxcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICBTdG9yZVJvdXRlckNvbm5lY3RpbmdNb2R1bGUsXG59IGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlnL3JvdXRpbmctY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL3N0b3JlL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tU2VyaWFsaXplcixcbiAgcmVkdWNlclByb3ZpZGVyLFxuICByZWR1Y2VyVG9rZW4sXG59IGZyb20gJy4vc3RvcmUvcmVkdWNlcnMvcm91dGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgUk9VVElOR19GRUFUVVJFIH0gZnJvbSAnLi9zdG9yZS9yb3V0aW5nLXN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWd1cmFibGVSb3V0ZXMoXG4gIHNlcnZpY2U6IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Vcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzZXJ2aWNlLmluaXQoKTsgLy8gd29ya2Fyb3VuZCBmb3IgQU9UIGNvbXBpbGF0aW9uIChzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTc3MTE1KVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShST1VUSU5HX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZS5NaW5pbWFsLFxuICAgICAgc3RhdGVLZXk6IFJPVVRJTkdfRkVBVFVSRSwgLy8gbmFtZSBvZiByZWR1Y2VyIGtleVxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSb3V0aW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSb3V0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHJlZHVjZXJQcm92aWRlcixcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFJvdXRlclN0YXRlU2VyaWFsaXplcixcbiAgICAgICAgICB1c2VDbGFzczogQ3VzdG9tU2VyaWFsaXplcixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBpbml0Q29uZmlndXJhYmxlUm91dGVzLFxuICAgICAgICAgIGRlcHM6IFtDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBSb3V0aW5nQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==