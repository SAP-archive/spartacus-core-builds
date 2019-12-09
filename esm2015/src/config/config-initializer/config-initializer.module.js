/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule, Optional, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigInitializerService } from './config-initializer.service';
import { CONFIG_INITIALIZER, CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
/**
 * @param {?} configInitializer
 * @param {?} initializers
 * @return {?}
 */
export function configInitializerFactory(configInitializer, initializers) {
    /** @type {?} */
    const isReady = (/**
     * @return {?}
     */
    () => configInitializer.initialize(initializers));
    return isReady;
}
export class ConfigInitializerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ConfigInitializerModule,
            providers: [
                {
                    provide: CONFIG_INITIALIZER_FORROOT_GUARD,
                    useValue: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: configInitializerFactory,
                    deps: [
                        ConfigInitializerService,
                        [new Optional(), CONFIG_INITIALIZER],
                    ],
                },
            ],
        };
    }
}
ConfigInitializerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLEVBRWYsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQ0FBZ0MsR0FFakMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRTlCLE1BQU0sVUFBVSx3QkFBd0IsQ0FDdEMsaUJBQTJDLEVBQzNDLFlBQWlDOztVQUUzQixPQUFPOzs7SUFBRyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDaEUsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQU1ELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztvQkFDekMsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSx3QkFBd0I7b0JBQ3BDLElBQUksRUFBRTt3QkFDSix3QkFBd0I7d0JBQ3hCLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztxQkFDckM7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBDT05GSUdfSU5JVElBTElaRVIsXG4gIENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICBDb25maWdJbml0aWFsaXplcixcbn0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnSW5pdGlhbGl6ZXJGYWN0b3J5KFxuICBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBpbml0aWFsaXplcnM6IENvbmZpZ0luaXRpYWxpemVyW11cbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4gY29uZmlnSW5pdGlhbGl6ZXIuaW5pdGlhbGl6ZShpbml0aWFsaXplcnMpO1xuICByZXR1cm4gaXNSZWFkeTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdJbml0aWFsaXplck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICAgICAgICAgIHVzZVZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0luaXRpYWxpemVyRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENPTkZJR19JTklUSUFMSVpFUl0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19