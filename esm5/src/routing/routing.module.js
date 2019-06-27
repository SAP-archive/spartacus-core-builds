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
    var result = (/**
     * @return {?}
     */
    function () { return service.init(); });
    return result;
}
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    /**
     * @return {?}
     */
    RoutingModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
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
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUVMLHFCQUFxQixFQUNyQiwyQkFBMkIsR0FDNUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFlBQVksR0FDYixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFeEQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxPQUFrQzs7UUFFNUIsTUFBTTs7O0lBQUcsY0FBTSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBZCxDQUFjLENBQUE7SUFDbkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUE4QkEsQ0FBQzs7OztJQW5CUSxxQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Y7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLElBQUksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTthQUNoRDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkE3QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7d0JBQ3JELGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO3dCQUNqQywyQkFBMkIsQ0FBQyxPQUFPLENBQUM7NEJBQ2xDLFdBQVcsaUJBQXFCOzRCQUNoQyxRQUFRLEVBQUUsZUFBZTt5QkFDMUIsQ0FBQztxQkFDSDtpQkFDRjs7SUFxQkQsb0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXBCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgUm91dGVyU3RhdGUsXG4gIFJvdXRlclN0YXRlU2VyaWFsaXplcixcbiAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLFxufSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9yb3V0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9zdG9yZS9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7XG4gIEN1c3RvbVNlcmlhbGl6ZXIsXG4gIHJlZHVjZXJQcm92aWRlcixcbiAgcmVkdWNlclRva2VuLFxufSBmcm9tICcuL3N0b3JlL3JlZHVjZXJzL3JvdXRlci5yZWR1Y2VyJztcbmltcG9ydCB7IFJPVVRJTkdfRkVBVFVSRSB9IGZyb20gJy4vc3RvcmUvcm91dGluZy1zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlndXJhYmxlUm91dGVzKFxuICBzZXJ2aWNlOiBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlXG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2VydmljZS5pbml0KCk7IC8vIHdvcmthcm91bmQgZm9yIEFPVCBjb21waWxhdGlvbiAoc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MTk3NzExNSlcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoUk9VVElOR19GRUFUVVJFLCByZWR1Y2VyVG9rZW4pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBTdG9yZVJvdXRlckNvbm5lY3RpbmdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICByb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGUuTWluaW1hbCxcbiAgICAgIHN0YXRlS2V5OiBST1VUSU5HX0ZFQVRVUkUsIC8vIG5hbWUgb2YgcmVkdWNlciBrZXlcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um91dGluZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUm91dGluZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICByZWR1Y2VyUHJvdmlkZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsXG4gICAgICAgICAgdXNlQ2xhc3M6IEN1c3RvbVNlcmlhbGl6ZXIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogaW5pdENvbmZpZ3VyYWJsZVJvdXRlcyxcbiAgICAgICAgICBkZXBzOiBbQ29uZmlndXJhYmxlUm91dGVzU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHsgcHJvdmlkZTogUm91dGluZ0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=