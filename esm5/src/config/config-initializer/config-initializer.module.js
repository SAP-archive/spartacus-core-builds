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
    var isReady = (/**
     * @return {?}
     */
    function () { return configInitializer.initialize(initializers); });
    return isReady;
}
var ConfigInitializerModule = /** @class */ (function () {
    function ConfigInitializerModule() {
    }
    /**
     * @return {?}
     */
    ConfigInitializerModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    ConfigInitializerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [CommonModule],
                },] }
    ];
    return ConfigInitializerModule;
}());
export { ConfigInitializerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLEVBRWYsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQ0FBZ0MsR0FFakMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRTlCLE1BQU0sVUFBVSx3QkFBd0IsQ0FDdEMsaUJBQTJDLEVBQzNDLFlBQWlDOztRQUUzQixPQUFPOzs7SUFBRyxjQUFNLE9BQUEsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUExQyxDQUEwQyxDQUFBO0lBQ2hFLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRDtJQUFBO0lBeUJBLENBQUM7Ozs7SUFwQlEsK0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxnQ0FBZ0M7b0JBQ3pDLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxVQUFVLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLEVBQUU7d0JBQ0osd0JBQXdCO3dCQUN4QixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUM7cUJBQ3JDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFzQkQsOEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXJCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBDT05GSUdfSU5JVElBTElaRVIsXG4gIENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICBDb25maWdJbml0aWFsaXplcixcbn0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnSW5pdGlhbGl6ZXJGYWN0b3J5KFxuICBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBpbml0aWFsaXplcnM6IENvbmZpZ0luaXRpYWxpemVyW11cbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4gY29uZmlnSW5pdGlhbGl6ZXIuaW5pdGlhbGl6ZShpbml0aWFsaXplcnMpO1xuICByZXR1cm4gaXNSZWFkeTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdJbml0aWFsaXplck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICAgICAgICAgIHVzZVZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0luaXRpYWxpemVyRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENPTkZJR19JTklUSUFMSVpFUl0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19